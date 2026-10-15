const fs = require('fs');
let content = fs.readFileSync('src/data/catalog.ts', 'utf8');

const replacement = `    finish: '$1',
    url: '$2',
    description: 'Espaço reservado para o projeto.',
    curatorNote: '',
    aspectRatio: '16:9',
    colorPalette: []`;

content = content.replace(/finish: '([^']+)',\s+url: '([^']+)'/g, replacement);
fs.writeFileSync('src/data/catalog.ts', content);
