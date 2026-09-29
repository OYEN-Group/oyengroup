import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Site Information | OYEN GROUP',
  description: 'Important information about our website, policies, accessibility and the protection of our visitors.',
};

const entries = [
  {
    title: 'Cookie Consent',
    description: 'Manage your privacy and cookie preferences.',
    href: '#cookie-consent-panel',
    isAction: true,
  },
  {
    title: 'Cookie Notice',
    description: 'Learn about the cookies and tracking technologies used.',
    href: '/site-information/cookie-notice',
  },
  {
    title: 'Scam & Fraud Alert',
    description: 'Recognise fraudulent communications and impersonation.',
    href: '/site-information/scam-alert',
  },
  {
    title: 'Terms and Conditions',
    description: 'Understand the conditions governing website use.',
    href: '/site-information/terms-and-conditions',
  },
  {
    title: 'Privacy Notice',
    description: 'How we collect, use and protect personal information.',
    href: '/site-information/privacy-notice',
  },
  {
    title: 'Disclaimers',
    description: 'Important information about our published materials.',
    href: '/site-information/disclaimers',
  },
  {
    title: 'Accessibility',
    description: 'Our approach to an accessible digital experience.',
    href: '/site-information/accessibility',
  },
  {
    title: 'Sitemap',
    description: 'Explore the structure of the OYEN GROUP website.',
    href: '/site-information/sitemap',
  },
];

export default function SiteInformationPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-['Inter',sans-serif]">
      <div className="max-w-[800px] mx-auto px-6 lg:px-0">
        
        {/* Breadcrumb */}
        <div className="mb-16">
          <div className="mb-8 flex items-center text-sm text-[#59636D]">
            <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#111719] font-medium">Site Information</span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Site Information
          </h1>
          <p className="text-[#59636D] text-[17px] leading-relaxed">
            Important information about our website, policies, accessibility and the protection of our visitors.
          </p>
        </div>

        {/* Directory Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 border-t border-gray-100 pt-12">
          {entries.map((entry, idx) => (
            <div key={idx} className="flex flex-col">
              {entry.isAction ? (
                <button className="text-left group cursor-pointer" type="button">
                  <h2 className="text-[19px] font-bold text-[#111719] mb-2 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#D5A547] transition-colors">
                    {entry.title}
                  </h2>
                  <p className="text-[15px] text-[#59636D] leading-relaxed">
                    {entry.description}
                  </p>
                </button>
              ) : (
                <Link href={entry.href} className="group">
                  <h2 className="text-[19px] font-bold text-[#111719] mb-2 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#D5A547] transition-colors">
                    {entry.title}
                  </h2>
                  <p className="text-[15px] text-[#59636D] leading-relaxed">
                    {entry.description}
                  </p>
                </Link>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
