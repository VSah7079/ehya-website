

import React, { useState } from "react";
import { Menu } from "lucide-react";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen((prev) => !prev);
  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500">
      <div className="max-w-7xl mx-auto flex items-center py-6 px-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <span className="text-white font-bold text-2xl">ehya</span>
          <span className="ml-1 w-2 h-2 bg-white rounded-full inline-block"></span>
        </div>
        {/* Hamburger for mobile */}
        <button className="md:hidden text-white ml-auto" onClick={handleMenuClick} aria-label="Open Menu">
          <Menu className="w-7 h-7" />
        </button>
        {/* Centered Menu */}
        <div className={`flex-1 justify-center md:flex hidden md:items-center md:gap-8 text-white font-medium`}> 
          <button onClick={() => handleNavClick('home')} className="hover:text-blue-100 transition bg-transparent focus:outline-none py-2 md:py-0 text-center">Home</button>
          <button onClick={() => handleNavClick('features')} className="flex items-center gap-1 hover:text-blue-100 transition bg-transparent focus:outline-none py-2 md:py-0 text-center">
            Landings
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button onClick={() => handleNavClick('pages')} className="flex items-center gap-1 hover:text-blue-100 transition bg-transparent focus:outline-none py-2 md:py-0 text-center">
            Pages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button onClick={() => handleNavClick('docs')} className="hover:text-blue-100 transition bg-transparent focus:outline-none py-2 md:py-0 text-center">Docs</button>
          <button onClick={() => handleNavClick('help')} className="hover:text-blue-100 transition bg-transparent focus:outline-none py-2 md:py-0 text-center">Help</button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex flex-col items-center gap-4 py-4 z-50 md:hidden">
            <button onClick={() => handleNavClick('home')} className="hover:text-blue-100 transition bg-transparent focus:outline-none py-2 text-center w-full">Home</button>
            <button onClick={() => handleNavClick('features')} className="flex items-center gap-1 hover:text-blue-100 transition bg-transparent focus:outline-none py-2 text-center w-full">
              Landings
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button onClick={() => handleNavClick('pages')} className="flex items-center gap-1 hover:text-blue-100 transition bg-transparent focus:outline-none py-2 text-center w-full">
              Pages
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button onClick={() => handleNavClick('docs')} className="hover:text-blue-100 transition bg-transparent focus:outline-none py-2 text-center w-full">Docs</button>
            <button onClick={() => handleNavClick('help')} className="hover:text-blue-100 transition bg-transparent focus:outline-none py-2 text-center w-full">Help</button>
          </div>
        )}
        {/* Login Button always right */}
        <div className="flex-shrink-0 ml-4">
          <button className="bg-blue-900 px-6 py-2 rounded-lg text-white font-semibold shadow hover:bg-blue-800 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
