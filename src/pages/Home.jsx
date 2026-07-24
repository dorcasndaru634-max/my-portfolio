import React from "react";
import { ArrowRight, GraduationCap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const profileImage =
    "https://res.cloudinary.com/souig2bs/image/upload/v1784549995/ChatGPT_Image_Jul_20_2026_02_51_08_PM_k4pnoa.png";

  return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <GraduationCap size={18} />
              BUSINESS IT STUDENT
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
              Bridging Business
              <br />
              and
              <span className="text-teal-700"> Technology</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">
              I specialize in optimizing organizational workflows through
              strategic IT implementation and data-driven business analytics.
              Transforming complex problems into streamlined digital solutions.
            </p>
{/* Buttons */}
<div className="flex gap-5 mt-10 flex-wrap">

  <button className="bg-black text-white px-8 py-4 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition">
    View My Work
    <ArrowRight size={20} />
  </button>

  <Link
    to="/cv"
    className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
  >
    CV
  </Link>

</div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <img
              src={profileImage}
              alt="Dorcas Ndaru"
              className="rounded-3xl shadow-2xl w-full h-[620px] object-cover border-4 border-white"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 left-8 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4">

              <div className="bg-teal-100 p-3 rounded-xl">
                <BarChart3 className="text-teal-700" size={24} />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Data Analyzed</p>
                <h3 className="text-3xl font-bold">500k+ Rows</h3>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}