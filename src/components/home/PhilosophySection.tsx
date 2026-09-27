'use client';

import { motion } from 'framer-motion';

export default function PhilosophySection() {
 return (
 <section className="bg-white py-24 lg:py-32">
 <div className="container mx-auto px-6 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 className="mb-16 text-center"
 >
 <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-brand-accent mb-4">
 Our Identity
 </h2>
 <div className="w-12 h-1 bg-brand-primary mx-auto" />
 </motion.div>
 
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-0 lg:divide-x lg:divide-gray-200 mt-24">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8, delay: 0.1 }}
 className="flex flex-col lg:pr-12 xl:pr-16"
 >
 <div className="flex items-center gap-4 mb-8">
 <span className="w-12 h-[1px] bg-brand-accent" />
 <h3 className="text-base font-bold uppercase tracking-[0.2em] text-brand-primary">
 Our Vision
 </h3>
 </div>
 <p className="text-2xl xl:text-3xl font-bold text-brand-primary leading-tight tracking-tight">
 A more capable Africa powered by technology, talent and innovation.
 </p>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="flex flex-col lg:px-12 xl:px-16"
 >
 <div className="flex items-center gap-4 mb-8">
 <span className="w-12 h-[1px] bg-brand-accent" />
 <h3 className="text-base font-bold uppercase tracking-[0.2em] text-brand-primary">
 Our Mission
 </h3>
 </div>
 <p className="text-xl xl:text-2xl text-brand-muted leading-relaxed ">
 To research, build and deploy practical solutions that solve real problems and create lasting value.
 </p>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8, delay: 0.3 }}
 className="flex flex-col lg:pl-12 xl:pl-16"
 >
 <div className="flex items-center gap-4 mb-8">
 <span className="w-12 h-[1px] bg-brand-accent" />
 <h3 className="text-base font-bold uppercase tracking-[0.2em] text-brand-primary">
 Our Values
 </h3>
 </div>
 <div className="flex flex-col gap-5">
 {['People first.', 'Integrity.', 'Practical innovation.', 'Excellence.', 'Long-term impact.'].map((value, i) => (
 <div key={i} className="text-xl text-brand-primary font-medium tracking-tight">
 {value}
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
