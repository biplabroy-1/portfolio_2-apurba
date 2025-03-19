import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import icons

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my projects and skills.',
    github: 'https://github.com/username/portfolio',
    liveDemo: 'https://portfolio-demo.com',
    technologies: ['React', 'CSS', 'Framer Motion'],
  },
  {
    title: 'E-commerce App',
    description: 'A fully functional e-commerce application.',
    github: 'https://github.com/username/ecommerce-app',
    liveDemo: 'https://ecommerce-demo.com',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application with WebSocket support.',
    github: 'https://github.com/username/chat-app',
    liveDemo: 'https://chat-app-demo.com',
    technologies: ['React', 'Socket.IO', 'Express'],
  },
  {
    title: 'Task Manager',
    description: 'A task management app to organize your daily activities.',
    github: 'https://github.com/username/task-manager',
    liveDemo: 'https://task-manager-demo.com',
    technologies: ['React', 'Redux', 'Tailwind CSS'],
  },
  {
    title: 'Blog Platform',
    description: 'A blogging platform to create and share articles.',
    github: 'https://github.com/username/blog-platform',
    liveDemo: 'https://blog-platform-demo.com',
    technologies: ['Next.js', 'GraphQL', 'TypeScript'],
  },
];

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState(null); // Track hovered project

  return (
    <div className="p-6 min-h-screen flex flex-col justify-evenly items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-yellow-500 mb-6 text-center">
        Projects
      </h1>

      {/* Projects Grid */}
      <div
        className="grid gap-6"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // Three columns
          gridAutoRows: 'minmax(125px, auto)', // Ensure consistent row heights
        }}
      >
        {projects.map((project, index) => {
          const isHovered = hoverIndex === index;

          return (
            <motion.div
              key={index}
              layout
              transition={{ layout: { duration: 0.5, type: 'spring' } }}
              className={`shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex ${isHovered ? 'flex-col justify-between' : 'justify-center items-center'
                } ${isHovered ? 'border-4 border-yellow-500 bg-black text-yellow-500' : 'bg-yellow-500 text-black'}`}
              onMouseEnter={() => setHoverIndex(index)} // Set hover index on mouse enter
              onMouseLeave={() => setHoverIndex(null)} // Reset hover index on mouse leave
              style={{
                gridColumn: isHovered ? 'span 2' : 'auto', // Open card spans 2 columns
                gridRow: isHovered ? 'span 2' : 'auto', // Open card spans 2 rows
                minHeight: '125px', // Increased height for small cards
                minWidth: '250px', // Increased width for small cards
              }}
            >
              <motion.h2
                layout="position"
                className={`text-xl font-bold ${!isHovered ? 'text-center' : 'mb-4'}`} // Center heading for smaller cards
              >
                {project.title}
              </motion.h2>
              {isHovered && (
                <motion.div
                  className="flex flex-col justify-between h-full"
                >
                  <motion.p className="mb-4">{project.description}</motion.p>
                  <div className="flex justify-between items-end mt-auto">
                    {/* Technologies aligned to bottom-left */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-yellow-500 text-black text-sm px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Buttons aligned to bottom-right */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold px-4 py-2 rounded hover:bg-gray-800 transition ${isHovered ? 'bg-yellow-500 text-black' : 'bg-black text-yellow-500'
                          }`}
                      >
                        <FaGithub size={20} /> {/* GitHub icon */}
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold px-4 py-2 rounded hover:bg-gray-800 transition ${isHovered ? 'bg-yellow-500 text-black' : 'bg-black text-yellow-500'
                          }`}
                      >
                        <FaExternalLinkAlt size={20} /> {/* Live Demo icon */}
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
