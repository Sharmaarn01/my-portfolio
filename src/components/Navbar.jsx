import { useState, useEffect } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png"; 
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // CHANGE 1: New state to track if we are on the Home page
  const [isHome, setIsHome] = useState(true);

  // CHANGE 2: Effect to detect when #home is visible
  useEffect(() => {
    const homeSection = document.querySelector("#home");
    
    if (!homeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If Home is intersecting (visible), sets true. Otherwise false.
        setIsHome(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of home is visible
    );

    observer.observe(homeSection);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 translate-y-0`}
      >
        {/* LOGO SECTION */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Arnav
          </div>
        </div>

        {/* HAMBURGER BUTTON */}
        <div 
          className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 transition-opacity duration-300"
          // CHANGE 3: Conditional styling. 
          // If isHome is true -> Opacity 1 (Visible). 
          // If isHome is false -> Opacity 0 (Invisible) & pointer-events-none (Unclickable).
          style={{ 
            opacity: isHome ? 1 : 0, 
            pointerEvents: isHome ? "auto" : "none" 
          }}
        >
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-2xl focus:outline-none" 
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* REACH OUT BUTTON */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}