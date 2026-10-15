const fs = require('fs');
let code = fs.readFileSync('src/data/catalog.ts', 'utf8');
const startIdx = code.indexOf('export const INITIAL_PROJECTS: ArtProject[] = [');
const endIdx = code.indexOf('// Backwards compatibility');

console.log("Start:", startIdx, "End:", endIdx);
console.log(code.substring(startIdx, startIdx + 500));
