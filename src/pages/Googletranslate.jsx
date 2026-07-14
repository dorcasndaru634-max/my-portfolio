import { useEffect } from 'react';

export default function GoogleTranslate() {
  useEffect(() => {
    // 1. Define the initialization function on the global window object
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en', // Your portfolio's default language
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // 2. Prevent duplicate script injections
    const existingScript = document.getElementById('google-translate-script');
    if (!existingScript) {
      const addScript = document.createElement('script');
      addScript.setAttribute('src', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      addScript.setAttribute('id', 'google-translate-script');
      addScript.setAttribute('type', 'text/javascript');
      document.body.appendChild(addScript);
    }
  }, []);

  return (
    <div className="flex items-center justify-center p-2">
      {/* Target element where the widget will mount */}
      <div 
        id="google_translate_element" 
        className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm overflow-hidden"
      />
    </div>
  );
}