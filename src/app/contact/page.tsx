import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Global Contacts | OYEN GROUP',
  description: 'Global contact directory for OYEN GROUP.',
};

export default function ContactPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen text-[#111719] font-['Inter',sans-serif] pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-[#111719] mb-8 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Global contacts
          </h1>
          <p className="text-sm md:text-base text-[#59636D] leading-relaxed">
            Connect directly with OYEN GROUP. Select from the categories below to find the exact team, office, or representative you need.
          </p>
        </div>

        {/* Section 1: OYEN GROUP Global */}
        <div className="border-t-2 border-[#D5A547] pt-12 mb-20">
          <h2 className="text-xl md:text-2xl font-light text-[#09251F] mb-12 font-['Plus_Jakarta_Sans',sans-serif]">
            OYEN GROUP Global
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#09251F]">Headquarters</h3>
              <address className="not-italic text-sm text-[#59636D] leading-relaxed mb-4">
                Lagos, Nigeria<br />
                (Global Operations)
              </address>
              <a href="mailto:oyengroupp@gmail.com" className="text-sm font-medium text-[#D5A547] hover:underline block mb-2">
                oyengroupp@gmail.com
              </a>
              <a href="tel:+2348031637724" className="text-sm font-medium text-[#D5A547] hover:underline block mb-6">
                +234 803 163 7724
              </a>
              <p className="text-xs text-[#59636D] leading-relaxed">
                Primary contact for corporate affairs, general business inquiries, and executive correspondence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#09251F]">Investor Relations</h3>
              <p className="text-sm text-[#59636D] leading-relaxed mb-4">
                For financial analysts, institutional investors, and shareholder inquiries.
              </p>
              <Link href="/investment" className="text-sm font-medium text-[#D5A547] hover:underline flex items-center gap-2">
                Visit our Investment page
                <span>→</span>
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#09251F]">Media & Press</h3>
              <p className="text-sm text-[#59636D] leading-relaxed mb-4">
                For journalists, media professionals, and public relations matters.
              </p>
              <Link href="/news" className="text-sm font-medium text-[#D5A547] hover:underline flex items-center gap-2">
                Visit our Newsroom
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: For suppliers */}
        <div className="border-t border-[#09251F]/10 pt-12 mb-20">
          <h2 className="text-xl md:text-2xl font-light text-[#09251F] mb-12 font-['Plus_Jakarta_Sans',sans-serif]">
            For suppliers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#09251F]">Supplier Enquiries</h3>
              <p className="text-sm text-[#59636D] leading-relaxed mb-4">
                For existing and prospective suppliers looking to partner with OYEN GROUP across our technology and operational segments.
              </p>
              <a href="mailto:oyengroupp@gmail.com" className="text-sm font-medium text-[#D5A547] hover:underline block mb-4">
                oyengroupp@gmail.com
              </a>
              <Link href="/suppliers/become-a-supplier" className="text-sm font-medium text-[#D5A547] hover:underline flex items-center gap-2">
                Become a supplier
                <span>→</span>
              </Link>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#09251F]">Procurement Support</h3>
              <p className="text-sm text-[#59636D] leading-relaxed mb-4">
                Assistance with vendor registration, invoicing guidelines, and supply chain compliance.
              </p>
              <Link href="/suppliers/guidelines" className="text-sm font-medium text-[#D5A547] hover:underline flex items-center gap-2">
                View supplier guidelines
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 3: For business customers */}
        <div className="border-t border-[#09251F]/10 pt-12 mb-20">
          <h2 className="text-xl md:text-2xl font-light text-[#09251F] mb-12 font-['Plus_Jakarta_Sans',sans-serif]">
            For business customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#09251F]">Technology Solutions</h3>
              <p className="text-sm text-[#59636D] leading-relaxed mb-4">
                Enquiries regarding VERBA, OYEN GRID, ORIVEX, and bespoke enterprise software deployments.
              </p>
              <a href="mailto:oyengroupp@gmail.com" className="text-sm font-medium text-[#D5A547] hover:underline block mb-4">
                oyengroupp@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider text-[#09251F]">Strategic Partnerships</h3>
              <p className="text-sm text-[#59636D] leading-relaxed mb-4">
                Explore joint ventures, research collaborations, and industrial integration opportunities.
              </p>
              <Link href="/products/collaboration" className="text-sm font-medium text-[#D5A547] hover:underline flex items-center gap-2">
                Learn about collaborations
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
