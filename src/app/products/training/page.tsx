import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Training & Programme Management | OYEN GROUP',
  description: 'Enterprise-grade training and learning programme management.',
};

export default function TrainingPage() {
  return (
    <div className="bg-white min-h-screen pb-0">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="mb-6 flex items-center text-sm font-['Inter',sans-serif] text-[#59636D]">
          <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#D5A547] transition-colors">Solutions</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111719] font-medium">Training & Programme Management</span>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl md:rounded-[32px] overflow-hidden">
          <Image 
            src="/images/tech.jpg" 
            alt="Training & Programme Management" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 lg:left-24 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-4 leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Training & Programme Management
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-['Inter',sans-serif] max-w-2xl leading-relaxed">
              Enterprise-grade structured training and learning programme delivery.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CENTERED TEXT INTRO */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-8 text-[19px] md:text-[21px] text-[#59636D] font-['Inter',sans-serif] leading-[1.6]">
          <p className="text-[#111719] font-medium">
            Our Training & Programme Management solution is designed for global organisations to run structured training and learning programmes efficiently. It acts as a central operational framework for programme design, participant management, and delivery.
          </p>
          <p>
            By structuring training programmes in one connected environment, we help coordinate learning activities and manage programme delivery from start to finish, ensuring consistency and quality at an enterprise scale.
          </p>
          <p>
            We offer comprehensive support for facilitator assignments, curriculum coordination, and on-site delivery, empowering enterprise administrators with full visibility over their training operations.
          </p>
        </div>
      </section>

      {/* 3. CENTERED TITLE & TEXT */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto text-center">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-12">
          Participant Management
        </h2>
        <div className="text-[17px] md:text-[19px] text-[#59636D] font-['Inter',sans-serif] leading-[1.6] text-left mx-auto max-w-3xl space-y-6">
          <p>
            Organise participant information and maintain visibility across all regional training activities. We simplify the onboarding process and track learner engagement throughout the lifecycle of the entire programme.
          </p>
          <p>
            Maintain detailed records of attendance and monitor participant progress throughout the operational delivery, ensuring that enterprise learning objectives are met effectively.
          </p>
        </div>
      </section>

      {/* 4. SPLIT SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
            <Image src="/images/energy.jpg" alt="Facilitator Coordination" fill className="object-cover" />
          </div>
          <div className="flex flex-col pt-8">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-8">
              Facilitator Coordination
            </h2>
            <div className="space-y-6 text-[19px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
              <p>
                Support facilitator assignments, programme coordination and training delivery through a streamlined infrastructure that connects educators with enterprise learners seamlessly.
              </p>
              <p>
                Our services enable precise scheduling, resource allocation, and communication channels that keep facilitators aligned with corporate programme goals and participant needs.
              </p>
              <p>
                By streamlining routine administrative tasks, facilitators can focus on what matters most—delivering high-quality education and driving participant success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPLIT 50/50 TEXT ONLY */}
      <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">
              The role of technology
            </h2>
          </div>
          <div className="space-y-6 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
            <p>
              Technology is at the core of <Link href="/products/oyen-grid" className="text-[#007079] hover:underline">modern education infrastructure</Link>. We leverage enterprise cloud capabilities to provide a scalable, secure, and accessible learning environment for all corporate participants.
            </p>
            <p>
              We continuously integrate the latest advancements in data analytics and user experience design, ensuring that our training delivery meets the evolving demands of educational institutions and corporate departments.
            </p>
          </div>
        </div>
      </section>

      {/* 6. DASHBOARD / MAP SECTION */}
      <section className="bg-[#F8F9FA] py-20 md:py-32">
        <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto text-center">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-16">
            Programme operations tracking
          </h2>
          <div className="relative w-full max-w-[1200px] mx-auto aspect-[16/9] md:aspect-[21/9] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex items-center justify-center">
            {/* Using a placeholder image for the dashboard map */}
            <Image src="/images/hero-slide1.jpg" alt="Dashboard" fill className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
            <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg flex items-center gap-4">
               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
               <span className="font-bold text-[#111719] font-['Inter',sans-serif]">Global Training Hub Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DARK SPLIT BLOCKS (Bottom) */}
      <section className="bg-white">
        {/* Block 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative w-full h-[400px] lg:h-auto">
            <Image src="/images/partnership.jpg" alt="Unconventional resources" fill className="object-cover" />
          </div>
          <div className="bg-[#2B2B2B] p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              Advanced analytics
            </h2>
            <p className="text-lg text-white/80 font-['Inter',sans-serif] mb-12 leading-relaxed">
              Gain insights into learning outcomes and programme performance. Our advanced reporting frameworks help you make data-driven decisions to improve your training delivery.
            </p>
            <Link href="/contact" className="text-white font-bold font-['Inter',sans-serif] flex items-center gap-2 hover:gap-3 transition-all text-lg w-fit">
              Find out more
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-white p-1">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#3D4042] p-12 lg:p-24 flex flex-col justify-center lg:order-2">
            <h2 className="text-3xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              Global deployment
            </h2>
            <p className="text-lg text-white/80 font-['Inter',sans-serif] mb-12 leading-relaxed">
              Deploy your training programmes globally with a framework built for scale. Support diverse learning environments and diverse participant groups simultaneously.
            </p>
            <Link href="/contact" className="text-white font-bold font-['Inter',sans-serif] flex items-center gap-2 hover:gap-3 transition-all text-lg w-fit">
              Find out more
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-white p-1">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="relative w-full h-[400px] lg:h-auto lg:order-1">
            <Image src="/images/tech.jpg" alt="Global business" fill className="object-cover" />
          </div>
        </div>
      </section>

    </div>
  );
}
