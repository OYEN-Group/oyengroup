import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Scam & Fraud Alert | Site Information | OYEN GROUP',
  description: 'Recognise fraudulent communications and impersonation.',
};

export default function ScamAlertPage() {
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
            <span className="text-[#111719] font-medium">Scam & Fraud Alert</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D5A547] block mb-4">
            SITE INFORMATION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Scam & Fraud Alert
          </h1>
          <p className="text-[#59636D] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content Column */}
        <div className="space-y-12 text-[#111719] leading-relaxed text-[16px] md:text-[17px]">
          
          <section>
            <p className="mb-4">
              OYEN GROUP has been made aware of fraudulent communications originating from unauthorized individuals or organizations falsely claiming to represent our company, our executives, or our subsidiary platforms (OYEN GRID, VERBA, ORIVEX).
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Recognizing Fraudulent Communications</h2>
            <p className="mb-4">
              Please be vigilant. Scammers may use deceptive email addresses, forged letterheads, or fake social media profiles to propose fake investment opportunities, job offers, or partnership agreements. 
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#59636D]">
              <li><strong>Official Communication:</strong> OYEN GROUP and its representatives will only communicate with you via official company email addresses ending in <strong>@oyengroup.com</strong>.</li>
              <li><strong>Payments:</strong> We will never ask for payment, processing fees, or bank details via unsolicited emails, text messages, or social media platforms.</li>
              <li><strong>Recruitment:</strong> Legitimate recruitment processes are conducted formally, and we do not request advance fees for job applications or training materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Reporting Suspicious Activity</h2>
            <p className="mb-4">
              If you receive a suspicious communication claiming to be from OYEN GROUP, do not reply, do not click on any links, and do not provide any personal or financial information. 
            </p>
            <p className="mb-4">
              Please report any suspected fraudulent activity to our security team immediately at <strong>security@oyengroup.com</strong>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
