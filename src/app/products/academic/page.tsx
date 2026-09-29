import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Academic Research & Writing | OYEN GROUP',
  description: 'Enterprise solutions for academic research and writing workflows.',
};

export default function AcademicPage() {
  return (
    <div className="bg-white min-h-screen pb-0 font-['Inter',sans-serif]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px]">
        <Image 
          src="/images/tech.jpg" 
          alt="Academic Research & Writing" 
          fill 
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl">
            Academic Research & Writing
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-4xl leading-relaxed font-medium">
            As educational institutions and corporate academies transition to advanced digital workflows, we are prepared to deliver structured academic solutions tailored to meet the needs of modern researchers and authors. By streamlining research activities and adding robust writing frameworks, OYEN GROUP offers academic services that offer a better way forward.
          </p>
        </div>
      </section>

      {/* 2. CENTERED INTRO SECTION */}
      <section className="py-20 md:py-28 px-6 lg:px-12 max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] mb-8 tracking-tight">
          Research Integrity & Efficiency
        </h2>
        <p className="text-[17px] md:text-[19px] text-[#59636D] leading-[1.7] max-w-5xl mx-auto">
          At the forefront of the push for digital transformation in academia is the need for efficient research management through structured writing components. Reducing the administrative burden of citation and literature review yields immediate results. In either reduced coordination requirements for an equivalent academic outcome or an extended curriculum with the same sized cohort, our solutions offer massive advantages for universities, corporate training structures, and other educational hubs to lower overhead potential for an overall improved publication lifecycle.
        </p>
      </section>

      {/* 3. 3-COLUMN FEATURE GRID */}
      <section className="pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Feature 1 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-100">
              <Image 
                src="/images/tech.jpg" 
                alt="Literature Review" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#b48e4b] mb-4">Literature Review</h3>
            <p className="text-[15px] text-[#59636D] leading-[1.6]">
              Our robust research infrastructure provides equivalent structural integrity with more than 50 percent administrative reduction over legacy literature mapping frameworks and efficiency gains over standard tracking systems using connected knowledge platforms.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-100">
              <Image 
                src="/images/energy.jpg" 
                alt="Citation Tracking" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#b48e4b] mb-4">Citation Tracking</h3>
            <p className="text-[15px] text-[#59636D] leading-[1.6]">
              Our proprietary verification process for academic components adds a rigorous framework applied to the writing system. Once activated, the tracking agent ensures stronger evidentiary datasets, mitigating the risk of unsupported claims in academic publishing.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-100">
              <Image 
                src="/images/partnership.jpg" 
                alt="Collaborative Writing" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#b48e4b] mb-4">Collaborative Authorship</h3>
            <p className="text-[15px] text-[#59636D] leading-[1.6]">
              Our coordination hub combines complex editing and resource allocation into a single collaborative process, eliminating secondary revisions. Through the use of connected platforms, multi-author environments can contribute to more effective corporate and academic publication delivery.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SPLIT SECTION (Image Left, Text Right) */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
             <Image 
                src="/images/tech.jpg" 
                alt="Academic Workflow Integration" 
                fill 
                className="object-cover"
              />
          </div>

          {/* Text */}
          <div className="flex flex-col text-center lg:text-right">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] mb-8 tracking-tight">
              Workflow Integrations
            </h2>
            <div className="space-y-6 text-[15px] md:text-[17px] text-[#59636D] leading-[1.7]">
              <p>
                As the academic sector moves toward digital platforms, the opportunity exists to reimagine aspects of the writing workflow that are no longer necessary or that are left empty due to the removal of an internal administrative bottleneck. For instance, with the removal of conventional manual referencing at the front of the workflow and the placement of automated data hubs beneath or at the rear of the delivery, the entire structure of the publication process becomes an option for functional integrations. OYEN GROUP has worked with institutions to reimagine academic workflows to offer higher capacity as well as improve methodological rigor.
              </p>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
