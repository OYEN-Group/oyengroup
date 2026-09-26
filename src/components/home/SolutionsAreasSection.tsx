'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const solutions = [
  { id: 'learning', title: 'Learning & Programme Management', bg: '/images/tech.jpg' },
  { id: 'academic', title: 'Academic Research & Writing', bg: '/images/hero.jpg' },
  { id: 'industrial', title: 'Industrial Intelligence', bg: '/images/energy.jpg' },
  { id: 'digital', title: 'Digital Solutions & Applied Research', bg: '/images/solutions_bg.jpg' },
];

export default function SolutionsAreasSection() {
  return (
    <section className="bg-brand-primary text-white pt-24 lg:pt-32">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Solutions</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Applying advanced technology and strategic insights across key application areas to deliver measurable results.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-brand-secondary">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-[400px] lg:h-[500px] group overflow-hidden border-r border-b border-brand-primary/20 last:border-r-0 cursor-pointer"
          >
            <Image
              src={solution.bg}
              alt={solution.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/40 to-transparent group-hover:from-brand-primary/95 transition-colors duration-500" />
            
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                {solution.title}
              </h3>
              <div className="h-[2px] w-0 bg-brand-accent group-hover:w-12 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
