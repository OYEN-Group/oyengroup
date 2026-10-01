'use client';

import FadeUp from '@/components/animations/FadeUp';

const VALUES = [
  { title: 'People first', desc: 'Empowering individuals and communities through empathetic leadership and support.' },
  { title: 'Integrity', desc: 'Doing the right thing, always, with transparency and unwavering ethical standards.' },
  { title: 'Practical innovation', desc: 'Creating solutions that actually work and solve real-world problems effectively.' },
  { title: 'Excellence', desc: 'Setting the standard in everything we do, pushing boundaries of what is possible.' },
  { title: 'Long-term impact', desc: 'Building for a sustainable future that benefits generations to come.' }
];

export default function PhilosophySection() {
  return (
    <section className="bg-white py-20 md:py-24 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <FadeUp delay={0.1}>
            <div className="text-[#D5A547] text-xs font-bold tracking-[0.2em] uppercase mb-4 font-['Inter',sans-serif]">
              OUR IDENTITY
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-['Plus_Jakarta_Sans',sans-serif] text-[#111719]">
              Driven by purpose. Built for impact.
            </h2>
          </FadeUp>
        </div>

        {/* Vision & Mission Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          <FadeUp delay={0.2} className="flex flex-col">
            <h3 className="text-[#111719] text-xs font-bold uppercase tracking-[0.2em] font-['Inter',sans-serif] mb-4">
              Vision
            </h3>
            <p className="text-2xl md:text-3xl font-bold leading-[1.3] font-['Plus_Jakarta_Sans',sans-serif] text-[#111719]">
              A more capable Africa powered by technology, talent and innovation.
            </p>
          </FadeUp>
          <FadeUp delay={0.3} className="flex flex-col">
            <h3 className="text-[#111719] text-xs font-bold uppercase tracking-[0.2em] font-['Inter',sans-serif] mb-4">
              Mission
            </h3>
            <p className="text-lg md:text-xl leading-relaxed font-['Inter',sans-serif] font-medium text-[#59636D]">
              To research, build and deploy practical solutions that solve real problems and create lasting value for industries and communities.
            </p>
          </FadeUp>
        </div>

        {/* Horizontal Divider */}
        <FadeUp delay={0.4}>
          <div className="w-full h-[1px] bg-gray-200 mb-12" />
        </FadeUp>

        {/* Values Horizontal Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {VALUES.map((val, i) => (
            <FadeUp key={i} delay={0.5 + (i * 0.1)} className="flex flex-col group cursor-default">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-[#D5A547] text-xs font-bold font-['Inter',sans-serif]">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-bold font-['Plus_Jakarta_Sans',sans-serif] text-[#111719] group-hover:text-[#D5A547] transition-colors">
                  {val.title}
                </h4>
              </div>
              <p className="text-[13px] text-[#59636D] font-['Inter',sans-serif] leading-relaxed">
                {val.desc}
              </p>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}