import React, { useState } from 'react';
import { ArtProject } from '../types';
import { 
  Play,
  Layers, 
  Ruler, 
  MapPin, 
  Sparkles, 
  Palette, 
  Award, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Monitor,
  Target,
  FileText,
  Briefcase,
  Upload,
  X
} from 'lucide-react';
import { 
  CATALOG_CATEGORIES, 
  COPACABANA_SOLUTIONS, 
  COPALOGIA_STEPS, 
  COPACABANA_CLIENTS, 
  COPACABANA_MANIFESTO,
  COPACABANA_IDEA_MARKET
} from '../data/catalog';
import { getProjectImageFallbacks } from '../utils/imageFallback';
import { optimizeImageFile } from '../utils/persistentStorage';

const DEFAULT_GALLERY_LOGOS = [
  { name: 'Atento', file: './assets/imagens/logotipos/LOGO ATENTO.png' },
  { name: 'LavAí', file: './assets/imagens/logotipos/LOGO LAVAI.png' },
  { name: 'blue6ix', file: './assets/imagens/logotipos/LOGO BLUESIX.png' },
  { name: 'Direct-Talk', file: './assets/imagens/logotipos/LOGO DIRECTTALK.png' },
  { name: 'José Resende', file: './assets/imagens/logotipos/LOGO IJR.png' },
  { name: 'Journey', file: './assets/imagens/logotipos/LOGO JOURNEY.png' },
  { name: 'Auden', file: './assets/imagens/logotipos/LOGO AUDEN.png' },
  { name: 'Interaxa', file: './assets/imagens/logotipos/LOGO INTERAXA.png' },
  { name: 'Carrefour', file: './assets/imagens/logotipos/LOGO CARREFOUR.png' },
  { name: 'Coca-Cola', file: './assets/imagens/logotipos/LOGO COCACOLA.png' },
  { name: 'Disney', file: './assets/imagens/logotipos/LOGO DISNEY.png' },
  { name: 'Aúnica', file: './assets/imagens/logotipos/LOGO AUNICA.png' },
  { name: 'CliqX', file: './assets/imagens/logotipos/LOGO CLIX.png' },
  { name: 'Elleven', file: './assets/imagens/logotipos/LOGO ELLEVEN.png' },
  { name: 'Fartura', file: './assets/imagens/logotipos/LOGO FARTURA.png' },
  { name: 'Genesys', file: './assets/imagens/logotipos/LOGO GENESYS.png' },
  { name: 'Genoa', file: './assets/imagens/logotipos/LOGO GENOA.png' },
  { name: 'Índigo', file: './assets/imagens/logotipos/LOGO INDIGO.png' },
  { name: 'Mutant', file: './assets/imagens/logotipos/LOGO MUTANT.png' },
  { name: 'PAC', file: './assets/imagens/logotipos/LOGO PAC.png' },
  { name: 'Segurpro', file: './assets/imagens/logotipos/LOGO SEGURPRO.png' },
  { name: 'System', file: './assets/imagens/logotipos/LOGO SYSTEM.png' },
  { name: 'Target', file: './assets/imagens/logotipos/LOGO TARGET.png' },
  { name: 'Ticket', file: './assets/imagens/logotipos/LOGO TICKET.png' },
];

interface FullWidthFeedProps {
  photos: ArtProject[];
  onInspectPhoto: (photo: ArtProject) => void;
  isDark: boolean;
  activeColor?: string;
}

