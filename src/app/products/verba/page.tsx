import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'VERBA | Academic Research & Writing Workspace',
  description: 'Verba helps you write, research, cite, and verify evidence in one intelligent academic workspace.',
};

export default function VerbaPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-0 font-['Inter',sans-serif]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-32 md:pt-48 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto text-center flex flex-col items-center">
        <div className="mb-6 flex items-center justify-center text-sm text-[#59636D]">
          <Link href="/" className="hover:text-[#D5A547] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-[#D5A547] transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-[#09251F] font-bold tracking-widest uppercase text-xs">Verba</span>
        </div>

        <h1 className="text-[#09251F] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-8">
          VERBA
        </h1>
        
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#111719] mb-8 leading-[1.1] font-['Plus_Jakarta_Sans',sans-serif] tracking-tight max-w-4xl">
          Write with confidence.<br className="hidden md:block"/> Research with evidence.
        </h2>
        
        <p className="text-lg md:text-2xl text-[#59636D] max-w-3xl leading-relaxed mb-12">
          An intelligent academic workspace for writing, discovering credible sources, verifying citations and keeping track of how your work develops.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="#" className="bg-[#09251F] text-white px-8 py-4 rounded font-bold hover:bg-[#111719] transition-colors w-full sm:w-auto text-center">
            Start Writing &rarr;
          </Link>
          <Link href="#" className="text-[#09251F] font-bold border-b border-[#09251F] pb-1 hover:text-[#D5A547] hover:border-[#D5A547] transition-colors">
            Explore Verba &rarr;
          </Link>
        </div>
      </section>

      {/* 2. BIG TEXT SECTION: THE WORKFLOW */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
            From First Idea to Final Submission.
          </h3>
          <p className="text-[#D5A547] font-bold tracking-[0.15em] md:tracking-[0.2em] text-sm md:text-lg mb-8 uppercase">
            Write &rarr; Research &rarr; Cite &rarr; Verify &rarr; Develop
          </p>
          <p className="text-xl md:text-2xl text-[#59636D] font-medium">
            A single workspace for the academic process.
          </p>
        </div>
      </section>

      {/* 3. FEATURES LISTING */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto flex flex-col gap-32">
        
        {/* 01 - WRITE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col order-2 lg:order-1">
            <span className="text-[#D5A547] font-bold tracking-widest text-sm mb-4">01 &mdash; WRITE</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              Turn your ideas into clear academic work.
            </h3>
            <p className="text-lg text-[#59636D] leading-relaxed">
              Write and refine assignments, research papers, dissertations and other academic documents while keeping your own reasoning and voice at the centre.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden order-1 lg:order-2 border border-gray-200 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              [ Academic Writing Interface Placeholder ]
            </div>
            {/* Real image to be placed here later */}
          </div>
        </div>

        {/* 02 - RESEARCH */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              [ Source Discovery Placeholder ]
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[#D5A547] font-bold tracking-widest text-sm mb-4">02 &mdash; RESEARCH</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              Find sources you can actually use.
            </h3>
            <p className="text-lg text-[#59636D] leading-relaxed">
              Search for credible academic sources and bring relevant evidence into your work instead of relying on unsupported or invented references.
            </p>
          </div>
        </div>

        {/* 03 - CITE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col order-2 lg:order-1">
            <span className="text-[#D5A547] font-bold tracking-widest text-sm mb-4">03 &mdash; CITE</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              Make every citation count.
            </h3>
            <p className="text-lg text-[#59636D] leading-relaxed">
              Verba helps you create and manage citations while checking the relationship between your claims and the sources behind them. A citation shouldn't just exist; it should support the claim you're making.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden order-1 lg:order-2 border border-gray-200 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              [ Citation Management Placeholder ]
            </div>
          </div>
        </div>

        {/* 04 - VERIFY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative w-full aspect-[4/3] bg-[#09251F] text-white rounded-2xl overflow-hidden shadow-lg p-12 flex flex-col justify-center items-center">
            {/* Visual representation of Claim -> Citation -> Source -> Evidence */}
            <div className="flex flex-col gap-6 w-full max-w-sm">
              <div className="bg-white/10 p-4 rounded text-center font-medium">Claim</div>
              <div className="text-center text-[#D5A547]">&darr;</div>
              <div className="bg-white/10 p-4 rounded text-center font-medium">Citation</div>
              <div className="text-center text-[#D5A547]">&darr;</div>
              <div className="bg-white/10 p-4 rounded text-center font-medium">Source</div>
              <div className="text-center text-[#D5A547]">&darr;</div>
              <div className="bg-[#D5A547] text-[#09251F] p-4 rounded text-center font-bold">Evidence</div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[#D5A547] font-bold tracking-widest text-sm mb-4">04 &mdash; VERIFY</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              Don't just cite it. Check it.
            </h3>
            <p className="text-lg text-[#59636D] leading-relaxed">
              Review whether the source actually supports the statement you're attaching it to. Verba ensures your evidence directly correlates with your written claims.
            </p>
          </div>
        </div>

        {/* 05 - SHOW YOUR WORK */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col order-2 lg:order-1">
            <span className="text-[#D5A547] font-bold tracking-widest text-sm mb-4">05 &mdash; SHOW YOUR WORK</span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#111719] font-['Plus_Jakarta_Sans',sans-serif] mb-6">
              Keep the story behind the document.
            </h3>
            <p className="text-lg text-[#59636D] leading-relaxed">
              Verba can preserve drafts, revisions, sources and recorded AI assistance so users have a clearer account of how their work developed. Transparent authorship is built-in.
            </p>
          </div>
          <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden order-1 lg:order-2 border border-gray-200 shadow-sm">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              [ Version History & Authorship Placeholder ]
            </div>
          </div>
        </div>

      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-[#09251F] py-24 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-['Plus_Jakarta_Sans',sans-serif] mb-8">
          Elevate your academic workflow.
        </h2>
        <Link href="#" className="inline-block bg-[#D5A547] text-[#09251F] px-10 py-4 rounded font-bold hover:bg-white transition-colors">
          Join Verba
        </Link>
      </section>

    </div>
  );
}
