import React from 'react';

export default function Home() {
  return (
    <section 
      className="min-h-[80vh] flex items-center justify-center px-6 py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "https://res.cloudinary.com/souig2bs/image/upload/v1783952681/WhatsApp_Image_2026-07-13_at_3.34.27_PM_pmcd8p.jpg" }
    >
      {/* Background Overlay: This ensures your text remains highly visible over any image */}
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>

      {/* Hero Content (relative z-10 moves it above the overlay) */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Availability Badge */}
        <span className="inline-block bg-sky-500/20 text-sky-200 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase shadow-sm border border-sky-400/30">
          Available for Opportunities
        </span>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-6 mb-6 tracking-tight leading-tight drop-shadow-md">
          Bridging the Gap Between <span className="text-sky-400">Business Strategy</span> & Full-Stack Code
        </h1>

        {/* Subtitle / Bio */}
        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Hi, I'm <strong className="text-white font-semibold">Dorcas Ndaru</strong>. As a Business IT student, I build responsive frontend interfaces and robust backend systems engineered to solve real-world operational problems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#projects" 
            className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3.5 rounded-lg shadow-md transition duration-200 text-center"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-medium px-8 py-3.5 rounded-lg shadow-sm transition duration-200 text-center"
          >
            Get in Touch
          </a>
        </div>

        {/* Quick Tech Stack Ribbon */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
            Core Tech Stack
          </p>
           </div>

      </div>
    </section>
  );
}