const fs = require('fs');
let code = fs.readFileSync('src/data/catalog.ts', 'utf8');

const startIdx = code.indexOf('export const INITIAL_PROJECTS: ArtProject[] = [');
const endIdx = code.indexOf('];\n// Backwards compatibility');

const before = code.substring(0, startIdx + 'export const INITIAL_PROJECTS: ArtProject[] = ['.length);
const after = code.substring(endIdx);
const middle = code.substring(startIdx + 'export const INITIAL_PROJECTS: ArtProject[] = ['.length, endIdx);

// Split middle by `id: '`
const parts = middle.split(/\s*id:\s*'/);
// parts[0] is garbage before the first id
const projects = [];

for (let i = 1; i < parts.length; i++) {
  let part = parts[i];
  // part starts with the id value, e.g. `case-1', ...`
  // We need to parse this back into an object!
  // Since it's just raw TS code, we can just wrap it in `{ id: '` and `}` and see if we can parse it?
  // No, there are syntax errors inside `part`! 
  console.log("Project " + i + " starts with: " + part.substring(0, 30).replace(/\n/g, ' '));
}
