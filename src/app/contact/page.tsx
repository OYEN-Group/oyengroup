import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | OYEN GROUP',
  description: 'Get in touch with OYEN GROUP for partnerships, investments, and inquiries.',
};

export default function ContactPage() {
  return (
    <main className="bg-brand-offwhite pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg text-brand-muted leading-relaxed max-w-2xl">
            We welcome inquiries from investors, strategic partners, and media. Please reach out to us using the contact details or form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4 border-l-2 border-brand-accent pl-4">Contact Information</h3>
              <ul className="space-y-4 text-brand-primary">
                <li>
                  <a href="mailto:oyengroupp@gmail.com" className="text-lg hover:text-brand-accent transition-colors font-medium">
                    oyengroupp@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+2348031637724" className="text-lg hover:text-brand-accent transition-colors font-medium">
                    +234 803 163 7724
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-accent mb-4 border-l-2 border-brand-accent pl-4">Headquarters</h3>
              <address className="not-italic text-lg text-brand-primary font-medium leading-relaxed">
                Lagos, Nigeria
              </address>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-brand-primary/5">
              <h2 className="text-2xl font-bold text-brand-primary mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-brand-primary mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-brand-primary mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-primary mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-brand-primary mb-2">Company / Organization</label>
                    <input type="text" id="company" className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-brand-primary mb-2">Inquiry Type</label>
                  <select id="inquiryType" className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all appearance-none">
                    <option value="">Select an option</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-brand-primary mb-2">Message</label>
                  <textarea id="message" rows={6} className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all resize-none"></textarea>
                </div>
                
                <div>
                  <button type="button" className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-4 px-8 rounded-sm transition-colors duration-300 w-full md:w-auto">
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
