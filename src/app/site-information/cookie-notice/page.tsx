import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cookie Notice | Site Information | OYEN GROUP',
  description: 'Learn about the cookies and tracking technologies used on the OYEN GROUP website.',
};

export default function CookieNoticePage() {
  const lastUpdated = "September 29, 2026";

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
            <span className="text-[#111719] font-medium">Cookie Notice</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D5A547] block mb-4">
            SITE INFORMATION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Cookie Notice
          </h1>
          <p className="text-[#59636D] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content Column */}
        <div className="space-y-12 text-[#111719] leading-relaxed text-[16px] md:text-[17px]">
          
          <section>
            <p className="mb-4">
              This Cookie Notice explains how OYEN GROUP uses cookies and similar tracking technologies when you visit our corporate website. This Notice aligns with the requirements of the Nigeria Data Protection Commission (NDPC) GAID 2025.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">What are Cookies?</h2>
            <p className="mb-4">
              Cookies are small data files placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites function efficiently, remember your preferences, and provide analytical data to website operators.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Cookie Categories</h2>
            <p className="mb-4">
              Our website utilises the following categories of cookies:
            </p>
            <ul className="list-disc pl-6 space-y-4 mb-4 text-[#59636D]">
              <li><strong>Essential (Strictly Necessary) Cookies:</strong> These are required for the fundamental operation of the website, such as routing traffic or ensuring security. They do not require consent and cannot be disabled through our preference center.</li>
              <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website. This helps us improve the way our website works. These cookies are only placed if you grant consent.</li>
              <li><strong>Functional Cookies:</strong> These are used to recognize you when you return to our website and remember your preferences. These cookies require your consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Managing Your Preferences</h2>
            <p className="mb-4">
              You maintain full control over non-essential cookies. You can accept, reject, or customize your cookie preferences at any time by accessing the <Link href="/site-information" className="text-[#007079] hover:underline">Cookie Consent panel</Link> from our Site Information directory. Furthermore, most web browsers allow you to control cookies through their settings menus.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
