'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// The scrolling process component
const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      id: '01',
      title: 'Research',
      desc: 'Understand the challenge, environment and people involved.',
      image: '/images/hero-slide1.jpg'
    },
    {
      id: '02',
      title: 'Build',
      desc: 'Turn insight into practical products, systems and solutions.',
      image: '/images/tech.jpg'
    },
    {
      id: '03',
      title: 'Solve',
      desc: 'Apply and validate solutions against real operational needs.',
      image: '/images/hero-slide3.png'
    },
    {
      id: '04',
      title: 'Scale',
      desc: 'Improve what works and expand its impact.',
      image: '/images/partnership.jpg'
    }
  ];

  return (
    <section id="process" className="py-24 max-w-[1200px] mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 relative items-start">
        {/* Left Image (Sticky) */}
        <div className="w-full lg:w-1/2 sticky top-32 h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image 
                src={step.image} 
                alt={step.title} 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Right Content (Scrollable) */}
        <div className="w-full lg:w-1/2 lg:py-32">
          <div className="mb-16">
            <h4 className="text-[#007079] font-bold tracking-widest text-sm uppercase mb-4 font-['Plus_Jakarta_Sans',sans-serif]">How We Work</h4>
            <h3 className="text-3xl md:text-4xl font-light text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">
              Research. Build. Solve. Scale.
            </h3>
          </div>

          <div className="space-y-32 pb-32">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-40% 0px -40% 0px" }}
                onViewportEnter={() => setActiveStep(index)}
              >
                <div className={`transition-all duration-500 ${activeStep === index ? 'text-[#111719]' : 'text-gray-400'}`}>
                  <h2 className="text-3xl md:text-5xl font-light mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
                    <span className="font-bold">{step.id}</span> — {step.title}
                  </h2>
                  <p className="text-xl leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ApproachPage() {
  const scrollToProcess = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('process');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white min-h-screen pt-28 font-['Inter',sans-serif]">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-24">
        <div className="relative w-full h-[550px] rounded-[24px] overflow-hidden shadow-2xl">
          <Image 
            quality={100} 
            src="/images/hero-slide2.png" 
            alt="Ideas Become Solutions" 
            fill 
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09251F]/90 via-[#09251F]/60 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center p-10 lg:p-16">
            <div className="max-w-3xl mt-auto lg:mt-0">
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.05]">
                Ideas Become Solutions.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide leading-relaxed mb-10 max-w-2xl">
                Bringing people, research and technology together to address real challenges.
              </p>
              
              <a 
                href="#process" 
                onClick={scrollToProcess}
                className="inline-flex items-center text-[#111719] bg-[#D5A547] hover:bg-white px-8 py-4 rounded-sm font-semibold tracking-widest uppercase text-sm transition-colors duration-300"
              >
                Our Approach <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. INTRO */}
      <section className="py-24 max-w-[900px] mx-auto px-6 lg:px-8 text-center">
        <h4 className="text-[#007079] font-bold tracking-widest text-sm uppercase mb-8 font-['Plus_Jakarta_Sans',sans-serif]">Our Approach</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-[#111719] mb-8 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-tight">
          We start with the problem,<br />not the technology.
        </h2>
        <p className="text-xl md:text-2xl text-[#59636D] font-light leading-relaxed">
          OYEN brings together research, people and technology to understand real challenges, develop practical solutions and create value that can grow over time.
        </p>
      </section>

      {/* 3. THE MAIN SECTION (Animated) */}
      <ProcessSection />

      {/* 4. FROM PROBLEM TO OUTCOME */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base font-bold text-[#09251F] tracking-widest uppercase mb-16 font-['Plus_Jakarta_Sans',sans-serif]">
            <span>Real Challenge</span>
            <span className="text-[#D5A547]">→</span>
            <span>Research</span>
            <span className="text-[#D5A547]">→</span>
            <span>Prototype</span>
            <span className="text-[#D5A547]">→</span>
            <span>Validation</span>
            <span className="text-[#D5A547]">→</span>
            <span>Deployment</span>
            <span className="text-[#D5A547]">→</span>
            <span>Impact</span>
          </div>
          
          <p className="text-xl md:text-[22px] text-[#59636D] font-light leading-relaxed max-w-4xl mx-auto">
            Every OYEN initiative can begin differently, but the objective remains the same: move from understanding a problem to delivering something useful.
          </p>
        </div>
      </section>

      {/* 5. TWO WAYS WE CREATE */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Tech & Products */}
          <div className="flex flex-col group">
            <div className="relative w-full h-[400px] md:h-[500px] mb-8 overflow-hidden rounded-xl">
              <Image 
                src="/images/tech.jpg" 
                alt="Technology and Products" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
            </div>
            <h3 className="text-3xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">Technology & Products</h3>
            <p className="text-lg text-[#59636D] leading-relaxed mb-8">
              We develop digital products and operational technologies around identified needs.
            </p>
            <div className="flex flex-wrap gap-6 font-semibold tracking-widest text-sm uppercase">
              <Link href="/products/oyen-grid" className="text-[#007079] hover:text-[#D5A547] transition-colors">OYEN GRID →</Link>
              <Link href="/products/verba" className="text-[#007079] hover:text-[#D5A547] transition-colors">VERBA →</Link>
              <Link href="/products/orivex" className="text-[#007079] hover:text-[#D5A547] transition-colors">ORIVEX →</Link>
            </div>
          </div>

          {/* Research & Innovation */}
          <div className="flex flex-col group">
            <div className="relative w-full h-[400px] md:h-[500px] mb-8 overflow-hidden rounded-xl">
              <Image 
                src="/images/showcase/verba_ui.png" 
                alt="Research and Innovation" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
            </div>
            <h3 className="text-3xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">Research & Innovation</h3>
            <p className="text-lg text-[#59636D] leading-relaxed mb-8">
              We investigate problems, test ideas and develop knowledge that can inform practical solutions.
            </p>
            <div className="font-semibold tracking-widest text-sm uppercase">
              <Link href="/products/academic" className="text-[#007079] hover:text-[#D5A547] transition-colors">Explore Research →</Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. HOW WE COLLABORATE */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-[45%] relative h-[500px] lg:h-[700px] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="/images/partnership.jpg" 
              alt="Collaboration" 
              fill 
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="w-full lg:w-[55%] lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111719] mb-8 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Good solutions are rarely built alone.
            </h2>
            <p className="text-xl text-[#59636D] font-light leading-relaxed mb-12">
              We work with institutions, industry professionals, researchers, organisations and communities to understand needs and develop solutions around them.
            </p>
            
            <div className="flex gap-4 md:gap-8 mb-12 text-sm font-bold text-[#007079] tracking-widest uppercase flex-wrap">
              <span>Industry</span>
              <span>Academia</span>
              <span>Communities</span>
            </div>

            <Link href="/contact" className="inline-flex items-center text-white bg-[#09251F] hover:bg-[#D5A547] px-8 py-4 rounded-full font-semibold tracking-widest uppercase text-sm transition-colors duration-300 group">
              Partner With OYEN <span className="ml-3 border border-white rounded-full p-1 group-hover:border-[#09251F] transition-colors">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL SECTION */}
      <section className="bg-[#09251F] py-32 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h4 className="text-[#D5A547] font-bold tracking-widest text-sm uppercase mb-8 font-['Plus_Jakarta_Sans',sans-serif]">Our Approach</h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-tight">
            From understanding the problem<br className="hidden md:block"/> to building what comes next.
          </h2>
          <Link href="/contact" className="inline-flex items-center text-[#09251F] bg-[#D5A547] hover:bg-white px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm transition-colors duration-300 group shadow-lg">
            Work with us <span className="ml-3 bg-black/10 rounded-full p-1 transition-colors">→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
