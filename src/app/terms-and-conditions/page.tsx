import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | OYEN GROUP',
  description: 'Legal terms and conditions governing the use of the OYEN GROUP corporate website.',
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "September 29, 2026";

  const sections = [
    { id: "legal-notice", title: "01. Legal Notice" },
    { id: "about-oyen-group", title: "02. About OYEN GROUP" },
    { id: "acceptance-of-terms", title: "03. Acceptance of Terms" },
    { id: "permitted-website-use", title: "04. Permitted Website Use" },
    { id: "intellectual-property", title: "05. Intellectual Property Rights" },
    { id: "product-information", title: "06. Information About OYEN GRID, VERBA and ORIVEX" },
    { id: "third-party-websites", title: "07. Third-Party Websites and External Links" },
    { id: "privacy-and-data", title: "08. Privacy and Personal Data" },
    { id: "cookies", title: "09. Cookies and Tracking Technologies" },
    { id: "disclaimer", title: "10. Accuracy of Information and Disclaimer" },
    { id: "limitation-of-liability", title: "11. Limitation of Liability" },
    { id: "website-availability", title: "12. Website Availability and Maintenance" },
    { id: "changes-to-terms", title: "13. Changes to These Terms" },
    { id: "governing-law", title: "14. Governing Law and Dispute Resolution" },
    { id: "contact-information", title: "15. Contact Information" },
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-['Inter',sans-serif]">
      <div className="max-w-[800px] mx-auto px-6 lg:px-0">
        
        {/* Page Header */}
        <div className="mb-16">
          <div className="mb-8 flex items-center text-sm text-[#59636D]">
            <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#59636D]">Legal</span>
            <span className="mx-2">/</span>
            <span className="text-[#111719] font-medium">Terms and Conditions</span>
          </div>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D5A547] block mb-4">
            LEGAL INFORMATION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-[#59636D] text-sm">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-[#F8F9FA] p-8 rounded-xl mb-16 border border-gray-100">
          <h2 className="text-sm font-bold text-[#111719] uppercase tracking-wider mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
            On This Page
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {sections.map((section) => (
              <a 
                key={section.id} 
                href={`#${section.id}`}
                className="text-sm text-[#007079] hover:text-[#D5A547] transition-colors hover:underline"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Document Content */}
        <div className="space-y-12 text-[#111719] leading-relaxed text-[16px] md:text-[17px]">
          
          <section id="legal-notice" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">01. Legal Notice</h2>
            <p className="mb-4">
              This website is operated by OYEN GROUP LTD ("OYEN GROUP", "we", "us", or "our"), a company registered in Nigeria. Our registered corporate details are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#59636D]">
              <li><strong className="text-[#111719]">Company Registration Number:</strong> [TO BE CONFIRMED]</li>
              <li><strong className="text-[#111719]">Registered Office Address:</strong> [TO BE CONFIRMED]</li>
            </ul>
          </section>

          <section id="about-oyen-group" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">02. About OYEN GROUP</h2>
            <p className="mb-4">
              The primary purpose of this corporate website is to provide general information regarding OYEN GROUP's structure, governance, approach, and the overarching vision guiding our subsidiary technologies and platforms. The materials contained herein are presented for informational purposes only.
            </p>
          </section>

          <section id="acceptance-of-terms" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">03. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing, browsing, or otherwise using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must immediately discontinue your use of our website. We recommend that you print or save a copy of these Terms and Conditions for future reference.
            </p>
          </section>

          <section id="permitted-website-use" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">04. Permitted Website Use</h2>
            <p className="mb-4">
              You are permitted to use this website solely for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this website by, any third party. 
            </p>
            <p className="mb-4">
              Prohibited activities include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#59636D]">
              <li>Engaging in data mining, data scraping, or deploying automated systems to extract content without prior written authorisation.</li>
              <li>Introducing malicious software, viruses, or disruptive code to our network.</li>
              <li>Attempting unauthorized access to the website's administrative systems or hosting servers.</li>
              <li>Using the website to transmit unsolicited promotional or commercial materials.</li>
            </ul>
          </section>

          <section id="intellectual-property" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">05. Intellectual Property Rights</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, images, digital downloads, software, and the overall design and architecture, is the exclusive property of OYEN GROUP or its content suppliers and is protected by Nigerian and international copyright, trademark, and intellectual property laws.
            </p>
            <p className="mb-4">
              You may view, download, and print pages from the website for your own personal, non-commercial use, provided you do not remove any copyright or proprietary notices. Any reproduction, distribution, or commercial exploitation of our intellectual property requires explicit, prior written consent from OYEN GROUP.
            </p>
          </section>

          <section id="product-information" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">06. Information About OYEN GRID, VERBA and ORIVEX</h2>
            <p className="mb-4">
              OYEN GROUP develops and operates distinct technological products, notably OYEN GRID, VERBA, and ORIVEX. Please be advised that these Terms and Conditions apply <strong>exclusively to the use of the OYEN GROUP corporate website</strong>. 
            </p>
            <p className="mb-4">
              Any subscription, purchase, or access to OYEN GRID, VERBA, or ORIVEX will be governed by entirely separate end-user license agreements, software-as-a-service (SaaS) terms, and product-specific privacy policies, which will be provided upon engagement with those respective platforms.
            </p>
          </section>

          <section id="third-party-websites" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">07. Third-Party Websites and External Links</h2>
            <p className="mb-4">
              Our website may contain hyperlinks to external websites or resources operated by third parties. These links are provided for your convenience and informational purposes only. OYEN GROUP does not endorse, control, or assume responsibility for the content, privacy practices, or availability of any third-party websites. Accessing external links is undertaken at your own risk.
            </p>
          </section>

          <section id="privacy-and-data" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">08. Privacy and Personal Data</h2>
            <p className="mb-4">
              We take your privacy seriously and are committed to protecting any personal data you may provide to us. All personal data collected through this website is processed in strict accordance with the Nigeria Data Protection Act 2023 (NDPA) and other applicable regulatory frameworks. 
            </p>
            <p className="mb-4">
              For comprehensive information on how we collect, use, store, and safeguard your personal information, as well as an explanation of your statutory rights, please review our separate <Link href="/privacy" className="text-[#007079] hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section id="cookies" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">09. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              This website employs cookies and similar tracking technologies to ensure core site functionality, analyze visitor traffic, and enhance user experience. By navigating our website, you consent to the placement of essential cookies. You reserve the right to manage or decline non-essential cookies via your browser settings.
            </p>
          </section>

          <section id="disclaimer" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">10. Accuracy of Information and Disclaimer</h2>
            <p className="mb-4">
              While OYEN GROUP makes reasonable efforts to ensure that the information published on this website is accurate and up-to-date at the time of publication, we make no representations, warranties, or guarantees—whether express or implied—that the content is entirely complete, accurate, or error-free.
            </p>
            <p className="mb-4">
              The information provided on this website does not constitute formal professional, financial, or legal advice, and should not be relied upon as such.
            </p>
          </section>

          <section id="limitation-of-liability" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">11. Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by Nigerian law, OYEN GROUP, its directors, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with your access to, use of, or inability to use this corporate website. 
            </p>
            <p className="mb-4">
              This limitation applies to potential damages caused by viruses, cyber-attacks, or any reliance placed on the materials provided herein. We do not exclude or limit liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded under applicable law.
            </p>
          </section>

          <section id="website-availability" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">12. Website Availability and Maintenance</h2>
            <p className="mb-4">
              We endeavor to maintain uninterrupted access to this website; however, OYEN GROUP reserves the right to suspend, withdraw, or restrict the availability of all or any part of our website for business, operational, or maintenance reasons without prior notice. We shall not be held liable if the website is unavailable at any time or for any period.
            </p>
          </section>

          <section id="changes-to-terms" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">13. Changes to These Terms</h2>
            <p className="mb-4">
              We reserve the right to amend, update, or revise these Terms and Conditions at our discretion. Any modifications will be posted directly on this page, and the "Last updated" date at the top of the document will reflect the date of the most recent revision. Your continued use of the website following any changes constitutes your acceptance of the revised Terms and Conditions.
            </p>
          </section>

          <section id="governing-law" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">14. Governing Law and Dispute Resolution</h2>
            <p className="mb-4">
              These Terms and Conditions, and any disputes or claims arising out of or in connection with them (including non-contractual disputes), shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
            </p>
            <p className="mb-4">
              By using this website, you irrevocably agree that the courts of Nigeria shall have exclusive jurisdiction to settle any dispute or claim arising from your use of this website.
            </p>
          </section>

          <section id="contact-information" className="scroll-mt-32">
            <h2 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-[#09251F]">15. Contact Information</h2>
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
