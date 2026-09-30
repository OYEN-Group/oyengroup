import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Services | OYEN GROUP',
  description: 'Comprehensive solutions designed to meet your business needs.',
};

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: 1,
      title: 'Strategic Consulting',
      description: 'Our expert consultants work closely with your team to develop strategies that drive growth and maximize your competitive advantage.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
      link: '/contact'
    },
    {
      id: 2,
      title: 'Custom Development',
      description: 'From concept to deployment, we build custom solutions tailored to your unique business requirements.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop',
      link: '/contact'
    },
    {
      id: 3,
      title: 'Digital Transformation',
      description: 'Accelerate your digital journey with our comprehensive transformation services and expertise.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
      link: '/contact'
    },
    {
      id: 4,
      title: '24/7 Support',
      description: 'Our dedicated support team ensures your systems run smoothly around the clock with minimal downtime.',
      image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1000&auto=format&fit=crop',
      link: '/contact'
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-28 pb-0 font-['Inter',sans-serif]">
      
      {/* Boxed Hero Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-16">
        <div className="relative w-full h-[450px] rounded-[24px] overflow-hidden">
          <Image 
            quality={100} 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop" 
            alt="Our Services" 
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
              <span className="text-white">Services</span>
            </div>

            {/* Title */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1]">
                Our Services
              </h1>
              <p className="text-xl text-white/90 font-light tracking-wide">
                Excellence delivered across every capability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Introduction Text */}
      <div className="max-w-[800px] mx-auto px-6 lg:px-0 text-center mb-24">
        <p className="text-[22px] md:text-[24px] text-[#111719] leading-relaxed font-light mb-8">
          Comprehensive solutions designed to meet your business needs.
        </p>
        <p className="text-[16px] text-[#59636D] leading-relaxed max-w-2xl mx-auto">
          Whether you're looking to transform your digital landscape, develop custom software, or gain strategic insights, OYEN GROUP provides the expertise and dedicated support necessary to drive your success forward.
        </p>
      </div>

      {/* "In this section" Cards Grid */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-3xl font-light text-[#111719] mb-10 font-['Plus_Jakarta_Sans',sans-serif]">
          Our Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {serviceDetails.map((service) => (
            <div key={service.id} className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden mb-6">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-[20px] font-medium text-[#111719] mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
                {service.title}
              </h3>
              <p className="text-[#59636D] text-[14px] leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <Link href={service.link} className="inline-flex items-center text-[#007079] font-medium text-sm group-hover:text-[#D5A547] transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7-7H3" />
                </svg>
                Read more
              </Link>
            </div>
          ))}

        </div>
      </div>

      {/* Corporate Information Directory / Full-width banner style */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          alt="Partner With Us" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#09251F]/80"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8 font-['Plus_Jakarta_Sans',sans-serif]">
            Ready to transform your business?
          </h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/contact" className="text-white hover:text-[#D5A547] transition-colors text-sm font-medium inline-flex items-center">
              Partner With Us
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
