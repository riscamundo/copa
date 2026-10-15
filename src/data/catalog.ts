import { ArtProject, PortfolioCategory } from '../types';
import { PROJECT_SLIDES_MAP, getProjectSlides } from './projectSlidesData';

export const CATALOG_CATEGORIES = [
  'Todos os Projetos',
  'Apresentações',
  'Logomarcas',
  'Brand Books',
  'One Pagers & Papers',
  'Anúncios',
  'Diversos'
];

export interface CopacabanaSolution {
  id: string;
  number: string;
  category: PortfolioCategory;
  title: string;
  hook: string;
  desc: string;
  highlights: string[];
}

export const COPACABANA_SOLUTIONS: CopacabanaSolution[] = [
  {
    id: 'presentations',
    number: '01',
    category: 'apresentacoes',
    title: 'APRESENTAÇÕES ESTRATÉGICAS, COMERCIAIS E DE TREINAMENTO',
    hook: 'A IA ajuda a fazer. A experiência ajuda a pensar, construir e fazer sua mensagem se destacar.',
    desc: 'Conteúdo qualquer ferramenta faz. Nós transformamos informação em argumento, narrativa e impacto.',
    highlights: ['Pitch Decks & Captação', 'Propostas Comerciais', 'Apresentações Institucionais', 'Roadshows & Vendas']
  },

  {
    id: 'training',
    number: '02',
    category: 'apresentacoes',
    title: 'TREINAMENTOS E CAPACITAÇÃO PARA OS TIMES DAS EMPRESAS',
    hook: 'Seu time pode fazer slides. Nós ensinamos a fazer apresentações que funcionam.',
    desc: 'Não basta saber fazer slides. É preciso saber construir ideias que convencem.',
    highlights: ['Workshops de Estrutura & Narrativa', 'Design de Alto Desempenho', 'Técnicas de Pitch', 'Oratória & Segurança']
  },

  {
    id: 'branding',
    number: '03',
    category: 'logomarcas',
    title: 'CONCEPÇÃO, ESTRUTURAÇÃO E ORGANIZAÇÃO DE MARCA',
    hook: 'Do propósito ao go-to-market, construímos marcas que sabem quem são, o que dizem e como querem ser percebidas.',
    desc: 'Marca forte não é só identidade. É estratégia, coerência e uma ideia que ocupa espaço.',
    highlights: ['Naming & Nomenclatura', 'Identidade Visual & Logomarca', 'Narrativa de Marca', 'Posicionamento Estratégico']
  },

  {
    id: 'systems',
    number: '04',
    category: 'brandbooks',
    title: 'DESIGN DE ALTO NÍVEL E SISTEMAS VISUAIS PARA MARCAS DE VALOR',
    hook: 'Uma marca não vive no brand book. Vive em tudo o que as pessoas veem, leem e experimentam.',
    desc: 'Criamos sistemas que fazem a marca funcionar — bonita, consistente e viva em todos os pontos de contato.',
    highlights: ['Arquitetura de Marca', 'Guidelines & Manuais', 'Templates Corporativos', 'Padronização Escalonável']
  },

  {
    id: 'gtm',
    number: '05',
    category: 'anuncios',
    title: 'GROWTH PLANNING, MKT DIGITAL E CONTEÚDO',
    hook: 'Da estratégia à execução, conectamos marca, conteúdo e performance para transformar presença em crescimento.',
    desc: 'Estratégia, conteúdo e performance trabalhando juntos para transformar presença em resultado.',
    highlights: ['Growth Planning', 'MKT Digital & Performance', 'Estratégia de Conteúdo', 'Planos de Comunicação']
  },

  {
    id: 'saleskits',
    number: '06',
    category: 'onepagers',
    title: 'ENXOVAIS COMERCIAIS E DE GO-TO-MARKET',
    hook: 'Tudo o que seus times precisam para entrar em campo preparados para apresentar, argumentar e vender.',
    desc: 'Tudo pronto para vender melhor: argumentos, ferramentas, conteúdos e materiais que aceleram o negócio.',
    highlights: ['One-Pagers & Lâminas', 'Decks de Produto', 'Kits de Conversão Comercial', 'Assets de Venda']
  }
];

export interface CopalogiaStep {
  step: string;
  name: string;
  desc: string;
  action: string;
  image: string;
}

export const COPALOGIA_STEPS: CopalogiaStep[] = [
  {
    step: '.01',
    name: 'Ouvir',
    desc: 'Imersão empática nas dores, desafios, objetivos estratégicos e essência da empresa.',
    action: 'Escuta ativa e diagnóstico inicial com os tomadores de decisão.',
    image: './assets/imagens/ouvir.png'
  },
  {
    step: '.02',
    name: 'Planejar',
    desc: 'Roteirização detalhada, definição de rota, mensagens-chave e cronograma rigoroso.',
    action: 'Estruturação lógica e alinhamento de expectativas.',
    image: './assets/imagens/planejar.png'
  },
  {
    step: '.03',
    name: 'Criar',
    desc: 'Exploração conceitual e direção visual sem amarras, traduzindo complexidade em estética pura.',
    action: 'Design livre e testes de narrativa de alto impacto.',
    image: './assets/imagens/criar.png'
  },
  {
    step: '.04',
    name: 'Definir',
    desc: 'Validação conjunta do caminho ideal, refinamento de paleta, tipografia e tom de voz.',
    action: 'Fechamento da espinha dorsal estratégica e visual.',
    image: './assets/imagens/definir.png'
  },
  {
    step: '.05',
    name: 'Fazer',
    desc: 'Execução técnica de máxima precisão: grid, proporções áureas, acabamento gráfico e legibilidade.',
    action: 'Desenvolvimento das peças, telas e suportes com rigor técnico.',
    image: './assets/imagens/fazer.png'
  },
  {
    step: '.06',
    name: 'Entregar',
    desc: 'Finalização cirúrgica com entrega de arquivos abertos, manuais, brandbooks e pacotes de uso.',
    action: 'Passagem de bastão descomplicada e pronta para veiculação.',
    image: './assets/imagens/entregar.png'
  },
  {
    step: '.07',
    name: 'Acompanhar',
    desc: 'Acompanhamento consultivo contínuo lado a lado para garantir consistência e evolução da marca.',
    action: 'Parceria de longo prazo orientando escolhas e resultados.',
    image: './assets/imagens/acompanhar.png'
  }
];

