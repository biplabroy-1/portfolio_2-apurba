import React from 'react';
import { motion } from 'framer-motion';

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
    title: 'Weather App',
    description: 'A weather forecasting app using OpenWeather API.',
    github: 'https://github.com/username/weather-app',
    liveDemo: 'https://weather-app-demo.com',
    technologies: ['React', 'API Integration', 'Bootstrap'],
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
  return (
    <div className="p-6 bg-transparent">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-500">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-yellow-400 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div>
              <h2 className="text-xl font-bold text-black mb-2">{project.title}</h2>
              <p className="text-black mb-4">{project.description}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="bg-black text-yellow-400 text-sm px-2 py-1 rounded">
                {project.technologies.join(', ')}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => window.open(project.github, '_blank')}
                  className="bg-black text-yellow-400 font-semibold px-3 py-1 rounded hover:bg-yellow-500 hover:text-black transition"
                >
                  GitHub
                </button>
                <button
                  onClick={() => window.open(project.liveDemo, '_blank')}
                  className="bg-black text-yellow-400 font-semibold px-3 py-1 rounded hover:bg-yellow-500 hover:text-black transition"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
