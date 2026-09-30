'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InvestmentHubPage() {
  return (
    <main className="bg-white min-h-screen pt-28 font-['Inter',sans-serif]">
      
      {/* 01 — HERO */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-24">
        <div className="relative w-full h-[600px] md:h-[700px] rounded-[24px] overflow-hidden shadow-2xl">
          <Image 
            quality={100} 
            src="/images/hero-slide4.jpg" 
            alt="Invest in OYEN" 
            fill 
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09251F]/95 via-[#09251F]/70 to-black/20"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center p-10 lg:p-16">
            <div className="max-w-3xl mt-auto lg:mt-0">
              <h4 className="text-[#D5A547] font-bold tracking-widest text-sm uppercase mb-6 font-['Plus_Jakarta_Sans',sans-serif]">Investment Opportunity</h4>
              <h1 className="text-5xl md:text-6xl lg:text-[76px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.05]">
                Build What Comes Next.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide leading-relaxed mb-10 max-w-2xl">
                Partner with OYEN GROUP as we move a portfolio of practical technology solutions from development toward real-world deployment.
              </p>
              
              <div className="text-white/80 font-bold tracking-widest uppercase text-sm md:text-base mb-12 font-['Plus_Jakarta_Sans',sans-serif]">
                ₦8.5M RAISE <span className="mx-3 text-[#D5A547]">·</span> 10% EQUITY <span className="mx-3 text-[#D5A547]">·</span> FROM ₦500K
              </div>
              
              <Link 
                href="/invest/opportunity"
                className="inline-flex items-center text-[#111719] bg-[#D5A547] hover:bg-white px-8 py-4 rounded-sm font-semibold tracking-widest uppercase text-sm transition-colors duration-300 group"
              >
                Explore the Opportunity <span className="ml-3 border border-[#111719] rounded-full p-1 group-hover:border-[#111719] transition-colors">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 02 — ONE GROUP. THREE VENTURES. */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              One Group. Three Technology Ventures.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'OYEN GRID', desc: 'Enterprise learning & programme operations.', img: '/images/hero-slide1.jpg', link: '/products/oyen-grid' },
              { name: 'VERBA', desc: 'Language, research & communication technology.', img: '/images/showcase/verba_ui.png', link: '/products/verba' },
              { name: 'ORIVEX', desc: 'Operational intelligence & decision support.', img: '/images/tech.jpg', link: '/products/orivex' }
            ].map((prod, idx) => (
              <Link key={idx} href={prod.link} className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md hover:border-[#D5A547] transition-all duration-300">
                <div className="relative w-full h-[250px] overflow-hidden">
                  <Image src={prod.img} alt={prod.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                </div>
                <div className="p-8 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#09251F] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">{prod.name}</h3>
                    <p className="text-[#59636D] font-light text-lg">{prod.desc}</p>
                  </div>
                  <span className="text-[#007079] group-hover:text-[#D5A547] transition-colors font-bold text-lg ml-4 flex-shrink-0">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — INVESTING IN WHAT COMES NEXT */}
      <section className="py-32 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111719] mb-20 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
          Investing in What Comes Next.
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-20 text-left md:text-center font-['Plus_Jakarta_Sans',sans-serif]">
          {[
            { id: '01', title: 'Product Development' },
            { id: '02', title: 'Infrastructure & Security' },
            { id: '03', title: 'Pilot & Market Validation' },
            { id: '04', title: 'Go-to-Market' },
            { id: '05', title: 'Operations & Legal' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-start md:items-center">
              <span className="text-[#007079] font-bold text-lg mb-2">{item.id}</span>
              <span className="text-sm font-bold text-[#111719] tracking-widest uppercase max-w-[150px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — STATEMENT */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image 
          src="/images/tech.jpg" 
          alt="Impact" 
          fill 
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#09251F]/80"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            From development to<br />real-world impact.
          </h2>
        </div>
      </section>

      {/* 05 — NAVIGATION CARDS */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'The Opportunity', desc: 'Understand the round, participation structure and portfolio.', link: '/invest/opportunity', btnText: 'View Opportunity' },
            { title: 'Use of Funds', desc: 'See where the capital will be deployed and what it is intended to achieve.', link: '/invest/use-of-funds', btnText: 'Explore Use of Funds' },
            { title: 'How to Invest', desc: 'Understand the process and request a conversation with OYEN.', link: '/invest/how-to-invest', btnText: 'How to Invest' }
          ].map((card, idx) => (
            <Link key={idx} href={card.link} className="block p-10 bg-white border border-gray-200 rounded-xl hover:border-[#D5A547] hover:shadow-xl transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-[#09251F] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">{card.title}</h3>
              <p className="text-[#59636D] font-light text-lg mb-8 h-16">{card.desc}</p>
              <div className="text-[#007079] font-bold text-sm tracking-widest uppercase flex items-center group-hover:text-[#D5A547] transition-colors">
                {card.btnText} <span className="ml-3 border border-[#007079] group-hover:border-[#D5A547] rounded-full p-1 transition-colors">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
