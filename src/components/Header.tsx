'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Dropdown states
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
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
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHomepage = pathname === '/';
  const isSolidBg = scrolled || !isHomepage;

  const navItems = [
    { name: 'Home', href: '/', dropdown: null },
    { 
      name: 'Technology', 
      href: '#', 
      dropdown: [
        { name: 'OYEN GRID', href: '/products/oyen-grid' },
        { name: 'VERBA', href: '/products/verba' },
        { name: 'ORIVEX', href: '/products/orivex' },
      ] 
    },
    { 
      name: 'Solutions', 
      href: '#', 
      dropdown: [
        { name: 'Solutions', href: '/products' },
        { name: 'Training & Programme Management', href: '/products/oyen-grid' },
        { name: 'Academic Research & Writing', href: '/products/verba' },
        { name: 'Industrial Intelligence', href: '/products/orivex' },
        { name: 'Digital Solutions', href: '/products/digital' },
        { name: 'Strategic Collaboration', href: '/products/collaboration' },
      ] 
    },
    { 
      name: 'Suppliers', 
      href: '#', 
      dropdown: [
        { name: 'Become a Supplier', href: '/suppliers/become-a-supplier' },
        { name: 'Supplier Guidelines', href: '/suppliers/guidelines' },
        { name: 'Supplier Enquiries', href: '/suppliers/enquiries' },
      ] 
    },
    { 
      name: 'Company', 
      href: '#', 
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'Investment', href: '/investment' },
        { name: 'Contact', href: '/contact' },
      ] 
    },
    { name: 'Careers', href: '/careers', dropdown: null },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b flex flex-col ${
        isSolidBg ? 'bg-[#09251F] border-white/10 shadow-lg' : 'bg-transparent border-transparent'
      }`}
    >
      {/* Utility Bar */}
      <div 
        className={`w-full bg-[#0d0d0d]/40 transition-all duration-300 hidden md:flex items-center overflow-hidden ${
          scrolled ? 'h-0 opacity-0' : 'h-[28px] opacity-100'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-[#B8BFBC] text-[11px] font-['Inter',sans-serif]">
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors duration-300">English</Link>
            <span className="opacity-30">|</span>
            <Link href="/contact" className="hover:text-white transition-colors duration-300">Global Contacts</Link>
          </div>
          <div className="flex items-center gap-1.5 group cursor-pointer hover:text-white transition-colors duration-300">
            <span>OYEN GROUP · Nigeria</span>
            <svg className="w-3 h-3 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className={`container mx-auto px-6 lg:px-12 transition-all duration-500 ${isSolidBg ? 'py-2' : 'pt-4 pb-4 md:pt-3'}`}>
        <div className="flex items-center justify-between">
          
          {/* Official Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative w-[150px] h-[40px] md:w-[170px] md:h-[45px]">
              <Image quality={100} 
                src="/images/logo_transparent.png" 
                alt="OYEN GROUP" 
                fill 
                className="object-contain object-left" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ml-auto" ref={dropdownRef}>
            {navItems.map((item) => (
              item.dropdown ? (
                <div 
                  key={item.name}
                  className="relative group h-full flex items-center py-2" 
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="text-[14px] font-bold flex items-center gap-1.5 transition-colors duration-300 relative text-white hover:text-brand-accent font-['Inter',sans-serif]"
                  >
                    {item.name}
                    <svg className={`w-3.5 h-3.5 transition-transform duration-300 opacity-70 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <div 
                    className={`absolute top-full left-0 mt-2 min-w-[240px] w-auto whitespace-nowrap bg-[#09251F] border border-white/10 shadow-2xl transition-all duration-300 origin-top-left ${activeDropdown === item.name ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block px-6 py-3 text-[15px] font-medium text-white/95 hover:text-brand-accent hover:bg-white/5 transition-colors font-['Inter',sans-serif]"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-[14px] font-bold transition-colors duration-300 relative group text-white hover:text-brand-accent font-['Inter',sans-serif] py-2"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white focus:outline-none ml-auto"
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
          {navItems.map((item) => (
            item.dropdown ? (
              <div key={item.name} className="flex flex-col gap-4 border-b border-white/10 pb-4">
                <div className="text-xl font-bold text-white tracking-wide font-['Plus_Jakarta_Sans',sans-serif]">{item.name}</div>
                <div className="flex flex-col gap-3 pl-4">
                  {item.dropdown.map((dropItem) => (
                    <Link key={dropItem.name} href={dropItem.href} onClick={() => setIsOpen(false)} className="text-lg text-brand-accent font-medium font-['Inter',sans-serif]">
                      {dropItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-xl font-bold text-white tracking-wide border-b border-white/10 pb-4 font-['Plus_Jakarta_Sans',sans-serif]">
                {item.name}
              </Link>
            )
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-8 px-6 py-4 text-center font-bold uppercase tracking-[0.15em] text-[#09251F] bg-brand-accent rounded-sm">
            Partner With Us
          </Link>
        </div>
      </div>
    </header>
  );
}