import { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Academic Research & Writing | OYEN GROUP',
  description: 'VERBA - Premium academic research and writing services.',
};

export default function VerbaPage() {
  return (
    <main className="bg-white min-h-screen text-[#111719] font-['Inter',sans-serif]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col items-center justify-center text-center pt-20">
        <Image 
          src="/images/showcase/verba_ui.png" 
          alt="Academic Research & Writing" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Academic Research & Writing
          </h1>
          <p className="text-sm md:text-base text-white/90 leading-relaxed font-['Inter',sans-serif] max-w-4xl mx-auto font-medium">
            VERBA provides premium academic research and writing services. We specialize in producing high-quality, rigorously researched academic materials for institutions and professionals.
          </p>
        </div>
      </section>

      {/* 2. SECTION 1: RESEARCH EXCELLENCE */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
            Research Excellence
          </h2>
          <p className="text-[#59636D] text-lg leading-relaxed max-w-3xl mx-auto">
            Our dedicated team of researchers and writers ensures that every project meets the highest standards of academic integrity, clarity, and depth of analysis. We deliver unparalleled quality in every document.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
              <Image src="/images/tech.jpg" alt="Comprehensive Analysis" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Comprehensive Analysis
            </h3>
            <p className="text-[#59636D] leading-relaxed">
              We deliver in-depth literature reviews, data analysis, and critical evaluations tailored to your specific academic requirements and institutional guidelines.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
              <Image src="/images/hero-slide2.jpg" alt="Academic Publishing" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Academic Publishing
            </h3>
            <p className="text-[#59636D] leading-relaxed">
              Assisting researchers in preparing manuscripts for publication in peer-reviewed journals with rigorous formatting, structuring, and professional editing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
              <Image src="/images/partnership.jpg" alt="Research Methodology" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Research Methodology
            </h3>
            <p className="text-[#59636D] leading-relaxed">
              Expert guidance on selecting and implementing robust quantitative and qualitative research methodologies to ensure the validity and reliability of your study.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: DISCOVER VERBA */}
      <section className="bg-[#FAFAFA] py-24 px-6 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start text-left max-w-lg">
            <h2 className="text-3xl md:text-5xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
              Meet VERBA.
            </h2>
            <h3 className="text-xl md:text-2xl text-[#D5A547] font-medium mb-6">
              A smarter environment for research and academic writing.
            </h3>
            <p className="text-[#59636D] text-lg leading-relaxed mb-10">
              VERBA provides a sophisticated digital workspace designed specifically for the rigors of academic work. Organize your sources, draft with precision, and seamlessly collaborate in one professional interface.
            </p>
            <CTAButton href="#" text="Explore VERBA" theme="dark" />
          </div>
          <div className="relative w-full aspect-[16/10] bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
            <Image src="/images/showcase/verba_ui.png" alt="VERBA Interface" fill className="object-cover object-left-top" />
          </div>
        </div>
      </section>

      {/* 4. SECTION 3: HOW VERBA WORKS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gray-200" />
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-[#D5A547] flex items-center justify-center text-xl font-bold text-[#D5A547] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
              01
            </div>
            <h3 className="text-xl font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">Start Your Research</h3>
            <p className="text-[#59636D] leading-relaxed">Consolidate literature, gather data, and build your foundation efficiently.</p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-[#D5A547] flex items-center justify-center text-xl font-bold text-[#D5A547] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
              02
            </div>
            <h3 className="text-xl font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">Develop Your Work</h3>
            <p className="text-[#59636D] leading-relaxed">Draft, analyze, and structure your arguments within a distraction-free space.</p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-[#D5A547] flex items-center justify-center text-xl font-bold text-[#D5A547] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
              03
            </div>
            <h3 className="text-xl font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">Review & Refine</h3>
            <p className="text-[#59636D] leading-relaxed">Collaborate with peers, ensure proper citation, and prepare for publication.</p>
          </div>
        </div>
      </section>

      {/* 5. SECTION 4: ACADEMIC INTEGRITY */}
      <section className="bg-[#FAFAFA] py-24 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden bg-gray-100 rounded">
            <Image src="/images/solutions_bg.jpg" alt="Research With Integrity" fill className="object-cover" />
          </div>
          <div className="flex flex-col items-start text-left max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
              Research With Integrity.
            </h2>
            <div className="text-[#59636D] text-lg leading-relaxed space-y-6">
              <p>
                At OYEN GROUP, we are deeply committed to responsible research practices. VERBA is built to uphold the fundamental principles of academic integrity, ensuring that every project is meticulously sourced, accurately referenced, and rigorously verified.
              </p>
              <p>
                We do not take shortcuts. Our tools are designed to assist genuine scholarship, providing frameworks for proper citation management and source verification that meet the exacting standards of global academic institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 5: CLOSING CTA */}
      <section className="bg-[#09251F] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
            Take Your Research Further.
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 font-light">
            Discover how VERBA can support your research and writing journey.
          </p>
          <CTAButton href="#" text="Explore VERBA" theme="light" />
        </div>
      </section>

    </main>
  );
}
