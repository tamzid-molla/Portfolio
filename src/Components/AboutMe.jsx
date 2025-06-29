import React from 'react';

const AboutMe = () => {
    return (
        <section
      id="about"
      className=" px-5 min-h-screen flex justify-center items-center w-full"
    >
      <div data-aos='zoom-in'  className="flex w-full items-center mt-20 justify-center">
      
        <div className="relative group w-11/12 md:w-10/12 lg:w-9/12">
          <div
            aria-hidden
            className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent via-Accent to-accent opacity-40 blur-xl transition"
          />

          {/* Main Card */}
          <div className="relative rounded-3xl bg-cardBackground backdrop-blur-lg border border-accent/40 p-10 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-Accent">
              About Me
            </h2>
            <p className="max-w-4xl mx-auto text-secondaryText text-lg leading-relaxed">
              Hello! I'm{' '}
              <span className="font-semibold text-primaryText">Md Tamzid Molla</span>, a
              second-year honors student pursuing a
              <strong>Bachelor of Social Science (BSS)</strong> in Economics under
              the National University of Bangladesh. I'm currently learning the
              MERN Stack and absolutely love building dynamic and modern web
              applications.
              <br /><br />
              I’m dedicated to continuous learning, especially in full-stack
              web development. I enjoy turning complex problems into simple,
              beautiful, and intuitive designs. My goal is to become a
              professional full-stack developer and contribute to open‑source and
              impactful projects.
              <br /><br />
              I have a strong foundation in HTML, CSS, JavaScript, and React, and I'm
              continuously working on real-world projects to sharpen my skills. Alongside
              frontend, I am also diving into backend development using Node.js, Express,
              and MongoDB to become a complete MERN stack developer.
              <br /><br />
              I’m also passionate about teamwork, learning from others, and sharing
              knowledge. I enjoy exploring new technologies, improving my design thinking,
              and creating web experiences that are not only functional but visually appealing.
              Outside of coding, I love reading about technology, exploring new tools,
              and helping others in their coding journey.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AboutMe;