# Lista de Capas Principais dos Cases — copacabanabrasil

Planejamento e consolidação dos nomes exatos dos arquivos de imagem para as capas de todos os cases do catálogo copacabanabrasil, organizados por categoria conforme as respostas do usuário.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Decisões confirmadas pelo usuário:**
> - **Escopo:** Apenas as capas principais dos cases do portfólio (excluindo lâminas internas ou galerias secundárias).
> - **Formato:** Lista simples com os nomes exatos dos arquivos correspondentes às rotas do catálogo.

- **Padrão de Nomenclatura:** Todos os arquivos seguem o padrão padronizado do projeto (`assets/imagens/<categoria>-<cliente>.<ext>` ou os nomes customizados de capa já vinculados).
- **Proporção Padrão:** Formato Widescreen 16:9 de alta resolução (4K / Full HD).

---

## 1. Overview & Core Concept

- **Objetivo:** Fornecer ao usuário a relação direta, limpa e padronizada de todos os nomes de arquivos que o site espera para as capas de cada projeto no feed e no acervo.
- **Pasta de Destino:** `/public/assets/imagens/` (ou na raiz `/public/`).
- **Compatibilidade:** O sistema possui fallback automático caso os arquivos sejam inseridos tanto na pasta `assets/imagens/` quanto na raiz do build.

---

## 2. Relação Simples dos Nomes de Arquivos das Capas (.PNG)

Abaixo está a listagem consolidada de todos os arquivos de capa dos cases cadastrados no portfólio (todos em formato `.png`):

### Apresentações (Decks Comerciais & Estratégicos)
1. `capa1_atento.png` — Atento (Proposta Comercial & Transformação Digital)
2. `capa2_rio2007.png` — Rio 2016 (Apresentação da Conquista do Sonho Olímpico)
3. `apresentacoes-genoa-intelligence--algoritmos.png` — Genoa Intelligence (Performance Platform Like No Other)
4. `apresentacoes-cliqx-tecnologia.png` — Cliqx Tecnologia (Shop Cliqx & Omnichannel Total Experience)
5. `apresentacoes-hortifruti-natural-da-terra.png` — Hortifruti Natural da Terra (Digitalmente Natural)
6. `apresentacoes-target-bank.png` — Target Bank (Target Integra & Nova Visão de Negócios)

### Logomarcas & Identidades Visuais
7. `logomarcas-monkia-technology.png` — monk.ia (Startup de Inteligência Artificial Corporativa)
8. `logomarcas-lavai-hipermercados.png` — LavAí (Startup de Lavanderias Self-Service)
9. `logomarcas-blue6ix-interaxa-company.png` — blue6ix (Customer Experience & Inteligência de Áudio)
10. `logomarcas-direct-talk-lider-em-atendimento.png` — Direct-Talk (Redesenho de Marca & Plataforma)
11. `logomarcas-instituto-jose-resende.png` — Instituto José Resende (Arte Contemporânea & Escultura)
12. `logomarcas-jornadda.png` — Jornadda (The Customer Journey Company)

### Brand Books & Manuais de Marca
13. `brandbooks-triveela-gastronomia--vinhos.png` — Triveela (Brand Book & Guia de Aplicação)
14. `brandbooks-cliqx-tecnologia.png` — Cliqx Tecnologia (Manual de Identidade Visual Corporativa)

### One Pagers & Papers Comerciais
15. `onepagers-interaxa--whatsapp-business.png` — Interaxa WAAP (WhatsApp API Provider)
16. `onepagers-pernambucanas-solucoes-financeiras.png` — Pernambucanas (Lâminas Cartões Múltiplos & Odonto)
17. `onepagers-lavai.png` — LavAí (One Pager de Franquias & Expansão em Hipermercados)
18. `onepagers-eater.png` — Eater (One Pager de Plataforma & Parcerias Gastronômicas)

### Anúncios & Campanhas
19. `anuncios-atento-global.png` — Atento Global (Campanha CX = E + E)
20. `anuncios-cliqx-one.png` — Cliqx One (Foguete Não Tem Ré)
21. `anuncios-auden.png` — Auden (Campanha Institucional & Performance Educacional)
22. `anuncios-interaxa.png` — Interaxa (Campanha Omnichannel & WhatsApp Business Provider)

### Diversos (Cenografia, Estandes & Go-to-Market)
23. `diversos-atento-brasil.png` — Atento Brasil (Boteco Atento & Estande de Diversidade)
24. `diversos-lavei-gotomarket.png` — Lavei (Apresentação Layout Go-to-Market, Exposição ao Cliente Usuário)

---

---

## 3. Arquitetura de Imagens Fixas e Produção Final

- **Imagens 100% Fixas e Físicas:** Todos os 24 arquivos `.png` de capas dos cases foram gerados e consolidados em alta resolução (1920×1080) com os logotipos oficiais dos clientes, tipografia corporativa e paleta sob medida.
- **Locais de Armazenamento:** Os arquivos estão presentes simultaneamente em `site pronto/assets/imagens/`, `site pronto/` (raiz), `public/assets/imagens/` e `public/`, eliminando qualquer possibilidade de erro 404.
- **Remoção de "Trocar Capa":** O botão "Trocar Capa", o hover de substituição e os overlays de upload foram completamente removidos dos cards e da galeria, deixando o feed limpo e 100% focado na exibição dos cases.

---

## 4. Guia de Publicação no cPanel (Hospedagem Estática sem Node.js)

1. **Destino no cPanel:**
   - Acesse o **Gerenciador de Arquivos** (File Manager) do seu cPanel.
   - Navegue até a pasta **`public_html`** (ou subpasta de sua preferência, ex: `public_html/portfolio`).
2. **Envio dos Arquivos:**
   - Envie o conteúdo interno da pasta **`site pronto`** (incluindo o arquivo oculto **`.htaccess`**, **`index.html`**, **`robots.txt`**, **`sitemap.xml`** e a pasta **`assets/`**).
3. **Compatibilidade Garantida:**
   - **Sem Node.js no servidor:** O build é puramente estático (HTML5, CSS3, ES Modules, imagens PNG). O Apache do cPanel entrega tudo de forma instantânea.
   - **Navegador sem JavaScript (`<noscript>`):** O `index.html` contém um fallback pré-renderizado completo com posicionamento de marca, soluções e canais de contato caso o visitante desative o JavaScript.
   - **Configuração `.htaccess`:** Inclui tipos MIME para `.js`/`.mjs`/`.webp`/`.woff2`, compressão Gzip (mod_deflate) e roteamento limpo para SPA compatível com raiz e subpastas.
