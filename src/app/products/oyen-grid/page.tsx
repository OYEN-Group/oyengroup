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

      {/* ─── 01 HERO (Boxed, Aramco-style) ─── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-16">
        <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden rounded-[24px] shadow-2xl">
          <Image
            quality={100}
            src="/images/oyen-grid/hero-training.jpg"
            alt="OYEN GRID – Learning Programme Management"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09251F]/90 via-[#09251F]/60 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-white/70 uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/products" className="hover:text-white transition-colors">Technology</Link>
              <span>›</span>
              <span className="text-white font-bold">OYEN GRID</span>
            </div>

            <p className="text-[#D5A547] text-sm font-bold tracking-widest uppercase mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
              What We Do
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1] mb-4 max-w-2xl">
              Learning Programme Management
            </h1>
            <p className="text-xl text-white/90 font-light max-w-xl leading-relaxed">
              Design programmes, coordinate participants and facilitators, track progress and manage delivery from one connected environment.
            </p>
          </div>
        </div>
      </div>

      {/* ─── 02 TWO-COLUMN BODY TEXT ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-[#59636D] text-[15px] leading-relaxed">
          <div className="space-y-5">
            <p>
              Running a large learning programme involves more than delivering content. Participants, facilitators, schedules, attendance, progress, reporting and multiple locations can quickly become difficult to coordinate.
            </p>
            <p>
              Fragmented systems lead to manual tracking, limited visibility across cohorts and slow, unreliable reporting — making it harder to understand how a programme is actually performing.
            </p>
            <p>
              OYEN GRID is built to bring the full operation together in one connected platform, from programme design to final completion.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              The platform provides structured tools for programme managers, facilitators and participants — giving each role the visibility and controls they need without unnecessary complexity.
            </p>
            <p>
              From corporate training bootcamps to large-scale professional development programmes, OYEN GRID is designed to handle real operational demands across multiple cohorts, locations and delivery teams.
            </p>
            <p>
              Progress, attendance, completion and performance data are centralised — so organisations always know where each programme stands.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 03 IN THIS SECTION (3-column card grid) ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-2xl font-bold text-[#111719] mb-10 font-['Plus_Jakarta_Sans',sans-serif]">
          Platform Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: '/images/oyen-grid/programme-management.jpg',
              title: 'Programme Design',
              desc: 'Build the programme structure, define cohorts, assign facilitators and schedule activities before delivery begins.',
              link: '#programme-design'
            },
            {
              img: '/images/oyen-grid/participant-management.jpg',
              title: 'Participant Tracking',
              desc: 'Monitor enrolment, attendance, participation and individual progress across every cohort in real time.',
              link: '#participant-tracking'
            },
            {
              img: '/images/oyen-grid/facilitator-coordination.jpg',
              title: 'Facilitator Hub',
              desc: 'Give facilitators one place to access programme information, participant records, schedules and resources.',
              link: '#facilitator-hub'
            },
            {
              img: '/images/oyen-grid/attendance-progress.jpg',
              title: 'Progress Analytics',
              desc: 'Turn programme activity into useful information — completion rates, participation trends and performance data.',
              link: '#progress-analytics'
            },
            {
              img: '/images/showcase/grid_ui.png',
              title: 'Reporting',
              desc: 'Access consolidated reports across programmes, cohorts and participants to inform decisions.',
              link: '#reporting'
            },
            {
              img: '/images/hero-slide1.jpg',
              title: 'Multi-Location Deployment',
              desc: 'Coordinate programmes, participants and delivery teams across multiple sites from one platform.',
              link: '#deployment'
            },
          ].map((item, idx) => (
            <div key={idx} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#111719] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">{item.title}</h3>
                <p className="text-[#59636D] text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-flex items-center text-[#007079] text-sm font-bold tracking-widest uppercase group-hover:text-[#D5A547] transition-colors">
                  Learn more <span className="ml-2">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 04 IMAGE LEFT + TEXT RIGHT (Dashboard UI) ─── */}
      <section className="bg-[#F8FAFC] py-24 mb-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* UI Mockup left */}
            <div className="w-full lg:w-[55%] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#09251F] rounded-md flex items-center justify-center text-white font-bold text-xs font-['Plus_Jakarta_Sans',sans-serif]">OG</div>
                  <span className="font-bold text-[#111719]">OYEN GRID — Dashboard</span>
                </div>
                <div className="flex gap-5 text-sm font-medium text-gray-500">
                  <span className="text-[#007079] border-b-2 border-[#007079] pb-3 -mb-3">Overview</span>
                  <span className="hidden md:inline">Programmes</span>
                  <span className="hidden md:inline">Cohorts</span>
                  <span className="hidden md:inline">Reports</span>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Active Programmes', value: '12', color: 'text-[#09251F]' },
                    { label: 'Total Participants', value: '850', color: 'text-[#007079]' },
                    { label: 'Avg Completion', value: '76%', color: 'text-[#8BA832]' },
                    { label: 'Active Facilitators', value: '34', color: 'text-gray-700' },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] p-4 rounded-lg border border-gray-100">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className={`text-2xl font-light ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F8FAFC] rounded-lg border border-gray-100 p-5">
                  <h4 className="font-bold text-sm text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">Programme Progress</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'Leadership Programme', participants: 120, pct: 78, color: '#007079' },
                      { name: 'Digital Skills Bootcamp', participants: 250, pct: 64, color: '#D5A547' },
                      { name: 'Graduate Development', participants: 180, pct: 91, color: '#8BA832' },
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-center gap-4 text-sm">
                        <span className="w-40 text-[#09251F] font-medium truncate">{row.name}</span>
                        <span className="w-8 text-gray-500 text-xs">{row.participants}</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${row.pct}%`, backgroundColor: row.color }}></div>
                        </div>
                        <span className="w-8 text-xs text-gray-500">{row.pct}%</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-right text-[10px] text-gray-400 mt-4 uppercase tracking-wider">* Sample dashboard data</p>
                </div>
              </div>
            </div>

            {/* Text right */}
            <div className="w-full lg:w-[45%]">
              <h4 className="text-[#D5A547] font-bold tracking-widest text-sm uppercase mb-4 font-['Plus_Jakarta_Sans',sans-serif]">The Platform</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111719] mb-8 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-tight">
                See your programmes as they happen.
              </h2>
              <p className="text-[#59636D] text-lg leading-relaxed mb-8 font-light">
                A consolidated view of every programme gives managers the real-time information needed to act quickly and report accurately.
              </p>
              <div className="space-y-5 font-['Plus_Jakarta_Sans',sans-serif]">
                {[
                  { title: 'Real-time participant tracking', desc: 'Know where every participant stands at any point in a programme.' },
                  { title: 'Cohort-level reporting', desc: 'Compare performance across cohorts without manual data collection.' },
                  { title: 'Facilitator oversight', desc: 'Monitor delivery activity across your entire team from a single view.' },
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-[#09251F]/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#09251F]"></div>
                    </div>
                    <div>
                      <p className="font-bold text-[#111719] text-sm">{point.title}</p>
                      <p className="text-[#59636D] text-sm font-light">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 05 BECOME A CUSTOMER (Callout) ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <div className="relative w-full md:w-[55%] h-[300px] md:h-auto">
            <Image
              src="/images/oyen-grid/facilitator-coordination.jpg"
              alt="Manage your programme"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="w-full md:w-[45%] bg-white p-10 lg:p-16 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Bring OYEN GRID to your organisation.
            </h3>
            <p className="text-[#59636D] leading-relaxed mb-8 font-light">
              Discover how OYEN GRID can help you plan, coordinate and measure learning delivery across your programmes.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-[#111719] bg-[#D5A547] hover:bg-[#09251F] hover:text-white px-8 py-4 font-bold tracking-widest uppercase text-sm transition-colors duration-300 rounded-sm group self-start"
            >
              Request a conversation <span className="ml-3 border border-[#111719] group-hover:border-white rounded-full p-1 transition-colors">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 06 FULL-WIDTH DARK CLOSING SECTION ─── */}
      <section className="relative w-full h-[400px] md:h-[480px] flex items-center justify-start overflow-hidden">
        <Image
          src="/images/hero-slide1.jpg"
          alt="One platform for every programme"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#09251F]/85" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight max-w-3xl leading-tight">
            Operations
          </h2>
          <p className="text-white/80 text-xl font-light max-w-xl mb-10">
            One platform. Multiple programmes. Multiple locations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-[#09251F] bg-[#D5A547] hover:bg-white px-8 py-4 font-bold tracking-widest uppercase text-sm transition-colors duration-300 rounded-sm"
          >
            Explore the Platform →
          </Link>
        </div>
      </section>

    </main>
  );
}
