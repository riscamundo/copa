import React, { useState, useRef } from 'react';
import { ArtProject } from '../types';
import { X, Upload, Check } from 'lucide-react';
import { CATALOG_CATEGORIES } from '../data/catalog';
import { optimizeImageFile } from '../utils/persistentStorage';

interface UploadPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPhoto: (newPhoto: ArtProject) => void;
  isDark: boolean;
}

export const UploadPhotoModal: React.FC<UploadPhotoModalProps> = ({
  isOpen,
  onClose,
  onAddPhoto,
  isDark,
}) => {
  const [client, setClient] = useState('');
  const [title, setTitle] = useState('');
  const [series, setSeries] = useState(CATALOG_CATEGORIES[1]);
  const [medium, setMedium] = useState('Pitch Deck Executivo & Apresentação Comercial');
  const [dimensions, setDimensions] = useState('Widescreen 16:9 • Full HD / 4K');
  const [support, setSupport] = useState('Reuniões C-Level & Captação');
  const [techniqueDetails, setTechniqueDetails] = useState('Narrativa visual estratégica, grid modular e tipografia de alto impacto');
  const [finish, setFinish] = useState('');
  const [awardBadge, setAwardBadge] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [curatorNote, setCuratorNote] = useState('');
  const [creationCredits, setCreationCredits] = useState('Direção Criativa & Design copacabanabrasil');
  const [mediaCredits, setMediaCredits] = useState('Estratégia de Posicionamento & Go-to-Market');
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFile = async (file: File) => {
    setErrorMessage(null);
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Por favor, selecione um arquivo de imagem válido (PNG, JPG, WebP ou SVG).');
      return;
    }
    try {
      const optimized = await optimizeImageFile(file, 1920, 1080, 0.88);
      setImageUrl(optimized);
      setPreviewUrl(optimized);
    } catch {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImageUrl(result);
        setPreviewUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalUrl = previewUrl || imageUrl;
    if (!finalUrl) {
      setErrorMessage('Por favor, faça upload de uma imagem ou insira a URL do projeto.');
      return;
    }

    const newProject: ArtProject = {
      id: `user-project-${Date.now()}`,
      client: client.trim() || 'Novo Cliente',
      title: title.trim() || 'Novo Projeto Estratégico',
      series: series || 'Apresentações',
      medium: medium.trim() || 'Design Estratégico & Apresentações',
      dimensions: dimensions.trim() || '16:9 Digital / Impresso',
      support: support.trim() || 'Nacional / Corporativo',
      techniqueDetails: techniqueDetails.trim() || 'Padrão copacabanabrasil com rigor gráfico e alinhamento consultivo',
      finish: finish.trim() || undefined,
      awardBadge: awardBadge.trim() || undefined,
      description: description.trim() || 'Projeto desenvolvido com metodologia Copalogia.',
      url: finalUrl,
      thumbnailUrl: finalUrl,
      aspectRatio: '16:9',
      colorPalette: [
        { hex: '#d97706', name: 'Âmbar Copacabana Oficial' },
        { hex: '#111215', name: 'Preto Asfalto' },
        { hex: '#ffffff', name: 'Branco Tipográfico' },
        { hex: '#94a3b8', name: 'Cinza Neutro' }
      ],
      credits: {
        creation: creationCredits.split(',').map((c) => c.trim()).filter(Boolean),
        account: ['Consultoria copacabanabrasil'],
        media: mediaCredits.split(',').map((m) => m.trim()).filter(Boolean)
      },
      curatorNote:
        curatorNote.trim() ||
        'Padrão copacabanabrasil: Grid modular, harmonia tipográfica e clareza da narrativa estratégica em formato Widescreen 16:9 4K.',
      isUserUpload: true,
    };

    onAddPhoto(newProject);
    onClose();
  };

  return (
    <div
      id="upload-campaign-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 transition-colors ${
          isDark ? 'bg-[#0f1115] border-white/15 text-neutral-100' : 'bg-white border-neutral-200 text-neutral-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d97706] to-[#b45309] flex items-center justify-center font-heading font-black text-white text-sm">
              +
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-white">
                Cadastrar Novo Projeto no Acervo
              </h2>
              <p className="font-mono-data text-xs text-amber-500 uppercase tracking-wider">
                copacabanabrasil • Estratégia, Branding & Design
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-200 text-xs font-mono-data flex items-center justify-between">
            <span>{errorMessage}</span>
            <button onClick={() => setErrorMessage(null)} className="text-red-300 hover:text-white ml-2">✕</button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-xs font-mono-data">
          {/* Image Upload Drag & Drop Area */}
          <div className="space-y-2">
            <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px]">
              Imagem / Slide Principal (Alta Resolução) *
            </label>

            <div
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                dragActive
                  ? 'border-amber-500 bg-amber-500/10'
                  : isDark
                  ? 'border-white/20 hover:border-white/40 bg-white/5'
                  : 'border-neutral-300 hover:border-neutral-500 bg-neutral-50'
              }`}
            >
              {previewUrl ? (
                <div className="space-y-3">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-h-52 mx-auto rounded-lg object-contain shadow-md"
                  />
                  <p className="opacity-70 text-[11px]">Clique para trocar o arquivo</p>
                </div>
              ) : (
                <div className="space-y-2 py-4">
                  <Upload className="w-8 h-8 mx-auto text-amber-500" />
                  <p className="font-medium text-sm text-white/90">
                    Arraste o arquivo de imagem do projeto ou clique para navegar
                  </p>
                  <p className="text-[10px] opacity-60">
                    Suporta PNG, JPG, WEBP de alta resolução (Widescreen 16:9 4K)
                  </p>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && handleFile(e.target.files[0])}
                className="hidden"
              />
            </div>

            {/* Alternative URL Input */}
            <div className="pt-2">
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setPreviewUrl(e.target.value);
                }}
                placeholder="Ou cole o link direto da imagem (URL https://...)"
                className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/5 focus:border-amber-500 text-white'
                    : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
                }`}
              />
            </div>
          </div>

          {/* Client & Project Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px]">
                Cliente / Marca *
              </label>
              <input
                type="text"
                required
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="Ex: Disney, Carrefour, Mutant, Ticket..."
                className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/5 focus:border-amber-500 text-white'
                    : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
                }`}
              />
            </div>

            <div className="space-y-1.5">
              <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px]">
                Título do Projeto *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex: Pitch Deck Institucional, Brand Guidelines..."
                className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/5 focus:border-amber-500 text-white'
                    : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
                }`}
              />
            </div>
          </div>

          {/* Series / Category & Medium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px]">
                Capítulo / Categoria *
              </label>
              <select
                value={series}
                onChange={(e) => setSeries(e.target.value)}
                className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all cursor-pointer ${
                  isDark
                    ? 'border-white/10 bg-[#16181d] focus:border-amber-500 text-white'
                    : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
                }`}
              >
                {CATALOG_CATEGORIES.filter((c) => c !== 'Todos os Projetos').map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px]">
                Meio & Formato
              </label>
              <input
                type="text"
                value={medium}
                onChange={(e) => setMedium(e.target.value)}
                placeholder="Ex: Pitch Deck 16:9, Guia de Identidade, One Pager..."
                className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/5 focus:border-amber-500 text-white'
                    : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
                }`}
              />
            </div>
          </div>

          {/* Dimensions & Application */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px]">
                Dimensões / Resolução
              </label>
              <input
                type="text"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                placeholder="Ex: Widescreen 16:9, A4 Digital, Manual 28 páginas"
                className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/5 focus:border-amber-500 text-white'
                    : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
                }`}
              />
            </div>

            <div className="space-y-1.5">
              <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px]">
                Aplicação / Contexto
              </label>
              <input
                type="text"
                value={support}
                onChange={(e) => setSupport(e.target.value)}
                placeholder="Ex: Reuniões Executivas C-Level, Força de Vendas"
                className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/5 focus:border-amber-500 text-white'
                    : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
                }`}
              />
            </div>
          </div>

          {/* Technique Details & Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px]">
                Padrão de Arte & Direção Criativa
              </label>
              <input
                type="text"
                value={techniqueDetails}
                onChange={(e) => setTechniqueDetails(e.target.value)}
                placeholder="Ex: Tipografia clean, infografia executiva, contraste equilibrado"
                className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/5 focus:border-amber-500 text-white'
                    : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
                }`}
              />
            </div>

            <div className="space-y-1.5">
              <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px]">
                Destaque / Reconhecimento (Opcional)
              </label>
              <input
                type="text"
                value={awardBadge}
                onChange={(e) => setAwardBadge(e.target.value)}
                placeholder="Ex: Pitch Vencedor, Aprovado Diretoria"
                className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all ${
                  isDark
                    ? 'border-white/10 bg-white/5 focus:border-amber-500 text-white'
                    : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
                }`}
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px]">
              Insight Estratégico & Descrição do Projeto
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva o desafio de posicionamento, soluções apresentadas e resultados obtidos..."
              className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all ${
                isDark
                  ? 'border-white/10 bg-white/5 focus:border-amber-500 text-white'
                  : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
              }`}
            />
          </div>

          {/* Curator Note / Art Standard */}
          <div className="space-y-1.5">
            <label className="uppercase tracking-wider opacity-70 block font-semibold text-[11px] text-amber-500">
              Diretriz de Direção de Arte & Padrão Visual
            </label>
            <textarea
              rows={2}
              value={curatorNote}
              onChange={(e) => setCuratorNote(e.target.value)}
              placeholder="Destaque pontos como precisão geométrica, alinhamento aos terços, legibilidade de diagramas..."
              className={`w-full p-2.5 rounded-lg border text-xs outline-none transition-all ${
                isDark
                  ? 'border-white/10 bg-white/5 focus:border-amber-500 text-white'
                  : 'border-neutral-300 bg-white focus:border-amber-500 text-neutral-900'
              }`}
            />
          </div>

          {/* Submit Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white/50 transition-all cursor-pointer uppercase text-xs"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all flex items-center gap-2 shadow-lg shadow-amber-500/25 cursor-pointer uppercase text-xs"
            >
              <Check className="w-4 h-4" />
              <span>Cadastrar no Portfólio</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
