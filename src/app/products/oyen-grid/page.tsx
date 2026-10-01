import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';
import ParallaxImage from '@/components/animations/ParallaxImage';

export const metadata = {
  title: 'OYEN GRID | OYEN GROUP',
  description: 'Training and programme management platform.',
};

export default function OyenGridPage() {
  return (
    <main className="bg-white min-h-screen pt-28 pb-0 font-['Inter',sans-serif]">

      {/* ─── 01 HERO (Boxed, Aramco-style) ─── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-16">
        <FadeUp>
          <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden rounded-[24px] shadow-2xl">
            <ParallaxImage
              src="/images/tech.jpg"
              alt="OYEN GRID – Training and programme management platform"
              className="object-cover object-center w-full h-full"
              containerClassName="absolute inset-0 w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#09251F]/90 via-[#09251F]/60 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-medium text-white/70 uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif] mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                <span>›</span>
                <span className="text-white font-bold">OYEN GRID</span>
              </div>

              <p className="text-[#D5A547] text-sm font-bold tracking-widest uppercase mb-3 font-['Plus_Jakarta_Sans',sans-serif]">
                Technology
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1] mb-4 max-w-2xl">
                OYEN GRID
              </h1>
              <p className="text-xl text-white/90 font-light max-w-xl leading-relaxed">
                Training and programme management platform.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* ─── 02 TWO-COLUMN BODY TEXT ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-[#59636D] text-[15px] leading-relaxed">
          <div className="space-y-5">
            <FadeUp delay={0.1}>
              <p className="text-[#111719] font-medium text-lg leading-relaxed">
                OYEN GRID is a platform designed for organisations to run structured training and learning programmes efficiently. It acts as a central hub for programme design, participant management, and operational delivery.
              </p>
            </FadeUp>
          </div>
          <div className="space-y-5">
            <FadeUp delay={0.2}>
              <p>
                By structuring training programmes in one connected environment, OYEN GRID helps coordinate learning activities and manage programme delivery from start to finish, ensuring consistency and quality at scale.
              </p>
              <p className="mt-5">
                It offers comprehensive features to support facilitator assignments, programme coordination, and training delivery, empowering administrators with full visibility over training operations.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── 03 4-CARD GRID (Aramco style capabilities) ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-24 bg-[#F8FAFC] py-20 rounded-[24px]">
        <FadeUp>
          <h2 className="text-3xl font-bold text-[#111719] mb-12 font-['Plus_Jakarta_Sans',sans-serif] px-4 md:px-8">
            Platform Capabilities
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
          {[
            {
              title: 'Participant Management',
              desc: 'Organise participant information and maintain visibility across training activities. OYEN GRID simplifies the onboarding process and tracks learner engagement throughout the lifecycle of the programme. Maintain detailed records of attendance and monitor participant progress.',
            },
            {
              title: 'Facilitator Coordination',
              desc: 'Support facilitator assignments, programme coordination and training delivery through a streamlined interface. Enables precise scheduling, resource allocation, and communication channels that keep facilitators aligned with programme goals and participant needs.',
            },
            {
              title: 'Advanced Analytics',
              desc: 'Gain insights into learning outcomes and programme performance. Our advanced reporting tools help you make data-driven decisions to improve your training delivery.',
            },
            {
              title: 'Global Deployment',
              desc: 'Deploy your training programmes globally with a platform built for scale. Support diverse learning environments and diverse participant groups simultaneously.',
            }
          ].map((item, idx) => (
            <FadeUp key={idx} delay={0.1 * idx}>
              <div className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-[#09251F]/5 rounded-full flex items-center justify-center mb-6">
                  <div className="w-4 h-4 bg-[#D5A547] rounded-sm"></div>
                </div>
                <h3 className="text-xl font-bold text-[#111719] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">{item.title}</h3>
                <p className="text-[#59636D] text-[15px] leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <Link href="/contact" className="inline-flex items-center text-[#007079] text-sm font-bold tracking-widest uppercase hover:text-[#D5A547] transition-colors mt-auto">
                  Find out more <span className="ml-2">→</span>
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ─── 04 DASHBOARD UI & ROLE OF TECH (Half Text / Half Image Mockup) ─── */}
      <section className="bg-white py-24 mb-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* UI Mockup left */}
            <div className="w-full lg:w-[55%]">
              <FadeUp>
                <div className="relative w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex items-center justify-center bg-[#F8FAFC]">
                  <Image src="/images/showcase/grid_ui.png" alt="Programme operations dashboard" fill className="object-cover opacity-90" unoptimized />
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                  <div className="relative z-10 bg-white p-6 rounded-lg shadow-2xl flex items-center gap-4">
                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">Global Training Hub Active</span>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Text right */}
            <div className="w-full lg:w-[45%]">
              <FadeUp delay={0.2}>
                <h4 className="text-[#D5A547] font-bold tracking-widest text-sm uppercase mb-4 font-['Plus_Jakarta_Sans',sans-serif]">The Platform</h4>
                <h2 className="text-4xl md:text-5xl font-bold text-[#111719] mb-8 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-tight">
                  The role of technology
                </h2>
                <div className="space-y-6 text-[#59636D] text-[17px] font-['Inter',sans-serif] leading-relaxed">
                  <p>
                    Technology is at the core of modern education. OYEN GRID leverages cloud infrastructure to provide a scalable, secure, and accessible learning environment for all participants.
                  </p>
                  <p>
                    We continuously integrate the latest advancements in data analytics and user experience design, ensuring that our platforms meet the evolving demands of educational institutions and corporate training departments.
                  </p>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 05 FULL-WIDTH DARK CLOSING SECTION ─── */}
      <section className="relative w-full h-[400px] md:h-[480px] flex items-center justify-start overflow-hidden">
        <ParallaxImage
          src="/images/hero-slide1.jpg"
          alt="Deploy globally"
          className="object-cover object-center w-full h-full"
          containerClassName="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-[#09251F]/85" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight max-w-3xl leading-tight">
              Programme Operations
            </h2>
            <p className="text-white/80 text-xl font-light max-w-xl mb-10 leading-relaxed">
              Automating routine administrative tasks so facilitators can focus on delivering high-quality education.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-[#09251F] bg-[#D5A547] hover:bg-white px-8 py-4 font-bold tracking-widest uppercase text-sm transition-colors duration-300 rounded-sm"
            >
              Request a conversation →
            </Link>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
