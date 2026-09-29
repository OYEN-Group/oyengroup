'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/data/news';

interface NewsroomProps {
  articles: NewsArticle[];
}

export default function Newsroom({ articles }: NewsroomProps) {
  // Split articles into different sections for the layout
  const latestPress = articles.slice(0, 4);
  const engineeringInsights = articles.filter(a => a.category === 'Engineering' || a.category === 'Technology').slice(0, 4);
  const globalOperations = articles.slice(2, 7); // Just using some articles as placeholders for a gallery
  const latestPublications = articles.slice(0, 2); // Placeholders for publications

  return (
    <main className="bg-[#F8F9FA] text-[#111719] min-h-screen font-['Inter',sans-serif]">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-end pb-16 pt-32">
        <Image 
          src="/images/tech.jpg" 
          alt="News & Media" 
          fill 
          className="object-cover"
          priority
        />
        {/* Forest Green Gradient Overlay matching Aramco style */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09251F]/95 via-[#09251F]/80 to-transparent" />
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-6 font-medium uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Newsroom</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            News & Media
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-light">
            Tap into the latest from our global operations, engineering insights, and corporate announcements.
          </p>
        </div>
      </section>

      {/* Navigation Tabs (Simulated) */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex overflow-x-auto hide-scrollbar">
          {['All News', 'Press Releases', 'Engineering', 'Company Updates', 'Media Kit'].map((tab, i) => (
            <button key={tab} className={`whitespace-nowrap py-5 px-6 text-sm font-semibold tracking-wider uppercase border-b-2 transition-colors ${i === 0 ? 'border-[#09251F] text-[#09251F]' : 'border-transparent text-gray-500 hover:text-[#09251F]'}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 space-y-32">
        
        {/* Latest Press Section */}
        <section>
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-light text-[#09251F] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wide">
              Latest Press
            </h2>
            <Link href="#" className="text-sm font-semibold text-[#D5A547] hover:text-[#09251F] uppercase tracking-wider transition-colors flex items-center gap-2">
              View All <span className="text-lg">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestPress.map(article => (
              <div key={article.id} className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full rounded-sm">
                <span className="text-xs font-bold text-[#D5A547] uppercase tracking-wider mb-3">
                  {new Date(article.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <h3 className="text-lg font-semibold text-[#09251F] leading-snug mb-4 group-hover:text-[#D5A547] transition-colors">
                  <Link href={`/news/${article.id}`} className="hover:underline decoration-[#D5A547] underline-offset-4">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-grow">
                  {article.excerpt}
                </p>
                <Link href={`/news/${article.id}`} className="inline-flex items-center text-sm font-bold text-[#09251F] hover:text-[#D5A547] transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Insights Section */}
        <section>
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-light text-[#09251F] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wide">
              Engineering Insights
            </h2>
            <Link href="#" className="text-sm font-semibold text-[#D5A547] hover:text-[#09251F] uppercase tracking-wider transition-colors flex items-center gap-2">
              View All <span className="text-lg">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringInsights.map(article => (
              <div key={article.id} className="group cursor-pointer">
                <div className="relative aspect-square w-full mb-4 overflow-hidden bg-gray-100 rounded-sm">
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                  />
                </div>
                <h3 className="text-base font-semibold text-[#09251F] leading-snug group-hover:text-[#D5A547] transition-colors">
                  <Link href={`/news/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-2 block">
                  {article.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Global Operations Gallery */}
        <section className="bg-[#09251F] -mx-6 lg:-mx-12 px-6 lg:px-12 py-24 text-white">
          <div className="flex justify-between items-end mb-12 border-b border-white/20 pb-4">
            <h2 className="text-3xl font-light font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wide">
              Global Operations
            </h2>
            <Link href="#" className="text-sm font-semibold text-[#D5A547] hover:text-white uppercase tracking-wider transition-colors flex items-center gap-2">
              Media Library <span className="text-lg">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured large operation */}
            <div className="relative aspect-[4/3] w-full overflow-hidden group rounded-sm">
              <Image 
                src="/images/tech.jpg" 
                alt="Global Operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-semibold mb-2">Expanding our footprint</h3>
                <p className="text-white/80 line-clamp-2">Inside the next-generation facilities powering OYEN GROUP's industrial intelligence networks.</p>
              </div>
            </div>
            
            {/* Two smaller operations */}
            <div className="grid grid-rows-2 gap-8">
              <div className="relative w-full h-full overflow-hidden group rounded-sm">
                <Image 
                  src="/images/oyen_grid.jpg" 
                  alt="Operations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                 <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold">Training Centers</h3>
                </div>
              </div>
              <div className="relative w-full h-full overflow-hidden group rounded-sm">
                <Image 
                  src="/images/partnership.jpg" 
                  alt="Operations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                 <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold">Strategic Collaborations</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Publications Section */}
        <section>
          <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-light text-[#09251F] font-['Plus_Jakarta_Sans',sans-serif] uppercase tracking-wide">
              Latest Publications
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPublications.map((article, i) => (
              <div key={article.id} className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 p-6 hover:shadow-lg transition-shadow rounded-sm">
                <div className="w-full md:w-1/3 relative aspect-[3/4] bg-gray-100 shrink-0">
                  <Image 
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs font-bold text-[#D5A547] uppercase tracking-wider mb-3">
                    {article.category} Report
                  </span>
                  <h3 className="text-xl font-semibold text-[#09251F] leading-snug mb-4">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link href={`/news/${article.id}`} className="inline-flex items-center text-sm font-bold text-[#09251F] hover:text-[#D5A547] transition-colors uppercase tracking-wider">
                    Download PDF
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
