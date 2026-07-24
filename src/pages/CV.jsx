import React from "react";
import { GraduationCap, Briefcase, Award, Mail, Phone, MapPin } from "lucide-react";

export default function CV() {
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
            <h2 className="text-4xl font-bold text-gray-900">Dorcas Ndaru</h2>
            <p className="text-xl text-teal-600 mt-2">Business Information Technology Student</p>
            <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>dorcasndaru634@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+254 797721600</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Kenya</span>
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
              Passionate Business Information Technology student with expertise in web development, data analysis, and IT solutions. Skilled in creating responsive websites and bridging business needs with technology.
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <GraduationCap size={24} className="text-teal-600" />
              Education
            </h3>
            <div className="border-l-4 border-teal-500 pl-4 mb-4">
              <h4 className="font-bold text-gray-900">Diploma in Business Information Technology</h4>
              <p className="text-gray-600">mount kenya university</p>
              <p className="text-teal-600 text-sm">2023 - Present</p>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase size={24} className="text-teal-600" />
              Experience
            </h3>
            <div className="border-l-4 border-teal-500 pl-4 mb-4">
              <h4 className="font-bold text-gray-900">ICT department</h4>
              <p className="text-gray-600">Thika level 5 hosppital,Kiambu</p>
              <p className="text-teal-600 text-sm">2024 - Present</p>
              <p className="text-gray-600 mt-2">Developing responsive web applications using React and modern technologies.</p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award size={24} className="text-teal-600" />
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">React</span>
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">JavaScript</span>
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Python</span>
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Django</span>
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Tailwind CSS</span>
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">managerial skills</span>
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Networking</span>
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">Database Management</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
