import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industrial Intelligence | Coming Soon',
  description: 'Industrial Intelligence - Coming Soon',
};

export default function IndustrialPage() {
  return (
    <main className="bg-[#05110E] min-h-screen text-white font-['Inter',sans-serif] overflow-hidden selection:bg-[#D5A547] selection:text-[#09251F]">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Image 
          src="/images/tech.jpg" 
          alt="Industrial Intelligence Background" 
          fill 
          className="object-cover opacity-10 blur-3xl scale-125 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#05110E]/90 to-[#05110E]" />
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center container mx-auto px-6 lg:px-12 py-32">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#D5A547]"></span>
              <span className="text-[#D5A547] font-bold tracking-[0.3em] text-xs md:text-sm uppercase">03 &mdash; Under Development</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1]">
              INDUSTRIAL<span className="text-[#D5A547]">.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 font-light max-w-lg leading-relaxed">
              The foundation of <span className="text-white font-medium">Industrial Intelligence</span>. 
            </p>

            <p className="text-base text-white/40 mb-12 max-w-md leading-relaxed">
              We are expanding our software engineering capabilities into a dedicated industrial intelligence suite. Tailored for heavy industries that demand rigorous performance, data insights, and scalability.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <div className="bg-[#D5A547] text-[#09251F] px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs md:text-sm shadow-[0_0_30px_rgba(213,165,71,0.2)] hover:shadow-[0_0_40px_rgba(213,165,71,0.4)] transition-shadow duration-500 cursor-default">
                Launching Soon
              </div>
              <Link href="/products" className="text-white/60 hover:text-white transition-colors text-xs md:text-sm font-bold border-b border-white/20 hover:border-white pb-1 tracking-[0.15em] uppercase">
                Explore Other Solutions
              </Link>
            </div>
          </div>

          {/* Right Visual Presentation */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl transition-transform duration-1000 ease-out group-hover:scale-[1.02]">
              <Image 
                src="/images/tech.jpg" 
                alt="Digital Interface Preview" 
                fill 
                className="object-cover object-center scale-110 opacity-60 blur-[3px] transition-all duration-1000 group-hover:blur-[1px] group-hover:opacity-80"
                quality={100}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05110E] via-[#05110E]/40 to-transparent" />
              
              {/* Glass Overlay Widget */}
              <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 bg-black/60 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-lg flex items-center justify-between shadow-2xl">
                <div>
                  <div className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2">Network Status</div>
                  <div className="text-white text-sm md:text-base font-medium tracking-wide flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D5A547] animate-pulse"></span>
                    Infrastructure Provisioning
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Readiness</div>
                  <div className="text-[#D5A547] font-mono text-lg">67%</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border border-white/5 rounded-full flex items-center justify-center -z-10">
              <div className="w-24 h-24 border border-white/10 rounded-full"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-[#D5A547]/10 rounded-full flex items-center justify-center -z-10">
              <div className="w-32 h-32 border border-[#D5A547]/5 rounded-full"></div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
