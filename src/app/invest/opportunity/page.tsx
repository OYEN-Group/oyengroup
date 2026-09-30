'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function InvestmentOpportunityPage() {
  const [selectedInvestment, setSelectedInvestment] = useState<number>(500000);

  const indicativeTable = [
    { amount: 500000, equity: '0.59%' },
    { amount: 1000000, equity: '1.18%' },
    { amount: 2000000, equity: '2.35%' },
    { amount: 4250000, equity: '5.00%' },
    { amount: 8500000, equity: '10.00%' },
  ];

  const currentSelection = indicativeTable.find(item => item.amount === selectedInvestment) || indicativeTable[0];

  return (
    <main className="bg-[#F8FAFC] min-h-screen pt-40 pb-24 font-['Inter',sans-serif]">
      
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-center text-sm font-['Inter',sans-serif] text-[#59636D] mb-8">
            <Link href="/invest" className="hover:text-[#D5A547] transition-colors">Investment</Link>
            <span className="mx-2">/</span>
            <span className="text-[#111719] font-medium">Opportunity</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            The Opportunity.
          </h1>
        </div>

        {/* TOP METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-y border-gray-200 py-12">
          <div className="flex flex-col">
            <div className="text-4xl md:text-5xl font-bold text-[#09251F] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">₦8.5M</div>
            <div className="text-[#59636D] uppercase tracking-widest text-sm font-bold">Current Raise</div>
          </div>
          <div className="flex flex-col md:border-l md:pl-8 border-gray-200">
            <div className="text-4xl md:text-5xl font-bold text-[#09251F] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">10%</div>
            <div className="text-[#59636D] uppercase tracking-widest text-sm font-bold">Equity Offered</div>
          </div>
          <div className="flex flex-col md:border-l md:pl-8 border-gray-200">
            <div className="text-4xl md:text-5xl font-bold text-[#09251F] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">₦500K</div>
            <div className="text-[#59636D] uppercase tracking-widest text-sm font-bold">Starting Participation</div>
          </div>
        </div>

        {/* INDICATIVE PARTICIPATION (Interactive) */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-16 mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">Indicative Participation</h3>
          <p className="text-lg text-[#59636D] font-light mb-12 max-w-2xl">
            Explore what participation in the current round could look like.
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between bg-[#F8FAFC] rounded-xl p-8 md:p-12 mb-8 border border-gray-100">
            <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
              <span className="text-[#59636D] uppercase tracking-widest text-xs font-bold mb-2">Investment Amount</span>
              <span className="text-4xl md:text-5xl font-bold text-[#09251F] font-['Plus_Jakarta_Sans',sans-serif]">
                ₦{currentSelection.amount.toLocaleString()}
              </span>
            </div>
            
            <div className="hidden lg:block w-px h-16 bg-gray-300"></div>

            <div className="flex flex-col items-center lg:items-end">
              <span className="text-[#59636D] uppercase tracking-widest text-xs font-bold mb-2">Indicative Equity</span>
              <span className="text-5xl md:text-6xl font-bold text-[#D5A547] font-['Plus_Jakarta_Sans',sans-serif]">
                {currentSelection.equity}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {indicativeTable.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedInvestment(item.amount)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-colors ${
                  selectedInvestment === item.amount 
                    ? 'bg-[#09251F] text-white shadow-md' 
                    : 'bg-white border border-gray-200 text-[#59636D] hover:border-[#09251F] hover:text-[#09251F]'
                }`}
              >
                {item.amount >= 1000000 ? `₦${item.amount / 1000000}M` : `₦${item.amount / 1000}K`}
              </button>
            ))}
          </div>

          <p className="text-xs text-gray-400 leading-relaxed font-['Inter',sans-serif] text-center max-w-3xl mx-auto mb-12">
            Indicative figures are based on the current ₦8.5 million round for 10% equity and are subject to final investment terms, documentation and applicable requirements.
          </p>

          <div className="text-center border-t border-gray-100 pt-12">
            <h4 className="text-xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">Interested in participating?</h4>
            <Link 
              href="/invest/how-to-invest"
              className="inline-flex items-center text-white bg-[#09251F] hover:bg-[#D5A547] px-8 py-4 rounded-full font-semibold tracking-widest uppercase text-sm transition-colors duration-300 group"
            >
              Start a Conversation <span className="ml-3 border border-white rounded-full p-1 group-hover:border-[#09251F] transition-colors">→</span>
            </Link>
          </div>
        </div>

        {/* PRODUCTS PORTFOLIO */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-[#111719] mb-12 font-['Plus_Jakarta_Sans',sans-serif]">Product-Specific Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t-2 border-[#09251F] pt-6">
              <h4 className="text-xl font-bold text-[#09251F] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">OYEN GRID</h4>
              <p className="text-[#59636D] font-light leading-relaxed mb-6">Enterprise learning & programme operations built to coordinate participants and facilitators at scale.</p>
            </div>
            <div className="border-t-2 border-[#007079] pt-6">
              <h4 className="text-xl font-bold text-[#09251F] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">VERBA</h4>
              <p className="text-[#59636D] font-light leading-relaxed mb-6">Language, research and communication technology empowering rigorous academic writing.</p>
            </div>
            <div className="border-t-2 border-[#D5A547] pt-6">
              <h4 className="text-xl font-bold text-[#09251F] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">ORIVEX</h4>
              <p className="text-[#59636D] font-light leading-relaxed mb-6">Operational intelligence and decision support engineered for critical petroleum logistics.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/invest/how-to-invest"
            className="inline-flex items-center text-[#09251F] border border-[#09251F] hover:bg-[#09251F] hover:text-white px-8 py-4 rounded-sm font-semibold tracking-widest uppercase text-sm transition-colors duration-300 group"
          >
            Request Detailed Investment Information <span className="ml-3">→</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
