import React from 'react';
import { Palette, Type, Check, X, Sparkles, Sun, Moon, RotateCcw } from 'lucide-react';
import { PDF_PALETTES, PDF_FONTS } from '../data/pdfPresets';
import { PdfPalettePreset, PdfFontPreset, ThemeMode } from '../types';

interface PdfAppearanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPalette: PdfPalettePreset;
  onSelectPalette: (palette: PdfPalettePreset) => void;
  selectedFont: PdfFontPreset;
  onSelectFont: (font: PdfFontPreset) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onResetToDefaults: () => void;
}

export const PdfAppearanceModal: React.FC<PdfAppearanceModalProps> = ({
  isOpen,
  onClose,
  selectedPalette,
  onSelectPalette,
  selectedFont,
  onSelectFont,
  theme,
  onToggleTheme,
  onResetToDefaults,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="pdf-appearance-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="pdf-appearance-modal-content"
        className="relative w-full max-w-2xl bg-[#0f1117] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
              style={{ backgroundColor: selectedPalette.primary }}
            >
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl text-white">
                Cores & Fontes do Layout Original
              </h2>
              <p className="text-xs text-neutral-400 font-mono-data">
                Ajuste fino de fidelidade com o PDF da apresentação copacabanabrasil
              </p>
            </div>
          </div>

          <button
            id="close-appearance-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: Color Palettes */}
        <div className="py-6 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-copa-primary" style={{ color: selectedPalette.primary }} />
              <span className="text-xs font-mono-data uppercase tracking-widest text-neutral-300 font-bold">
                1. Paleta de Cores do Deck
              </span>
            </div>
            <span className="text-[11px] font-mono-data text-neutral-500">
              Ativo: {selectedPalette.name}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PDF_PALETTES.map((pal) => {
              const isSelected = selectedPalette.id === pal.id;
              return (
                <button
                  key={pal.id}
                  id={`palette-option-${pal.id}`}
                  onClick={() => onSelectPalette(pal)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
                    isSelected
                      ? 'border-white bg-white/10 shadow-lg scale-[1.01]'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]'
                  }`}
                >
                  {/* Color Swatch Circle */}
                  <div
                    className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center shadow-md relative"
                    style={{ backgroundColor: pal.primary }}
                  >
                    {isSelected && (
                      <Check
                        className={`w-5 h-5 ${
                          pal.primary === '#ffffff' || pal.primary === '#facc15'
                            ? 'text-black font-bold'
                            : 'text-white font-bold'
                        }`}
                      />
                    )}
                  </div>

                  <div className="overflow-hidden">
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-semibold text-sm text-white truncate">
                        {pal.name}
                      </span>
                    </div>
                    <span className="font-mono-data text-[10px] text-neutral-400 block truncate">
                      {pal.primary} • {pal.tagline}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Font Pairings */}
        <div className="py-6 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4" style={{ color: selectedPalette.primary }} />
              <span className="text-xs font-mono-data uppercase tracking-widest text-neutral-300 font-bold">
                2. Família Tipográfica (Títulos & Textos)
              </span>
            </div>
            <span className="text-[11px] font-mono-data text-neutral-500">
              Ativo: {selectedFont.name}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PDF_FONTS.map((fnt) => {
              const isSelected = selectedFont.id === fnt.id;
              return (
                <button
                  key={fnt.id}
                  id={`font-option-${fnt.id}`}
                  onClick={() => onSelectFont(fnt)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-white bg-white/10 shadow-lg scale-[1.01]'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading font-bold text-sm text-white">
                      {fnt.name}
                    </span>
                    {isSelected && (
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: selectedPalette.primary }}
                      />
                    )}
                  </div>

                  <div className="py-1">
                    <span
                      className="text-lg font-black tracking-tight block text-neutral-200 uppercase"
                      style={{ fontFamily: fnt.displayFont }}
                    >
                      APRE • SENT • A • ÇÕES
                    </span>
                    <span
                      className="text-xs text-neutral-400 font-normal line-clamp-1 mt-0.5"
                      style={{ fontFamily: fnt.bodyFont }}
                    >
                      estratégia _ branding _ comunicação _ design _
                    </span>
                  </div>

                  <p className="text-[11px] text-neutral-400 mt-2 font-mono-data">
                    {fnt.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3: Ambient Mode & Reset */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onToggleTheme}
            className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono-data flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Modo Claro (Galeria)</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-copa-primary" />
                <span>Modo Escuro (Deck Original)</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onResetToDefaults}
              className="px-4 py-2.5 rounded-full hover:bg-white/10 text-xs font-mono-data text-neutral-400 hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
              title="Restaurar padrão original do deck"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Padrão</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-mono-data uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer"
              style={{
                backgroundColor: selectedPalette.primary,
                color: selectedPalette.primary === '#ffffff' || selectedPalette.primary === '#facc15' ? '#000000' : '#ffffff'
              }}
            >
              Aplicar ao Catálogo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
