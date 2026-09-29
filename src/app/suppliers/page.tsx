import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Suppliers | OYEN GROUP',
  description: 'Supplier information, guidelines, and application for OYEN GROUP.',
};

export default function SuppliersPage() {
  return (
    <main className="bg-[#111719] min-h-screen text-white font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex flex-col justify-center items-center text-center px-6 pt-20">
        <Image 
          src="/images/partnership.jpg" 
          alt="Working with OYEN GROUP" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Building Stronger Partnerships.
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            We welcome suppliers and service providers who share our commitment to quality, innovation and long-term value.
          </p>
        </div>
      </section>

      {/* Navigation Blocks */}
      <section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <Link href="/suppliers/become-a-supplier" className="group relative block bg-[#1A2225] border border-white/10 rounded-lg p-8 hover:bg-[#1f282c] transition-colors overflow-hidden">
            <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-white group-hover:text-[#D5A547] transition-colors">
              Become a Supplier
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Register your interest and provide details about your organization to our procurement team.
            </p>
            <div className="text-[#D5A547] text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              Apply Now 
              <span className="transform transition-transform group-hover:translate-x-2">&rarr;</span>
            </div>
          </Link>

          <Link href="/suppliers/guidelines" className="group relative block bg-[#1A2225] border border-white/10 rounded-lg p-8 hover:bg-[#1f282c] transition-colors overflow-hidden">
            <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-white group-hover:text-[#D5A547] transition-colors">
              Supplier Guidelines
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Review our expectations for ethical practices, quality, and service delivery across all domains.
            </p>
            <div className="text-[#D5A547] text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              View Guidelines 
              <span className="transform transition-transform group-hover:translate-x-2">&rarr;</span>
            </div>
          </Link>

          <Link href="/suppliers/enquiries" className="group relative block bg-[#1A2225] border border-white/10 rounded-lg p-8 hover:bg-[#1f282c] transition-colors overflow-hidden">
            <h3 className="text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] mb-4 text-white group-hover:text-[#D5A547] transition-colors">
              Supplier Enquiries
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Get in touch with our team directly for any questions regarding supplier partnerships.
            </p>
            <div className="text-[#D5A547] text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              Contact Us 
              <span className="transform transition-transform group-hover:translate-x-2">&rarr;</span>
            </div>
          </Link>

        </div>
      </section>

    </main>
  );
}
