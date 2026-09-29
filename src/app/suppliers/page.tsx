import { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Suppliers | OYEN GROUP',
  description: 'Supplier information, guidelines, and application for OYEN GROUP.',
};

export default function SuppliersPage() {
  return (
    <main className="bg-white min-h-screen font-['Inter',sans-serif]">
      {/* 2. Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex flex-col justify-center items-center text-center px-6 pt-20">
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
          <CTAButton href="#become-a-supplier" text="Become a Supplier" theme="light" />
        </div>
      </section>

      {/* 3. Working With OYEN GROUP */}
      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
              Working With Us.
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-[#59636D] leading-relaxed">
              We believe strong supplier relationships contribute to the successful delivery of our products, research and operations. Partnering with OYEN GROUP means collaborating with an organization dedicated to operational excellence, ethical standards, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Supplier Categories */}
      <section className="bg-[#FAFAFA] py-24 md:py-32 px-6 lg:px-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
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
                <h4 className="text-lg md:text-xl font-bold text-[#111719] group-hover:text-[#09251F] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                  {category}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Supplier Guidelines */}
      <section id="guidelines" className="py-24 md:py-32 px-6 lg:px-12 max-w-4xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
            Supplier Guidelines
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

      {/* 6. Become a Supplier (Form) */}
      <section id="become-a-supplier" className="bg-[#09251F] py-24 md:py-32 px-6 lg:px-12 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
              Become a Supplier
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Register your interest by providing details about your organization. 
              Our procurement team will review your submission and contact you if there is a match with our current requirements.
            </p>
          </div>

          <form className="bg-white p-8 md:p-12 rounded shadow-2xl flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111719] uppercase tracking-wide">Company Name *</label>
                <input type="text" required className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#D5A547] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111719] uppercase tracking-wide">Contact Person *</label>
                <input type="text" required className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#D5A547] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111719] uppercase tracking-wide">Business Email *</label>
                <input type="email" required className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#D5A547] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111719] uppercase tracking-wide">Phone Number *</label>
                <input type="tel" required className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#D5A547] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111719] uppercase tracking-wide">Country *</label>
                <input type="text" required className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#D5A547] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#111719] uppercase tracking-wide">Service Category *</label>
                <select required className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#D5A547] transition-colors bg-white">
                  <option value="">Select a category</option>
                  <option value="software">Software & IT Infrastructure</option>
                  <option value="engineering">Engineering & Technical Services</option>
                  <option value="research">Research & Laboratory Equipment</option>
                  <option value="training">Training & Educational Resources</option>
                  <option value="professional">Professional & Business Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#111719] uppercase tracking-wide">Company Website (Optional)</label>
              <input type="url" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#D5A547] transition-colors" placeholder="https://" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#111719] uppercase tracking-wide">Brief Company Description *</label>
              <textarea required rows={4} className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#D5A547] transition-colors resize-y"></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#111719] uppercase tracking-wide">Company Profile Upload (PDF, Optional)</label>
              <input type="file" accept=".pdf" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#D5A547] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#09251F] file:text-white hover:file:bg-[#111719] cursor-pointer" />
            </div>

            <div className="bg-gray-50 p-4 border border-gray-200 text-sm text-[#59636D] rounded my-4">
              <p className="mb-2"><strong>Privacy Notice:</strong> The information provided in this form will be used solely for the purpose of evaluating potential supplier relationships. It will be stored securely and not shared with third parties.</p>
              <p><em>Note: Submission of this form does not guarantee supplier registration, approval, or future business with OYEN GROUP.</em></p>
            </div>

            <button type="submit" className="bg-[#D5A547] text-[#09251F] font-bold uppercase tracking-widest py-4 px-8 rounded hover:bg-[#c4963e] transition-colors w-full md:w-auto self-start">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* 7. Supplier Enquiries */}
      <section id="enquiries" className="py-24 md:py-32 px-6 lg:px-12 max-w-4xl mx-auto text-center scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
          Interested in Working With Us?
        </h2>
        <p className="text-lg text-[#59636D] leading-relaxed mb-10 max-w-2xl mx-auto">
          We welcome enquiries from organisations interested in supporting our technology, research and business operations.
        </p>
        <div className="flex justify-center">
          <CTAButton href="/contact" text="Contact Our Team" theme="dark" />
        </div>
      </section>

    </main>
  );
}
