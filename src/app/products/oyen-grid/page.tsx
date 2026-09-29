import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Training & Programme Management | OYEN GROUP',
  description: 'OYEN GRID - Training and programme management platform.',
};

export default function OyenGridPage() {
  return (
    <main className="bg-white min-h-screen text-[#111719] font-['Inter',sans-serif]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col items-center justify-center text-center pt-20">
        <Image 
          src="/images/tech.jpg" 
          alt="Training & Programme Management" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Training & Programme Management
          </h1>
          <p className="text-sm md:text-base text-white/90 leading-relaxed font-['Inter',sans-serif] max-w-4xl mx-auto font-medium">
            OYEN GRID is a platform designed for organisations to run structured training and learning programmes efficiently. It acts as a central hub for programme design, participant management, and operational delivery.
          </p>
        </div>
      </section>

      {/* 2. SECTION 1 (Title & Text) */}
      <section className="py-20 md:py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6 tracking-tight">
          Programme Operations
        </h2>
        <p className="text-[#333333] text-sm md:text-[15px] leading-relaxed max-w-4xl mx-auto">
          By structuring training programmes in one connected environment, OYEN GRID helps coordinate learning activities and manage programme delivery from start to finish, ensuring consistency and quality at scale.
        </p>
      </section>

      {/* 3. 3-COLUMN GRID */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
              <Image src="/images/showcase/grid_ui.png" alt="Participant Management" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#D5A547] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Participant Management
            </h3>
            <p className="text-[13px] md:text-sm text-[#333333] leading-relaxed">
              Organise participant information and maintain visibility across training activities. OYEN GRID simplifies the onboarding process and tracks learner engagement throughout the lifecycle of the programme.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
              <Image src="/images/hero-slide1.jpg" alt="Facilitator Coordination" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#D5A547] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Facilitator Coordination
            </h3>
            <p className="text-[13px] md:text-sm text-[#333333] leading-relaxed">
              Support facilitator assignments, programme coordination and training delivery through a streamlined interface that connects educators with learners seamlessly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden">
              <Image src="/images/energy.jpg" alt="Advanced Analytics" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-[#D5A547] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Advanced Analytics
            </h3>
            <p className="text-[13px] md:text-sm text-[#333333] leading-relaxed">
              Gain insights into learning outcomes and programme performance. Our advanced reporting tools help you make data-driven decisions to improve your training delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SPLIT SECTION */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden">
            <Image src="/images/solutions_bg.jpg" alt="Global Deployment" fill className="object-cover" />
          </div>
          <div className="flex flex-col text-center md:text-left items-center md:items-start max-w-lg mx-auto md:mx-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6 tracking-tight">
              Global Deployment
            </h2>
            <p className="text-[#333333] text-sm md:text-[15px] leading-relaxed">
              Deploy your training programmes globally with a platform built for scale. Support diverse learning environments and diverse participant groups simultaneously. We continuously integrate the latest advancements in data analytics and user experience design, ensuring that our platforms meet the evolving demands of educational institutions and corporate training departments.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
