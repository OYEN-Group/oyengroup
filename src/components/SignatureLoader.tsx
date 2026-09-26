'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function SignatureLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on initial load for the session
    const hasSeenLoader = sessionStorage.getItem('oyen_has_seen_loader');
    
    if (!hasSeenLoader) {
      setShow(true);
      
      // The loading screen is displayed for a minimum duration to ensure 
      // the cinematic animation completes gracefully without feeling abrupt.
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('oyen_has_seen_loader', 'true');
      }, 1800); // 1.8 seconds to allow all animation stages to play before fading out
      
      return () => clearTimeout(timer);
    } else {
      setShow(false);
      setIsLoading(false);
    }
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111719] overflow-hidden"
        >
          {/* Background Image & Gradients */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/loading-bg.jpg"
              alt="Corporate Background"
              fill
              className="object-cover opacity-20"
              quality={100}
              unoptimized={true}
              priority
            />
            {/* Deep corporate green and charcoal gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#111719]/95 via-[#0C211C]/85 to-[#111719]/95" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111719]/90 via-transparent to-[#111719]/90" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 pt-32">
            
            {/* Stage 1: Logo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="mb-10"
            >
              {/* Note: The logo has mix-blend-screen applied elsewhere, but here we want it clear. */}
              <div className="relative w-[200px] md:w-[240px] h-[54px] md:h-[64px]">
                <Image 
                  src="/images/logo.png" 
                  alt="OYEN GROUP" 
                  fill
                  className="object-contain"
                  priority
                  unoptimized={true}
                />
              </div>
            </motion.div>

            {/* Stage 2: Brand Statement */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="text-white text-xl md:text-3xl font-light tracking-wide mb-16 text-center"
            >
              Research. Build. Solve. Scale.
            </motion.h2>

            {/* Stage 3: Progress Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="w-48 md:w-64 h-[2px] bg-white/10 overflow-hidden mb-auto"
            >
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.0, ease: "easeInOut", delay: 0.7 }}
                className="h-full bg-gradient-to-r from-[#D5A547] to-[#E8C47A]"
              />
            </motion.div>
          </div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-12 md:bottom-16 z-10 w-full text-center px-6"
          >
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.4em] text-[#A4ABA7]">
              PEOPLE &middot; IDEAS &middot; TECHNOLOGY &middot; REAL IMPACT
            </p>
          </motion.div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
}