export const COPACABANA_CLIENTS = [
  { name: 'Atento', category: 'Telecom & CX' },
  { name: 'Auden MFA', category: 'Educação & EAD' },
  { name: 'Aunica', category: 'Tecnologia & Dados' },
  { name: 'Blue6ix', category: 'CX & IA' },
  { name: 'Carrefour', category: 'Varejo & Serviços' },
  { name: 'Cliqx', category: 'Omnichannel & Tech' },
  { name: 'Coca-Cola', category: 'Bebidas & Consumo' },
  { name: 'Direct-Talk', category: 'Atendimento & CRM' },
  { name: 'Disney', category: 'Entretenimento' },
  { name: 'Elleven', category: 'Corporate' },
  { name: 'Fartura Gastronomia', category: 'Cultura & Gastronomia' },
  { name: 'Genesys', category: 'SaaS & Enterprise' },
  { name: 'Genoa', category: 'Big Data & IA' },
  { name: 'Fundação Índigo', category: 'Governança & Inovação' },
  { name: 'Instituto José Resende', category: 'Arte Contemporânea' },
  { name: 'Interaxa', category: 'Omnichannel & WhatsApp' },
  { name: 'JA Brasil', category: 'Educação & Empreendedorismo' },
  { name: 'Mutant', category: 'Customer Experience' },
  { name: 'PAC', category: 'Projetos Sociais' },
  { name: 'Segurpro', category: 'Segurança Integrada' },
  { name: 'System Interact', category: 'Tecnologia' },
  { name: 'Target Bank', category: 'Fintech & Logística' },
  { name: 'Ticket', category: 'Benefícios & Corporativo' },
  { name: 'Voxline', category: 'Customer Care' },
  { name: 'WIM', category: 'App & Fidelidade' },
  { name: 'Woxel', category: 'Low-code & Dev' },
  { name: 'ZiliCred', category: 'Crédito Imobiliário' },
  { name: 'Rio 2016', category: 'Comitê Olímpico' },
  { name: 'JBS', category: 'Agronegócio Global' },
  { name: 'DeLonghi', category: 'Eletrodomésticos Premium' },
  { name: 'Lavai', category: 'Serviços' },
  { name: 'Lavei', category: 'Go-to-Market & Serviços' },
  { name: 'Vilanana', category: 'Varejo' },
  { name: 'Pernambucanas', category: 'Varejo & Serviços Financeiros' },
  { name: 'Eater', category: 'Gastronomia & Food' }
];

export const COPACABANA_MANIFESTO = {
  headline: 'Há mais de 25 anos acelerando marcas de todos os tamanhos.',
  tagline: 'estratégia _ branding _ comunicação _ design _',
  subheading: 'Transformamos visão em posicionamento, ideias em presença e negócios em potências.',
  body: 'A Copa é uma boutique de estratégia, branding, comunicação e design que há mais de 25 anos acelera marcas de todos os tamanhos. Transformamos visão em posicionamento, ideias em presença e negócios em potências.\n\nEntramos para clarear, destravar e fazer acontecer — junto com você. Com processo, criatividade e atitude, trabalhamos lado a lado, de forma próxima e consultiva, para orientar escolhas, estruturar ações e impulsionar resultados.',
  partnershipQuote: 'Aqui não tem essa de fornecedor. Somos parte do time porque jogamos junto de verdade.',
  closure: 'Parceria real e construção conjunta são o nosso jeito de fazer.'
};

export const COPACABANA_IDEA_MARKET = {
  title: 'Da ideia ao Mercado',
  paragraphs: [
    'Tem coisa que a gente não entrega. A gente acompanha nascer.',
    'Tem empreendedor que chega com uma ideia. Tem empresa que precisa se reinventar. Tem profissional que sabe que precisa mudar, mas ainda não sabe exatamente para onde. É aí que a Copa entra.',
    'Ajudamos a organizar a ideia, encontrar o propósito, definir o posicionamento, construir a marca, afiar a oferta e colocar tudo para rodar no mercado. É estratégia, branding, comunicação e negócio trabalhando juntos. De perto. Na prática.',
    'Estar ao lado de quem está criando ou recriando um negócio, fazendo as perguntas certas, provocando, organizando e construindo junto.',
    'Da primeira ideia ao go-to-market. E, se fizer sentido, muito além dele.'
  ]
};

export const COPACABANA_METHOD_QUESTIONS = {
  title: 'Copa',
  subtitle: 'Pensando junto. Criando junto. Jogando junto.',
  questions: [
    { label: 'ideia', question: 'O que estamos criando?' },
    { label: 'propósito', question: 'Por que isso precisa existir?' },
    { label: 'posicionamento', question: 'Onde queremos jogar?' },
    { label: 'marca', question: 'Como vamos ser reconhecidos?' },
    { label: 'oferta', question: 'O que vamos colocar na mesa?' },
    { label: 'go-to-market', question: 'Como vamos chegar ao mercado?' },
    { label: 'evolução', question: 'Como continuamos relevantes?' }
  ]
};

