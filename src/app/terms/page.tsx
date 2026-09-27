import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Terms of Service | OYEN GROUP',
 description: 'Terms of Service for OYEN GROUP.',
};

export default function TermsPage() {
 return (
 <main className="bg-brand-offwhite pt-32 pb-24 min-h-screen">
 <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
 <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight">
 Terms of Service
 </h1>
 <p className="text-lg text-brand-muted leading-relaxed mb-8">
 Our terms of service are currently being updated and will be available soon.
 </p>
 </div>
 </main>
 );
}
