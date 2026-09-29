import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Strategic Collaboration | OYEN GROUP',
  description: 'Building long-term, synergistic partnerships that drive innovation.',
};

export default function CollaborationPage() {
  return (
    <main className="bg-white min-h-screen text-[#111719] font-['Inter',sans-serif]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col items-center justify-center text-center pt-20">
        <Image 
          src="/images/partnership.jpg" 
          alt="Strategic Collaboration" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Strategic Collaboration
          </h1>
          <p className="text-sm md:text-base text-white/90 leading-relaxed font-['Inter',sans-serif] max-w-4xl mx-auto font-medium">
            We build long-term, synergistic partnerships that drive innovation and create sustainable value across industries and geographies.
          </p>
        </div>
      </section>

      {/* 2. SECTION 1 (Title & Text) */}
      <section className="py-20 md:py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6 tracking-tight">
          Collaborative Ecosystems
        </h2>
        <p className="text-[#333333] text-sm md:text-[15px] leading-relaxed max-w-4xl mx-auto">
          OYEN GROUP actively seeks out partners who share our vision for technological advancement and operational excellence. Together, we can achieve outcomes that are greater than the sum of our parts, unlocking new potential and driving mutual growth.
        </p>
      </section>

      {/* 3. 3-COLUMN GRID */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
              <Image src="/images/hero-slide4.jpg" alt="Joint Ventures" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#D5A547] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Joint Ventures
            </h3>
            <p className="text-[13px] md:text-sm text-[#333333] leading-relaxed">
              Structuring mutually beneficial joint ventures to explore new markets, share expertise, and distribute risk in large-scale strategic projects.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
              <Image src="/images/agro.jpg" alt="Technology Integration" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#D5A547] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Technology Integration
            </h3>
            <p className="text-[13px] md:text-sm text-[#333333] leading-relaxed">
              Partnering with leading technology providers to integrate cutting-edge solutions into our core operational frameworks and expand capabilities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
              <Image src="/images/solutions_bg.jpg" alt="Knowledge Sharing" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#D5A547] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Knowledge Sharing
            </h3>
            <p className="text-[13px] md:text-sm text-[#333333] leading-relaxed">
              Establishing platforms for continuous knowledge exchange, fostering a culture of mutual learning, improvement, and sustainable industrial advancement.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SPLIT SECTION */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden">
            <Image src="/images/tech.jpg" alt="Global Reach" fill className="object-cover" />
          </div>
          <div className="flex flex-col text-center md:text-left items-center md:items-start max-w-lg mx-auto md:mx-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6 tracking-tight">
              Global Reach
            </h2>
            <p className="text-[#333333] text-sm md:text-[15px] leading-relaxed">
              Our collaborative networks extend globally, allowing us to leverage diverse perspectives and international expertise. We are committed to building bridges that facilitate cross-border innovation, operational synergy, and impactful commercial success.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
