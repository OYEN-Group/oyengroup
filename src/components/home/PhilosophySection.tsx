'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const VALUES = [
  { title: 'People first.', desc: 'Empowering individuals and communities through empathetic leadership and support.' },
  { title: 'Integrity.', desc: 'Doing the right thing, always, with transparency and unwavering ethical standards.' },
  { title: 'Practical innovation.', desc: 'Creating solutions that actually work and solve real-world problems effectively.' },
  { title: 'Excellence.', desc: 'Setting the standard in everything we do, pushing boundaries of what is possible.' },
  { title: 'Long-term impact.', desc: 'Building for a sustainable future that benefits generations to come.' }
];

export default function PhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  useGSAP(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // 1. Background and Text Color Transition
      const bgTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
          end: 'top 10%',
          scrub: true,
        }
      });

      bgTl.to(containerRef.current, { backgroundColor: '#09251F', ease: 'none' }, 0)
          .to('.dynamic-text', { color: '#ffffff', ease: 'none' }, 0)
          .to('.dynamic-text-muted', { color: 'rgba(255, 255, 255, 0.7)', ease: 'none' }, 0)
          .to('.dynamic-border', { borderColor: 'rgba(255, 255, 255, 0.1)', ease: 'none' }, 0);

      // 2. Kinetic Typography "What Drives Us." word-by-word reveal
      gsap.from('.word-reveal', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.heading-container',
          start: 'top 80%',
        }
      });

      // 3. Vision & Mission Sequential Reveal
      gsap.from('.editorial-reveal', {
        opacity: 0,
        y: 40,
        stagger: 0.25,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.vision-mission-container',
          start: 'top 75%',
        }
      });

      // 4. Values Horizontal Animation & Progress Line
      const valuesTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.values-container',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: 1,
        }
      });

      valuesTl.to('.progress-line', {
        scaleX: 1,
        ease: 'none',
      }, 0)
      .from('.value-item', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        ease: 'power2.out',
      }, 0.1);
    } else {
      // Provide instant color switch for reduced motion
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 30%',
          onEnter: () => {
            gsap.set(containerRef.current, { backgroundColor: '#09251F' });
            gsap.set('.dynamic-text', { color: '#ffffff' });
            gsap.set('.dynamic-text-muted', { color: 'rgba(255, 255, 255, 0.7)' });
            gsap.set('.dynamic-border', { borderColor: 'rgba(255, 255, 255, 0.1)' });
          },
          onLeaveBack: () => {
            gsap.set(containerRef.current, { backgroundColor: '#ffffff' });
            gsap.set('.dynamic-text', { color: '#111719' });
            gsap.set('.dynamic-text-muted', { color: '#59636D' });
            gsap.set('.dynamic-border', { borderColor: 'rgba(229, 231, 235, 1)' });
          }
        }
      });
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 lg:py-48 bg-white overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Heading */}
        <div className="heading-container mb-24 md:mb-32">
          <div className="text-[#D5A547] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 font-['Inter',sans-serif]">
            Our Identity
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-bold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] flex flex-wrap gap-x-4 md:gap-x-6 lg:gap-x-8 dynamic-text text-[#111719]">
            {["What", "Drives", "Us."].map((word, i) => (
              <span key={i} className="overflow-hidden inline-block pb-2 lg:pb-6">
                <span className="word-reveal inline-block">{word}</span>
              </span>
            ))}
          </h2>
        </div>

        {/* Vision & Mission Columns */}
        <div className="vision-mission-container grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 mb-32 pb-32 border-b border-gray-200 dynamic-border">
          <div className="flex flex-col editorial-reveal">
            <h3 className="text-[#D5A547] text-sm font-bold uppercase tracking-[0.2em] mb-8 font-['Inter',sans-serif]">
              Our Vision
            </h3>
            <p className="dynamic-text text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.3] font-['Plus_Jakarta_Sans',sans-serif] text-[#111719]">
              A more capable Africa powered by technology, talent and innovation.
            </p>
          </div>

          <div className="flex flex-col editorial-reveal">
            <h3 className="text-[#D5A547] text-sm font-bold uppercase tracking-[0.2em] mb-8 font-['Inter',sans-serif]">
              Our Mission
            </h3>
            <p className="dynamic-text-muted text-2xl md:text-3xl leading-relaxed font-['Inter',sans-serif] font-medium text-[#59636D]">
              To research, build and deploy practical solutions that solve real problems and create lasting value for industries and communities.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="values-container relative">
          <div className="mb-16">
            <h3 className="text-[#D5A547] text-sm font-bold uppercase tracking-[0.2em] font-['Inter',sans-serif]">
              Our Values
            </h3>
          </div>
          
          <div className="relative w-full h-[2px] bg-gray-200 dynamic-border mb-16 lg:mb-20">
             <div className="progress-line absolute top-0 left-0 h-full bg-[#D5A547] w-full origin-left scale-x-0" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 w-full">
            {VALUES.map((val, i) => (
              <div 
                key={i} 
                className="value-item group cursor-pointer lg:pr-6"
                onMouseEnter={() => setHoveredValue(i)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className="text-xl lg:text-2xl font-bold dynamic-text text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] transition-transform duration-300 group-hover:-translate-y-1">
                  {val.title}
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out lg:opacity-0 lg:max-h-0 ${hoveredValue === i ? 'lg:max-h-32 lg:opacity-100 lg:mt-4' : ''} max-h-32 opacity-100 mt-4`}
                >
                  <p className="text-[15px] leading-relaxed dynamic-text-muted text-[#59636D] font-['Inter',sans-serif]">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}