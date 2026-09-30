import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sitemap | Site Information | OYEN GROUP',
  description: 'Explore the structure of the OYEN GROUP website.',
};

export default function SitemapPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-['Inter',sans-serif]">
      <div className="max-w-[700px] mx-auto px-6 lg:px-0">
        
        {/* Breadcrumb */}
        <div className="mb-16">
          <div className="mb-8 flex items-center text-sm text-[#59636D]">
            <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/site-information" className="hover:text-[#D5A547] transition-colors">Site Information</Link>
            <span className="mx-2">/</span>
            <span className="text-[#111719] font-medium">Sitemap</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D5A547] block mb-4">
            SITE INFORMATION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Sitemap
          </h1>
        </div>

        {/* Content Column */}
        <div className="space-y-12 text-[#111719] leading-relaxed text-[16px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Category 1 */}
            <div>
              <h2 className="text-[20px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-6 text-[#09251F] border-b border-gray-200 pb-2">Main Navigation</h2>
              <ul className="space-y-4 text-[#59636D]">
                <li><Link href="/" className="hover:text-[#D5A547] hover:underline transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#D5A547] hover:underline transition-colors">About Us</Link></li>
                <li><Link href="/about/leadership" className="hover:text-[#D5A547] hover:underline transition-colors">Leadership</Link></li>
                <li><Link href="/services" className="hover:text-[#D5A547] hover:underline transition-colors">Solutions</Link></li>
                <li><Link href="/contact" className="hover:text-[#D5A547] hover:underline transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Category 2 */}
            <div>
              <h2 className="text-[20px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-6 text-[#09251F] border-b border-gray-200 pb-2">Technology Products</h2>
              <ul className="space-y-4 text-[#59636D]">
                <li><Link href="/products/oyen-grid" className="hover:text-[#D5A547] hover:underline transition-colors">OYEN GRID</Link></li>
                <li><Link href="/products/verba" className="hover:text-[#D5A547] hover:underline transition-colors">VERBA</Link></li>
                <li><Link href="/products/orivex" className="hover:text-[#D5A547] hover:underline transition-colors">ORIVEX</Link></li>
                <li><Link href="/products/oyen-grid" className="hover:text-[#D5A547] hover:underline transition-colors">Training & Programme Management</Link></li>
                <li><Link href="/products/academic" className="hover:text-[#D5A547] hover:underline transition-colors">Academic Research & Writing</Link></li>
              </ul>
            </div>

            {/* Category 3 */}
            <div>
              <h2 className="text-[20px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-6 text-[#09251F] border-b border-gray-200 pb-2">Media & Connect</h2>
              <ul className="space-y-4 text-[#59636D]">
                <li><Link href="/news" className="hover:text-[#D5A547] hover:underline transition-colors">Newsroom</Link></li>
                <li><Link href="/careers" className="hover:text-[#D5A547] hover:underline transition-colors">Careers</Link></li>
                <li><Link href="/suppliers" className="hover:text-[#D5A547] hover:underline transition-colors">Suppliers</Link></li>
              </ul>
            </div>

            {/* Category 4 */}
            <div>
              <h2 className="text-[20px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-6 text-[#09251F] border-b border-gray-200 pb-2">Site Information</h2>
              <ul className="space-y-4 text-[#59636D]">
                <li><Link href="/site-information" className="hover:text-[#D5A547] hover:underline transition-colors">Site Information Directory</Link></li>
                <li><Link href="/site-information/terms-and-conditions" className="hover:text-[#D5A547] hover:underline transition-colors">Terms and Conditions</Link></li>
                <li><Link href="/site-information/privacy-notice" className="hover:text-[#D5A547] hover:underline transition-colors">Privacy Notice</Link></li>
                <li><Link href="/site-information/cookie-notice" className="hover:text-[#D5A547] hover:underline transition-colors">Cookie Notice</Link></li>
                <li><Link href="/site-information/scam-alert" className="hover:text-[#D5A547] hover:underline transition-colors">Scam & Fraud Alert</Link></li>
                <li><Link href="/site-information/disclaimers" className="hover:text-[#D5A547] hover:underline transition-colors">Disclaimers</Link></li>
                <li><Link href="/site-information/accessibility" className="hover:text-[#D5A547] hover:underline transition-colors">Accessibility</Link></li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
