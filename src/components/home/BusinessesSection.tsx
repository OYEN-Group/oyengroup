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
              <Link href={product.link} className="group block relative h-[600px] lg:h-[700px] overflow-hidden rounded-sm shadow-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09251F]/90 via-[#09251F]/40 to-transparent group-hover:from-[#09251F] transition-colors duration-500" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:-translate-y-2 transition-transform duration-300">{product.name}</h3>
                  <p className="text-lg text-white/90 mb-10 max-w-sm group-hover:-translate-y-2 transition-transform duration-300 delay-75">
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
