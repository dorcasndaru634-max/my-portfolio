import React from "react";
import { GraduationCap, Laptop, Code2, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="https://res.cloudinary.com/souig2bs/image/upload/v1784189420/copy_of_whatsapp_image_2026-07-13_at_62821_pm_tzdjos.jpg"
              alt="Dorcas Ndaru"
              className="rounded-3xl shadow-xl w-full h-[600px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
              ABOUT ME
            </span>

            <h2 className="text-5xl font-bold mt-6 text-gray-900">
              Passionate About
              <span className="text-teal-700"> Business & Technology</span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              Hello! I'm <strong>Dorcas Ndaru</strong>, a Business Information
              Technology student passionate about creating digital solutions
              that improve businesses and everyday life. I enjoy designing
              responsive websites, building web applications, and learning
              emerging technologies.
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              My goal is to bridge the gap between business needs and technology
              by developing secure, user-friendly, and efficient systems. I'm
              continuously improving my skills in software development,
              networking, cloud computing, and database management.
            </p>

            {/* FEATURES */}

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div className="flex gap-4">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <GraduationCap className="text-teal-700" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Education
                  </h3>

                  <p className="text-gray-600">
                    Diploma in Business Information Technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <Code2 className="text-teal-700" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Web Development
                  </h3>

                  <p className="text-gray-600">
                    React, Django, JavaScript, Python and Tailwind CSS.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <Laptop className="text-teal-700" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    IT Skills
                  </h3>

                  <p className="text-gray-600">
                    Networking, databases, system analysis and software support.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <Briefcase className="text-teal-700" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Career Goal
                  </h3>

                  <p className="text-gray-600">
                    Becoming a full-stack software engineer and IT consultant.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}