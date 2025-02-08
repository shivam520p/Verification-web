import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Career", path: "/career" },
    { title: "Pricing", path: "/pricing" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed bg-white top-0 left-0 w-full z-50 shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-20 md:px-16 py-3 lg:py-4 flex justify-between items-center">
        <div className="w-full flex justify-between items-center">
          {/* Left Side: Logo */}
          <Link to="/" className="text-4xl font-bold text-black">
            <img src={Logo} alt="" className="w-40 h-8 lg:w-56 lg:h-10" />
          </Link>

          {/* Right Side: Mobile Toggle Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="font-semibold text-lg text-gray-800 hover:text-blue-600"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-32">
            <button className="px-5 py-3 bg-black text-white font-semibold rounded">
              <Link to="/getstarted">Get Started</Link>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-white shadow-lg h-[380px]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between p-4 bg-white shadow-md">
              <Link to="/" className="text-4xl font-bold text-black">
                <img src={Logo} alt="" className="w-40 lg:w-56 h-8 lg:h-10" />
              </Link>

              <button onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col px-4 py-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block py-2 text-base text-black hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  to="/getstarted"
                  className="block py-3 text-sm bg-gray-800 text-white text-center rounded hover:bg-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
