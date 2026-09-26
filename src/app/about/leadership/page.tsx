'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const leaders = [
  {
    id: 'rufus',
    name: 'Rufus Edesiri Ejukonemu',
    role: 'Co-Founder, CEO & Director',
    image: '/images/rufus.jpg',
    bio: [
      'Leads business strategy, growth and partnerships, driving OYEN\'s mission to create technology solutions with real impact.'
    ]
  },
  {
    id: 'james',
    name: 'Oyewole, James Mayowa',
    role: 'Founder, CTO & Director',
    image: '/images/james.jpg',
    bio: [
      'Leads technology, product development and research, building innovative solutions for real-world challenges.'
    ]
  }
];

export default function LeadershipPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ASYMMETRIC EDITORIAL HERO */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-[#111719] overflow-hidden">
        {/* Subtle architectural background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/impact_bg.jpg"
            alt="Corporate Architecture"
            fill
            className="object-cover opacity-10 mix-blend-luminosity object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111719] via-[#111719]/95 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#D5A547]">
                  ABOUT / LEADERSHIP
                </span>
                <span className="w-12 h-px bg-[#D5A547]/40" />
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  OYEN GROUP — 2026
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-8 leading-[1.1]"
              >
                The People Behind <br className="hidden md:block" />
                <span className="font-bold">Our Progress.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-xl font-light leading-relaxed border-l-2 border-[#D5A547] pl-6"
              >
                Our leadership provides the vision, direction and support needed to turn ideas into real-world impact.
              </motion.p>
            </div>
            
            <div className="hidden lg:block lg:col-span-4 text-right pb-4">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center ml-auto">
                <div className="w-2 h-2 rounded-full bg-[#D5A547] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE LEADERSHIP */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="mb-20">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D5A547] block mb-3">
              EXECUTIVE LEADERSHIP
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#111719] tracking-tight">
              The people guiding our direction.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {leaders.map((leader, index) => (
              <motion.div 
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col"
              >
                {/* Large Editorial Portrait */}
                <div className="relative w-full aspect-[4/5] bg-gray-100 mb-8 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover filter grayscale-[10%] contrast-[1.05]"
                  />
                </div>
                
                {/* Clean Details */}
                <div>
                  <h3 className="text-3xl font-bold text-[#111719] mb-3">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold tracking-[0.15em] text-[#D5A547] uppercase mb-6">
                    {leader.role}
                  </p>
                  
                  <div className="text-lg text-gray-600 leading-relaxed font-light">
                    {leader.bio.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ORGANISATIONAL STRUCTURE */}
      <section className="py-24 md:py-32 bg-[#FAFAFA] border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-24">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D5A547] block mb-3">
              ORGANISATIONAL FRAMEWORK
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-[#111719] tracking-tight">
              Built for Execution.
            </h2>
          </div>

          <div className="max-w-[1200px] mx-auto flex flex-col items-center">
            
            {/* LEVEL 1: EXECUTIVE */}
            <div className="w-full flex flex-col items-center mb-16">
              <div className="bg-[#111719] px-10 py-6 text-center w-full max-w-xl shadow-sm z-10 border border-[#202629]">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-widest mb-2">OYEN GROUP LTD</h3>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#D5A547]">People · Ideas · Technology · Real Impact</p>
              </div>

              {/* Connecting Line */}
              <div className="w-px h-12 bg-gradient-to-b from-[#111719] to-gray-300" />

              <div className="w-full max-w-4xl relative">
                {/* Horizontal branch */}
                <div className="hidden md:block absolute top-0 left-[25%] right-[25%] h-px bg-gray-300" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-0 md:pt-8">
                  {/* CEO */}
                  <div className="relative flex flex-col items-center">
                    <div className="hidden md:block absolute -top-8 left-1/2 w-px h-8 bg-gray-300" />
                    <div className="bg-white border border-gray-200 text-center p-8 w-full shadow-sm hover:border-[#D5A547]/30 transition-colors">
                      <h4 className="text-2xl font-bold text-[#111719] mb-3">CEO</h4>
                      <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Business, Strategy & Growth</p>
                    </div>
                  </div>

                  {/* CTO */}
                  <div className="relative flex flex-col items-center">
                    <div className="hidden md:block absolute -top-8 left-1/2 w-px h-8 bg-gray-300" />
                    <div className="bg-white border border-gray-200 text-center p-8 w-full shadow-sm hover:border-[#D5A547]/30 transition-colors">
                      <h4 className="text-2xl font-bold text-[#111719] mb-3">CTO</h4>
                      <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-medium">Technology, Product & R&D</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Line to Level 2 */}
            <div className="w-px h-16 bg-gray-300 mb-8" />

            {/* LEVEL 2: PRODUCT PORTFOLIO */}
            <div className="w-full flex flex-col items-center mb-16">
              <div className="mb-8">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111719] bg-gray-200/50 px-4 py-2 rounded-full">
                  OUR PRODUCT PORTFOLIO
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl relative">
                {/* Horizontal branch */}
                <div className="hidden md:block absolute -top-4 left-[16.66%] right-[16.66%] h-px bg-gray-300" />
                <div className="hidden md:block absolute -top-12 left-1/2 w-px h-8 bg-gray-300" />
                
                <div className="relative flex flex-col items-center">
                  <div className="hidden md:block absolute -top-4 left-1/2 w-px h-4 bg-gray-300" />
                  <div className="bg-white border-t-2 border-[#D5A547] p-8 w-full text-center shadow-sm">
                    <h5 className="text-lg font-bold text-[#111719] tracking-wide">OYEN GRID</h5>
                  </div>
                </div>

                <div className="relative flex flex-col items-center">
                  <div className="hidden md:block absolute -top-4 left-1/2 w-px h-4 bg-gray-300" />
                  <div className="bg-white border-t-2 border-[#D5A547] p-8 w-full text-center shadow-sm">
                    <h5 className="text-lg font-bold text-[#111719] tracking-wide">VERBA</h5>
                  </div>
                </div>

                <div className="relative flex flex-col items-center">
                  <div className="hidden md:block absolute -top-4 left-1/2 w-px h-4 bg-gray-300" />
                  <div className="bg-white border-t-2 border-[#D5A547] p-8 w-full text-center shadow-sm">
                    <h5 className="text-lg font-bold text-[#111719] tracking-wide">ORIVEX</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Line to Level 3 */}
            <div className="w-px h-16 bg-gray-300 mb-8" />

            {/* LEVEL 3: SUPPORTING FUNCTIONS */}
            <div className="w-full flex flex-col items-center">
              <div className="mb-10">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#111719] bg-gray-200/50 px-4 py-2 rounded-full">
                  SUPPORTING FUNCTIONS
                </span>
              </div>
              
              <div className="relative w-full max-w-[1200px]">
                <div className="hidden md:block absolute -top-6 left-1/2 w-px h-6 bg-gray-300" />
                <div className="hidden lg:block absolute -top-6 left-[12.5%] right-[12.5%] h-px bg-gray-300" />
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-0 lg:pt-6">
                  {[
                    'R&D / Engineering',
                    'Product & Operations',
                    'Marketing & Communications',
                    'Business Development & Partnerships',
                    'Finance',
                    'Legal & Compliance',
                    'People & Culture',
                    'Strategy & Corporate Services'
                  ].map((func, i) => (
                    <div key={i} className="relative flex flex-col items-center">
                      {/* Vertical line for top row */}
                      {i < 4 && <div className="hidden lg:block absolute -top-6 left-1/2 w-px h-6 bg-gray-300" />}
                      <div className="bg-transparent border border-gray-200 p-5 md:p-6 text-center w-full h-full flex items-center justify-center hover:bg-white hover:shadow-sm transition-all duration-300">
                        <span className="text-[13px] md:text-sm text-[#111719] font-medium leading-snug">{func}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPACT CORPORATE CLOSING BANNER */}
      <section className="bg-[#111719] py-16 md:py-20 border-t border-[#202629]">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#D5A547] block mb-4">
            OUR COMMITMENT
          </span>
          <h2 className="text-2xl md:text-3xl font-light text-white mb-6">
            Good ideas need people capable of carrying them through.
          </h2>
          <p className="text-xs md:text-sm text-gray-400 tracking-[0.2em] font-medium">
            PEOPLE. IDEAS. TECHNOLOGY. REAL IMPACT.
          </p>
        </div>
      </section>
    </main>
  );
}