export const FullWidthFeed: React.FC<FullWidthFeedProps> = ({
  photos,
  onInspectPhoto,
  isDark,
  activeColor = '#ff4d00',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos os Projetos');
  const [activeCopalogiaStep, setActiveCopalogiaStep] = useState<number>(0);
  const [isCopalogiaModalOpen, setIsCopalogiaModalOpen] = useState<boolean>(false);
  const [selectedClientFilter, setSelectedClientFilter] = useState<string | null>(null);

  const handleProjectImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    project: ArtProject
  ) => {
    const img = e.currentTarget;
    const step = Number(img.dataset.fallbackStep || '0');
    const list = getProjectImageFallbacks(project.id, project.thumbnailUrl || project.url);
    if (step < list.length) {
      img.dataset.fallbackStep = String(step + 1);
      img.src = list[step];
    } else {
      img.style.opacity = '0.9';
    }
  };

  let filteredProjects = selectedCategory === 'Todos os Projetos'
    ? photos
    : photos.filter((p) => p.series.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.toLowerCase().includes(p.series.toLowerCase()));

  if (selectedClientFilter) {
    filteredProjects = filteredProjects.filter((p) => p.client.toLowerCase().includes(selectedClientFilter.toLowerCase()));
  }

  const getChapterHeader = (series: string) => {
    switch (series.toLowerCase()) {
      case 'apresentações':
        return {
          title: 'APRESENTAÇÕES',
          split: ['APRE', 'SENT', 'A', 'ÇÕES'],
          subtitle: 'Decks de Alto Desempenho, Propostas Comerciais & Captação C-Level',
          slideNumber: '07'
        };
      case 'logomarcas':
        return {
          title: 'LOGOMARCAS',
          split: ['LO', 'GO', 'MA', 'R', 'CAS'],
          subtitle: 'Naming, Identidades Visuais, Marcas & Direção Estratégica'
        };
      case 'brand books':
        return {
          title: 'BRAND BOOKS',
          split: ['BRAND', 'BOOKS'],
          subtitle: 'Guias de Aplicação, Manuais de Marca & Guidelines Técnicos',
          slideNumber: '42'
        };
      case 'one pagers & papers':
        return {
          title: 'ONE PAGERS & PAPERS',
          split: ['ONE', 'PA', 'GER', 'S', '& PA', 'PERS'],
          subtitle: 'Lâminas Comerciais, Decks de Venda & Infográficos de Produto',
          slideNumber: '48'
        };
      case 'anúncios':
        return {
          title: 'ANÚNCIOS',
          split: ['A', 'NÚN', 'CIOS'],
          subtitle: 'Campanhas Digitais, Mídia Impressa, Social & Performance',
          slideNumber: '59'
        };
      case 'diversos':
        return {
          title: 'DIVERSOS',
          split: ['DI', 'VER', 'SOS'],
          subtitle: 'Estandes, Cenografia, Espaços de Marca & Ambientação de Eventos',
          slideNumber: '67'
        };
      default:
        return null;
    }
  };

  return (
    <div id="fullwidth-feed-container" className="pt-[65px] min-h-screen relative overflow-hidden">

      {/* Hero Section — copacabanabrasil Positioning */}
      <section className="relative z-10 w-full px-5 sm:px-10 md:px-16 py-14 sm:py-20 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#111319] to-[#0a0b0e] p-8 sm:p-12 lg:p-16 mb-16 shadow-2xl">
          {/* Subtle background glow */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 opacity-20"
            style={{ backgroundColor: activeColor }}
          />

          <div className="relative z-10 max-w-4xl">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono-data uppercase tracking-widest mb-6 backdrop-blur-md"
              style={{
                borderColor: `${activeColor}40`,
                backgroundColor: `${activeColor}15`,
                color: activeColor,
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>copacabanabrasil • Boutique de Estratégia, Branding & Design</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white mb-6">
              {COPACABANA_MANIFESTO.headline}
            </h1>

            <p
              className="font-mono-data text-xs sm:text-sm tracking-[0.22em] uppercase font-bold mb-6"
              style={{ color: activeColor }}
            >
              {COPACABANA_MANIFESTO.tagline}
            </p>

            <p className="font-sans text-base sm:text-lg text-neutral-300 leading-relaxed font-light mb-6">
              {COPACABANA_MANIFESTO.body}
            </p>

            <div
              className="p-4 rounded-xl border text-xs sm:text-sm font-sans text-neutral-300 flex items-center gap-3"
              style={{
                borderColor: `${activeColor}30`,
                backgroundColor: `${activeColor}0a`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full shrink-0 animate-ping"
                style={{ backgroundColor: activeColor }}
              />
              <span>
                <strong className="font-semibold text-white" style={{ color: activeColor }}>
                  {COPACABANA_MANIFESTO.partnershipQuote}
                </strong>{' '}
                {COPACABANA_MANIFESTO.closure}
              </span>
            </div>
          </div>
        </div>
        
        {/* Da ideia ao Mercado Section (Page 2 of Deck) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <span
                className="font-mono-data text-xs uppercase tracking-widest block mb-1"
                style={{ color: activeColor }}
              >
                Posicionamento
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {COPACABANA_IDEA_MARKET.title}
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
             <div className="space-y-6">
                <p className="font-sans text-xl sm:text-2xl font-bold text-white leading-relaxed">
                   {COPACABANA_IDEA_MARKET.paragraphs[0]}
                </p>
                <p className="font-sans text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
                   {COPACABANA_IDEA_MARKET.paragraphs[1]}
                </p>
                <p className="font-sans text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
                   {COPACABANA_IDEA_MARKET.paragraphs[2]}
                </p>
             </div>
             <div className="space-y-6 md:pt-4">
                <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1c23] to-[#0f1115]">
                  <p className="font-sans text-base text-neutral-200 leading-relaxed">
                     {COPACABANA_IDEA_MARKET.paragraphs[3]}
                  </p>
                </div>
                <div className="p-6 rounded-2xl border bg-gradient-to-br from-black/60 to-black/20" style={{ borderColor: `${activeColor}40` }}>
                  <p className="font-sans text-lg font-bold text-white leading-relaxed">
                     {COPACABANA_IDEA_MARKET.paragraphs[4]}
                  </p>
                </div>
             </div>
          </div>
        </div>

        {/* The 6 Core Solutions Grid (Pages 4 & 5 of Deck) */}
        <div id="section-solucoes" className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
            <div>
              <span
                className="font-mono-data text-xs uppercase tracking-widest block mb-1 font-bold"
                style={{ color: activeColor }}
              >
                Soluções & Atuação
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Como Aceleramos sua Marca
              </h2>
            </div>
            <span className="text-xs font-mono-data opacity-60">
              6 frentes complementares de consultoria e design
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COPACABANA_SOLUTIONS.map((sol, index) => (
              <div
                key={sol.id}
                onClick={() => {
                  const targetCat = CATALOG_CATEGORIES.find((c) => c.toLowerCase().includes(sol.category));
                  if (targetCat) setSelectedCategory(targetCat);
                }}
                className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-[#13151b] to-[#0c0e12] hover:border-white/25 hover:from-[#171a22] hover:to-[#0f1116] transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-2xl overflow-hidden"
              >
                {/* Graphic background art subtle watermark with dark gradient overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <img
                    src={`./assets/imagens/solucoes/solucao-${sol.id}.png`}
                    alt=""
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    className="absolute right-0 top-0 w-3/4 h-3/4 object-contain object-top-right opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-screen filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/80 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Title: Pure White, Bold, Uppercase */}
                  <h3 className="font-heading text-lg sm:text-xl font-black uppercase text-white tracking-tight leading-snug mb-3.5 transition-colors">
                    {sol.title}
                  </h3>

                  {/* Hook / Callout: Vibrant Orange, Uppercase, Bold */}
                  <p
                    className="font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wide leading-snug mb-4"
                    style={{ color: activeColor }}
                  >
                    {sol.hook}
                  </p>

                  {/* Support Text (TEXTO DE APOIO): Silver / Light Gray */}
                  <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copa - Pensando Junto (Page 3 of Deck) */}
        <div className="mb-20">
          <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1c23] to-[#0f1115] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
             <div className="flex flex-col md:flex-row gap-12 items-start justify-between relative z-10">
                <div className="md:w-1/3">
                   <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-4">
                     Copa
                   </h2>
                   <p className="font-mono-data text-sm tracking-widest uppercase font-bold" style={{ color: activeColor }}>
                     Pensando junto.<br/>Criando junto.<br/>Jogando junto.
                   </p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                   {[
                     { label: 'ideia', question: 'O que estamos criando?' },
                     { label: 'propósito', question: 'Por que isso precisa existir?' },
                     { label: 'posicionamento', question: 'Onde queremos jogar?' },
                     { label: 'marca', question: 'Como vamos ser reconhecidos?' },
                     { label: 'oferta', question: 'O que vamos colocar na mesa?' },
                     { label: 'go-to-market', question: 'Como vamos chegar ao mercado?' },
                     { label: 'evolução', question: 'Como continuamos relevantes?' }
                   ].map((item, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                         <span className="font-mono-data text-xs uppercase tracking-widest" style={{ color: activeColor }}>
                           {item.label}
                         </span>
                         <span className="font-sans text-base text-white font-medium">
                           {item.question}
                         </span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* Metodologia Copalogia (Page 6 of Deck) */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-[#14181e] to-[#0c0e12]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <span className="font-mono-data text-xs text-amber-500 uppercase tracking-widest block mb-1">
                Para não ter erro
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white">
                Copalogia • O Método de Trabalho
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
              Metodologia de trabalho testada e replicável que orienta decisões, garante consistência e eleva a qualidade das entregas. É o jeito Copa de fazer, com precisão, disciplina e excelência.
            </p>
          </div>

          {/* Steps Carousel / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-4">
            {COPALOGIA_STEPS.map((s, idx) => {
              const isSelected = activeCopalogiaStep === idx;
              return (
                <div
                  key={s.step}
                  onClick={() => { setActiveCopalogiaStep(idx); setIsCopalogiaModalOpen(true); }}
                  className={`p-5 sm:p-4 rounded-2xl sm:rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'border-amber-500 bg-amber-500/15 shadow-xl shadow-amber-500/10 scale-[1.01] sm:scale-[1.02]'
                      : 'border-white/20 bg-white/10 hover:bg-white/20 hover:border-white/30'
                  }`}
                >
                  <div>
                    {/* Espaço para Imagem Quadrada */}
                    <div className="w-full aspect-square rounded-xl bg-white/5 mb-3 overflow-hidden border border-white/10 relative p-4 flex items-center justify-center">
                      <img src={s.image} alt={s.name} className="w-full h-full object-contain opacity-75 group-hover:opacity-100 transition-all mix-blend-overlay group-hover:mix-blend-normal" />
                      <span className="text-[10px] font-mono-data text-white/20 uppercase absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        {s.name}.png
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="font-mono-data text-3xl sm:text-2xl font-bold text-amber-500 block">
                        {s.step}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-lg sm:text-base text-white mb-1 sm:mb-2">
                      {s.name}
                    </h4>
                    {/* Texto descritivo oculto no celular, visível a partir de sm */}
                    <p className="hidden sm:block font-sans text-[11px] text-neutral-400 leading-relaxed text-balance pb-2">
                      {s.desc}
                    </p>
                  </div>
                  {/* Rodapé do box oculto no celular para manter foco estrito em imagem, número e título */}
                  <div className="hidden sm:flex mt-3 pt-2 border-t border-white/10 items-center gap-1 text-[10px] font-mono-data text-neutral-500 group-hover:text-amber-400 transition-colors">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Etapa {idx + 1} de 7</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modal for Individual Step Expansion (Mirrors CopalogiaView) */}
          {isCopalogiaModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm" onClick={() => setIsCopalogiaModalOpen(false)}>
              <div 
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-br from-[#13161c] via-[#0f1116] to-[#15120c] shadow-2xl flex flex-col my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsCopalogiaModalOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left side: Large Image */}
                <div className="w-full aspect-square sm:aspect-video relative bg-[#0f1116] flex-shrink-0 flex items-center justify-center overflow-hidden p-8 sm:p-12">
                  <img 
                    src={COPALOGIA_STEPS[activeCopalogiaStep].image} 
                    alt={COPALOGIA_STEPS[activeCopalogiaStep].name}
                    className="w-full h-full object-contain relative z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-8 pointer-events-none z-10">
                     <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                     </div>
                  </div>
                </div>

                {/* Right side: Content */}
                <div className="w-full p-6 sm:p-10 flex flex-col justify-center">
                  <div className="flex flex-col gap-2 mb-8 border-b border-white/10 pb-6">
                    <span className="font-mono-data text-xs uppercase tracking-widest text-amber-500 font-bold">
                      Passo {COPALOGIA_STEPS[activeCopalogiaStep].step} de .07
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                      {COPALOGIA_STEPS[activeCopalogiaStep].name}
                    </h2>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-mono-data text-xs uppercase tracking-widest text-neutral-400 mb-3">
                        Objetivo da Etapa:
                      </h3>
                      <p className="font-sans text-base sm:text-lg text-neutral-200 leading-relaxed font-light mb-6">
                        {COPALOGIA_STEPS[activeCopalogiaStep].desc}
                      </p>
                      <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5">
                        <span className="font-mono-data text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                          Ação Executiva:
                        </span>
                        <p className="font-sans text-sm text-neutral-300">
                          {COPALOGIA_STEPS[activeCopalogiaStep].action}
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
                        onClick={() => setActiveCopalogiaStep((activeCopalogiaStep - 1 + 7) % 7)}
                        className="px-4 py-2 rounded-full border border-white/20 hover:border-white/40 text-xs font-mono-data text-neutral-300 transition-colors cursor-pointer"
                      >
                        ← Anterior
                      </button>
                      <button
                        onClick={() => setActiveCopalogiaStep((activeCopalogiaStep + 1) % 7)}
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
        </div>

        {/* Marcas Atendidas (Page 5 of Deck) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="font-mono-data text-xs text-amber-500 uppercase tracking-widest block mb-1">
                Construção Conjunta
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Marcas que Aceleramos
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-400 max-w-md">
              "Aqui não tem essa de fornecedor. Somos parte do time porque jogamos junto de verdade. Estas marcas ao lado podem confirmar."
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
            {COPACABANA_CLIENTS.map((client) => {
              const isFilterActive = selectedClientFilter === client.name;
              
              
              const CLIENT_LOGO_MAP: Record<string, string> = {
                'Atento': 'LOGO ATENTO.png',
                'Auden MFA': 'LOGO AUDEN.png',
                'Aunica': 'LOGO AUNICA.png',
                'Blue6ix': 'LOGO BLUESIX.png',
                'Carrefour': 'LOGO CARREFOUR.png',
                'Cliqx': 'LOGO CLIX.png',
                'Coca-Cola': 'LOGO COCACOLA.png',
                'Direct-Talk': 'LOGO DIRECTTALK.png',
                'Disney': 'LOGO DISNEY.png',
                'Elleven': 'LOGO ELLEVEN.png',
                'Fartura Gastronomia': 'LOGO FARTURA.png',
                'Genesys': 'LOGO GENESYS.png',
                'Genoa': 'LOGO GENOA.png',
                'Fundação Índigo': 'LOGO INDIGO.png',
                'Instituto José Resende': 'LOGO IJR.png',
                'Interaxa': 'LOGO INTERAXA.png',
                'JA Brasil': 'LOGO JOURNEY.png',
                'Mutant': 'LOGO MUTANT.png',
                'PAC': 'LOGO PAC.png',
                'Segurpro': 'LOGO SEGURPRO.png',
                'System Interact': 'LOGO SYSTEM.png',
                'Target Bank': 'LOGO TARGET.png',
                'Ticket': 'LOGO TICKET.png',
                'Voxline': 'LOGO VOXLINE.png',
                'WIM': 'LOGO WIM.png',
                'Woxel': 'LOGO WOXEL.png',
                'ZiliCred': 'LOGO ZILICRED.png',
                'Lavai': 'LOGO LAVAI.png',
                'Vilanana': 'LOGO VILANANA.png',
              };
              
              const exactFile = CLIENT_LOGO_MAP[client.name];
              const fileName = exactFile ? `./assets/imagens/logotipos/${encodeURIComponent(exactFile)}` : `/logo-${client.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.png`;


              return (
                <button
                  key={client.name}
                  onClick={() => {
                    setSelectedClientFilter(isFilterActive ? null : client.name);
                    setSelectedCategory('Todos os Projetos');
                  }}
                  className={`relative overflow-hidden w-32 sm:w-40 h-16 sm:h-20 p-3 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-center group ${
                    isFilterActive
                      ? 'border-amber-500 bg-amber-500/10 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                      : 'border-white/5 bg-[#14161a] hover:border-white/20 hover:bg-[#1a1d24] shadow-sm'
                  }`}
                  title={`Filtrar projetos de ${client.name} (${client.category})`}
                >
                  <img
                    src={fileName}
                    alt={`Logo ${client.name}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.parentElement) {
                        target.style.display = 'none';
                        target.parentElement.innerHTML = `<span class="font-heading text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest text-center px-2">${client.name}</span>`;
                      }
                    }}
                    className={`w-full h-full object-contain transition-all duration-500 ${
                      isFilterActive
                        ? 'opacity-100 brightness-0 invert scale-105'
                        : 'opacity-50 grayscale group-hover:brightness-0 group-hover:invert group-hover:opacity-100 group-hover:scale-105'
                    }`}
                    
                  />
                  
                  {isFilterActive && (
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Showcase Feed */}
      <div className="relative z-10 space-y-32 sm:space-y-44 pb-36 max-w-7xl mx-auto px-4 sm:px-8">
        {filteredProjects.map((project, index) => {
          const chapterHeader = getChapterHeader(project.series);
          const showChapterIntro = index === 0 || filteredProjects[index - 1].series !== project.series;

          return (
            <div key={project.id} className="space-y-12">
              {/* Distinctive Editorial Chapter Intro Divider from the Presentation Slides */}
              {showChapterIntro && chapterHeader && (
                <div className="pt-10 pb-6 border-t border-white/15">
                  <div className="rounded-3xl p-8 sm:p-12 md:p-16 border border-white/10 bg-gradient-to-b from-[#111319] to-[#0a0b0e] relative overflow-hidden shadow-2xl">
                    {/* Decorative Top Bar */}
                    <div className="flex items-center justify-between pb-8 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: activeColor }}
                        />
                        <span
                          className="font-mono-data text-xs uppercase tracking-[0.25em] font-bold"
                          style={{ color: activeColor }}
                        >
                          Capítulo • {chapterHeader.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {chapterHeader.slideNumber && (
                          <span
                            className="font-mono-data text-xs uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-md"
                            style={{
                              borderColor: `${activeColor}40`,
                              backgroundColor: `${activeColor}15`,
                              color: activeColor,
                            }}
                          >
                            Slide #{chapterHeader.slideNumber}
                          </span>
                        )}
                        <span className="font-mono-data text-[11px] uppercase tracking-widest text-neutral-500 hidden sm:inline">
                          copacabanabrasil • Apresentações
                        </span>
                      </div>
                    </div>

                    {/* Architectural Broken Syllables from the PDF Slides */}
                    <div className="pt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                      <div>
                        <div className="font-display-poster text-5xl sm:text-7xl md:text-8xl font-black uppercase text-white tracking-tighter leading-[0.88] select-none">
                          {chapterHeader.split.map((chunk, cIdx) => (
                            <div key={cIdx} className="block transition-transform hover:translate-x-1 duration-200">
                              {chunk}
                            </div>
                          ))}
                        </div>

                        <p className="font-sans text-sm sm:text-base text-neutral-300 mt-6 max-w-xl leading-relaxed">
                          {chapterHeader.subtitle}
                        </p>
                      </div>

                      <div className="text-left md:text-right">
                        <span className="font-mono-data text-xs text-neutral-400 block tracking-widest uppercase mb-1">
                          estratégia _ branding _ comunicação _ design _
                        </span>
                        <span className="text-[11px] font-mono-data text-neutral-500">
                          Direção Criativa & Alta Performance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Artwork Card Container */}
              <article
                id={`fullwidth-campaign-${project.id}`}
                className="w-full group scroll-mt-28 rounded-2xl overflow-hidden border border-white/10 bg-[#101217] shadow-2xl transition-all"
              >
                {/* Visual Canvas Image (Widescreen 16:9 Format) */}
                <div
                  className="relative w-full aspect-video overflow-hidden bg-neutral-950 flex justify-center items-center cursor-zoom-in"
                >
                  <img
                    key={project.url}
                    src={project.url}
                    onLoad={(e) => {
                      (e.currentTarget as HTMLImageElement).style.opacity = '1';
                    }}
                    onError={(e) => handleProjectImageError(e, project)}
                    alt={`${project.client} - ${project.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />

                  {/* Floating Badges (oculto no mobile para imagem 100% limpa, visível em sm:) */}
                  <div className="hidden sm:flex absolute top-4 left-4 sm:top-6 sm:left-6 flex-wrap items-center gap-2">
                    <div className="bg-black/80 backdrop-blur-md text-white text-xs font-mono-data px-3.5 py-1 rounded-full border border-white/15 uppercase tracking-wider flex items-center gap-2">
                      <span className="font-bold" style={{ color: activeColor }}>{project.client}</span>
                      {project.slideNumber && project.series.toLowerCase() !== 'logomarcas' && project.category !== 'logomarcas' && (
                        <>
                          <span className="opacity-40">•</span>
                          <span className="text-[10px] opacity-75">Slide #{project.slideNumber}</span>
                        </>
                      )}
                    </div>

                    <div className="bg-white/10 backdrop-blur-md text-neutral-300 text-[11px] font-mono-data px-3 py-1 rounded-full border border-white/10 uppercase tracking-wider">
                      {project.series}
                    </div>

                    {project.awardBadge && (
                      <div 
                        className="text-white text-xs font-mono-data px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-md flex items-center gap-1.5"
                        style={{ backgroundColor: activeColor }}
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>{project.awardBadge}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Metadata & Presentation Bar */}
                <div className="w-full p-6 sm:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
                    <div className="max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono-data opacity-75 uppercase tracking-wider mb-2">
                        <span className="font-bold" style={{ color: activeColor }}>{project.client}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 opacity-70" />
                          {project.medium}
                        </span>
                      </div>

                      <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-white">
                        {project.title}
                      </h2>

                      <p className="font-sans text-sm text-neutral-300 mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Actions & Praça */}
                    <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 shrink-0">
                      <div className="flex items-center gap-2 font-mono-data text-xs text-neutral-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                        <MapPin className="w-3.5 h-3.5" style={{ color: activeColor }} />
                        <span className="opacity-50 text-[10px] uppercase">Aplicação:</span>
                        <span className="font-medium">{project.support}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {project.series.toLowerCase() === 'apresentações' && (
                          <button
                            id={`btn-present-${project.id}`}
                            onClick={() => onInspectPhoto(project)}
                            className="px-3.5 py-1.5 rounded-full text-[11px] font-mono-data uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20"
                            title="Apresentar em Modo Widescreen Pitch Deck"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Ver Lâminas</span>
                          </button>
                        )}
                        <button
                          id={`btn-style-${project.id}`}
                          onClick={() => {
                            const contact = document.getElementById('contato');
                            if (contact) {
                              contact.scrollIntoView({ behavior: 'smooth' });
                              setTimeout(() => {
                                const textarea = contact.querySelector('textarea') as HTMLTextAreaElement | null;
                                if (textarea) {
                                  textarea.value = `Olá! Gostei muito do projeto "${project.title}" (${project.client}) e quero algo nesse estilo para a minha marca.`;
                                  textarea.focus();
                                }
                              }, 350);
                            }
                          }}
                          className="px-4 py-2 rounded-full text-xs font-mono-data uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer text-white font-bold shadow-md hover:opacity-90 hover:scale-105"
                          style={{ backgroundColor: activeColor }}
                          title={`Quero um projeto no estilo de ${project.title}`}
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Quero algo nesse estilo</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}

        {selectedCategory.toLowerCase() === 'logomarcas' && (
          <div className="pt-24 border-t border-white/10 mt-24">
            <div className="text-center mb-8">
              <h3 className="font-heading text-3xl font-bold text-white mb-2">
                Galeria de Logotipos
              </h3>
              <p className="font-mono-data text-xs text-neutral-400 uppercase tracking-widest">
                Acervo de Identidades Visuais & Marcas Desenvolvidas
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {DEFAULT_GALLERY_LOGOS.slice(0, 24).map((item, i) => {
                const displaySrc = item.file;
                const labelName = item.name;

                return (
                  <div
                    key={i}
                    className="aspect-[5/4] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 rounded-xl flex items-center justify-center relative overflow-hidden group transition-all shadow-lg"
                    title={labelName}
                  >
                    <img
                      src={displaySrc}
                      alt={labelName}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                      className="absolute inset-0 w-full h-full object-contain p-4 opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />

                    <span className="absolute bottom-1.5 left-2.5 text-[9px] font-mono-data text-white/40 uppercase tracking-widest pointer-events-none group-hover:text-white/80 transition-colors">
                      {labelName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
