'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const businesses = [
  {
    id: 'energy',
    name: 'Oyen Energy',
    description: 'Innovative solutions in the energy and petroleum value chain.',
    image: '/images/energy.jpg',
    link: '/businesses/energy',
  },
  {
    id: 'tech',
    name: 'Oyen Tech',
    description: 'Technology solutions for smarter and more efficient operations.',
    image: '/images/tech.jpg',
    link: '/businesses/tech',
  },
  {
    id: 'agro',
    name: 'Oyen Agro',
    description: 'Modern agricultural solutions for food security and economic growth.',
    image: '/images/agro.jpg',
    link: '/businesses/agro',
  }
];

export default function BusinessesSection() {
  return (
    <section className="bg-brand-offwhite py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">
            Our Businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={business.link} className="group block relative h-[500px] overflow-hidden rounded-sm">
                <Image
                  src={business.image}
                  alt={business.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/40 group-hover:bg-brand-primary/50 transition-colors duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-bold mb-4">{business.name}</h3>
                  <p className="text-lg text-white/90 mb-8 max-w-sm">
                    {business.description}
                  </p>
                  
                  <div className="flex items-center gap-3 text-brand-accent font-medium tracking-wide uppercase text-sm mt-auto">
                    Explore Business 
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
