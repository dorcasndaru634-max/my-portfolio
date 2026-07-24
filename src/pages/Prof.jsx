import React from 'react';

const ProfessionalJourney = () => {
  const experiences = [
    {
      role: " ICT department",
      company: "Thika level 5 hospital",
      period: "3 months",
      
    },
    {
      role: "Business Information Technology Student",
      institution:"Mount kenya university",
      period: "2021 - 2024",
      description: "Maintaining a 3.8 GPA while specializing in Business Intelligence and Systems Analysis. Developed a capstone project that utilized machine learning to predict retail market trends with 85% accuracy.",
      isCurrent: false,
    }
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 max-w-5xl mx-auto font-sans">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
        My Professional Journey
      </h2>

      {/* Timeline Wrapper */}
      <div className="relative border-l border-slate-300 ml-4 md:ml-8 pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            
            {/* Timeline Dot */}
            <span 
              className={`absolute -left-[37px] top-1.5 w-4.5 h-4.5 rounded-full border-2 bg-white flex items-center justify-center
                ${exp.isCurrent 
                  ? 'border-emerald-700 after:w-2 after:h-2 after:bg-emerald-700 after:rounded-full' 
                  : 'border-slate-300 after:w-2 after:h-2 after:bg-slate-300 after:rounded-full'
                }`}
            />

            {/* Content Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                {exp.role}
              </h3>
              
              {/* Date Badge */}
              <span 
                className={`inline-block px-3 py-1 text-sm font-mono tracking-wider rounded text-center self-start sm:self-auto
                  ${exp.isCurrent 
                    ? 'bg-emerald-50 text-emerald-800' 
                    : 'bg-gray-100 text-slate-600'
                  }`}
              >
                {exp.period}
              </span>
            </div>

            {/* Company Name */}
            <h4 className="text-xs md:text-sm font-mono tracking-widest text-slate-500 uppercase mb-4">
              {exp.company}
            </h4>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed max-w-3xl text-sm md:text-base">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalJourney;


