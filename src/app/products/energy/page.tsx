import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Oyen Energy | OYEN GROUP',
 description: 'Oyen Energy division of OYEN GROUP.',
};

export default function EnergyPage() {
 return (
 <main className="bg-brand-offwhite pt-32 pb-24 min-h-screen">
 <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
 <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight">
 Oyen Energy
 </h1>
 <p className="text-lg text-brand-muted leading-relaxed mb-8">
 Detailed information about our Energy division is coming soon.
 </p>
 </div>
 </main>
 );
}
