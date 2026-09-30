import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Governance Framework | OYEN GROUP',
  description: 'Clear responsibility. Effective oversight. Responsible growth.',
};

export default function GovernanceFrameworkPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 font-['Inter',sans-serif]">
      <div className="max-w-[900px] mx-auto px-6 lg:px-0">
        
        {/* Breadcrumb */}
        <div className="mb-16">
          <div className="mb-8 flex items-center text-sm text-[#59636D]">
            <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-[#59636D]">Company</span>
            <span className="mx-2">›</span>
            <Link href="/about/governance" className="hover:text-[#D5A547] transition-colors">Our Governance</Link>
            <span className="mx-2">›</span>
            <span className="text-[#111719] font-medium">Governance Framework</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1]">
            Our Governance Framework
          </h1>
          <p className="text-[#59636D] text-xl md:text-[22px] font-light tracking-wide max-w-2xl">
            Clear responsibility. Effective oversight. Responsible growth.
          </p>
        </div>

        <div className="space-y-24 text-[#111719] leading-relaxed text-[16px] md:text-[17px]">
          
          {/* Introduction */}
          <section>
            <p className="text-[#59636D] text-lg max-w-3xl leading-relaxed">
              OYEN GROUP's governance framework defines how responsibilities, decisions, oversight and accountability are organized across the Group. It ensures a clear structure that supports our operations while maintaining the flexibility necessary for a technology and research organization.
            </p>
          </section>

          {/* Visual Structure */}
          <section className="bg-[#09251F] text-white p-12 rounded-[20px] shadow-lg">
            <h2 className="text-[24px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-10 text-center tracking-tight">
              Organisational Structure
            </h2>
            
            <div className="flex flex-col items-center max-w-2xl mx-auto space-y-6">
              {/* Level 1 */}
              <div className="w-full bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <h3 className="text-[#D5A547] font-bold text-lg font-['Plus_Jakarta_Sans',sans-serif] mb-2">Board / Directors</h3>
                <p className="text-white/80 text-sm">Strategic direction & oversight</p>
              </div>

              {/* Arrow */}
              <div className="text-white/40">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Level 2 */}
              <div className="w-full bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <h3 className="text-[#D5A547] font-bold text-lg font-['Plus_Jakarta_Sans',sans-serif] mb-2">Executive Management</h3>
                <p className="text-white/80 text-sm">Group leadership & major decisions</p>
              </div>

              {/* Arrow */}
              <div className="text-white/40">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Level 3 */}
              <div className="w-full bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <h3 className="text-[#D5A547] font-bold text-lg font-['Plus_Jakarta_Sans',sans-serif] mb-2">Business & Product Leadership</h3>
                <p className="text-white/80 text-sm">Technology • Research • Operations</p>
              </div>

              {/* Arrow */}
              <div className="text-white/40">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Level 4 */}
              <div className="w-full bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <h3 className="text-[#D5A547] font-bold text-lg font-['Plus_Jakarta_Sans',sans-serif] mb-2">Teams & Projects</h3>
                <p className="text-white/80 text-sm">Execution & delivery</p>
              </div>
            </div>
          </section>

          {/* Four Simple Areas */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              
              <div className="flex flex-col border-t border-gray-100 pt-6">
                <span className="text-[#09251F] text-[13px] font-bold tracking-[0.2em] mb-4 font-['Inter',sans-serif]">01</span>
                <h3 className="text-[22px] font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">Strategic Direction</h3>
                <p className="text-[#59636D] leading-relaxed">
                  How priorities and long-term direction are established.
                </p>
              </div>

              <div className="flex flex-col border-t border-gray-100 pt-6">
                <span className="text-[#09251F] text-[13px] font-bold tracking-[0.2em] mb-4 font-['Inter',sans-serif]">02</span>
                <h3 className="text-[22px] font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">Management Responsibility</h3>
                <p className="text-[#59636D] leading-relaxed">
                  How leadership responsibilities and decision-making authority are assigned.
                </p>
              </div>

              <div className="flex flex-col border-t border-gray-100 pt-6">
                <span className="text-[#09251F] text-[13px] font-bold tracking-[0.2em] mb-4 font-['Inter',sans-serif]">03</span>
                <h3 className="text-[22px] font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">Risk & Oversight</h3>
                <p className="text-[#59636D] leading-relaxed">
                  How operational, technology, financial and project risks are considered.
                </p>
              </div>

              <div className="flex flex-col border-t border-gray-100 pt-6">
                <span className="text-[#09251F] text-[13px] font-bold tracking-[0.2em] mb-4 font-['Inter',sans-serif]">04</span>
                <h3 className="text-[22px] font-bold text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">Ethics & Integrity</h3>
                <p className="text-[#59636D] leading-relaxed">
                  The standards expected across OYEN's activities and relationships.
                </p>
              </div>

            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gray-50 border border-gray-100 rounded-[20px] p-10 md:p-14 text-center mt-20">
            <h2 className="text-[24px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-6 text-[#09251F] tracking-tight">
              Responsible Governance as We Grow
            </h2>
            <p className="text-[#59636D] text-lg max-w-2xl mx-auto leading-relaxed">
              OYEN's governance approach is designed to evolve alongside the organisation, strengthening oversight, accountability and responsible decision-making as our activities expand.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
