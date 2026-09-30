'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HowToInvestPage() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen pt-32 pb-0 font-['Inter',sans-serif]">
      
      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-20">
        <div className="flex items-center text-sm font-['Inter',sans-serif] text-[#59636D] mb-8">
          <Link href="/invest" className="hover:text-[#D5A547] transition-colors">Investment</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111719] font-medium">How to Invest</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-[#111719] max-w-4xl font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1] mb-8">
          A Clear Path to Becoming an OYEN Investor.
        </h1>
        
        {/* Current Opportunity Strip */}
        <div className="inline-flex flex-wrap items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase text-[#59636D] bg-white border border-gray-200 py-3 px-6 rounded-full shadow-sm">
          <span className="text-[#09251F]">CURRENT OPPORTUNITY</span>
          <span className="text-gray-300">|</span>
          <span>Starting participation ₦500K</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span className="hidden md:inline">Current raise ₦8.5M</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span className="hidden md:inline">Equity offered 10%</span>
          
          <Link href="/invest/opportunity" className="ml-2 text-[#007079] hover:text-[#D5A547] transition-colors flex items-center">
            View Investment Opportunity <span className="ml-1">→</span>
          </Link>
        </div>
      </div>

      {/* STAGES */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-24">
        <div className="relative">
          {/* Connected Progress Line */}
          <div className="absolute top-8 left-0 w-full h-[2px] bg-gray-200 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {[
              { id: '01', title: 'Express Interest', desc: 'Tell us the level of participation you\'re considering.' },
              { id: '02', title: 'Investor Discussion', desc: 'Meet with OYEN to discuss the opportunity and terms.' },
              { id: '03', title: 'Review & Documentation', desc: 'Review relevant information and complete required documentation.' },
              { id: '04', title: 'Complete Investment', desc: 'Execute agreed documents through the designated company channel.' }
            ].map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-xl font-bold text-[#09251F] mb-6 font-['Plus_Jakarta_Sans',sans-serif] group-hover:border-[#D5A547] group-hover:bg-[#D5A547] group-hover:text-white transition-colors duration-500 shadow-sm z-10">
                  {stage.id}
                </div>
                <h3 className="text-lg font-bold text-[#111719] tracking-widest uppercase font-['Plus_Jakarta_Sans',sans-serif] mb-3">{stage.title}</h3>
                <p className="text-[#59636D] font-light text-sm leading-relaxed max-w-[250px]">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POST INVESTMENT */}
      <section className="bg-[#09251F] py-24 text-center px-6 text-white border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Your Investment. Our Execution.<br />Shared Progress.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm font-bold text-white tracking-widest uppercase mb-24 border border-white/20 py-6 px-10 rounded-full bg-white/5 max-w-fit mx-auto">
            <span>Capital Deployed</span>
            <span className="text-[#D5A547]">→</span>
            <span>Product Completion</span>
            <span className="text-[#D5A547]">→</span>
            <span>Pilot & Validation</span>
            <span className="text-[#D5A547]">→</span>
            <span>Market Entry</span>
            <span className="text-[#D5A547]">→</span>
            <span>Growth</span>
          </div>

          <h3 className="text-[#D5A547] font-bold tracking-widest text-sm uppercase mb-12 font-['Plus_Jakarta_Sans',sans-serif]">What investors can expect</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left md:text-center">
            {[
              { title: 'Company Updates', desc: 'Progress across the business and products.' },
              { title: 'Milestone Communication', desc: 'Updates around key development milestones.' },
              { title: 'Major Developments', desc: 'Significant partnerships, launches and business developments.' },
              { title: 'Shareholder Information', desc: 'Information provided in accordance with agreed investor terms.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start md:items-center p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#D5A547]/20 flex items-center justify-center mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#D5A547]"></div>
                </div>
                <h4 className="text-lg font-bold text-white mb-3 font-['Plus_Jakarta_Sans',sans-serif]">{item.title}</h4>
                <p className="text-sm text-white/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM / CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111719] mb-12 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Ready to start the conversation?
          </h2>
          
          <form className="bg-[#F8FAFC] p-8 md:p-12 rounded-[24px] border border-gray-100 flex flex-col gap-6 text-left shadow-sm mb-12" onSubmit={(e) => e.preventDefault()}>
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
                  <option value="500k-999k">₦500K – ₦999K</option>
                  <option value="1m-1.99m">₦1M – ₦1.99M</option>
                  <option value="2m-4.24m">₦2M – ₦4.24M</option>
                  <option value="4.25m-8.49m">₦4.25M – ₦8.49M</option>
                  <option value="8.5m+">₦8.5M+</option>
                  <option value="discuss">I'd like to discuss first</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="mt-6 w-full md:w-auto self-center bg-[#09251F] text-white hover:bg-[#D5A547] px-10 py-5 rounded-full font-bold tracking-widest uppercase text-sm transition-colors duration-300 group shadow-lg"
            >
              Speak With OYEN <span className="ml-3 border border-white rounded-full p-1 group-hover:border-white transition-colors">→</span>
            </button>
          </form>

          <p className="text-xs text-gray-400 leading-relaxed font-['Inter',sans-serif] max-w-2xl mx-auto">
            Please note: This information is provided for discussion purposes. Prospective investors should review all formal opportunity materials and obtain independent professional advice where appropriate before participating.
          </p>
        </div>
      </section>

    </main>
  );
}
