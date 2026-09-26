'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function TeamSection() {
  return (
    <section className="bg-brand-offwhite">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-white">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-muted border-l-2 border-brand-accent pl-4 mb-8">
              Join Our Team
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight mb-8">
              Build What's Next With Us.
            </h3>
            <p className="text-lg md:text-xl text-brand-muted mb-12 leading-relaxed">
              Join a growing community of thinkers, researchers, developers and problem-solvers working to turn ideas into practical technology.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 bg-brand-primary text-white hover:bg-brand-accent hover:text-brand-primary px-8 py-4 rounded-sm font-semibold transition-all duration-300 group"
            >
              Explore Opportunities
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <Image 
            src="/images/partnership.jpg" 
            alt="Corporate Collaboration" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply" />
        </div>

      </div>
    </section>
  );
}
