import React, { useState, useEffect } from "react";
import { GraduationCap, Laptop, Code2, Briefcase } from "lucide-react";

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/about/")
      .then((response) => response.json())
      .then((data) => {
        setAboutData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching about data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!aboutData) {
    return <div className="text-center py-20">No data available</div>;
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={aboutData.image_url || "https://res.cloudinary.com/souig2bs/image/upload/v1784189420/copy_of_whatsapp_image_2026-07-13_at_62821_pm_tzdjos.jpg"}
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
              {aboutData.title}
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              Hello! I'm <strong>{aboutData.name}</strong>, {aboutData.description1}
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              {aboutData.description2}
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
                    {aboutData.education}
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
                    {aboutData.web_dev}
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
                    {aboutData.it_skills}
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
                    {aboutData.career_goal}
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