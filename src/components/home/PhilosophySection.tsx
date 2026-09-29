'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const VALUES = [
  { title: 'People first.', desc: 'Empowering individuals and communities through empathetic leadership and support.' },
  { title: 'Integrity.', desc: 'Doing the right thing, always, with transparency and unwavering ethical standards.' },
  { title: 'Practical innovation.', desc: 'Creating solutions that actually work and solve real-world problems effectively.' },
  { title: 'Excellence.', desc: 'Setting the standard in everything we do, pushing boundaries of what is possible.' },
  { title: 'Long-term impact.', desc: 'Building for a sustainable future that benefits generations to come.' }
];

export default function PhilosophySection() {
  return (
    <section className="relative py-32 lg:py-48 bg-[#09251F] overflow-hidden">
      {/* Background Image with Dark Green Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-slide2.jpg" alt="Background" fill className="object-cover opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09251F] via-[#09251F]/90 to-[#09251F]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Heading */}
        <div className="mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[#D5A547] text-sm font-bold tracking-[0.2em] uppercase mb-8 font-['Inter',sans-serif]"
          >
            Our Identity
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] text-white leading-tight"
          >
            What Drives Us.
          </motion.h2>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="bg-white p-12 lg:p-16 rounded-[32px] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150"></div>
            <h3 className="relative text-[#111719] text-sm font-bold uppercase tracking-[0.2em] mb-8 font-['Inter',sans-serif] pb-4 border-b border-gray-200">
              Our Vision
            </h3>
            <p className="relative text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] font-['Plus_Jakarta_Sans',sans-serif] text-[#111719]">
              A more capable Africa powered by technology, talent and innovation.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="bg-[#111719] p-12 lg:p-16 rounded-[32px] border border-white/10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1a2327] rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150"></div>
            <h3 className="relative text-[#D5A547] text-sm font-bold uppercase tracking-[0.2em] mb-8 font-['Inter',sans-serif] pb-4 border-b border-white/10">
              Our Mission
            </h3>
            <p className="relative text-2xl md:text-3xl leading-relaxed font-['Inter',sans-serif] font-medium text-white/90">
              To research, build and deploy practical solutions that solve real problems and create lasting value for industries and communities.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="border-t border-white/10 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h3 className="text-[#D5A547] text-sm font-bold uppercase tracking-[0.2em] font-['Inter',sans-serif]">
              Our Values
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {VALUES.map((val, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-[#D5A547]/50 flex items-center justify-center text-[#D5A547] mb-6 group-hover:bg-[#D5A547] group-hover:text-[#09251F] transition-all duration-300 font-bold">
                  {i + 1}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#D5A547] transition-colors">
                  {val.title}
                </h4>
                <p className="text-lg leading-relaxed text-white/60 font-['Inter',sans-serif] group-hover:text-white/90 transition-colors">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}