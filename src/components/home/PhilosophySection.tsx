'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const VALUES = [
  { title: 'People first', desc: 'Empowering individuals and communities through empathetic leadership and support.' },
  { title: 'Integrity', desc: 'Doing the right thing, always, with transparency and unwavering ethical standards.' },
  { title: 'Practical innovation', desc: 'Creating solutions that actually work and solve real-world problems effectively.' },
  { title: 'Excellence', desc: 'Setting the standard in everything we do, pushing boundaries of what is possible.' },
  { title: 'Long-term impact', desc: 'Building for a sustainable future that benefits generations to come.' }
];

export default function PhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });

      tl.from('.manifesto-heading', { 
        y: 20, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.1,
        ease: 'power3.out' 
      })
      .from('.manifesto-col', { 
        y: 20, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'power3.out' 
      }, '-=0.4')
      .from('.manifesto-divider', { 
        scaleX: 0, 
        duration: 0.8, 
        ease: 'power3.out', 
        transformOrigin: 'left center' 
      }, '-=0.4')
      .from('.manifesto-value', { 
        y: 10, 
        opacity: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: 'power3.out' 
      }, '-=0.6');
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-white py-20 md:py-24 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="text-[#D5A547] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-['Inter',sans-serif] manifesto-heading">
            OUR IDENTITY
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] text-[#111719] manifesto-heading">
            Driven by purpose. Built for impact.
          </h2>
        </div>

        {/* Vision & Mission Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <div className="manifesto-col">
            <h3 className="text-[#111719] text-xs font-bold uppercase tracking-[0.2em] font-['Inter',sans-serif] mb-4">
              Vision
            </h3>
            <p className="text-2xl md:text-3xl font-bold leading-[1.3] font-['Plus_Jakarta_Sans',sans-serif] text-[#111719]">
              A more capable Africa powered by technology, talent and innovation.
            </p>
          </div>
          <div className="manifesto-col">
            <h3 className="text-[#111719] text-xs font-bold uppercase tracking-[0.2em] font-['Inter',sans-serif] mb-4">
              Mission
            </h3>
            <p className="text-lg md:text-xl leading-relaxed font-['Inter',sans-serif] font-medium text-[#59636D]">
              To research, build and deploy practical solutions that solve real problems and create lasting value for industries and communities.
            </p>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-12 manifesto-divider" />

        {/* Values Horizontal Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {VALUES.map((val, i) => (
            <div key={i} className="manifesto-value flex flex-col group cursor-default">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#D5A547] text-xs font-bold font-['Inter',sans-serif]">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-bold font-['Plus_Jakarta_Sans',sans-serif] text-[#111719] group-hover:text-[#D5A547] transition-colors">
                  {val.title}
                </h4>
              </div>
              <p className="text-[13px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}