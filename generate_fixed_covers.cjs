const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const FONT_BOLD = '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf';
const FONT_REGULAR = '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf';

const covers = [
  {
    filename: 'capa1_atento.png',
    client: 'ATENTO BRASIL',
    category: 'APRESENTAÇÕES',
    title: 'Transformação da Proposta Comercial & Experiência B2B',
    logo: 'public/assets/imagens/logotipos/LOGO ATENTO.png',
    gradStart: '#141824',
    gradEnd: '#080a0e',
    accent: '#ff4d00'
  },
  {
    filename: 'capa2_rio2007.png',
    client: 'COMITÊ OLÍMPICO BRASILEIRO',
    category: 'APRESENTAÇÕES',
    title: 'Apresentação da Conquista do Sonho Olímpico Rio 2016',
    logo: 'public/assets/imagens/logotipos/LOGO PAC.png',
    gradStart: '#0d221c',
    gradEnd: '#060f0c',
    accent: '#10b981'
  },
  {
    filename: 'apresentacoes-genoa-intelligence--algoritmos.png',
    client: 'GENOA INTELLIGENCE',
    category: 'APRESENTAÇÕES',
    title: 'Performance Platform Like No Other • Algoritmos & IA',
    logo: 'public/assets/imagens/logotipos/LOGO GENOA.png',
    gradStart: '#0f1d2a',
    gradEnd: '#070c14',
    accent: '#06b6d4'
  },
  {
    filename: 'apresentacoes-cliqx-tecnologia.png',
    client: 'CLIQX TECNOLOGIA',
    category: 'APRESENTAÇÕES',
    title: 'Shop Cliqx & Omnichannel Total Experience',
    logo: 'public/assets/imagens/logotipos/LOGO CLIX.png',
    gradStart: '#201625',
    gradEnd: '#0c0710',
    accent: '#f97316'
  },
  {
    filename: 'apresentacoes-hortifruti-natural-da-terra.png',
    client: 'HORTIFRUTI NATURAL DA TERRA',
    category: 'APRESENTAÇÕES',
    title: 'Digitalmente Natural • Estratégia Omnichannel & App',
    logo: 'public/assets/imagens/logotipos/LOGO FARTURA.png',
    gradStart: '#132416',
    gradEnd: '#070f08',
    accent: '#22c55e'
  },
  {
    filename: 'apresentacoes-target-bank.png',
    client: 'TARGET BANK',
    category: 'APRESENTAÇÕES',
    title: 'Target Integra & Nova Visão de Negócios B2B',
    logo: 'public/assets/imagens/logotipos/LOGO TARGET.png',
    gradStart: '#251316',
    gradEnd: '#0d0607',
    accent: '#ef4444'
  },
  {
    filename: 'logomarcas-monkia-technology.png',
    client: 'MONK.IA TECHNOLOGY',
    category: 'LOGOMARCAS',
    title: 'Startup de Inteligência Artificial Corporativa',
    logo: null,
    gradStart: '#16192e',
    gradEnd: '#080a14',
    accent: '#3b82f6'
  },
  {
    filename: 'logomarcas-lavai-hipermercados.png',
    client: 'LAVAÍ HIPERMERCADOS',
    category: 'LOGOMARCAS',
    title: 'Startup de Lavanderias Self-Service de Alta Conveniência',
    logo: 'public/assets/imagens/logotipos/LOGO LAVAI.png',
    gradStart: '#0e232e',
    gradEnd: '#060f14',
    accent: '#0284c7'
  },
  {
    filename: 'logomarcas-blue6ix-interaxa-company.png',
    client: 'BLUE6IX (INTERAXA COMPANY)',
    category: 'LOGOMARCAS',
    title: 'Customer Experience & Inteligência de Áudio',
    logo: 'public/assets/imagens/logotipos/LOGO BLUESIX.png',
    gradStart: '#111b33',
    gradEnd: '#060a14',
    accent: '#2563eb'
  },
  {
    filename: 'logomarcas-direct-talk-lider-em-atendimento.png',
    client: 'DIRECT-TALK',
    category: 'LOGOMARCAS',
    title: 'Líder em Atendimento & Gestão de Relacionamento CX',
    logo: 'public/assets/imagens/logotipos/LOGO DIRECTTALK.png',
    gradStart: '#261226',
    gradEnd: '#0f060f',
    accent: '#d946ef'
  },
  {
    filename: 'logomarcas-instituto-jose-resende.png',
    client: 'INSTITUTO JOSÉ RESENDE',
    category: 'LOGOMARCAS',
    title: 'Arte Contemporânea, Escultura & Preservação Cultural',
    logo: 'public/assets/imagens/logotipos/LOGO IJR.png',
    gradStart: '#1a1a1c',
    gradEnd: '#0a0a0b',
    accent: '#e2e8f0'
  },
  {
    filename: 'logomarcas-jornadda.png',
    client: 'JORNADDA',
    category: 'LOGOMARCAS',
    title: 'The Customer Journey Company • Gestão de Experiência',
    logo: 'public/assets/imagens/logotipos/LOGO JOURNEY.png',
    gradStart: '#1c152e',
    gradEnd: '#0b0714',
    accent: '#8b5cf6'
  },
  {
    filename: 'brandbooks-triveela-gastronomia--vinhos.png',
    client: 'TRIVEELA GASTRONOMIA & VINHOS',
    category: 'BRAND BOOKS',
    title: 'Brand Book & Guia de Aplicação de Identidade',
    logo: 'public/assets/imagens/solucoes/solucao-branding.png',
    gradStart: '#281418',
    gradEnd: '#0f0608',
    accent: '#f43f5e'
  },
  {
    filename: 'brandbooks-cliqx-tecnologia.png',
    client: 'CLIQX TECNOLOGIA',
    category: 'BRAND BOOKS',
    title: 'Manual de Identidade Visual Corporativa & Guidelines',
    logo: 'public/assets/imagens/logotipos/LOGO CLIX.png',
    gradStart: '#221926',
    gradEnd: '#0c070f',
    accent: '#fb923c'
  },
  {
    filename: 'onepagers-interaxa--whatsapp-business.png',
    client: 'INTERAXA & WHATSAPP BUSINESS',
    category: 'ONE PAGERS & PAPERS',
    title: 'One Pager Solução Oficial WhatsApp Business API',
    logo: 'public/assets/imagens/logotipos/LOGO INTERAXA.png',
    gradStart: '#0d241c',
    gradEnd: '#050f0b',
    accent: '#25d366'
  },
  {
    filename: 'onepagers-pernambucanas-solucoes-financeiras.png',
    client: 'PERNAMBUCANAS SOLUÇÕES FINANCEIRAS',
    category: 'ONE PAGERS & PAPERS',
    title: 'Lâminas Comerciais Cartões Múltiplos, Empréstimos & Odonto',
    logo: null,
    gradStart: '#101d30',
    gradEnd: '#060a14',
    accent: '#eab308'
  },
  {
    filename: 'onepagers-lavai.png',
    client: 'LAVAÍ HIPERMERCADOS',
    category: 'ONE PAGERS & PAPERS',
    title: 'One Pager Expansão & Franquias em Hipermercados',
    logo: 'public/assets/imagens/logotipos/LOGO LAVAI.png',
    gradStart: '#0d222b',
    gradEnd: '#050f14',
    accent: '#38bdf8'
  },
  {
    filename: 'onepagers-eater.png',
    client: 'EATER',
    category: 'ONE PAGERS & PAPERS',
    title: 'One Pager Plataforma de Vantagens Gastronômicas',
    logo: 'public/assets/imagens/solucoes/solucao-sales-kits.png',
    gradStart: '#261b12',
    gradEnd: '#0f0a06',
    accent: '#f59e0b'
  },
  {
    filename: 'anuncios-atento-global.png',
    client: 'ATENTO GLOBAL',
    category: 'ANÚNCIOS',
    title: 'Campanha Global CX = Eficiência + Empatia',
    logo: 'public/assets/imagens/logotipos/LOGO ATENTO.png',
    gradStart: '#131b2c',
    gradEnd: '#060a12',
    accent: '#38bdf8'
  },
  {
    filename: 'anuncios-cliqx-one.png',
    client: 'CLIQX ONE',
    category: 'ANÚNCIOS',
    title: 'Foguete Não Tem Ré • Campanha de Performance',
    logo: 'public/assets/imagens/logotipos/LOGO CLIX.png',
    gradStart: '#201625',
    gradEnd: '#0b060d',
    accent: '#f43f5e'
  },
  {
    filename: 'anuncios-auden.png',
    client: 'AUDEN',
    category: 'ANÚNCIOS',
    title: 'Campanha Institucional & Matrículas de Alta Conversão',
    logo: 'public/assets/imagens/logotipos/LOGO AUDEN.png',
    gradStart: '#111827',
    gradEnd: '#070a10',
    accent: '#a855f7'
  },
  {
    filename: 'anuncios-interaxa.png',
    client: 'INTERAXA',
    category: 'ANÚNCIOS',
    title: 'Campanha Omnichannel & Soluções em Atendimento',
    logo: 'public/assets/imagens/logotipos/LOGO INTERAXA.png',
    gradStart: '#0e2226',
    gradEnd: '#060e10',
    accent: '#14b8a6'
  },
  {
    filename: 'diversos-atento-brasil.png',
    client: 'ATENTO BRASIL',
    category: 'DIVERSOS',
    title: 'Boteco Atento & Estandes de Diversidade e Conexão',
    logo: 'public/assets/imagens/logotipos/LOGO ATENTO.png',
    gradStart: '#251b14',
    gradEnd: '#0d0906',
    accent: '#f97316'
  },
  {
    filename: 'diversos-lavei-gotomarket.png',
    client: 'LAVEI',
    category: 'DIVERSOS',
    title: 'Lavei — Apresentação Layout Go-to-Market, Exposição ao Cliente',
    logo: 'public/assets/imagens/logotipos/LOGO LAVAI.png',
    gradStart: '#0e222d',
    gradEnd: '#060f14',
    accent: '#06b6d4'
  }
];

