import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | OYEN GROUP',
  description: 'Privacy Policy for OYEN GROUP.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-brand-offwhite pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-lg text-brand-muted leading-relaxed mb-8">
          Our privacy policy is currently being updated and will be available soon.
        </p>
      </div>
    </main>
  );
}
