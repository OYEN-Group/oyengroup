import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Commitment | OYEN GROUP',
  description: 'The principles behind how we work.',
};

export default function OurCommitmentPage() {
  return (
    <main className="bg-white min-h-screen pt-28 pb-0 font-['Inter',sans-serif]">
      
      {/* 01 — HERO */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-16">
        <div className="relative w-full h-[450px] rounded-[24px] overflow-hidden">
          <Image 
            quality={100} 
            src="/images/governance/commitment.jpg" 
            alt="Our Commitment" 
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
              <Link href="/about/governance" className="hover:text-white transition-colors">Our Governance</Link>
              <span className="mx-3">›</span>
              <span className="text-white">Our Commitment</span>
            </div>

            {/* Title */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1]">
                Our Commitment
              </h1>
              <p className="text-xl text-white/90 font-light tracking-wide">
                The principles behind how we work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 02 — CENTERED INTRO TEXT */}
      <div className="max-w-[800px] mx-auto px-6 lg:px-0 text-center mb-24">
        <p className="text-[20px] md:text-[22px] text-[#007079] leading-relaxed font-light">
          OYEN GROUP is committed to building technology, conducting research and developing partnerships responsibly. Our approach is guided by accountability, transparency, integrity and consideration for the long-term impact of our work.
        </p>
      </div>

      {/* 03 — IMAGE LEFT, TEXT RIGHT */}
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 mb-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative h-[350px] rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" 
              alt="Accountability" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-light text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
              01 — Accountability
            </h2>
            <p className="text-[#59636D] text-[16px] leading-relaxed mb-6">
              Taking responsibility for our decisions, work and outcomes.
            </p>
            <p className="text-[#59636D] text-[16px] leading-relaxed">
              Accountability is at the core of how we operate, ensuring that every project, partnership, and technological deployment is managed with clear ownership. We hold ourselves to the highest standards, ensuring that our actions align with our strategic objectives and stakeholder expectations.
            </p>
          </div>
        </div>
      </div>

      {/* 04 — TWO COLUMNS TEXT */}
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              02 — Transparency
            </h3>
            <p className="text-[#59636D] text-[15px] leading-relaxed">
              Communicating clearly and responsibly with clients, partners and stakeholders. We believe that open communication builds trust and fosters stronger, more resilient relationships across all our business activities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              03 — Integrity
            </h3>
            <p className="text-[#59636D] text-[15px] leading-relaxed">
              Maintaining ethical and professional standards across our activities. Our commitment to integrity means we do not compromise on our principles, ensuring that our work consistently aligns with our core values.
            </p>
          </div>
        </div>
      </div>

      {/* 05 — LARGE IMAGE SECTION */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-16">
        <h2 className="text-3xl md:text-4xl font-light text-[#111719] mb-10 font-['Plus_Jakarta_Sans',sans-serif]">
          Innovation and Sustainable Value
        </h2>
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-4">
          <Image 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop" 
            alt="Innovation and Sustainable Value" 
            fill 
            className="object-cover"
          />
        </div>
        <p className="text-xs text-gray-500 italic">Technology and research designed for long-term impact.</p>
      </div>

      {/* 06 — THREE COLUMNS TEXT */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              04 — Responsible Innovation
            </h3>
            <p className="text-[#59636D] text-[14px] leading-relaxed">
              Developing technology and research with consideration for safety, people, data and potential impact. We ensure our digital and industrial solutions are built to serve responsibly.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              05 — Long-Term Value
            </h3>
            <p className="text-[#59636D] text-[14px] leading-relaxed">
              Building solutions and relationships intended to create sustainable value for industries and communities. We focus on enduring outcomes rather than short-term gains.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              06 — Governance Alignment
            </h3>
            <p className="text-[#59636D] text-[14px] leading-relaxed">
              Ensuring that our commitments are backed by robust governance frameworks, leadership oversight, and clear policies that guide our everyday operations.
            </p>
          </div>
        </div>
      </div>

      {/* 07 — CENTERED TEXT (Boosting the economy style) */}
      <div className="max-w-[800px] mx-auto px-6 lg:px-0 mb-32">
        <h3 className="text-2xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
          A Foundation for Responsible Growth
        </h3>
        <p className="text-[#59636D] text-[16px] leading-relaxed mb-6">
          These principles form the bedrock of OYEN GROUP's operations. They support our organic growth across technology, research, and corporate services, ensuring that as we expand our footprint, our ethical and professional standards scale with us.
        </p>
        <p className="text-[#59636D] text-[16px] leading-relaxed mb-6">
          By adhering to these commitments, we aim to deliver excellence to our partners and build a sustainable, trusted organisation.
        </p>
        
        <h4 className="font-bold text-[#111719] mb-4 mt-8">Learn More</h4>
        <ul className="list-disc pl-5 text-[#007079] space-y-2 text-[15px]">
          <li>
            <Link href="/about/governance/framework" className="hover:underline">Explore our Governance Framework</Link>
          </li>
          <li>
            <Link href="/about/leadership" className="hover:underline">Meet our Leadership Team</Link>
          </li>
        </ul>
      </div>

      {/* 08 — BOTTOM BANNER (Exploration style) */}
      <div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
          alt="Corporate Information Links" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#8BA832]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[#09251F]/60"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
            Corporate Directory
          </h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/about/governance/framework" className="text-white hover:text-[#D5A547] transition-colors text-sm font-medium inline-flex items-center">
              Governance Framework
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/site-information/privacy-notice" className="text-white hover:text-[#D5A547] transition-colors text-sm font-medium inline-flex items-center">
              Privacy & Data Protection
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/contact" className="text-white hover:text-[#D5A547] transition-colors text-sm font-medium inline-flex items-center">
              Contact OYEN GROUP
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
