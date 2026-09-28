'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export default function ImpactSection() {
 return (
 <section className="relative w-full h-[70vh] min-h-[600px] flex items-center bg-brand-primary">
 <div className="absolute inset-0">
 <Image quality={100}
 src="/images/impact_bg.jpg"
 alt="Architectural overview showing progress and development"
 fill
 className="object-cover"
 />
 {/* Lighter overlay to let the image shine */}
 <div className="absolute inset-0 bg-gradient-to-t from-[#111719]/90 via-[#111719]/40 to-transparent" />
 </div>

 <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col justify-end h-full pb-32">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 className="max-w-4xl"
 >
 <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10 leading-[1.1] tracking-tight text-white drop-shadow-lg">
 Driving Progress. <br />
 <span className="text-brand-accent">Creating Opportunities.</span>
 </h2>
 <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl">
 We work with partners, businesses and communities to build solutions that create jobs, strengthen industries and support sustainable development.
 </p>
 <CTAButton 
 href="/about" 
 text="Our Story"
 theme="light"
 />
 </motion.div>
 </div>
 </section>
 );
}
