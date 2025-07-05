import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = (
    <>
      <li className="nav-link">
        <a href="#">Home</a>
      </li>
      <li className="nav-link">
        <a href="#about">About</a>
      </li>
      <li className="nav-link">
        <a href="#skills">Skills</a>
      </li>
      <li className="nav-link">
        <a href="#projects">Projects</a>
      </li>
      <li className="nav-link">
        <a href="#contact">Contact</a>
      </li>
      
    </>
  );

  return (
    <nav className="fixed z-50 w-full">
      <div className="bg-background">
        <div className="container mx-auto  py-5 flex items-center px-5 justify-between">
        <div className="font_headers">
          <h2 className="text-Accent text-3xl font-semibold">Tamzid</h2>
        </div>
        <div>
          <ul className="text-primaryText hidden md:flex gap-16">{links}</ul>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <IoClose size={30} className="text-primaryText" />
            ) : (
              <IoIosMenu size={30} className="text-primaryText" />
            )}
          </button>
        </div>
      </div>
      </div>

      <div
        className={`w-11/12 mx-auto bg-background md:hidden transform transition-all duration-500 ease-in-out origin-top ${
          isMenuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col justify-center items-center text-primaryText gap-5 py-5">
          {links}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
