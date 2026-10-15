const fs = require('fs');

let content = fs.readFileSync('src/data/catalog.ts', 'utf8');

// 1. Reorder COPACABANA_SOLUTIONS
const solMatch = content.match(/export const COPACABANA_SOLUTIONS: CopacabanaSolution\[\] = \[([\s\S]*?)\];\n/);
if (solMatch) {
    const solBody = solMatch[1];
    // Split by `  },`
    let items = solBody.split('  },').filter(item => item.trim() !== '');
    items = items.map(i => i + '  }');
    
    // items ending with `  }` might have `\n  {` at the beginning
    // Separate apresentacoes from others
    const apresentacoes = [];
    const others = [];
    items.forEach(item => {
        if (item.includes("category: 'apresentacoes'")) {
            apresentacoes.push(item);
        } else {
            others.push(item);
        }
    });
    const reorderedBody = [...apresentacoes, ...others].join(',\n') + '\n';
    content = content.replace(solMatch[1], '\n' + reorderedBody);
}

// 2. Reorder INITIAL_PROJECTS
const projMatch = content.match(/export const INITIAL_PROJECTS: ArtProject\[\] = \[([\s\S]*?)\];\n/);
if (projMatch) {
    const projBody = projMatch[1];
    // Split by `  },`
    let items = projBody.split('  },').filter(item => item.trim() !== '');
    items = items.map(i => i + '  }');
    
    const apresentacoes = [];
    const others = [];
    items.forEach(item => {
        if (item.includes("category: 'apresentacoes'")) {
            apresentacoes.push(item);
        } else {
            others.push(item);
        }
    });
    
    // Note: Some projects have a nested array `colorPalette: ['#...', '#...']` but `},` is only inside the array? No, `colorPalette: []` or `colorPalette: ['#123']` doesn't have `},`.
    // Let's verify no nested `},` in the string.
    
    const reorderedBody = [...apresentacoes, ...others].join(',\n') + '\n';
    content = content.replace(projMatch[1], '\n' + reorderedBody);
}

fs.writeFileSync('src/data/catalog.ts', content);
console.log('Reordered successfully!');
