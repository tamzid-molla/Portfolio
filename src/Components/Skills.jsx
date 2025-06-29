import ProgressBar from "@ramonak/react-progress-bar";
import React, { useEffect, useState } from "react";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#e34c26", level: 99 },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "#38bdf8",
      level: 95,
    },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e", level: 80 },
    { name: "React", icon: <FaReact />, color: "#61dafb", level: 75 },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a", level: 50 },
    { name: "Express.js", icon: <SiExpress />, color: "#6c757d", level: 85 },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d", level: 80 },
  ];

  const tools = [
    { name: "Firebase", icon: <SiFirebase />, color: "#ffcb2b", level: 90 },
    { name: "GitHub", icon: <FaGithub />, color: "#f0f6fc", level: 85 },
    { name: "VS Code", icon: <VscCode />, color: "#007acc", level: 95 },
    { name: "Figma", icon: <FiFigma />, color: "#a259ff", level: 70 },
  ];

  return (
    <section id="skills" className="mt-10 md:mt-0 px-5 flex justify-center items-center min-h-screen text-center">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl mt-20 font-bold mb-4 text-Accent">
        My Skills
      </h2>
      <p className="text-secondaryText mb-12">
        Here are the technologies and tools I work with to bring ideas to life
      </p>
      {/* Frontend Card */}
      <div className="container px-3 mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div data-aos='fade-up' data-aos-delay="200" className="bg-gradient-to-r from-background to-cardBackground p-6 rounded-2xl border border-accent/20 shadow-2xl shadow-accent/30 ">
          <h3 className="text-xl text-primaryText font-semibold mb-4">
            Frontend
          </h3>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center justify-between gap-4 mb-1">
                <div className="flex items-center gap-2 text-primaryText">
                  <span className="text-2xl" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  {skill.name}
                </div>
                <p className="text-secondaryText">100%</p>
              </div>
              <ProgressBar
                completed={skill.level}
                bgColor={skill.color}
                maxCompleted={100}
                baseBgColor="#334155"
                height="20px"
                borderRadius="999px"
                animateOnRender
              />
            </div>
          ))}
        </div>

        {/* Backend Card */}
        <div data-aos='fade-up' data-aos-delay="400" className="bg-cardBackground  border border-accent/20 relative p-6 rounded-2xl shadow-2xl shadow-accent/30 ">
          <h3 className="text-xl text-primaryText font-semibold mb-4">
            Backend
          </h3>
          {backendSkills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center justify-between gap-4 mb-1">
                <div className="flex items-center gap-2 text-primaryText">
                  <span className="text-2xl" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  {skill.name}
                </div>
                <p className="text-secondaryText">100%</p>
              </div>
              <ProgressBar
                completed={skill.level}
                maxCompleted={100}
                bgColor={skill.color}
                baseBgColor="#334155"
                height="20px"
                borderRadius="999px"
                animateOnRender
              />
            </div>
          ))}
        </div>

        {/* Tools Card */}
        <div data-aos='fade-up' data-aos-delay="600" className="bg-gradient-to-r from-cardBackground to-background p-6 rounded-2xl border border-accent/20 shadow-2xl shadow-accent/30">
          <h3 className="text-xl text-primaryText font-semibold mb-4">
            Tools & Platforms
          </h3>
          {tools.map((tool, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center justify-between gap-4 mb-1">
                <div className="flex items-center gap-2 text-primaryText">
                  <span className="text-2xl" style={{ color: tool.color }}>
                    {tool.icon}
                  </span>
                  {tool.name}
                </div>
                <p className="text-secondaryText">100%</p>
              </div>
              <ProgressBar
                completed={tool.level}
                maxCompleted={100}
                bgColor={tool.color}
                baseBgColor="#334155"
                height="20px"
                borderRadius="999px"
                animateOnRender
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
