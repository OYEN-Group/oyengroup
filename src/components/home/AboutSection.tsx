'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1100px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Small gold section label */}
          <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#D5A547] mb-6 block">
            OYEN GROUP
          </span>
          
          {/* Large but balanced, centred heading */}
          <h2 className="text-3xl md:text-[44px] font-bold text-[#111719] leading-tight tracking-tight mb-8 max-w-4xl font-['Plus_Jakarta_Sans',sans-serif]">
            OYEN: A Culture of Innovation
          </h2>
          
          {/* Centred introductory paragraph */}
          <p className="text-[17px] md:text-[19px] text-[#59636D] leading-[1.7] max-w-4xl mx-auto mb-12 font-['Inter',sans-serif]">
            OYEN GROUP is a technology and research company focused on solving real-world problems through practical software products, data-driven solutions and applied research. We develop technology that supports learning, research and industrial operations, turning ideas into solutions that create lasting value.
          </p>
          
          {/* Subtle text-link CTA */}
          <Link 
            href="/about" 
            className="group inline-flex items-center gap-3 text-[#111719] font-bold text-[14px] md:text-[15px] uppercase tracking-[0.2em] transition-colors duration-300"
          >
            <span className="border-b border-[#111719] group-hover:border-[#D5A547] pb-1 transition-colors">
              DISCOVER OUR STORY
            </span>
            <span className="group-hover:translate-x-1 transition-transform text-[#D5A547]">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}