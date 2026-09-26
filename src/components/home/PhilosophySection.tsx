'use client';

import { motion } from 'framer-motion';

export default function PhilosophySection() {
  return (
    <section className="bg-white py-24 lg:py-32">
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
              Our Identity
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="space-y-16">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4">Our Vision</h3>
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary leading-[1.1] tracking-tight max-w-3xl">
                  A more capable Africa powered by technology, talent and innovation.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4">Our Mission</h3>
                <p className="text-xl md:text-2xl text-brand-muted leading-relaxed max-w-3xl">
                  To research, build and deploy practical solutions that solve real problems and create lasting value.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4">Our Values</h3>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {['People first.', 'Integrity.', 'Practical innovation.', 'Excellence.', 'Long-term impact.'].map((value, i) => (
                    <div key={i} className="flex items-center gap-3 text-lg text-brand-primary font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
