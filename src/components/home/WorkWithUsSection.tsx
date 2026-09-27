'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function WorkWithUsSection() {
  return (
    <section className="bg-brand-offwhite">
      <div className="flex flex-col lg:flex-row min-h-[700px]">
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex items-center p-12 lg:p-24 bg-white relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto lg:mx-0 w-full"
          >
            <h2 className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-muted border-l-2 border-brand-accent pl-4 mb-10">
              Work With Oyen Group
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary leading-[1.1] mb-8 tracking-tight">
              Let's Build What's Next. <span className="block text-brand-accent mt-2">Together.</span>
            </h3>
            <p className="text-xl text-brand-muted mb-16 leading-relaxed max-w-xl">
              Whether you're a researcher, developer, investor or strategic partner, discover opportunities to collaborate and create meaningful impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/contact"
                className="inline-flex justify-center items-center gap-3 bg-brand-primary text-white hover:bg-brand-accent hover:text-brand-primary px-8 py-4 rounded-sm font-semibold transition-all duration-300 group shadow-lg"
              >
                Explore Careers
              </Link>
              <Link 
                href="/contact"
                className="inline-flex justify-center items-center gap-3 bg-transparent border-2 border-brand-primary/20 text-brand-primary hover:border-brand-primary px-8 py-4 rounded-sm font-semibold transition-all duration-300 group"
              >
                Become a Partner
              </Link>
              <Link 
                href="/investment"
                className="inline-flex justify-center items-center gap-3 bg-transparent border-2 border-brand-primary/20 text-brand-primary hover:border-brand-primary px-8 py-4 rounded-sm font-semibold transition-all duration-300 group"
              >
                Investment Opportunity
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-full">
          <Image quality={100} 
            src="/images/partnership.jpg" 
            alt="Corporate Collaboration" 
            fill 
            className="object-cover"
            priority={false}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
        </div>

      </div>
    </section>
  );
}
