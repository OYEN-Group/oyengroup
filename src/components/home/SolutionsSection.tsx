'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const stages = [
  { id: 'research', title: 'RESEARCH', description: 'Understand real problems.' },
  { id: 'build', title: 'BUILD', description: 'Develop practical technology.' },
  { id: 'solve', title: 'SOLVE', description: 'Address operational needs.' },
  { id: 'scale', title: 'SCALE', description: 'Create lasting value.' },
];

export default function SolutionsSection() {
  return (
    <section id="approach" className="bg-[#09251F] text-white">
      {/* Cinematic Hero Part */}
      <div className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image 
            quality={100}
            src="/images/approach-forest.jpg"
            alt="Aerial forest road - OYEN GROUP Approach"
            fill
            className="object-cover object-center"
            unoptimized={true}
          />
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white/95">
              From Research to<br className="hidden md:block" /> Real-World Solutions.
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Our four-stage philosophy drives everything we do - transforming ideas into practical solutions that create lasting impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Philosophy Stages */}
      <div className="bg-[#09251F] py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full border border-[#D5A547] flex items-center justify-center text-[#D5A547] font-medium text-lg mb-8 tracking-widest bg-[#09251F] group-hover:bg-[#D5A547]/5 transition-colors duration-300">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-widest">
                  {stage.title}
                </h3>
                <p className="text-base md:text-lg text-gray-400 max-w-[200px] mx-auto font-medium">
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