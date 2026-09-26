'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const solutions = [
  { id: 'energy-infra', title: 'Energy Infrastructure', bg: '/images/energy.jpg' },
  { id: 'digital', title: 'Digital & Automation', bg: '/images/tech.jpg' },
  { id: 'agri', title: 'Agricultural Solutions', bg: '/images/agro.jpg' },
  { id: 'support', title: 'Industrial Support Services', bg: '/images/solutions_bg.jpg' },
  { id: 'partners', title: 'Strategic Partnerships', bg: '/images/hero.jpg' },
];

export default function SolutionsSection() {
  return (
    <section className="bg-brand-primary text-white">
      {/* Hero Part of Solutions */}
      <div className="relative w-full h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/solutions_bg.jpg"
            alt="Innovative Solutions"
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
              Innovative Solutions <br />
              Across Key Sectors.
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              We develop and deploy practical solutions that improve operations, enhance productivity and create long-term value.
            </p>
            <Link 
              href="/businesses" 
              className="inline-flex items-center gap-3 bg-white text-brand-primary hover:bg-brand-accent px-8 py-4 rounded-sm font-semibold transition-all duration-300 group"
            >
              Learn More
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Solutions Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-brand-secondary">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative h-64 lg:h-80 group cursor-pointer overflow-hidden border-r border-b border-brand-primary/20 last:border-r-0"
          >
            <Image
              src={solution.bg}
              alt={solution.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-brand-primary/50 group-hover:bg-brand-primary/20 transition-colors duration-500" />
            
            <div className="relative z-10 h-full p-6 flex flex-col justify-end">
              <h3 className="text-xl font-semibold mb-2 group-hover:-translate-y-2 transition-transform duration-300">
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
