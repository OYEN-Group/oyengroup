'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ImpactSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[600px] flex items-center bg-brand-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/impact_bg.jpg"
          alt="Architectural overview showing progress and development"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/70 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Driving Progress. <br />
            Creating Opportunities.
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            We work with partners, businesses and communities to build solutions that create jobs, strengthen industries and support sustainable development.
          </p>
          <Link 
            href="/about" 
            className="inline-flex items-center gap-3 border border-white hover:bg-white hover:text-brand-primary px-8 py-4 rounded-sm font-semibold transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
