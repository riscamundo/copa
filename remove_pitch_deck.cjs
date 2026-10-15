const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

const pitchDeckRegex = /\s*<a href="#presentation" className="hover:text-white transition-colors cursor-pointer">\s*Pitch Deck\s*<\/a>/;

appContent = appContent.replace(pitchDeckRegex, '');

fs.writeFileSync('src/App.tsx', appContent);

let feedContent = fs.readFileSync('src/components/FullWidthFeed.tsx', 'utf8');

const filterBarRegex = /\s*\{\/\*\s*Sticky Editorial Category Filter Bar\s*\*\/\}\s*<div[\s\S]*?<div\s*className="text-\[11px\] font-mono-data opacity-50 uppercase tracking-widest hidden md:flex items-center gap-2 shrink-0">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

feedContent = feedContent.replace(filterBarRegex, '');

fs.writeFileSync('src/components/FullWidthFeed.tsx', feedContent);

