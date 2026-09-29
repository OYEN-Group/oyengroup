import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Supplier Guidelines | OYEN GROUP',
  description: 'Supplier guidelines and areas of interest for OYEN GROUP.',
};

export default function SupplierGuidelinesPage() {
  return (
    <main className="bg-white min-h-screen font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col justify-center items-center text-center px-6 pt-20">
        <Image 
          src="/images/tech.jpg" 
          alt="Supplier Guidelines" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Supplier Guidelines
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
            Our expectations for service providers and partners.
          </p>
        </div>
      </section>

      {/* Supplier Guidelines */}
      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
            Our Guidelines
          </h2>
          <p className="text-lg text-[#59636D] leading-relaxed">
            We hold ourselves to high standards and expect the same from the organizations we work with. The following represent our general expectations for all service providers and partners.
          </p>
        </div>

        <ul className="space-y-6 text-[#111719]">
          {[
            { title: "Quality and reliability", desc: "Delivering consistent, high-standard services and products that meet our operational requirements." },
            { title: "Ethical business practices", desc: "Conducting business with integrity, fairness, and zero tolerance for corruption." },
            { title: "Confidentiality and data protection", desc: "Handling sensitive information responsibly and securely." },
            { title: "Compliance with applicable regulations", desc: "Adhering to local and international laws governing labor, trade, and safety." },
            { title: "Professional service delivery", desc: "Maintaining clear communication, timely delivery, and professional support." },
          ].map((item, idx) => (
            <li key={idx} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 border-b border-gray-100 pb-6">
              <span className="text-[#09251F] font-bold text-lg md:w-1/3 shrink-0 font-['Plus_Jakarta_Sans',sans-serif]">{item.title}</span>
              <span className="text-[#59636D] md:w-2/3 leading-relaxed">{item.desc}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-[#8c949c] mt-8 italic">
          * Please note: The above are general expectations and do not constitute a legally binding procurement policy.
        </p>
      </section>

      {/* Supplier Categories */}
      <section className="bg-[#FAFAFA] py-24 md:py-32 px-6 lg:px-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="text-sm font-bold text-[#D5A547] tracking-[0.2em] uppercase mb-4">Areas of Interest</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Supplier Categories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              "Software & IT Infrastructure",
              "Engineering & Technical Services",
              "Research & Laboratory Equipment",
              "Training & Educational Resources",
              "Professional & Business Services"
            ].map((category, idx) => (
              <div key={idx} className="border-t border-gray-300 pt-6 group transition-colors hover:border-[#09251F]">
                <h4 className="text-lg md:text-xl font-bold text-[#111719] group-hover:text-[#09251F] transition-colors font-['Plus_Jakarta_Sans',sans-serif] text-center">
                  {category}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
