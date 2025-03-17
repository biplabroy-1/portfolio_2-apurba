import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
      source: "https://github.com/apurba-pal/portfolio",
      link: "https://apurba-portfolio.com",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication and payment integration.",
      source: "https://github.com/apurba-pal/ecommerce-platform",
      link: "https://ecommerce-platform.com",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Chat Application",
      description: "A real-time chat application using WebSocket and Node.js.",
      source: "https://github.com/apurba-pal/chat-app",
      link: "https://chat-app.com",
      technologies: ["Node.js", "WebSocket", "React"],
    },
    {
      title: "Weather App",
      description: "A weather forecasting app that provides real-time weather updates.",
      source: "https://github.com/apurba-pal/weather-app",
      link: "https://weather-app.com",
      technologies: ["React", "OpenWeather API", "CSS"],
    },
    {
      title: "Weather App 2",
      description: "A weather forecasting app that provides real-time weather updates.",
      source: "https://github.com/apurba-pal/weather-app",
      link: "https://weather-app.com",
      technologies: ["React", "OpenWeather API", "CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-yellow-500 p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="relative grid grid-cols-1 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} total={projects.length} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, total }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        filter: "brightness(1)",
      });
    } else {
      controls.start({
        scale: 1 - (total - 1 - index) * 0.1,
        filter: `brightness(${1 - (total - 1 - index) * 0.1})`,
      });
    }
  }, [inView, controls, index, total]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[400px] sticky top-[100px] flex items-center justify-center" // Added top offset
      style={{ paddingTop: `${index * 20}px` }} // Dynamic padding for stacking effect
      animate={controls}
      initial={{
        scale: 1 - (total - 1 - index) * 0.1,
        filter: `brightness(${1 - (total - 1 - index) * 0.1})`,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-3xl h-full bg-black border-2 border-yellow-500 p-8 rounded-3xl shadow-lg flex flex-col justify-between"> {/* Added h-full for consistent height */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-500">{project.title}</h2>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="flex justify-between items-center">
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Source Code
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap justify-start items-end gap-2"> {/* Aligned to bottom-left */}
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-yellow-500 text-black px-2 py-1 rounded-md text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
