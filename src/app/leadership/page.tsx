'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
      id: 'rufus',
      name: 'Rufus Edesiri Ejukonemu',
      role: 'Co-Founder, CEO & Director',
      image: '/images/rufus.jpg',
      bio: [
        'Leads business strategy, growth and partnerships, driving OYEN\'s mission to create technology solutions with real impact.'
      ]
    },
    {
      id: 'james',
      name: 'Oyewole, James Mayowa',
      role: 'Founder, CTO & Director',
      image: '/images/james.jpg',
      bio: [
        'Leads technology, product development and research, building innovative solutions for real-world challenges.'
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 lg:px-12 max-w-5xl mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight mb-6">
          Leadership & Structure
        </h1>
        <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto">
          The people behind OYEN GROUP and how we are organised to create real-world impact.
        </p>
      </section>

      {/* Executive Profiles */}
      <section className="container mx-auto px-6 lg:px-12 max-w-5xl mb-32">
        <div className="space-y-24">
          {leaders.map((leader, index) => (
            <div key={leader.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Photo */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-gray-100 shadow-xl">
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
            <h2 className="text-sm tracking-[0.2em] text-brand-muted uppercase font-semibold mb-2">OYEN GROUP LTD</h2>
            <p className="text-xl font-bold text-brand-primary">People · Ideas · Technology · Real Impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block w-px h-full bg-brand-primary/10"></div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-primary/10 flex flex-col items-center text-center">
              <h4 className="text-2xl font-bold text-brand-primary mb-2">CEO</h4>
              <p className="text-sm tracking-widest text-brand-accent uppercase font-medium">Business, Strategy & Growth</p>
            </div>
            
            <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-primary/10 flex flex-col items-center text-center">
              <h4 className="text-2xl font-bold text-brand-primary mb-2">CTO</h4>
              <p className="text-sm tracking-widest text-brand-accent uppercase font-medium">Technology, Product & R&D</p>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-sm tracking-[0.2em] text-brand-muted uppercase font-semibold inline-block bg-brand-offwhite px-4 relative z-10">PRODUCT PORTFOLIO</h3>
              <div className="h-px bg-brand-primary/10 w-full -mt-2.5 relative z-0"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-sm border border-brand-primary/10 text-center">
                <h4 className="text-lg font-bold text-brand-primary mb-2">OYEN GRID</h4>
                <p className="text-sm text-brand-muted">Learning & Training Management Platform</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-brand-primary/10 text-center">
                <h4 className="text-lg font-bold text-brand-primary mb-2">VERBA</h4>
                <p className="text-sm text-brand-muted">AI-Powered Academic Writing & Research Platform</p>
              </div>
              <div className="bg-white p-6 rounded-sm border border-brand-primary/10 text-center">
                <h4 className="text-lg font-bold text-brand-primary mb-2">ORIVEX</h4>
                <p className="text-sm text-brand-muted">Petroleum Depot Operational Intelligence Platform</p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <h3 className="text-sm tracking-[0.2em] text-brand-muted uppercase font-semibold inline-block bg-brand-offwhite px-4 relative z-10">SUPPORTING FUNCTIONS</h3>
              <div className="h-px bg-brand-primary/10 w-full -mt-2.5 relative z-0"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/60 p-4 rounded-sm border border-brand-primary/5 text-center text-brand-primary text-sm font-medium">R&D / Engineering</div>
              <div className="bg-white/60 p-4 rounded-sm border border-brand-primary/5 text-center text-brand-primary text-sm font-medium">Product & Operations</div>
              <div className="bg-white/60 p-4 rounded-sm border border-brand-primary/5 text-center text-brand-primary text-sm font-medium">Marketing & Communications</div>
              <div className="bg-white/60 p-4 rounded-sm border border-brand-primary/5 text-center text-brand-primary text-sm font-medium">Business Development & Partnerships</div>
              <div className="bg-white/60 p-4 rounded-sm border border-brand-primary/5 text-center text-brand-primary text-sm font-medium">Finance</div>
              <div className="bg-white/60 p-4 rounded-sm border border-brand-primary/5 text-center text-brand-primary text-sm font-medium">Legal & Compliance</div>
              <div className="bg-white/60 p-4 rounded-sm border border-brand-primary/5 text-center text-brand-primary text-sm font-medium">People & Culture</div>
              <div className="bg-white/60 p-4 rounded-sm border border-brand-primary/5 text-center text-brand-primary text-sm font-medium">Strategy & Corporate Services</div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Closing Corporate Statement */}
      <section className="container mx-auto px-6 lg:px-12 max-w-4xl text-center py-24">
        <h2 className="text-2xl md:text-3xl font-light text-brand-primary leading-relaxed italic">
          "Our leadership provides the vision, direction and support needed to turn ideas into real-world impact."
        </h2>
      </section>
    </main>
  );
}
