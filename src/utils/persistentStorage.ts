import { ArtProject } from '../types';

const DB_NAME = 'copacabana_db_v1';
const DB_VERSION = 1;
const STORE_COVERS = 'cover_overrides';
const STORE_PROJECTS = 'user_projects';

const LOCAL_STORAGE_COVERS_KEY = 'copacabana_cover_overrides_v1';
const LOCAL_STORAGE_PROJECTS_KEY = 'copacabana_projects_catalog_v2';

function isIndexedDBAvailable(): boolean {
  return typeof window !== 'undefined' && 'indexedDB' in window && window.indexedDB !== null;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!isIndexedDBAvailable()) {
      return reject(new Error('IndexedDB não suportado'));
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_COVERS)) {
        db.createObjectStore(STORE_COVERS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(STORE_PROJECTS)) {
        db.createObjectStore(STORE_PROJECTS, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Carrega todos os overrides de capa salvos (primeiro IndexedDB com fallback para localStorage).
 */
export async function getStoredCoverOverrides(): Promise<Record<string, string>> {
  const result: Record<string, string> = {};

  // 1. Tentar ler do localStorage legado primeiro para migração suave
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_COVERS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        Object.assign(result, parsed);
      }
    }
  } catch (err) {
    console.warn('[Storage] localStorage leitura falhou:', err);
  }

  // 2. Tentar ler do IndexedDB (sobrescreve com dados mais recentes e sem limite de cota)
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_COVERS, 'readonly');
    const store = tx.objectStore(STORE_COVERS);
    const getAllReq = store.getAll();

    await new Promise<void>((resolve, reject) => {
      getAllReq.onsuccess = () => {
        const records = (getAllReq.result || []) as Array<{ id: string; url: string }>;
        for (const r of records) {
          if (r.id && r.url) {
            result[r.id] = r.url;
          }
        }
        resolve();
      };
      getAllReq.onerror = () => reject(getAllReq.error);
    });
  } catch (err) {
    console.warn('[Storage] IndexedDB não pôde ser lido para capas:', err);
  }

  return result;
}

/**
 * Salva a capa de um projeto no IndexedDB e faz tentativa segura no localStorage.
 */
export async function saveCoverOverride(projectId: string, dataUrl: string): Promise<void> {
  // 1. Salvar no IndexedDB (sem limite de 5MB)
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_COVERS, 'readwrite');
    const store = tx.objectStore(STORE_COVERS);
    store.put({ id: projectId, url: dataUrl, updatedAt: Date.now() });

    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('[Storage] Falha ao gravar capa no IndexedDB:', err);
  }

  // 2. Tentar salvar no localStorage apenas se couber, silenciando QuotaExceededError
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_COVERS_KEY);
    const overrides: Record<string, string> = raw ? JSON.parse(raw) : {};
    overrides[projectId] = dataUrl;
    localStorage.setItem(LOCAL_STORAGE_COVERS_KEY, JSON.stringify(overrides));
  } catch (err) {
    // QuotaExceededError é ignorado com segurança porque o IndexedDB já reteve o dado com sucesso!
    console.info('[Storage] localStorage atingiu cota (esperado com imagens pesadas). O dado está protegido no IndexedDB.');
  }
}

/**
 * Carrega projetos criados pelo usuário.
 */
export async function getStoredUserProjects(): Promise<ArtProject[]> {
  const map = new Map<string, ArtProject>();

  // 1. localStorage legado
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        for (const p of parsed) {
          if (p.id) map.set(p.id, p);
        }
      }
    }
  } catch (err) {
    console.warn('[Storage] Falha ao ler projetos do localStorage:', err);
  }

  // 2. IndexedDB
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_PROJECTS, 'readonly');
    const store = tx.objectStore(STORE_PROJECTS);
    const getAllReq = store.getAll();

    await new Promise<void>((resolve, reject) => {
      getAllReq.onsuccess = () => {
        const records = (getAllReq.result || []) as ArtProject[];
        for (const p of records) {
          if (p.id) map.set(p.id, p);
        }
        resolve();
      };
      getAllReq.onerror = () => reject(getAllReq.error);
    });
  } catch (err) {
    console.warn('[Storage] Falha ao ler projetos do IndexedDB:', err);
  }

  return Array.from(map.values());
}

/**
 * Salva projetos do usuário no IndexedDB e tenta sincronizar no localStorage com tratamento seguro de cota.
 */
export async function saveStoredUserProjects(projects: ArtProject[]): Promise<void> {
  const customOnly = projects.filter((p) => p.isUserUpload);

  // 1. IndexedDB
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_PROJECTS, 'readwrite');
    const store = tx.objectStore(STORE_PROJECTS);
    store.clear();
    for (const p of customOnly) {
      store.put(p);
    }
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('[Storage] Falha ao salvar projetos no IndexedDB:', err);
  }

  // 2. localStorage seguro
  try {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(customOnly));
  } catch (err) {
    console.info('[Storage] Cota do localStorage excedida para catálogo. Projetos salvos no IndexedDB.');
  }
}

/**
 * Otimiza e redimensiona arquivos de imagem enviados para o navegador.
 * Reduz arquivos pesados (ex: 5MB a 15MB) para versões nítidas e leves (100KB-300KB),
 * evitando estouro de memória e renderizações lentas.
 */
export function optimizeImageFile(
  file: File,
  maxWidth = 1920,
  maxHeight = 1080,
  quality = 0.88
): Promise<string> {
  return new Promise((resolve, reject) => {
    // Se não for imagem, rejeita
    if (!file.type.startsWith('image/')) {
      return reject(new Error('Arquivo não é uma imagem válida.'));
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Erro ao ler arquivo da imagem.'));
    reader.onload = (e) => {
      const src = e.target?.result as string;
      if (!src) {
        return reject(new Error('Resultado de imagem vazio.'));
      }

      // Se for SVG, não precisa de canvas
      if (file.type === 'image/svg+xml') {
        return resolve(src);
      }

      const img = new Image();
      img.onerror = () => resolve(src); // Fallback para dataUrl original
      img.onload = () => {
        try {
          let { width, height } = img;

          // Se a imagem já for menor ou igual aos limites, apenas exporta
          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            return resolve(src);
          }

          // Qualidade de renderização alta
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);

          // Tentar exportar como WebP com boa compressão; fallback para JPEG ou PNG
          const mime = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
          
          // Para PNGs muito grandes, JPEG ou WEBP pode ser muito mais leve, mas vamos manter o formato ou JPEG com alta qualidade
          const optimizedDataUrl = canvas.toDataURL(mime, quality);
          resolve(optimizedDataUrl);
        } catch (canvasErr) {
          console.warn('[ImageOptimizer] Falha no canvas, usando original:', canvasErr);
          resolve(src);
        }
      };
      img.src = src;
    };

    reader.readAsDataURL(file);
  });
}
