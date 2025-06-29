import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section
      id="projects"
      className="mt-20 md:mt-0 flex justify-center items-center container mx-auto px-5 min-h-screen bg-background text-center">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-Accent">
          Projects
        </h2>
        <p className="text-secondaryText mb-12">
          Some of the projects I’ve built recently using the MERN stack and
          modern tools
        </p>
        <div className="grid grid-cols-1 mt-20 px-3 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
          {projects?.map((project,i) => (
            <div
              data-aos='fade-up' data-aos-delay={i * 200}
              key={project.id}
              className="relative border border-accent/20 rounded-xl overflow-hidden shadow-lg shadow-accent/30 hover:shadow-accent/50 transition duration-300 group flex flex-col h-full">
              <img
                src={project?.projectImage}
                alt={project?.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 bg-cardBackground text-left flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-primaryText mb-2">
                  {project?.title}
                </h3>
                <p className="text-secondaryText text-sm mb-4">
                  {project?.details?.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.details?.techStack?.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mb-4">
                  <a
                    href={project?.details?.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primaryText hover:text-accent text-lg">
                    <FaGithub />
                  </a>
                  <a
                    href={project?.details?.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primaryText hover:text-accent text-lg">
                    <FaExternalLinkAlt />
                  </a>
                </div>

                {/* Push button to bottom */}
                <div className="mt-auto">
                  <Link to={`/details/${project.id}`}>
                    <button className="w-full border border-accent text-accent px-5 py-2 rounded-full hover:bg-accent hover:text-primaryText transition">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
