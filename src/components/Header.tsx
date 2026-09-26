'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Products', href: '/products' },
    { name: 'Our Approach', href: '/#approach' },
    { name: 'Investment', href: '/investment' },
    { name: 'Contact', href: '/contact' },
  ];

  // If we are not on the homepage, the header should have a solid background by default
  const isHomepage = pathname === '/';
  const isSolidBg = scrolled || !isHomepage;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolidBg ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold tracking-tight font-heading ${
              isSolidBg ? 'text-brand-primary' : 'text-white'
            }`}>
              OYEN<span className="text-brand-accent">GROUP</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                  isSolidBg ? 'text-brand-primary hover:text-brand-accent' : 'text-white hover:text-brand-accent-soft'
                }`}
              >
                {item.name}
                {/* Active Indicator */}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-accent rounded-full" />
                )}
                {/* Hover Indicator */}
                {pathname !== item.href && (
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-accent rounded-full transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className={`px-6 py-3 text-sm font-semibold tracking-wider rounded-sm transition-all duration-300 flex items-center gap-2 group ${
                isSolidBg 
                  ? 'bg-brand-primary hover:bg-brand-secondary text-white' 
                  : 'bg-brand-accent hover:bg-brand-accent-soft text-brand-primary'
              }`}
            >
              Partner With Us
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 focus:outline-none ${isSolidBg ? 'text-brand-primary' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 border-t border-gray-100">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium ${
                pathname === item.href ? 'text-brand-accent' : 'text-brand-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full bg-brand-primary text-white py-4 rounded-sm font-semibold tracking-wider uppercase text-sm"
            >
              Partner With Us →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
