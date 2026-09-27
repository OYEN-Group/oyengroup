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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {solutionsRow1.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/products" className="group block relative h-[400px] lg:h-[450px] overflow-hidden bg-[#111719]">
                <Image 
                  src={solution.bg}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  quality={100}
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111719]/90 via-[#111719]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                  <h3 className="text-2xl font-bold leading-snug mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                    {solution.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full max-w-[80px]" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {solutionsRow2.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link href="/products" className="group block relative h-[400px] lg:h-[450px] overflow-hidden bg-[#111719]">
                <Image 
                  src={solution.bg}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  quality={100}
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111719]/90 via-[#111719]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
                  <h3 className="text-2xl font-bold leading-snug mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                    {solution.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full max-w-[80px]" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
