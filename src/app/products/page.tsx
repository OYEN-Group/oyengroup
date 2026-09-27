import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
 title: 'Our Businesses | OYEN GROUP',
 description: 'Explore OYEN GROUP divisions: Oyen Energy, Oyen Tech, and Oyen Agro.',
};

const divisions = [
 {
 id: 'energy',
 name: 'Oyen Energy',
 description: 'Innovative solutions in the energy and petroleum value chain. We provide robust infrastructure and strategic management to power industries and communities.',
 image: '/images/energy.jpg',
 link: '/businesses/energy',
 },
 {
 id: 'tech',
 name: 'Oyen Tech',
 description: 'Technology solutions for smarter and more efficient operations. From digital infrastructure to industrial automation, we enable the next generation of enterprise capabilities.',
 image: '/images/tech.jpg',
 link: '/businesses/tech',
 },
 {
 id: 'agro',
 name: 'Oyen Agro',
 description: 'Modern agricultural solutions for food security and economic growth. We integrate technology with sustainable farming practices to maximize yield and impact.',
 image: '/images/agro.jpg',
 link: '/businesses/agro',
 }
];

export default function BusinessesPage() {
 return (
 <main className="bg-brand-offwhite pt-32 pb-24 min-h-screen">
 <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
 <div className="mb-20 text-center max-w-3xl mx-auto">
 <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight">
 Our Portfolio
 </h1>
 <p className="text-lg text-brand-muted leading-relaxed">
 OYEN GROUP operates through three primary business divisions, each dedicated to excellence, innovation, and sustainable long-term value creation.
 </p>
 </div>

 <div className="space-y-24">
 {divisions.map((division, index) => (
 <div key={division.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}>
 <div className="w-full lg:w-1/2">
 <div className="relative h-[400px] w-full overflow-hidden rounded-sm group">
 <Image quality={100}
 src={division.image}
 alt={division.name}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-brand-primary/10" />
 </div>
 </div>
 
 <div className="w-full lg:w-1/2 space-y-6">
 <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">{division.name}</h2>
 <p className="text-lg text-brand-muted leading-relaxed">
 {division.description}
 </p>
 <div className="pt-4">
 <Link 
 href={division.link}
 className="inline-flex items-center gap-3 text-brand-primary font-semibold uppercase tracking-widest text-base hover:text-brand-accent transition-colors group"
 >
 <span className="border-b-2 border-brand-primary group-hover:border-brand-accent pb-1 transition-colors">
 Explore {division.name}
 </span>
 <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
 </Link>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </main>
 );
}
