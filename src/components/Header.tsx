'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHomepage = pathname === '/';
  const isSolidBg = scrolled || !isHomepage;

  const productItems = [
    { name: 'OYEN GRID', href: '/products' },
    { name: 'VERBA', href: '/products' },
    { name: 'ORIVEX', href: '/products' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isSolidBg ? 'bg-[#09251F] border-white/10 py-2 shadow-lg' : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Official Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative w-[130px] h-[35px]">
              <Image 
                src="/images/logo.png" 
                alt="OYEN GROUP" 
                fill 
                className="object-contain object-left mix-blend-screen" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto mr-8">
            <Link href="/" className={`text-[14px] font-medium transition-colors duration-300 relative group text-white hover:text-brand-accent`}>
              Home
            </Link>
            
            {/* Dropdown for About */}
            <div 
              className="relative group h-full flex items-center" 
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button 
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`text-[14px] font-medium flex items-center gap-1.5 transition-colors duration-300 relative text-white hover:text-brand-accent ${pathname.startsWith('/about') ? 'text-brand-accent' : ''}`}
              >
                About
                <svg className={`w-3.5 h-3.5 transition-transform duration-300 opacity-70 ${aboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-4 w-56 bg-[#09251F] border border-white/10 shadow-2xl transition-all duration-300 origin-top-left ${aboutOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              >
                <div className="py-2">
                  <Link
                    href="/about"
                    className="block px-6 py-2.5 text-[14px] text-white/90 hover:text-brand-accent hover:bg-white/5 transition-colors"
                    onClick={() => setAboutOpen(false)}
                  >
                    About OYEN GROUP
                  </Link>
                  <Link
                    href="/about/leadership"
                    className="block px-6 py-2.5 text-[14px] text-white/90 hover:text-brand-accent hover:bg-white/5 transition-colors"
                    onClick={() => setAboutOpen(false)}
                  >
                    Leadership & Governance
                  </Link>
                </div>
              </div>
            </div>

            {/* Dropdown for Products */}
            <div 
              className="relative group h-full flex items-center" 
              ref={dropdownRef}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button 
                onClick={() => setProductsOpen(!productsOpen)}
                className={`text-[14px] font-medium flex items-center gap-1.5 transition-colors duration-300 relative text-white hover:text-brand-accent ${pathname.startsWith('/products') ? 'text-brand-accent' : ''}`}
              >
                Our Products
                <svg className={`w-3.5 h-3.5 transition-transform duration-300 opacity-70 ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-4 w-56 bg-[#09251F] border border-white/10 shadow-2xl transition-all duration-300 origin-top-left ${productsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
              >
                <div className="py-2">
                  {productItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-2.5 text-[14px] text-white/90 hover:text-brand-accent hover:bg-white/5 transition-colors"
                      onClick={() => setProductsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/#approach" className={`text-[14px] font-medium transition-colors duration-300 relative group text-white hover:text-brand-accent`}>
              Our Approach
            </Link>
            
            <Link href="/investment" className={`text-[14px] font-medium transition-colors duration-300 relative group text-white hover:text-brand-accent`}>
              Investment
            </Link>
          </nav>

          {/* CTA / Contact */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="text-[14px] font-medium text-white hover:text-brand-accent transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div 
        className={`lg:hidden fixed inset-0 top-[76px] bg-[#09251F] transition-all duration-300 overflow-y-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white tracking-wide border-b border-white/10 pb-4">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white tracking-wide border-b border-white/10 pb-4">About</Link>
          
          <div className="flex flex-col gap-4 border-b border-white/10 pb-4">
            <div className="text-xl font-medium text-white tracking-wide">Our Products</div>
            <div className="flex flex-col gap-3 pl-4">
              {productItems.map(item => (
                <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-lg text-brand-accent">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#approach" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white tracking-wide border-b border-white/10 pb-4">Our Approach</Link>
          <Link href="/investment" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white tracking-wide border-b border-white/10 pb-4">Investment</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white tracking-wide border-b border-white/10 pb-4">Contact</Link>
          
          <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-8 px-6 py-4 text-center font-bold uppercase tracking-[0.15em] text-[#09251F] bg-brand-accent rounded-sm">
            Partner With Us
          </Link>
        </div>
      </div>
    </header>
  );
}
