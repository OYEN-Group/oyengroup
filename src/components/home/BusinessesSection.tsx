'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 'oyen-grid',
    name: 'OYEN GRID',
    subtitle: 'Training and Programme Management',
    description: 'Introduce programme planning, participant records, facilitator coordination and attendance tracking. A connected environment for structured learning.',
    image: '/images/showcase/grid_ui.png',
    link: '/products/oyen-grid',
  },
  {
    id: 'verba',
    name: 'VERBA',
    subtitle: 'AI-Powered Academic Research & Writing',
    description: 'Present its intended research, writing, citation management and academic workflow. Streamlining the scholarly process from discovery to publication.',
    image: '/images/showcase/verba_ui.png',
    link: '/products/tech',
  },
  {
    id: 'orivex',
    name: 'ORIVEX',
    subtitle: 'Petroleum Depot Operational Intelligence',
    description: 'Demonstrate how depot information, inventory, equipment and operational indicators can be brought into a connected environment for comprehensive oversight.',
    image: '/images/showcase/orivex_ui.png',
    link: '/products/energy',
  }
];

export default function BusinessesSection() {
  return (
    <section className="bg-brand-offwhite py-32 md:py-48">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-brand-accent text-sm font-bold tracking-widest">03</span>
            <div className="h-[1px] w-12 bg-brand-accent"></div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Product Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tight">
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  quality={100}
                  unoptimized={true}
                />
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col flex-grow p-8 md:p-10">
                <h3 className="text-2xl font-bold text-brand-primary mb-2 tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <h4 className="text-sm text-brand-accent font-semibold uppercase tracking-wider mb-6">
                  {product.subtitle}
                </h4>
                <p className="text-brand-muted font-light leading-relaxed mb-10 flex-grow">
                  {product.description}
                </p>
                
                <div className="mt-auto">
                  <Link href={product.link} className="inline-flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-[0.2em] transition-colors duration-300 border-b border-gray-200 group-hover:border-brand-accent pb-1">
                    <span>Explore {product.name}</span>
                    <span className="group-hover:translate-x-1 transition-transform text-brand-accent">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
