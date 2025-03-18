import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Type } from 'lucide-react';

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
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div
      className="grid gap-6 p-6"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Three columns
        gridTemplateRows: 'auto auto', // Two rows
        gridTemplateAreas: `
          "project1 project2 project3"
          "project4 . project5"
        `, // Define grid areas
      }}
    >
      {projects.map((project, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            layout
            transition={{ layout: { duration: 0.5, type: 'spring' } }}
            className={`bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
              isOpen ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setOpenIndex(isOpen ? null : index)}
            style={{
              gridArea: `project${index + 1}`, // Assign grid area dynamically
              gridColumn: isOpen ? 'span 2' : 'auto', // Open card spans 2 columns
              gridRow: isOpen ? 'span 2' : 'auto', // Open card spans 2 rows
            }}
          >
            <motion.h2 layout="position" className="text-xl font-bold text-gray-800 mb-4">
              {project.title}
            </motion.h2>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <motion.p className="text-gray-600 mb-4">{project.description}</motion.p>
                <motion.div className="flex justify-between items-center">
                  <div className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                    {project.technologies.join(', ')}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-semibold hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects;
