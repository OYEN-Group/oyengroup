import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Governance | OYEN GROUP',
  description: 'The principles, structures and responsibilities that guide how we operate and grow.',
};

export default function GovernancePage() {
  return (
    <main className="bg-white min-h-screen pt-28 pb-0 font-['Inter',sans-serif]">
      
      {/* Boxed Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-16">
        <div className="relative w-full h-[450px] rounded-[24px] overflow-hidden">
          <Image 
            quality={100} 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate Governance" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#09251F]/90 via-[#09251F]/60 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-between p-10 lg:p-16">
            {/* Breadcrumb inside hero */}
            <div className="flex items-center text-xs font-medium text-white/80 uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-3">›</span>
              <span className="hover:text-white transition-colors cursor-default">Company</span>
              <span className="mx-3">›</span>
              <span className="text-white">Our Governance</span>
            </div>

            {/* Title */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1]">
                Our Governance
              </h1>
              <p className="text-xl text-white/90 font-light tracking-wide">
                A Foundation of Trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Introduction Text */}
      <div className="max-w-[800px] mx-auto px-6 lg:px-0 text-center mb-24">
        <p className="text-[22px] md:text-[24px] text-[#111719] leading-relaxed font-light mb-8">
          Guided by Purpose. Grounded in Accountability.
        </p>
        <p className="text-[16px] text-[#59636D] leading-relaxed max-w-2xl mx-auto">
          OYEN GROUP's governance approach establishes clear responsibilities, encourages transparency and supports responsible decision-making across our technology, research and business activities.
        </p>
      </div>

      {/* "In this section" Cards Grid */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-light text-[#111719] mb-10 font-['Plus_Jakarta_Sans',sans-serif]">
          In this section
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Leadership & Oversight */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-[220px] rounded-xl overflow-hidden mb-6">
              <Image 
                src="/images/governance/leadership.jpg" 
                alt="Leadership and Oversight" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-[22px] font-medium text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Leadership & Oversight
            </h3>
            <p className="text-[#59636D] text-[15px] leading-relaxed mb-6 flex-grow">
              The People Behind Our Direction. Discover the roles of the founders, executive management and appointed directors guiding OYEN GROUP.
            </p>
            <Link href="/about/leadership" className="inline-flex items-center text-[#007079] font-medium text-sm group-hover:text-[#D5A547] transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Meet Our Leadership
            </Link>
          </div>

          {/* Card 2: Our Governance Framework */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-[220px] rounded-xl overflow-hidden mb-6">
              <Image 
                src="/images/governance/framework.jpg" 
                alt="Governance Framework" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-[22px] font-medium text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Our Governance Framework
            </h3>
            <p className="text-[#59636D] text-[15px] leading-relaxed mb-6 flex-grow">
              Learn about our strategic direction, management responsibility, ethics & integrity, and risk management practices.
            </p>
            <span className="inline-flex items-center text-[#007079] font-medium text-sm group-hover:text-[#D5A547] transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Read more
            </span>
          </div>

          {/* Card 3: Our Commitment */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-[220px] rounded-xl overflow-hidden mb-6">
              <Image 
                src="/images/governance/commitment.jpg" 
                alt="Our Commitment" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="text-[22px] font-medium text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              Our Commitment
            </h3>
            <p className="text-[#59636D] text-[15px] leading-relaxed mb-6 flex-grow">
              Accountability, Transparency, Integrity, and Responsible Innovation. These principles define our professional conduct.
            </p>
            <span className="inline-flex items-center text-[#007079] font-medium text-sm group-hover:text-[#D5A547] transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Read more
            </span>
          </div>

        </div>
      </div>

      {/* Corporate Information Directory / Full-width banner style */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          alt="Corporate Information" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#09251F]/80"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8 font-['Plus_Jakarta_Sans',sans-serif]">
            Governance & Corporate Information
          </h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/about/leadership" className="text-white hover:text-[#D5A547] transition-colors text-sm font-medium inline-flex items-center">
              Our Leadership
            </Link>
            <Link href="/site-information/privacy-notice" className="text-white hover:text-[#D5A547] transition-colors text-sm font-medium inline-flex items-center">
              Privacy & Data Protection
            </Link>
            <Link href="/site-information/terms-and-conditions" className="text-white hover:text-[#D5A547] transition-colors text-sm font-medium inline-flex items-center">
              Terms and Conditions
            </Link>
            <Link href="/contact" className="text-white hover:text-[#D5A547] transition-colors text-sm font-medium inline-flex items-center">
              Contact OYEN GROUP
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
