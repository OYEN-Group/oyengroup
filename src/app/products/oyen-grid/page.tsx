import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'OYEN GRID | Learning Programme Management Platform',
  description: 'Design programmes, coordinate participants and facilitators, track progress and manage delivery from one connected environment.',
};

export default function OyenGridPage() {
  return (
    <main className="bg-white min-h-screen pt-28 pb-0 font-['Inter',sans-serif]">
      
      {/* 01 — HERO (Boxed Aramco style) */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-16">
        <div className="relative w-full h-[500px] rounded-[24px] overflow-hidden shadow-2xl">
          <Image 
            quality={100} 
            src="/images/products/oyen_grid_hero.jpg" 
            alt="OYEN GRID Learning Management" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09251F]/95 via-[#09251F]/80 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center p-10 lg:p-16">
            <div className="flex items-center text-xs font-medium text-white/80 uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif] mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-3">›</span>
              <span className="hover:text-white transition-colors cursor-default">Technology</span>
              <span className="mx-3">›</span>
              <span className="text-white font-bold">OYEN GRID</span>
            </div>

            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1]">
                OYEN GRID
              </h1>
              <p className="text-2xl text-[#D5A547] font-medium mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
                The platform for managing learning programmes at scale.
              </p>
              <p className="text-lg text-white/90 font-light tracking-wide leading-relaxed max-w-xl">
                Design programmes, coordinate participants and facilitators, track progress and manage delivery from one connected environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 02 — CENTERED TEXT (The Problem) */}
      <div className="max-w-[800px] mx-auto px-6 lg:px-0 text-center mb-24">
        <p className="text-[20px] md:text-[22px] text-[#007079] leading-relaxed font-light mb-8">
          Running a large learning programme involves more than delivering content. Participants, facilitators, schedules, attendance, progress, reporting and multiple locations can quickly become difficult to coordinate.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium text-[#111719] py-4">
          <span>Fragmented information</span>
          <span className="text-gray-400 hidden md:inline">→</span>
          <span>Manual tracking</span>
          <span className="text-gray-400 hidden md:inline">→</span>
          <span>Limited visibility</span>
          <span className="text-gray-400 hidden md:inline">→</span>
          <span>Slow reporting</span>
        </div>
        <p className="text-xl font-bold text-[#111719] mt-6 font-['Plus_Jakarta_Sans',sans-serif]">
          OYEN GRID brings the operation together.
        </p>
      </div>

      {/* 03 — IMAGE LEFT, TEXT RIGHT (How it works) */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 mb-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/products/oyen_grid_analytics.jpg" 
              alt="OYEN GRID Interface" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-light text-[#111719] mb-8 font-['Plus_Jakarta_Sans',sans-serif]">
              From programme design to completion.
            </h2>
            
            <div className="space-y-5">
              <div>
                <h4 className="text-[16px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">01 — Design</h4>
                <p className="text-[#59636D] text-[15px]">Create the programme structure.</p>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">02 — Enrol</h4>
                <p className="text-[#59636D] text-[15px]">Organise participants and cohorts.</p>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">03 — Deliver</h4>
                <p className="text-[#59636D] text-[15px]">Coordinate facilitators and activities.</p>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">04 — Track</h4>
                <p className="text-[#59636D] text-[15px]">Monitor participation and progress.</p>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">05 — Analyse</h4>
                <p className="text-[#59636D] text-[15px]">Turn programme data into actionable reports.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 04 — TWO COLUMNS TEXT (Built for & Multi-Role) */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
              Built for different programmes
            </h3>
            <p className="text-[#59636D] text-[15px] leading-relaxed mb-6">
              One platform. Different programme models. OYEN GRID is designed for programmes that involve more than just a classroom.
            </p>
            <ul className="space-y-4 text-[15px] text-[#111719]">
              <li><strong>Corporate Training:</strong> Coordinate employee development and monitor progress.</li>
              <li><strong>Bootcamps:</strong> Manage cohorts, facilitators, activities and outcomes.</li>
              <li><strong>Professional Development:</strong> Structure long-term development journeys.</li>
              <li><strong>Large-Scale Initiatives:</strong> Keep distributed programmes organised across locations and partners.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
              A Multi-Role Experience
            </h3>
            <p className="text-[#59636D] text-[15px] leading-relaxed mb-6">
              Providing the right tools and visibility for every user involved in the learning operation.
            </p>
            <ul className="space-y-4 text-[15px] text-[#111719]">
              <li><strong>Programme Manager:</strong> Manages programmes and cohorts.</li>
              <li><strong>Facilitator:</strong> Manages delivery and participants.</li>
              <li><strong>Participant:</strong> Accesses activities and tracks progress.</li>
              <li><strong>Administrator:</strong> Manages users, programmes and reporting.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 05 — LARGE IMAGE SECTION (Dashboard UI) */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-20">
        <h2 className="text-3xl md:text-4xl font-light text-[#111719] mb-10 font-['Plus_Jakarta_Sans',sans-serif]">
          See your programmes as they happen.
        </h2>
        
        {/* Interactive UI Mockup instead of a static image */}
        <div className="bg-[#f8fafc] rounded-xl shadow-2xl overflow-hidden w-full border border-gray-200">
          <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center text-gray-800">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#09251F] rounded-md flex items-center justify-center text-white font-bold text-xs">OG</div>
              <span className="font-bold text-lg">Dashboard</span>
            </div>
            <div className="flex gap-6 text-sm font-medium text-gray-500">
              <span className="text-[#007079] border-b-2 border-[#007079] pb-4 -mb-4">Overview</span>
              <span>Programmes</span>
              <span>Cohorts</span>
              <span>Reports</span>
            </div>
          </div>
          <div className="p-8 text-gray-800">
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Active Programmes</p>
                <p className="text-3xl font-light text-[#09251F]">12</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Total Participants</p>
                <p className="text-3xl font-light text-[#007079]">850</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Avg Completion Rate</p>
                <p className="text-3xl font-light text-[#8BA832]">76%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Active Facilitators</p>
                <p className="text-3xl font-light text-gray-700">34</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold mb-4">Programme Progress</h4>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-500">
                    <th className="pb-2 font-medium">Programme</th>
                    <th className="pb-2 font-medium">Participants</th>
                    <th className="pb-2 font-medium">Progress</th>
                    <th className="pb-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50">
                    <td className="py-3 font-medium text-[#09251F]">Leadership Programme</td>
                    <td className="py-3 text-gray-600">120</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[78%] h-full bg-[#007079]"></div></div>
                        <span className="text-xs text-gray-500">78%</span>
                      </div>
                    </td>
                    <td className="py-3"><span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">Active</span></td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-3 font-medium text-[#09251F]">Digital Skills Bootcamp</td>
                    <td className="py-3 text-gray-600">250</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[64%] h-full bg-[#D5A547]"></div></div>
                        <span className="text-xs text-gray-500">64%</span>
                      </div>
                    </td>
                    <td className="py-3"><span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">Active</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-[#09251F]">Graduate Development</td>
                    <td className="py-3 text-gray-600">180</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[91%] h-full bg-[#8BA832]"></div></div>
                        <span className="text-xs text-gray-500">91%</span>
                      </div>
                    </td>
                    <td className="py-3"><span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">Near Completion</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-right text-[10px] text-gray-400 mt-4 uppercase">* Sample dashboard data</p>
          </div>
        </div>

      </div>

      {/* 06 — THREE COLUMNS TEXT (Capabilities & Analytics) */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              Programme Design
            </h3>
            <p className="text-[#59636D] text-[14px] leading-relaxed">
              <strong>Build the programme before delivery begins.</strong> Create structured programmes, define cohorts, assign activities, organise schedules and establish the framework for delivery.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              Participant Tracking
            </h3>
            <p className="text-[#59636D] text-[14px] leading-relaxed">
              <strong>Know where every participant stands.</strong> Monitor enrolment, attendance, participation, completion and individual progress across cohorts.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              Facilitator Hub
            </h3>
            <p className="text-[#59636D] text-[14px] leading-relaxed">
              <strong>Give facilitators one place to manage delivery.</strong> Access programme information, participant records, schedules, activities and relevant resources.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              Progress Analytics
            </h3>
            <p className="text-[#59636D] text-[14px] leading-relaxed">
              <strong>Turn programme activity into useful information.</strong> See participation, completion, performance and programme-level trends through centralised reporting.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              Global Deployment
            </h3>
            <p className="text-[#59636D] text-[14px] leading-relaxed">
              <strong>Run programmes across locations.</strong> Coordinate programmes, participants and delivery teams across multiple locations from one platform.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              Comprehensive Reporting
            </h3>
            <p className="text-[#59636D] text-[14px] leading-relaxed">
              <strong>Know what is happening across every programme.</strong> Track participation, attendance, completion, performance, cohort progress, and overall programme outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* 07 — CENTERED TEXT (Scale) */}
      <div className="max-w-[800px] mx-auto px-6 lg:px-0 text-center mb-32">
        <h3 className="text-3xl font-bold text-[#111719] mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
          One platform. Multiple programmes. Multiple locations.
        </h3>
        <p className="text-[#59636D] text-[18px] leading-relaxed">
          OYEN GRID is designed to help organisations coordinate learning programmes as they grow — from a single cohort to complex, distributed deployments.
        </p>
      </div>

      {/* 08 — BOTTOM BANNER (CTA) */}
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
          alt="Ready to bring your programmes together?" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#09251F]/85"></div>
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
            Ready to bring your programmes together?
          </h2>
          <p className="text-white/80 text-lg mb-10 font-light">
            See how OYEN GRID can help you plan, coordinate and measure learning delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 bg-[#D5A547] hover:bg-[#c29640] text-[#09251F] font-bold rounded-lg transition-colors text-sm">
              Explore the Platform
            </Link>
            <Link href="/contact" className="px-8 py-3 border border-white/30 hover:bg-white/10 text-white font-medium rounded-lg transition-colors text-sm">
              Contact OYEN
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
