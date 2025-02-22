'use client';

import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    year: '2023',
    description: 'Developed a full-stack e-commerce platform using the MERN stack with advanced features like payment integration and user authentication.',
    icon: <FaLaptopCode size={30} className="text-blue-500" />
  },
  {
    title: 'Portfolio Website',
    year: '2022',
    description: 'Built a personal portfolio website showcasing skills, projects, and achievements using Next.js and Tailwind CSS.',
    icon: <FaCode size={30} className="text-green-500" />
  },
  {
    title: 'Project Management Tool',
    year: '2021',
    description: 'Created a project management tool with task tracking, team collaboration, and analytics using React and Firebase.',
    icon: <FaProjectDiagram size={30} className="text-red-500" />
  }
];

export default function Projects() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.year}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
