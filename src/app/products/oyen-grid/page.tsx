'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const features = [
 {
 title: 'Programme Design & Management',
 description: 'Structure educational programmes, coordinate learning activities and manage delivery from one connected environment.',
 image: '/images/tech.jpg',
 layout: 'image-left'
 },
 {
 title: 'Participant Management',
 description: 'Organise participant information and maintain visibility across educational activities.',
 image: '/images/energy.jpg',
 layout: 'text-left'
 },
 {
 title: 'Facilitator Coordination',
 description: 'Support facilitator assignments, programme coordination and delivery workflows.',
 image: '/images/partnership.jpg',
 layout: 'image-left'
 },
 {
 title: 'Attendance & Progress Tracking',
 description: 'Maintain records of attendance and monitor participant progress throughout delivery lifecycles.',
 image: '/images/tech.jpg',
 layout: 'text-left'
 }
];

export default function OyenGridPage() {
 return (
 <main className="bg-white min-h-screen">
 {/* 1. PAGE HERO */}
 <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-[#111719] overflow-hidden">
 {/* Bright, sharp Photographic Background */}
 <div className="absolute inset-0 z-0">
 <Image 
 src="/images/tech.jpg" 
 alt="OYEN GRID Platform"
 fill
 className="object-cover"
 quality={100}
 unoptimized={true}
 priority
 />
 {/* Subtle gradient to keep the centered white text readable without washing out the image */}
 <div className="absolute inset-0 bg-black/40" />
 <div className="absolute inset-0 bg-gradient-to-b from-[#111719]/60 via-transparent to-[#111719]/80" />
 </div>
 
 <div className="container relative z-10 mx-auto px-6 lg:px-12 text-center mt-16">
 <motion.span 
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 className="text-base md:text-base font-bold uppercase tracking-[0.25em] text-[#D5A547] block mb-4 md:mb-6"
 >
 AN OYEN GROUP PRODUCT
 </motion.span>
 
 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.1 }}
 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4 md:mb-6"
 >
 OYEN GRID
 </motion.h1>
 
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.2 }}
 className="text-xl md:text-3xl text-white/95 mb-8 md:mb-12 tracking-wide"
 >
 Enterprise Learning Platform
 </motion.h2>
 
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.3 }}
 className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
 >
 A software platform for organisations to run structured learning systems — from design and participant management to facilitators, attendance, progress and operations.
 </motion.p>
 </div>
 </section>

 {/* 2 & 3. MAIN CONTENT LAYOUT / ALTERNATING ROWS */}
 <section className="py-24 md:py-32 bg-white">
 <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col gap-16 md:gap-20">
 {features.map((feature, index) => {
 const isImageLeft = feature.layout === 'image-left';
 
 return (
 <motion.div 
 key={index}
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.7 }}
 className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
 >
 {/* Image Container */}
 <div className={`relative aspect-[4/3] w-full bg-[#FAFAFA] overflow-hidden ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
 <Image 
 src={feature.image}
 alt={feature.title}
 fill
 className="object-cover"
 quality={100}
 unoptimized={true}
 />
 {/* Fallback styling if images don't exist yet */}
 <div className="absolute inset-0 bg-gray-200 -z-10 flex items-center justify-center text-gray-600 text-base">
 {feature.title} Image
 </div>
 </div>
 
 {/* Text Container */}
 <div className={`flex flex-col justify-center ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
 <h3 className="text-3xl md:text-4xl font-bold text-[#111719] mb-6 tracking-tight leading-tight">
 {feature.title}
 </h3>
 <div className="w-12 h-1 bg-[#D5A547] mb-8" />
 <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
 {feature.description}
 </p>
 </div>
 </motion.div>
 );
 })}
 </div>
 </section>

 {/* 5. CLOSING SECTION */}
 <section className="bg-[#111719] py-24 md:py-32">
 <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
 <span className="text-base md:text-base font-bold uppercase tracking-[0.25em] text-[#D5A547] block mb-6">
 OYEN GRID
 </span>
 <h2 className="text-4xl md:text-6xl text-white mb-8 tracking-tight">
 Learn. Build. Grow.
 </h2>
 <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
 Bringing structure, visibility and coordination to enterprise learning systems.
 </p>
 
 <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
 <Link 
 href="/contact"
 className="w-full sm:w-auto px-8 py-4 bg-[#D5A547] hover:bg-[#c29541] text-[#111719] font-bold tracking-wide transition-colors duration-300 uppercase text-base"
 >
 Request a Demo
 </Link>
 <Link 
 href="/contact"
 className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-semibold tracking-wide transition-colors duration-300 uppercase text-base"
 >
 Contact OYEN GROUP
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}
