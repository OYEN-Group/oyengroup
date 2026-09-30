'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09251F] text-white pt-12 pb-6 border-t border-white/5 font-['Inter',sans-serif]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-[110px] h-[30px]">
                <Image quality={100} 
                  src="/images/logo_transparent.png" 
                  alt="OYEN GROUP" 
                  fill 
                  className="object-contain object-left" 
                  unoptimized={true}
                />
              </div>
            </Link>
            <p className="text-white/70 text-[13px] leading-relaxed max-w-[260px]">
              Building practical technology and research solutions for Africa and beyond.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-4 text-[13px] uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">Company</h4>
            <ul className="space-y-3 text-[13px] text-white/70">
              <li><Link href="/about" className="hover:text-[#D5A547] transition-colors">About Us</Link></li>
              <li><Link href="/#approach" className="hover:text-[#D5A547] transition-colors">Our Approach</Link></li>
              <li><Link href="/about/leadership" className="hover:text-[#D5A547] transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-4 text-[13px] uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">Technology</h4>
            <ul className="space-y-3 text-[13px] text-white/70">
              <li><Link href="/products/oyen-grid" className="hover:text-[#D5A547] transition-colors">OYEN GRID</Link></li>
              <li><Link href="/products/verba" className="hover:text-[#D5A547] transition-colors">VERBA</Link></li>
              <li><Link href="/products/orivex" className="hover:text-[#D5A547] transition-colors">ORIVEX</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-4 text-[13px] uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">Connect</h4>
            <ul className="space-y-3 text-[13px] text-white/70">
              <li><Link href="/contact" className="hover:text-[#D5A547] transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#D5A547] transition-colors">Partnerships</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/50">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span>© {currentYear} OYEN GROUP LTD.</span>
            <span className="text-[#D5A547] font-bold tracking-widest uppercase text-[11px] hidden md:inline">Africa and Beyond.</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Link href="/site-information/privacy-notice" className="hover:text-white transition-colors">Privacy</Link>
            <span className="text-white/20">·</span>
            <Link href="/site-information/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
            <span className="text-white/20">·</span>
            <Link href="/site-information" className="hover:text-white transition-colors">Site Information</Link>
            <span className="text-white/20">·</span>
            <button onClick={scrollToTop} className="hover:text-[#D5A547] transition-colors focus:outline-none px-1 font-bold text-sm" aria-label="Back to top">
              ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}