import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Become a Supplier | OYEN GROUP',
  description: 'Register your interest to become a supplier for OYEN GROUP.',
};

export default function BecomeSupplierPage() {
  return (
    <main className="bg-white min-h-screen font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col justify-center items-center text-center px-6 pt-20">
        <Image 
          src="/images/partnership.jpg" 
          alt="Become a Supplier" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
            Become a Supplier
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-medium">
            Join our network of trusted service providers and partners.
          </p>
        </div>
      </section>

      {/* Become a Supplier (Form) */}
      <section className="bg-[#09251F] py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight mb-6">
              Register Your Interest
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Provide details about your organization. 
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

    </main>
  );
}
