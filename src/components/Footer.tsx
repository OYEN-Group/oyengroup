'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12 border-t border-brand-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight font-heading text-white">
                OYEN<span className="text-brand-accent">GROUP</span>
              </span>
            </Link>
            <p className="text-brand-accent text-sm font-semibold tracking-widest uppercase">
              People. Ideas. Technology. Real Impact.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors duration-300">
                <span className="sr-only">X</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link href="/businesses" className="hover:text-brand-accent transition-colors">Our Businesses</Link></li>
              <li><Link href="/investment" className="hover:text-brand-accent transition-colors">Investment</Link></li>
              <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Businesses */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Our Businesses
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link href="/businesses/energy" className="hover:text-brand-accent transition-colors">Oyen Energy</Link></li>
              <li><Link href="/businesses/tech" className="hover:text-brand-accent transition-colors">Oyen Tech</Link></li>
              <li><Link href="/businesses/agro" className="hover:text-brand-accent transition-colors">Oyen Agro</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <a href="mailto:oyengroupp@gmail.com" className="hover:text-brand-accent transition-colors">
                  oyengroupp@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2348031637724" className="hover:text-brand-accent transition-colors">
                  +234 803 163 7724
                </a>
              </li>
              <li>
                Lagos, Nigeria
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <div>
            &copy; {currentYear} Oyen Group. All rights reserved. | <span className="text-brand-accent">Africa and Beyond.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
