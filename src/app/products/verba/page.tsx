import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import ParallaxImage from '@/components/animations/ParallaxImage';

export const metadata: Metadata = {
  title: 'VERBA | Academic Writing & Research Workspace',
  description: 'Academic Writing, Research & Evidence — In One Workspace.',
};

export default function VerbaPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen text-[#111719] font-['Inter',sans-serif]">
      
      {/* ─── 01 HERO SECTION (Boxed Editorial Style) ─── */}
      <section className="pt-24 md:pt-32 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <div className="mb-6 flex items-center text-xs font-bold tracking-widest uppercase text-[#59636D]">
          <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
          <span className="mx-3">/</span>
          <Link href="/products" className="hover:text-[#D5A547] transition-colors">Products</Link>
          <span className="mx-3">/</span>
          <span className="text-[#111719]">VERBA</span>
        </div>

        <FadeUp delay={0.1}>
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl">
            <ParallaxImage 
              src="/images/verba.jpg" 
              alt="VERBA Academic Workspace" 
              priority
              className="object-cover"
              containerClassName="absolute inset-0 w-full h-full"
            />
            {/* Elegant vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09251F]/90 via-[#09251F]/40 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            
            <div className="absolute bottom-12 md:bottom-24 left-6 md:left-12 lg:left-24 max-w-3xl">
              <div className="bg-[#D5A547] text-[#09251F] text-xs font-bold px-4 py-2 uppercase tracking-[0.2em] w-fit mb-6">
                Digital Solution
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-white mb-6 leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                VERBA
              </h1>
              <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                Write with confidence. Research with evidence. Academic Writing, Research & Evidence — In One Workspace.
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ─── 02 INTRO (Editorial Two-Column) ─── */}
      <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <FadeUp>
              <h4 className="text-[#09251F] font-bold tracking-widest text-sm uppercase mb-4">The Challenge</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-[#111719] leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Bridging the gap between claims and evidence.
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-[#59636D] leading-relaxed mb-6">
                Current academic tools increasingly emphasize connecting claims to sources and making citation checking transparent. A citation shouldn't just exist; it should explicitly support the claim you're making.
              </p>
              <p className="text-lg md:text-xl text-[#59636D] leading-relaxed font-light">
                Verba helps students and researchers write better, find credible sources, cite correctly, check whether their citations actually support their claims, and keep a clear record of how their work was developed.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── 03 THE CAPABILITIES (4-Card Grid) ─── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="mb-16">
              <h4 className="text-[#09251F] font-bold tracking-widest text-sm uppercase mb-4">The Workspace</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">
                A single environment for the complete academic process.
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { num: '01', title: 'Write & Synthesize', desc: 'Turn your ideas into clear academic work. Write and refine assignments and research papers while keeping your own reasoning and voice at the centre.' },
              { num: '02', title: 'Source Research', desc: 'Search for credible academic sources and bring relevant evidence into your work instead of relying on unsupported or invented references.' },
              { num: '03', title: 'Verification', desc: 'Review whether the source actually supports the statement you\'re attaching it to. Ensure evidence directly correlates with written claims.' },
              { num: '04', title: 'Transparent Authorship', desc: 'Preserve drafts, revisions, sources and recorded assistance so users have a clearer, auditable account of how their work developed.' }
            ].map((feature, idx) => (
              <FadeUp key={idx} delay={0.1 * idx}>
                <div className="bg-white p-10 md:p-12 rounded-2xl border border-gray-100 shadow-sm h-full group hover:shadow-xl transition-shadow duration-500">
                  <div className="text-[#D5A547] text-4xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-6">
                    {feature.num}
                  </div>
                  <h3 className="text-2xl font-bold text-[#09251F] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">{feature.title}</h3>
                  <p className="text-[#59636D] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 04 FULL-WIDTH PARALLAX BREAK ─── */}
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        <ParallaxImage 
          src="/images/tech.jpg" 
          alt="Research and verification" 
          className="object-cover"
          containerClassName="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-[#09251F]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <FadeUp>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl max-w-3xl">
              <p className="text-white text-xl md:text-3xl font-medium leading-relaxed font-['Plus_Jakarta_Sans',sans-serif]">
                "Claim &rarr; Citation &rarr; Source &rarr; Evidence"
              </p>
              <p className="text-white/70 mt-6 text-sm font-bold tracking-widest uppercase">The Verba Workflow</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── 05 CTA / NEXT STEPS ─── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-[#09251F] mb-8 font-['Plus_Jakarta_Sans',sans-serif]">
              Ready to elevate your research?
            </h2>
            <p className="text-xl text-[#59636D] mb-12 max-w-2xl mx-auto">
              Discover how VERBA can transform your institution's academic writing and verification processes.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-white bg-[#09251F] hover:bg-[#D5A547] hover:text-[#111719] px-10 py-5 font-bold tracking-widest uppercase text-sm transition-colors duration-300 rounded-sm group"
            >
              Request a Demo <span className="ml-4 border border-white group-hover:border-[#111719] rounded-full p-1 transition-colors">→</span>
            </Link>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
