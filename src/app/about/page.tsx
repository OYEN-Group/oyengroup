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
            OYEN GROUP is a diversified business group focused on building and scaling innovative solutions across key sectors. We combine people, technology and strategic partnerships to create sustainable value, strengthen businesses and drive meaningful impact.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4 border-l-2 border-brand-accent pl-4">Our Vision</h2>
            <p className="text-lg text-brand-primary leading-relaxed">
              To be the premier diversified corporate group building the foundational infrastructure, technologies, and businesses that empower future generations and drive sustainable global economic progress.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4 border-l-2 border-brand-accent pl-4">Our Mission</h2>
            <p className="text-lg text-brand-primary leading-relaxed">
              To develop, invest in, and scale transformative solutions across energy, technology, and agriculture. We are committed to operational excellence, creating long-term value for our stakeholders, and positively impacting the communities where we operate.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
