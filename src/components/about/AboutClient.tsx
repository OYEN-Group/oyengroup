'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutClient() {
  return (
    <div className="bg-white min-h-screen pb-32">
      
      {/* 1. HERO SECTION (Matches Aramco: rounded image, text inside, breadcrumbs) */}
      <section className="pt-24 md:pt-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="mb-6 flex items-center text-sm font-['Inter',sans-serif] text-[#59636D]">
          <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111719] font-medium">About OYEN</span>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl md:rounded-[32px] overflow-hidden">
          <Image 
            src="/images/hero-slide1.jpg" 
            alt="Building Ideas Into Real-World Solutions" 
            fill 
            className="object-cover"
            priority
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 lg:left-24 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              About OYEN GROUP
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-['Inter',sans-serif] max-w-2xl leading-relaxed">
              Building Ideas Into Real-World Solutions. We are a technology and research company developing practical solutions across education, academic research and industrial operations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THREE-COLUMN INTRO (Matches Aramco: simple 3 columns of text) */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">Our Identity</h3>
            <p className="text-[17px] text-[#59636D] leading-relaxed font-['Inter',sans-serif]">
              A technology and research company focused on practical innovation.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">What We Do</h3>
            <p className="text-[17px] text-[#59636D] leading-relaxed font-['Inter',sans-serif]">
              Research, develop and deploy solutions that address real operational challenges.
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">Our Direction</h3>
            <p className="text-[17px] text-[#59636D] leading-relaxed font-['Inter',sans-serif]">
              Building capabilities and creating opportunities through technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OYEN AT A GLANCE (Matches Aramco: light grey bg, large stats grid, top header with link) */}
      <section className="bg-[#F8F9FA] py-20 md:py-28 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 border-b border-gray-200 pb-6">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">
              OYEN at a glance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
            {[
              { stat: "Technology", label: "Software Development" },
              { stat: "Research", label: "Applied Innovation" },
              { stat: "Education", label: "Learning Solutions" },
              { stat: "Industry", label: "Operational Intelligence" },
              { stat: "3", label: "Product Initiatives" },
              { stat: "Nigeria", label: "Our Base" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col border-b border-gray-200/60 pb-8">
                <span className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                  {item.stat}
                </span>
                <span className="text-lg md:text-[20px] text-[#09251F] font-medium font-['Inter',sans-serif]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PERSPECTIVE (Matches Aramco: Title left, text block right/below, white bg) */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">
              Our perspective
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-8 text-[19px] md:text-[21px] text-[#59636D] font-['Inter',sans-serif] leading-[1.6]">
            <p className="text-[#111719] font-medium">
              Technology should solve real problems. We believe innovation becomes meaningful when it improves how people learn, work and operate.
            </p>
            <p>
              Our approach brings together research, technology development and practical implementation to create solutions designed for real-world use.
            </p>
            <p>
              From learning environments to industrial operations, we focus on developing technology with a clear purpose.
            </p>
            
            {/* Vision / Mission / Values appended as editorial text */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 p-8 bg-gray-50 rounded-2xl">
              <div>
                <h4 className="text-[#111719] font-bold mb-3 font-['Plus_Jakarta_Sans',sans-serif] text-xl">Our Vision</h4>
                <p className="text-[17px]">A more capable Africa powered by technology, talent and innovation.</p>
              </div>
              <div>
                <h4 className="text-[#111719] font-bold mb-3 font-['Plus_Jakarta_Sans',sans-serif] text-xl">Our Mission</h4>
                <p className="text-[17px]">To research, build and deploy practical solutions that solve real problems and create lasting value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHERE WE'RE GOING (Matches Aramco: 2 column text-heavy layout) */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">
              Where we&apos;re going
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 text-[17px] text-[#59636D] font-['Inter',sans-serif] leading-[1.7]">
            <div className="flex flex-col gap-6">
              <p className="text-[#111719] font-medium text-[19px]">
                Building a More Capable Africa.
              </p>
              <p>
                Our ambition is to become a leading technology and research group, known for creating solutions that directly impact essential sectors. We are steadily expanding our research capabilities to ensure our products remain innovative, robust, and aligned with practical needs.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <p>
                In the coming years, OYEN GROUP plans to introduce new product lines, forge strategic partnerships with academic and industrial institutions, and create long-term opportunities for talent development across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT WE ARE BUILDING (Matches Aramco "Our history" blocked out image/video style) */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto border-t border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
              What we are building
            </h2>
            <p className="text-[19px] text-[#59636D] font-['Inter',sans-serif]">
              Products designed for real-world application.
            </p>
          </div>
        </div>

        {/* Large featured product instead of a 3-grid, mimicking the Aramco video player */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 rounded-2xl md:rounded-[32px] overflow-hidden mb-12 group block">
          <Image src="/images/oyen_grid.jpg" alt="OYEN GRID" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-6">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-['Plus_Jakarta_Sans',sans-serif]">OYEN GRID</h3>
            <p className="text-white/90 text-lg md:text-xl font-['Inter',sans-serif] max-w-2xl mb-8">Training and Programme Management.</p>
            <Link href="/products" className="px-8 py-3 bg-white/10 hover:bg-white text-white hover:text-[#111719] backdrop-blur-md rounded-full font-medium transition-all duration-300">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* 7. IN THIS SECTION (Matches Aramco: 3 column image cards with text below) */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-12">
          In this section
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            { title: "Our leadership", desc: "Meet the people behind OYEN.", img: "/images/partnership.jpg", link: "/about/leadership" },
            { title: "Our approach", desc: "Discover how we work.", img: "/images/hero-slide2.jpg", link: "/about#approach" },
            { title: "Our technology", desc: "Explore what we're building.", img: "/images/tech.jpg", link: "/products" }
          ].map((card, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-[#111719] text-[22px] font-bold mb-3 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#D5A547] transition-colors">
                {card.title}
              </h3>
              <p className="text-[#59636D] text-[17px] font-['Inter',sans-serif] mb-6 leading-relaxed">
                {card.desc}
              </p>
              <Link href={card.link} className="text-[#D5A547] font-bold font-['Inter',sans-serif] flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
