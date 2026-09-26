'use client';

import React from 'react';
import Image from 'next/image';

interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
}

export default function LeadershipPage() {
  const leaders: Leader[] = [
    {
      id: 'ahmed',
      name: 'Ahmed Al-Maktoum',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop',
      bio: [
        'Ahmed founded OYEN GROUP to solve a fundamental issue in contemporary technological development: the gap between transient software interfaces and enduring infrastructure.',
        'He believes that the next generation of organizations and future ecosystems must be built on platforms that prioritize structural robustness, low-latency communication networks, and long-term architectural stability.',
        'With an extensive background in digital system design, high-performance computing, and technical operations, Ahmed works directly with engineering teams to guide OYEN GROUP\'s product development, research initiatives, and long-term expansion across the African continent and globally.'
      ]
    },
    {
      id: 'sarah',
      name: 'Sarah Johnson',
      role: 'Co-Founder & COO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop',
      bio: [
        'Sarah leads operations, strategic partnerships, and technology integration at OYEN GROUP.',
        'With a track record of scaling technology systems and coordinating complex industrial operations, she ensures that OYEN GROUP\'s platforms scale efficiently and remain aligned with real-world requirements.',
        'Sarah is passionate about developing sustainable ecosystems, building strong operational teams, and expanding OYEN GROUP\'s reach across key industries, ensuring our long-term goals translate into precise execution.'
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 lg:px-12 max-w-5xl mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight mb-6">
          Leadership & Governance
        </h1>
        <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto">
          The team shaping OYEN GROUP's long-term vision.
        </p>
      </section>

      {/* Executive Profiles */}
      <section className="container mx-auto px-6 lg:px-12 max-w-5xl mb-32">
        <div className="space-y-24">
          {leaders.map((leader, index) => (
            <div key={leader.id} className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Photo */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden bg-gray-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="w-full md:w-2/3 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-brand-primary mb-2">
                  {leader.name}
                </h2>
                <h3 className="text-sm font-semibold tracking-[0.2em] text-brand-accent uppercase mb-8">
                  {leader.role}
                </h3>
                <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
                  {leader.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Organisational Structure */}
      <section className="bg-brand-offwhite py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-primary tracking-tight mb-4">
              Organisational Structure
            </h2>
            <div className="w-12 h-1 bg-brand-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-sm shadow-sm border border-black/5 flex flex-col items-center text-center">
              <h4 className="text-sm tracking-[0.2em] text-brand-muted uppercase font-semibold mb-2">Founder & CEO</h4>
              <p className="text-xl font-bold text-brand-primary">Ahmed Al-Maktoum</p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm border border-black/5 flex flex-col items-center text-center">
              <h4 className="text-sm tracking-[0.2em] text-brand-muted uppercase font-semibold mb-2">Co-Founder & COO</h4>
              <p className="text-xl font-bold text-brand-primary">Sarah Johnson</p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 p-8 rounded-sm border border-black/5 flex flex-col items-center text-center opacity-70">
              <h4 className="text-sm tracking-[0.2em] text-brand-muted uppercase font-semibold mb-2">Chief Technology Officer</h4>
              <p className="text-lg text-brand-muted italic">Infrastructure & Engineering</p>
            </div>
            <div className="bg-white/50 p-8 rounded-sm border border-black/5 flex flex-col items-center text-center opacity-70">
              <h4 className="text-sm tracking-[0.2em] text-brand-muted uppercase font-semibold mb-2">Chief Strategy Officer</h4>
              <p className="text-lg text-brand-muted italic">Ecosystem & Partnerships</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
