import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY === 0) {
      // Always show the navbar when at the top
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      // Hide navbar when scrolling down
      setIsVisible(true);
    } else {
      // Show navbar when scrolling up
      setIsVisible(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex justify-between items-center px-6 py-3 md:px-10">
        {/* Logo */}
        <a href="#" className="text-white text-lg font-semibold">
          Logo
        </a>

        {/* Menu Icon (Mobile Only) */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>

        {/* Navbar Links */}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"
            } absolute md:static top-full left-0 w-full md:w-auto md:flex md:items-center bg-white/10 md:bg-transparent p-4 md:p-0`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="text-white text-base hover:text-red-500 transition"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white text-base hover:text-red-500 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-white text-base hover:text-red-500 transition"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-white text-base hover:text-red-500 transition"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white text-base hover:text-red-500 transition"
            >
              Contact
            </a>
          </div>


        </nav>
          <div>
            extra
          </div>
      </div>


      {/* Background Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="absolute top-[55px] left-0 w-full h-screen bg-black/20 backdrop-blur-md z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
