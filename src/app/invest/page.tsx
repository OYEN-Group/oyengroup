'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function InvestmentOpportunityPage() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('investor-form');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white min-h-screen pt-28 font-['Inter',sans-serif]">
      
      {/* 01 — HERO */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-24">
        <div className="relative w-full h-[600px] md:h-[700px] rounded-[24px] overflow-hidden shadow-2xl">
          <Image 
            quality={100} 
            src="/images/hero-slide4.jpg" 
            alt="Invest in OYEN GROUP" 
            fill 
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09251F]/95 via-[#09251F]/70 to-black/20"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center p-10 lg:p-16">
            <div className="max-w-3xl mt-auto lg:mt-0">
              <h1 className="text-5xl md:text-6xl lg:text-[76px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.05]">
                INVEST IN WHAT<br />COMES NEXT.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide leading-relaxed mb-12 max-w-2xl">
                Partner with OYEN as we turn technology, research and ideas into practical solutions built for Africa and beyond.
              </p>
              
              <a 
                href="#investor-form"
                onClick={scrollToForm}
                className="inline-flex items-center text-[#111719] bg-[#D5A547] hover:bg-white px-8 py-4 rounded-sm font-semibold tracking-widest uppercase text-sm transition-colors duration-300"
              >
                Explore the Opportunity <span className="ml-3">⟶</span>
              </a>
            </div>

            {/* Sub-bar */}
            <div className="absolute bottom-10 left-10 lg:left-16 right-10 flex flex-wrap items-center gap-6 md:gap-12 text-sm md:text-base text-white/80 font-bold tracking-widest uppercase border-t border-white/20 pt-6 font-['Plus_Jakarta_Sans',sans-serif]">
              <div>CURRENT ROUND <span className="text-white ml-2">₦8.5M</span></div>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <div>EQUITY <span className="text-white ml-2">10%</span></div>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <div>PARTICIPATION <span className="text-white ml-2">FROM ₦500K</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* 02 — THE OPPORTUNITY */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h4 className="text-[#D5A547] font-bold tracking-widest text-sm uppercase mb-4 font-['Plus_Jakarta_Sans',sans-serif]">The Opportunity</h4>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Three products. One larger ambition.
            </h2>
            <p className="text-xl text-[#59636D] font-light leading-relaxed max-w-3xl">
              OYEN GROUP is developing a portfolio of technology products addressing learning, communication and operational intelligence.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {[
              { name: 'OYEN GRID', desc: 'Enterprise learning & programme operations.' },
              { name: 'VERBA', desc: 'Language, research & communication technology.' },
              { name: 'ORIVEX', desc: 'Operational intelligence & decision support.' }
            ].map((prod, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between group hover:shadow-md transition-shadow">
                <div>
                  <h3 className="text-2xl font-bold text-[#09251F] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">{prod.name}</h3>
                  <p className="text-[#59636D] font-light">{prod.desc}</p>
                </div>
                <div className="mt-4 md:mt-0 text-[#007079] font-bold text-sm tracking-widest uppercase flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
                  Explore <span className="ml-2">⟶</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — WHY NOW */}
      <section className="py-32 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111719] mb-16 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-tight">
          We've built the foundation.<br />The next stage is execution.
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-lg font-bold text-[#09251F] tracking-widest uppercase mb-16 font-['Plus_Jakarta_Sans',sans-serif]">
          <span>Development</span>
          <span className="text-[#D5A547]">→</span>
          <span>Validation</span>
          <span className="text-[#D5A547]">→</span>
          <span>Market Entry</span>
          <span className="text-[#D5A547]">→</span>
          <span className="text-gray-400">Scale</span>
        </div>
        
        <p className="text-xl md:text-2xl text-[#59636D] font-light leading-relaxed max-w-4xl mx-auto">
          The current round is designed to move OYEN's products through the next critical stage of development and real-world validation.
        </p>
      </section>

      {/* 04 — THE ROUND */}
      <section className="bg-[#09251F] py-32 text-center text-white px-6">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Investment Opportunity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-8 md:pt-0 flex flex-col items-center justify-center">
              <div className="text-6xl md:text-7xl font-bold text-[#D5A547] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">₦8.5M</div>
              <div className="text-white/70 uppercase tracking-widest text-sm font-bold">Current capital raise</div>
            </div>
            <div className="pt-8 md:pt-0 flex flex-col items-center justify-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans',sans-serif]">10%</div>
              <div className="text-white/70 uppercase tracking-widest text-sm font-bold">Equity offered</div>
            </div>
            <div className="pt-8 md:pt-0 flex flex-col items-center justify-center">
              <div className="text-6xl md:text-7xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans',sans-serif]">₦500K</div>
              <div className="text-white/70 uppercase tracking-widest text-sm font-bold">Starting participation</div>
            </div>
          </div>

          <a 
            href="#investor-form"
            onClick={scrollToForm}
            className="inline-flex items-center text-white border border-white/30 hover:bg-white hover:text-[#09251F] px-8 py-4 rounded-sm font-semibold tracking-widest uppercase text-sm transition-colors duration-300"
          >
            View Investment Details <span className="ml-3">⟶</span>
          </a>
        </div>
      </section>

      {/* 05 — WHERE THE CAPITAL GOES */}
      <section className="py-32 max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-[#111719] mb-16 uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">
          Where the Capital Goes
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 mb-20 text-left md:text-center font-['Plus_Jakarta_Sans',sans-serif]">
          {[
            '01 PRODUCT DEVELOPMENT',
            '02 INFRASTRUCTURE & SECURITY',
            '03 PILOT & VALIDATION',
            '04 GO-TO-MARKET',
            '05 OPERATIONS & LEGAL'
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-start md:items-center">
              <div className="w-full h-1 bg-[#09251F] mb-6"></div>
              <div className="text-sm font-bold text-[#111719] tracking-widest uppercase w-full md:w-3/4">
                {item.replace(/^[0-9]+ /, '')}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-3xl md:text-4xl text-[#007079] font-light leading-relaxed">
          Focused capital. Clear execution.
        </p>
      </section>

      {/* 06 — WHAT COMES NEXT */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        <Image 
          src="/images/tech.jpg" 
          alt="Execution" 
          fill 
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#09251F]/80"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            From capital to execution.
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm font-bold text-white tracking-widest uppercase">
            <span>Capital</span>
            <span className="text-[#D5A547]">→</span>
            <span>Product Completion</span>
            <span className="text-[#D5A547]">→</span>
            <span>Pilot</span>
            <span className="text-[#D5A547]">→</span>
            <span>Market Entry</span>
            <span className="text-[#D5A547]">→</span>
            <span>Growth</span>
          </div>
        </div>
      </section>

      {/* 07 — INVESTOR ACCESS */}
      <section id="investor-form" className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Interested in exploring OYEN?
            </h2>
            <p className="text-lg md:text-xl text-[#59636D] font-light">
              Request access to detailed investment information and speak directly with our team.
            </p>
          </div>

          <form className="bg-white p-8 md:p-12 rounded-[24px] shadow-lg border border-gray-100 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-[#59636D]">Name</label>
                <input type="text" className="border-b border-gray-300 py-3 focus:outline-none focus:border-[#D5A547] bg-transparent text-[#111719]" placeholder="Your full name" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-[#59636D]">Email</label>
                <input type="email" className="border-b border-gray-300 py-3 focus:outline-none focus:border-[#D5A547] bg-transparent text-[#111719]" placeholder="Your business email" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-[#59636D]">Phone / WhatsApp</label>
                <input type="tel" className="border-b border-gray-300 py-3 focus:outline-none focus:border-[#D5A547] bg-transparent text-[#111719]" placeholder="With country code" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-[#59636D]">Investment Range</label>
                <select className="border-b border-gray-300 py-3 focus:outline-none focus:border-[#D5A547] bg-transparent text-[#111719] appearance-none" required>
                  <option value="" disabled selected>Select an option</option>
                  <option value="500k-1m">₦500K – ₦1M</option>
                  <option value="1m-2.5m">₦1M – ₦2.5M</option>
                  <option value="2.5m-5m">₦2.5M – ₦5M</option>
                  <option value="5m+">₦5M+</option>
                </select>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 mt-4 leading-relaxed font-['Inter',sans-serif]">
              * By requesting information, you acknowledge this is a private offering and confirm you meet the necessary regulatory criteria to explore private equity investments in this jurisdiction. Our team will contact you to provide the detailed investment prospectus and formal documentation.
            </p>

            <button 
              type="submit"
              className="mt-6 w-full text-center bg-[#09251F] text-white hover:bg-[#D5A547] py-5 rounded-sm font-bold tracking-widest uppercase text-sm transition-colors duration-300"
            >
              Request Investor Information <span className="ml-3">⟶</span>
            </button>
          </form>
        </div>
      </section>

      {/* 08 — FINAL SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px]">
        <Image 
          src="/images/hero-slide1.jpg" 
          alt="Execution Creates Value" 
          fill 
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09251F]/90 to-black/40"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 pb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Capital is only the beginning.<br />Execution creates value.
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-light mb-12 max-w-2xl">
            Join us as we build practical technology for Africa and beyond.
          </p>
          
          <Link href="/contact" className="inline-flex items-center text-[#09251F] bg-[#D5A547] hover:bg-white px-10 py-5 rounded-full font-bold tracking-widest uppercase text-sm transition-colors duration-300 group shadow-lg">
            Start a Conversation <span className="ml-3 bg-black/10 rounded-full p-1 transition-colors">⟶</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
