'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkWithUsSection() {
 return (
 <section className="bg-brand-offwhite">
 <div className="flex flex-col lg:flex-row min-h-[800px]">
 
 {/* Content Side */}
 <div className="w-full lg:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-white relative z-10 order-2 lg:order-1">
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8 }}
 className="max-w-2xl w-full"
 >
 <h2 className="text-base font-bold uppercase tracking-[0.2em] text-brand-muted border-l-2 border-brand-accent pl-4 mb-10">
 Work With Oyen Group
 </h2>
 <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-primary leading-[1.1] mb-8 tracking-tight">
 Let's Build <br/>What's Next. <br/><span className="text-brand-accent mt-2 block">Together.</span>
 </h3>
 <p className="text-xl md:text-2xl text-brand-muted mb-16 leading-relaxed max-w-xl ">
 Whether you're a researcher, developer, investor or strategic partner, discover opportunities to collaborate and create meaningful impact.
 </p>
 
 <div className="flex flex-col gap-8">
 <div>
 <Link 
 href="/contact"
 className="inline-flex justify-center items-center bg-brand-primary text-white hover:bg-brand-accent hover:text-brand-primary px-12 py-5 font-bold transition-all duration-300 uppercase tracking-widest text-base"
 >
 Partner With Us
 </Link>
 </div>
 <div className="flex flex-col sm:flex-row gap-6 mt-4">
 <Link 
 href="/investment"
 className="text-brand-primary font-bold text-base uppercase tracking-[0.1em] hover:text-brand-accent transition-colors border-b border-gray-200 hover:border-brand-accent pb-1 inline-flex"
 >
 Explore Investment Opportunities
 </Link>
 <Link 
 href="/contact"
 className="text-brand-primary font-bold text-base uppercase tracking-[0.1em] hover:text-brand-accent transition-colors border-b border-gray-200 hover:border-brand-accent pb-1 inline-flex"
 >
 Contact OYEN GROUP
 </Link>
 </div>
 </div>
 </motion.div>
 </div>

 {/* Image Side */}
 <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full order-1 lg:order-2">
 <Image quality={100} 
 src="/images/partnership.jpg" 
 alt="Corporate Collaboration" 
 fill 
 className="object-cover object-center"
 unoptimized={true}
 />
 </div>

 </div>
 </section>
 );
}
