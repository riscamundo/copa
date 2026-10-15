import { PdfPalettePreset, PdfFontPreset } from '../types';

export const PDF_PALETTES: PdfPalettePreset[] = [
  {
    id: 'copa-solar-orange',
    name: 'Laranja Solar (Original do Deck)',
    primary: '#ff4d00',
    primaryHover: '#ff661a',
    primaryGlow: 'rgba(255, 77, 0, 0.3)',
    primarySubtle: 'rgba(255, 77, 0, 0.1)',
    primaryBorder: 'rgba(255, 77, 0, 0.4)',
    bgDark: '#08090c',
    surfaceDark: '#0e1015',
    cardDark: '#12151c',
    tagline: 'Tom oficial de alta energia da boutique copacabanabrasil'
  },
  {
    id: 'copa-amber-gold',
    name: 'Âmbar & Ocre Dourado',
    primary: '#d97706',
    primaryHover: '#f59e0b',
    primaryGlow: 'rgba(217, 119, 6, 0.3)',
    primarySubtle: 'rgba(217, 119, 6, 0.1)',
    primaryBorder: 'rgba(217, 119, 6, 0.4)',
    bgDark: '#0a0a0d',
    surfaceDark: '#111216',
    cardDark: '#16171d',
    tagline: 'Paleta quente e nobre com contraste equilibrado'
  },
  {
    id: 'copa-brazil-yellow',
    name: 'Amarelo Sol Brasileiro',
    primary: '#facc15',
    primaryHover: '#fde047',
    primaryGlow: 'rgba(250, 204, 21, 0.3)',
    primarySubtle: 'rgba(250, 204, 21, 0.1)',
    primaryBorder: 'rgba(250, 204, 21, 0.4)',
    bgDark: '#08080a',
    surfaceDark: '#0f0f12',
    cardDark: '#141418',
    tagline: 'Vibração luminosa inspirada no sol do Rio de Janeiro'
  },
  {
    id: 'copa-swiss-monochrome',
    name: 'Preto & Branco / Suíço Puro',
    primary: '#ffffff',
    primaryHover: '#e4e4e7',
    primaryGlow: 'rgba(255, 255, 255, 0.25)',
    primarySubtle: 'rgba(255, 255, 255, 0.08)',
    primaryBorder: 'rgba(255, 255, 255, 0.35)',
    bgDark: '#050507',
    surfaceDark: '#0d0d10',
    cardDark: '#121215',
    tagline: 'Minimalismo gráfico de alto contraste e foco no conteúdo'
  },
  {
    id: 'copa-atlantic-cyan',
    name: 'Azul Atlântico & Copacabana',
    primary: '#0284c7',
    primaryHover: '#38bdf8',
    primaryGlow: 'rgba(2, 132, 199, 0.3)',
    primarySubtle: 'rgba(2, 132, 199, 0.1)',
    primaryBorder: 'rgba(2, 132, 199, 0.4)',
    bgDark: '#06080d',
    surfaceDark: '#0a0f18',
    cardDark: '#0f1724',
    tagline: 'Referência ao mar de Copacabana e soluções de tecnologia'
  }
];

export const PDF_FONTS: PdfFontPreset[] = [
  {
    id: 'montserrat-jakarta',
    name: 'Monumental do Deck (Padrão Original)',
    displayFont: "'Montserrat', 'Poppins', sans-serif",
    headingFont: "'Montserrat', 'Poppins', sans-serif",
    bodyFont: "'Plus Jakarta Sans', -apple-system, sans-serif",
    description: 'Títulos em caixa alta geométrica pesada com kerning arquitetônico e leitura nítida.'
  },
  {
    id: 'poppins-inter',
    name: 'Geométrico Contemporâneo',
    displayFont: "'Poppins', sans-serif",
    headingFont: "'Poppins', sans-serif",
    bodyFont: "'Inter', sans-serif",
    description: 'Tipografia moderna, arredondada e precisa para comunicação de marcas ágeis.'
  },
  {
    id: 'syne-jakarta',
    name: 'Design Boutique Editorial',
    displayFont: "'Syne', 'Montserrat', sans-serif",
    headingFont: "'Poppins', sans-serif",
    bodyFont: "'Plus Jakarta Sans', sans-serif",
    description: 'Estilo autoral sofisticado com grande impacto visual em apresentações de branding.'
  },
  {
    id: 'space-grotesk',
    name: 'Grotesco Tech & Estratégia',
    displayFont: "'Space Grotesk', sans-serif",
    headingFont: "'Space Grotesk', sans-serif",
    bodyFont: "'Inter', sans-serif",
    description: 'Estética contemporânea com toque técnico para soluções digitais e apresentações C-Level.'
  }
];
