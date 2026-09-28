const fs = require('fs');
let content = fs.readFileSync('src/components/home/HeroSection.tsx', 'utf8');

const replacement = <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.6 }}
 className="flex flex-col sm:flex-row items-center justify-center gap-8"
 >
 <Link
 href="/about"
 className="group flex items-center gap-4 bg-brand-accent hover:bg-[#c29541] text-brand-primary px-10 py-5 font-bold tracking-wide transition-colors duration-300 uppercase text-base"
 >
 Learn More
 <span className="group-hover:translate-x-1 transition-transform">?</span>
 </Link>
 </motion.div>;

content = content.replace(/<motion\.div[\s\S]*?Discover OYEN GROUP[\s\S]*?<\/motion\.div>/, replacement);

fs.writeFileSync('src/components/home/HeroSection.tsx', content, 'utf8');
