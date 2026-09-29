import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Leadership | OYEN GROUP',
  description: 'The executive team and board guiding OYEN GROUP.',
};

const leaders = [
  { name: 'Rufus Edesiri Ejukonemu', role: 'Co-Founder, CEO', img: '/images/rufus.jpg' },
  { name: 'OYEWOLE, James Mayowa', role: 'Founder & CTO', img: '/images/james.jpg' },
  { name: 'Sarah Adebayo', role: 'Director of Operations', img: '/images/partnership.jpg' },
  { name: 'Dr. Emmanuel Okon', role: 'Head of Research', img: '/images/partnership.jpg' },
  { name: 'Amira Hassan', role: 'VP Corporate Strategy', img: '/images/partnership.jpg' },
  { name: 'Daniel Chima', role: 'Head of Engineering', img: '/images/partnership.jpg' },
];

export default function LeadershipPage() {
  return (
    <div className="bg-white min-h-screen pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="mb-6 flex items-center text-sm font-['Inter',sans-serif] text-[#59636D]">
          <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/about" className="hover:text-[#D5A547] transition-colors">About OYEN</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111719] font-medium">Leadership</span>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl md:rounded-[32px] overflow-hidden">
          <Image 
            src="/images/hero-slide1.jpg" 
            alt="Our leadership" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 lg:left-24 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Our leadership
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-['Inter',sans-serif] max-w-2xl leading-relaxed">
              Our leaders bring a wealth of diversified experience from across the technological, academic and business landscape.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CENTERED TEXT INTRO */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto text-center">
        <div className="flex flex-col gap-8 text-[19px] md:text-[21px] text-[#59636D] font-['Inter',sans-serif] leading-[1.6]">
          <p className="text-[#111719] font-medium">
            OYEN GROUP is a diversified technology and research group. The people guiding our organization share a commitment to operational excellence, rigorous research, and practical innovation.
          </p>
          <p>
            At the heart of our strategy is our executive management team, who oversee our business units, shape our long-term vision, and ensure that our products deliver measurable impact across the sectors we serve.
          </p>
          <p>
            The board of directors is drawn from leaders in academia, industry, and corporate governance. Their combined expertise provides strong oversight and strategic direction, helping the group navigate complex markets and deliver sustainable growth.
          </p>
        </div>
      </section>

      {/* 3. CORPORATE MANAGEMENT TEAM */}
      <section className="bg-[#F8F9FA] py-20 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              Our Corporate Management team
            </h2>
            <p className="text-[19px] text-[#59636D] font-['Inter',sans-serif]">
              Our executive management team is responsible for driving the strategy and operations of the group. The team is made up of seasoned professionals with deep expertise in their respective fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => {
              const isBlurred = idx > 1; // Blur everyone except Founder & Co-Founder
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
                  <div className="relative w-full h-48 md:h-56 mb-6 overflow-hidden rounded-xl bg-gray-100">
                    <Image 
                      src={leader.img} 
                      alt={leader.name} 
                      fill 
                      className={`object-cover object-top ${isBlurred ? 'blur-md' : ''}`} 
                    />
                  </div>
                  <h3 className={`text-xl font-bold text-[#111719] mb-2 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#D5A547] transition-colors ${isBlurred ? 'blur-[6px] select-none' : ''}`}>
                    {leader.name}
                  </h3>
                  <p className="text-[#59636D] text-[15px] font-medium uppercase tracking-wider mb-6 font-['Inter',sans-serif]">
                    {leader.role}
                  </p>
                  <span className="text-[#D5A547] font-bold font-['Inter',sans-serif] flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Read more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR BOARD OF DIRECTORS */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden">
            <Image src="/images/board_of_directors.jpg" alt="Our board of directors" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              Our board of directors
            </h2>
            <p className="text-[19px] text-[#59636D] font-['Inter',sans-serif] mb-8 leading-relaxed">
              Our Board of Directors oversees the strategic direction and management of the company. Their collective experience ensures rigorous oversight and robust governance structures.
            </p>
            <Link href="#" className="text-[#D5A547] font-bold font-['Inter',sans-serif] flex items-center gap-2 hover:gap-3 transition-all text-lg">
              Find out more
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-[#D5A547] p-1">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. RELATED NEWS */}
      <section className="bg-[#F8F9FA] py-20 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">
              Related news
            </h2>
            <span className="text-[#D5A547] font-bold font-['Inter',sans-serif] flex items-center gap-2 cursor-pointer hover:gap-3 transition-all hidden md:flex">
              Read all news
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-[#D5A547] p-1">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow cursor-pointer min-h-[300px]">
                <span className="text-xs font-bold text-[#59636D] uppercase tracking-wider mb-2 font-['Inter',sans-serif]">Press release</span>
                <p className="text-sm text-[#59636D] mb-4">May 14, 2026</p>
                <h3 className="text-[#111719] font-bold font-['Plus_Jakarta_Sans',sans-serif] text-lg leading-snug hover:text-[#D5A547] transition-colors blur-[6px] select-none">
                  OYEN GROUP announces new strategic partnership for technical skills development.
                </h3>
                <div className="mt-auto pt-6 flex justify-end">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D5A547]" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <path d="M12 8v8M8 12h8"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR VALUES (Split Section) */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              Our values
            </h2>
            <p className="text-[19px] text-[#59636D] font-['Inter',sans-serif] mb-8 leading-relaxed">
              Our values define how we work, how we interact with our partners, and the impact we strive to create.
            </p>
            <Link href="/about" className="text-[#D5A547] font-bold font-['Inter',sans-serif] flex items-center gap-2 hover:gap-3 transition-all text-lg w-fit">
              Explore our values
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-[#D5A547] p-1">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
            <Image src="/images/tech.jpg" alt="Our values" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 7. BOTTOM BANNER */}
      <section className="relative w-full h-[300px] mt-16">
        <Image src="/images/hero-slide2.jpg" alt="Our governance" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col">
          <h2 className="text-3xl md:text-[40px] font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] mb-4">
            Our governance
          </h2>
          <Link href="/about/governance" className="text-white hover:text-[#D5A547] transition-colors font-medium font-['Inter',sans-serif] flex items-center gap-2">
            Read more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
