import { useEffect, useState } from "react";
import './App.css'
import Navbar from "./components/NavBar";
import { Hero } from "./components/Hero";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar scrolled={scrolled} />

      <Hero />

      <footer className="footer">
        <small className="text-muted mb-2">
          <i  className="fas fa-code"></i> with <i className="fas fa-heart"></i> by <strong>Lesley Chang</strong>
        </small>
      </footer>
    </div>
  );
}

export default App;
