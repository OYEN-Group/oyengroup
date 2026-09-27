'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
 return (
 <section className="relative w-full min-h-[120vh] flex items-center justify-center overflow-hidden bg-brand-primary">
 <motion.div 
 initial={{ scale: 1.05, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 transition={{ duration: 1.2, ease: "easeOut" }}
 className="absolute inset-0 w-full h-full bg-black"
 >
 <Image
 src="/images/hero.jpg"
 alt="Premium aerial photograph of energy infrastructure"
 fill
 priority
 className="object-cover object-center"
 quality={100}
 unoptimized={true}
 />
 {/* Cinematic gradient strictly for text readability */}
 <div className="absolute inset-0 bg-gradient-to-b from-[#111719]/80 via-transparent to-[#111719]/80" />
 <div className="absolute inset-0 bg-black/20" />
 </motion.div>

 <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center text-white mt-20">
 <motion.p
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="text-brand-accent uppercase tracking-[0.25em] text-base md:text-base font-semibold mb-8"
 >
 People. Ideas. Technology. Real Impact.
 </motion.p>
 
 <motion.h1
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.4 }}
 className="text-6xl md:text-7xl lg:text-8xl font-bold max-w-5xl mx-auto leading-[1.1] mb-10 tracking-tight text-white/95"
 >
 Research. Build. Solve. Scale.
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.5 }}
 className="text-xl md:text-2xl text-white/95 mb-16 max-w-3xl mx-auto leading-relaxed"
 >
 We research real-world challenges and develop practical technology for learning, academic research and industrial operations.
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.6 }}
 className="flex flex-col sm:flex-row items-center justify-center gap-8"
 >
 <Link
 href="/products"
 className="group flex items-center gap-4 bg-brand-accent hover:bg-[#c29541] text-brand-primary px-10 py-5 font-bold tracking-wide transition-colors duration-300 uppercase text-base"
 >
 Explore Our Products
 <span className="group-hover:translate-x-1 transition-transform">→</span>
 </Link>
 <Link
 href="/about"
 className="text-white hover:text-brand-accent font-semibold tracking-widest transition-colors duration-300 uppercase text-base border-b border-transparent hover:border-brand-accent pb-1 flex items-center gap-2"
 >
 Discover OYEN GROUP
 <span className="text-brand-accent group-hover:text-white transition-colors text-lg leading-none">↗</span>
 </Link>
 </motion.div>
 </div>
 </section>
 );
}
