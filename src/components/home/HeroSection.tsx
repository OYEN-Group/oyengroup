'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import CTAButton from '@/components/CTAButton';

const slides = [
  {
    id: 1,
    navLabel: 'OUR VISION',
    image: '/images/hero-slide1.jpg',
    headline: 'Research. Build. Solve. Scale.',
    subtitle: 'Building practical technology solutions for real-world challenges.',
    ctaText: 'Discover OYEN',
    ctaLink: '/about',
  },
  {
    id: 2,
    navLabel: 'OUR APPROACH',
    image: '/images/hero-slide2.jpg',
    headline: 'Ideas Become Solutions.',
    subtitle: 'Bringing people, research and technology together to address real challenges.',
    ctaText: 'Our Approach',
    ctaLink: '/about#approach',
  },
  {
    id: 3,
    navLabel: 'OUR TECHNOLOGY',
    image: '/images/hero-slide3.png',
    headline: 'Technology Built for Real Impact.',
    subtitle: 'Developing practical solutions across learning, research and industrial operations.',
    ctaText: 'Explore Our Products',
    ctaLink: '/products',
  },
  {
    id: 4,
    navLabel: 'BUILDING THE FUTURE',
    image: '/images/hero-slide4.jpg',
    headline: 'Building a More Capable Africa.',
    subtitle: 'Creating lasting value through technology, talent and innovation.',
    ctaText: 'Discover Our Vision',
    ctaLink: '/about',
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 7000);
    }
  }, [nextSlide, isPaused]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
      resetTimer();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
      resetTimer();
    }
  };

  const handleNavClick = (index: number) => {
    setCurrentSlide(index);
    resetTimer();
  };

  return (
    <section 
      className="relative w-full h-[100svh] overflow-hidden bg-[#09251F] focus:outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Hero Image Slider"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-black"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].headline}
            fill
            priority={currentSlide === 0}
            className="object-cover object-center"
            quality={100}
            unoptimized={true}
          />
          {/* Subtle dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none pb-20">
        <div className="container mx-auto px-6 lg:px-12 text-center text-white pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-[72px] font-bold max-w-5xl mx-auto leading-[1.1] mb-6 tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                {slides[currentSlide].headline}
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-['Inter',sans-serif] font-medium">
                {slides[currentSlide].subtitle}
              </p>

              <CTAButton 
                href={slides[currentSlide].ctaLink} 
                text={slides[currentSlide].ctaText}
                theme="light"
                className="mt-4"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Horizontal Navigation Strip */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-32 pb-4 md:pb-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="flex flex-row justify-between w-full gap-4 lg:gap-8">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => handleNavClick(idx)}
                aria-label={`Go to ${slide.navLabel}`}
                className="relative flex-1 pb-2 md:pb-3 text-left group"
              >
                {/* Thumbnail popup on hover */}
                <div className="absolute bottom-full left-0 mb-3 w-[120px] md:w-[160px] lg:w-[200px] aspect-[16/10] overflow-hidden rounded-md opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out pointer-events-none shadow-2xl border border-white/10 z-50">
                  <Image src={slide.image} alt={slide.navLabel} fill className="object-cover" unoptimized={true} />
                </div>

                <span className={`block text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-[0.15em] md:tracking-[0.2em] transition-colors duration-300 font-['Inter',sans-serif] uppercase whitespace-nowrap overflow-hidden text-ellipsis ${
                  currentSlide === idx ? 'text-[#D5A547]' : 'text-white/50 group-hover:text-white'
                }`}>
                  {slide.navLabel}
                </span>
                
                {/* Inactive line segment */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20 transition-colors group-hover:bg-white/40" />
                
                {/* Active Progress Line */}
                {currentSlide === idx && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-[#D5A547] shadow-[0_0_8px_rgba(213,165,71,0.6)] z-10"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 7, ease: "linear" }}
                    key={`progress-${idx}`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}