'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const achievements = [
  {
    title: 'Best Developer Award',
    year: '2023',
    description: 'Recognized as the best developer of the year for outstanding contributions to software development.',
    icon: <FaTrophy size={30} className="text-yellow-500" />
  },
  {
    title: 'Hackathon Winner',
    year: '2022',
    description: 'Won first place in a nationwide hackathon for building an innovative web application.',
    icon: <FaMedal size={30} className="text-blue-500" />
  },
  {
    title: 'Top Performer in Coding Competition',
    year: '2021',
    description: 'Achieved top rank in an international coding competition, showcasing problem-solving skills.',
    icon: <FaStar size={30} className="text-red-500" />
  }
];

export default function Achievements() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">My Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{achievement.year}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
