import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | OYEN GROUP',
  description: 'Learn about OYEN GROUP, our vision, mission, and philosophy.',
};

export default function AboutPage() {
  return (
    <main className="bg-white pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-8 tracking-tight">
            Building the Infrastructure <br />
            of Tomorrow.
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted leading-relaxed max-w-3xl">
            OYEN GROUP is a technology and research company focused on solving real problems through practical software products, data-driven solutions and applied research.
          </p>
        </div>

        <div className="relative w-full h-[400px] md:h-[600px] mb-24 overflow-hidden rounded-sm">
          <Image
            src="/images/partnership.jpg"
            alt="Oyen Group Leadership"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4 border-l-2 border-brand-accent pl-4">Our Vision</h2>
            <p className="text-lg text-brand-primary leading-relaxed">
              A more capable Africa powered by technology, talent and innovation.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4 border-l-2 border-brand-accent pl-4">Our Mission</h2>
            <p className="text-lg text-brand-primary leading-relaxed">
              To research, build and deploy practical solutions that solve real problems and create lasting value.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4 border-l-2 border-brand-accent pl-4">Our Values</h2>
            <ul className="text-lg text-brand-primary leading-relaxed space-y-2 list-none">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>People first</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>Integrity</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>Practical innovation</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>Excellence</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>Long-term impact</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
