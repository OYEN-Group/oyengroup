import { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Supplier Enquiries | OYEN GROUP',
  description: 'Contact OYEN GROUP for supplier enquiries.',
};

export default function SupplierEnquiriesPage() {
  return (
    <main className="bg-[#09251F] min-h-screen font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center items-center text-center px-6 pt-20">
        <Image 
          src="/images/agro.jpg" 
          alt="Supplier Enquiries" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Supplier Enquiries
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
            Get in touch with our procurement team.
          </p>
        </div>
      </section>

      {/* Supplier Enquiries */}
      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
          Interested in Working With Us?
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          We welcome enquiries from organisations interested in supporting our technology, research and business operations. Our team is ready to answer your questions and explore potential synergies.
        </p>
        <div className="flex justify-center">
          <CTAButton href="/contact" text="Contact Our Team" theme="light" />
        </div>
      </section>

    </main>
  );
}
