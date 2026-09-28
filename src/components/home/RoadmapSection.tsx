'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stages = [
  { num: '01', title: 'Build & Scale', desc: 'Establishing a strong foundation across core sectors.' },
  { num: '02', title: 'Expand & Innovate', desc: 'Scaling operations and integrating new technologies.' },
  { num: '03', title: 'Create Opportunities', desc: 'Fostering partnerships and empowering communities.' },
  { num: '04', title: 'Sustainable Future', desc: 'Delivering long-term value and positive impact.' },
];

export default function RoadmapSection() {
  return (
    <section className="bg-white w-full flex flex-col lg:flex-row overflow-hidden border-t border-gray-100">
      {/* LEFT SIDE: Image (45%) */}
      <div className="relative w-full lg:w-[45%] h-[500px] md:h-[600px] lg:h-auto flex flex-col justify-end">
        <Image 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Modern architectural environment"
          fill
          className="object-cover object-center"
          quality={100}
          unoptimized={true}
        />
        {/* Subtle dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Overlay Content */}
        <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-[#D5A547] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 font-['Inter',sans-serif]">
              Our Long-Term Outlook
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 font-['Plus_Jakarta_Sans',sans-serif] leading-tight text-white">
              Building Beyond Today.
            </h2>
            <p className="text-white/80 text-base md:text-lg font-['Inter',sans-serif] leading-relaxed">
              A more capable Africa through technology, partnerships and lasting impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE: Content (55%) */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 lg:py-32 bg-white text-[#111719]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Eyebrow */}
          <h4 className="text-[#D5A547] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6 font-['Inter',sans-serif]">
            The Future We Are Building
          </h4>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight mb-6 font-['Plus_Jakarta_Sans',sans-serif] leading-[1.1]">
            Building for the Long Term.
          </h2>

          {/* Paragraph */}
          <p className="text-[#59636D] text-base md:text-lg font-['Inter',sans-serif] font-medium leading-relaxed mb-16">
            At OYEN GROUP, we are committed to sustainable growth, continuous innovation and real-world impact. We build capabilities, develop solutions and create opportunities that strengthen industries and communities across Africa.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {stages.map((stage, index) => (
              <motion.div 
                key={stage.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border-t border-gray-200 pt-6"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-[#D5A547] text-sm font-bold tracking-widest font-['Inter',sans-serif]">
                    {stage.num}
                  </span>
                  <span className="w-4 h-[1px] bg-[#D5A547]/50 relative top-[-4px]"></span>
                  <h3 className="text-[#111719] text-lg font-bold tracking-wide font-['Plus_Jakarta_Sans',sans-serif]">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-[#59636D] text-sm font-['Inter',sans-serif] leading-relaxed">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}