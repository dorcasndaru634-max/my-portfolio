function About() {
  import React from 'react';


// 1. Paste your Cloudinary URL for the new cartoon image here:
  const aboutImageUrl = "https://res.cloudinary.com/souig2bs/image/upload/v1783956590/WhatsApp_Image_2026-07-13_at_6.28.21_PM_tzdjos.jpg";
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-sky-400">About Me</h2>
      <p className="text-slate-400 leading-relaxed mb-4">
        "Hi, I'm Dorcas Ndaru. I'm a Business Information Technology student and a Full-Stack Developer. Because of my background in Business IT, I don't just write code—I build technical solutions that solve real-world business problems. I enjoy working across the entire stack, seamlessly connecting responsive frontend interfaces with robust backend systems."
      </p>
    </div>
  );
}
export default About;