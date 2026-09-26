'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="bg-white py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-12 text-center max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-12 leading-tight"
        >
          A Group Building Real Solutions <br className="hidden md:block" />
          For People And Communities.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-brand-muted max-w-4xl mx-auto leading-relaxed mb-16"
        >
          Oyen Group is a diversified business group focused on building and scaling innovative solutions across key sectors. We combine people, technology and strategic partnerships to create sustainable value and drive meaningful impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            href="/about" 
            className="inline-flex items-center text-brand-primary font-semibold text-sm uppercase tracking-widest hover:text-brand-accent transition-colors duration-300 group"
          >
            <span className="border-b border-brand-primary group-hover:border-brand-accent pb-1">Learn More About Us</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
