import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Commitment | OYEN GROUP',
  description: 'The principles behind how we work.',
};

export default function OurCommitmentPage() {
  const commitments = [
    {
      id: 1,
      title: 'Accountability',
      description: 'Taking responsibility for our decisions, work and outcomes.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Transparency',
      description: 'Communicating clearly and responsibly with clients, partners and stakeholders.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Integrity',
      description: 'Maintaining ethical and professional standards across our activities.',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Responsible Innovation',
      description: 'Developing technology and research with consideration for safety, people, data and potential impact.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Long-Term Value',
      description: 'Building solutions and relationships intended to create sustainable value for industries and communities.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-28 pb-0 font-['Inter',sans-serif]">
      
      {/* Boxed Hero Section */}
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

      {/* Centered Introduction Text */}
      <div className="max-w-[800px] mx-auto px-6 lg:px-0 text-center mb-24">
        <p className="text-[20px] md:text-[22px] text-[#59636D] leading-relaxed font-light mb-8">
          OYEN GROUP is committed to building technology, conducting research and developing partnerships responsibly. Our approach is guided by accountability, transparency, integrity and consideration for the long-term impact of our work.
        </p>
      </div>

      {/* "In this section" Cards Grid */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-light text-[#111719] mb-10 font-['Plus_Jakarta_Sans',sans-serif]">
          Our Principles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {commitments.map((item) => (
            <div key={item.id} className="flex flex-col group">
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden mb-6">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-[#09251F] text-[12px] font-bold tracking-[0.2em] mb-2 font-['Inter',sans-serif]">0{item.id}</span>
              <h3 className="text-[20px] font-medium text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
                {item.title}
              </h3>
              <p className="text-[#59636D] text-[14px] leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Corporate Information Directory / Full-width banner style */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
          alt="Corporate Information Links" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#09251F]/80"></div>
        <div className="relative z-10 text-center px-6">
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
