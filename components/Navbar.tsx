import React, { useState, useEffect } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { navItems } from "@/lib/utils";
import Link from "next/link";

const Navbar: React.FC = () => {

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index:any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };


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
      className={`z-[980] fixed top-0 h-[60px] left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Logo */}
        <a href="/" className="text-white font-semibold harry-text text-[3rem]">
          Exodia
        </a>

         {/* Navbar Links */}
      <nav className="hidden sm:flex flex-row items-center space-x-6">
        {navItems.map((item, index) => (
          <div key={item.name} 
          className="relative group p-2"
          onMouseEnter={() => item.subItems && toggleDropdown(index)}
          onMouseLeave={() => item.subItems && toggleDropdown(null)}
          >
            <a
              href={item.link}
              className="text-base hover:text-yellow-300 transition"
              
            >
              {item.name}
            </a>
            {/* Dropdown Menu */}
            {item.subItems && dropdownOpen === index && (
              <div className="absolute top-full left-0 bg-gray-800 text-white  rounded-2xl shadow-lg  bg-white/10 backdrop-blur-md border-b border-white/20 transition-transform duration-300">
                {item.subItems.map((subItem) => (
                  <a
                    key={subItem.name}
                    href={subItem.link}
                    className="block px-4 py-2 hover:text-yellow-300 transition"
                  >
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

        
        {/* Menu */}
        <div className="max-sm:hidden">
          P
        </div>


        {/* Menu Icon (Mobile Only) */}
        <Sheet>
          <SheetTrigger asChild>
            {/* <Button variant="outline">Open</Button> */}
            <button
              className="text-white text-2xl md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetClose asChild>
              <div>
                {navItems.map((item, i) => (
                  <div key={i} className="text-white text-2xl pt-2 transition">
                    <Link href={item.link}>
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

