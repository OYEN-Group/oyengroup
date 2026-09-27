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
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-brand-accent text-sm font-bold tracking-widest">03</span>
            <div className="h-[1px] w-12 bg-brand-accent"></div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Product Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tight max-w-3xl">
            Technology built for real operational needs.
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Image Container */}
                <div className={`relative aspect-[16/10] w-full rounded-lg overflow-hidden shadow-2xl ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-top"
                    quality={100}
                    unoptimized={true}
                  />
                  <div className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-sm px-4 py-2 text-xs font-bold tracking-widest text-brand-accent uppercase rounded-sm border border-white/10">
                    Prototype Concept
                  </div>
                </div>
                
                {/* Text Container */}
                <div className={`flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-primary mb-3 tracking-tight">
                    {product.name}
                  </h3>
                  <h4 className="text-lg md:text-xl text-brand-accent font-medium mb-8">
                    {product.subtitle}
                  </h4>
                  <p className="text-lg text-brand-muted font-light leading-relaxed mb-10">
                    {product.description}
                  </p>
                  
                  <div>
                    <Link href={product.link} className="group inline-flex items-center gap-3 text-brand-primary font-bold text-xs uppercase tracking-[0.2em] transition-colors duration-300">
                      <span className="border-b border-brand-primary group-hover:border-brand-accent pb-1 transition-colors">
                        Explore {product.name}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform text-brand-accent">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
