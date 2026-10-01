'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function InvestorEnquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', investmentRange: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/invest/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 py-4">
        <div className="w-12 h-12 rounded-full bg-[#09251F] flex items-center justify-center mb-2">
          <svg className="w-6 h-6 text-[#D5A547]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif]">Thank you, {form.name}.</h3>
        <p className="text-[#59636D] leading-relaxed">
          We have received your enquiry. A member of the OYEN team will be in touch shortly to arrange a conversation.
        </p>
        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
          A confirmation has been sent to <strong>{form.email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold tracking-widest uppercase text-[#59636D]">Name</label>
          <input
            type="text" name="name" required
            value={form.name} onChange={handleChange}
            className="border-b border-gray-300 py-3 focus:outline-none focus:border-[#D5A547] bg-transparent text-[#111719]"
            placeholder="Your full name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold tracking-widest uppercase text-[#59636D]">Email</label>
          <input
            type="email" name="email" required
            value={form.email} onChange={handleChange}
            className="border-b border-gray-300 py-3 focus:outline-none focus:border-[#D5A547] bg-transparent text-[#111719]"
            placeholder="Your business email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold tracking-widest uppercase text-[#59636D]">Phone / WhatsApp</label>
          <input
            type="tel" name="phone"
            value={form.phone} onChange={handleChange}
            className="border-b border-gray-300 py-3 focus:outline-none focus:border-[#D5A547] bg-transparent text-[#111719]"
            placeholder="With country code"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold tracking-widest uppercase text-[#59636D]">Investment Range</label>
          <select
            name="investmentRange" required
            value={form.investmentRange} onChange={handleChange}
            className="border-b border-gray-300 py-3 focus:outline-none focus:border-[#D5A547] bg-transparent text-[#111719] appearance-none"
          >
            <option value="" disabled>Select an option</option>
            <option value="₦500K – ₦999K">₦500K – ₦999K</option>
            <option value="₦1M – ₦1.99M">₦1M – ₦1.99M</option>
            <option value="₦2M – ₦4.24M">₦2M – ₦4.24M</option>
            <option value="₦4.25M – ₦8.49M">₦4.25M – ₦8.49M</option>
            <option value="₦8.5M+">₦8.5M+</option>
            <option value="I'd like to discuss first">I'd like to discuss first</option>
          </select>
        </div>
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <p className="text-[11px] text-gray-400 leading-relaxed">
        This information is provided for discussion purposes. Prospective investors should review all formal materials and obtain independent professional advice where appropriate.
      </p>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full md:w-auto self-start bg-[#09251F] text-white hover:bg-[#D5A547] hover:text-[#111719] px-10 py-4 font-bold tracking-widest uppercase text-sm transition-colors duration-300 rounded-sm shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Speak With OYEN →'}
      </button>
    </form>
  );
}

export default function HowToInvestPage() {
  return (
    <main className="bg-white min-h-screen pt-28 pb-0 font-['Inter',sans-serif]">

      {/* ─── 01 HERO ─── */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-16">
        <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden rounded-[24px] shadow-2xl">
          <Image quality={100} src="/images/partnership.jpg" alt="How to Invest in OYEN GROUP" fill className="object-cover object-center" priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09251F]/95 via-[#09251F]/65 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
            <div className="flex items-center gap-2 text-xs font-medium text-white/70 uppercase tracking-widest font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/invest" className="hover:text-white transition-colors">Investment</Link>
              <span>›</span>
              <span className="text-white font-bold">How to Invest</span>
            </div>
            <p className="text-[#D5A547] text-sm font-bold tracking-widest uppercase mb-3 font-['Plus_Jakarta_Sans',sans-serif]">The Process</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-[1.1] mb-4 max-w-3xl">
              A Clear Path to Becoming an OYEN Investor.
            </h1>
            <p className="text-xl text-white/90 font-light max-w-xl leading-relaxed">
              From initial interest to completed investment — four clear stages.
            </p>
          </div>
        </div>
      </div>

      {/* ─── 02 OPPORTUNITY STRIP + TWO-COLUMN TEXT ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-20">
        <div className="inline-flex flex-wrap items-center gap-3 text-xs md:text-sm font-bold tracking-widest uppercase text-[#59636D] bg-[#F8FAFC] border border-gray-200 py-3 px-6 rounded-full shadow-sm mb-12">
          <span className="text-[#09251F]">Current Opportunity</span>
          <span className="text-gray-300">|</span>
          <span>Starting participation ₦500K</span>
          <span className="text-gray-300">|</span>
          <span>Current raise ₦8.5M</span>
          <span className="text-gray-300">|</span>
          <span>Equity offered 10%</span>
          <Link href="/invest/opportunity" className="ml-2 text-[#007079] hover:text-[#D5A547] transition-colors flex items-center">
            View Opportunity <span className="ml-1">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 text-[#59636D] text-[15px] leading-relaxed">
          <div className="space-y-5">
            <p>OYEN GROUP is currently raising ₦8.5 million for a 10% equity stake. The investment process is straightforward and begins with a conversation — not a form.</p>
            <p>Our aim is to work with investors who understand what we are building and want to participate in the development journey, not simply transact at arm's length.</p>
          </div>
          <div className="space-y-5">
            <p>Prospective investors are encouraged to review all formal opportunity materials and obtain independent professional advice where appropriate before participating.</p>
            <p>All formal documentation, including the equity structure, participation terms and risk considerations, is provided following an initial discussion with the OYEN team.</p>
          </div>
        </div>
      </section>

      {/* ─── 03 THE FOUR STEPS ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-24">
        <h2 className="text-2xl font-bold text-[#111719] mb-10 font-['Plus_Jakarta_Sans',sans-serif]">The Investment Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: '01', img: '/images/hero-slide2.jpg', title: 'Express Interest', desc: 'Tell us the level of participation you\'re considering. Complete a brief enquiry or reach out directly.' },
            { id: '02', img: '/images/partnership.jpg', title: 'Investor Discussion', desc: 'Meet with OYEN to discuss the opportunity, the products and the terms of the current round.' },
            { id: '03', img: '/images/hero-slide3.png', title: 'Review & Documentation', desc: 'Review the full investment materials and complete required documentation in accordance with agreed terms.' },
            { id: '04', img: '/images/hero-slide4.jpg', title: 'Complete Investment', desc: 'Execute agreed documents through the designated OYEN company channel to formalise your participation.' },
          ].map((step, idx) => (
            <div key={idx} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative w-full h-[180px] overflow-hidden">
                <Image src={step.img} alt={step.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#09251F] flex items-center justify-center">
                  <span className="text-white text-sm font-bold font-['Plus_Jakarta_Sans',sans-serif]">{step.id}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#111719] mb-2 font-['Plus_Jakarta_Sans',sans-serif]">{step.title}</h3>
                <p className="text-[#59636D] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 04 AFTER INVESTMENT ─── */}
      <section className="bg-[#09251F] py-24 mb-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-[45%] relative h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-xl">
              <Image src="/images/tech.jpg" alt="After Investment" fill className="object-cover" unoptimized />
            </div>
            <div className="w-full lg:w-[55%]">
              <h4 className="text-[#D5A547] font-bold tracking-widest text-sm uppercase mb-4 font-['Plus_Jakarta_Sans',sans-serif]">After Investment</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight leading-tight">
                Your Investment. Our Execution. Shared Progress.
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-white tracking-widest uppercase mb-12 border border-white/20 py-4 px-8 rounded-full bg-white/5 w-fit">
                <span>Capital Deployed</span><span className="text-[#D5A547]">→</span>
                <span>Product Completion</span><span className="text-[#D5A547]">→</span>
                <span>Pilot & Validation</span><span className="text-[#D5A547]">→</span>
                <span>Market Entry</span><span className="text-[#D5A547]">→</span>
                <span>Growth</span>
              </div>
              <h4 className="text-[#D5A547] font-bold tracking-widest text-xs uppercase mb-6 font-['Plus_Jakarta_Sans',sans-serif]">What investors can expect</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Company Updates', desc: 'Progress across the business and products.' },
                  { title: 'Milestone Communication', desc: 'Updates around key development milestones.' },
                  { title: 'Major Developments', desc: 'Significant partnerships, launches and business developments.' },
                  { title: 'Shareholder Information', desc: 'Information provided in accordance with agreed investor terms.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-[#D5A547]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D5A547]"></div>
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm mb-0.5">{item.title}</p>
                      <p className="text-white/60 text-xs font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 05 ENQUIRY FORM (half-photo, half-form) ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <div className="relative w-full md:w-[45%] h-[300px] md:h-auto">
            <Image src="/images/hero-slide1.jpg" alt="Start the conversation" fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-[#09251F]/50" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                Ready to start the conversation?
              </h3>
            </div>
          </div>
          <div className="w-full md:w-[55%] bg-white p-10 lg:p-12 flex flex-col justify-center">
            <InvestorEnquiryForm />
          </div>
        </div>
      </section>

      {/* ─── 06 DARK CLOSING SECTION ─── */}
      <section className="relative w-full h-[400px] md:h-[480px] flex items-center justify-start overflow-hidden">
        <Image src="/images/energy.jpg" alt="Capital is only the beginning" fill className="object-cover object-center" unoptimized />
        <div className="absolute inset-0 bg-[#09251F]/85" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans',sans-serif] tracking-tight max-w-3xl leading-tight">
            Capital is only the beginning.
          </h2>
          <p className="text-white/80 text-xl font-light max-w-xl mb-10">
            Execution creates value. Join us as we build practical technology for Africa and beyond.
          </p>
          <Link href="/invest/opportunity" className="inline-flex items-center text-[#09251F] bg-[#D5A547] hover:bg-white px-8 py-4 font-bold tracking-widest uppercase text-sm transition-colors duration-300 rounded-sm">
            View the Opportunity →
          </Link>
        </div>
      </section>

    </main>
  );
}
