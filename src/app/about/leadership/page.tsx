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
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 bg-[#111719] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/impact_bg.jpg"
            alt="Corporate Architecture"
            fill
            className="object-cover opacity-20 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#111719]/90 to-[#111719]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#D5A547] block mb-6"
          >
            ABOUT OYEN GROUP / LEADERSHIP
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8"
          >
            The People Behind Our Progress.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Our leadership provides the vision, direction and support needed to turn ideas into real-world impact.
          </motion.p>
        </div>
      </section>

      {/* EXECUTIVE LEADERSHIP */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {leaders.map((leader, index) => (
              <motion.div 
                key={leader.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#FAFAFA] rounded-sm p-6 lg:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-500 flex flex-col"
              >
                <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden mb-8 bg-[#111719]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#111719] mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold tracking-[0.15em] text-[#D5A547] uppercase mb-6">
                    {leader.role}
                  </p>
                  
                  <div className="w-12 h-[2px] bg-[#D5A547]/30 mb-6" />
                  
                  <div className="space-y-4 text-base text-gray-600 leading-relaxed font-light">
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
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111719] tracking-tight mb-4">
              Our Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              A focused and scalable structure designed for execution, innovation and sustainable growth.
            </p>
          </div>

          {/* Org Chart Container */}
          <div className="flex flex-col items-center">
            
            {/* Top Level */}
            <div className="bg-[#111719] border border-[#202629] text-center p-6 w-full max-w-sm mx-auto shadow-md relative z-10">
              <h3 className="text-lg font-bold text-white tracking-widest mb-1">OYEN GROUP LTD</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#D5A547]">People · Ideas · Technology · Real Impact</p>
            </div>

            {/* Vertical Line */}
            <div className="w-px h-10 bg-[#D5A547]/50" />

            {/* Executive Level */}
            <div className="relative w-full max-w-3xl">
              {/* Horizontal connecting line for desktop */}
              <div className="hidden md:block absolute top-0 left-1/4 right-1/4 h-px bg-[#D5A547]/50" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-0 md:pt-6">
                <div className="relative flex flex-col items-center">
                  {/* Vertical connecting line for desktop */}
                  <div className="hidden md:block absolute -top-6 left-1/2 w-px h-6 bg-[#D5A547]/50" />
                  
                  <div className="bg-white border border-gray-200 text-center p-8 w-full shadow-sm">
                    <h4 className="text-xl font-bold text-[#111719] mb-2">CEO</h4>
                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500">Business, Strategy & Growth</p>
                  </div>
                </div>

                <div className="relative flex flex-col items-center">
                  {/* Vertical connecting line for desktop */}
                  <div className="hidden md:block absolute -top-6 left-1/2 w-px h-6 bg-[#D5A547]/50" />
                  
                  <div className="bg-white border border-gray-200 text-center p-8 w-full shadow-sm">
                    <h4 className="text-xl font-bold text-[#111719] mb-2">CTO</h4>
                    <p className="text-xs uppercase tracking-[0.15em] text-gray-500">Technology, Product & R&D</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="w-px h-16 bg-[#D5A547]/50" />

            {/* Product Portfolio Level */}
            <div className="bg-[#111719] text-center py-2 px-6 shadow-sm z-10 mb-8 border border-[#202629]">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D5A547]">Product Portfolio</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="bg-white border border-gray-200 p-6 text-center shadow-sm">
                <h5 className="font-bold text-[#111719] mb-1">OYEN GRID</h5>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center shadow-sm">
                <h5 className="font-bold text-[#111719] mb-1">VERBA</h5>
              </div>
              <div className="bg-white border border-gray-200 p-6 text-center shadow-sm">
                <h5 className="font-bold text-[#111719] mb-1">ORIVEX</h5>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="w-px h-16 bg-[#D5A547]/50" />

            {/* Supporting Functions Level */}
            <div className="bg-[#111719] text-center py-2 px-6 shadow-sm z-10 mb-8 border border-[#202629]">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D5A547]">Supporting Functions</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
              <div className="bg-white border border-gray-100 p-4 text-center text-sm text-gray-700 shadow-sm font-medium">R&D / Engineering</div>
              <div className="bg-white border border-gray-100 p-4 text-center text-sm text-gray-700 shadow-sm font-medium">Product & Operations</div>
              <div className="bg-white border border-gray-100 p-4 text-center text-sm text-gray-700 shadow-sm font-medium">Marketing & Communications</div>
              <div className="bg-white border border-gray-100 p-4 text-center text-sm text-gray-700 shadow-sm font-medium">Business Development & Partnerships</div>
              <div className="bg-white border border-gray-100 p-4 text-center text-sm text-gray-700 shadow-sm font-medium">Finance</div>
              <div className="bg-white border border-gray-100 p-4 text-center text-sm text-gray-700 shadow-sm font-medium">Legal & Compliance</div>
              <div className="bg-white border border-gray-100 p-4 text-center text-sm text-gray-700 shadow-sm font-medium">People & Culture</div>
              <div className="bg-white border border-gray-100 p-4 text-center text-sm text-gray-700 shadow-sm font-medium">Strategy & Corporate Services</div>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-[#111719] py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-8">
            Good ideas need people capable of carrying them through.
          </h2>
          
          <div className="w-16 h-[2px] bg-[#D5A547] mx-auto mb-8" />
          
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide mb-12">
            People. Ideas. Technology. Real Impact.
          </p>
          
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-[#D5A547]">
            AFRICA AND BEYOND
          </span>
        </div>
      </section>
    </main>
  );
}
