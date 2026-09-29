'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

const products = [
  {
    id: '01',
    name: 'OYEN GRID',
    subtitle: 'Training & Programme Management',
    image: '/images/showcase/grid_ui.png',
    link: '/products/oyen-grid',
  },
  {
    id: '02',
    name: 'VERBA',
    subtitle: 'AI-Powered Academic Research & Writing',
    image: '/images/showcase/verba_ui.png',
    link: '/products/verba',
  },
  {
    id: '03',
    name: 'ORIVEX',
    subtitle: 'Petroleum Depot Operational Intelligence',
    image: '/images/showcase/orivex_ui.png',
    link: '#',
    comingSoon: true,
  }
];

export default function BusinessesSection() {
  return (
    <section className="bg-brand-offwhite py-32 md:py-48">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#111719] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Technology
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const innerContent = (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative w-full aspect-[4/5] overflow-hidden rounded-md shadow-lg"
              >
                {/* Image Background */}
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover object-center transition-transform duration-1000 ease-out ${
                    product.comingSoon ? 'blur-[8px] scale-110 opacity-60' : 'group-hover:scale-105'
                  }`}
                  quality={100}
                  unoptimized={true}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-colors duration-700 ${
                  !product.comingSoon ? 'group-hover:from-black/95 group-hover:via-black/50' : 'from-black/80'
                }`} />
                
                {/* Content Overlay */}
                <div className={`absolute inset-0 p-8 flex flex-col justify-end text-left transition-all ${
                  product.comingSoon ? 'blur-[4px] select-none opacity-50' : ''
                }`}>
                  <div className="mb-4">
                    <span className="text-brand-accent text-sm font-bold tracking-[0.2em] mb-2 block font-['Inter',sans-serif]">
                      {product.id} — {product.name}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-snug font-['Plus_Jakarta_Sans',sans-serif]">
                      {product.subtitle}
                    </h3>
                  </div>
                  {!product.comingSoon && (
                    <CTAButton 
                      text="Explore Product"
                      theme="light"
                    />
                  )}
                </div>

                {/* Coming Soon Badge */}
                {product.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="bg-black/50 px-8 py-4 rounded backdrop-blur-md border border-white/20 shadow-xl">
                      <span className="text-white font-bold tracking-[0.2em] uppercase text-sm font-['Plus_Jakarta_Sans',sans-serif]">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            );

            if (product.comingSoon) {
              return (
                <div key={product.id} className="block w-full cursor-not-allowed">
                  {innerContent}
                </div>
              );
            }

            return (
              <Link key={product.id} href={product.link} className="group block w-full">
                {innerContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}