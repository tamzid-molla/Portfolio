import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-secondaryText py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation Links */}
        <ul className="flex justify-center flex-wrap gap-6 mb-4 text-sm font-medium">
          <li><a href="#" className="hover:text-Accent">Home</a></li>
          <li><a href="#about" className="hover:text-Accent">About</a></li>
          <li><a href="#skills" className="hover:text-Accent">Skills</a></li>
          <li><a href="#projects" className="hover:text-Accent">Projects</a></li>
          <li><a href="#contact" className="hover:text-Accent">Contact</a></li>
        </ul>

        {/* Copyright */}
        <p className="text-center text-xs">
          &copy; {new Date().getFullYear()} Tamzid Molla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
