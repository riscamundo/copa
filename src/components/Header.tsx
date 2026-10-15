import React, { useState } from 'react';
import { ViewMode } from '../types';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (mode: ViewMode) => void;
  theme?: string;
  onToggleTheme?: () => void;
  onOpenUpload?: () => void;
  totalPhotos?: number;
  zenMode?: boolean;
  onToggleZenMode?: () => void;
  onOpenAppearance?: () => void;
  activeColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  activeColor = '#ff4d00',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: ViewMode; label: string }[] = [
    { id: 'fullwidth', label: 'Projetos' },
    { id: 'solucoes', label: 'Soluções' },
    { id: 'copalogia', label: 'Copalogia' },
  ];

  const handleNavClick = (mode: ViewMode) => {
    onViewChange(mode);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 z-40 bg-[#08090c]/95 backdrop-blur-md border-b border-white/10 text-neutral-100 transition-colors duration-300"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-2">
        {/* Logotipo copacabanabrasil */}
        <a
          id="brand-home-btn"
          href="#fullwidth"
          onClick={() => handleNavClick('fullwidth')}
          className="flex items-center text-left group cursor-pointer focus:outline-none shrink-0"
          title="copacabanabrasil — Início"
        >
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white transition-colors">
                copacabana<span style={{ color: activeColor }} className="font-bold">brasil</span>
              </span>
            </div>
            <span className="text-[9px] font-mono-data text-neutral-400 tracking-wider hidden sm:block">
              estratégia _ branding _ comunicação _ design _
            </span>
          </div>
        </a>

        {/* Menu Desktop (visível a partir de sm:) */}
        <nav className="hidden sm:flex items-center gap-1 sm:gap-1.5">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <a
                key={item.id}
                id={`nav-item-${item.id}`}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs sm:text-sm font-heading font-medium tracking-wide transition-colors cursor-pointer rounded-full whitespace-nowrap ${
                  isActive
                    ? 'text-white bg-white/10'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full"
                    style={{ backgroundColor: activeColor }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Botão Retrátil Mobile (Hambúrguer) */}
        <div className="sm:hidden flex items-center">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Alternar menu de navegação"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer flex items-center justify-center focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Painel Retrátil Mobile (Drop-down) */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-panel"
          className="sm:hidden border-t border-white/10 bg-[#08090c]/98 backdrop-blur-xl px-4 py-4 animate-fadeIn shadow-2xl"
        >
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-heading font-medium tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'text-white bg-white/10 border border-white/15'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: isActive ? activeColor : 'rgba(255,255,255,0.2)',
                      }}
                    />
                    <span>{item.label}</span>
                  </span>
                  {isActive && (
                    <span
                      className="text-[10px] font-mono-data uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/10"
                      style={{ color: activeColor }}
                    >
                      Ativo
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
