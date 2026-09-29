import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Notice | Site Information | OYEN GROUP',
  description: 'How we collect, use and protect personal information.',
};

export default function PrivacyNoticePage() {
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
            <span className="text-[#111719] font-medium">Privacy Notice</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D5A547] block mb-4">
            SITE INFORMATION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Privacy Notice
          </h1>
          <p className="text-[#59636D] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content Column */}
        <div className="space-y-12 text-[#111719] leading-relaxed text-[16px] md:text-[17px]">
          
          <section>
            <p className="mb-4">
              At OYEN GROUP, we are committed to protecting your personal data and respecting your privacy. This Privacy Notice explains how we collect, use, retain, and safeguard personal information when you interact with our corporate website, in accordance with the Nigeria Data Protection Act 2023 (NDPA) and applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Data Collection</h2>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when communicating via email, submitting an inquiry through our contact forms, or subscribing to our newsletters. This may include your name, email address, corporate affiliation, and phone number.
            </p>
            <p className="mb-4">
              We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, and interaction metrics, primarily through the use of cookies (as detailed in our Cookie Notice).
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Lawful Bases for Processing</h2>
            <p className="mb-4">
              We process your personal data based on one or more of the following lawful grounds:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#59636D]">
              <li><strong>Consent:</strong> Where you have provided clear consent for us to process your personal data for a specific purpose.</li>
              <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate corporate interests, provided those interests do not override your fundamental rights.</li>
              <li><strong>Legal Obligation:</strong> Where processing is required to comply with a statutory or regulatory mandate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Data Sharing and Third Parties</h2>
            <p className="mb-4">
              OYEN GROUP does not sell your personal data. We may share your information with trusted third-party service providers (such as hosting partners or analytics providers) solely to facilitate the operation of this website. All third parties are contractually obligated to protect your data and comply with the NDPA.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Your Rights</h2>
            <p className="mb-4">
              Under the NDPA, you possess certain rights regarding your personal data, including the right to access, rectify, or request the deletion of your data. You also have the right to withdraw consent at any time where we rely on consent to process your information.
            </p>
            <p className="mb-4">
              To exercise these rights, please contact our Data Protection Officer at <strong>privacy@oyengroup.com</strong>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
