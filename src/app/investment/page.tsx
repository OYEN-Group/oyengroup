import { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Investment | OYEN GROUP',
 description: 'Investment opportunity and indicative equity participation at OYEN GROUP.',
};

export default function InvestmentPage() {
 const equityTiers = [
 { investment: '₦100,000', equity: '0.12%' },
 { investment: '₦500,000', equity: '0.59%' },
 { investment: '₦1,000,000', equity: '1.18%' },
 { investment: '₦2,000,000', equity: '2.35%' },
 { investment: '₦4,250,000', equity: '5.00%' },
 { investment: '₦8,500,000', equity: '10.00%' },
 ];

 return (
 <main className="bg-brand-offwhite pt-32 pb-24 min-h-screen">
 <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
 
 <div className="mb-16">
 <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 tracking-tight">
 Investment Opportunity
 </h1>
 <p className="text-lg text-brand-muted leading-relaxed">
 OYEN GROUP is raising capital to scale operations, expand our infrastructure network, and build sustainable value across our core business divisions.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
 <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-primary/5">
 <h3 className="text-base font-semibold uppercase tracking-widest text-brand-muted mb-2">Funding Target</h3>
 <p className="text-3xl font-bold text-brand-primary">₦8.5 million</p>
 </div>
 
 <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-primary/5">
 <h3 className="text-base font-semibold uppercase tracking-widest text-brand-muted mb-2">Equity Offered</h3>
 <p className="text-3xl font-bold text-brand-primary">10%</p>
 </div>

 <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-primary/5">
 <h3 className="text-base font-semibold uppercase tracking-widest text-brand-muted mb-2">Pre-money Valuation</h3>
 <p className="text-2xl font-bold text-brand-primary">₦76.5 million</p>
 </div>
 
 <div className="bg-white p-8 rounded-sm shadow-sm border border-brand-primary/5">
 <h3 className="text-base font-semibold uppercase tracking-widest text-brand-muted mb-2">Post-money Valuation</h3>
 <p className="text-2xl font-bold text-brand-primary">₦85 million</p>
 </div>
 </div>

 <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-brand-primary/5">
 <h2 className="text-2xl font-bold text-brand-primary mb-8 border-l-4 border-brand-accent pl-4">
 Indicative Equity Participation
 </h2>
 
 <div className="overflow-x-auto mb-8">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b-2 border-brand-primary/10">
 <th className="py-4 px-4 font-semibold text-brand-primary uppercase text-base tracking-wider">Investment</th>
 <th className="py-4 px-4 font-semibold text-brand-primary uppercase text-base tracking-wider">Indicative Equity</th>
 </tr>
 </thead>
 <tbody>
 {equityTiers.map((tier, index) => (
 <tr key={index} className="border-b border-brand-primary/5 hover:bg-brand-offwhite/50 transition-colors">
 <td className="py-4 px-4 text-brand-primary font-medium">{tier.investment}</td>
 <td className="py-4 px-4 text-brand-muted font-medium">{tier.equity}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 
 <div className="bg-brand-offwhite p-6 rounded-sm text-base text-brand-muted leading-relaxed">
 <p className="mb-4">
 <strong>Minimum indicative investment:</strong> ₦100,000
 </p>
 <p className="mb-2 text-base">
 <strong>Disclaimer:</strong> The figures above are based on the proposed funding round and are subject to final investment documentation and applicable regulatory requirements.
 </p>
 <p className="text-base">
 This indicative equity allocation does not constitute a guarantee of financial returns. Investments carry inherent risks, and past performance or projected valuations are not indicative of future results. OYEN GROUP does not promise or guarantee any investment returns.
 </p>
 </div>
 </div>
 
 </div>
 </main>
 );
}
