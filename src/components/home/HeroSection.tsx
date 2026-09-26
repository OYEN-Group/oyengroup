'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-primary">
      <div className="absolute inset-0 w-full h-full">
        <Image quality={100}
          src="/images/hero.jpg"
          alt="Premium aerial photograph of energy infrastructure"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-primary/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 via-transparent to-brand-primary/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center text-white mt-32 lg:mt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-accent uppercase tracking-widest text-sm font-semibold mb-6"
        >
          People. Ideas. Technology. Real Impact.
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight mb-8"
        >
          Research. Build. Solve. Scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl text-white/90 font-medium mb-12 max-w-2xl mx-auto"
        >
          Technology built to solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/products"
            className="group flex items-center gap-3 bg-brand-accent hover:bg-brand-accent-soft text-brand-primary px-8 py-4 rounded-sm font-semibold transition-all duration-300"
          >
            Explore Our Products
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-brand-accent font-medium tracking-wide transition-colors duration-300 uppercase text-sm border-b border-transparent hover:border-brand-accent pb-1"
          >
            Discover OYEN GROUP
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
