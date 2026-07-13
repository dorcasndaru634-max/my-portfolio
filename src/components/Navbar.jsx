import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="text-xl font-bold tracking-wider text-sky-400 hover:opacity-90">
          MY.PORTFOLIO
        </Link>
        
        {/* Navigation Links */}
        <div className="flex gap-6 font-medium text-slate-300">
          <Link to="/" className="hover:text-sky-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-sky-400 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-sky-400 transition-colors">Projects</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;