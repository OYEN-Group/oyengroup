'use client';

import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h4 className="text-[#D5A547] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 font-['Inter',sans-serif]">
            Our Identity
          </h4>
          <h2 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-[#111719] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            What Drives Us.
          </h2>
        </motion.div>

        {/* Vision & Mission Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-20 lg:mb-24 border-b border-gray-200 pb-20 lg:pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-[#D5A547] text-sm font-bold uppercase tracking-[0.2em] mb-6 font-['Inter',sans-serif]">
              Our Vision
            </h3>
            <p className="text-2xl md:text-3xl font-bold text-[#111719] leading-[1.3] font-['Plus_Jakarta_Sans',sans-serif]">
              A more capable Africa powered by technology, talent and innovation.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-[#D5A547] text-sm font-bold uppercase tracking-[0.2em] mb-6 font-['Inter',sans-serif]">
              Our Mission
            </h3>
            <p className="text-xl md:text-2xl text-[#59636D] leading-relaxed font-['Inter',sans-serif] font-medium">
              To research, build and deploy practical solutions that solve real problems and create lasting value for industries and communities.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12"
        >
          <div className="lg:w-1/4">
            <h3 className="text-[#D5A547] text-sm font-bold uppercase tracking-[0.2em] font-['Inter',sans-serif]">
              Our Values
            </h3>
          </div>
          
          <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 w-full">
            {['People first.', 'Integrity.', 'Practical innovation.', 'Excellence.', 'Long-term impact.'].map((value, i) => (
              <div key={i} className="py-3 border-l-2 border-[#D5A547]/30 pl-4 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-4">
                <span className="text-lg font-bold text-[#111719] tracking-wide font-['Plus_Jakarta_Sans',sans-serif]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}