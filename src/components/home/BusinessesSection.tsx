'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 'oyen-grid',
    name: 'OYEN GRID',
    description: 'Training & Programme Management.',
    image: '/images/oyen_grid.jpg',
    link: '/products',
  },
  {
    id: 'verba',
    name: 'VERBA',
    description: 'AI-Powered Academic Research & Writing.',
    image: '/images/verba.jpg',
    link: '/products',
  },
  {
    id: 'orivex',
    name: 'ORIVEX',
    description: 'Petroleum Depot Operational Intelligence.',
    image: '/images/energy.jpg',
    link: '/products',
  }
];

export default function BusinessesSection() {
  return (
    <section className="bg-brand-offwhite py-32 md:py-48">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-accent text-sm font-bold tracking-widest">02</span>
              <div className="h-[1px] w-12 bg-brand-accent"></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Product Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tight">
              Our Products
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-lg md:text-xl text-brand-muted font-light max-w-lg lg:ml-auto">
              Three products. Different markets. One approach — building technology around real operational needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <Link href={product.link} className="group block relative h-[550px] overflow-hidden bg-black shadow-lg">
                <Image quality={100}
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  unoptimized={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111719] via-[#111719]/40 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:-translate-y-1 transition-transform duration-500">
                    {product.name}
                  </h3>
                  <div className="h-[2px] w-8 bg-brand-accent mb-6 transform origin-left transition-all duration-500 group-hover:w-16" />
                  <p className="text-lg text-white/80 font-light mb-12 group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-3 text-[#D5A547] font-bold tracking-[0.2em] uppercase text-[10px] mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                    Explore Product 
                    <span className="transform transition-transform duration-500 group-hover:translate-x-2">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
