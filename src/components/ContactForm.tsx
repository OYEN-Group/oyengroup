'use client';

import { useState } from 'react';

export default function ContactForm() {
 const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
 
 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 setStatus('submitting');
 // Simulate network request
 setTimeout(() => {
 setStatus('success');
 }, 1500);
 };

 if (status === 'success') {
 return (
 <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-brand-primary/5 text-center">
 <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#d4af37]">
 <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
 </svg>
 </div>
 <h2 className="text-2xl font-bold text-brand-primary mb-4">Message Sent Successfully</h2>
 <p className="text-brand-muted leading-relaxed mb-8 max-w-md mx-auto">
 Thank you for reaching out to OYEN GROUP. A member of our team will review your inquiry and get back to you shortly.
 </p>
 <button 
 onClick={() => setStatus('idle')}
 className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-3 px-8 rounded-sm transition-colors duration-300"
 >
 Send Another Message
 </button>
 </div>
 );
 }

 return (
 <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-brand-primary/5">
 <h2 className="text-2xl font-bold text-brand-primary mb-8">Send a Message</h2>
 <form onSubmit={handleSubmit} className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label htmlFor="firstName" className="block text-base font-semibold text-brand-primary mb-2">First Name <span className="text-red-500">*</span></label>
 <input type="text" id="firstName" required className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all" />
 </div>
 <div>
 <label htmlFor="lastName" className="block text-base font-semibold text-brand-primary mb-2">Last Name <span className="text-red-500">*</span></label>
 <input type="text" id="lastName" required className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all" />
 </div>
 </div>
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label htmlFor="email" className="block text-base font-semibold text-brand-primary mb-2">Email Address <span className="text-red-500">*</span></label>
 <input type="email" id="email" required className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all" />
 </div>
 <div>
 <label htmlFor="company" className="block text-base font-semibold text-brand-primary mb-2">Company / Organization</label>
 <input type="text" id="company" className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all" />
 </div>
 </div>

 <div>
 <label htmlFor="inquiryType" className="block text-base font-semibold text-brand-primary mb-2">Inquiry Type <span className="text-red-500">*</span></label>
 <select id="inquiryType" required className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all appearance-none">
 <option value="">Select an option</option>
 <option value="investment">Investment Opportunity</option>
 <option value="partnership">Strategic Partnership</option>
 <option value="media">Media / Press</option>
 <option value="other">Other</option>
 </select>
 </div>
 
 <div>
 <label htmlFor="message" className="block text-base font-semibold text-brand-primary mb-2">Message <span className="text-red-500">*</span></label>
 <textarea id="message" rows={6} required className="w-full bg-brand-offwhite border border-transparent focus:border-brand-accent focus:ring-1 focus:ring-brand-accent rounded-sm px-4 py-3 outline-none transition-all resize-none"></textarea>
 </div>
 
 <div>
 <button 
 type="submit" 
 disabled={status === 'submitting'}
 className="bg-brand-primary hover:bg-brand-secondary disabled:bg-brand-primary/70 text-white font-semibold py-4 px-8 rounded-sm transition-colors duration-300 w-full md:w-auto flex items-center justify-center gap-2"
 >
 {status === 'submitting' ? (
 <>
 <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
 </svg>
 Sending...
 </>
 ) : (
 'Submit Message'
 )}
 </button>
 </div>
 </form>
 </div>
 );
}
