'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
 const currentYear = new Date().getFullYear();

 return (
 <footer className="bg-[#09251F] text-white pt-24 pb-12 border-t border-brand-secondary">
 <div className="container mx-auto px-6 lg:px-12">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
 
 {/* Brand Column */}
 <div className="lg:col-span-4 space-y-6">
 <Link href="/" className="inline-block relative w-[160px] h-[45px]">
 <Image quality={100} 
 src="/images/logo.png" 
 alt="OYEN GROUP" 
 fill 
 className="object-contain object-left mix-blend-screen" 
 />
 </Link>
 <p className="text-brand-accent text-base font-semibold tracking-widest uppercase">
 People. Ideas. Technology. Real Impact.
 </p>
 </div>

 {/* Quick Links */}
 <div className="lg:col-span-2 lg:col-start-6">
 <h4 className="text-[13px] font-bold text-white uppercase tracking-[0.15em] mb-6">
 Quick Links
 </h4>
 <ul className="space-y-4 text-[13px] tracking-wide text-white/70">
 <li><Link href="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
 <li><Link href="/about" className="hover:text-brand-accent transition-colors">About</Link></li>
 <li><Link href="/about/leadership" className="hover:text-brand-accent transition-colors">Leadership & Structure</Link></li>
 <li><Link href="/products" className="hover:text-brand-accent transition-colors">Our Products</Link></li>
 <li><Link href="/#approach" className="hover:text-brand-accent transition-colors">Our Approach</Link></li>
 <li><Link href="/investment" className="hover:text-brand-accent transition-colors">Investment</Link></li>
 <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Contact</Link></li>
 </ul>
 </div>

 {/* Our Products */}
 <div className="lg:col-span-3">
 <h4 className="text-[13px] font-bold text-white uppercase tracking-[0.15em] mb-6">
 Our Products
 </h4>
 <ul className="space-y-4 text-[13px] tracking-wide text-white/70">
 <li><Link href="/products" className="hover:text-brand-accent transition-colors">OYEN GRID</Link></li>
 <li><Link href="/products" className="hover:text-brand-accent transition-colors">VERBA</Link></li>
 <li><Link href="/products" className="hover:text-brand-accent transition-colors">ORIVEX</Link></li>
 </ul>
 </div>

 {/* Contact */}
 <div className="lg:col-span-2">
 <h4 className="text-[13px] font-bold text-white uppercase tracking-[0.15em] mb-6">
 Contact
 </h4>
 <ul className="space-y-4 text-[13px] tracking-wide text-white/70">
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

 {/* Legal Bar */}
 <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-base tracking-wide text-white/50">
 <div>
 &copy; {currentYear} OYEN GROUP. All rights reserved. | <span className="text-brand-accent">Africa and Beyond.</span>
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
