/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { HiMenu } from "react-icons/hi";
import { Outlet, Link } from "react-router-dom";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-2 md:px-12 px-4 bg-blacktext-white ${
          isSticky
            ? "sticky top-0 right-0 left-0 bg-transparent text-white text-sm "
            : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-white text-lg cursor-pointer">
           Inyo's
          </div>

          {/* for larger device */}
          <div className="lg:flex items-center text-sm gap-3 hidden text-body">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              About
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="feedback"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Feedback
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="contact"
              className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Contact
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="portfolio"
              className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Portfolio
            </Link>
          </div>

       

          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-sm text-white">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block hover:text-gray-400 py-2"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="skills"
              className="block hover:text-gray-400 py-2"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block hover:text-gray-400 py-2"
            >
              About me
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="portfolio"
              className="block hover:text-gray-400 py-2"
            >
              Portfolio
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="testimonials"
              className="block hover:text-gray-400 py-2"
            >
              Testimonials
            </Link>
          </div>
        )}
      </nav>
      <Outlet/>
    </header>
  );
};
