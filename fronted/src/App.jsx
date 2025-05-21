import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Ostéo Santé</h1>
            <nav className="space-x-4">
              <Link to="/" className="hover:text-blue-600 transition">
                Accueil
              </Link>
              <Link to="/services" className="hover:text-blue-600 transition">
                Services
              </Link>
              <Link to="/about" className="hover:text-blue-600 transition">
                À propos
              </Link>
              <Link to="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Content */}
        <main className="flex-grow bg-white py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Ostéo Santé - Tous droits
              réservés
            </p>
            <div className="space-x-4 mt-4 md:mt-0">
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
              <Link to="/about" className="hover:text-white transition">
                À propos
              </Link>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
