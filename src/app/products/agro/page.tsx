import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Oyen Agro | OYEN GROUP',
  description: 'Oyen Agro division of OYEN GROUP.',
};

export default function AgroPage() {
  return (
    <div className="bg-white min-h-screen pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="mb-6 flex items-center text-sm font-['Inter',sans-serif] text-[#59636D]">
          <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#D5A547] transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111719] font-medium">Oyen Agro</span>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl md:rounded-[32px] overflow-hidden">
          <Image 
            src="/images/partnership.jpg" 
            alt="Oyen Agro" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 lg:left-24 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-4 leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Oyen Agro
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-['Inter',sans-serif] max-w-2xl leading-relaxed">
              We aim to drive sustainable agriculture, optimizing food security through technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CENTERED TEXT INTRO */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto text-center">
        <div className="flex flex-col gap-6 text-[19px] md:text-[21px] text-[#111719] font-['Inter',sans-serif] leading-[1.6] font-medium">
          <p>
            Agriculture is essential for the smooth running of communities across many nations. A brand well-known inside the continent, Oyen Agro is a leading supplier of premium quality agricultural products — providing the essential resources for a growing population.
          </p>
        </div>
      </section>

      {/* 3. SPLIT SECTION (Left Image) */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
            <Image src="/images/tech.jpg" alt="Precision Farming" fill className="object-cover" />
          </div>
          <div className="flex flex-col pt-8">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-8">
              Precision Farming
            </h2>
            <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed mb-8">
              <p>
                Oyen Agro is a premier brand in agricultural innovation. We develop and produce a wide range of advanced farming tools, fertilizers, and smart irrigation systems. Over the years, we've invested heavily in R&D to ensure our agricultural solutions meet the highest standards of efficiency and sustainability.
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
          What is sustainable agriculture?
        </h3>
        <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
          <p>
            Sustainable agriculture is farming in sustainable ways, which means meeting society's present food and textile needs, without compromising the ability of future generations to meet their own needs. It involves building and maintaining healthy soil, managing water wisely, and minimizing air, water, and climate pollution.
          </p>
          <p>
            There are different types of agricultural practices that cover a range of applications, from small-scale organic farming to large-scale precision agriculture — which specifically caters to the modern industrial food production demand.
          </p>
        </div>
      </section>

      {/* 5. FEATURES GRID (Light Grey Background) */}
      <section className="bg-[#F4F4F4] py-20 md:py-24">
        <div className="px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-16 max-w-sm leading-tight">
            Quality agriculture should have:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            
            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                Consistent yield
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Optimized harvest through technology.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                Environmental stability
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Sustainable soil and water usage.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                Strength
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Reliable distribution networks.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                Climate resilience
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Crops adapted to changing climates.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-2xl font-semibold text-[#007079] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                Water efficiency
              </h3>
              <p className="text-sm font-bold text-[#111719] font-['Inter',sans-serif] uppercase tracking-wide">
                Advanced irrigation and water conservation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. MORE TEXT BLOCKS */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto">
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
            How is food produced?
          </h3>
          <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
            <p>
              Food production is the process of transforming raw materials into ready-to-eat food products. It involves various stages, from planting and harvesting to processing, packaging, and distribution, with modern technology optimizing every step.
            </p>
            <p>
              There are different processes involved, each tailored to specific crop types and environmental conditions to maximize yield and application.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
            What is the future of agriculture?
          </h3>
          <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
            <p>
              The future of agriculture relies heavily on digital technology, AI, and sustainable practices. Advanced machinery, drone monitoring, and predictive analytics allow farmers to optimize yields, reduce waste, and adapt to climate challenges.
            </p>
            <p>
              As we face a growing global population, Oyen Agro is committed to pioneering these innovations, ensuring that we can produce more food with fewer resources while protecting our planet's ecosystems.
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
                Agro products
              </h2>
              <p className="text-lg text-[#59636D] font-['Inter',sans-serif] mb-12 leading-relaxed">
                From fertilizers to advanced machinery, our diverse and expanding range of products is designed to cater to our partners and stakeholders.
              </p>
              <Link href="#" className="text-[#007079] font-bold font-['Inter',sans-serif] flex items-center gap-2 hover:gap-3 transition-all text-lg w-fit">
                Find out more
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-[#007079] p-1">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm lg:order-2 order-1">
              <Image src="/images/energy.jpg" alt="Agro products" fill className="object-cover" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
