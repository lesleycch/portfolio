import { useEffect, useState } from "react";
import './App.css'
import { Navbar } from "./components/NavBar.jsx";
import { Hero } from "./components/Hero";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <Hero />


      <footer className="footer">
          <small class="text-muted mb-2">
    <i class="fas fa-code"></i> with <i class="fas fa-heart"></i> by <strong>Lesley Chang</strong>
  </small>
      </footer>
    </div>
  );
}

export default App;
