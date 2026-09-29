'use client';

import { useRef } from 'react';
import Image from 'next/image';
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
      // 1. Heading Word Reveal
      gsap.from('.manifesto-word', {
        yPercent: 120,
        opacity: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.manifesto-heading',
          start: 'top 85%',
        }
      });

      // 2. Image Reveal (Clip Path) & Parallax
      gsap.fromTo('.manifesto-image-wrapper',
        { clipPath: 'inset(100% 0% 0% 0%)' },
        { 
          clipPath: 'inset(0% 0% 0% 0%)', 
          duration: 1.5, 
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.manifesto-image-wrapper',
            start: 'top 80%',
          }
        }
      );
      
      gsap.fromTo('.manifesto-image',
        { scale: 1.2 },
        { 
          scale: 1, 
          duration: 1.5, 
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.manifesto-image-wrapper',
            start: 'top 80%',
          }
        }
      );

      // Subtle parallax on scroll
      gsap.to('.manifesto-image', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.manifesto-image-wrapper',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });

      // 3. Animated Horizontal Lines
      gsap.utils.toArray('.animated-line').forEach((line: any) => {
        gsap.fromTo(line,
          { scaleX: 0 },
          { 
            scaleX: 1, 
            duration: 1, 
            transformOrigin: 'left center', 
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: line,
              start: 'top 90%',
            }
          }
        );
      });

      // 4. Vision/Mission Statements
      gsap.from('.manifesto-statement', {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.vision-mission-container',
          start: 'top 75%',
        }
      });

      // 5. Values Rows
      gsap.from('.value-row', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.values-container',
          start: 'top 80%',
        }
      });
    }
  }, { scope: containerRef });

  const headingText = "Driven by purpose. Built for impact.";

  return (
    <section ref={containerRef} className="bg-white">
      {/* --- TOP: LIGHT EDITORIAL MANIFESTO --- */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl pt-32 lg:pt-48 pb-20">
        
        {/* Section Label */}
        <div className="text-[#D5A547] text-sm font-bold tracking-[0.2em] uppercase mb-8 font-['Inter',sans-serif]">
          05 — THE OYEN IDENTITY
        </div>

        {/* Large Editorial Heading */}
        <h2 className="manifesto-heading text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] text-[#111719] leading-[1.05] mb-20 flex flex-wrap gap-x-[0.25em]">
          {headingText.split(' ').map((word, i) => (
            <span key={i} className="overflow-hidden inline-block pb-4">
              <span className="manifesto-word inline-block">{word}</span>
            </span>
          ))}
        </h2>

        {/* Hero Image */}
        <div className="manifesto-image-wrapper relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#FAFAFA] overflow-hidden mb-24 lg:mb-32">
          <Image 
            src="/images/tech.jpg" 
            alt="OYEN GROUP Innovation" 
            fill 
            className="manifesto-image object-cover"
            priority
          />
        </div>

        {/* Vision & Mission Statements */}
        <div className="vision-mission-container">
          <div className="animated-line w-full h-[1px] bg-gray-200" />
          
          <div className="manifesto-statement grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-8 py-16 md:py-24 items-start">
            <h3 className="text-[#111719] text-base md:text-lg font-bold uppercase tracking-[0.2em] font-['Inter',sans-serif]">
              Vision
            </h3>
            <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] font-['Plus_Jakarta_Sans',sans-serif] text-[#111719] tracking-tight max-w-4xl">
              A more capable Africa powered by technology, talent and innovation.
            </p>
          </div>
          
          <div className="animated-line w-full h-[1px] bg-gray-200" />
          
          <div className="manifesto-statement grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-8 py-16 md:py-24 items-start">
            <h3 className="text-[#111719] text-base md:text-lg font-bold uppercase tracking-[0.2em] font-['Inter',sans-serif]">
              Mission
            </h3>
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-['Inter',sans-serif] font-medium text-[#59636D] max-w-4xl">
              To research, build and deploy practical solutions that solve real problems and create lasting value for industries and communities.
            </p>
          </div>
          
          <div className="animated-line w-full h-[1px] bg-gray-200" />
        </div>
      </div>

      {/* --- BOTTOM: DARK FOREST-GREEN VALUES SECTION --- */}
      <div className="values-container bg-[#09251F] text-white py-32 lg:py-48">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-8">
            
            <div className="text-[#D5A547] text-base md:text-lg font-bold uppercase tracking-[0.2em] font-['Inter',sans-serif]">
              Our Core Values
            </div>
            
            <div className="flex flex-col">
              <div className="animated-line w-full h-[1px] bg-white/20 mb-8" />
              
              {VALUES.map((val, i) => (
                <div key={i} className="value-row group border-b border-white/10 last:border-transparent py-8 md:py-12 cursor-pointer transition-colors hover:bg-white/[0.02]">
                  <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] lg:grid-cols-[100px_1fr_1fr] gap-6 md:gap-8 items-start">
                    {/* Number */}
                    <div className="text-[#D5A547] font-bold text-lg md:text-xl font-['Inter',sans-serif] opacity-80 group-hover:opacity-100 transition-opacity">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {/* Title */}
                    <h4 className="text-3xl md:text-4xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-white tracking-tight group-hover:text-[#D5A547] transition-colors duration-300">
                      {val.title}
                    </h4>
                    {/* Description */}
                    <p className="text-lg md:text-xl leading-relaxed text-white/70 font-['Inter',sans-serif] group-hover:text-white/95 transition-colors duration-300 max-w-lg mt-2 lg:mt-0">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="animated-line w-full h-[1px] bg-white/20 mt-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}