import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import resumePdf from "../assets/pdf/LesleyChang_Resume.pdf"
import { motion } from "framer-motion";


export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-50"
          : "navbar"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="logo flex items-center space-x-1 group">
          <Link to="/" onClick={() => setMobileMenuIsOpen(false)}>Lesley Chang</Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-semibold nav-links">
            <Link to="/projects" className="">Projects</Link>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="">Resume</a>
          </div>

          <button
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-500 focus:outline-none"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-neutral-50/60 animate-in slide-in-from-top duration-300">
          <div className="px-6 py-6 sm:py-6 space-y-3 sm:space-y-4 text-lg font-semibold nav-links">
            <Link to="/projects" className="block" onClick={() => setMobileMenuIsOpen(false)}>Projects</Link>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="block" onClick={() => setMobileMenuIsOpen(false)}>Resume</a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

