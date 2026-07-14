import React from 'react';import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // 1. Define the global initializer function Google's script looks for
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,sw', // Only English and Swahili
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // 2. Prevent duplicate script injection if the component re-renders
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const addScript = document.createElement('script');
      addScript.setAttribute('id', scriptId);
      addScript.setAttribute('type', 'text/javascript');
      addScript.setAttribute(
        'src',
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      );
      document.body.appendChild(addScript);
    }
  }, []);

  return (
    /* 3. Styled wrapper container using Tailwind CSS */
    <div className="inline-block p-1 bg-white border border-gray-200 rounded-md shadow-sm hover:border-gray-300 transition-colors">
      <div id="google_translate_element" className="notranslate text-sm"></div>
    </div>
  );
};

export default GoogleTranslate;


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