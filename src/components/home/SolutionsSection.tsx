'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stages = [
  { id: 'research', title: 'Research', description: 'Understand real problems.', bg: '/images/tech.jpg' },
  { id: 'build', title: 'Build', description: 'Develop practical technology.', bg: '/images/hero.jpg' },
  { id: 'solve', title: 'Solve', description: 'Address operational needs.', bg: '/images/solutions_bg.jpg' },
  { id: 'scale', title: 'Scale', description: 'Create lasting value.', bg: '/images/impact_bg.jpg' },
];

export default function SolutionsSection() {
  return (
    <section id="approach" className="bg-brand-primary text-white">
      {/* Hero Part of Solutions */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/solutions_bg.jpg"
            alt="From Research to Real-World Solutions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              From Research to <br />
              Real-World Solutions.
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Our four-stage philosophy drives everything we do to create practical, lasting impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Solutions Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-brand-secondary">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-64 lg:h-80 group overflow-hidden border-r border-b border-brand-primary/20 last:border-r-0"
          >
            <Image
              src={stage.bg}
              alt={stage.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-brand-primary/50 group-hover:bg-brand-primary/20 transition-colors duration-500" />
            
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-2 group-hover:-translate-y-2 transition-transform duration-300 text-brand-accent">
                {stage.title}
              </h3>
              <p className="text-lg text-white/90 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-2 transition-all duration-300">
                {stage.description}
              </p>
              <div className="h-[2px] w-0 bg-brand-accent group-hover:w-12 transition-all duration-500 mt-2" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