export const INITIAL_PROJECTS: ArtProject[] = [
{
    id: 'case-atento-proposta',
    title: 'Atento — Proposta Comercial & Transformação Digital',
    client: 'Atento Brasil',
    category: 'apresentacoes',
    series: 'Apresentações',
    medium: 'Deck Comercial Executivo & Proposta de Valor',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Apresentação Corporativa C-Level • São Paulo, Brasil',
    techniqueDetails: 'Arquitetura de informação modular, narrativa consultiva de alto impacto, diagramação fluida de ecossistema digital (Early Collection, One Stop Shop, Canais Humanizados).',
    finish: 'Taxa de Conversão Recorde em Contratos Enterprise',
    awardBadge: 'Deck Estratégico C-Level',
    description: 'Transformação da proposta comercial da Atento em um material claro, direto e verdadeiramente vendedor — capaz de comunicar valor com precisão, inspirar confiança imediata e elevar a experiência de quem avalia e contrata.',
    curatorNote: 'Padrão copacabanabrasil: Diagramação de colunas em 3 blocos, gradação de cor do laranja institucional sobre charcoal e contraste cirúrgico dos cards de métricas (100% de resolução, 84% de aprovação, 50% de custo).',
    aspectRatio: '16:9',
    url: './assets/imagens/capa1_atento.png',
    thumbnailUrl: './assets/imagens/capa1_atento.png',
    colorPalette: [
      { hex: '#ea580c', name: 'Laranja Atento Oficial' },
      { hex: '#111418', name: 'Preto Carvão Profundo' },
      { hex: '#0284c7', name: 'Azul Conectividade' },
      { hex: '#f8fafc', name: 'Branco Tipográfico' }
    ],
    credits: {
      creation: ['copacabanabrasil (Roteirização & Direção de Arte)'],
      account: ['Atendimento Consultivo Copa'],
      media: ['Deck Executivo para Tomadores de Decisão']
    }
  },
{
    id: 'case-rio-2016',
    title: 'Rio 2016 — Apresentação da Conquista do Sonho Olímpico',
    client: 'Comitê Olímpico Brasileiro / Carlos Arthur Nuzman',
    category: 'apresentacoes',
    series: 'Apresentações',
    medium: 'Deck Oficial de Defesa de Candidatura Internacional',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Comitê Olímpico Internacional (COI) • Lausanne / Copenhague',
    techniqueDetails: 'Linha do tempo estratégica (2004 a 2009), infografia geopolítica de notas de avaliação comparativa, estética solar brasileira e narrativa de superação emocional.',
    finish: 'Vitória Histórica do Rio de Janeiro como Cidade-Sede dos Jogos 2016',
    awardBadge: 'Case Histórico Mundial — Eleição Rio 2016',
    description: 'Apresentação determinante liderada pela presidência do comitê brasileiro, demonstrando a maturidade logística pós-Pan 2007, superando cidades favoritas como Madri, Tóquio e Chicago através de uma narrativa apaixonante e dados técnicos irrefutáveis.',
    curatorNote: 'Padrão copacabanabrasil: Marcos cronológicos estilizados como um passaporte internacional e diagramação da esteira de decisões das sedes mundiais com precisão milimétrica.',
    aspectRatio: '16:9',
    url: './assets/imagens/capa2_rio2007.png',
    thumbnailUrl: './assets/imagens/capa2_rio2007.png',
    colorPalette: [
      { hex: '#16a34a', name: 'Verde Bandeira Brasil' },
      { hex: '#eab308', name: 'Amarelo Ouro Olímpico' },
      { hex: '#2563eb', name: 'Azul Guanabara' },
      { hex: '#ffffff', name: 'Branco Puro' }
    ],
    credits: {
      creation: ['copacabanabrasil (Conceito, Roteiro & Design)'],
      account: ['Comitê Olímpico Brasileiro'],
      media: ['Apresentação para Delegados do COI']
    }
  },
{
    id: 'case-genoa-performance',
    title: 'Genoa — Performance Platform Like No Other',
    client: 'Genoa Intelligence & Algoritmos',
    category: 'apresentacoes',
    series: 'Apresentações',
    medium: 'Deck de Soluções de Big Data, Algoritmos & IA',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Enterprise Roadshow • São Paulo & Global',
    techniqueDetails: 'Metáfora náutica com fotografia imersiva de veleiro e iceberg, matriz de maturidade em dados e IA, pirâmide de processamento de algoritmos e métricas de acurácia.',
    finish: 'Posicionamento Líder em Modelagem Preditiva B2B',
    awardBadge: 'Excelência em Visualização de Dados',
    description: 'Roteirização e design para apresentar uma das plataformas de algoritmos e processamento de dados mais avançadas do país, traduzindo complexidade técnica em valor tangível de negócios.',
    curatorNote: 'Padrão copacabanabrasil: Alinhamento da matriz de dispersão de dados, gráficos em ciano glacial e paleta náutica escura com contraste preciso para leitura em projetores e monitores.',
    aspectRatio: '16:9',
    url: './assets/imagens/apresentacoes-genoa-intelligence--algoritmos.png',
    thumbnailUrl: './assets/imagens/apresentacoes-genoa-intelligence--algoritmos.png',
    colorPalette: [
      { hex: '#06b6d4', name: 'Ciano Algoritmo' },
      { hex: '#0f172a', name: 'Azul Mar Profundo' },
      { hex: '#64748b', name: 'Cinza Metálico' },
      { hex: '#ffffff', name: 'Branco Luz' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Genoa Intelligence'],
      media: ['Investidores & C-Level']
    }
  },
{
    id: 'case-cliqx-shop',
    title: 'Cliqx — Shop Cliqx & Omnichannel Total Experience',
    client: 'Cliqx Tecnologia',
    category: 'apresentacoes',
    series: 'Apresentações',
    medium: 'Deck de Produto & Ecossistema Conversational Commerce',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Varejo Digital & Grandes Redes Nacionais',
    techniqueDetails: 'Diagrama circular de ecossistema integrado (VTEX, Magento, WhatsApp API, Live Commerce), cards de dados do e-commerce brasileiro e mockups mobile.',
    finish: 'Implementação em Grandes Varejistas Brasileiros',
    awardBadge: 'Total Experience Architecture',
    description: 'Apresentação comercial e técnica da suíte Cliqx, conectando catálogo digital, robôs de venda 24h, pagamentos PIX/Cartão e integração de esteira física com digital.',
    curatorNote: 'Padrão copacabanabrasil: Círculo concêntrico de arquitetura da solução com ícones estilizados e integração da paleta ciano neon sobre fundo escuro absoluto.',
    aspectRatio: '16:9',
    url: './assets/imagens/apresentacoes-cliqx-tecnologia.png',
    thumbnailUrl: './assets/imagens/apresentacoes-cliqx-tecnologia.png',
    colorPalette: [
      { hex: '#06b6d4', name: 'Ciano Cliqx Neon' },
      { hex: '#0a0d14', name: 'Preto Tecnológico' },
      { hex: '#10b981', name: 'Verde Conversão' },
      { hex: '#e2e8f0', name: 'Cinza Interface' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Cliqx Tecnologia'],
      media: ['Prospecção Comercial']
    }
  },
{
    id: 'case-natural-terra',
    title: 'Natural da Terra — Digitalmente Natural',
    client: 'Hortifruti Natural da Terra',
    category: 'apresentacoes',
    series: 'Apresentações',
    medium: 'Apresentação Estratégica de Experiência Digital & Personas',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Conselho Administrativo & Operações • RJ & SP',
    techniqueDetails: 'Mapeamento minucioso de personas (Ana Maria Crossfitter, Bruno Foodie), esteira de atendimento humanizado via WhatsApp e design de catálogo digital.',
    finish: 'Aumento de 60% no Ticket Médio Digital',
    awardBadge: 'CX & Personas Design',
    description: 'Planejamento e deck para unificar o atendimento digital do Hortifruti Natural da Terra, transformando o WhatsApp em canal de consulta resolutivo e afetivo.',
    curatorNote: 'Padrão copacabanabrasil: Riqueza das fichas de personas, tipografia em tons terrosos e contraste acolhedor entre o verde vegetal e o laranja citrino.',
    aspectRatio: '16:9',
    url: './assets/imagens/apresentacoes-hortifruti-natural-da-terra.png',
    thumbnailUrl: './assets/imagens/apresentacoes-hortifruti-natural-da-terra.png',
    colorPalette: [
      { hex: '#15803d', name: 'Verde Folhagem' },
      { hex: '#ea580c', name: 'Laranja Citrino' },
      { hex: '#1e293b', name: 'Ardósia Escura' },
      { hex: '#fef3c7', name: 'Creme Natural' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Hortifruti Natural da Terra'],
      media: ['Planejamento Estratégico']
    }
  },
{
    id: 'case-target-bank',
    title: 'Target Bank — Target Integra & Nova Visão de Negócios',
    client: 'Target Bank',
    category: 'apresentacoes',
    series: 'Apresentações',
    medium: 'Apresentação de Modelo Comercial & Esteira do Cliente',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Transportadoras, TMS e Operadores de Crédito Brasil',
    techniqueDetails: 'Arquitetura comercial de ganho compartilhado, diagrama modular em formato lego e esteira de ciclo de vida com infografia circular em degradê amarelo e cinza.',
    finish: 'Expansão de 300% na Rede de Transportadoras Integradas',
    awardBadge: 'Fintech Architecture Deck',
    description: 'Apresentação da solução que unificou CIOT, VP com taxa zero, crédito operacional e abastecimento com vantagens progressivas para frotas e caminhoneiros.',
    curatorNote: 'Padrão copacabanabrasil: Módulos em perspectiva isométrica de blocos e alinhamento de texto em caixas de alta densidade sem poluição visual.',
    aspectRatio: '16:9',
    url: './assets/imagens/apresentacoes-target-bank.png',
    thumbnailUrl: './assets/imagens/apresentacoes-target-bank.png',
    colorPalette: [
      { hex: '#f59e0b', name: 'Amarelo Target' },
      { hex: '#18181b', name: 'Grafite Escuro' },
      { hex: '#71717a', name: 'Cinza Estrutural' },
      { hex: '#ffffff', name: 'Branco Puro' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Target Bank'],
      media: ['Apresentação de Novos Negócios']
    }
  },
  {
    id: 'case-logo-monkia',
    title: 'monk.ia — Startup de Inteligência Artificial Corporativa',
    client: 'monk.ia Technology',
    category: 'logomarcas',
    series: 'Logomarcas',
    medium: 'Identidade Visual Completa & Tipografia Autoral',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Aplicações Corporativas de IA, Fachadas e Uniformes',
    techniqueDetails: 'Ícone carismático de macaco em traço contínuo com piscadela inteligente, contrastando com tipografia sans-serif geométrica em caixa baixa com ponto final enfático.',
    finish: 'Identidade Validada e Lançamento Bem-Sucedido no Ecossistema Tech',
    awardBadge: 'Design de Ícone & Naming Tech',
    description: 'Criação de logomarca e identidade corporativa para startup com foco em inteligência artificial e desenvolvimento de aplicações corporativas.',
    curatorNote: 'Padrão copacabanabrasil: Aplicação em patch bordado com textura tátil e a precisão do ponto no "i.a", simbolizando o fechamento inteligente de processos.',
    aspectRatio: '16:9',
    url: './assets/imagens/logomarcas-monkia-technology.png',
    thumbnailUrl: './assets/imagens/logomarcas-monkia-technology.png',
    colorPalette: [
      { hex: '#ffffff', name: 'Branco Puro' },
      { hex: '#0a0a0c', name: 'Preto Absoluto' },
      { hex: '#3b82f6', name: 'Azul IA Reflexo' },
      { hex: '#e2e8f0', name: 'Cinza Minimalista' }
    ],
    credits: {
      creation: ['copacabanabrasil (Naming, Ícone & Sistema)'],
      account: ['monk.ia'],
      media: ['Branding 360°']
    }
  },
{
    id: 'case-logo-lavai',
    title: 'LavAí — Startup de Lavanderias Self-Service',
    client: 'LavAí Hipermercados',
    category: 'logomarcas',
    series: 'Logomarcas',
    medium: 'Naming, Marca, Personagem 3D & Enxoval de Trade',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Grandes Redes de Hipermercados (Extra, Carrefour, etc.)',
    techniqueDetails: 'Lettering arredondado e amigável simulando bolhas de sabão, personagem 3D proprietário ("Lavínia"), mote memorável ("Lavou, secou, amou!") e paleta ciano radiante.',
    finish: 'Rede com Dezenas de Unidades em Operação',
    awardBadge: 'Branding de Varejo & Mascote 3D',
    description: 'Projeto completo de logomarca, naming, identidade corporativa, personagem e enxoval de trade para startup de lavanderias de conveniência self-service localizadas em grandes hipermercados.',
    curatorNote: 'Padrão copacabanabrasil: Encaixe orgânico das letras "L-A-V-A-Í", o símbolo de bolha de ar no "í" e a textura dos displays promocionais de R$10 e R$14 por ciclo.',
    aspectRatio: '16:9',
    url: './assets/imagens/logomarcas-lavai-hipermercados.png',
    thumbnailUrl: './assets/imagens/logomarcas-lavai-hipermercados.png',
    colorPalette: [
      { hex: '#0284c7', name: 'Azul Ciano LavAí' },
      { hex: '#38bdf8', name: 'Azul Bolha Claro' },
      { hex: '#0f172a', name: 'Azul Noturno Base' },
      { hex: '#ffffff', name: 'Branco Espuma' }
    ],
    credits: {
      creation: ['copacabanabrasil (Naming, Marca & 3D)'],
      account: ['LavAí'],
      media: ['Trade & PDV']
    }
  },
{
    id: 'case-logo-blue6ix',
    title: 'blue6ix — Customer Experience & Inteligência de Áudio',
    client: 'blue6ix (Interaxa Company)',
    category: 'logomarcas',
    series: 'Logomarcas',
    medium: 'Identidade Visual & Enxoval Go-To-Market',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Tecnologia para Call Centers e Inteligência de Atendimento',
    techniqueDetails: 'Símbolo "6" fundido a um alvo concêntrico de medição acústica, tipografia em caixa baixa contemporânea e tom de azul cyan profundo.',
    finish: 'Lançamento Estratégico com Aceleração de Vendas',
    awardBadge: 'Tech Identity Design',
    description: 'Projeto de logomarca, identidade corporativa, enxoval go-to-market e acompanhamento consultivo da comunicação para startup de tecnologia de atendimento, transcrição de áudios e relatórios de performance.',
    curatorNote: 'Padrão copacabanabrasil: Rigor do encaixe do número 6 no monograma e a textura tátil do cartão de visitas com verniz localizado sobre fundo grafite.',
    aspectRatio: '16:9',
    url: './assets/imagens/logomarcas-blue6ix-interaxa-company.png',
    thumbnailUrl: './assets/imagens/logomarcas-blue6ix-interaxa-company.png',
    colorPalette: [
      { hex: '#0284c7', name: 'Azul blue6ix' },
      { hex: '#111827', name: 'Preto Grafite' },
      { hex: '#94a3b8', name: 'Cinza Técnico' },
      { hex: '#ffffff', name: 'Branco Alvo' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['blue6ix'],
      media: ['Corporate & Go-To-Market']
    }
  },
{
    id: 'case-logo-directtalk',
    title: 'Direct-Talk — Redesenho de Marca & Plataforma',
    client: 'Direct-Talk (Líder em Atendimento)',
    category: 'logomarcas',
    series: 'Logomarcas',
    medium: 'Redesenho de Logomarca, Brand Guidelines & Ambientação',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Plataforma Líder de Chatbot e Help Desk no Brasil',
    techniqueDetails: 'Evolução de marca com balão de fala icônico estilizado em pixels no hífen ("-"), tipografia bold condensada em caixa alta e cores Pantone 1505 CV e 5115 CV.',
    finish: 'Adoção Unânime por Milhares de Empresas Clientes',
    awardBadge: 'Redesenho de Marca Consolidada',
    description: 'Projeto de redesenho de logomarca, identidade corporativa, enxoval go-to-market e acompanhamento consultivo da comunicação para empresa consolidada de soluções de atendimento para call centers.',
    curatorNote: 'Padrão copacabanabrasil: Área de respiro e encaixe geométrico das letras "D-I-R-E-C-T-T-A-L-K", além da vibração do laranja de transição digital.',
    aspectRatio: '16:9',
    url: './assets/imagens/logomarcas-direct-talk-lider-em-atendimento.png',
    thumbnailUrl: './assets/imagens/logomarcas-direct-talk-lider-em-atendimento.png',
    colorPalette: [
      { hex: '#f97316', name: 'Laranja Direct-Talk' },
      { hex: '#0f172a', name: 'Preto Corporativo' },
      { hex: '#a855f7', name: 'Roxo Pantone 5115' },
      { hex: '#ffffff', name: 'Branco Tipográfico' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Direct-Talk'],
      media: ['Brand Rejuvenation']
    }
  },
{
    id: 'case-logo-jose-resende',
    title: 'Instituto José Resende — Arte Contemporânea & Escultura',
    client: 'Instituto José Resende',
    category: 'logomarcas',
    series: 'Logomarcas',
    medium: 'Identidade Visual, Chancelas, Catálogos e Site',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'São José do Barreiro • São Paulo, SP',
    techniqueDetails: 'Selo circular em linha com gravura técnica da célebre obra "Vagões e Cabo de Aço" (2001), tipografia serifada de proporções perfeitas e estética editorial museológica.',
    finish: 'Referência em Identidade Cultural de Alta Estirpe',
    awardBadge: 'Design Cultural & Museológico',
    description: 'Projeto de logomarca, identidade corporativa e acompanhamento da comunicação para o instituto de arte contemporânea do renomado artista José Resende.',
    curatorNote: 'Padrão copacabanabrasil: Detalhes da amarração dos cabos nos vagões no selo oficial e diagramação dos catálogos com encadernação nobre e tipografia clássica.',
    aspectRatio: '16:9',
    url: './assets/imagens/logomarcas-instituto-jose-resende.png',
    thumbnailUrl: './assets/imagens/logomarcas-instituto-jose-resende.png',
    colorPalette: [
      { hex: '#1c1917', name: 'Preto Escultórico' },
      { hex: '#e7e5e4', name: 'Cinza Pedra Calcária' },
      { hex: '#d97706', name: 'Ferrugem Corten' },
      { hex: '#ffffff', name: 'Branco Papel Fabriano' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Instituto José Resende'],
      media: ['Identidade de Arte & Cultura']
    }
  },
{
    id: 'case-logo-jornadda',
    title: 'Jornadda — The Customer Journey Company',
    client: 'Jornadda',
    category: 'logomarcas',
    series: 'Logomarcas',
    medium: 'Naming, Identidade 3D & Enxoval Go-To-Market',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Aplicações Mobile, Materiais Corporativos e App',
    techniqueDetails: 'Letra "J" estilizada em fita helicoidal tridimensional verde vibrante, expressando a continuidade e fluidez infinita da jornada do consumidor.',
    finish: 'Posicionamento Destacado em Customer Experience B2B',
    awardBadge: '3D Monogram & Naming',
    description: 'Projeto de logomarca, naming, identidade corporativa e enxoval go-to-market para startup de tecnologia e desenvolvimento de aplicações corporativas.',
    curatorNote: 'Padrão copacabanabrasil: Degradê volumétrico da fita do monograma e a tipografia institucional personalizada com cantos suavemente lapidados.',
    aspectRatio: '16:9',
    url: './assets/imagens/logomarcas-jornadda.png',
    thumbnailUrl: './assets/imagens/logomarcas-jornadda.png',
    colorPalette: [
      { hex: '#84cc16', name: 'Verde Lima Jornadda' },
      { hex: '#15803d', name: 'Verde Floresta Fita' },
      { hex: '#09090b', name: 'Preto Fundo' },
      { hex: '#ffffff', name: 'Branco Puro' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Jornadda'],
      media: ['Corporate Identity']
    }
  },
{
    id: 'case-brandbook-triveela',
    title: 'Triveela — Brand Book & Guia de Aplicação 2022',
    client: 'Triveela Gastronomia & Vinhos',
    category: 'brandbooks',
    series: 'Brand Books',
    medium: 'Manual Completo de Marca & Guidelines de Design',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Governança de Marca, Embalagens e Franquias',
    techniqueDetails: 'Grid estrutural com área de reserva, paleta cromática em tons de terracota, ouro e café, biblioteca com mais de 80 ícones autorais de apoio e diretrizes de fotografia sensorial.',
    finish: 'Manual Adotado em Todas as Unidades e Parceiros',
    awardBadge: 'Excelência em Governança de Marca',
    description: 'Guia definitivo de aplicação da marca Triveela: reúne critérios de exclusividade, sofisticação, limites de redução, paleta de cores para packaging e e-commerce.',
    curatorNote: 'Padrão copacabanabrasil: Malha de proporção áurea com o brasão de três pilares e a harmonia das amostras Pantone e CMYK cuidadosamente tabeladas.',
    aspectRatio: '16:9',
    url: './assets/imagens/brandbooks-triveela-gastronomia--vinhos.png',
    thumbnailUrl: './assets/imagens/brandbooks-triveela-gastronomia--vinhos.png',
    colorPalette: [
      { hex: '#ea580c', name: 'Terracota Triveela' },
      { hex: '#0f172a', name: 'Azul Escuro Noturno' },
      { hex: '#f59e0b', name: 'Ouro Champagne' },
      { hex: '#ffffff', name: 'Branco Papel Seda' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Triveela'],
      media: ['Brand Governance']
    },
    slideNumber: 44
  },
{
    id: 'case-brandbook-cliqx',
    title: 'Cliqx — Manual de Identidade Visual Corporativa',
    client: 'Cliqx Tecnologia',
    category: 'brandbooks',
    series: 'Brand Books',
    medium: 'Brandbook Digital & Diretrizes de Fotografia',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Desenvolvedores, Marketing e Parceiros Comerciais',
    techniqueDetails: 'Especificação das cores "Eu Sou Humano" e "Eu Sou Profissional", paleta Pantone 311 C e 7547 C, estilos fotográficos (natural/lifestyle, tratamento e abstrato).',
    finish: 'Padronização Unificada de Toda a Comunicação',
    awardBadge: 'System Guidelines Design',
    description: 'Manual de identidade visual completo com introdução inspiradora, variações cromáticas sobre fundos claros e escuros, e biblioteca de iconografia de produto.',
    curatorNote: 'Padrão copacabanabrasil: Testes de contraste do ícone da mãozinha em gradiente ciano sobre fundos escuros e os templates de UI mobile.',
    aspectRatio: '16:9',
    url: './assets/imagens/brandbooks-cliqx-tecnologia.png',
    thumbnailUrl: './assets/imagens/brandbooks-cliqx-tecnologia.png',
    colorPalette: [
      { hex: '#06b6d4', name: 'Ciano Pantone 311 C' },
      { hex: '#0f172a', name: 'Marinho Pantone 7547 C' },
      { hex: '#22c55e', name: 'Verde Pantone 802 C' },
      { hex: '#f8fafc', name: 'Branco Base' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Cliqx'],
      media: ['Brandbook 2021']
    },
    slideNumber: 43
  },
{
    id: 'case-onepager-interaxa-waap',
    title: 'Interaxa WAAP — WhatsApp API Provider (130M)',
    client: 'Interaxa & WhatsApp Business',
    category: 'onepagers',
    series: 'One Pagers & Papers',
    medium: 'Lâmina Comercial de Alto Impacto & One Pager Digital',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Grandes Contas Corporativas & Call Centers',
    techniqueDetails: 'Chamada provocativa ("130 Milhões de brasileiros estão no WhatsApp. Sua marca vai continuar no improviso?"), dados de mercado e arquitetura de integração de bots.',
    finish: 'Fechamento de dezenas de contratos corporativos WhatsApp API',
    awardBadge: 'Lâmina Comercial de Alta Conversão',
    description: 'One-pager de vendas desenvolvido para a Interaxa se posicionar como líder na integração oficial do WhatsApp Business API, acelerando o ciclo de negociação.',
    curatorNote: 'Padrão copacabanabrasil: Halftoning azul na imagem do usuário, equilíbrio dos números "+40 MM de interações/dia" e a clareza do CTA direto.',
    aspectRatio: '16:9',
    url: './assets/imagens/onepagers-interaxa--whatsapp-business.png',
    thumbnailUrl: './assets/imagens/onepagers-interaxa--whatsapp-business.png',
    colorPalette: [
      { hex: '#0284c7', name: 'Azul WAAP' },
      { hex: '#25d366', name: 'Verde WhatsApp' },
      { hex: '#0f172a', name: 'Preto Corporativo' },
      { hex: '#f8fafc', name: 'Branco Texto' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Interaxa'],
      media: ['Vendas B2B']
    },
    slideNumber: 49
  },
  {
    id: 'case-onepager-pernambucanas',
    title: 'Pernambucanas — Lâminas Cartões Múltiplos & Odonto',
    client: 'Pernambucanas Soluções Financeiras',
    category: 'onepagers',
    series: 'One Pagers & Papers',
    medium: 'Série de Lâminas Comerciais & Materiais de Balcão',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Centenas de Lojas Pernambucanas em Todo o Brasil',
    techniqueDetails: 'Cores codificadas por produto (Azul para Odonto, Amarelo para Cartões Múltiplos, Laranja para Bem-Estar Cuidar Mais), tabelas comparativas de benefícios e QR codes.',
    finish: 'Aumento Expressivo na Adesão de Serviços Financeiros em Loja',
    awardBadge: 'Retail Financial One-Pagers',
    description: 'Desenvolvimento do kit completo de lâminas para produtos de seguros, odontologia e cartões múltiplos das Casas Pernambucanas, com linguagem acessível e design solar.',
    curatorNote: 'Padrão copacabanabrasil: Grid ordenado dos selos de cobertura ("R$ 37,75 por pessoa"), a tipografia de alta legibilidade para idosos e as fotos autênticas de clientes.',
    aspectRatio: '16:9',
    url: './assets/imagens/onepagers-pernambucanas-solucoes-financeiras.png',
    thumbnailUrl: './assets/imagens/onepagers-pernambucanas-solucoes-financeiras.png',
    colorPalette: [
      { hex: '#eab308', name: 'Amarelo Pernambucanas' },
      { hex: '#0284c7', name: 'Azul Odonto' },
      { hex: '#ea580c', name: 'Laranja Cuidar Mais' },
      { hex: '#1e293b', name: 'Preto Loja' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Pernambucanas'],
      media: ['Varejo Físico & Digital']
    },
    slideNumber: 50
  },
  {
    id: 'case-onepager-lavai',
    title: 'LavAí — One Pager de Franquias & Expansão em Hipermercados',
    client: 'LavAí Hipermercados',
    category: 'onepagers',
    series: 'One Pagers & Papers',
    medium: 'Lâmina Executiva de Novos Negócios & Pitch Paper',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Negociações com Redes de Hipermercados & Investidores',
    techniqueDetails: 'Gráficos de payback, modelo modular de quiosques automatizados e projeções de receita por metro quadrado.',
    finish: 'Aceleração na Conquista de Pontos em Redes GPA e Carrefour',
    awardBadge: 'Franchise & Retail Expansion',
    description: 'Material comercial de uma página criado para a startup LavAí apresentar seu modelo rentável de lavanderias self-service para executivos imobiliários de grandes centros de compras.',
    curatorNote: 'Padrão copacabanabrasil: Síntese de métricas em badges táteis e arquitetura de informação focada em decisão rápida de diretores de expansão.',
    aspectRatio: '16:9',
    url: './assets/imagens/onepagers-lavai.png',
    thumbnailUrl: './assets/imagens/onepagers-lavai.png',
    colorPalette: [
      { hex: '#0284c7', name: 'Azul Ciano LavAí' },
      { hex: '#38bdf8', name: 'Azul Espuma' },
      { hex: '#0f172a', name: 'Azul Noturno' },
      { hex: '#ffffff', name: 'Branco Limpeza' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['LavAí'],
      media: ['Expansão B2B']
    },
    slideNumber: 51
  },
  {
    id: 'case-onepager-eater',
    title: 'Eater — One Pager de Plataforma & Parcerias Gastronômicas',
    client: 'Eater',
    category: 'onepagers',
    series: 'One Pagers & Papers',
    medium: 'Lâmina Comercial de Alto Padrão & One Pager Digital',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Restauradores, Parceiros Culinários & Marcas de Gastronomia',
    techniqueDetails: 'Diagramação editorial refinada com tipografia elegante, fotografia de alta gastronomia e proposta de valor clara para o ecossistema culinário.',
    finish: 'Apresentação Executiva para Novos Parceiros',
    awardBadge: 'Food & Hospitality Paper',
    description: 'One pager estratégico criado para a Eater apresentar seu ecossistema gastronômico, destacando soluções de curadoria, visibilidade e engajamento para os melhores restaurantes.',
    curatorNote: 'Padrão copacabanabrasil: Sofisticação tipográfica contemporânea, equilíbrio estético e narrativa concisa direcionada a tomadores de decisão gastronômicos.',
    aspectRatio: '16:9',
    url: './assets/imagens/onepagers-eater.png',
    thumbnailUrl: './assets/imagens/onepagers-eater.png',
    colorPalette: [
      { hex: '#e11d48', name: 'Rubi Gastronômico' },
      { hex: '#1c1917', name: 'Carvão Gourmet' },
      { hex: '#f59e0b', name: 'Âmbar Dourado' },
      { hex: '#ffffff', name: 'Branco Toalha' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Eater'],
      media: ['Food & Lifestyle Media']
    },
    slideNumber: 52
  },
  {
    id: 'case-ad-atento-cxe',
    title: 'Atento — CX = E + E (Experiência + Eficiência)',
    client: 'Atento Global',
    category: 'anuncios',
    series: 'Anúncios',
    medium: 'Campanha de Anúncios Institucionais & Mídia Digital B2B',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Revistas de Negócios, LinkedIn e Portais C-Level',
    techniqueDetails: 'Conceito da fórmula matemática "CX = E + E" traduzida em diagramas de nós conectados sobre retratos de executivos iluminados pelo sol da tarde.',
    finish: 'Campanha de Rebranding de Atendimento mais Compartilhada do Setor',
    awardBadge: 'Campanha Institucional Global',
    description: 'Na Atento, CX é o somatório de eficiência e experiência. A campanha posiciona a marca como a parceira definitiva para entregar a melhor jornada ao consumidor final com menor custo operacional.',
    curatorNote: 'Padrão copacabanabrasil: Textura da malha de nós que flutua diante do executivo e o tratamento de cor com gradação suave de laranja sobre sombras mornas.',
    aspectRatio: '16:9',
    url: './assets/imagens/anuncios-atento-global.png',
    thumbnailUrl: './assets/imagens/anuncios-atento-global.png',
    colorPalette: [
      { hex: '#ea580c', name: 'Laranja Atento Fórmula' },
      { hex: '#111827', name: 'Preto Grafite' },
      { hex: '#f8fafc', name: 'Branco Fórmula' },
      { hex: '#f97316', name: 'Âmbar Luz' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Atento Global'],
      media: ['Mídia Especializada B2B']
    },
    slideNumber: 60
  },
  {
    id: 'case-ad-cliqx-foguete',
    title: 'Cliqx One — "Foguete Não Tem Ré. Suas Vendas Também Não."',
    client: 'Cliqx One',
    category: 'anuncios',
    series: 'Anúncios',
    medium: 'Campanha Digital de Performance & Anúncios Social',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Varejistas, Pequenos e Médios Empreendedores',
    techniqueDetails: 'Copywriting afiado e bem-humorado, diagramação em blocos modulares e contraste ciano elétrico sobre foto com olhar empático de lojista.',
    finish: 'Recorde de cadastros com 30 dias grátis',
    awardBadge: 'Performance Copy & Design',
    description: 'Campanha de aquisição direta para o produto Cliqx One, permitindo que lojistas e empreendedores transformem o WhatsApp em uma máquina de vendas 24 horas.',
    curatorNote: 'Padrão copacabanabrasil: Selo "Promoção Especial Feira da Madrugada" e o kerning condensado na headline em caixa alta de impacto instantâneo.',
    aspectRatio: '16:9',
    url: './assets/imagens/anuncios-cliqx-one.png',
    thumbnailUrl: './assets/imagens/anuncios-cliqx-one.png',
    colorPalette: [
      { hex: '#06b6d4', name: 'Ciano Foguete' },
      { hex: '#0b0f19', name: 'Preto Noite' },
      { hex: '#ffffff', name: 'Branco Tipografia' },
      { hex: '#10b981', name: 'Verde Zap' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Cliqx'],
      media: ['Social Ads & Performance']
    },
    slideNumber: 61
  },
  {
    id: 'case-ad-auden',
    title: 'Auden — Campanha Institucional & Performance Educacional',
    client: 'Auden',
    category: 'anuncios',
    series: 'Anúncios',
    medium: 'Campanha de Anúncios & Mídia Digital de Performance',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'LinkedIn Ads, Meta Ads & Portais Especializados',
    techniqueDetails: 'Composição gráfica contemporânea com tipografia marcante, grids dinâmicos e mensagens assertivas sobre educação executiva e futuro da formação profissional.',
    finish: 'Campanha de Lançamento de Alta Conversão',
    awardBadge: 'Performance & Branding Educacional',
    description: 'Campanha de anúncios criada para posicionar a Auden como referência em educação executiva e formação contínua, combinando apelo institucional com foco direto em captação de líderes.',
    curatorNote: 'Padrão copacabanabrasil: Contraste sofisticado de cores corporativas, legibilidade imediata em feeds digitais e narrativa visual que inspira autoridade e crescimento profissional.',
    aspectRatio: '16:9',
    url: './assets/imagens/anuncios-auden.png',
    thumbnailUrl: './assets/imagens/anuncios-auden.png',
    colorPalette: [
      { hex: '#1e3a8a', name: 'Azul Auden Nobre' },
      { hex: '#f59e0b', name: 'Dourado Excelência' },
      { hex: '#0f172a', name: 'Preto Grafite' },
      { hex: '#ffffff', name: 'Branco Puro' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Auden'],
      media: ['Digital Ads & Performance']
    },
    slideNumber: 62
  },
  {
    id: 'case-ad-interaxa',
    title: 'Interaxa — Campanha Omnichannel & WhatsApp Business Provider',
    client: 'Interaxa',
    category: 'anuncios',
    series: 'Anúncios',
    medium: 'Campanha Digital Omnichannel & Mídia B2B',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'LinkedIn B2B, Google Ads e Revistas de Tecnologia & CX',
    techniqueDetails: 'Linguagem visual conectando dados analíticos em tempo real à fluidez conversacional do WhatsApp Business API, com foco em redução de tempo de espera e aumento de NPS.',
    finish: 'Reconhecimento como Provedor Oficial WhatsApp Solution',
    awardBadge: 'Tecnologia & CX Omnichannel',
    description: 'Série de anúncios digitais e institucionais desenvolvida para a Interaxa demonstrar a força da sua tecnologia de atendimento omnichannel integrado com a inteligência do WhatsApp Business API em escala corporativa.',
    curatorNote: 'Padrão copacabanabrasil: Síntese visual precisa, elementos geométricos de fluxo de dados e headline contundente orientada a tomadores de decisão de grandes operações de CX.',
    aspectRatio: '16:9',
    url: './assets/imagens/anuncios-interaxa.png',
    thumbnailUrl: './assets/imagens/anuncios-interaxa.png',
    colorPalette: [
      { hex: '#25d366', name: 'Verde WhatsApp Conectado' },
      { hex: '#0284c7', name: 'Azul Interaxa Cloud' },
      { hex: '#0f172a', name: 'Preto Profundo' },
      { hex: '#ffffff', name: 'Branco Técnico' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Interaxa'],
      media: ['B2B Tech & CX Media']
    },
    slideNumber: 63
  },
{
    id: 'case-diversos-boteco-atento',
    title: 'Boteco Atento Brasil — Cenografia & Ambientação Temática',
    client: 'Atento Brasil',
    category: 'diversos',
    series: 'Diversos',
    medium: 'Cenografia de Evento Interno, Sinalização & Espaço de Marca',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Convenção Nacional de Líderes Atento',
    techniqueDetails: 'Marca comemorativa inspirada nas tradicionais placas de boteco carioca, piso xadrez em lona náutica, mesas de bar personalizadas, pebolim e telões de futebol.',
    finish: 'Engajamento de 100% dos Colaboradores e Lideranças',
    awardBadge: 'Cenografia & Brand Experience',
    description: 'Criação da identidade visual, cenografia e ambientação imersiva para o evento temático "Boteco Atento Brasil", celebrando conquistas e reforçando o orgulho de pertencer.',
    curatorNote: 'Padrão copacabanabrasil: Detalhes das faixas com filetes dourados no logotipo "Boteco Atento Brasil", os postes coloniais de iluminação e as toalhas de mesa temáticas.',
    aspectRatio: '16:9',
    url: './assets/imagens/diversos-atento-brasil.png',
    thumbnailUrl: './assets/imagens/diversos-atento-brasil.png',
    colorPalette: [
      { hex: '#b91c1c', name: 'Vermelho Boteco' },
      { hex: '#f59e0b', name: 'Dourado Cervejeiro' },
      { hex: '#0f172a', name: 'Preto Tabuleiro' },
      { hex: '#ffffff', name: 'Branco Piso' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Atento Brasil'],
      media: ['Endomarketing & Live Marketing']
    },
    slideNumber: 68
  },
  {
    id: 'case-diversos-estande-atento',
    title: 'Atento — Estande de Diversidade & Convenção',
    client: 'Atento Brasil',
    category: 'diversos',
    series: 'Diversos',
    medium: 'Arquitetura Promocional & Estande de Feira de Negócios',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Feiras Nacionais de Recursos Humanos e Tecnologia',
    techniqueDetails: 'Composição de volumes em azul e laranja, testeiras em balanço com logo iluminado, comunicação visual de acessibilidade e diversidade.',
    finish: 'Prêmio de Melhor Estande Interativo da Feira',
    awardBadge: 'Arquitetura Promocional',
    description: 'Projeto tridimensional de estande para convenções e feiras, com o mote "Diversidade faz parte da nossa equipe", acolhendo visitantes com conforto e tecnologia.',
    curatorNote: 'Padrão copacabanabrasil: Encaixes estruturais das testeiras, os murais fotográficos com iluminação difusa e a sinalização tátil de acessibilidade.',
    aspectRatio: '16:9',
    url: './assets/imagens/diversos-atento-brasil.png',
    thumbnailUrl: './assets/imagens/diversos-atento-brasil.png',
    colorPalette: [
      { hex: '#0284c7', name: 'Azul Atento Estande' },
      { hex: '#f97316', name: 'Laranja Diversidade' },
      { hex: '#ffffff', name: 'Branco Plástico' },
      { hex: '#334155', name: 'Cinza Carpete' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Atento'],
      media: ['Live Marketing & Estandes']
    },
    slideNumber: 69
  },
  {
    id: 'case-diversos-lavei-gtm',
    title: 'Lavei — Apresentação Layout Go-to-Market, Exposição ao Cliente Usuário',
    client: 'Lavei',
    category: 'diversos',
    series: 'Diversos',
    medium: 'Apresentação Comercial, Layout Go-to-Market & Exposição ao Cliente Usuário',
    dimensions: 'Widescreen 16:9 4K (3840×2160)',
    support: 'Lançamento de Mercado, Go-to-Market & Jornada de Experiência do Cliente',
    techniqueDetails: 'Desenho de layouts de apresentação com arquitetura de informação voltada a go-to-market, diagramação da jornada de exposição ao cliente final e interface de autosserviço.',
    finish: 'Validação de Experiência e Aceleração de Lançamento Comercial',
    awardBadge: 'Go-to-Market & User Experience',
    description: 'Apresentação estratégica de layout e go-to-market da Lavei, desenvolvida para expor de forma clara, atrativa e intuitiva a proposta de valor, os benefícios operacionais e a jornada de uso para o cliente final.',
    curatorNote: 'Padrão copacabanabrasil: Narrativa visual de go-to-market que traduz conveniência em valor percebido, alinhando layouts funcionais à retenção e encantamento do usuário.',
    aspectRatio: '16:9',
    url: './assets/imagens/diversos-lavei-gotomarket.png',
    thumbnailUrl: './assets/imagens/diversos-lavei-gotomarket.png',
    colorPalette: [
      { hex: '#0284c7', name: 'Azul Ciano Lavei' },
      { hex: '#38bdf8', name: 'Azul Celeste' },
      { hex: '#0f172a', name: 'Azul Noturno Profundo' },
      { hex: '#ffffff', name: 'Branco Espuma' }
    ],
    credits: {
      creation: ['copacabanabrasil'],
      account: ['Lavei'],
      media: ['Go-to-Market & Experiência de Marca']
    },
    slideNumber: 70
  }
];

// Backwards compatibility aliases for any component referencing previous constants
export const IMAM_CLIENT_LOGOS = COPACABANA_CLIENTS.map((c) => ({
  name: c.name,
  logo: ''
}));

export const IMAM_MANIFESTO = COPACABANA_MANIFESTO;

