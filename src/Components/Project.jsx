import React, { useEffect, useState } from "react";
import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaReact,
  FaJsSquare,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link, useParams } from "react-router";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find(
          (single) => parseInt(single.id) === parseInt(id)
        );
        setProject(foundProject);
      });
  }, [id]);

  if (!project) return <p className="text-center mt-10">Loading...</p>;

  const { projectImage, projectName, details } = project;

  return (
    <div className="min-h-screen container mx-auto p-6 bg-background text-secondaryText">
      <header className="relative mb-6">
        <img
          src={projectImage}
          alt={projectName}
          className="w-full h-auto object-cover rounded-lg"
              />
              <Link to='/' className="text-lg font-medium bg-Accent py-2 px-3 text-primaryText rounded-lg shadow-2xl absolute top-0 left-0  btn">Back to Home</Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left and Center Content */}
        <div className="md:col-span-2">
          <div className="bg-cardBackground p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-primaryText">
              Project Overview
            </h2>
            <p className="mt-2">{details?.description}</p>
          </div>

          <div className="bg-cardBackground p-6 mt-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-primaryText">
              Challenges & Solutions
            </h2>
            <ul className="mt-2 list-disc list-inside">
              {details?.challenges?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-cardBackground p-6 mt-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-primaryText">
              Future Improvements
            </h2>
            <ul className="mt-2 list-disc list-inside">
              {details?.futurePlans?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-cardBackground p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-primaryText">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {details?.techStack?.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center text-secondaryText text-sm bg-accent/20 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-cardBackground p-6 mt-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-primaryText">Project Links</h2>
            <div className="mt-4 space-y-2">
              <a
                href={details?.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 bg-accent text-primaryText rounded hover:bg-opacity-90"
              >
                View Live Project →
              </a>
              <a
                href={details?.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 bg-cardBackground border border-accent text-accent rounded hover:bg-accent hover:text-primaryText"
              >
                View Source Code →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
