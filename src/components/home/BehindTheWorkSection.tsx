'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BehindTheWorkSection() {
  return (
    <section className="bg-[#F5F7F6] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-left"
        >
          <h4 className="text-[#D5A547] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 font-['Inter',sans-serif]">
            Ideas Taking Shape
          </h4>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111719] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Active Research & Development
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col group"
          >
            <div className="relative aspect-[4/3] w-full mb-8 overflow-hidden bg-gray-200">
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                alt="Product Development" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized={true}
              />
            </div>
            <h4 className="text-2xl font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Product Development
            </h4>
            <p className="text-[#59636D] text-lg font-['Inter',sans-serif] leading-relaxed">
              Engineering practical technology to address complex operational challenges.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col group"
          >
            <div className="relative aspect-[4/3] w-full mb-8 overflow-hidden bg-gray-200">
              <Image 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
                alt="Research & Innovation" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized={true}
              />
            </div>
            <h4 className="text-2xl font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Research & Innovation
            </h4>
            <p className="text-[#59636D] text-lg font-['Inter',sans-serif] leading-relaxed">
              Investigating real-world problems to design systems that create lasting value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}