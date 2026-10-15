import React, { useState } from 'react';
import { ArtProject } from '../types';
import { Search, MapPin, Award, ArrowUpRight } from 'lucide-react';
import { CATALOG_CATEGORIES } from '../data/catalog';
import { getProjectImageFallbacks } from '../utils/imageFallback';

interface IndexGridProps {
  photos: ArtProject[];
  onSelectPhoto: (photo: ArtProject) => void;
  onInspectPhoto: (photo: ArtProject) => void;
  isDark: boolean;
}

export const IndexGrid: React.FC<IndexGridProps> = ({
  photos,
  onInspectPhoto,
  isDark,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos os Projetos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = photos.filter((p) => {
    const matchesCategory =
      selectedCategory === 'Todos os Projetos' ||
      p.series.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      selectedCategory.toLowerCase().includes(p.series.toLowerCase());
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.client.toLowerCase().includes(q) ||
      p.medium.toLowerCase().includes(q) ||
      p.support.toLowerCase().includes(q) ||
      p.series.toLowerCase().includes(q) ||
      (p.finish && p.finish.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <div id="index-grid-view" className="pt-[85px] px-4 sm:px-8 md:px-12 pb-28 max-w-7xl mx-auto min-h-screen">
      {/* Index Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <span className="font-mono-data text-xs uppercase tracking-[0.25em] text-copa-primary font-bold block mb-2">
            copacabanabrasil • Acervo de Projetos
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Catálogo Geral de Estratégia, Branding & Design
          </h1>
          <p className="font-sans text-xs sm:text-sm text-neutral-400 mt-2 max-w-2xl">
            Arquivo com mais de 25 anos de apresentações, marcas, brand books, one pagers, anúncios e sistemas visuais desenvolvidos pela boutique.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-88">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-copa-primary" />
          <input
            id="index-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por cliente (Carrefour, Disney, Mutant...)"
            className={`w-full pl-9 pr-4 py-2.5 rounded-full text-xs font-mono-data border transition-all outline-none ${
              isDark
                ? 'border-white/15 bg-white/5 focus:border-white/40 text-white placeholder:text-neutral-500'
                : 'border-neutral-300 bg-white focus:border-neutral-500 text-neutral-900 placeholder:text-neutral-400'
            }`}
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 py-6 overflow-x-auto no-scrollbar">
        {CATALOG_CATEGORIES.map((cat) => (
          <button
            key={cat}
            id={`index-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono-data uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-copa-primary text-white font-bold shadow-md'
                : 'opacity-60 hover:opacity-100 hover:bg-white/5 text-neutral-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Artwork Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
        {filtered.map((project) => (
          <div
            key={project.id}
            id={`index-card-${project.id}`}
            className="group flex flex-col justify-between rounded-xl border border-white/10 p-4 transition-all duration-300 hover:border-white/30 bg-white/[0.03] hover:bg-white/[0.06] cursor-pointer"
            onClick={() => onInspectPhoto(project)}
          >
            <div>
              {/* Image Thumbnail with Aspect Ratio Box */}
              <div className="relative overflow-hidden bg-neutral-950 rounded-lg aspect-16/10 mb-4 shadow-md">
                <img
                  key={project.thumbnailUrl || project.url}
                  src={project.thumbnailUrl || project.url}
                  onError={(e) => {
                    const img = e.currentTarget;
                    const step = Number(img.dataset.fallbackStep || '0');
                    const list = getProjectImageFallbacks(project.id, project.thumbnailUrl || project.url);
                    if (step < list.length) {
                      img.dataset.fallbackStep = String(step + 1);
                      img.src = list[step];
                    } else {
                      img.style.opacity = '0';
                    }
                  }}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {project.series.toLowerCase() === "logomarcas" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 opacity-30 z-10">
                    <span className="text-[12px] font-mono-data text-white uppercase tracking-widest text-center mb-1">
                      Espaço Logo
                    </span>
                    <span className="text-[9px] font-mono-data text-white/60 uppercase text-center break-all">
                      logomarcas-{project.client.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-thumb.jpg
                    </span>
                  </div>
                )}
                {/* Badges on Thumbnail (ocultos em mobile para imagem 100% limpa) */}
                <div className="hidden sm:flex absolute top-2 left-2 items-center gap-1.5">
                  <span className="bg-copa-primary text-white font-bold text-[10px] font-mono-data px-2 py-0.5 rounded uppercase shadow">
                    {project.client}
                  </span>
                  {project.slideNumber && project.category !== 'logomarcas' && project.series.toLowerCase() !== 'logomarcas' && (
                    <span className="bg-black/80 backdrop-blur-md text-copa-primary text-[9px] font-mono-data px-1.5 py-0.5 rounded border border-white/10">
                      #{project.slideNumber}
                    </span>
                  )}
                </div>

                {project.awardBadge && (
                  <div className="hidden sm:flex absolute bottom-2 left-2 bg-black/80 backdrop-blur-md text-white text-[9px] font-mono-data px-2 py-0.5 rounded border border-white/20 uppercase items-center gap-1">
                    <Award className="w-2.5 h-2.5 text-copa-primary" />
                    <span>{project.awardBadge}</span>
                  </div>
                )}

                {/* Hover Arrow Indicator */}
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-3.5 h-3.5 text-copa-primary" />
                </div>
              </div>

              {/* Text Specs */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono-data text-copa-primary">
                  <span>{project.series}</span>
                </div>

                <h3 className="font-heading font-bold text-lg leading-snug group-hover:text-copa-primary transition-colors text-white">
                  {project.title}
                </h3>

                <p className="font-sans text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Bottom Card Footer: Placement */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-data">
              <span className="text-neutral-400 truncate max-w-[200px] flex items-center gap-1 text-[11px]">
                <MapPin className="w-3 h-3 text-copa-primary" />
                {project.support}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="font-mono-data text-sm opacity-50 text-neutral-400">
            Nenhum projeto encontrado para os filtros aplicados.
          </p>
        </div>
      )}
    </div>
  );
};
