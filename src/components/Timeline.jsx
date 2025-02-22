'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const timelineData = [
  {
    title: 'Full Stack Developer',
    company: 'Tech Solutions Inc.',
    date: '2021 - Present',
    description: 'Developed and maintained web applications using MERN stack.',
    icon: <FaBriefcase size={24} className="text-blue-500" />
  },
  {
    title: 'Frontend Developer',
    company: 'Web Creators Ltd.',
    date: '2019 - 2021',
    description: 'Designed and implemented responsive UI components.',
    icon: <FaBriefcase size={24} className="text-green-500" />
  },
  {
    title: 'B.Sc. in Computer Science',
    company: 'XYZ University',
    date: '2015 - 2019',
    description: 'Focused on software development, algorithms, and databases.',
    icon: <FaGraduationCap size={24} className="text-yellow-500" />
  }
];

export default function Timeline() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">My Timeline</h2>
        <div className="relative border-l-4 border-gray-300 dark:border-gray-700">
          {timelineData.map((event, index) => (
            <motion.div 
              key={index} 
              className="mb-8 ml-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="absolute -left-10 top-6 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-md border">
                {event.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{event.company} | {event.date}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