const destDir1 = path.join(__dirname, 'public/assets/imagens');
const destDir2 = path.join(__dirname, 'public');

if (!fs.existsSync(destDir1)) fs.mkdirSync(destDir1, { recursive: true });

console.log(`Starting generation of ${covers.length} fixed covers...`);

covers.forEach((item, idx) => {
  const target1 = path.join(destDir1, item.filename);
  const target2 = path.join(destDir2, item.filename);

  let cmd = `convert -size 1920x1080 gradient:"${item.gradStart}-${item.gradEnd}" `;

  if (item.logo && fs.existsSync(item.logo)) {
    cmd += `\\( "${item.logo}" -resize 650x320 \\) -gravity center -geometry +0-75 -composite `;
  } else {
    // Generate styled monogram / symbol badge in center
    cmd += `-font "${FONT_BOLD}" -gravity center -fill "${item.accent}" -pointsize 92 -annotate +0-80 "${item.client}" `;
  }

  // Add decorative accent line
  cmd += `-stroke "${item.accent}" -strokewidth 3 -draw "line 760,670 1160,670" -stroke none `;

  // Add Project Title
  // Escape quotes
  const safeTitle = item.title.replace(/"/g, '\\"');
  cmd += `-font "${FONT_BOLD}" -gravity south -fill "#ffffff" -pointsize 40 -annotate +0+160 "${safeTitle}" `;

  // Add copacabanabrasil and Category Badge
  cmd += `-font "${FONT_REGULAR}" -gravity south -fill "${item.accent}" -pointsize 26 -annotate +0+100 "copacabanabrasil  •  ${item.category}" `;

  // Output file
  cmd += `"${target1}"`;

  try {
    execSync(cmd);
    fs.copyFileSync(target1, target2);
    console.log(`[${idx + 1}/${covers.length}] Created: ${item.filename} (${fs.statSync(target1).size} bytes)`);
  } catch (err) {
    console.error(`Error generating ${item.filename}:`, err.message);
  }
});

console.log('All fixed covers generated successfully!');
