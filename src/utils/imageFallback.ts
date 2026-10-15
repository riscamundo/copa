export function getProjectImageFallbacks(projectId: string, currentSrc: string): string[] {
  const specificFallbacks: Record<string, string[]> = {
    'case-atento-proposta': [
      './assets/imagens/capa1_atento.png',
      './capa1_atento.png',
      './assets/imagens/capa1.png',
      './capa1.png',
      './assets/imagens/apresentacoes-atento-brasil.png',
      './assets/imagens/apresentacoes-atento-brasil.jpg',
    ],
    'case-rio-2016': [
      './assets/imagens/capa2_rio2007.png',
      './capa2_rio2007.png',
      './assets/imagens/capa2_rio2016.png',
      './capa2_rio2016.png',
      './assets/imagens/capa2.png',
      './capa2.png',
      './assets/imagens/apresentacoes-comite-olimpico-brasileiro--carlos-arthur-nuzman.png',
      './assets/imagens/apresentacoes-comite-olimpico-brasileiro--carlos-arthur-nuzman.jpg',
    ],
    'case-diversos-lavei-gtm': [
      './assets/imagens/diversos-lavei-gotomarket.png',
      './diversos-lavei-gotomarket.png',
      './assets/imagens/diversos-lavei.png',
      './diversos-lavei.png',
      './assets/imagens/diversos-lavai.png',
      './assets/imagens/onepagers-lavai.png',
      './assets/imagens/solucoes/solucao-gtm.png',
      './assets/imagens/logotipos/LOGO LAVAI.png',
    ],
    'case-logo-lavai': [
      './assets/imagens/logotipos/LOGO LAVAI.png',
      './assets/imagens/logomarcas-lavai-hipermercados.png',
      './logomarcas-lavai-hipermercados.png',
    ],
    'case-logo-blue6ix': [
      './assets/imagens/logotipos/LOGO BLUESIX.png',
      './assets/imagens/logomarcas-blue6ix-interaxa-company.png',
      './logomarcas-blue6ix-interaxa-company.png',
    ],
    'case-logo-directtalk': [
      './assets/imagens/logotipos/LOGO DIRECTTALK.png',
      './assets/imagens/logomarcas-direct-talk-lider-em-atendimento.png',
      './logomarcas-direct-talk-lider-em-atendimento.png',
    ],
    'case-logo-jose-resende': [
      './assets/imagens/logotipos/LOGO IJR.png',
      './assets/imagens/logomarcas-instituto-jose-resende.png',
      './logomarcas-instituto-jose-resende.png',
    ],
    'case-logo-jornadda': [
      './assets/imagens/logotipos/LOGO JOURNEY.png',
      './assets/imagens/logomarcas-jornadda.png',
      './logomarcas-jornadda.png',
    ],
    'case-logo-monkia': [
      './assets/imagens/logomarcas-monkia-technology.png',
      './logomarcas-monkia-technology.png',
    ],
  };

  const filename = currentSrc.split('/').pop()?.split('?')[0] || '';
  const baseName = filename.replace(/\.(png|jpg|jpeg|webp)$/i, '');

  const genericList = baseName ? [
    `./assets/imagens/${baseName}.png`,
    `./${baseName}.png`,
    `./assets/imagens/${baseName}.jpg`,
    `./${baseName}.jpg`,
  ] : [];

  const custom = specificFallbacks[projectId] || [];
  return Array.from(new Set([...custom, ...genericList]));
}
