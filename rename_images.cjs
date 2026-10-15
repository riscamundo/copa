const fs = require('fs');

const toSafe = (str) => {
  if (!str) return 'unknown';
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
};

let catalog = fs.readFileSync('src/data/catalog.ts', 'utf8');

// We need to parse each block carefully.
// A simpler way: loop over lines, keep track of current client and category.
let lines = catalog.split('\n');
let currentClient = '';
let currentCategory = '';

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  
  let clientMatch = line.match(/client:\s*'([^']+)'/);
  if (clientMatch) {
    currentClient = toSafe(clientMatch[1]);
  }
  
  let catMatch = line.match(/category:\s*'([^']+)'/);
  if (catMatch) {
    currentCategory = toSafe(catMatch[1]);
  }
  
  // Replace url
  if (line.match(/\burl:\s*'/)) {
    // If it's the url inside a project block
    if (currentClient && currentCategory) {
      lines[i] = line.replace(/url:\s*'[^']+'/, `url: '/assets/imagens/${currentCategory}-${currentClient}.jpg'`);
    }
  }
  
  // Replace thumbnailUrl
  if (line.match(/\bthumbnailUrl:\s*'/)) {
    if (currentClient && currentCategory) {
      lines[i] = line.replace(/thumbnailUrl:\s*'[^']+'/, `thumbnailUrl: '/assets/imagens/${currentCategory}-${currentClient}-thumb.jpg'`);
    }
  }
}

fs.writeFileSync('src/data/catalog.ts', lines.join('\n'));

// Now for projectSlidesData.ts
let slides = fs.readFileSync('src/data/projectSlidesData.ts', 'utf8');

// For slides, it's a bit harder because they are grouped by project ID. 
// But the user just wants the ones that are there to have a logical name.
// Let's replace imageUrl: '...' with imageUrl: '/assets/imagens/slide-X.jpg' where we extract a safe name from subtitle or title.
let slideLines = slides.split('\n');
let currentSlideTitle = '';
for (let i = 0; i < slideLines.length; i++) {
  let sLine = slideLines[i];
  let titleMatch = sLine.match(/title:\s*'([^']+)'/);
  if (titleMatch) {
    currentSlideTitle = toSafe(titleMatch[1]);
  }
  if (sLine.match(/imageUrl:\s*'/)) {
    if (currentSlideTitle) {
      slideLines[i] = sLine.replace(/imageUrl:\s*'[^']+'/, `imageUrl: '/assets/imagens/apresentacao-slide-${currentSlideTitle}.jpg'`);
    }
  }
}
fs.writeFileSync('src/data/projectSlidesData.ts', slideLines.join('\n'));
