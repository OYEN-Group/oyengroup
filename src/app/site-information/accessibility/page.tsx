import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Accessibility | Site Information | OYEN GROUP',
  description: 'Our approach to an accessible digital experience.',
};

export default function AccessibilityPage() {
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
            <span className="text-[#111719] font-medium">Accessibility</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D5A547] block mb-4">
            SITE INFORMATION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Accessibility
          </h1>
          <p className="text-[#59636D] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content Column */}
        <div className="space-y-12 text-[#111719] leading-relaxed text-[16px] md:text-[17px]">
          
          <section>
            <p className="mb-4">
              OYEN GROUP is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to our corporate website.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Our Standards</h2>
            <p className="mb-4">
              We aim to design our digital platforms in accordance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Accessibility Features</h2>
            <p className="mb-4">
              Current accessibility features implemented on this website include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#59636D]">
              <li>Semantic HTML to ensure compatibility with screen readers.</li>
              <li>High-contrast text elements for readability.</li>
              <li>Keyboard-navigable structural layouts.</li>
              <li>Minimal use of unprompted animations or flashing imagery.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Known Limitations</h2>
            <p className="mb-4">
              While we strive to adhere to accepted guidelines and standards for accessibility and usability, it is not always possible to do so in all areas of the website. We are currently reviewing our media assets and legacy documents to ensure full compliance.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Feedback and Assistance</h2>
            <p className="mb-4">
              We welcome your feedback on the accessibility of the OYEN GROUP website. If you encounter any accessibility barriers or require information in an alternative format, please contact us at:
            </p>
            <ul className="list-none space-y-2 mb-4 text-[#59636D]">
              <li><strong className="text-[#111719]">Email:</strong> accessibility@oyengroup.com</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
