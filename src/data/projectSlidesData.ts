import { ProjectSlide } from '../types';

export const PROJECT_SLIDES_MAP: Record<string, ProjectSlide[]> = {
  'case-atento-proposta': [
    {
      id: 'atento-s1',
      slideNumber: 1,
      title: 'Capa & Desafio Comercial',
      subtitle: 'Transformação Digital no Atendimento Enterprise',
      categoryTag: 'Lâmina 01 • Roteirização',
      imageUrl: './assets/imagens/capa1_atento.png',
      description: 'Transformação da proposta comercial da Atento em um material claro, direto e vendedor — capaz de comunicar valor com precisão e inspirar confiança em tomadores de decisão C-Level.',
      rationalPoints: [
        'Eliminação do excesso de texto corporativo em favor de narrativa orientada a impacto',
        'Contraste cromático com laranja institucional sobre carvão para máxima legibilidade',
        'Estruturação em blocos modulares para leitura ágil em reuniões de diretoria'
      ],
      deliverable: 'Deck Comercial Executivo 16:9 • Proposta de Valor',
      metrics: { label: 'Taxa de Conversão Enterprise', value: '+42%' }
    },
    {
      id: 'atento-s2',
      slideNumber: 2,
      title: 'Diagnóstico & Arquitetura da Solução',
      subtitle: 'Ecossistema One-Stop-Shop & Canais Humanizados',
      categoryTag: 'Lâmina 02 • Diagnóstico',
      imageUrl: './assets/imagens/apresentacao-slide-ecossistema-one-stop-shop--canais-humanizados.png',
      description: 'Diagramação de fluxo de atendimento integrando inteligência artificial e acolhimento humano. Demonstração visual de como a Atento atua desde a captação até a retenção.',
      rationalPoints: [
        'Mapeamento de jornada de ponta a ponta com diagramas vetoriais fluidos',
        'Destaque para a redução de fricção em canais WhatsApp e voz',
        'Matriz comparativa de custos de transação para CFOs'
      ],
      deliverable: 'Infográfico Arquitetural de CX',
      metrics: { label: 'Resolução no Primeiro Contato', value: '84%' }
    },
    {
      id: 'atento-s3',
      slideNumber: 3,
      title: 'Direção de Arte & Métricas de Impacto',
      subtitle: 'Hierarquia Tipográfica & Gráficos C-Level',
      categoryTag: 'Lâmina 03 • Direção de Arte',
      imageUrl: './assets/imagens/apresentacao-slide-hierarquia-tipografica--graficos-c-level.png',
      description: 'Os dados mais complexos de SLA, tempo médio de atendimento e NPS foram sintetizados em cards visuais de alta leitura, garantindo retenção imediata da mensagem.',
      rationalPoints: [
        'Grid tripartido com tipografia condensada de alto impacto',
        'Uso de espaços negativos generosos para focar a atenção nos números-chave',
        'Paleta reduzida a 3 cores para evitar sobrecarga cognitiva'
      ],
      deliverable: 'Dashboard Estilizado de Resultados',
      metrics: { label: 'Tempo de Leitura Médio', value: '< 2 min' }
    },
    {
      id: 'atento-s4',
      slideNumber: 4,
      title: 'Desdobramentos & Lâminas de Trade',
      subtitle: 'Material de Apoio para a Força de Vendas',
      categoryTag: 'Lâmina 04 • Entrega Final',
      imageUrl: './assets/imagens/apresentacao-slide-material-de-apoio-para-a-forca-de-vendas.png',
      description: 'Criação de one-pagers executivos complementares e guias de argumentação rápida para os diretores comerciais levarem em reuniões presenciais.',
      rationalPoints: [
        'Templates customizáveis para propostas sob medida em menos de 1 hora',
        'Formatos híbridos otimizados para iPad e projeções 4K',
        'Padronização de chancelas e selos de segurança da informação'
      ],
      deliverable: 'Kit de Vendas Híbrido C-Level',
      metrics: { label: 'Fechamento de Contratos', value: 'Recorde Nacional' }
    }
  ],

  'case-rio-2016': [
    {
      id: 'rio-s1',
      slideNumber: 1,
      title: 'Capa da Candidatura Olímpica',
      subtitle: 'Apresentação da Conquista do Sonho Olímpico',
      categoryTag: 'Lâmina 01 • Roteirização',
      imageUrl: './assets/imagens/capa2_rio2007.png',
      description: 'Apresentação determinante para o Comitê Olímpico Internacional (COI), defendendo a candidatura do Rio de Janeiro frente a potências como Chicago, Tóquio e Madri.',
      rationalPoints: [
        'Narrativa de celebração da primeira edição dos Jogos na América do Sul',
        'Linguagem visual solar com curvas inspiradas no calçadão e montanhas cariocas',
        'Rigor técnico nas garantias fiscais e cronogramas de infraestrutura'
      ],
      deliverable: 'Deck Oficial COI em Lausanne & Copenhague',
      metrics: { label: 'Votação Final no COI', value: '66 votos a 32' }
    },
    {
      id: 'rio-s2',
      slideNumber: 2,
      title: 'Linha do Tempo Estratégica (2004–2009)',
      subtitle: 'A Jornada de Maturidade da Candidatura Brasileira',
      categoryTag: 'Lâmina 02 • Diagnóstico',
      imageUrl: './assets/imagens/apresentacao-slide-a-jornada-de-maturidade-da-candidatura-brasileira.png',
      description: 'Cronologia visual dos aprendizados dos Jogos Pan-Americanos 2007, demonstrando aos membros do comitê internacional a prontidão logística e orçamentária do Brasil.',
      rationalPoints: [
        'Diagramação em linha do tempo com formato de passaporte internacional',
        'Evidências fotográficas de obras concluídas e apoio popular massivo',
        'Validação por auditorias internacionais e ministérios'
      ],
      deliverable: 'Painel Cronológico de Garantias',
      metrics: { label: 'Apoio Popular Apurado', value: '85% da população' }
    },
    {
      id: 'rio-s3',
      slideNumber: 3,
      title: 'Infografia das Notas Comparativas COI',
      subtitle: 'Superação Técnica Frente às Capitais Mundiais',
      categoryTag: 'Lâmina 03 • Direção de Arte',
      imageUrl: './assets/imagens/apresentacao-slide-superacao-tecnica-frente-as-capitais-mundiais.png',
      description: 'Gráficos comparativos com a nota de cada cidade candidata, evidenciando o salto qualitativo do Rio em transporte, segurança e vilas olímpicas.',
      rationalPoints: [
        'Visualização de dados transparente e de fácil assimilação multilíngue',
        'Uso das cores olímpicas em contraste com fundo azul mar profundo',
        'Impacto emocional conjugado com rigor estatístico'
      ],
      deliverable: 'Lâmina de Defesa Técnica',
      metrics: { label: 'Resultado COI', value: 'Vitória Histórica' }
    }
  ],

  'case-genoa-performance': [
    {
      id: 'genoa-s1',
      slideNumber: 1,
      title: 'Metáfora Visual & Conceito Central',
      subtitle: 'Performance Platform Like No Other',
      categoryTag: 'Lâmina 01 • Conceito',
      imageUrl: './assets/imagens/apresentacao-slide-performance-platform-like-no-other.png',
      description: 'Roteirização e design para apresentar uma das plataformas de algoritmos e Big Data mais avançadas do país, traduzindo complexidade técnica em valor tangível.',
      rationalPoints: [
        'Metáfora do veleiro de alta velocidade cortando oceanos de dados brutos',
        'Posicionamento de soberania técnica para fundos e grandes corporações',
        'Tipografia sóbria com estética cibernética e azul glacial'
      ],
      deliverable: 'Pitch Deck Enterprise para Fundos & Bancos',
      metrics: { label: 'Volume de Dados Processados', value: 'Petabytes/dia' }
    },
    {
      id: 'genoa-s2',
      slideNumber: 2,
      title: 'Matriz de Maturidade em Algoritmos & IA',
      subtitle: 'Arquitetura de Dados em Camadas',
      categoryTag: 'Lâmina 02 • Arquitetura',
      imageUrl: './assets/imagens/apresentacao-slide-arquitetura-de-dados-em-camadas.png',
      description: 'Apresentação em pirâmide conceitual: desde a captura de telemetria até a predição probabilística em tempo real com machine learning.',
      rationalPoints: [
        'Gráficos de dispersão vetoriais com precisão de laboratório',
        'Isolamento visual dos 4 pilares: Ingestão, Higienização, Modelagem e Ação',
        'Destaque para governança de dados LGPD e sigilo bancário'
      ],
      deliverable: 'Diagrama Técnico de IA Explicável',
      metrics: { label: 'Acurácia Preditiva', value: '99.4%' }
    },
    {
      id: 'genoa-s3',
      slideNumber: 3,
      title: 'Modelos de Monetização & Resultados',
      subtitle: 'Impacto Direto no Bottom-Line dos Clientes',
      categoryTag: 'Lâmina 03 • Negócio',
      imageUrl: './assets/imagens/apresentacao-slide-impacto-direto-no-bottom-line-dos-clientes.png',
      description: 'Simulações de ganhos de eficiência operacional para clientes de grande porte, mostrando o retorno financeiro de cada algoritmo implementado.',
      rationalPoints: [
        'Tabelas comparativas de ROI em 6, 12 e 24 meses',
        'Testemunhos anônimos de executivos do setor financeiro',
        'Chamada para contratação de PoC (Proof of Concept)'
      ],
      deliverable: 'Lâmina de Fechamento Comercial',
      metrics: { label: 'Retorno Sobre Investimento', value: '5.8x no 1º ano' }
    }
  ],

  'case-cliqx-shop': [
    {
      id: 'cliqx-s1',
      slideNumber: 1,
      title: 'Apresentação do Ecossistema Cliqx',
      subtitle: 'Conversational Commerce & Omnichannel Total Experience',
      categoryTag: 'Lâmina 01 • Visão Geral',
      imageUrl: './assets/imagens/apresentacao-slide-conversational-commerce--omnichannel-total-experience.png',
      description: 'Deck de produto para conectar o WhatsApp às maiores plataformas de e-commerce do mundo (VTEX, Shopify, Magento), transformando mensagens em vendas.',
      rationalPoints: [
        'Diagrama circular conectando catálogo, pagamento PIX e logística de entrega',
        'Contraste moderno de ciano elétrico sobre preto tecnológico',
        'Copy enxuta focada nas dores do varejista: carrinho abandonado e lentidão'
      ],
      deliverable: 'Apresentação Comercial de Varejo Digital',
      metrics: { label: 'Conversão via WhatsApp', value: '3x maior que Web' }
    },
    {
      id: 'cliqx-s2',
      slideNumber: 2,
      title: 'Jornada do Comprador em 3 Cliques',
      subtitle: 'Interface de Compra Fluida Sem Sair do Chat',
      categoryTag: 'Lâmina 02 • UX & Produto',
      imageUrl: './assets/imagens/apresentacao-slide-interface-de-compra-fluida-sem-sair-do-chat.png',
      description: 'Mockups detalhados da tela do smartphone demonstrando o checkout integrado: seleção de produto, frete automático e chave PIX gerada em segundos.',
      rationalPoints: [
        'Prototipação visual em escala 1:1 de telas de celular',
        'Roteiro conversacional humanizado sem respostas robóticas frias',
        'Garantia de segurança antifraude destacada graficamente'
      ],
      deliverable: 'Manual de Interação Conversacional',
      metrics: { label: 'Tempo de Checkout', value: '45 segundos' }
    },
    {
      id: 'cliqx-s3',
      slideNumber: 3,
      title: 'Cases de Sucesso & Tração no Varejo',
      subtitle: 'Resultados Comprovados em Grandes Redes',
      categoryTag: 'Lâmina 03 • Métricas',
      imageUrl: './assets/imagens/apresentacao-slide-resultados-comprovados-em-grandes-redes.png',
      description: 'Demonstração de resultados em moda, eletrônicos e supermercados, comprovando que a ferramenta gerou milhões em vendas incrementais.',
      rationalPoints: [
        'Depoimentos em cards com fotos reais de lojistas e diretores de e-commerce',
        'Taxas de recompra e retenção apresentadas em infográficos',
        'Plano de implementação rápida em menos de 7 dias'
      ],
      deliverable: 'Lâmina de Prova Social & Casos Reais',
      metrics: { label: 'Vendas Incrementais', value: '+R$ 18 Milhões' }
    }
  ],

  'case-natural-terra': [
    {
      id: 'nt-s1',
      slideNumber: 1,
      title: 'Digitalmente Natural',
      subtitle: 'A Experiência Fresca do Hortifruti no WhatsApp',
      categoryTag: 'Lâmina 01 • Estratégia',
      imageUrl: './assets/imagens/apresentacao-slide-a-experiencia-fresca-do-hortifruti-no-whatsapp.png',
      description: 'Apresentação estratégica de personas e jornada digital para a maior rede de hortifruti do Brasil, levando o frescor das feiras para o smartphone dos clientes.',
      rationalPoints: [
        'Fotografia sensorial de alimentos frescos em alta definição',
        'Mapeamento empático de perfis de compradores em São Paulo e Rio',
        'Harmonização de tons de verde botânico e terra fértil'
      ],
      deliverable: 'Deck de Estratégia Digital & Personas',
      metrics: { label: 'Adesão de Clientes Fiéis', value: '78% de recompra' }
    },
    {
      id: 'nt-s2',
      slideNumber: 2,
      title: 'Personas & Rotinas de Compra',
      subtitle: 'Comportamento do Consumidor Saudável',
      categoryTag: 'Lâmina 02 • Diagnóstico',
      imageUrl: './assets/imagens/apresentacao-slide-comportamento-do-consumidor-saudavel.png',
      description: 'Detalhamento dos hábitos de compra da persona executiva que busca conveniência e da família focada em nutrição orgânica.',
      rationalPoints: [
        'Cards visuais com hábitos semanais de reposição de feira',
        'Cestas inteligentes sugeridas com base no histórico',
        'Redução drástica do atrito na escolha de frutas no ponto certo'
      ],
      deliverable: 'Painel de Personas & Jornadas',
      metrics: { label: 'Ticket Médio Digital', value: '+35% vs. Loja' }
    },
    {
      id: 'nt-s3',
      slideNumber: 3,
      title: 'Atendimento Consultivo dos Feirantes Digitais',
      subtitle: 'Humanização Tecnológica em Larga Escala',
      categoryTag: 'Lâmina 03 • Experiência',
      imageUrl: './assets/imagens/apresentacao-slide-humanizacao-tecnologica-em-larga-escala.png',
      description: 'O feirante tira foto do mamão ou abacate para o cliente confirmar o ponto antes de embalar. O carinho da loja física traduzido em pixels.',
      rationalPoints: [
        'Roteiros de mensagem calorosos e autênticos',
        'Fluxo de trocas simplificado sem burocracia',
        'Integração total com o programa de fidelidade Leve Natural'
      ],
      deliverable: 'Playbook de Relacionamento Humanizado',
      metrics: { label: 'NPS de Atendimento', value: '92 pontos' }
    }
  ],

  'case-target-bank': [
    {
      id: 'tb-s1',
      slideNumber: 1,
      title: 'A Nova Era Financeira da Estrada',
      subtitle: 'Fintech & Esteira de Crédito para Transportes',
      categoryTag: 'Lâmina 01 • Visão Geral',
      imageUrl: './assets/imagens/apresentacao-slide-fintech--esteira-de-credito-para-transportes.png',
      description: 'Deck comercial executivo para posicionar a Target Bank como o banco digital especialista na cadeia rodoviária e no agronegócio nacional.',
      rationalPoints: [
        'Fotografia cinematográfica de estradas e logística pesada',
        'Paleta em azul confiança e verde liquidez para produtos financeiros',
        'Estruturação dos pilares de crédito rápido de frete e pedágio digital'
      ],
      deliverable: 'Apresentação C-Level para Transportadoras',
      metrics: { label: 'Volume Transacionado', value: 'Bilhões/ano' }
    },
    {
      id: 'tb-s2',
      slideNumber: 2,
      title: 'Esteira Digital de Antecipação de Frete',
      subtitle: 'Liquidez Instantânea para o Caminhoneiro',
      categoryTag: 'Lâmina 02 • Soluções',
      imageUrl: './assets/imagens/apresentacao-slide-liquidez-instantanea-para-o-caminhoneiro.png',
      description: 'Fluxo visual passo a passo mostrando a aprovação do frete pelo embarcador e a liberação do dinheiro no cartão Target em menos de 3 minutos.',
      rationalPoints: [
        'Diagrama do ecossistema integrando ANTT, CIOT e bancos',
        'Interface simplificada para uso em estradas com sinal fraco',
        'Zero papelada: assinatura digital via biometria facial'
      ],
      deliverable: 'Fluxograma de Operações & Risco',
      metrics: { label: 'Tempo de Liberação', value: '< 3 minutos' }
    },
    {
      id: 'tb-s3',
      slideNumber: 3,
      title: 'Ecossistema de Benefícios de Posto & Estrada',
      subtitle: 'Retenção & Parcerias Estratégicas',
      categoryTag: 'Lâmina 03 • Parcerias',
      imageUrl: './assets/imagens/apresentacao-slide-retencao--parcerias-estrategicas.png',
      description: 'Mapa de cobertura das principais rodovias com postos conveniados, descontos em diesel e pontos de parada com banho e descanso digno.',
      rationalPoints: [
        'Cartografia de rotas com nós logísticos de alta demanda',
        'Parcerias com as maiores redes de combustíveis do país',
        'Plano de expansão para frotas pesadas e cooperativas'
      ],
      deliverable: 'Mapa de Cobertura Nacional de Parcerias',
      metrics: { label: 'Postos Homologados', value: '+3.500 no Brasil' }
    }
  ],

  'case-logo-monkia': [
    {
      id: 'monk-s1',
      slideNumber: 1,
      title: 'Identidade & Conceito da Marca',
      subtitle: 'Inteligência Artificial com Inteligência Humana',
      categoryTag: 'Lâmina 01 • Identidade',
      imageUrl: './assets/imagens/apresentacao-slide-inteligencia-artificial-com-inteligencia-humana.png',
      description: 'Criação do naming e da identidade visual da monk.ia: a fusão entre a serenidade e sabedoria milenar de um monge com o poder computacional de ponta.',
      rationalPoints: [
        'Símbolo geométrico sintetizando o olhar empático e a malha neural de IA',
        'Gradiente em tons violeta e ciano elétrico, fugindo do azul corporativo genérico',
        'Logotipia minimalista com kerning milimétrico'
      ],
      deliverable: 'Manual de Identidade Visual & Símbolo',
      metrics: { label: 'Reconhecimento de Marca', value: '100% autoral' }
    },
    {
      id: 'monk-s2',
      slideNumber: 2,
      title: 'Malha Geométrica & Proporções do Símbolo',
      subtitle: 'Construção Vetorial Baseada na Proporção Áurea',
      categoryTag: 'Lâmina 02 • Grid de Construção',
      imageUrl: './assets/imagens/apresentacao-slide-construcao-vetorial-baseada-na-proporcao-aurea.png',
      description: 'Desenho vetorial rigoroso baseado em círculos tangentes e curvas de Bézier perfeitas, garantindo legibilidade desde favicon de 16px até telões de conferência.',
      rationalPoints: [
        'Construção em grid de 12 colunas e raio áureo',
        'Área de reserva e limites de redução estritamente calculados',
        'Versões monocromáticas para gravação a laser e bordados'
      ],
      deliverable: 'Blueprint Vetorial de Construção',
      metrics: { label: 'Redução Mínima', value: '12px sem perda' }
    },
    {
      id: 'monk-s3',
      slideNumber: 3,
      title: 'Aplicações no Universo Digital & Produto',
      subtitle: 'Interface SaaS, App Mobile & Dark Theme',
      categoryTag: 'Lâmina 03 • Aplicações',
      imageUrl: './assets/imagens/apresentacao-slide-interface-saas-app-mobile--dark-theme.png',
      description: 'Aplicação do sistema de design na plataforma de software da monk.ia: dark mode luxuoso, cartões translúcidos e botões táteis.',
      rationalPoints: [
        'Tokens de design universais (cores, tipografia, elevação)',
        'Ícones proprietários inspirados na geometria do logo',
        'Diretrizes de animação e microinterações de carregamento'
      ],
      deliverable: 'Design System & UI Kit',
      metrics: { label: 'Adoção por Desenvolvedores', value: '100% unificado' }
    }
  ],

  'case-logo-lavai': [
    {
      id: 'lavai-s1',
      slideNumber: 1,
      title: 'Identidade Visual & Naming LavAí',
      subtitle: 'Lavanderia Self-Service em Hipermercados',
      categoryTag: 'Lâmina 01 • Naming & Identidade',
      imageUrl: './assets/imagens/apresentacao-slide-lavanderia-self-service-em-hipermercados.png',
      description: 'Criação da marca LavAí: naming dinâmico e tipografia acolhedora para lavanderias automatizadas em galerias de hipermercados (Carrefour, GPA).',
      rationalPoints: [
        'Naming coloquial que convida à ação imediata ("Lava aí")',
        'Cores alegres e solares com azul turquesa e amarelo fresco',
        'Símbolo amigável que remete à rotação da água e ao sorriso'
      ],
      deliverable: 'Manual de Marca & Sinalização de Ponto de Venda',
      metrics: { label: 'Abertura de Unidades', value: 'Expansão Nacional' }
    },
    {
      id: 'lavai-s2',
      slideNumber: 2,
      title: 'Comunicação Visual nas Lojas & Totens',
      subtitle: 'Sinalização Didática Sem Necessidade de Atendente',
      categoryTag: 'Lâmina 02 • Espaço de Marca',
      imageUrl: './assets/imagens/apresentacao-slide-sinalizacao-didatica-sem-necessidade-de-atendente.png',
      description: 'Instruções de uso das máquinas de lavar e secar traduzidas em passos visuais simples: "1. Coloque a roupa, 2. Aponte o PIX, 3. Relaxe por 30 minutos".',
      rationalPoints: [
        'Painéis luminosos com adesivagem vinílica resistente à umidade',
        'Telas dos totens de pagamento desenhadas para uso por qualquer idade',
        'Espaço instagramável com banco acolhedor e tomadas USB'
      ],
      deliverable: 'Projeto de Sinalização Ambiental',
      metrics: { label: 'Tempo de Aprendizado', value: '< 10 segundos' }
    },
    {
      id: 'lavai-s3',
      slideNumber: 3,
      title: 'Embalagens & Itens Promocionais',
      subtitle: 'Ecobags, Sabão Especial & Mimos para Clientes',
      categoryTag: 'Lâmina 03 • Desdobramentos',
      imageUrl: './assets/imagens/apresentacao-slide-ecobags-sabao-especial--mimos-para-clientes.png',
      description: 'Linha de brindes e produtos para o cliente levar para casa, transformando uma tarefa doméstica em um momento de cuidado pessoal.',
      rationalPoints: [
        'Bolsas ecológicas em lona crua com silkscreen do logo',
        'Copos medidores de sabão com dicas de economia de água',
        'Adesivos e tags para cestos de roupa suja'
      ],
      deliverable: 'Kit Promocional de Trade',
      metrics: { label: 'Satisfação do Cliente', value: '4.9 de 5 estrelas' }
    }
  ],

  'case-logo-blue6ix': [
    {
      id: 'blue-s1',
      slideNumber: 1,
      title: 'Identidade da Marca Blue6ix',
      subtitle: 'Inteligência de Voz & Auditoria de Atendimento',
      categoryTag: 'Lâmina 01 • Identidade',
      imageUrl: './assets/imagens/apresentacao-slide-inteligencia-de-voz--auditoria-de-atendimento.png',
      description: 'Identidade para empresa de tecnologia especializada em auditoria de chamadas por voz com IA, analisando sentimentos e conformidade regulatória.',
      rationalPoints: [
        'Símbolo inspirado em ondas de áudio estéreo formando o número 6',
        'Azul ciano profundo comunicando precisão analítica e confidencialidade',
        'Tipografia técnica com cantos suavizados'
      ],
      deliverable: 'Identidade Visual & Diretrizes Corporativas',
      metrics: { label: 'Minutos de Áudio Analisados', value: '+50 Milhões' }
    },
    {
      id: 'blue-s2',
      slideNumber: 2,
      title: 'Dashboard de Análise de Sentimento',
      subtitle: 'Visualização da Emoção do Cliente em Tempo Real',
      categoryTag: 'Lâmina 02 • Produto & UI',
      imageUrl: './assets/imagens/apresentacao-slide-visualizacao-da-emocao-do-cliente-em-tempo-real.png',
      description: 'Diagramação da interface de monitoria de chamadas com marcadores de estresse, palavras proibidas e momentos de encantamento.',
      rationalPoints: [
        'Mapas de calor vocais e osciloscópios vetoriais',
        'Alertas imediatos para supervisores em caso de risco de processo',
        'Modo noturno ultra-nítido para operação contínua 24/7'
      ],
      deliverable: 'Guia de Interface da Plataforma Blue6ix',
      metrics: { label: 'Redução de Reclamações Procon', value: '-65%' }
    }
  ],

  'case-logo-directtalk': [
    {
      id: 'dt-s1',
      slideNumber: 1,
      title: 'Redesenho da Marca Direct-Talk',
      subtitle: 'A Evolução da Pioneira em Chat no Brasil',
      categoryTag: 'Lâmina 01 • Rebranding',
      imageUrl: './assets/imagens/apresentacao-slide-a-evolucao-da-pioneira-em-chat-no-brasil.png',
      description: 'Modernização da identidade visual da pioneira nacional em chat corporativo, preparando a empresa para a consolidação como plataforma omnichannel.',
      rationalPoints: [
        'Evolução dos balões de conversa tradicionais para formas dinâmicas conectadas',
        'Transição para paleta solar vibrante com energia de inovação',
        'Eliminação de serifas e alinhamento geométrico perfeito'
      ],
      deliverable: 'Manual Completo de Rebranding',
      metrics: { label: 'Reconhecimento de Mercado', value: 'Líder em CRM Chat' }
    },
    {
      id: 'dt-s2',
      slideNumber: 2,
      title: 'Cultura Interna & Endomarketing',
      subtitle: 'Orgulho de Pertencer nos Escritórios Direct-Talk',
      categoryTag: 'Lâmina 02 • Cultura',
      imageUrl: './assets/imagens/apresentacao-slide-orgulho-de-pertencer-nos-escritorios-direct-talk.png',
      description: 'A nova marca aplicada na sede da empresa: murais ilustrados, kit de boas-vindas para novos colaboradores e sinalização das salas de reunião.',
      rationalPoints: [
        'Murais com as frases que definem os valores da equipe',
        'Camisetas, moletons e canecas de alto padrão de acabamento',
        'Clima descontraído com foco em inovação colaborativa'
      ],
      deliverable: 'Kit de Ambientação Corporativa',
      metrics: { label: 'Engajamento dos Funcionários', value: 'eNPS de 89' }
    }
  ],

  'case-logo-jose-resende': [
    {
      id: 'jr-s1',
      slideNumber: 1,
      title: 'Chancela Institucional José Resende',
      subtitle: 'Arte Contemporânea & Escultura Brasileira',
      categoryTag: 'Lâmina 01 • Identidade Cultural',
      imageUrl: './assets/imagens/apresentacao-slide-arte-contemporanea--escultura-brasileira.png',
      description: 'Desenvolvimento da marca e chancelas para o instituto do consagrado escultor brasileiro José Resende, equilibrando peso escultórico e leveza gráfica.',
      rationalPoints: [
        'Monograma inspirado nas torções de aço e pedra das obras do artista',
        'Uso de preto mineral, branco gesso e bronze escovado',
        'Tratamento editorial silencioso onde a arte sempre é o primeiro plano'
      ],
      deliverable: 'Marca do Instituto & Chancelas de Autenticidade',
      metrics: { label: 'Acervo Catalogado', value: 'Mais de 40 anos de arte' }
    },
    {
      id: 'jr-s2',
      slideNumber: 2,
      title: 'Catálogos de Exposição & Publicações',
      subtitle: 'Design Editorial para Museus Internacionais',
      categoryTag: 'Lâmina 02 • Editorial',
      imageUrl: './assets/imagens/apresentacao-slide-design-editorial-para-museus-internacionais.png',
      description: 'Projetos gráficos para livros de capa dura e catálogos bilíngues para bienais e galerias de Nova York, Paris e São Paulo.',
      rationalPoints: [
        'Grid editorial generoso com papel couché fosco de alta gramatura',
        'Fotografia de iluminação rasante para destacar a textura do ferro',
        'Tipografia com serifas clássicas em diálogo com sans geométricas'
      ],
      deliverable: 'Livro de Arte Monográfico',
      metrics: { label: 'Premiação Editorial', value: 'Reconhecimento Crítico' }
    }
  ],

  'case-logo-jornadda': [
    {
      id: 'jornada-s1',
      slideNumber: 1,
      title: 'Marca Jornada B2B',
      subtitle: 'Plataforma de Customer Experience & Feedback Contínuo',
      categoryTag: 'Lâmina 01 • Identidade',
      imageUrl: './assets/imagens/apresentacao-slide-plataforma-de-customer-experience--feedback-continuo.png',
      description: 'Identidade para startup de gestão da experiência do cliente corporativo, com símbolo em seta contínua que representa o aprendizado perpétuo.',
      rationalPoints: [
        'Seta infinita que fecha o ciclo de escuta, ação e melhoria',
        'Gradiente em tons de roxo profundo e azul atlântico',
        'Manual de aplicação em telas de software e apresentações para investidores'
      ],
      deliverable: 'Manual de Marca & UI Assets',
      metrics: { label: 'Rodada Seed', value: 'Captação Concluída' }
    }
  ],

  'case-brandbook-triveela': [
    {
      id: 'triveela-s1',
      slideNumber: 1,
      title: 'Brand Book Oficial Triveela',
      subtitle: 'Manual Completo de Marca & Guidelines de Design',
      categoryTag: 'Lâmina 01 • Manual de Marca',
      imageUrl: './assets/imagens/apresentacao-slide-manual-completo-de-marca--guidelines-de-design.png',
      description: 'Guia definitivo de aplicação da marca Triveela: reúne critérios de exclusividade, limites de redução, paleta de cores para embalagens e e-commerce.',
      rationalPoints: [
        '60 páginas de diretrizes técnicas detalhadas para franqueados e agências',
        'Amostras Pantone e conversão CMYK rigorosamente testadas',
        'Biblioteca com mais de 80 ícones autorais de apoio'
      ],
      deliverable: 'Brandbook Impresso & Digital Interativo',
      metrics: { label: 'Unidades com Padrão 100%', value: 'Todas as Lojas' }
    },
    {
      id: 'triveela-s2',
      slideNumber: 2,
      title: 'Diretrizes de Fotografia & Embalagens',
      subtitle: 'Texturas, Sensações & Rótulos de Luxo',
      categoryTag: 'Lâmina 02 • Packaging',
      imageUrl: './assets/imagens/apresentacao-slide-texturas-sensacoes--rotulos-de-luxo.png',
      description: 'Normas de estilo para sessões fotográficas de produtos e padrões de hot stamping dourado e verniz localizado nos frascos.',
      rationalPoints: [
        'Iluminação suave com sombras mornas para destacar a pureza dos ingredientes',
        'Critérios para postagens em mídias sociais e campanhas sazonais',
        'Especificação técnica de papéis reciclados com certificação FSC'
      ],
      deliverable: 'Manual de Embalagens & Fotografia',
      metrics: { label: 'Percepção de Valor', value: '+60% Premium' }
    }
  ],

  'case-brandbook-cliqx': [
    {
      id: 'auden-s1',
      slideNumber: 1,
      title: 'Brandbook Digital Auden MFA',
      subtitle: 'Educação Executiva & Diretrizes de Comunicação',
      categoryTag: 'Lâmina 01 • Brandbook',
      imageUrl: './assets/imagens/apresentacao-slide-educacao-executiva--diretrizes-de-comunicacao.png',
      description: 'Manual de identidade visual completo com variações cromáticas sobre fundos claros e escuros e biblioteca de iconografia para cursos de graduação e pós-graduação.',
      rationalPoints: [
        'Definição das paletas "Eu Sou Humano" e "Eu Sou Profissional"',
        'Padrões fotográficos divididos em lifestyle natural e conceitual',
        'Modelos de apresentação em slides para o corpo docente'
      ],
      deliverable: 'Manual de Governança de Marca Universitária',
      metrics: { label: 'Consistência Visual', value: '100% Unificada' }
    }
  ],

  'case-onepager-interaxa-waap': [
    {
      id: 'interaxa-s1',
      slideNumber: 1,
      title: 'Lâmina Comercial WhatsApp Business API',
      subtitle: '130 Milhões de Brasileiros no WhatsApp. Sua Marca no Improviso?',
      categoryTag: 'Lâmina 01 • One Pager',
      imageUrl: './assets/imagens/apresentacao-slide-130-milhoes-de-brasileiros-no-whatsapp-sua-marca-no-improviso.png',
      description: 'Lâmina comercial de alto impacto desenvolvida para a Interaxa se posicionar como líder na integração oficial do WhatsApp Business API.',
      rationalPoints: [
        'Headline provocativa que desarma objeções de diretores de TI e marketing',
        'Destaque para o número de +40 milhões de interações/dia com SLA garantido',
        'Diagrama simplificado da esteira de atendimento com bot + humano'
      ],
      deliverable: 'Lâmina Comercial A4 & PDF Interativo',
      metrics: { label: 'Contratos Fechados', value: 'Dezenas de Grandes Contas' }
    }
  ],

  'case-onepager-pernambucanas': [
    {
      id: 'pernambucanas-s1',
      slideNumber: 1,
      title: 'Lâminas de Serviços Financeiros Pernambucanas',
      subtitle: 'Seguros, Odontologia & Cartões Múltiplos',
      categoryTag: 'Lâmina 01 • Material de Ponto de Venda',
      imageUrl: './assets/imagens/apresentacao-slide-seguros-odontologia--cartoes-multiplos.png',
      description: 'Desenvolvimento do kit completo de lâminas para produtos de seguros e odontologia das Casas Pernambucanas, com linguagem popular e design solar.',
      rationalPoints: [
        'Cores codificadas por produto para facilitar a escolha no balcão da loja',
        'Tabelas comparativas de benefícios com fontes de alta legibilidade para idosos',
        'Fotografias de famílias brasileiras autênticas em momentos de celebração'
      ],
      deliverable: 'Kit de Lâminas de Balcão para Centenas de Lojas',
      metrics: { label: 'Adesão de Serviços', value: 'Aumento Expressivo' }
    }
  ],

  'case-ad-atento-cxe': [
    {
      id: 'atento-ad-s1',
      slideNumber: 1,
      title: 'Campanha Institucional "CX = E + E"',
      subtitle: 'Experiência do Cliente é Eficiência Somada à Empatia',
      categoryTag: 'Lâmina 01 • Anúncio',
      imageUrl: './assets/imagens/apresentacao-slide-experiencia-do-cliente-e-eficiencia-somada-a-empatia.png',
      description: 'Campanha de anúncios institucionais para revistas de negócios e mídia digital B2B, posicionando a Atento como a parceira definitiva para redução de custos com excelência.',
      rationalPoints: [
        'Conceito da fórmula matemática "CX = E + E" traduzida em diagramas de nós conectados',
        'Retratos de executivos iluminados pelo sol da tarde para transmitir calor humano',
        'Copywriting afiado assinado pela presidência da Atento'
      ],
      deliverable: 'Página Dupla Revista & Mídia Digital C-Level',
      metrics: { label: 'Compartilhamentos no LinkedIn', value: 'Campanha Mais Viral do Setor' }
    }
  ],

  'case-ad-cliqx-foguete': [
    {
      id: 'cliqx-ad-s1',
      slideNumber: 1,
      title: 'Campanha de Performance Cliqx One',
      subtitle: 'Seu WhatsApp Transformado em Máquina de Vendas 24 Horas',
      categoryTag: 'Lâmina 01 • Performance Social',
      imageUrl: './assets/imagens/apresentacao-slide-seu-whatsapp-transformado-em-maquina-de-vendas-24-horas.png',
      description: 'Campanha digital direta para pequenos e médios lojistas, com oferta especial de 30 dias grátis para começar a vender pelo WhatsApp com catálogo automatizado.',
      rationalPoints: [
        'Diagramação em blocos modulares com alto contraste cromático',
        'Gatilhos de urgência e teste gratuito sem necessidade de cartão de crédito',
        'Depoimentos curtos em formato de mensagens de áudio estilizadas'
      ],
      deliverable: 'Conjunto de Anúncios para Instagram, Meta & LinkedIn',
      metrics: { label: 'Novos Cadastros', value: 'Recorde em 30 Dias' }
    }
  ],

  'case-diversos-boteco-atento': [
    {
      id: 'boteco-s1',
      slideNumber: 1,
      title: 'Cenografia & Espaço de Marca "Boteco Atento"',
      subtitle: 'Convenção Nacional de Líderes com Alma Carioca',
      categoryTag: 'Lâmina 01 • Cenografia & Evento',
      imageUrl: './assets/imagens/apresentacao-slide-convencao-nacional-de-lideres-com-alma-carioca.png',
      description: 'Criação da identidade visual, cenografia e ambientação imersiva para o evento temático "Boteco Atento Brasil", celebrando metas alcançadas com clima de boteco carioca.',
      rationalPoints: [
        'Logotipo temático inspirado nas tradicionais placas esmaltadas de botequim',
        'Piso xadrez náutico, mesas com toalhas personalizadas e cardápios temáticos',
        'Espaço com pebolim, telão de futebol e iluminação aconchegante com lâmpadas de filamento'
      ],
      deliverable: 'Projeto Cenográfico 3D & Comunicação Visual do Salão',
      metrics: { label: 'Engajamento dos Líderes', value: '100% de Aprovação' }
    }
  ],

  'case-diversos-estande-atento': [
    {
      id: 'estande-s1',
      slideNumber: 1,
      title: 'Arquitetura Promocional & Estande de Feira',
      subtitle: 'Estande Modular "Diversidade Faz Parte da Nossa Equipe"',
      categoryTag: 'Lâmina 01 • Arquitetura Comercial',
      imageUrl: './assets/imagens/apresentacao-slide-estande-modular-diversidade-faz-parte-da-nossa-equipe.png',
      description: 'Projeto tridimensional de estande para convenções de Recursos Humanos e Tecnologia, acolhendo visitantes com conforto, acessibilidade e estações interativas.',
      rationalPoints: [
        'Testeiras em balanço com logotipo vazado e iluminação backlight LED',
        'Lounge de negócios com sofás ergonômicos e balcão de café gourmet',
        'Piso tátil integrado e bancadas com altura acessível para cadeirantes'
      ],
      deliverable: 'Projeto 3D Executivo, Plantas de Montagem & Sinalização',
      metrics: { label: 'Reconhecimento da Feira', value: 'Prêmio de Melhor Estande' }
    }
  ],

  'case-diversos-lavei-gtm': [
    {
      id: 'lavei-gtm-s1',
      slideNumber: 1,
      title: 'Lavei — Apresentação Layout Go-to-Market',
      subtitle: 'Exposição ao Cliente Usuário & Arquitetura de Experiência',
      categoryTag: 'Lâmina 01 • Go-to-Market & Exposição',
      imageUrl: './assets/imagens/diversos-lavei-gotomarket.png',
      description: 'Estruturação do layout de apresentação comercial e estratégica de go-to-market, concebida para expor de forma clara, atrativa e intuitiva a proposta de valor, os pontos de contato da jornada e a experiência direta do cliente usuário.',
      rationalPoints: [
        'Diagramação em blocos visuais de rápida leitura e apreensão imediata de valor',
        'Demonstração esquemática da jornada de conveniência e facilidade de autosserviço',
        'Linguagem visual clean, acolhedora e moderna conectando tecnologia ao dia a dia do consumidor'
      ],
      deliverable: 'Apresentação Executiva de Go-to-Market & Layouts de Exposição ao Cliente',
      metrics: { label: 'Compreensão da Mensagem', value: '100% de Clareza' }
    }
  ],

  'case-onepager-lavai': [
    {
      id: 'lavai-onepager-s1',
      slideNumber: 1,
      title: 'LavAí — Lâmina de Expansão & Franquias',
      subtitle: 'Lavanderias Self-Service Automatizadas em Hipermercados',
      categoryTag: 'Lâmina 01 • Novos Negócios',
      imageUrl: './assets/imagens/onepagers-lavai.png',
      description: 'Apresentação comercial sintética de uma página para negociação de pontos em galerias comerciais de grandes redes de supermercados.',
      rationalPoints: [
        'Projeções de retorno sobre investimento por metro quadrado',
        'Demonstração visual do quiosque compacto e tecnológico',
        'Casos de sucesso de fluxo em lojas Carrefour e GPA'
      ],
      deliverable: 'Pitch Paper Executivo para Diretores Imobiliários',
      metrics: { label: 'Conversão em Negociações', value: 'Alta Aderência' }
    }
  ],

  'case-onepager-eater': [
    {
      id: 'eater-onepager-s1',
      slideNumber: 1,
      title: 'Eater — One Pager de Parcerias Gastronômicas',
      subtitle: 'Ecossistema e Curadoria para Alta Gastronomia',
      categoryTag: 'Lâmina 01 • Food & Hospitality',
      imageUrl: './assets/imagens/onepagers-eater.png',
      description: 'Lâmina editorial com acabamento premium para captação de restaurantes parceiros e chefs renomados.',
      rationalPoints: [
        'Fotografia imersiva com tratamento refinado de luz',
        'Métricas de engajamento e público qualificado',
        'Proposta de valor centrada em prestígio de marca'
      ],
      deliverable: 'One Pager Digital de Apresentação Gastronômica',
      metrics: { label: 'Adesão de Restaurantes', value: 'Top Tier' }
    }
  ],

  'case-ad-auden': [
    {
      id: 'auden-ad-s1',
      slideNumber: 1,
      title: 'Auden — Campanha Institucional & Performance',
      subtitle: 'Educação Executiva e Formação para o Futuro',
      categoryTag: 'Lâmina 01 • Anúncio & Performance',
      imageUrl: './assets/imagens/anuncios-auden.png',
      description: 'Criativos publicitários para redes profissionais e portais de negócios comunicando a excelência dos programas executivos da Auden.',
      rationalPoints: [
        'Tipografia imponente que transmite autoridade e liderança',
        'Direcionamento de mensagens para tomadores de decisão de carreira',
        'Estratégia de call-to-action de alta conversão'
      ],
      deliverable: 'Campanha Integrada Digital & Mídia Impressa',
      metrics: { label: 'Qualificação de Leads', value: '+65% de Relevância' }
    }
  ],

  'case-ad-interaxa': [
    {
      id: 'interaxa-ad-s1',
      slideNumber: 1,
      title: 'Interaxa — Campanha WhatsApp Business API',
      subtitle: 'Omnichannel Inteligente em Escala Corporativa',
      categoryTag: 'Lâmina 01 • Anúncio B2B Tech',
      imageUrl: './assets/imagens/anuncios-interaxa.png',
      description: 'Série de anúncios para revistas de tecnologia, CX e mídia programática B2B destacando a robustez da solução Interaxa para grandes operações.',
      rationalPoints: [
        'Visual tech minimalista com elementos gráficos de conexão de dados',
        'Headline com autoridade comprovada no mercado de CX',
        'Destaque para o selo de provedor oficial'
      ],
      deliverable: 'Anúncios Digitais Widescreen & Mídia de Negócios',
      metrics: { label: 'Visibilidade C-Level', value: 'Líder em Menções de CX' }
    }
  ]
};

export function getProjectSlides(projectId: string): ProjectSlide[] {
  if (PROJECT_SLIDES_MAP[projectId]) {
    return PROJECT_SLIDES_MAP[projectId];
  }
  // Fallback if not specifically mapped
  return [
    {
      id: `${projectId}-s1`,
      slideNumber: 1,
      title: 'Visão Geral & Desafio Estratégico',
      subtitle: 'Diagnóstico e Posicionamento de Marca',
      categoryTag: 'Lâmina 01 • Visão Geral',
      imageUrl: './assets/imagens/apresentacao-slide-diagnostico-e-posicionamento-de-marca.png',
      description: 'Estruturação estratégica e visual desenvolvida sob a metodologia copacabanabrasil para clarear, destravar e acelerar o negócio.',
      rationalPoints: [
        'Alinhamento com os tomadores de decisão',
        'Execução técnica de alta precisão com acabamento gráfico impecável',
        'Narrativa direta focada em valor percebido'
      ],
      deliverable: 'Entrega Estratégica Completa',
      metrics: { label: 'Padrão Visual', value: 'copacabanabrasil' }
    }
  ];
}
