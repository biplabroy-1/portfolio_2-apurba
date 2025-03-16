import React from "react";

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
      title: "Task Manager",
      description: "A task management tool to organize and prioritize tasks effectively.",
      source: "https://github.com/apurba-pal/task-manager",
      link: "https://task-manager.com",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Blog Platform",
      description: "A blogging platform where users can create, edit, and share blog posts.",
      source: "https://github.com/apurba-pal/blog-platform",
      link: "https://blog-platform.com",
      technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    },
    {
      title: "Fitness Tracker",
      description: "An app to track fitness activities and monitor progress over time.",
      source: "https://github.com/apurba-pal/fitness-tracker",
      link: "https://fitness-tracker.com",
      technologies: ["React Native", "Redux", "SQLite"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-yellow-500 p-10">
      <div className="sticky top-0 bg-black z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      </div>
      <div className="relative space-y-8 pt-20"> {/* Added pt-20 for padding below the heading */}
        {projects.map((project, index) => (
          <div
            key={index}
            className={`min-h-screen ${
              index === projects.length - 1 ? "relative" : "sticky"
            } top-20 bg-black border-2 border-yellow-500 p-5 rounded-md shadow-lg`}
          >
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Source Code
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Technologies Used:</h3>
              <ul className="list-disc list-inside">
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
