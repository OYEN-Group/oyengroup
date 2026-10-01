'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ParallaxImage from '@/components/animations/ParallaxImage';

const solutionsRow1 = [
  { id: 'training', title: 'Training & Programme Management', bg: '/images/oyen_grid.jpg', href: '/products/oyen-grid' },
  { id: 'academic', title: 'Academic Research & Writing', bg: '/images/verba.jpg', href: '/products/academic' },
  { id: 'industrial', title: 'Industrial Intelligence', bg: '/images/energy.jpg', href: '/products/industrial', comingSoon: true },
];

const solutionsRow2 = [
  { id: 'digital', title: 'Digital Solutions & Applied Research', bg: '/images/tech.jpg', href: '/products/digital', comingSoon: true },
  { id: 'strategic', title: 'Strategic Collaboration', bg: '/images/partnership.jpg', href: '/products/collaboration' },
];

export default function SolutionsAreasSection() {
  return (
    <section className="relative w-full bg-brand-offwhite pb-24 lg:pb-32">
      {/* Background Industrial Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <ParallaxImage
          src="/images/hero-slide3.png"
          alt="Industrial Manufacturing Facility"
          className="object-cover object-center w-full h-full"
          containerClassName="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Overlapping Content Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 -mt-[80px] md:-mt-[100px]">
        <div className="bg-white w-full p-6 md:p-10 lg:p-16 shadow-sm">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <Link href="/products" className="inline-block">
              <h2 className="text-[28px] md:text-[36px] font-bold text-brand-primary hover:text-[#D5A547] transition-colors tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Solutions
              </h2>
            </Link>
          </div>

          {/* Cards Grid - Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            {solutionsRow1.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={solution.href} className="group block relative w-full aspect-[16/11] md:aspect-[4/3] overflow-hidden bg-[#111719]">
                  <Image 
                    src={solution.bg}
                    alt={solution.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${solution.comingSoon ? 'blur-[4px] scale-105 opacity-80' : 'group-hover:scale-105'}`}
                    quality={90}
                    unoptimized={true}
                  />
                  <div className={`absolute inset-0 transition-colors duration-500 ${solution.comingSoon ? 'bg-black/60' : 'bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95'}`} />
                  
                  <div className={`absolute inset-0 p-6 flex flex-col justify-end md:justify-center items-center text-center z-10 ${solution.comingSoon ? 'opacity-100' : ''}`}>
                    <h3 className="text-[17px] md:text-[19px] font-bold text-white leading-snug font-['Plus_Jakarta_Sans',sans-serif] md:-mt-4">
                      {solution.title}
                    </h3>
                    {solution.comingSoon && (
                      <div className="mt-4 bg-black/50 px-4 py-1.5 rounded-sm font-semibold text-xs text-white uppercase tracking-widest font-['Inter',sans-serif] border border-white/20 backdrop-blur-md">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Cards Grid - Row 2 (Centered on large screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-[66.666%] lg:mx-auto gap-4 md:gap-6">
            {solutionsRow2.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link href={solution.href} className="group block relative w-full aspect-[16/11] md:aspect-[4/3] overflow-hidden bg-[#111719]">
                  <Image 
                    src={solution.bg}
                    alt={solution.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${solution.comingSoon ? 'blur-[4px] scale-105 opacity-80' : 'group-hover:scale-105'}`}
                    quality={90}
                    unoptimized={true}
                  />
                  <div className={`absolute inset-0 transition-colors duration-500 ${solution.comingSoon ? 'bg-black/60' : 'bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95'}`} />
                  
                  <div className={`absolute inset-0 p-6 flex flex-col justify-end md:justify-center items-center text-center z-10 ${solution.comingSoon ? 'opacity-100' : ''}`}>
                    <h3 className="text-[17px] md:text-[19px] font-bold text-white leading-snug font-['Plus_Jakarta_Sans',sans-serif] md:-mt-4">
                      {solution.title}
                    </h3>
                    {solution.comingSoon && (
                      <div className="mt-4 bg-black/50 px-4 py-1.5 rounded-sm font-semibold text-xs text-white uppercase tracking-widest font-['Inter',sans-serif] border border-white/20 backdrop-blur-md">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}