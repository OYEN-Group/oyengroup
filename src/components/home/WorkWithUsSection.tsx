'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkWithUsSection() {
  return (
    <section className="bg-white w-full flex flex-col lg:flex-row overflow-hidden border-t border-gray-100">
      {/* LEFT SIDE: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24 lg:py-32 bg-white text-[#111719] order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h4 className="text-[#D5A547] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6 font-['Inter',sans-serif]">
            Let&apos;s Build What&apos;s Next
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#111719] leading-[1.1] mb-6 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Collaborate With Us.
          </h2>
          <p className="text-[#59636D] text-lg font-['Inter',sans-serif] leading-relaxed mb-12">
            Whether you&apos;re a researcher, developer, investor or strategic partner, discover opportunities to collaborate and create meaningful impact together.
          </p>
          
          <div className="flex flex-col gap-8">
            <div>
              <Link 
                href="/contact"
                className="inline-flex justify-center items-center bg-[#D5A547] text-white hover:bg-[#111719] px-10 py-4 font-bold transition-colors duration-300 uppercase tracking-widest text-sm font-['Inter',sans-serif]"
              >
                Partner With Us
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 pt-4 border-t border-gray-100">
              <Link 
                href="/investment"
                className="text-[#111719] font-bold text-sm uppercase tracking-[0.1em] hover:text-[#D5A547] transition-colors font-['Inter',sans-serif]"
              >
                Investment Opportunities →
              </Link>
              <Link 
                href="/contact"
                className="text-[#111719] font-bold text-sm uppercase tracking-[0.1em] hover:text-[#D5A547] transition-colors font-['Inter',sans-serif]"
              >
                General Enquiries →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Image */}
      <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px] lg:min-h-full order-1 lg:order-2">
        <Image 
          quality={100} 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
          alt="Professional collaboration" 
          fill 
          className="object-cover object-center"
          unoptimized={true}
        />
      </div>
    </section>
  );
}