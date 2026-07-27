import React, { useState, useEffect } from "react";
import { GraduationCap, Briefcase, Award, Mail, Phone, MapPin } from "lucide-react";

export default function CV() {
  const [cvData, setCvData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/cv/")
      .then((response) => response.json())
      .then((data) => {
        setCvData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching CV data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!cvData) {
    return <div className="text-center py-20">No CV data available</div>;
  }

  return (
    <section className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">My CV</h1>
        </div>

        {/* CV Document */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          
          {/* Personal Information */}
          <div className="border-b-2 border-gray-200 pb-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900">{cvData.name}</h2>
            <p className="text-xl text-teal-600 mt-2">{cvData.title}</p>
            <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>{cvData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>{cvData.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{cvData.location}</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award size={24} className="text-teal-600" />
              Professional Summary
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {cvData.summary}
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap size={24} className="text-teal-600" />
              Education
            </h3>
            {cvData.educations && cvData.educations.map((edu, index) => (
              <div key={index} className="border-l-4 border-teal-500 pl-4 mb-4">
                <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                <p className="text-gray-600">{edu.school}</p>
                <p className="text-teal-600 text-sm">{edu.year}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase size={24} className="text-teal-600" />
              Experience
            </h3>
            {cvData.experiences && cvData.experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-teal-500 pl-4 mb-4">
                <h4 className="font-bold text-gray-900">{exp.role}</h4>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-teal-600 text-sm">{exp.period}</p>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award size={24} className="text-teal-600" />
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {cvData.skills && cvData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
