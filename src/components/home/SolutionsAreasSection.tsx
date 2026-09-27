'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const solutionsRow1 = [
  { id: 'training', title: 'Training & Programme Management', bg: '/images/oyen_grid.jpg' },
  { id: 'academic', title: 'Academic Research & Writing', bg: '/images/verba.jpg' },
  { id: 'industrial', title: 'Industrial Intelligence', bg: '/images/energy.jpg' },
];

const solutionsRow2 = [
  { id: 'digital', title: 'Digital Solutions & Applied Research', bg: '/images/tech.jpg' },
  { id: 'strategic', title: 'Strategic Collaboration', bg: '/images/partnership.jpg' },
];

export default function SolutionsAreasSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight mb-6">
            Our Solutions
          </h2>
          <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto">
            Practical technology addressing real-world challenges.
          </p>
        </motion.div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {solutionsRow1.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/products" className="group block relative h-[350px] lg:h-[400px] overflow-hidden bg-brand-primary">
                <Image quality={100}
                  src={solution.bg}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-brand-primary/40 group-hover:bg-brand-primary/60 transition-colors duration-500" />
                
                <div className="absolute inset-0 p-8 flex items-center justify-center text-center text-white z-10">
                  <h3 className="text-2xl font-bold max-w-[250px] leading-snug">
                    {solution.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
          {solutionsRow2.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link href="/products" className="group block relative h-[350px] lg:h-[400px] overflow-hidden bg-brand-primary">
                <Image quality={100}
                  src={solution.bg}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-brand-primary/40 group-hover:bg-brand-primary/60 transition-colors duration-500" />
                
                <div className="absolute inset-0 p-8 flex items-center justify-center text-center text-white z-10">
                  <h3 className="text-2xl font-bold max-w-[250px] leading-snug">
                    {solution.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
