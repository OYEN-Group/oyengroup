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
          className="mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight">
            Building For The Long Term.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-[1px] bg-brand-primary/20" />
          
          {/* Vertical Line for Mobile */}
          <div className="block lg:hidden absolute top-0 left-6 w-[1px] h-full bg-brand-primary/20" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-16 lg:pl-0 pt-0 lg:pt-16"
              >
                {/* Indicator Point */}
                <div className="absolute left-4 lg:left-0 top-0 lg:top-5 w-4 h-4 rounded-full bg-brand-accent transform -translate-x-1/2 lg:-translate-y-1/2 lg:translate-x-0 ring-4 ring-brand-offwhite z-10" />
                
                <h3 className="text-5xl font-bold text-brand-primary/10 mb-4 font-heading">{stage.num}</h3>
                <h4 className="text-xl font-semibold text-brand-primary mb-3">{stage.title}</h4>
                <p className="text-brand-muted max-w-[250px] leading-relaxed">
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
