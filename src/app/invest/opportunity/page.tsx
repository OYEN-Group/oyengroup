'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function InvestmentOpportunityPage() {
  const [selectedAmount, setSelectedAmount] = useState(500000);

  const indicativeTable = [
    { amount: 500000,  label: '₦500K',  equity: '0.59%' },
    { amount: 1000000, label: '₦1M',    equity: '1.18%' },
    { amount: 2000000, label: '₦2M',    equity: '2.35%' },
    { amount: 4250000, label: '₦4.25M', equity: '5.00%' },
    { amount: 8500000, label: '₦8.5M',  equity: '10.00%' },
  ];

  const current = indicativeTable.find(r => r.amount === selectedAmount)!;

  return (
    <main className="bg-white min-h-screen pt-28 pb-0 font-['Inter',sans-serif]">

      {/* ─── 01 HERO (Boxed, Aramco-style) ─── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-16">
        <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden rounded-[24px] shadow-2xl">
          <Image
            quality={100}
            src="/images/hero-slide4.jpg"
            alt="OYEN GROUP Investment Opportunity"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09251F]/95 via-[#09251F]/65 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-white/70 uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/invest" className="hover:text-white transition-colors">Investment</Link>
              <span>›</span>
              <span className="text-white font-bold">Opportunity</span>
            </div>

            <p className="text-[#D5A547] text-sm font-bold tracking-widest uppercase mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Current Round
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1] mb-4 max-w-3xl">
              The Opportunity.
            </h1>
            <p className="text-xl text-white/90 font-light max-w-xl leading-relaxed">
              Partner with OYEN GROUP as we move a portfolio of practical technology solutions from development toward real-world deployment.
            </p>
          </div>
        </div>
      </div>

      {/* ─── 02 METRICS + TWO-COLUMN TEXT ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-20">

        {/* Three metrics */}
        <div className="grid grid-cols-3 gap-8 border-y border-gray-200 py-10 mb-16">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#09251F] mb-1 font-['Plus_Jakarta_Sans',sans-serif]">₦8.5M</div>
            <div className="text-[#59636D] uppercase tracking-widest text-xs font-bold">Current Raise</div>
          </div>
          <div className="border-l border-gray-200 pl-8">
            <div className="text-4xl md:text-5xl font-bold text-[#09251F] mb-1 font-['Plus_Jakarta_Sans',sans-serif]">10%</div>
            <div className="text-[#59636D] uppercase tracking-widest text-xs font-bold">Equity Offered</div>
          </div>
          <div className="border-l border-gray-200 pl-8">
            <div className="text-4xl md:text-5xl font-bold text-[#09251F] mb-1 font-['Plus_Jakarta_Sans',sans-serif]">₦500K</div>
            <div className="text-[#59636D] uppercase tracking-widest text-xs font-bold">Starting Participation</div>
          </div>
        </div>

        {/* Two-column text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-[#59636D] text-[15px] leading-relaxed">
          <div className="space-y-5">
            <p>
              OYEN GROUP is raising ₦8.5 million for a 10% equity stake in the company. The round is open to qualifying investors with participation starting from ₦500,000.
            </p>
            <p>
              Capital raised will be deployed to complete priority product development across OYEN GRID, VERBA and ORIVEX, and to move each product through the next critical stage of development and real-world validation.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              This is an early-stage opportunity in a portfolio of technology products built around real needs in learning, research and operational intelligence — sectors with significant growth potential in Africa and beyond.
            </p>
            <p>
              Detailed investment information, including formal documentation, is available to qualifying investors following an initial conversation with the OYEN team.
            </p>
          </div>
        </div>
      </section>



      {/* ─── 04 INTERACTIVE PARTICIPATION (image left + selector right) ─── */}
      <section className="bg-[#F8FAFC] py-24 mb-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: Image */}
            <div className="w-full lg:w-[45%] relative h-[400px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-xl">
              <Image
                src="/images/partnership.jpg"
                alt="Indicative Participation"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Right: Interactive Selector */}
            <div className="w-full lg:w-[55%]">
              <h4 className="text-[#D5A547] font-bold tracking-widest text-sm uppercase mb-4 font-['Plus_Jakarta_Sans',sans-serif]">Indicative Participation</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-tight">
                Explore what participation could look like.
              </h2>
              <p className="text-[#59636D] text-lg leading-relaxed mb-10 font-light">
                Based on the current ₦8.5M round for 10% equity. Select an investment amount to see the indicative equity.
              </p>

              {/* Display */}
              <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10 mb-6 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-[#59636D] uppercase tracking-widest text-xs font-bold mb-1">Investment Amount</span>
                  <span className="text-4xl md:text-5xl font-bold text-[#09251F] font-['Plus_Jakarta_Sans',sans-serif]">
                    ₦{current.amount.toLocaleString()}
                  </span>
                </div>
                <div className="hidden md:block w-px h-12 bg-gray-200"></div>
                <div className="flex flex-col items-center md:items-end">
                  <span className="text-[#59636D] uppercase tracking-widest text-xs font-bold mb-1">Indicative Equity</span>
                  <span className="text-5xl md:text-6xl font-bold text-[#D5A547] font-['Plus_Jakarta_Sans',sans-serif]">
                    {current.equity}
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-3 mb-8">
                {indicativeTable.map((row, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedAmount(row.amount)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                      selectedAmount === row.amount
                        ? 'bg-[#09251F] text-white shadow-md'
                        : 'bg-white border border-gray-200 text-[#59636D] hover:border-[#09251F] hover:text-[#09251F]'
                    }`}
                  >
                    {row.label}
                  </button>
                ))}
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mb-10">
                Indicative figures are based on the current ₦8.5 million round for 10% equity and are subject to final investment terms, documentation and applicable requirements.
              </p>

              <Link
                href="/invest/how-to-invest"
                className="inline-flex items-center text-white bg-[#09251F] hover:bg-[#D5A547] hover:text-[#111719] px-8 py-4 font-bold tracking-widest uppercase text-sm transition-colors duration-300 rounded-sm group self-start"
              >
                Start a Conversation <span className="ml-3 border border-white group-hover:border-[#111719] rounded-full p-1 transition-colors">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 05 REQUEST INFORMATION CALLOUT ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <div className="relative w-full md:w-[55%] h-[300px] md:h-auto">
            <Image
              src="/images/tech.jpg"
              alt="Request detailed investment information"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="w-full md:w-[45%] bg-white p-10 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Request detailed investment information.
            </h3>
            <p className="text-[#59636D] leading-relaxed mb-8 font-light">
              Formal investment documentation, including the full equity structure, risk considerations and terms, is available to qualifying investors after an initial conversation with the OYEN team.
            </p>
            <Link
              href="/invest/how-to-invest"
              className="inline-flex items-center text-[#111719] bg-[#D5A547] hover:bg-[#09251F] hover:text-white px-8 py-4 font-bold tracking-widest uppercase text-sm transition-colors duration-300 rounded-sm group self-start"
            >
              How to Invest <span className="ml-3 border border-[#111719] group-hover:border-white rounded-full p-1 transition-colors">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 06 DARK CLOSING SECTION ─── */}
      <section className="relative w-full h-[400px] md:h-[480px] flex items-center justify-start overflow-hidden">
        <Image
          src="/images/hero-slide1.jpg"
          alt="Build What Comes Next"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#09251F]/85" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight max-w-3xl leading-tight">
            Build What Comes Next.
          </h2>
          <p className="text-white/80 text-xl font-light max-w-xl mb-10">
            Capital is only the beginning. Execution creates value.
          </p>
          <Link
            href="/invest/how-to-invest"
            className="inline-flex items-center text-[#09251F] bg-[#D5A547] hover:bg-white px-8 py-4 font-bold tracking-widest uppercase text-sm transition-colors duration-300 rounded-sm"
          >
            Speak With OYEN →
          </Link>
        </div>
      </section>

    </main>
  );
}
