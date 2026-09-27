import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

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
 <h3 className="text-base font-semibold uppercase tracking-widest text-brand-accent mb-4 border-l-2 border-brand-accent pl-4">Contact Information</h3>
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
 <h3 className="text-base font-semibold uppercase tracking-widest text-brand-accent mb-4 border-l-2 border-brand-accent pl-4">Headquarters</h3>
 <address className="not-italic text-lg text-brand-primary font-medium leading-relaxed">
 Lagos, Nigeria
 </address>
 </div>
 </div>

 <div className="lg:col-span-8">
 <ContactForm />
 </div>
 
 </div>
 </div>
 </main>
 );
}
