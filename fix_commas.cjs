const fs = require('fs');
let code = fs.readFileSync('src/data/catalog.ts', 'utf8');

code = code.replace(/  \},,/g, '  },');

fs.writeFileSync('src/data/catalog.ts', code);
