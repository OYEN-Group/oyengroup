import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Training & Programme Management | OYEN GROUP',
  description: 'Enterprise-grade training and learning programme management.',
};

export default function TrainingPage() {
  return (
    <div className="bg-white min-h-screen pb-0 font-['Inter',sans-serif]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px]">
        <Image 
          src="/images/tech.jpg" 
          alt="Training & Programme Management" 
          fill 
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl">
            Training & Programme Management
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-4xl leading-relaxed font-medium">
            As global organisations transition to advanced digital workflows, we are prepared to deliver structured training tailored to meet the needs of modern enterprises. By coordinating learning activities and adding robust programme design, OYEN GROUP offers enterprise solutions that offer a better way forward.
          </p>
        </div>
      </section>

      {/* 2. CENTERED INTRO SECTION */}
      <section className="py-20 md:py-28 px-6 lg:px-12 max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] mb-8 tracking-tight">
          Operational Efficiency
        </h2>
        <p className="text-[17px] md:text-[19px] text-[#59636D] leading-[1.7] max-w-5xl mx-auto">
          At the forefront of the push for digital transformation is the need for efficient programme management through structured components of the organisation. Reducing the administrative burden of training delivery yields immediate results. In either reduced coordination requirements for an equivalent learning outcome or an extended curriculum with the same sized team, our solutions offer massive savings for corporate training structures, learning hubs, and other educational components to lower overhead potential for an overall improved lifecycle analysis.
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
                alt="Programme Design" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#b48e4b] mb-4">Programme Design</h3>
            <p className="text-[15px] text-[#59636D] leading-[1.6]">
              Our robust learning infrastructure provides equivalent structural integrity with more than 50 percent administrative reduction over legacy frameworks and more than 30 percent efficiency gain over standard systems using scalable, integrated and connected platforms.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-100">
              <Image 
                src="/images/energy.jpg" 
                alt="Participant Tracking" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#b48e4b] mb-4">Participant Tracking</h3>
            <p className="text-[15px] text-[#59636D] leading-[1.6]">
              Our proprietary participant coordination process for enterprise learning components adds a structural framework applied to the system. Once activated, the tracking agent creates a stronger dataset up to 30 percent lighter than conventional legacy recorded components.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-100">
              <Image 
                src="/images/partnership.jpg" 
                alt="Facilitator Hub" 
                fill 
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#b48e4b] mb-4">Facilitator Hub</h3>
            <p className="text-[15px] text-[#59636D] leading-[1.6]">
              Our coordination hub combines complex scheduling and resource allocation into a single process, eliminating secondary procedures. Through the use of connected platforms, facilitator coordination can contribute to more effective corporate training delivery, as well as reduce costs up to 40 percent when compared to manual coordination.
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
                alt="Functional Integrations" 
                fill 
                className="object-cover"
              />
          </div>

          {/* Text */}
          <div className="flex flex-col text-center lg:text-right">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] mb-8 tracking-tight">
              Functional Integrations
            </h2>
            <div className="space-y-6 text-[15px] md:text-[17px] text-[#59636D] leading-[1.7]">
              <p>
                As the industry moves toward digital platforms, the opportunity exists to reimagine aspects of the training workflow that are no longer necessary or that are left empty due to the removal of an internal administrative bottleneck. For instance, with the removal of a conventional tracking spreadsheet at the front of the workflow and the placement of digital hubs beneath or at the rear of the delivery, the area beneath the hood of the programme then becomes an option for functional integrations. OYEN GROUP has worked with OEMs to reimagine the corporate learning hub to offer additional tracking space as well as improve functionality.
              </p>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
