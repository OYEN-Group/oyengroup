import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Disclaimers | Site Information | OYEN GROUP',
  description: 'Important information about our published materials.',
};

export default function DisclaimersPage() {
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
            <span className="text-[#111719] font-medium">Disclaimers</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D5A547] block mb-4">
            SITE INFORMATION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Disclaimers
          </h1>
          <p className="text-[#59636D] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content Column */}
        <div className="space-y-12 text-[#111719] leading-relaxed text-[16px] md:text-[17px]">
          
          <section>
            <p className="mb-4">
              The information contained on the OYEN GROUP corporate website is for general informational purposes only. By accessing this website, you acknowledge and agree to the following disclaimers.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">General Information Disclaimer</h2>
            <p className="mb-4">
              While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Product Representations</h2>
            <p className="mb-4">
              Mentions, descriptions, or visual representations of OYEN GRID, VERBA, ORIVEX, or any future products on this corporate website do not constitute a binding offer of sale, a service-level agreement, or a guarantee of features. Product specifications and availability are subject to change without notice and are governed entirely by their respective product terms and conditions upon purchase or subscription.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Third-Party Materials</h2>
            <p className="mb-4">
              Any opinions, advice, statements, services, offers, or other information expressed or made available by third parties (including through linked external websites) are those of the respective author(s) or distributor(s) and not of OYEN GROUP. We neither endorse nor guarantee the accuracy or completeness of any third-party materials.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
