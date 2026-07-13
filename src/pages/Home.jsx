import React from 'react';

export default function Home() {
  // 1. PASTE YOUR ACTUAL CLOUDINARY URL INSTEAD OF THE TEMPLATE LINK BELOW:";
  const backgroundImageUrl = "https://res.cloudinary.com/souig2bs/image/upload/v1783955294/WhatsApp_Image_2026-07-13_at_6.03.57_PM_1_o3gzug.jpg"

  return (
    <section 
      className="min-h-[80vh] flex items-center justify-center px-6 py-16 md:py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      // Using dual curly brackets for the React inline style object
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      {/* 2. BACKGROUND OVERLAY: Dims and blurs the image so text pops perfectly */}
      <div className="absolute inset-0 bg-slate-950/65 backdrop-blur-[1px]"></div>

      {/* 3. HERO CONTENT */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Availability Badge */}
        <span className="inline-block bg-sky-500/20 text-sky-200 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase border border-sky-400/30 shadow-sm animate-pulse">
          Available for Opportunities
        </span>

       {/* Professional Subtitle / Bio */}
        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Hi, I'm <strong className="text-white font-semibold">Dorcas Ndaru</strong>. As a Business IT student.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#projects" 
            className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3.5 rounded-lg shadow-md transition duration-200 text-center transform hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-medium px-8 py-3.5 rounded-lg shadow-sm transition duration-200 text-center transform hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        {/* Tech Stack Ribbon */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Core Tech Stack
          </p>
          
        </div>

      </div>
    </section>
  );
}