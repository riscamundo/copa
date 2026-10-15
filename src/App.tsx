import React, { useState, useEffect } from 'react';
import { ArtProject, ViewMode, ThemeMode, PdfPalettePreset, PdfFontPreset } from './types';
import { INITIAL_PROJECTS } from './data/catalog';
import { PDF_PALETTES, PDF_FONTS } from './data/pdfPresets';
import { Header } from './components/Header';
import { FullWidthFeed } from './components/FullWidthFeed';
import { ProjectPresentation } from './components/ProjectPresentation';
import { IndexGrid } from './components/IndexGrid';
import { SolutionsView } from './components/SolutionsView';
import { CopalogiaView } from './components/CopalogiaView';
import { UploadPhotoModal } from './components/UploadPhotoModal';
import { PdfAppearanceModal } from './components/PdfAppearanceModal';
import { ContactSection } from './components/ContactSection';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { 
  getStoredCoverOverrides, 
  saveCoverOverride, 
  getStoredUserProjects, 
  saveStoredUserProjects 
} from './utils/persistentStorage';

const STORAGE_KEY = 'copacabana_projects_catalog_v2';
const COVER_OVERRIDES_KEY = 'copacabana_cover_overrides_v1';
const PALETTE_STORAGE_KEY = 'copacabana_pdf_palette_v1';
const FONT_STORAGE_KEY = 'copacabana_pdf_font_v1';

