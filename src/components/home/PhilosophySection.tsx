'use client';

import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">
            Our Identity
          </h2>
          <div className="w-12 h-1 bg-brand-primary mx-auto" />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              Our Vision
            </h3>
            <p className="text-2xl lg:text-3xl font-bold text-brand-primary leading-snug">
              A more capable Africa powered by technology, talent and innovation.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:border-l border-brand-primary/10 md:pl-8 lg:pl-16"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              Our Mission
            </h3>
            <p className="text-xl lg:text-2xl text-brand-muted leading-relaxed">
              To research, build and deploy practical solutions that solve real problems and create lasting value.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:border-l border-brand-primary/10 md:pl-8 lg:pl-16"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-muted mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              Our Values
            </h3>
            <div className="flex flex-col gap-4">
              {['People first.', 'Integrity.', 'Practical innovation.', 'Excellence.', 'Long-term impact.'].map((value, i) => (
                <div key={i} className="text-lg text-brand-primary font-medium">
                  {value}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
