import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Governance Framework | OYEN GROUP',
  description: 'Clear responsibility. Effective oversight. Responsible growth.',
};

export default function GovernanceFrameworkPage() {
  const frameworkAreas = [
    {
      id: 1,
      title: 'Strategic Direction',
      description: 'How priorities and long-term direction are established.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
      link: '/about/governance'
    },
    {
      id: 2,
      title: 'Management Responsibility',
      description: 'How leadership responsibilities and decision-making authority are assigned.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop',
      link: '/about/leadership'
    },
    {
      id: 3,
      title: 'Risk & Oversight',
      description: 'How operational, technology, financial and project risks are considered.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      link: '/about/governance'
    },
    {
      id: 4,
      title: 'Ethics & Integrity',
      description: 'The standards expected across OYEN\'s activities and relationships.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
      link: '/about/governance/principles'
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-28 pb-0 font-['Inter',sans-serif]">
      
      {/* Boxed Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-16">
        <div className="relative w-full h-[450px] rounded-[24px] overflow-hidden">
          <Image 
            quality={100} 
            src="/images/governance/framework.jpg" 
            alt="Governance Framework" 
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
              <span className="hover:text-white transition-colors">Company</span>
              <span className="mx-3">›</span>
              <Link href="/about/governance" className="hover:text-white transition-colors">Our Governance</Link>
              <span className="mx-3">›</span>
              <span className="text-white cursor-default">Framework</span>
            </div>

            {/* Title */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1]">
                Our Governance Framework
              </h1>
              <p className="text-xl text-white/90 font-light tracking-wide">
                Clear responsibility. Effective oversight. Responsible growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Introduction Text */}
      <div className="max-w-[800px] mx-auto px-6 lg:px-0 text-center mb-20">
        <p className="text-[20px] md:text-[22px] text-[#59636D] leading-relaxed font-light mb-8">
          OYEN GROUP's governance framework defines how responsibilities, decisions, oversight and accountability are organized across the Group.
        </p>
      </div>

      {/* Organisational Structure */}
      <div className="max-w-[800px] mx-auto px-6 lg:px-0 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">
            Organisational Structure
          </h2>
        </div>

        <div className="flex flex-col items-center max-w-2xl mx-auto space-y-4">
          <div className="w-full text-center py-6 border-b border-gray-100">
            <h3 className="text-[#111719] font-medium text-xl font-['Plus_Jakarta_Sans',sans-serif] mb-2">Board / Directors</h3>
            <p className="text-[#59636D] text-sm">Strategic direction & oversight</p>
          </div>

          <div className="text-gray-300">↓</div>

          <div className="w-full text-center py-6 border-b border-gray-100">
            <h3 className="text-[#111719] font-medium text-xl font-['Plus_Jakarta_Sans',sans-serif] mb-2">Executive Management</h3>
            <p className="text-[#59636D] text-sm">Group leadership & major decisions</p>
          </div>

          <div className="text-gray-300">↓</div>

          <div className="w-full text-center py-6 border-b border-gray-100">
            <h3 className="text-[#111719] font-medium text-xl font-['Plus_Jakarta_Sans',sans-serif] mb-2">Business & Product Leadership</h3>
            <p className="text-[#59636D] text-sm">Technology • Research • Operations</p>
          </div>

          <div className="text-gray-300">↓</div>

          <div className="w-full text-center py-6">
            <h3 className="text-[#111719] font-medium text-xl font-['Plus_Jakarta_Sans',sans-serif] mb-2">Teams & Projects</h3>
            <p className="text-[#59636D] text-sm">Execution & delivery</p>
          </div>
        </div>
      </div>

      {/* "In this section" Cards Grid */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-light text-[#111719] mb-10 font-['Plus_Jakarta_Sans',sans-serif]">
          In this section
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {frameworkAreas.map((area) => (
            <div key={area.id} className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden mb-6">
                <Image 
                  src={area.image} 
                  alt={area.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-[#09251F] text-[12px] font-bold tracking-[0.2em] mb-2 font-['Inter',sans-serif]">0{area.id}</span>
              <h3 className="text-[20px] font-medium text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
                {area.title}
              </h3>
              <p className="text-[#59636D] text-[14px] leading-relaxed mb-6 flex-grow">
                {area.description}
              </p>
              <Link href={area.link} className="inline-flex items-center text-[#007079] font-medium text-sm group-hover:text-[#D5A547] transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                </svg>
                Read more
              </Link>
            </div>
          ))}

        </div>
      </div>

      {/* Full-width conclusion banner */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          alt="Responsible Governance" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#09251F]/85"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
            Responsible Governance as We Grow
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed">
            OYEN's governance approach is designed to evolve alongside the organisation, strengthening oversight, accountability and responsible decision-making as our activities expand.
          </p>
        </div>
      </div>

    </main>
  );
}
