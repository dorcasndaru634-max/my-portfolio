import React from 'react';

export default function About() {
  // 1. Paste your Cloudinary URL for the new cartoon image here:
  const aboutImageUrl = "https://res.cloudinary.com/souig2bs/image/upload/v1783956590/WhatsApp_Image_2026-07-13_at_6.28.21_PM_tzdjos.jpg";

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-900 text-white px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About <span className="text-sky-400">Me</span>
          </h2>
          <div className="h-1 w-16 bg-sky-500 mt-3 mx-auto md:mx-0 rounded"></div>
        </div>

        {/* Main Grid Layout: Image on one side, text on the other */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* IMAGE CONTAINER (Takes up 5 columns out of 12 on desktop) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group max-w-[320px] md:max-w-none">
              {/* Decorative background accent ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl opacity-30 blur group-hover:opacity-50 transition duration-300"></div>
              
              {/* The Actual Image */}
              <img 
                src={aboutImageUrl} 
                alt="Mwende coding illustration" 
                className="rounded-2xl border border-white/10 bg-slate-800 shadow-xl object-cover relative z-10 w-full h-auto transform group-hover:scale-[1.02] transition duration-300"
              />
            </div>
          </div>

          {/* TEXT CONTENT CONTAINER (Takes up 7 columns out of 12) */}
          <div className="md:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
            <p>
              Hi there! I'm <strong className="text-white font-medium">Dorcas Mwende Ndaru</strong>, a passionate Business Information Technology student. I thrive at the intersection of business strategy and software engineering, building tools that don't just work smoothly under the hood, but also solve practical, organizational problems.
            </p>
            
            <p>
              My coding journey revolves around creating functional, responsive user interfaces paired with structured backend systems. Whether I'm designing frontend layouts using <span className="text-sky-400 font-medium">Tailwind CSS</span> and <span className="text-sky-400 font-medium">React</span>, or managing data logic via SQL, I love the challenge of turning complex problems into clean, maintainable code.
            </p>

            <p>
              When I'm not writing code or analyzing workflows, you can usually find me experimenting with new frameworks, tweaking system layouts, or learning more about cloud systems and deployment architectures. 
            </p>

            {/* Quick Stats/Highlights */}
            <div className="pt-4 grid grid-cols-2 gap-4 text-sm font-medium text-white">
              <div className="flex items-center gap-2">
                <span className="text-sky-400 text-lg">▹</span> web development
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 text-lg">▹</span> backend development
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 text-lg">▹</span> Database Management
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sky-400 text-lg">▹</span> Problem Solver
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}