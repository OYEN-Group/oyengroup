'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function UseOfFundsPage() {
  const steps = [
    { id: '01', title: 'PRODUCT DEVELOPMENT', desc: 'Complete priority features across OYEN GRID, VERBA and ORIVEX.', img: '/images/tech.jpg' },
    { id: '02', title: 'INFRASTRUCTURE & SECURITY', desc: 'Strengthen infrastructure, data systems and security.', img: '/images/energy.jpg' },
    { id: '03', title: 'PILOT & MARKET VALIDATION', desc: 'Deploy with selected users and organisations to gather feedback and validate demand.', img: '/images/showcase/grid_ui.png' },
    { id: '04', title: 'GO-TO-MARKET', desc: 'Support positioning, partnerships, demonstrations and early customer acquisition.', img: '/images/partnership.jpg' },
    { id: '05', title: 'OPERATIONS & LEGAL', desc: 'Support essential operations, compliance and intellectual-property requirements.', img: '/images/hero-slide2.png' },
  ];

  return (
    <main className="bg-white min-h-screen pt-40 pb-0 font-['Inter',sans-serif]">
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-24">
        <div className="flex items-center text-sm font-['Inter',sans-serif] text-[#59636D] mb-8">
          <Link href="/invest" className="hover:text-[#D5A547] transition-colors">Investment</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111719] font-medium">Use of Funds</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
          Investing in What Comes Next.
        </h1>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 pb-32">
        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-12 group"
            >
              <div className="w-full md:w-1/2">
                <div className="text-6xl md:text-8xl font-bold text-gray-100 mb-6 font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-500 group-hover:text-[#F1F5F9]">
                  {step.id}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#09251F] mb-4 tracking-widest uppercase font-['Plus_Jakarta_Sans',sans-serif]">
                  {step.title}
                </h2>
                <p className="text-xl text-[#59636D] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-lg">
                <Image 
                  src={step.img} 
                  alt={step.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  unoptimized 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="relative w-full h-[600px] md:h-[800px]">
        <Image 
          src="/images/hero-slide1.jpg" 
          alt="Impact" 
          fill 
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09251F]/95 to-black/20"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1]">
            From Development<br />to Real-World Impact.
          </h2>
          <div className="mt-16">
            <Link 
              href="/invest/how-to-invest"
              className="inline-flex items-center text-[#111719] bg-[#D5A547] hover:bg-white px-8 py-4 rounded-sm font-semibold tracking-widest uppercase text-sm transition-colors duration-300"
            >
              How to Invest <span className="ml-3">→</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
