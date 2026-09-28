'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SolutionsSection() {
  return (
    <section id="approach" className="bg-[#F5F7F6] w-full flex flex-col lg:flex-row overflow-hidden">
      {/* LEFT SIDE: Image (45%) */}
      <div className="relative w-full lg:w-[45%] h-[450px] md:h-[600px] lg:h-auto">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern corporate innovation facility"
          fill
          className="object-cover object-center"
          quality={100}
          unoptimized={true}
        />
        {/* Subtle dark gradient near the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* RIGHT SIDE: Content (55%) */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 lg:py-32 bg-white text-[#111719]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <h4 className="text-[#D5A547] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6 font-['Inter',sans-serif]">
            How We Work
          </h4>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight mb-6 font-['Plus_Jakarta_Sans',sans-serif] leading-[1.1]">
            From Research to Real-World Impact.
          </h2>

          {/* Paragraph */}
          <p className="text-[#59636D] text-base md:text-lg font-['Inter',sans-serif] font-medium leading-relaxed mb-16">
            Our four-stage approach transforms real challenges into practical technology and scalable solutions that create lasting value.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            
            {/* Stage 1: RESEARCH */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-t border-gray-200 pt-6"
            >
              <div className="mb-4 text-[#D5A547]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[#D5A547] text-sm font-bold tracking-widest font-['Inter',sans-serif]">01</span>
                <h3 className="text-[#111719] text-lg font-bold tracking-wide font-['Plus_Jakarta_Sans',sans-serif]">RESEARCH</h3>
              </div>
              <p className="text-[#59636D] text-sm font-['Inter',sans-serif]">Understand real problems.</p>
            </motion.div>

            {/* Stage 2: BUILD */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-t border-gray-200 pt-6"
            >
              <div className="mb-4 text-[#D5A547]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[#D5A547] text-sm font-bold tracking-widest font-['Inter',sans-serif]">02</span>
                <h3 className="text-[#111719] text-lg font-bold tracking-wide font-['Plus_Jakarta_Sans',sans-serif]">BUILD</h3>
              </div>
              <p className="text-[#59636D] text-sm font-['Inter',sans-serif]">Develop practical technology.</p>
            </motion.div>

            {/* Stage 3: SOLVE */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-t border-gray-200 pt-6"
            >
              <div className="mb-4 text-[#D5A547]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[#D5A547] text-sm font-bold tracking-widest font-['Inter',sans-serif]">03</span>
                <h3 className="text-[#111719] text-lg font-bold tracking-wide font-['Plus_Jakarta_Sans',sans-serif]">SOLVE</h3>
              </div>
              <p className="text-[#59636D] text-sm font-['Inter',sans-serif]">Address operational needs.</p>
            </motion.div>

            {/* Stage 4: SCALE */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t border-gray-200 pt-6"
            >
              <div className="mb-4 text-[#D5A547]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[#D5A547] text-sm font-bold tracking-widest font-['Inter',sans-serif]">04</span>
                <h3 className="text-[#111719] text-lg font-bold tracking-wide font-['Plus_Jakarta_Sans',sans-serif]">SCALE</h3>
              </div>
              <p className="text-[#59636D] text-sm font-['Inter',sans-serif]">Create lasting value.</p>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}