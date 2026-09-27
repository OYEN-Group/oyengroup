'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F7F6] pt-12 pb-6 px-6 lg:px-12 font-['Inter',sans-serif]">
      <div className="container mx-auto max-w-7xl">
        
        {/* SECTION 1: Featured CTA Panel */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 lg:p-16 mb-20 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-[#E5E9E7]">
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <span className="text-[#D5A547] text-sm font-bold uppercase tracking-widest mb-4">
              LET'S WORK TOGETHER
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#102B24] mb-6 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Have an idea worth building?
            </h2>
            <p className="text-[#59636D] text-lg mb-10 leading-relaxed max-w-lg">
              Partner with OYEN GROUP to research, develop and bring practical technology solutions to life.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#102B24] hover:bg-[#D5A547] text-white hover:text-[#102B24] px-8 py-4 rounded-full font-bold transition-all duration-300 uppercase tracking-widest text-sm shadow-lg hover:shadow-xl"
            >
              PARTNER WITH US <span className="text-lg leading-none">↗</span>
            </Link>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end w-full">
            {/* Custom SVG Graphic (Minimalist Orbital Network) */}
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] flex items-center justify-center">
              {/* Concentric rings */}
              <div className="absolute inset-0 border-[1.5px] border-[#E5E9E7] rounded-full animate-[spin_60s_linear_infinite]">
                {/* Orbiting Node 1 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#D5A547] rounded-full shadow-sm" />
              </div>
              <div className="absolute inset-8 border-[1.5px] border-[#E5E9E7]/60 rounded-full animate-[spin_40s_linear_infinite_reverse]">
                {/* Orbiting Node 2 */}
                <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#102B24] rounded-full shadow-sm" />
              </div>
              <div className="absolute inset-16 border-[1.5px] border-[#E5E9E7]/40 rounded-full animate-[spin_25s_linear_infinite]">
                {/* Orbiting Node 3 */}
                <div className="absolute top-1/3 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#D5A547] rounded-full shadow-sm" />
              </div>
              
              {/* Central Node / Logo */}
              <div className="absolute w-28 h-28 bg-white border border-[#E5E9E7] rounded-full flex items-center justify-center shadow-lg z-10">
                <div className="w-16 h-8 relative">
                  <Image quality={100} src="/images/logo_transparent.png" alt="OYEN" fill className="object-contain" unoptimized={true} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 text-[#59636D]">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="relative w-[150px] h-[40px] mb-6">
              <Image quality={100} src="/images/logo_transparent.png" alt="OYEN GROUP" fill className="object-contain object-left" unoptimized={true} />
            </div>
            <p className="text-[13px] font-semibold tracking-widest uppercase mb-2">
              People · Ideas · Technology · Real Impact
            </p>
            <p className="text-[#102B24] font-bold text-lg font-['Plus_Jakarta_Sans',sans-serif]">
              Research. Build. Solve. Scale.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col lg:pl-8">
            <h4 className="text-[#102B24] font-bold mb-6 text-lg font-['Plus_Jakarta_Sans',sans-serif]">Company</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><Link href="/about" className="hover:text-[#D5A547] transition-colors">About Us</Link></li>
              <li><Link href="/#approach" className="hover:text-[#D5A547] transition-colors">Our Approach</Link></li>
              <li><Link href="/about/leadership" className="hover:text-[#D5A547] transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col">
            <h4 className="text-[#102B24] font-bold mb-6 text-lg font-['Plus_Jakarta_Sans',sans-serif]">Products</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><Link href="/products/oyen-grid" className="hover:text-[#D5A547] transition-colors group flex items-center gap-1">OYEN GRID <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D5A547]">↗</span></Link></li>
              <li><Link href="/products" className="hover:text-[#D5A547] transition-colors group flex items-center gap-1">VERBA <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D5A547]">↗</span></Link></li>
              <li><Link href="/products" className="hover:text-[#D5A547] transition-colors group flex items-center gap-1">ORIVEX <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#D5A547]">↗</span></Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col">
            <h4 className="text-[#102B24] font-bold mb-6 text-lg font-['Plus_Jakarta_Sans',sans-serif]">Connect</h4>
            <ul className="space-y-4 text-[15px] font-medium">
              <li><Link href="/contact" className="hover:text-[#D5A547] transition-colors">Contact Us</Link></li>
              <li><Link href="/investment" className="hover:text-[#D5A547] transition-colors">Investment</Link></li>
              <li><Link href="/contact" className="hover:text-[#D5A547] transition-colors">Partnerships</Link></li>
            </ul>
          </div>

        </div>

        {/* SECTION 3: Bottom Bar */}
        <div className="border-t border-[#E5E9E7] pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-[14px] font-medium text-[#59636D]">
          <div>© {currentYear} OYEN GROUP LTD. All rights reserved.</div>
          
          <div className="text-[#102B24] font-bold tracking-widest uppercase">
            Africa and Beyond.
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#102B24] transition-colors">Privacy Policy</Link>
            <span className="text-[#E5E9E7]">|</span>
            <Link href="/terms" className="hover:text-[#102B24] transition-colors">Terms of Service</Link>
            <span className="text-[#E5E9E7]">|</span>
            <button onClick={scrollToTop} className="hover:text-[#102B24] transition-colors focus:outline-none flex items-center gap-1">
              Back to Top <span>↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}