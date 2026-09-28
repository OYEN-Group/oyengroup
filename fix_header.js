const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');
content = content.replace('w-[130px] h-[35px]', 'w-[150px] h-[40px] md:w-[170px] md:h-[45px]');
content = content.replace('/images/logo.png', '/images/logo_transparent.png');
content = content.replace('className=\"object-contain object-left mix-blend-screen\"', 'className=\"object-contain object-left\"');
fs.writeFileSync('src/components/Header.tsx', content, 'utf8');
