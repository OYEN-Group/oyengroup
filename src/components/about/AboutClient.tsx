'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutClient() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. ABOUT OYEN */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 lg:px-12 container mx-auto max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-4xl mb-16"
        >
          <motion.h4 variants={fadeUp} className="text-[#D5A547] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6 font-['Inter',sans-serif]">
            About OYEN
          </motion.h4>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-[72px] font-bold text-[#111719] leading-tight tracking-tight font-['Plus_Jakarta_Sans',sans-serif] mb-8">
            Building Ideas Into <br className="hidden md:block"/> Real-World Solutions.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-[#59636D] leading-relaxed font-['Inter',sans-serif]">
            OYEN GROUP is a technology and research company developing practical solutions across education, academic research and industrial operations.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative w-full aspect-[21/9] md:aspect-[2.5/1] overflow-hidden rounded-md"
        >
          <Image src="/images/hero-slide1.jpg" alt="Building Ideas" fill className="object-cover" />
        </motion.div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-20 md:py-32 bg-[#FAFAFA] border-t border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20"
          >
            <motion.div variants={fadeUp} className="flex flex-col">
              <h3 className="text-[#111719] text-sm font-bold uppercase tracking-[0.15em] mb-6 font-['Inter',sans-serif] pb-4 border-b border-gray-200">
                Our Identity
              </h3>
              <p className="text-lg text-[#59636D] leading-relaxed font-['Inter',sans-serif]">
                A technology and research company focused on practical innovation.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col">
              <h3 className="text-[#111719] text-sm font-bold uppercase tracking-[0.15em] mb-6 font-['Inter',sans-serif] pb-4 border-b border-gray-200">
                What We Do
              </h3>
              <p className="text-lg text-[#59636D] leading-relaxed font-['Inter',sans-serif]">
                Research, develop and deploy solutions that address real operational challenges.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col">
              <h3 className="text-[#111719] text-sm font-bold uppercase tracking-[0.15em] mb-6 font-['Inter',sans-serif] pb-4 border-b border-gray-200">
                Our Direction
              </h3>
              <p className="text-lg text-[#59636D] leading-relaxed font-['Inter',sans-serif]">
                Building capabilities and creating opportunities through technology and innovation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. OYEN AT A GLANCE */}
      <section className="py-20 md:py-32 px-6 lg:px-12 container mx-auto max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#111719] mb-16 tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            OYEN at a Glance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {[
              { title: "Technology", desc: "Software Development" },
              { title: "Research", desc: "Applied Innovation" },
              { title: "Education", desc: "Learning Solutions" },
              { title: "Industry", desc: "Operational Intelligence" },
              { title: "3", desc: "Product Initiatives" },
              { title: "Nigeria", desc: "Our Base" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col relative pl-6 border-l-2 border-[#D5A547]/30 hover:border-[#D5A547] transition-colors duration-500">
                <span className="text-[#111719] text-2xl md:text-3xl font-bold mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                  {item.title}
                </span>
                <span className="text-[#59636D] text-lg font-medium font-['Inter',sans-serif]">
                  {item.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. OUR PERSPECTIVE */}
      <section className="py-20 md:py-32 bg-[#09251F] text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24"
          >
            <motion.div variants={fadeUp}>
              <h4 className="text-[#D5A547] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6 font-['Inter',sans-serif]">
                Our Perspective
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Technology should solve real problems.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-6 text-lg md:text-xl text-white/80 font-['Inter',sans-serif] leading-relaxed pt-2">
              <p>
                We believe innovation becomes meaningful when it improves how people learn, work and operate.
              </p>
              <p>
                Our approach brings together research, technology development and practical implementation to create solutions designed for real-world use.
              </p>
              <p>
                From learning environments to industrial operations, we focus on developing technology with a clear purpose.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/10"
          >
            <motion.div variants={fadeUp} className="flex flex-col">
              <h3 className="text-[#D5A547] text-xs font-bold uppercase tracking-[0.15em] mb-4 font-['Inter',sans-serif]">
                Vision
              </h3>
              <p className="text-lg text-white font-medium font-['Plus_Jakarta_Sans',sans-serif]">
                A more capable Africa powered by technology, talent and innovation.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col">
              <h3 className="text-[#D5A547] text-xs font-bold uppercase tracking-[0.15em] mb-4 font-['Inter',sans-serif]">
                Mission
              </h3>
              <p className="text-base text-white/80 font-['Inter',sans-serif]">
                To research, build and deploy practical solutions that solve real problems and create lasting value for industries and communities.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col">
              <h3 className="text-[#D5A547] text-xs font-bold uppercase tracking-[0.15em] mb-4 font-['Inter',sans-serif]">
                Values
              </h3>
              <ul className="text-base text-white/80 space-y-2 font-['Inter',sans-serif]">
                <li>People first.</li>
                <li>Integrity.</li>
                <li>Practical innovation.</li>
                <li>Excellence.</li>
                <li>Long-term impact.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. WHAT WE ARE BUILDING */}
      <section className="py-20 md:py-32 px-6 lg:px-12 container mx-auto max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-16 md:mb-24"
        >
          <motion.h4 variants={fadeUp} className="text-[#D5A547] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 font-['Inter',sans-serif]">
            Our Products
          </motion.h4>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#111719] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            What We Are Building.
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              name: "OYEN GRID",
              desc: "Training and Programme Management.",
              details: "Structured programme coordination, participant management and learning administration.",
              img: "/images/oyen_grid.jpg",
              link: "/products/oyen-grid"
            },
            {
              name: "VERBA",
              desc: "AI-Powered Academic Research & Writing.",
              details: "Technology supporting academic research and writing workflows.",
              img: "/images/verba.jpg",
              link: "/products"
            },
            {
              name: "ORIVEX",
              desc: "Petroleum Depot Operational Intelligence.",
              details: "An operational intelligence concept connecting depot information and decision support.",
              img: "/images/energy.jpg",
              link: "/products"
            }
          ].map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              className="flex flex-col group"
            >
              <Link href={product.link} className="block w-full aspect-[4/3] relative overflow-hidden rounded-md mb-6 bg-gray-100">
                <Image src={product.img} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </Link>
              <h3 className="text-[#111719] text-xl font-bold mb-2 font-['Plus_Jakarta_Sans',sans-serif]">
                {product.name}
              </h3>
              <p className="text-[#59636D] text-[15px] font-semibold mb-3 font-['Inter',sans-serif]">
                {product.desc}
              </p>
              <p className="text-[#59636D] text-sm leading-relaxed font-['Inter',sans-serif]">
                {product.details}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. WHERE WE'RE GOING */}
      <section className="py-20 md:py-32 bg-[#FAFAFA] border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-16"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-5xl font-bold text-[#111719] leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Building a More Capable Africa.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-6 text-lg text-[#59636D] font-['Inter',sans-serif] leading-relaxed pt-2">
              <p>
                Our ambition is to become a leading technology and research group, known for creating solutions that directly impact essential sectors. We are steadily expanding our research capabilities to ensure our products remain innovative, robust, and aligned with practical needs.
              </p>
              <p>
                In the coming years, OYEN GROUP plans to introduce new product lines, forge strategic partnerships with academic and industrial institutions, and create long-term opportunities for talent development across the continent.
              </p>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-md overflow-hidden"
          >
            <Image src="/images/hero-slide4.jpg" alt="Where we're going" fill className="object-cover object-bottom" />
          </motion.div>
        </div>
      </section>

      {/* 7. EXPLORE OYEN */}
      <section className="py-20 md:py-32 px-6 lg:px-12 container mx-auto max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[#111719] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Explore OYEN
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { title: "Our Leadership", desc: "Meet the people behind OYEN.", img: "/images/partnership.jpg", link: "/about/leadership" },
            { title: "Our Approach", desc: "Discover how we work.", img: "/images/hero-slide2.jpg", link: "/about#approach" },
            { title: "Our Technology", desc: "Explore what we're building.", img: "/images/tech.jpg", link: "/products" }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
            >
              <Link href={card.link} className="group block relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-md bg-[#09251F]">
                <Image src={card.img} alt={card.title} fill className="object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                  <h3 className="text-white text-2xl font-bold mb-2 font-['Plus_Jakarta_Sans',sans-serif] group-hover:-translate-y-1 transition-transform duration-500">
                    {card.title}
                  </h3>
                  <p className="text-white/80 font-medium font-['Inter',sans-serif] group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                    {card.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
