import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Oyen Tech | OYEN GROUP',
 description: 'Oyen Tech division of OYEN GROUP.',
};

export default function TechPage() {
 return (
 <main className="bg-brand-offwhite pt-32 pb-24 min-h-screen">
 <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
 <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight">
 Oyen Tech
 </h1>
 <p className="text-lg text-brand-muted leading-relaxed mb-8">
 Detailed information about our Technology division is coming soon.
 </p>
 </div>
 </main>
 );
}
