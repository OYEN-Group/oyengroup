import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import ParallaxImage from '@/components/animations/ParallaxImage';

export const metadata: Metadata = {
  title: 'ORIVEX | Petroleum Depot Operational Intelligence',
  description: 'The next generation of Petroleum Depot Operational Intelligence.',
};

export default function OrivexPage() {
  return (
    <div className="bg-[#05110E] min-h-screen text-white font-['Inter',sans-serif] selection:bg-[#D5A547] selection:text-[#09251F]">
      
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* ─── 01 HERO SECTION (Boxed Editorial Style) ─── */}
      <section className="pt-24 md:pt-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto relative z-10">
        <div className="mb-6 flex items-center text-xs font-bold tracking-widest uppercase text-white/40">
          <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
          <span className="mx-3">/</span>
          <Link href="/products" className="hover:text-[#D5A547] transition-colors">Products</Link>
          <span className="mx-3">/</span>
          <span className="text-white">ORIVEX</span>
        </div>

        <FadeUp delay={0.1}>
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
            <ParallaxImage 
              src="/images/showcase/orivex_ui.png" 
              alt="ORIVEX Interface Preview" 
              priority
              className="object-cover object-left-top scale-110 opacity-70 mix-blend-luminosity"
              containerClassName="absolute inset-0 w-full h-full"
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#05110E]/90 via-[#05110E]/50 to-transparent"></div>
            
            <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 lg:left-24 max-w-3xl">
              <div className="bg-[#D5A547] text-[#09251F] text-xs font-bold px-4 py-2 uppercase tracking-[0.2em] w-fit mb-6">
                Under Development
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                ORIVEX<span className="text-[#D5A547]">.</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed">
                The next generation of Petroleum Depot Operational Intelligence.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ─── 02 INTRO (Editorial Two-Column) ─── */}
      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-white/10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <FadeUp>
              <h4 className="text-[#D5A547] font-bold tracking-widest text-sm uppercase mb-4">The Vision</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Unprecedented visibility and precision.
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-6 font-light">
                We are currently engineering a state-of-the-art platform designed to transform crude oil storage and logistics into a highly efficient, data-driven ecosystem.
              </p>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                ORIVEX will provide operators with real-time operational intelligence, predictive maintenance algorithms, and seamless logistics coordination—bringing the future of energy infrastructure online.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── 03 STATUS (System UI Preview) ─── */}
      <section className="py-24 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="mb-16">
              <h4 className="text-[#D5A547] font-bold tracking-widest text-sm uppercase mb-4">System Status</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                Core Engine Compilation
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { num: '82%', title: 'Data Architecture', desc: 'Finalizing high-throughput telemetry ingestion and real-time state management systems.' },
              { num: '64%', title: 'Predictive Analytics', desc: 'Training machine learning models on historical flow-rate and pressure delta datasets.' },
              { num: '91%', title: 'Interface & UX', desc: 'Polishing the dark-mode operations dashboard for control room environments.' },
              { num: '45%', title: 'Field Integration', desc: 'Developing secure edge-to-cloud protocols for physical sensor networks.' }
            ].map((feature, idx) => (
              <FadeUp key={idx} delay={0.1 * idx}>
                <div className="bg-white/5 backdrop-blur-sm p-10 md:p-12 rounded-2xl border border-white/10 h-full group hover:bg-white/10 transition-colors duration-500">
                  <div className="flex justify-between items-end mb-6">
                    <h3 className="text-2xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif]">{feature.title}</h3>
                    <div className="text-[#D5A547] text-2xl font-mono font-light">
                      {feature.num}
                    </div>
                  </div>
                  <p className="text-white/50 leading-relaxed font-light">
                    {feature.desc}
                  </p>
                  
                  {/* Progress bar visual */}
                  <div className="mt-8 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#D5A547] opacity-80" 
                      style={{ width: feature.num }}
                    />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 04 CTA / NEXT STEPS ─── */}
      <section className="py-24 md:py-32 relative z-10 border-t border-white/10">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Plus_Jakarta_Sans',sans-serif]">
              Launching Soon
            </h2>
            <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-light">
              We are moving rapidly toward initial closed beta. Register your interest to be notified when ORIVEX is ready for deployment.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-[#09251F] bg-[#D5A547] hover:bg-white hover:text-[#09251F] px-10 py-5 font-bold tracking-widest uppercase text-sm transition-colors duration-300 rounded-sm group"
            >
              Request Early Access <span className="ml-4 border border-[#09251F]/30 group-hover:border-[#09251F] rounded-full p-1 transition-colors">→</span>
            </Link>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
