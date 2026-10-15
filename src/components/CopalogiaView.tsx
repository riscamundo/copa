import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  MessageSquare, 
  Compass, 
  PencilRuler, 
  Sliders, 
  Hammer, 
  Send, 
  Activity,
  ShieldCheck,
  X
} from 'lucide-react';
import { COPALOGIA_STEPS } from '../data/catalog';

interface CopalogiaViewProps {
  onExploreProjects: () => void;
  isDark: boolean;
}

export const CopalogiaView: React.FC<CopalogiaViewProps> = ({
  onExploreProjects,
}) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const stepIcons = [
    <MessageSquare className="w-5 h-5" />,
    <Compass className="w-5 h-5" />,
    <PencilRuler className="w-5 h-5" />,
    <Sliders className="w-5 h-5" />,
    <Hammer className="w-5 h-5" />,
    <Send className="w-5 h-5" />,
    <Activity className="w-5 h-5" />
  ];

  const selectedStep = COPALOGIA_STEPS[selectedStepIndex];

  return (
    <div id="copalogia-view" className="pt-[85px] px-4 sm:px-8 md:px-12 pb-32 max-w-7xl mx-auto min-h-screen">
      {/* Editorial Header */}
      <div className="pb-12 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono-data uppercase tracking-widest mb-4">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Para não ter erro • Metodologia Homologada</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
          Copalogia
        </h1>

        <p className="font-mono-data text-xs sm:text-sm text-amber-500 uppercase tracking-widest font-bold mb-4">
          A metodologia de trabalho testada e replicável da copacabanabrasil
        </p>

        <p className="font-sans text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
          Copalogia é a nossa metodologia de trabalho testada e replicável que orienta decisões, garante consistência e eleva a qualidade das entregas. É o jeito Copa de fazer, com precisão, disciplina e excelência.
        </p>
      </div>

      {/* 7-Step Interactive Visual Flow */}
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {COPALOGIA_STEPS.map((step, idx) => {
            const isSelected = selectedStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => { setSelectedStepIndex(idx); setIsModalOpen(true); }}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-amber-500 bg-amber-500/15 shadow-xl shadow-amber-500/10 scale-[1.02]'
                    : 'border-white/20 bg-white/10 hover:bg-white/20 hover:border-white/30'
                }`}
              >
                <div>
                  {/* Espaço para Imagem Quadrada */}
                  <div className="w-full aspect-square rounded-xl bg-white/5 mb-4 overflow-hidden border border-white/10 flex items-center justify-center relative p-4">
                    <img
                      src={step.image}
                      alt={`Imagem ${step.name}`}
                      className="w-full h-full object-contain mix-blend-overlay opacity-60 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '0';
                      }}
                    />
                    <span className="text-[10px] font-mono-data text-white/20 uppercase">
                      {step.name}.png
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-data text-3xl font-bold text-amber-500">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-lg text-white mb-1 sm:mb-2">
                    {step.name}
                  </h3>

                  {/* Descrição oculta no celular */}
                  <p className="hidden sm:block font-sans text-xs text-neutral-400 leading-relaxed text-balance">
                    {step.desc}
                  </p>
                </div>

                <div className="hidden sm:flex mt-4 pt-3 border-t border-white/10 items-center justify-between text-[11px] font-mono-data">
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'text-neutral-500'}>
                    Etapa {idx + 1}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal for Individual Step Expansion */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-br from-[#13161c] via-[#0f1116] to-[#15120c] shadow-2xl flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left side: Large Image */}
            <div className="w-full aspect-square sm:aspect-video relative bg-[#0f1116] flex-shrink-0 flex items-center justify-center overflow-hidden p-8 sm:p-12">
              <img 
                src={selectedStep.image} 
                alt={selectedStep.name}
                className="w-full h-full object-contain relative z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-8 pointer-events-none z-10">
                 <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg">
                    {stepIcons[selectedStepIndex]}
                 </div>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full p-6 sm:p-10 flex flex-col justify-center">
              <div className="flex flex-col gap-2 mb-8 border-b border-white/10 pb-6">
                <span className="font-mono-data text-xs uppercase tracking-widest text-amber-500 font-bold">
                  Passo {selectedStep.step} de .07
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                  {selectedStep.name}
                </h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-mono-data text-xs uppercase tracking-widest text-neutral-400 mb-3">
                    Objetivo da Etapa:
                  </h3>
                  <p className="font-sans text-base sm:text-lg text-neutral-200 leading-relaxed font-light mb-6">
                    {selectedStep.desc}
                  </p>
                  <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
                    <span className="font-mono-data text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                      Ação Executiva:
                    </span>
                    <p className="font-sans text-sm text-neutral-300">
                      {selectedStep.action}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-mono-data text-xs uppercase tracking-widest text-neutral-400 mb-3">
                    Por que esta etapa é inegociável:
                  </h3>
                  <div className="space-y-3 font-sans text-xs sm:text-sm text-neutral-300">
                    <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium block">Alinhamento Rigoroso de Expectativas</strong>
                        Elimina retrabalhos e garante que estratégia e estética caminhem juntas desde o início.
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium block">Segurança de Prazos & Entregas</strong>
                        Marcos bem delimitados para que a diretoria e as áreas de negócio acompanhem o progresso com previsibilidade.
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium block">Excelência de Padrão Gráfico</strong>
                        Revisão minuciosa em 4K, ajuste de kerning, contraste e proporção para materiais executivos.
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation inside modal */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedStepIndex((selectedStepIndex - 1 + 7) % 7)}
                    className="px-4 py-2 rounded-full border border-white/20 hover:border-white/40 text-xs font-mono-data text-neutral-300 transition-colors cursor-pointer"
                  >
                    ← Anterior
                  </button>
                  <button
                    onClick={() => setSelectedStepIndex((selectedStepIndex + 1) % 7)}
                    className="px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs font-mono-data transition-colors cursor-pointer"
                  >
                    Próximo →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Quote & Link */}
      <div className="mt-16 text-center">
        <p className="font-serif-display text-xl sm:text-2xl italic text-neutral-300 max-w-2xl mx-auto mb-6">
          "Parceria real e construção conjunta são o nosso jeito de fazer."
        </p>
        <button
          onClick={onExploreProjects}
          className="px-8 py-3.5 rounded-full text-xs font-mono-data uppercase tracking-widest bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all shadow-xl shadow-amber-500/25 inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Conferir Projetos Criados com a Copalogia</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
