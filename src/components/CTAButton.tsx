import Link from 'next/link';
import React from 'react';

interface CTAButtonProps {
  href?: string;
  text: string;
  theme?: 'light' | 'dark'; // light = white text (for dark bgs), dark = dark green text (for light bgs)
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({ href, text, theme = 'light', className = '', onClick }: CTAButtonProps) {
  const isLight = theme === 'light';
  
  const textColor = isLight ? 'text-white' : 'text-[#09251F]';
  const borderColor = isLight ? 'border-white' : 'border-[#09251F]';
  
  const innerContent = (
    <>
      <span className={`font-semibold text-[15px] md:text-base tracking-wide ${textColor} font-['Plus_Jakarta_Sans',sans-serif]`}>
        {text}
      </span>
      <div className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border ${borderColor} transition-all duration-250`}>
        <svg 
          className={`w-4 h-4 md:w-5 md:h-5 ${textColor} transform transition-transform duration-250 ease-out group-hover:translate-x-1`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12h16M13 5l7 7-7 7" />
        </svg>
      </div>
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        onClick={onClick}
        className={`group inline-flex items-center gap-4 ${className}`}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={`group inline-flex items-center gap-4 cursor-pointer ${className}`}
    >
      {innerContent}
    </div>
  );
}
