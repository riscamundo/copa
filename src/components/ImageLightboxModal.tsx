import React, { useEffect } from 'react';
import { X, ExternalLink, ZoomIn, ZoomOut, Download } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
  subtitle?: string;
  activeColor?: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  subtitle,
  activeColor = '#ff4d00',
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsZoomed(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      id="image-lightbox-overlay"
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        className="w-full max-w-7xl flex items-center justify-between gap-4 z-20 pb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col min-w-0">
          {subtitle && (
            <span
              className="text-[10px] sm:text-xs font-mono-data uppercase tracking-widest truncate"
              style={{ color: activeColor }}
            >
              {subtitle}
            </span>
          )}
          <h3 className="text-sm sm:text-lg font-heading font-bold text-white truncate">
            {title || 'Visualização Ampliada'}
          </h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Zoom toggle button */}
          <button
            onClick={() => setIsZoomed((prev) => !prev)}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-mono-data flex items-center gap-1.5 transition-colors cursor-pointer"
            title={isZoomed ? 'Ajustar à tela' : 'Tamanho real 100%'}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            <span className="hidden sm:inline">{isZoomed ? 'Ajustar' : 'Ampliar'}</span>
          </button>

          {/* Open in new tab button */}
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-mono-data flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Abrir imagem original em nova aba"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="hidden sm:inline">Nova Aba</span>
          </a>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer ml-1"
            title="Fechar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        className="relative flex-1 w-full flex items-center justify-center overflow-auto p-2"
        onClick={onClose}
      >
        <div
          className={`relative max-w-full transition-transform duration-300 ${
            isZoomed ? 'cursor-zoom-out scale-125' : 'cursor-zoom-in'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed((prev) => !prev);
          }}
        >
          <img
            src={imageUrl}
            alt={title || 'Imagem ampliada'}
            className="max-h-[82vh] max-w-[95vw] object-contain rounded-lg shadow-2xl border border-white/10 select-none"
          />
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="z-10 pt-2 text-center pointer-events-none">
        <span className="text-[10px] font-mono-data text-neutral-400 uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full border border-white/10">
          Clique na imagem para alternar zoom • Pressione Esc para fechar
        </span>
      </div>
    </div>
  );
};
