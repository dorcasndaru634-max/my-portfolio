import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Expertise from './pages/Expertise';
import Prof from './pages/Prof';
import Footer from './components/Footer';
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
        {/* The Navbar stays visible on every single page */}
        <Navbar />

        {/* Main Content Area switches based on the URL */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>

        {/* Footer stays visible on every single page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;