import React from 'react';
import { 
  Sparkles,  
  ArrowRight,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { COPACABANA_SOLUTIONS } from '../data/catalog';
import { getProjectImageFallbacks } from '../utils/imageFallback';
import { ArtProject } from '../types';

interface SolutionsViewProps {
  onNavigateToCategory: (category: string) => void;
  onInspectPhoto: (photo: ArtProject) => void;
  allPhotos: ArtProject[];
  isDark: boolean;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  onNavigateToCategory,
  allPhotos,
}) => {

  return (
    <div id="solutions-view" className="pt-[85px] px-4 sm:px-8 md:px-12 pb-32 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="pb-12 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-data uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>copacabanabrasil • Estrutura de Serviços</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
          As 6 Soluções Estratégicas
        </h1>

        <p className="font-sans text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
          Atuamos em seis frentes complementares que unem consultoria estratégica, precisão conceitual e excelência em design para posicionar sua empresa e impulsionar suas vendas.
        </p>
      </div>

      {/* Solutions Cards */}
      <div className="space-y-12 mt-12">
        {COPACABANA_SOLUTIONS.map((sol, index) => {
          // Find related projects
          const relatedProjects = allPhotos.filter(
            (p) =>
              p.series.toLowerCase().includes(sol.category) ||
              sol.category.includes(p.series.toLowerCase())
          );

          return (
            <div
              key={sol.id}
              id={`solution-card-${sol.id}`}
              className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-[#12151b] to-[#0c0e12] shadow-xl hover:border-amber-500/30 transition-all"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white mb-2 tracking-tight">
                      {sol.title}
                    </h2>
                    <p className="font-sans text-sm sm:text-base font-extrabold uppercase tracking-wide text-[#ff4d00] leading-snug">
                      {sol.hook}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigateToCategory(sol.category)}
                  className="px-5 py-2.5 rounded-full text-xs font-mono-data uppercase tracking-wider bg-[#ff4d00] hover:bg-[#e64500] text-white font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-lg shadow-[#ff4d00]/20"
                >
                  <span>Ver Projetos Desta Solução</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Description & Deliverables */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                <div className="lg:col-span-7">
                  <h3 className="font-mono-data text-xs uppercase tracking-widest text-neutral-400 mb-3 font-semibold">
                    Texto de Apoio
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {sol.desc}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="font-mono-data text-xs uppercase tracking-widest text-amber-500 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Entregáveis e Aplicações Típicas:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {sol.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg text-xs font-mono-data bg-white/5 border border-white/10 text-neutral-200"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Related Preview Thumbnails */}
                <div className="lg:col-span-5">
                  <h3 className="font-mono-data text-xs uppercase tracking-widest text-neutral-400 mb-3">
                    Cases Desenvolvidos ({relatedProjects.length})
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {relatedProjects.slice(0, 4).map((p) => (
                      <div
                        key={p.id}
                        onClick={() => onNavigateToCategory(sol.category)}
                        className="group relative rounded-xl overflow-hidden border border-white/10 aspect-16/10 bg-neutral-950 cursor-pointer"
                      >
                        <img
                          key={p.thumbnailUrl || p.url}
                          src={p.thumbnailUrl || p.url}
                          alt={p.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const img = e.currentTarget;
                            const step = Number(img.dataset.fallbackStep || '0');
                            const list = getProjectImageFallbacks(p.id, p.thumbnailUrl || p.url);
                            if (step < list.length) {
                              img.dataset.fallbackStep = String(step + 1);
                              img.src = list[step];
                            } else {
                              img.style.opacity = '0';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity p-2.5 flex flex-col justify-end">
                          <span className="text-[10px] font-mono-data font-bold text-amber-400 truncate">
                            {p.client}
                          </span>
                          <span className="text-[9px] text-white/80 truncate">
                            {p.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Bottom Banner */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-[#15120c] to-amber-950/20 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
            Precisa de um projeto sob medida?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-neutral-300 max-w-xl">
            Trabalhamos lado a lado com seu time, de forma consultiva e ágil, desde a primeira conversa até o acompanhamento pós-entrega.
          </p>
        </div>
        <button
          onClick={() => onNavigateToCategory('Todos os Projetos')}
          className="px-6 py-3 rounded-full text-xs font-mono-data uppercase tracking-wider bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all shadow-xl shadow-amber-500/25 whitespace-nowrap cursor-pointer"
        >
          Explorar Portfólio Completo
        </button>
      </div>
    </div>
  );
};
