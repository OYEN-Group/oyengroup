import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'VERBA | OYEN GROUP Technology',
  description: 'VERBA: Advanced language and text processing solutions by OYEN GROUP.',
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
            alt="Verba Intelligence" 
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
              We aim to master language intelligence, optimizing document processing and text analysis through advanced AI.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CENTERED TEXT INTRO */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto text-center">
        <div className="flex flex-col gap-6 text-[19px] md:text-[21px] text-[#111719] font-['Inter',sans-serif] leading-[1.6] font-medium">
          <p>
            Language intelligence is essential for the smooth running of enterprise data across many sectors. VERBA is a leading engine dedicated to premium quality text solutions — providing the essential capabilities for modern knowledge processing.
          </p>
        </div>
      </section>

      {/* 3. SPLIT SECTION (Left Image) */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
            <Image src="/images/energy.jpg" alt="Precision Language Processing" fill className="object-cover" />
          </div>
          <div className="flex flex-col pt-8">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-8">
              Precision Intelligence
            </h2>
            <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed mb-8">
              <p>
                VERBA is a premier solution in language innovation. We develop and produce a wide range of advanced analytical tools, summarizers, and smart semantic search engines. Over the years, we've invested heavily in AI research to ensure our solutions meet the highest standards of accuracy and performance.
              </p>
            </div>
            <Link href="#" className="text-[#007079] font-bold font-['Inter',sans-serif] flex items-center gap-2 hover:gap-3 transition-all text-lg w-fit">
              Find out more
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
          What is semantic intelligence?
        </h3>
        <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
          <p>
            Semantic intelligence is information processing in sustainable ways, which means meeting the enterprise's present analytical needs, without compromising the security of their data. It involves building and maintaining secure data pipelines, managing contexts wisely, and minimizing hallucinations and inaccuracies.
          </p>
          <p>
            There are different types of processing practices that cover a range of applications, from small-scale document parsing to large-scale data lake ingestion — which specifically caters to the modern industrial intelligence demand.
          </p>
        </div>
      </section>

      {/* 5. FEATURES GRID (Light Grey Background) */}
      <section className="bg-[#F4F4F4] py-20 md:py-24">
        <div className="px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-16 max-w-sm leading-tight">
            Quality intelligence should have:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            
            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                Consistent accuracy
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Optimized parsing through technology.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                Contextual stability
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Reliable semantic extraction.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                Strength
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Robust language models.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                Data resilience
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Models adapted to changing inputs.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                Scalability
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Advanced vector storage.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. MORE TEXT BLOCKS */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto">
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
            How is text processed?
          </h3>
          <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
            <p>
              Information processing is the workflow of transforming raw data into structured insights. It involves various stages, from ingestion and parsing to embedding, analysis, and visualization, with modern AI optimizing every step.
            </p>
            <p>
              There are different processes involved, each tailored to specific document types and analytical conditions to maximize clarity and application.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
            What is the future of intelligence?
          </h3>
          <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
            <p>
              The future of enterprise intelligence relies heavily on generative technology, LLMs, and secure deployment practices. Advanced embeddings and predictive analytics allow firms to optimize insights, reduce manual labor, and adapt to data challenges.
            </p>
            <p>
              As we face a growing digital landscape, VERBA is committed to pioneering these innovations, ensuring that we can process more information with fewer resources while protecting our clients' privacy.
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
                VERBA products
              </h2>
              <p className="text-lg text-[#59636D] font-['Inter',sans-serif] mb-12 leading-relaxed">
                From intelligent search to automated summaries, our diverse and expanding range of tools is designed to cater to our partners and enterprise stakeholders.
              </p>
              <Link href="#" className="text-[#007079] font-bold font-['Inter',sans-serif] flex items-center gap-2 hover:gap-3 transition-all text-lg w-fit">
                Find out more
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-[#007079] p-1">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm lg:order-2 order-1">
              <Image src="/images/partnership.jpg" alt="VERBA products" fill className="object-cover" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
