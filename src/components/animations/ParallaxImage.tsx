'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
}

export default function ParallaxImage({ src, alt, priority = false, className = '', containerClassName = '' }: ParallaxImageProps) {
  const ref = useRef(null);
  
  // Track scroll position relative to this element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Move image from -10% to 10% on the Y axis as it scrolls through viewport
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName}`}>
      <motion.div style={{ y, scale: 1.15 }} className="absolute inset-0 w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover ${className}`}
          unoptimized
        />
      </motion.div>
    </div>
  );
}
