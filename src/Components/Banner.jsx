import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import heroImage from '../assets/portfolio.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen snap-start pt-28 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Profile Image */}
      <img
        src={heroImage}
        alt="Tamzid Molla"
        className="w-40 h-40 md:w-52 md:h-52 rounded-full ring-4 ring-Accent shadow-lg mb-6 object-cover"
      />

      {/* Name */}
      <h1 className="text-4xl md:text-5xl text-secondaryText font-bold">
        Hi, I'm <span className="text-Accent">Md Tamzid Molla</span>
      </h1>

      {/* Typewriter Subtitle */}
      <h2 className="text-lg md:text-2xl text-secondaryText mt-3 h-8">
        <Typewriter
          words={['A MERN Stack Developer', 'Frontend Developer', 'Full‑Stack Learner']}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </h2>

      {/* Short Description */}
      <p className="mt-5 max-w-xl text-secondaryText">
        I'm a passionate full-stack learner from Bangladesh, currently learning MERN stack development. I love building responsive and dynamic web applications.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <a
          href="#contact"
          className="bg-Accent text-primaryText px-5 py-2 rounded-full shadow hover:scale-103 transition"
        >
          Hire Me
        </a>
        <a
          href="/resume.pdf"
          className="border border-Accent text-Accent px-5 py-2 rounded-full hover:bg-Accent hover:text-primaryText transition"
          download
        >
          Download Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex gap-5 text-2xl text-Accent">
        <a href="https://github.com/tamzid-molla" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tamzid-molla-9b5b46371/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/monhara.pakhi.549668" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-5 text-Accent animate-bounce text-2xl">
        ↓
      </div>
    </section>
  );
};

export default HeroSection;
