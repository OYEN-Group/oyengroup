'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="bg-white py-32 md:py-48">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column - Oversized Typography */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-brand-accent text-sm font-bold tracking-widest">01</span>
                <div className="h-[1px] w-12 bg-brand-accent"></div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">About Oyen Group</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-primary leading-[1.1] tracking-tight">
                We research problems and build technology around solving them.
              </h2>
            </motion.div>
          </div>

          {/* Right Column - Description & CTA */}
          <div className="lg:col-span-5 lg:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col border-l border-gray-200 pl-8"
            >
              <p className="text-xl md:text-2xl text-brand-muted font-light leading-relaxed mb-12">
                OYEN GROUP is a technology and research company focused on solving real problems through practical software products, data-driven solutions and applied research.
              </p>
              
              <div>
                <Link 
                  href="/about" 
                  className="group inline-flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-[0.2em] transition-colors duration-300"
                >
                  <span className="border-b border-brand-primary group-hover:border-brand-accent pb-1 transition-colors">
                    Discover Our Story
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform text-brand-accent">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
