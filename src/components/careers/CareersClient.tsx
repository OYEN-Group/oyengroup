'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import ParallaxImage from '@/components/animations/ParallaxImage';

export default function CareersClient() {
  return (
    <div className="bg-brand-offwhite min-h-screen pb-32">
      
      {/* 1. HERO SECTION */}
      <section className="pt-24 md:pt-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="mb-6 flex items-center text-xs font-bold tracking-widest uppercase text-[#59636D]">
          <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
          <span className="mx-3">/</span>
          <span className="text-[#111719]">Careers</span>
        </div>

        <FadeUp delay={0.1}>
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl">
            <ParallaxImage 
              src="/images/hero-slide4.jpg" 
              alt="Careers at OYEN GROUP" 
              className="object-cover object-top w-full h-full"
              containerClassName="absolute inset-0 w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/10"></div>
            
            <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 lg:left-24 max-w-3xl z-10">
              <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold text-white mb-6 leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                Careers
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed mb-8">
                Explore opportunities to build, research, and innovate with us.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-[#D5A547] hover:bg-[#b58b3a] text-[#111719] tracking-widest uppercase text-sm rounded-sm font-bold transition-all">
                  Search open roles
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* 2. THREE-COLUMN INTRO */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-[17px] text-[#59636D] leading-relaxed font-['Inter',sans-serif]">
          <p>
            At OYEN GROUP, we are united by a shared drive to create solutions that matter. Whether you are in research, software engineering, or operations, your work here contributes directly to building a more capable Africa.
          </p>
          <p>
            We look for individuals who are curious, resilient, and passionate about solving complex problems. Our culture is built on practical innovation, where ideas are tested, refined, and deployed to make a real-world impact.
          </p>
          <p>
            Join a diverse team of thinkers and doers. We provide the resources, the environment, and the autonomy you need to do the best work of your career.
          </p>
        </div>
      </section>

      {/* 3. OPPORTUNITIES FOR ALL */}
      <section className="bg-[#F8F9FA] py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-12">
            Opportunities for all
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Professionals", desc: "Bring your expertise to our growing teams across technology, research, and industry.", img: "/images/partnership.jpg", comingSoon: true },
              { title: "Graduates & Interns", desc: "Start your career with hands-on experience on projects that shape the future.", img: "/images/hero-slide2.jpg", comingSoon: true },
              { title: "Researchers", desc: "Push the boundaries of applied knowledge in our dedicated research labs.", img: "/images/tech.jpg", comingSoon: true }
            ].map((card, idx) => (
              <div key={idx} className={`flex flex-col group ${card.comingSoon ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'}`}>
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                  <Image 
                    src={card.img} 
                    alt={card.title} 
                    fill 
                    className={`object-cover transition-transform duration-700 ${card.comingSoon ? 'blur-sm scale-105' : 'group-hover:scale-105'}`} 
                  />
                  {card.comingSoon && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                      <div className="bg-[#D5A547] text-[#09251F] px-4 py-2 rounded-sm font-bold uppercase tracking-widest text-xs shadow-xl">
                        Coming Soon
                      </div>
                    </div>
                  )}
                </div>
                <h3 className={`text-[#111719] text-[22px] font-bold mb-3 font-['Plus_Jakarta_Sans',sans-serif] transition-colors ${!card.comingSoon && 'group-hover:text-[#D5A547]'}`}>
                  {card.title}
                </h3>
                <p className="text-[#59636D] text-[17px] font-['Inter',sans-serif] mb-6 leading-relaxed">
                  {card.desc}
                </p>
                {!card.comingSoon && (
                  <span className="text-[#D5A547] font-bold font-['Inter',sans-serif] flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Learn more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. A GREAT PLACE TO WORK */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">
            A great place to work
          </h2>
          <span className="text-[#D5A547] font-bold font-['Inter',sans-serif] flex items-center gap-2 cursor-pointer hover:gap-3 transition-all hidden md:flex">
            Employer awards
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-[#D5A547] p-1">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>

        {/* Rating Banner */}
        <div className="w-full bg-[#09251F] rounded-2xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left mb-24">
          <div className="flex gap-2">
            {[1,2,3,4,5].map((star) => (
              <svg key={star} className="w-10 h-10 text-[#D5A547]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="border-l border-white/20 pl-0 md:pl-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
              "A culture of excellence and innovation."
            </h3>
            <p className="text-white/70 font-['Inter',sans-serif]">Top Technology Workplaces 2026</p>
          </div>
        </div>

        {/* Testimonials */}
        <h4 className="text-[#111719] font-bold mb-12 font-['Plus_Jakarta_Sans',sans-serif] text-xl">Testimonials</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            {
              quote: "OYEN gives you the freedom to build things that actually matter. The scale of the problems we solve here is incredible.",
              name: "Sarah Adebayo",
              title: "Lead Engineer",
              img: "/images/partnership.jpg" // placeholder
            },
            {
              quote: "Moving from academia to OYEN was the best decision. Here, our research is immediately applied to industrial challenges.",
              name: "Dr. Emmanuel Okon",
              title: "Senior Researcher",
              img: "/images/partnership.jpg"
            },
            {
              quote: "The environment is intensely collaborative. You are constantly learning from experts across completely different domains.",
              name: "Amira Hassan",
              title: "Product Manager",
              img: "/images/partnership.jpg"
            }
          ].map((test, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 relative border-4 border-gray-100">
                <Image src={test.img} alt={test.name} fill className="object-cover" />
              </div>
              <p className="text-[17px] text-[#59636D] leading-relaxed font-['Inter',sans-serif] mb-6 italic">
                "{test.quote}"
              </p>
              <h5 className="text-[#111719] font-bold font-['Plus_Jakarta_Sans',sans-serif]">{test.name}</h5>
              <span className="text-sm text-[#59636D]">{test.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. A DIVERSE WORKPLACE */}
      <section className="bg-[#09251F] py-20 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-[40px] font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] mb-12">
            A diverse workplace
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Diversity and inclusion", desc: "We build better solutions when we bring different perspectives together.", img: "/images/hero-slide1.jpg" },
              { title: "Continuous learning", desc: "Access to resources and mentorship to keep you growing.", img: "/images/oyen_grid.jpg" },
              { title: "Global standards", desc: "Operating with international benchmarks in everything we do.", img: "/images/energy.jpg" }
            ].map((card, idx) => (
              <div key={idx} className="flex flex-col group cursor-pointer">
                <div className="relative w-full aspect-[16/10] overflow-hidden mb-6 rounded-md">
                  <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="text-white text-[22px] font-bold mb-3 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#D5A547] transition-colors">
                  {card.title}
                </h3>
                <p className="text-white/70 text-[17px] font-['Inter',sans-serif] mb-6 leading-relaxed">
                  {card.desc}
                </p>
                <span className="text-[#D5A547] font-bold font-['Inter',sans-serif] flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STORIES ABOUT OUR PEOPLE */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-b border-gray-100">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">
            Stories about our people
          </h2>
          <span className="text-[#D5A547] font-bold font-['Inter',sans-serif] flex items-center gap-2 cursor-pointer hover:gap-3 transition-all hidden md:flex">
            View all stories
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rounded-full border-2 border-[#D5A547] p-1">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "Engineering", title: "Building the next generation of grids.", img: "/images/hero-slide2.jpg" },
            { tag: "Research", title: "How academic rigor meets industry.", img: "/images/tech.jpg" },
            { tag: "Leadership", title: "Guiding teams through complex problems.", img: "/images/partnership.jpg" },
            { tag: "Culture", title: "Why autonomy matters in innovation.", img: "/images/hero-slide4.jpg" }
          ].map((story, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image src={story.img} alt={story.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white">
                <span className="text-xs font-bold text-[#59636D] uppercase tracking-wider mb-2 font-['Inter',sans-serif]">{story.tag}</span>
                <h3 className="text-[#111719] font-bold font-['Plus_Jakarta_Sans',sans-serif] leading-snug group-hover:text-[#D5A547] transition-colors">
                  {story.title}
                </h3>
                <div className="mt-auto pt-6 flex justify-end">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D5A547]" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <path d="M12 8v8M8 12h8"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ABOUT US BANNER */}
      <section className="relative w-full h-[300px] mt-16">
        <Image src="/images/hero-slide1.jpg" alt="About us" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col">
          <h2 className="text-3xl md:text-[40px] font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] mb-4">
            About us
          </h2>
          <Link href="/about" className="text-white hover:text-[#D5A547] transition-colors font-medium font-['Inter',sans-serif] flex items-center gap-2">
            Explore our company structure
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
}
