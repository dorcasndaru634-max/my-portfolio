import React from "react";
import {
  TrendingUp,
  Code2,
  BarChart3,
  Users,
  Award,
} from "lucide-react";

export default function Expertise() {
  const image =
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200";

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-start mb-10 flex-wrap gap-4">

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Core Expertise
            </h2>

            <p className="text-gray-600 mt-2">
              Merging analytical thinking with technical execution.
            </p>
          </div>

          <div className="flex gap-3">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              Python
            </span>

            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              SQL
            </span>

            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
              ERPs
            </span>
          </div>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Card 1 */}
          <div className="lg:col-span-2 bg-white border p-8">

            <TrendingUp className="text-teal-700 mb-6" size={32} />

            <h3 className="text-3xl font-bold mb-4">
              Business Process Optimization
            </h3>

            <p className="text-gray-600 leading-8">
              Streamlining enterprise operations through systematic
              mapping and digital integration strategies.
            </p>

            <div className="flex gap-3 mt-8">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 text-sm rounded">
                Agile
              </span>

              <span className="bg-teal-100 text-teal-700 px-3 py-1 text-sm rounded">
                Lean Management
              </span>
            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 text-white p-8">

            <Code2 className="text-white mb-6" size={32} />

            <h3 className="text-3xl font-bold mb-6">
              Technical Proficiency
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>• Full-stack Development</li>
              <li>• Database Management</li>
              <li>• Cloud Infrastructure</li>
            </ul>

          </div>

          {/* Card 3 */}
          <div className="bg-white border p-8 text-center flex flex-col justify-center">

            <BarChart3
              className="text-teal-700 mx-auto mb-6"
              size={34}
            />

            <h3 className="text-3xl font-bold mb-4">
              Data Analytics
            </h3>

            <p className="text-gray-600 leading-8">
              Turning raw data into actionable business intelligence.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-white border p-8 flex items-center gap-4">

            <Users className="text-black" />

            <div>
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="text-gray-600">
                Team Projects
              </p>
            </div>

          </div>

          {/* Card 5 */}
          <div className="bg-white border p-8 flex items-center gap-4">

            <Award className="text-black" />

            <div>
              <h3 className="text-4xl font-bold">5</h3>
              <p className="text-gray-600">
                Certifications
              </p>
            </div>

          </div>

          {/* Large Image */}
          <div className="lg:col-span-2 relative overflow-hidden">

            <img
              src={image}
              alt="Enterprise Systems"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-8">

              <span className="uppercase text-xs tracking-widest text-white">
                Current Focus
              </span>

              <h3 className="text-white text-4xl font-bold mt-2">
                Advanced Enterprise Systems Integration
              </h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}