'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const stages = [
 { id: 'research', title: 'Research', description: 'Understand real problems.', bg: '/images/tech.jpg' },
 { id: 'build', title: 'Build', description: 'Develop practical technology.', bg: '/images/hero.jpg' },
 { id: 'solve', title: 'Solve', description: 'Address operational needs.', bg: '/images/solutions_bg.jpg' },
 { id: 'scale', title: 'Scale', description: 'Create lasting value.', bg: '/images/impact_bg.jpg' },
];

export default function SolutionsSection() {
 return (
 <section id="approach" className="bg-brand-primary text-white">
 {/* Hero Part of Solutions */}
 <div className="relative w-full h-[60vh] min-h-[500px] flex items-center">
 <div className="absolute inset-0">
 <Image quality={100}
 src="/images/solutions_bg.jpg"
 alt="From Research to Real-World Solutions"
 fill
 className="object-cover"
 />
 <div className="absolute inset-0 bg-brand-primary/70 mix-blend-multiply" />
 <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-transparent" />
 </div>

 <div className="relative z-10 container mx-auto px-6 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 className="max-w-2xl"
 >
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
 From Research to <br />
 Real-World Solutions.
 </h2>
 <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed">
 Our four-stage philosophy drives everything we do to create practical, lasting impact.
 </p>
 </motion.div>
 </div>
 </div>

 {/* Philosophy Stages */}
 <div className="bg-[#09251F] py-24 relative overflow-hidden">
 <div className="container mx-auto px-6 lg:px-12 relative z-10">
 {/* Connecting Line Desktop */}
 <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-brand-accent/30 -translate-y-1/2 z-0" />
 
 <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
 {stages.map((stage, index) => (
 <motion.div
 key={stage.id}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.6, delay: index * 0.15 }}
 className="flex flex-col items-center text-center relative"
 >
 <div className="w-16 h-16 rounded-full bg-[#111719] border-2 border-brand-accent flex items-center justify-center text-brand-accent font-bold text-xl mb-8 shadow-lg shadow-brand-accent/20">
 0{index + 1}
 </div>
 <h3 className="text-2xl font-bold mb-4 text-white">
 {stage.title}
 </h3>
 <p className="text-lg text-white/95 max-w-xs mx-auto">
 {stage.description}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
