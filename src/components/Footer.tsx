'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09251F] text-white pt-20 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-[150px] h-[40px]">
                <Image quality={100} 
                  src="/images/logo_transparent.png" 
                  alt="OYEN GROUP" 
                  fill 
                  className="object-contain object-left" 
                  unoptimized={true}
                />
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-[280px] font-['Inter',sans-serif]">
              Building capabilities, developing solutions and creating opportunities that strengthen industries and communities across Africa.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">Company</h4>
            <ul className="space-y-4 text-sm text-white/70 font-['Inter',sans-serif]">
              <li><Link href="/about" className="hover:text-[#D5A547] transition-colors">About Us</Link></li>
              <li><Link href="/#approach" className="hover:text-[#D5A547] transition-colors">Our Approach</Link></li>
              <li><Link href="/about/leadership" className="hover:text-[#D5A547] transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">Technology</h4>
            <ul className="space-y-4 text-sm text-white/70 font-['Inter',sans-serif]">
              <li><Link href="/products/oyen-grid" className="hover:text-[#D5A547] transition-colors">OYEN GRID</Link></li>
              <li><Link href="/products/verba" className="hover:text-[#D5A547] transition-colors">VERBA</Link></li>
              <li><Link href="/products/orivex" className="hover:text-[#D5A547] transition-colors">ORIVEX</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">Connect</h4>
            <ul className="space-y-4 text-sm text-white/70 font-['Inter',sans-serif]">
              <li><Link href="/contact" className="hover:text-[#D5A547] transition-colors">Contact Us</Link></li>
              <li><Link href="/investment" className="hover:text-[#D5A547] transition-colors">Investment</Link></li>
              <li><Link href="/contact" className="hover:text-[#D5A547] transition-colors">Partnerships</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-white/50 font-['Inter',sans-serif]">
          <div>© {currentYear} OYEN GROUP LTD. All rights reserved.</div>
          
          <div className="text-[#D5A547] font-bold tracking-widest uppercase">
            Africa and Beyond.
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/site-information/privacy-notice" className="hover:text-white transition-colors">Privacy Notice</Link>
            <span className="text-white/20">|</span>
            <Link href="/site-information/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <span className="text-white/20">|</span>
            <Link href="/site-information" className="hover:text-white transition-colors">Site Information</Link>
            <span className="text-white/20">|</span>
            <button onClick={scrollToTop} className="hover:text-white transition-colors focus:outline-none flex items-center gap-1">
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}