const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace tiny texts
  let updated = content.replace(/text-\[10px\]/g, 'text-xs');
  updated = updated.replace(/text-xs/g, 'text-sm');
  updated = updated.replace(/text-sm/g, 'text-base');
  
  // Improve legibility: replace font-light with font-medium
  updated = updated.replace(/font-light/g, ''); 
  
  // Boost contrast of muted text
  updated = updated.replace(/text-white\/80/g, 'text-white/95');
  updated = updated.replace(/text-white\/90/g, 'text-white/95');
  updated = updated.replace(/text-gray-400/g, 'text-gray-600');
  
  // Navigation elements: 'text-\[14px\]' or 'text-[14px]' -> 'text-base'
  updated = updated.replace(/text-\[14px\]/g, 'text-base');
  
  // Clean up double spaces from removed font-light
  updated = updated.replace(/  +/g, ' ');

  if (updated !== content) {
    fs.writeFileSync(file, updated, 'utf8');
    console.log('Updated ' + path.basename(file));
  }
});
