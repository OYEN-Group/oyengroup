import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Site Information | OYEN GROUP',
  description: 'Legal terms and conditions governing the use of the OYEN GROUP corporate website.',
};

export default function TermsAndConditionsPage() {
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
            <span className="text-[#111719] font-medium">Terms and Conditions</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D5A547] block mb-4">
            SITE INFORMATION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-[#59636D] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content Column */}
        <div className="space-y-12 text-[#111719] leading-relaxed text-[16px] md:text-[17px]">
          
          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Legal Notice</h2>
            <p className="mb-4">
              This website is operated by OYEN GROUP LTD ("OYEN GROUP", "we", "us", or "our"), a company registered in Nigeria. Our registered corporate details are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#59636D]">
              <li><strong className="text-[#111719]">Company Registration Number:</strong> [TO BE CONFIRMED]</li>
              <li><strong className="text-[#111719]">Registered Office Address:</strong> [TO BE CONFIRMED]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">About This Website</h2>
            <p className="mb-4">
              The primary purpose of this corporate website is to provide general information regarding OYEN GROUP's structure, governance, approach, and the overarching vision guiding our subsidiary technologies and platforms. The materials contained herein are presented for informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Use of This Website</h2>
            <p className="mb-4">
              By accessing, browsing, or otherwise using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must immediately discontinue your use of our website.
            </p>
            <p className="mb-4">
              You are permitted to use this website solely for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this website by, any third party. Prohibited activities include engaging in data scraping, introducing malicious software, or using the website to transmit unsolicited commercial materials.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, images, digital downloads, software, and the overall design and architecture, is the exclusive property of OYEN GROUP or its content suppliers and is protected by Nigerian and international copyright, trademark, and intellectual property laws.
            </p>
            <p className="mb-4">
              You may view, download, and print pages from the website for your own personal, non-commercial use, provided you do not remove any copyright or proprietary notices. Any reproduction, distribution, or commercial exploitation requires explicit, prior written consent from OYEN GROUP.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Product Information</h2>
            <p className="mb-4">
              OYEN GROUP develops and operates distinct technological products, notably OYEN GRID, VERBA, and ORIVEX. Please be advised that these Terms and Conditions apply <strong>exclusively to the use of the OYEN GROUP corporate website</strong>. 
            </p>
            <p className="mb-4">
              Any subscription, purchase, or access to OYEN GRID, VERBA, or ORIVEX will be governed by entirely separate end-user license agreements, software-as-a-service (SaaS) terms, and product-specific privacy policies, which will be provided upon engagement with those respective platforms.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">External Links</h2>
            <p className="mb-4">
              Our website may contain hyperlinks to external websites or resources operated by third parties. These links are provided for your convenience and informational purposes only. OYEN GROUP does not endorse, control, or assume responsibility for the content, privacy practices, or availability of any third-party websites. Accessing external links is undertaken at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Liability and Applicable Law</h2>
            <p className="mb-4">
              To the fullest extent permitted by Nigerian law, OYEN GROUP shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your access to, use of, or inability to use this corporate website. We do not exclude or limit liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded under applicable law.
            </p>
            <p className="mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">Contact Information</h2>
            <p className="mb-4">
              If you have any questions, concerns, or legal inquiries regarding these Terms and Conditions, please contact our legal team at:
            </p>
            <ul className="list-none space-y-2 mb-4 text-[#59636D]">
              <li><strong className="text-[#111719]">Email:</strong> legal@oyengroup.com</li>
              <li><strong className="text-[#111719]">Registered Address:</strong> [TO BE CONFIRMED]</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
