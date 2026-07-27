import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* The Navbar stays visible on every page except admin */}
      {!isAdmin && <Navbar />}

      {/* Main Content Area switches based on the URL */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {/* Footer stays visible on every page except admin */}
      {!isAdmin && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;