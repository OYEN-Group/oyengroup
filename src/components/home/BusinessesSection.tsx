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
    <section className="bg-brand-offwhite py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">
            Our Products
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={product.link} className="group block relative h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/40 group-hover:bg-brand-primary/50 transition-colors duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                  <p className="text-lg text-white/90 mb-8 max-w-sm">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-3 text-brand-accent font-medium tracking-wide uppercase text-sm mt-auto">
                    Explore Product 
                    <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
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
