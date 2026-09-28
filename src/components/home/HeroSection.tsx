'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[110vh] lg:min-h-[120vh] overflow-hidden bg-brand-primary">
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full bg-black"
      >
        <Image
          src="/images/hero-new.jpg"
          alt="Premium aerial photograph of OYEN GROUP infrastructure"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          unoptimized={true}
        />
        {/* Cinematic gradient strictly for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111719]/80 via-transparent to-[#111719]/80" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full min-h-[100vh] flex flex-col items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12 text-center text-white mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[64px] font-bold max-w-4xl mx-auto leading-[1.2] mb-8 tracking-tight text-white/95 font-['Plus_Jakarta_Sans',sans-serif]"
          >
            Research. Build.<br />
            Solve. Scale.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[17px] md:text-[19px] text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-['Inter',sans-serif]"
          >
            Building practical technology solutions for real-world challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center"
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 bg-white text-[#111719] hover:bg-[#F5F7F6] px-8 py-3.5 rounded-full font-bold transition-all duration-300 uppercase tracking-widest text-[13px] shadow-lg hover:shadow-xl font-['Inter',sans-serif]"
            >
              DISCOVER OYEN
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}