import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto mt-4 flex items-center justify-between rounded-full border border-gray-200 bg-white/70 backdrop-blur-xl px-8 py-4 shadow-lg">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <img
            src="https://res.cloudinary.com/souig2bs/image/upload/v1784549995/ChatGPT_Image_Jul_20_2026_02_51_08_PM_k4pnoa.png"
            alt="Dorcas Ndaru"
            className="w-12 h-12 rounded-full object-cover border-2 border-teal-500 shadow-md transition-transform duration-300 group-hover:scale-110"
          />

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              Dorcas Ndaru
            </h1>
            <p className="text-sm text-gray-500">
              Business IT Student
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-teal-600 font-semibold transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-teal-600"
          >
            Hire Me
          </Link>
        </div>

      </nav>
    </header>
  );
}