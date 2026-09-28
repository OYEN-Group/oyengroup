'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: '/images/hero-slide1.jpg',
    headline: 'Research. Build. Solve. Scale.',
    subtitle: 'Building practical technology solutions for real-world challenges.',
    ctaText: 'Discover OYEN',
    ctaLink: '/about',
  },
  {
    id: 2,
    image: '/images/hero-slide2.jpg',
    headline: 'Ideas Become Solutions.',
    subtitle: 'Bringing people, research and technology together to address real challenges.',
    ctaText: 'Our Approach',
    ctaLink: '/about#approach',
  },
  {
    id: 3,
    image: '/images/hero-slide3.png',
    headline: 'Technology Built for Real Impact.',
    subtitle: 'Developing practical solutions across learning, research and industrial operations.',
    ctaText: 'Explore Our Products',
    ctaLink: '/products',
  },
  {
    id: 4,
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

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    resetTimer();
  };

  return (
    <section 
      className="relative w-full h-[150vh] overflow-hidden bg-brand-primary focus:outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Hero Image Slider"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-black"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].headline}
            fill
            priority={currentSlide === 0}
            className="object-cover object-center"
            quality={90}
            unoptimized={true}
          />
          {/* Dark green/black gradient overlays strictly for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111719]/90 via-black/40 to-[#111719]/80" />
        </motion.div>
      </AnimatePresence>

      {/* Content wrapper */}
      <div className="relative z-10 w-full min-h-[100vh] flex flex-col items-center justify-center pointer-events-none">
        <div className="container mx-auto px-6 lg:px-12 text-center text-white mt-16 pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[64px] font-bold max-w-5xl mx-auto leading-[1.1] mb-6 tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                {slides[currentSlide].headline}
              </h1>

              <p className="text-[17px] md:text-[19px] text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-['Inter',sans-serif]">
                {slides[currentSlide].subtitle}
              </p>

              <Link
                href={slides[currentSlide].ctaLink}
                className="group inline-flex items-center gap-3 bg-brand-accent text-brand-primary hover:bg-[#c29541] px-8 py-3.5 rounded-sm font-bold transition-all duration-300 uppercase tracking-widest text-[13px] shadow-lg hover:shadow-xl font-['Inter',sans-serif]"
              >
                {slides[currentSlide].ctaText}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-[50vh] -translate-y-1/2 left-4 md:left-8 flex items-center z-20">
        <button 
          onClick={() => { prevSlide(); resetTimer(); }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm transition-all border border-white/10"
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
        </button>
      </div>
      <div className="absolute top-[50vh] -translate-y-1/2 right-4 md:right-8 flex items-center z-20">
        <button 
          onClick={() => { nextSlide(); resetTimer(); }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm transition-all border border-white/10"
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute top-[90vh] left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="group py-4 px-1"
          >
            <div className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === idx ? 'w-16 bg-brand-accent' : 'w-8 bg-white/30 group-hover:bg-white/50'}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