export default function App() {
  const [photos, setPhotos] = useState<ArtProject[]>(() => {
    let baseProjects = INITIAL_PROJECTS;
    try {
      const overridesRaw = localStorage.getItem(COVER_OVERRIDES_KEY);
      if (overridesRaw) {
        const overrides: Record<string, string> = JSON.parse(overridesRaw);
        baseProjects = baseProjects.map((p) =>
          overrides[p.id] ? { ...p, url: overrides[p.id], thumbnailUrl: overrides[p.id] } : p
        );
      }
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...baseProjects];
        }
      }
    } catch (err) {
      console.warn('Erro ao carregar projetos locais:', err);
    }
    return baseProjects;
  });

  // Carrega overrides e projetos persistidos do IndexedDB (sem restrição dos 5MB do localStorage)
  useEffect(() => {
    let isMounted = true;
    async function loadIndexedDbData() {
      try {
        const [dbOverrides, dbProjects] = await Promise.all([
          getStoredCoverOverrides(),
          getStoredUserProjects()
        ]);
        if (!isMounted) return;

        setPhotos((current) => {
          let updated = current.map((p) =>
            dbOverrides[p.id] ? { ...p, url: dbOverrides[p.id], thumbnailUrl: dbOverrides[p.id] } : p
          );

          if (dbProjects && dbProjects.length > 0) {
            const existingIds = new Set(updated.map((p) => p.id));
            const newToAdd = dbProjects.filter((p) => !existingIds.has(p.id));
            if (newToAdd.length > 0) {
              updated = [...newToAdd, ...updated];
            }
          }
          return updated;
        });
      } catch (e) {
        console.warn('[Storage] Falha ao hidratar do IndexedDB:', e);
      }
    }
    loadIndexedDbData();
    return () => {
      isMounted = false;
    };
  }, []);

  const [currentView, setCurrentView] = useState<ViewMode>(() => {
    const hash = window.location.hash.replace('#', '');
    if (['fullwidth', 'presentation', 'solucoes', 'copalogia'].includes(hash)) {
      return hash as ViewMode;
    }
    return 'fullwidth';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['fullwidth', 'presentation', 'solucoes', 'copalogia'].includes(hash)) {
        setCurrentView(hash as ViewMode);
      } else {
        setCurrentView('fullwidth');
      }
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 10);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const [selectedPhoto, setSelectedPhoto] = useState<ArtProject>(INITIAL_PROJECTS[0]);
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [zenMode, setZenMode] = useState<boolean>(false);
  const [isUploadOpen, setIsUploadOpen] = useState<boolean>(false);
  const [isAppearanceOpen, setIsAppearanceOpen] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title?: string; subtitle?: string } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // PDF Appearance Presets State
  const [selectedPalette, setSelectedPalette] = useState<PdfPalettePreset>(() => {
    try {
      const saved = localStorage.getItem(PALETTE_STORAGE_KEY);
      if (saved) {
        const found = PDF_PALETTES.find((p) => p.id === saved);
        if (found) return found;
      }
    } catch (e) {
      console.warn(e);
    }
    return PDF_PALETTES[0]; // Default: Laranja Solar Original do Deck (#ff4d00)
  });

  const [selectedFont, setSelectedFont] = useState<PdfFontPreset>(() => {
    try {
      const saved = localStorage.getItem(FONT_STORAGE_KEY);
      if (saved) {
        const found = PDF_FONTS.find((f) => f.id === saved);
        if (found) return found;
      }
    } catch (e) {
      console.warn(e);
    }
    return PDF_FONTS[0]; // Default: Monumental do Deck (Montserrat + Plus Jakarta Sans)
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleZenMode = () => {
    setZenMode((prev) => !prev);
  };

  const handleSelectPalette = (pal: PdfPalettePreset) => {
    setSelectedPalette(pal);
    try {
      localStorage.setItem(PALETTE_STORAGE_KEY, pal.id);
    } catch (e) {
      console.warn(e);
    }
    showToast(`Paleta aplicada: ${pal.name}`);
  };

  const handleSelectFont = (fnt: PdfFontPreset) => {
    setSelectedFont(fnt);
    try {
      localStorage.setItem(FONT_STORAGE_KEY, fnt.id);
    } catch (e) {
      console.warn(e);
    }
    showToast(`Tipografia aplicada: ${fnt.name}`);
  };

  const handleResetAppearance = () => {
    setSelectedPalette(PDF_PALETTES[0]);
    setSelectedFont(PDF_FONTS[0]);
    try {
      localStorage.removeItem(PALETTE_STORAGE_KEY);
      localStorage.removeItem(FONT_STORAGE_KEY);
    } catch (e) {
      console.warn(e);
    }
    showToast('Restaurado padrão original do deck copacabanabrasil');
  };

  const handleInspectPhoto = (photo: ArtProject) => {
    setSelectedPhoto(photo);
    setCurrentView('presentation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddPhoto = (newProject: ArtProject) => {
    const updated = [newProject, ...photos];
    setPhotos(updated);
    // Salva no IndexedDB com fallback seguro
    saveStoredUserProjects(updated).catch((err) => {
      console.warn('[App] Erro ao persistir projeto:', err);
    });
    setSelectedPhoto(newProject);
    setCurrentView('fullwidth');
    showToast('Novo projeto publicado com sucesso no catálogo!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateProjectCover = (projectId: string, newCoverUrl: string) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, url: newCoverUrl, thumbnailUrl: newCoverUrl } : p))
    );
    setSelectedPhoto((prev) =>
      prev.id === projectId ? { ...prev, url: newCoverUrl, thumbnailUrl: newCoverUrl } : prev
    );
    // Salva no IndexedDB (sem limite de 5MB) e trata suavemente localStorage
    saveCoverOverride(projectId, newCoverUrl).catch((err) => {
      console.warn('[App] Erro ao persistir capa:', err);
    });
    showToast('Capa do projeto atualizada com sucesso!');
  };

  // Synchronize CSS Variables & Document Theme
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--copa-primary', selectedPalette.primary);
    root.style.setProperty('--copa-primary-hover', selectedPalette.primaryHover);
    root.style.setProperty('--copa-primary-glow', selectedPalette.primaryGlow);
    root.style.setProperty('--copa-primary-subtle', selectedPalette.primarySubtle);
    root.style.setProperty('--copa-primary-border', selectedPalette.primaryBorder);
    root.style.setProperty('--copa-bg-dark', selectedPalette.bgDark);
    root.style.setProperty('--copa-surface-dark', selectedPalette.surfaceDark);
    root.style.setProperty('--copa-surface-card', selectedPalette.cardDark);
    root.style.setProperty('--font-display', selectedFont.displayFont);
    root.style.setProperty('--font-heading', selectedFont.headingFont);
    root.style.setProperty('--font-sans', selectedFont.bodyFont);

    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = selectedPalette.bgDark;
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#fafafa';
    }
  }, [selectedPalette, selectedFont, theme]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (e.key === 'Escape') {
        if (lightboxImage) {
          setLightboxImage(null);
        } else if (isAppearanceOpen) {
          setIsAppearanceOpen(false);
        } else if (isUploadOpen) {
          setIsUploadOpen(false);
        } else if (zenMode) {
          setZenMode(false);
        }
      } else if (e.key.toLowerCase() === 'z' && !e.ctrlKey && !e.metaKey) {
        if (currentView !== 'presentation') {
          setCurrentView('presentation');
        }
      } else if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.metaKey) {
        setIsAppearanceOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUploadOpen, isAppearanceOpen, zenMode, currentView, lightboxImage]);

  // Global Delegated Click Listener to open Lightbox on any view when clicking an image
  useEffect(() => {
    const handleDocumentImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignore buttons, links, header, form inputs, or clicks inside the lightbox overlay itself
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('#main-header') ||
        target.closest('#image-lightbox-overlay')
      ) {
        return;
      }

      // Check if clicked element is an <img> or has an <img> inside
      const img = target.tagName === 'IMG' ? (target as HTMLImageElement) : (target.querySelector('img') as HTMLImageElement | null);
      if (img && img.src && !img.src.endsWith('.svg') && !img.src.includes('data:image/svg')) {
        setLightboxImage({
          url: img.src,
          title: img.alt || 'Visualização Ampliada',
        });
      }
    };

    document.addEventListener('click', handleDocumentImageClick);
    return () => document.removeEventListener('click', handleDocumentImageClick);
  }, []);

  const isDark = theme === 'dark';
  const activeColor = selectedPalette.primary;

  return (
    <div
      id="app-root-container"
      className={`relative min-h-screen transition-colors duration-300 font-sans selection:bg-neutral-200 selection:text-neutral-900 ${
        isDark ? 'text-[#ededed]' : 'text-[#141414]'
      }`}
      style={{
        backgroundColor: isDark ? selectedPalette.bgDark : '#fafafa',
        fontFamily: selectedFont.bodyFont,
      }}
    >
      {/* Global Looping Image Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('./assets/imagens/PORTIFOLIO%20COPACABANA%20BRASIL%20NOV%202025.pptx.png')`
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Navigation Header */}
        <Header
        currentView={currentView}
        onViewChange={(mode) => {
          window.location.hash = mode;
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenUpload={() => setIsUploadOpen(true)}
        totalPhotos={photos.length}
        zenMode={zenMode}
        onToggleZenMode={handleToggleZenMode}
        onOpenAppearance={() => setIsAppearanceOpen(true)}
        activeColor={activeColor}
      />

      {/* Main View Area */}
      <main id="main-content" className="w-full">
        {currentView === 'fullwidth' && (
          <FullWidthFeed
            photos={photos}
            onInspectPhoto={handleInspectPhoto}
            isDark={isDark}
            activeColor={activeColor}
          />
        )}

        {currentView === 'presentation' && (
          <ProjectPresentation
            project={selectedPhoto}
            isDark={isDark}
            activeColor={activeColor}
            onClose={() => setCurrentView('fullwidth')}
          />
        )}

        {currentView === 'index' && (
          <IndexGrid
            photos={photos}
            onSelectPhoto={(p) => setSelectedPhoto(p)}
            onInspectPhoto={handleInspectPhoto}
            isDark={isDark}
          />
        )}

        {currentView === 'solucoes' && (
          <SolutionsView
            allPhotos={photos}
            onInspectPhoto={handleInspectPhoto}
            onNavigateToCategory={() => {
              setCurrentView('fullwidth');
              window.scrollTo({ top: 400, behavior: 'smooth' });
            }}
            isDark={isDark}
          />
        )}

        {currentView === 'copalogia' && (
          <CopalogiaView
            onExploreProjects={() => {
              setCurrentView('fullwidth');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            isDark={isDark}
          />
        )}
      </main>

      {/* PDF Appearance Fine-Tuning Modal */}
      <PdfAppearanceModal
        isOpen={isAppearanceOpen}
        onClose={() => setIsAppearanceOpen(false)}
        selectedPalette={selectedPalette}
        onSelectPalette={handleSelectPalette}
        selectedFont={selectedFont}
        onSelectFont={handleSelectFont}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onResetToDefaults={handleResetAppearance}
      />

      {/* Upload / Add Project Modal */}
      <UploadPhotoModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onAddPhoto={handleAddPhoto}
        isDark={isDark}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div
          id="app-toast-alert"
          className="fixed bottom-6 left-6 z-50 text-white font-mono-data text-xs px-4 py-2.5 rounded-full shadow-2xl backdrop-blur-md animate-bounce flex items-center gap-2"
          style={{ backgroundColor: activeColor }}
        >
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {!zenMode && (currentView === 'fullwidth' || currentView === 'index' || currentView === 'solucoes' || currentView === 'copalogia') && <ContactSection isDark={isDark} activeColor={activeColor} />}
      {/* Editorial Boutique Footer */}
      {!zenMode && (currentView === 'fullwidth' || currentView === 'index' || currentView === 'solucoes' || currentView === 'copalogia') && (
        <footer
          id="catalog-footer"
          className={`w-full py-16 px-6 sm:px-12 md:px-16 border-t mt-20 transition-colors duration-300 ${
            isDark ? 'border-white/10 text-neutral-400' : 'border-neutral-200 bg-neutral-100 text-neutral-600'
          }`}
          style={{
            backgroundColor: isDark ? selectedPalette.surfaceDark : '#f5f5f5',
          }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-heading text-xl tracking-tight text-white font-extrabold">
                    copacabana<span style={{ color: activeColor }}>brasil</span>
                  </div>
                  <p
                    className="text-[11px] font-mono-data uppercase tracking-widest"
                    style={{ color: activeColor }}
                  >
                    Boutique de Estratégia, Branding & Design
                  </p>
                </div>
              </div>
              <p className="text-xs font-sans text-neutral-400 mt-3 max-w-md leading-relaxed">
                Há mais de 25 anos acelerando marcas de todos os tamanhos. Transformamos visão em posicionamento, ideias em presença e negócios em potências.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs font-mono-data uppercase tracking-wider text-neutral-400">
              <a href="#fullwidth" className="hover:text-white transition-colors cursor-pointer">
                Projetos
              </a>
              <button onClick={() => { setCurrentView('fullwidth'); setTimeout(() => { const el = document.getElementById('section-solucoes'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }, 100); }} className="hover:text-white transition-colors cursor-pointer">
                Soluções
              </button>
              <button onClick={() => { setCurrentView('fullwidth'); setTimeout(() => { const el = document.getElementById('section-copalogia'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); }, 100); }} className="hover:text-white transition-colors cursor-pointer">
                Copalogia
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-data text-neutral-500 gap-3">
            <div>
              <span>copacabanabrasil • </span>
              <a href="https://riscamundo.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">
                Powered by Riscamundo
              </a>
            </div>
            <div>
              <span>© {new Date().getFullYear()} copacabanabrasil. Parceria real e construção conjunta.</span>
            </div>
          </div>
        </footer>
      )}
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5511985077273?text=ola,%20venho%20do%20site%20copacabana" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.4)] transition-all hover:scale-110 cursor-pointer"
        title="Fale conosco no WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
      {/* Lightbox Modal para ampliação de imagens em todas as views sem sair da página */}
      <ImageLightboxModal
        isOpen={Boolean(lightboxImage)}
        onClose={() => setLightboxImage(null)}
        imageUrl={lightboxImage?.url || ''}
        title={lightboxImage?.title}
        subtitle={lightboxImage?.subtitle}
        activeColor={activeColor}
      />
      </div>
    </div>
  );
}
