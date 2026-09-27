'use client';

import { motion } from 'framer-motion';

const stages = [
  { num: '01', title: 'Build & Scale', desc: 'Establishing a strong foundation across core sectors.' },
  { num: '02', title: 'Expand & Innovate', desc: 'Scaling operations and integrating new technologies.' },
  { num: '03', title: 'Create Opportunities', desc: 'Fostering partnerships and empowering communities.' },
  { num: '04', title: 'Sustainable Future', desc: 'Delivering long-term value and positive impact.' },
];

export default function RoadmapSection() {
  return (
    <section className="bg-brand-offwhite py-32 lg:py-48 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tight">
            Building For The Long Term
          </h2>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] w-[80%] h-[1px] bg-brand-accent/40 z-0" />
          
          {/* Vertical Line for Mobile */}
          <div className="block lg:hidden absolute top-10 left-[34px] w-[1px] h-[calc(100%-80px)] bg-brand-accent/40 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-24 lg:pl-0 pt-0 lg:pt-0 text-left lg:text-center flex flex-col items-start lg:items-center"
              >
                {/* Indicator Point with Number Inside */}
                <div className="absolute left-0 lg:left-1/2 top-0 lg:top-0 w-[68px] h-[68px] rounded-full bg-brand-offwhite border border-brand-accent/30 flex items-center justify-center text-brand-accent transform lg:-translate-x-1/2 z-10 shadow-sm">
                  <span className="text-2xl font-bold">{stage.num}</span>
                </div>
                
                <h4 className="text-2xl font-bold text-brand-primary mb-4 mt-3 lg:mt-24">{stage.title}</h4>
                <p className="text-lg text-brand-muted leading-relaxed lg:max-w-[220px]">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
