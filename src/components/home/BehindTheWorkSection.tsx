'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BehindTheWorkSection() {
  return (
    <section className="bg-white py-32 md:py-48">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-brand-accent text-sm font-bold tracking-widest">08</span>
            <div className="h-[1px] w-12 bg-brand-accent"></div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Inside Oyen Group</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-primary mb-4">
                Behind The Work
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tight">
                Ideas Taking Shape.
              </h3>
            </div>
            <div className="lg:text-right">
              <p className="text-xl text-brand-muted font-light max-w-md lg:ml-auto leading-relaxed">
                A closer look at the research, development and collaboration behind our work.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden mb-8 bg-gray-100">
              <Image 
                src="/images/showcase/research_2.png" 
                alt="Product Development at OYEN GROUP" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                unoptimized={true}
              />
            </div>
            <h4 className="text-2xl font-bold text-brand-primary mb-3">
              Product Development
            </h4>
            <p className="text-lg text-brand-muted font-light">
              Engineering practical technology to address complex operational challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:mt-16"
          >
            <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden mb-8 bg-gray-100">
              <Image 
                src="/images/showcase/research_1.jpg" 
                alt="Research & Innovation at OYEN GROUP" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                unoptimized={true}
              />
            </div>
            <h4 className="text-2xl font-bold text-brand-primary mb-3">
              Research & Innovation
            </h4>
            <p className="text-lg text-brand-muted font-light">
              Investigating real-world problems to design systems that create lasting value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
