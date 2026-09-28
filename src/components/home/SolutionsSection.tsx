'use client';

import { motion } from 'framer-motion';

const stages = [
  { id: 'research', title: 'RESEARCH', description: 'Understand real problems.' },
  { id: 'build', title: 'BUILD', description: 'Develop practical technology.' },
  { id: 'solve', title: 'SOLVE', description: 'Address operational needs.' },
  { id: 'scale', title: 'SCALE', description: 'Create lasting value.' },
];

export default function SolutionsSection() {
  return (
    <section id="approach" className="bg-[#09251F] text-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Headings */}
        <div className="mb-20 md:mb-28 max-w-4xl">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-[#D5A547] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 font-['Inter',sans-serif]"
          >
            How We Work
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight mb-6 font-['Plus_Jakarta_Sans',sans-serif] leading-tight"
          >
            From Research to Real-World Impact.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl font-['Inter',sans-serif] font-medium leading-relaxed"
          >
            Our four-stage philosophy drives everything we do — transforming complex challenges into practical, scalable solutions.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line (Animated) */}
          <div className="hidden md:block absolute top-[23px] left-[2%] right-[5%] h-[1px] bg-white/10 z-0 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#D5A547]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Mobile Connecting Line (Animated) */}
          <div className="md:hidden absolute top-[2%] left-[23px] bottom-[5%] w-[1px] bg-white/10 z-0 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-[#D5A547]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                className="relative group flex flex-row md:flex-col items-start gap-6 md:gap-8 cursor-default"
              >
                {/* Node */}
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#09251F] border border-white/20 group-hover:border-[#D5A547] flex items-center justify-center transition-colors duration-500 z-10 relative">
                  <span className="text-white/50 group-hover:text-[#D5A547] text-sm font-bold tracking-wider transition-colors duration-500 font-['Inter',sans-serif]">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex flex-col md:pr-6 pt-1 md:pt-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-3 group-hover:text-[#D5A547] transition-colors duration-500 font-['Plus_Jakarta_Sans',sans-serif]">
                    {stage.title}
                  </h3>
                  <p className="text-base text-white/60 font-['Inter',sans-serif] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}