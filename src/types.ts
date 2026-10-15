export interface Pigment {
  hex: string;
  name: string;
}

export interface ArtCredits {
  creation: string[];
  account: string[];
  media: string[];
  production?: string[];
  sound?: string[];
  direction?: string;
}

export type PortfolioCategory =
  | 'apresentacoes'
  | 'logomarcas'
  | 'brandbooks'
  | 'onepagers'
  | 'anuncios'
  | 'diversos';

export interface ProjectSlide {
  id: string;
  slideNumber: number;
  title: string;
  subtitle?: string;
  categoryTag?: string;
  imageUrl: string;
  description: string;
  rationalPoints?: string[];
  deliverable?: string;
  metrics?: { label: string; value: string };
}

export interface ArtProject {
  id: string;
  title: string;
  client: string; // Marca / Anunciante (Atento, Rio 2016, monk.ia, LavAí, etc.)
  category?: PortfolioCategory;
  series: string; // Categoria amigável (Apresentações, Logomarcas, Brand Books, One Pagers, Anúncios, Diversos)
  medium: string; // Meio / Formatos (ex: Pitch Deck 16:9, Naming & Manual, Guia de Identidade)
  dimensions?: string; // Formatos & Resolução
  support: string; // Aplicação / Praça (ex: Corporativo Brasil, Global, São Paulo, Hipermercados)
  techniqueDetails: string; // Padrão de Arte & Direção Criativa
  finish?: string; // Destaque / Entrega
  description: string; // Insight estratégico & Descrição
  curatorNote: string; // Análise de Direção de Arte & Padrão Visual Widescreen 16:9 4K
  url: string;
  thumbnailUrl?: string;
  aspectRatio: '16:9' | '3:2' | '4:3' | '21:9' | '1:1';
  colorPalette: Pigment[];
  credits?: ArtCredits;
  awardBadge?: string;
  clientLogoSvg?: string;
  isUserUpload?: boolean;
  slideNumber?: number;
  slides?: ProjectSlide[];
}

// Alias for backwards compatibility
export type Photo = ArtProject;

export type ViewMode = 'fullwidth' | 'presentation' | 'index' | 'copalogia' | 'solucoes';

export type ThemeMode = 'dark' | 'light';

export interface PdfPalettePreset {
  id: string;
  name: string;
  primary: string;
  primaryHover: string;
  primaryGlow: string;
  primarySubtle: string;
  primaryBorder: string;
  bgDark: string;
  surfaceDark: string;
  cardDark: string;
  tagline: string;
}

export interface PdfFontPreset {
  id: string;
  name: string;
  displayFont: string;
  headingFont: string;
  bodyFont: string;
  description: string;
}

