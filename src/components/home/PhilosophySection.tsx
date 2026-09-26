'use client';

import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section className="bg-white py-32 lg:py-48">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-muted border-l-2 border-brand-accent pl-4">
              Our Philosophy
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-primary leading-[1.1] tracking-tight">
              Research. <span className="text-brand-accent">Build.</span> Solve. <span className="text-brand-accent">Scale.</span>
            </h3>
            <p className="mt-8 text-xl text-brand-muted max-w-2xl leading-relaxed">
              Technology built to solve real problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
