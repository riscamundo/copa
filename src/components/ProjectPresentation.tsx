import React, { useState, useEffect, useCallback } from 'react';
import { ArtProject, ProjectSlide } from '../types';
import { getProjectSlides } from '../data/projectSlidesData';
import { getProjectImageFallbacks } from '../utils/imageFallback';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Eye, 
  EyeOff,
  CheckCircle2,
  X,
  Target
} from 'lucide-react';

interface ProjectPresentationProps {
  onClose: () => void;
  project: ArtProject;
  isDark: boolean;
  activeColor: string;
}

export const ProjectPresentation: React.FC<ProjectPresentationProps> = ({
  project,
  isDark,
  activeColor,
  onClose,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  let slides = getProjectSlides(project.id);

  if (project.series.toLowerCase() === 'apresentações') {
    slides = Array.from({ length: 6 }).map((_, i) => ({
      id: `${project.id}-s${i + 1}`,
      slideNumber: i + 1,
      title: `Lâmina ${i + 1} - ${project.title}`,
      subtitle: project.client,
      categoryTag: `Lâmina 0${i + 1} • Apresentação`,
      imageUrl:
        i === 0
          ? project.url
          : `./assets/imagens/apresentacoes-${project.client.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-slide${i + 1}.png`,
      description: project.description,
      rationalPoints: [],
      deliverable: '',
    }));
  }

  const currentSlide = slides[currentSlideIndex];

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  // Autoplay loop with progress bar
  useEffect(() => {
    if (!isPlaying) {
      setProgress(0);
      return;
    }

    const intervalTime = 50; // Update progress every 50ms
    const totalDuration = 7000; // 7s per slide
    const step = (intervalTime / totalDuration) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, handleNext]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === 'h') {
        setShowOverlay((prev) => !prev);
      } else if (e.key.toLowerCase() === 'p') {
        setIsPlaying((prev) => !prev);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleNext, handlePrev]);

  // Default to project image if no slides are found
  const slideImage = currentSlide?.imageUrl || project.url;
  const slideTitle = currentSlide?.title || project.title;
  const slideSubtitle = currentSlide?.subtitle || project.client;
  const slideDescription = currentSlide?.description || project.description;
  const slideCategoryTag = currentSlide?.categoryTag || project.series;

  return (
    <div
      id="project-presentation-container"
      className="fixed inset-0 top-[65px] bg-[#07080a] text-white flex items-center justify-center overflow-hidden select-none"
    >
      {/* Edge-to-Edge Slide Image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          key={`${project.id}-${currentSlideIndex}-${slideImage}`}
          src={slideImage}
          alt={slideTitle}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover sm:object-contain object-center transition-opacity duration-700 animate-fadeIn"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.hasFallenBack !== 'true') {
              img.dataset.hasFallenBack = 'true';
              img.src = project.url;
              return;
            }
            img.style.opacity = '0.75';
          }}
        />

        {project.series.toLowerCase() === "apresentações" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 opacity-30 z-10">
            <span className="text-[14px] font-mono-data text-white uppercase tracking-widest text-center mb-2">
              Lâmina {currentSlideIndex + 1}
            </span>
            <span className="text-[11px] font-mono-data text-white/60 uppercase text-center break-all">
              apresentacoes-{project.client.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-slide{currentSlideIndex + 1}.png
            </span>
          </div>
        )}
        {/* Subtle Vignette Gradient for Readability */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#07080a]/95 via-[#07080a]/50 to-[#07080a]/60" />
      </div>

      {/* Top Autoplay Progress Bar */}
      {isPlaying && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-30">
          <div
            style={{ width: `${progress}%`, backgroundColor: activeColor }}
            className="h-full transition-all duration-75"
          />
        </div>
      )}

      {/* Presentation Metadata Overlay */}
      {showOverlay && (project.series.toLowerCase() !== "apresentações" || currentSlideIndex === 0) && (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 sm:p-12 lg:px-24 lg:py-16 z-20">
          {/* Top Bar inside Pitch Mode */}
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-heading font-bold text-xs uppercase px-3 py-1 rounded-full text-white tracking-wider" style={{ backgroundColor: activeColor }}>
                {project.client}
              </span>
              <span className="font-mono-data text-xs uppercase tracking-widest text-neutral-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                {slideCategoryTag}
              </span>
              <span className="font-mono-data text-xs uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md" style={{ color: activeColor }}>
                {currentSlideIndex + 1} / {slides.length}
              </span>
            </div>
            
            {currentSlide?.metrics && (
              <div className="hidden md:flex flex-col items-end text-right">
                <span className="text-[10px] font-mono-data opacity-60 uppercase tracking-widest">{currentSlide.metrics.label}</span>
                <span className="font-heading text-xl font-bold" style={{ color: activeColor }}>{currentSlide.metrics.value}</span>
              </div>
            )}
          </div>

          {/* Bottom Card inside Pitch Mode */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pointer-events-auto mt-auto pb-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-mono-data uppercase tracking-wider mb-3 opacity-80" style={{ color: activeColor }}>
                <Target className="w-4 h-4" />
                <span>{slideSubtitle}</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
                {slideTitle}
              </h2>

              <p className="font-sans text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
                {slideDescription}
              </p>
            </div>

            {/* Rational Points List */}
            {currentSlide?.rationalPoints && currentSlide.rationalPoints.length > 0 && (
              <div className="shrink-0 max-w-sm w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
                <h4 className="text-xs font-mono-data uppercase tracking-widest text-white/50 mb-4 pb-2 border-b border-white/10">Rational & Defesa</h4>
                <ul className="space-y-3">
                  {currentSlide.rationalPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-200 leading-snug">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: activeColor }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                {currentSlide.deliverable && (
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <span className="block text-[10px] font-mono-data uppercase text-white/40 mb-1">Entregável</span>
                    <span className="text-sm font-semibold text-white">{currentSlide.deliverable}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Back/Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 left-6 z-30 px-5 py-2.5 flex items-center gap-2 bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-xl"
        title="Voltar para Portfólio (Esc)"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="font-mono-data text-xs uppercase tracking-widest font-bold">Voltar</span>
      </button>

      {/* Floating Presentation Control Bar (Bottom Center) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-[#0d0f14]/90 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-2xl">
        <button
          onClick={handlePrev}
          className="p-2 hover:bg-white/10 rounded-full transition-all cursor-pointer"
          style={{ '--hover-color': activeColor } as any}
          title="Projeto Anterior (Seta Esquerda)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 px-3.5 hover:bg-white/10 rounded-full transition-all flex items-center gap-1.5 text-xs font-mono-data uppercase tracking-wider cursor-pointer"
          title={isPlaying ? 'Pausar Pitch Deck (P)' : 'Iniciar Apresentação Automática (P)'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" style={{ color: activeColor }} />
              <span>Pausar</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" style={{ color: activeColor }} />
              <span>Apresentar</span>
            </>
          )}
        </button>

        <button
          onClick={handleNext}
          className="p-2 hover:bg-white/10 rounded-full transition-all cursor-pointer"
          title="Próximo Projeto (Seta Direita)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="h-4 w-px bg-white/20 mx-1" />

        <button
          onClick={() => setShowOverlay(!showOverlay)}
          className="p-2 hover:bg-white/10 rounded-full transition-all cursor-pointer text-white/70 hover:text-white"
          title={showOverlay ? 'Ocultar Legendas (H)' : 'Exibir Legendas (H)'}
        >
          {showOverlay ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
