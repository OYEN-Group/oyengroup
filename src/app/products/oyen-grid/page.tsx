import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'OYEN GRID | OYEN GROUP',
  description: 'Enterprise Learning Platform.',
};

export default function OyenGridPage() {
  return (
    <div className="bg-white min-h-screen pb-0 font-['Inter',sans-serif]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="mb-6 flex items-center text-sm text-[#59636D]">
          <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#D5A547] transition-colors">Technology</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111719] font-medium">OYEN GRID</span>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl md:rounded-[32px] overflow-hidden">
          <Image 
            src="/images/tech.jpg" 
            alt="OYEN GRID Platform" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 lg:left-24 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-4 leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              OYEN GRID
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Enterprise learning operations and platform delivery excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CENTERED TEXT INTRO */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-8 text-[17px] md:text-[19px] text-[#59636D] leading-[1.7]">
          <p className="text-[#111719] font-medium text-[19px] md:text-[21px]">
            OYEN GRID is our proprietary enterprise platform designed to modernise learning operations. It acts as the digital backbone for structuring programmes across regional and global operations, supplying administrative teams with the leading tools they require to scale their business.
          </p>
          <p>
            By centralising operations into one unified environment, we help coordinate learning activities and manage programme delivery from start to finish, ensuring consistency and quality at an enterprise scale.
          </p>
          <p>
            We offer comprehensive support for facilitator assignments, curriculum coordination, and on-site delivery, empowering enterprise administrators with full visibility over their operations. We continuously optimise our platform to meet expanding corporate demands while looking toward the future.
          </p>
        </div>
      </section>

      {/* 3. COLORED FEATURE BOX (The "grades" equivalent) */}
      <section className="py-12 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="bg-[#8BA832] rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] mb-16">
            Platform Capabilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { title: 'Programme Design', desc: 'Curriculum structuring' },
              { title: 'Participant Tracking', desc: 'Engagement metrics' },
              { title: 'Facilitator Hub', desc: 'Resource allocation' },
              { title: 'Progress Analytics', desc: 'Performance records' },
              { title: 'Global Deployment', desc: 'Scalable infrastructure' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full"></div>
                </div>
                <h3 className="text-white font-bold text-sm md:text-base mb-2">{item.title}</h3>
                <p className="text-white/80 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-left">
            <Link href="/contact" className="text-white hover:underline text-sm font-medium">
              Read more about our tools +
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SPLIT 50/50 TEXT ONLY */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-[15px] md:text-[17px] text-[#59636D] leading-[1.7]">
          <div>
            <p>
              We maintain detailed records of attendance and monitor participant progress throughout the operational delivery, ensuring that enterprise learning objectives are met effectively. By streamlining routine administrative tasks, facilitators can focus on what matters most.
            </p>
          </div>
          <div>
            <p>
              Technology is at the core of modern education infrastructure. We leverage enterprise cloud capabilities to provide a scalable, secure, and accessible learning environment for all corporate participants, pushing the boundaries of what enterprise platforms can achieve.
            </p>
          </div>
        </div>
      </section>

      {/* 5. DASHBOARD / MAP SECTION */}
      <section className="bg-[#F8F9FA] py-20 md:py-32">
        <div className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto text-center">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-16">
            Global Operations Dashboard
          </h2>
          <div className="relative w-full max-w-[1200px] mx-auto aspect-[16/9] md:aspect-[21/9] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex items-center justify-center p-4">
            <Image src="/images/hero-slide1.jpg" alt="Operations Dashboard" fill className="object-cover opacity-50" />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
            
            {/* Mock Dashboard UI */}
            <div className="relative z-10 w-full h-full bg-white/90 rounded-xl shadow-sm border border-gray-100 flex p-6">
               <div className="w-64 border-r border-gray-200 pr-6 hidden md:block text-left">
                  <h3 className="font-bold text-gray-800 mb-4">Category</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                     <div className="flex items-center gap-2 text-[#007079] font-medium"><div className="w-2 h-2 rounded-full bg-[#007079]"></div> Hubs</div>
                     <div>Regions</div>
                     <div>Active Sessions</div>
                     <div>Metrics</div>
                  </div>
               </div>
               <div className="flex-1 relative">
                  {/* Mock Map Dots */}
                  <div className="absolute top-[40%] left-[45%] w-4 h-4 bg-[#007079] rounded-full border-4 border-white shadow-md"></div>
                  <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-[#007079] rounded-full border-2 border-white shadow-md"></div>
                  <div className="absolute top-[60%] left-[70%] w-3 h-3 bg-[#007079] rounded-full border-2 border-white shadow-md"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SPLIT IMAGE/TEXT BLOCK (The Story) */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden">
            <Image src="/images/energy.jpg" alt="The OYEN GRID Story" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              The Platform Story
            </h2>
            <p className="text-[#59636D] leading-[1.7] mb-8">
              Developed in-house to solve complex organisational challenges, OYEN GRID has grown into a mature, sophisticated ecosystem. From managing small cohorts to orchestrating global learning deployments for enterprise clients, the platform ensures seamless tracking and high reliability.
            </p>
            <Link href="/about" className="text-[#007079] font-medium flex items-center gap-2 hover:underline">
              Read more
              <div className="w-8 h-8 rounded-full border border-[#007079] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. DARK SPLIT BLOCK (Bottom) */}
      <section className="bg-[#4D5358]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-24 xl:p-32 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] mb-6 leading-tight">
              The scale of OYEN GRID deployments
            </h2>
            <p className="text-lg text-white/80 mb-12">
              Launch enterprise-level structures effortlessly.
            </p>
            <Link href="/contact" className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit">
              Explore the potential of our operations
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center ml-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </div>
          <div className="relative w-full h-[400px] lg:h-auto">
            <Image src="/images/partnership.jpg" alt="Enterprise scale" fill className="object-cover" />
          </div>
        </div>
      </section>

    </div>
  );
}
