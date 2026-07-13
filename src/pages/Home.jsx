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