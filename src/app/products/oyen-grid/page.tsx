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
      
      {/* 01 — HERO */}
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
          
          <div className="absolute inset-0 flex flex-col justify-between p-10 lg:p-16">
            <div className="flex items-center text-xs font-medium text-white/80 uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif]">
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
              <p className="text-lg text-white/90 font-light tracking-wide mb-8 leading-relaxed max-w-xl">
                Design programmes, coordinate participants and facilitators, track progress and manage delivery from one connected environment.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="px-8 py-3 bg-[#D5A547] hover:bg-[#c29640] text-[#09251F] font-bold rounded-lg transition-colors text-sm">
                  Explore OYEN GRID
                </Link>
                <Link href="/contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors text-sm backdrop-blur-sm">
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 02 — THE PROBLEM */}
      <section className="py-24 max-w-[900px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-[#111719] mb-8 font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
          Running a large learning programme involves more than delivering content.
        </h2>
        <p className="text-lg text-[#59636D] leading-relaxed mb-12">
          Participants, facilitators, schedules, attendance, progress, reporting and multiple locations can quickly become difficult to coordinate.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium text-[#09251F] bg-gray-50 py-6 px-8 rounded-xl border border-gray-100 mb-12">
          <span>Fragmented information</span>
          <span className="text-gray-400 hidden md:inline">→</span>
          <span>Manual tracking</span>
          <span className="text-gray-400 hidden md:inline">→</span>
          <span>Limited visibility</span>
          <span className="text-gray-400 hidden md:inline">→</span>
          <span>Slow reporting</span>
        </div>

        <p className="text-2xl font-medium text-[#007079] font-['Plus_Jakarta_Sans',sans-serif]">
          OYEN GRID brings the operation together.
        </p>
      </section>

      {/* 03 — HOW IT WORKS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
              From programme design to completion.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>

            {[
              { num: '01', title: 'Design', desc: 'Create the programme structure.' },
              { num: '02', title: 'Enrol', desc: 'Organise participants and cohorts.' },
              { num: '03', title: 'Deliver', desc: 'Coordinate facilitators and activities.' },
              { num: '04', title: 'Track', desc: 'Monitor participation and progress.' },
              { num: '05', title: 'Analyse', desc: 'Turn programme data into actionable reports.' },
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center px-4 mb-8 md:mb-0 w-full md:w-1/5">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#007079] flex items-center justify-center text-[#007079] font-bold text-xl mb-6 shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-[#111719] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">{step.title}</h3>
                <p className="text-sm text-[#59636D] leading-relaxed">{step.desc}</p>
                {/* Mobile Connector */}
                {i < 4 && <div className="md:hidden text-gray-300 mt-6">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — PLATFORM CAPABILITIES */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#8BA832] rounded-[24px] p-12 md:p-20 text-white shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Platform Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 text-center">
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans',sans-serif]">PROGRAMME DESIGN</h3>
                <p className="font-bold text-sm text-[#09251F]/80 mb-3 uppercase tracking-wider">Build the programme before delivery begins.</p>
                <p className="text-sm text-white/90 leading-relaxed font-light">Create structured programmes, define cohorts, assign activities, organise schedules and establish the framework for delivery.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans',sans-serif]">PARTICIPANT TRACKING</h3>
                <p className="font-bold text-sm text-[#09251F]/80 mb-3 uppercase tracking-wider">Know where every participant stands.</p>
                <p className="text-sm text-white/90 leading-relaxed font-light">Monitor enrolment, attendance, participation, completion and individual progress across cohorts.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans',sans-serif]">FACILITATOR HUB</h3>
                <p className="font-bold text-sm text-[#09251F]/80 mb-3 uppercase tracking-wider">Give facilitators one place to manage delivery.</p>
                <p className="text-sm text-white/90 leading-relaxed font-light">Access programme information, participant records, schedules, activities and relevant resources.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans',sans-serif]">PROGRESS ANALYTICS</h3>
                <p className="font-bold text-sm text-[#09251F]/80 mb-3 uppercase tracking-wider">Turn programme activity into useful information.</p>
                <p className="text-sm text-white/90 leading-relaxed font-light">See participation, completion, performance and programme-level trends through centralised reporting.</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
                <h3 className="font-bold text-lg mb-4 font-['Plus_Jakarta_Sans',sans-serif]">GLOBAL DEPLOYMENT</h3>
                <p className="font-bold text-sm text-[#09251F]/80 mb-3 uppercase tracking-wider">Run programmes across locations.</p>
                <p className="text-sm text-white/90 leading-relaxed font-light">Coordinate programmes, participants and delivery teams across multiple locations from one platform.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 05 — OYEN GRID DASHBOARD (UI Mockup) */}
      <section className="py-24 bg-[#09251F] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
              See your programmes as they happen.
            </h2>
            <p className="text-[#D5A547] text-sm uppercase tracking-widest font-bold">OYEN GRID Interface Overview</p>
          </div>

          {/* Interactive UI Mockup */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-white/10">
            {/* Header bar */}
            <div className="bg-[#f8fafc] border-b border-gray-200 px-6 py-4 flex justify-between items-center text-gray-800">
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

            <div className="p-8 text-gray-800 bg-[#f8fafc]">
              <h3 className="text-xl font-bold mb-6">Programme Overview</h3>
              
              {/* KPIs */}
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

              <div className="grid grid-cols-3 gap-6">
                {/* Table */}
                <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
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

                {/* Right panel */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col gap-6">
                  <div>
                    <h4 className="font-bold mb-3 text-sm">Upcoming Sessions</h4>
                    <div className="text-sm text-gray-600 border-l-2 border-[#007079] pl-3 mb-3">
                      <p className="font-medium text-gray-800">Module 3: Strategic Ops</p>
                      <p className="text-xs mt-1">Today, 14:00 (EMEA Region)</p>
                    </div>
                    <div className="text-sm text-gray-600 border-l-2 border-gray-200 pl-3">
                      <p className="font-medium text-gray-800">Cohort 4 Onboarding</p>
                      <p className="text-xs mt-1">Tomorrow, 09:00 (APAC Region)</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-sm">Regional Distribution</h4>
                    <div className="h-24 w-full bg-gray-50 border border-gray-100 rounded flex items-center justify-center text-xs text-gray-400 italic">
                      [ Map Visualization ]
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-right text-[10px] text-gray-400 mt-4 uppercase">* Sample dashboard data</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 & 07 — BUILT FOR / ROLES */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            <div>
              <h2 className="text-3xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
                One platform. Different programme models.
              </h2>
              <p className="text-[#59636D] mb-8">Built for programmes that involve more than just a classroom.</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#D5A547] mr-3 mt-1">●</span>
                  <div>
                    <strong className="text-[#09251F] block">Corporate Training</strong>
                    <span className="text-sm text-[#59636D]">Coordinate employee development and monitor progress.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D5A547] mr-3 mt-1">●</span>
                  <div>
                    <strong className="text-[#09251F] block">Bootcamps & Skills Programmes</strong>
                    <span className="text-sm text-[#59636D]">Manage cohorts, facilitators, activities and outcomes.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D5A547] mr-3 mt-1">●</span>
                  <div>
                    <strong className="text-[#09251F] block">Professional & Graduate Development</strong>
                    <span className="text-sm text-[#59636D]">Structure long-term development journeys.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D5A547] mr-3 mt-1">●</span>
                  <div>
                    <strong className="text-[#09251F] block">Large-Scale Training Initiatives</strong>
                    <span className="text-sm text-[#59636D]">Keep distributed programmes organised across locations and partners.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
                A Multi-Role Experience
              </h2>
              <p className="text-[#59636D] mb-8">Providing the right tools and visibility for every user.</p>

              <div className="space-y-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 flex items-center">
                  <div className="bg-white w-12 h-12 flex items-center justify-center rounded shadow-sm text-[#007079] mr-4 font-bold font-['Plus_Jakarta_Sans',sans-serif]">PM</div>
                  <div>
                    <h4 className="font-bold text-[#111719] text-sm">Programme Manager</h4>
                    <p className="text-sm text-[#59636D]">→ manages programmes and cohorts</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 flex items-center">
                  <div className="bg-white w-12 h-12 flex items-center justify-center rounded shadow-sm text-[#8BA832] mr-4 font-bold font-['Plus_Jakarta_Sans',sans-serif]">FC</div>
                  <div>
                    <h4 className="font-bold text-[#111719] text-sm">Facilitator</h4>
                    <p className="text-sm text-[#59636D]">→ manages delivery and participants</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 flex items-center">
                  <div className="bg-white w-12 h-12 flex items-center justify-center rounded shadow-sm text-[#D5A547] mr-4 font-bold font-['Plus_Jakarta_Sans',sans-serif]">PR</div>
                  <div>
                    <h4 className="font-bold text-[#111719] text-sm">Participant</h4>
                    <p className="text-sm text-[#59636D]">→ accesses activities and tracks progress</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 flex items-center">
                  <div className="bg-white w-12 h-12 flex items-center justify-center rounded shadow-sm text-[#09251F] mr-4 font-bold font-['Plus_Jakarta_Sans',sans-serif]">AD</div>
                  <div>
                    <h4 className="font-bold text-[#111719] text-sm">Administrator</h4>
                    <p className="text-sm text-[#59636D]">→ manages users, programmes and reporting</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 08 — ANALYTICS */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
               <Image 
                  src="/images/products/oyen_grid_analytics.jpg" 
                  alt="Analytics Dashboard" 
                  fill 
                  className="object-cover"
                />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
                Know what is happening across every programme.
              </h2>
              <p className="text-[#59636D] mb-8 leading-relaxed">
                Modern enterprise learning requires deep visibility. Turn programme activity into comprehensive, actionable data.
              </p>
              <div className="grid grid-cols-2 gap-y-4 font-medium text-[#09251F]">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#007079]"></div> Participation</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#007079]"></div> Attendance</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#007079]"></div> Completion</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#007079]"></div> Performance</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#007079]"></div> Cohort Progress</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#007079]"></div> Programme Outcomes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — SCALE */}
      <section className="py-32 text-center max-w-[800px] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-light text-[#111719] mb-8 font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
          One platform. Multiple programmes.<br/>Multiple locations.
        </h2>
        <p className="text-xl text-[#59636D] leading-relaxed">
          OYEN GRID is designed to help organisations coordinate learning programmes as they grow — from a single cohort to complex, distributed deployments.
        </p>
      </section>

      {/* 10 — FINAL CTA */}
      <div className="relative w-full h-[350px] flex items-center justify-center overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
          alt="Deploy OYEN GRID" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#09251F]/90"></div>
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
            Ready to bring your programmes together?
          </h2>
          <p className="text-white/80 text-lg mb-10 font-light">
            See how OYEN GRID can help you plan, coordinate and measure learning delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 bg-[#D5A547] hover:bg-[#c29640] text-[#09251F] font-bold rounded-lg transition-colors text-sm">
              Explore the Platform
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-white hover:bg-gray-100 text-[#09251F] font-bold rounded-lg transition-colors text-sm">
              Contact OYEN
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
