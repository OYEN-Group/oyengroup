'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function PartnerSection() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Left Side: Content */}
        <div className="flex items-center justify-center p-12 lg:p-24 bg-white">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl w-full"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-8 leading-tight tracking-tight">
              Let's Build a <br />
              Brighter Tomorrow, <br />
              Together.
            </h2>
            <p className="text-lg text-brand-muted mb-12 leading-relaxed">
              Whether you're an investor, strategic partner or a like-minded organisation, Oyen Group is building a future of opportunities and impact. Let's explore how we can create value together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/investment" 
                className="group inline-flex justify-center items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-sm font-semibold transition-all duration-300"
              >
                Investment Opportunity
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link 
                href="/contact" 
                className="group inline-flex justify-center items-center gap-3 border border-brand-primary/20 hover:border-brand-primary text-brand-primary px-8 py-4 rounded-sm font-semibold transition-all duration-300"
              >
                Get In Touch
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-[400px] lg:h-auto hidden lg:block overflow-hidden">
          <motion.div
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/partnership.jpg"
              alt="Professional collaboration and business partnership"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-primary/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
