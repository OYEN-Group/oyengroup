'use client';

import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import FadeUp from '@/components/animations/FadeUp';

export default function AboutSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1100px] text-center">
        <FadeUp className="flex flex-col items-center">
          {/* Small gold section label */}
          <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#D5A547] mb-6 block">
            OYEN GROUP
          </span>
          
          {/* Large but balanced, centred heading */}
          <h2 className="text-3xl md:text-[44px] font-bold text-[#111719] leading-tight tracking-tight mb-8 max-w-4xl font-['Plus_Jakarta_Sans',sans-serif]">
            OYEN: A Culture of Innovation
          </h2>
          
          {/* Centred introductory paragraph */}
          <p className="text-[17px] md:text-[19px] text-[#59636D] leading-[1.7] max-w-4xl mx-auto mb-12 font-['Inter',sans-serif]">
            OYEN GROUP is a technology and research company focused on solving real-world problems through practical software products, data-driven solutions and applied research. We develop technology that supports learning, research and industrial operations, turning ideas into solutions that create lasting value.
          </p>
          
          <CTAButton 
            href="/about" 
            text="Discover Our Story"
            theme="dark"
            className="mt-4"
          />
        </FadeUp>
      </div>
    </section>
  );
}