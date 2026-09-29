import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions | OYEN GROUP',
  description: 'Explore OYEN GROUP solutions and capabilities.',
};

const solutions = [
  {
    id: 'training',
    name: 'Training & Programme Management',
    image: '/images/showcase/grid_ui.png',
    link: '/products/oyen-grid',
  },
  {
    id: 'academic',
    name: 'Academic Research & Writing',
    image: '/images/showcase/verba_ui.png',
    link: '/products/verba',
  },
  {
    id: 'industrial',
    name: 'Industrial Intelligence',
    image: '/images/showcase/orivex_ui.png',
    link: '#',
    comingSoon: true,
  },
  {
    id: 'digital',
    name: 'Digital Solutions',
    image: '/images/tech.jpg',
    link: '#',
    comingSoon: true,
  },
  {
    id: 'collaboration',
    name: 'Strategic Collaboration',
    image: '/images/partnership.jpg',
    link: '#',
  }
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#111719] min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center text-center px-6 pt-20">
        <Image 
          src="/images/tech.jpg" 
          alt="Solutions at OYEN GROUP" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Solutions at OYEN GROUP
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed font-['Inter',sans-serif] max-w-3xl mx-auto">
            As the industry evolves and shifts, the market is demanding a higher level of intelligence and integration. 
            We provide robust platforms and strategic management to power industries and communities. 
            Across all of our key segments, OYEN GROUP delivers premium software and systems that are elegantly engineered 
            and boldly executed, enabling the best in smart, sustainable technology with precision and power.
          </p>
        </div>
      </section>

      {/* STACKED SOLUTION SECTIONS */}
      {solutions.map((solution) => (
        <section key={solution.id} className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center text-center px-6 border-t border-white/10 overflow-hidden">
          <Image 
            src={solution.image} 
            alt={solution.name} 
            fill 
            className={`object-cover transition-transform duration-1000 ${solution.comingSoon ? 'blur-md scale-105 opacity-60' : ''}`}
          />
          <div className={`absolute inset-0 transition-colors duration-500 ${solution.comingSoon ? 'bg-black/70' : 'bg-black/50 hover:bg-black/40'}`} />
          
          <div className={`relative z-10 flex flex-col items-center ${solution.comingSoon ? 'opacity-90' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight drop-shadow-md">
              {solution.name}
            </h2>
            
            {solution.comingSoon ? (
              <div className="bg-black/50 px-8 py-3 rounded-sm font-semibold text-sm text-white uppercase tracking-widest font-['Inter',sans-serif] border border-white/20 backdrop-blur-md">
                Coming Soon
              </div>
            ) : (
              <Link 
                href={solution.link}
                className="bg-[#EAE8E1] text-[#111719] px-8 py-3 rounded-sm font-semibold text-sm hover:bg-white transition-colors uppercase tracking-widest font-['Inter',sans-serif]"
              >
                Learn More
              </Link>
            )}
          </div>
        </section>
      ))}

    </main>
  );
}
