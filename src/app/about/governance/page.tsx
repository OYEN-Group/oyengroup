import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Governance | OYEN GROUP',
  description: 'The principles, structures and responsibilities that guide how we operate and grow.',
};

export default function GovernancePage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 font-['Inter',sans-serif]">
      <div className="max-w-[900px] mx-auto px-6 lg:px-0">
        
        {/* Breadcrumb */}
        <div className="mb-16">
          <div className="mb-8 flex items-center text-sm text-[#59636D]">
            <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-[#59636D]">Company</span>
            <span className="mx-2">/</span>
            <span className="text-[#111719] font-medium">Governance</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D5A547] block mb-4">
            OUR GOVERNANCE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            A Foundation of Trust.
          </h1>
          <p className="text-[#59636D] text-lg md:text-xl leading-relaxed max-w-2xl">
            At OYEN GROUP, governance provides the framework for responsible decision-making, accountability and sustainable growth across our activities.
          </p>
        </div>

        <div className="space-y-24 text-[#111719] leading-relaxed text-[16px] md:text-[17px]">
          
          {/* Section 1 — Governance Overview */}
          <section>
            <h2 className="text-[28px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-6 text-[#09251F] tracking-tight">
              Guided by Purpose. Grounded in Accountability.
            </h2>
            <p className="text-[#59636D] text-lg max-w-3xl leading-relaxed">
              OYEN GROUP's governance approach establishes clear responsibilities, encourages transparency and supports responsible decision-making across our technology, research and business activities.
            </p>
          </section>

          {/* Section 2 — Leadership & Oversight */}
          <section className="border-t border-gray-100 pt-16">
            <h2 className="text-[28px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-6 text-[#09251F] tracking-tight">
              The People Behind Our Direction.
            </h2>
            <p className="text-[#59636D] mb-8 max-w-3xl leading-relaxed">
              Our leadership team comprises founders, executive management, and formally appointed directors who collectively guide our strategic vision. They ensure that our operations align with our core values, driving both innovation and ethical conduct at every level of the organization.
            </p>
            <Link href="/about/leadership" className="inline-flex items-center text-[#09251F] font-bold group">
              Meet Our Leadership
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </section>

          {/* Section 3 — Our Governance Framework */}
          <section className="border-t border-gray-100 pt-16">
            <h2 className="text-[28px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-10 text-[#09251F] tracking-tight">
              Our Governance Framework
            </h2>
            <div className="flex flex-col border-t border-gray-200">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row py-6 border-b border-gray-200 gap-4 md:gap-12">
                <div className="w-full md:w-1/3 font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">Strategic Direction</div>
                <div className="w-full md:w-2/3 text-[#59636D]">Organisational priorities and long-term planning</div>
              </div>
              {/* Row 2 */}
              <div className="flex flex-col md:flex-row py-6 border-b border-gray-200 gap-4 md:gap-12">
                <div className="w-full md:w-1/3 font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">Management Responsibility</div>
                <div className="w-full md:w-2/3 text-[#59636D]">Operational oversight and accountability</div>
              </div>
              {/* Row 3 */}
              <div className="flex flex-col md:flex-row py-6 border-b border-gray-200 gap-4 md:gap-12">
                <div className="w-full md:w-1/3 font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">Ethics & Integrity</div>
                <div className="w-full md:w-2/3 text-[#59636D]">Professional conduct and responsible practices</div>
              </div>
              {/* Row 4 */}
              <div className="flex flex-col md:flex-row py-6 border-b border-gray-200 gap-4 md:gap-12">
                <div className="w-full md:w-1/3 font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">Risk Management</div>
                <div className="w-full md:w-2/3 text-[#59636D]">Identifying and managing organisational risks</div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Section 4 — Our Commitment */}
      <section className="bg-[#09251F] text-white py-24 mt-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-0">
          <h2 className="text-[28px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-12 tracking-tight">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <span className="text-[#D5A547] text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans',sans-serif]">01</span>
              <h3 className="font-bold text-lg mb-2">Accountability</h3>
            </div>
            <div className="flex flex-col">
              <span className="text-[#D5A547] text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans',sans-serif]">02</span>
              <h3 className="font-bold text-lg mb-2">Transparency</h3>
            </div>
            <div className="flex flex-col">
              <span className="text-[#D5A547] text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans',sans-serif]">03</span>
              <h3 className="font-bold text-lg mb-2">Integrity</h3>
            </div>
            <div className="flex flex-col">
              <span className="text-[#D5A547] text-3xl font-bold mb-4 font-['Plus_Jakarta_Sans',sans-serif]">04</span>
              <h3 className="font-bold text-lg mb-2">Responsible Innovation</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Governance & Corporate Information */}
      <section className="max-w-[900px] mx-auto px-6 lg:px-0 mt-24">
        <h2 className="text-[24px] font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-8 text-[#09251F] tracking-tight">
          Corporate Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
          <Link href="/about/leadership" className="text-[#007079] font-medium hover:text-[#D5A547] hover:underline transition-colors py-2 border-b border-gray-100 flex justify-between items-center group">
            Our Leadership
            <span className="text-gray-300 group-hover:text-[#D5A547] transition-colors">→</span>
          </Link>
          <div className="text-[#59636D] font-medium py-2 border-b border-gray-100 flex justify-between items-center opacity-60 cursor-not-allowed" title="Document in preparation">
            Organisational Structure
            <span className="text-gray-300">→</span>
          </div>
          <div className="text-[#59636D] font-medium py-2 border-b border-gray-100 flex justify-between items-center opacity-60 cursor-not-allowed" title="Document in preparation">
            Code of Conduct
            <span className="text-gray-300">→</span>
          </div>
          <Link href="/site-information/privacy-notice" className="text-[#007079] font-medium hover:text-[#D5A547] hover:underline transition-colors py-2 border-b border-gray-100 flex justify-between items-center group">
            Privacy & Data Protection
            <span className="text-gray-300 group-hover:text-[#D5A547] transition-colors">→</span>
          </Link>
          <Link href="/contact" className="text-[#007079] font-medium hover:text-[#D5A547] hover:underline transition-colors py-2 border-b border-gray-100 flex justify-between items-center group">
            Contact OYEN GROUP
            <span className="text-gray-300 group-hover:text-[#D5A547] transition-colors">→</span>
          </Link>
        </div>
      </section>
      
    </main>
  );
}
