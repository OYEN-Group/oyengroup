import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'VERBA | Academic Writing & Research Workspace',
  description: 'Academic Writing, Research & Evidence ÔÇö In One Workspace.',
};

export default function VerbaPage() {
  return (
    <div className="bg-white min-h-screen pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="mb-6 flex items-center text-sm font-['Inter',sans-serif] text-[#59636D]">
          <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#D5A547] transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111719] font-medium">VERBA</span>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl md:rounded-[32px] overflow-hidden">
          <Image 
            src="/images/tech.jpg" 
            alt="Verba Academic Workspace" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 lg:left-24 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-4 leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              VERBA
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-['Inter',sans-serif] max-w-2xl leading-relaxed">
              Write with confidence. Research with evidence. Academic Writing, Research & Evidence ÔÇö In One Workspace.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CENTERED TEXT INTRO */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto text-center">
        <div className="flex flex-col gap-6 text-[19px] md:text-[21px] text-[#111719] font-['Inter',sans-serif] leading-[1.6] font-medium">
          <p>
            Verba helps students and researchers write better, find credible sources, cite correctly, check whether their citations actually support their claims, and keep a clear record of how their work was developed.
          </p>
        </div>
      </section>

      {/* 3. SPLIT SECTION (Left Image) */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
            <Image src="/images/energy.jpg" alt="Write and Research" fill className="object-cover" />
          </div>
          <div className="flex flex-col pt-8">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-8">
              From First Idea to Final Submission
            </h2>
            <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed mb-8">
              <p>
                Turn your ideas into clear academic work. Write and refine assignments, research papers, dissertations and other academic documents while keeping your own reasoning and voice at the centre.
              </p>
              <p>
                Search for credible academic sources and bring relevant evidence into your work instead of relying on unsupported or invented references.
              </p>
            </div>
            <Link href="#" className="text-[#007079] font-bold font-['Inter',sans-serif] flex items-center gap-2 hover:gap-3 transition-all text-lg w-fit">
              Start Writing
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-[#007079] p-1">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TEXT BLOCK (What are...) */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
          Make every citation count.
        </h3>
        <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
          <p>
            Verba helps you create and manage citations while checking the relationship between your claims and the sources behind them. Current academic tools increasingly emphasize connecting claims to sources and making citation checking transparent.
          </p>
          <p>
            This is one of the areas where differentiation becomes very clear: a citation shouldn't just exist; it should support the claim you're making.
          </p>
        </div>
      </section>

      {/* 5. FEATURES GRID (Light Grey Background) */}
      <section className="bg-[#F4F4F4] py-20 md:py-24">
        <div className="px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-16 max-w-sm leading-tight">
            A single workspace for the academic process:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            
            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                01 ÔÇö WRITE
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Turn ideas into academic work.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                02 ÔÇö RESEARCH
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Find sources you can use.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                03 ÔÇö CITE
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Make every citation count.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                04 ÔÇö VERIFY
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Don't just cite it. Check it.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                05 ÔÇö SHOW YOUR WORK
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Keep the story behind the document.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. MORE TEXT BLOCKS */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto">
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
            Don't just cite it. Check it.
          </h3>
          <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
            <p>
              Review whether the source actually supports the statement you're attaching it to. The Verba verification process ensures evidence directly correlates with written claims.
            </p>
            <p className="font-bold text-[#09251F] bg-[#F4F4F4] p-4 rounded inline-block">
              Claim &rarr; Citation &rarr; Source &rarr; Evidence
            </p>
          </div>
        </div>
      </section>

      {/* 7. SPLIT SECTION 2 (Right Image, Light Grey bg) */}
      <section className="bg-[#E9ECEE] py-20 md:py-32">
        <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="flex flex-col justify-center max-w-lg lg:order-1 order-2">
              <h2 className="text-3xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
                Transparent Authorship
              </h2>
              <p className="text-lg text-[#59636D] font-['Inter',sans-serif] mb-12 leading-relaxed">
                Verba can preserve drafts, revisions, sources and recorded AI assistance so users have a clearer account of how their work developed. This is consistent with the authorship-evidence concept.
              </p>
              <Link href="#" className="text-[#007079] font-bold font-['Inter',sans-serif] flex items-center gap-2 hover:gap-3 transition-all text-lg w-fit">
                Explore Verba
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-[#007079] p-1">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm lg:order-2 order-1">
              <Image src="/images/partnership.jpg" alt="Transparent Authorship" fill className="object-cover" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
