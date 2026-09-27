'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const leaders = [
 {
 id: 'rufus',
 name: 'Rufus Edesiri Ejukonemu',
 role: 'Co-Founder, CEO & Director',
 description: 'Leads business strategy, growth and partnerships, driving OYEN\'s mission to create technology solutions with real impact.',
 image: '/images/rufus.jpg',
 },
 {
 id: 'james',
 name: 'Oyewole, James Mayowa',
 role: 'Founder, CTO & Director',
 description: 'Leads technology, product development and research, building innovative solutions for real-world challenges.',
 image: '/images/james.jpg',
 }
];

export default function LeadershipSection() {
 return (
 <section className="bg-white py-24 lg:py-32">
 <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8 }}
 className="text-center mb-16"
 >
 <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-brand-muted mb-4">
 The People Behind OYEN GROUP
 </h3>
 <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight mb-6">
 Our Leadership
 </h2>
 <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto">
 Our leadership provides the vision, direction and support needed to turn ideas into real-world impact.
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
 {leaders.map((leader, index) => (
 <motion.div
 key={leader.id}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.5, delay: index * 0.2 }}
 className="flex flex-col items-center text-center"
 >
 <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden mb-8 bg-gray-100 shadow-lg">
 <Image quality={100}
 src={leader.image}
 alt={leader.name}
 fill
 className="object-cover transition-transform duration-700 hover:scale-105"
 />
 </div>
 <h3 className="text-2xl font-bold text-brand-primary mb-2">
 {leader.name}
 </h3>
 <h4 className="text-base font-semibold tracking-[0.15em] text-brand-accent uppercase mb-4">
 {leader.role}
 </h4>
 <p className="text-brand-muted max-w-sm">
 {leader.description}
 </p>
 </motion.div>
 ))}
 </div>

 <div className="text-center">
 <Link 
 href="/leadership"
 className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-semibold hover:bg-brand-accent hover:text-brand-primary transition-colors duration-300 rounded-sm"
 >
 Meet Our Leadership →
 </Link>
 </div>
 </div>
 </section>
 );
}
