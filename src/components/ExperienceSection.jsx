'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { experiences } from '@/data/constants';
import Image from 'next/image';

const ExperienceSection = () => {
  return (
    <>
      {/* Experience Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Experience
          </motion.h2>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
            {experiences.map((job, index) => (
              <motion.div
                key={job.id}
                className="p-6 border rounded-lg shadow-md dark:border-gray-700 dark:shadow-gray-700 bg-gray-100 dark:bg-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <img src={job.img} alt="company image" width={50} height={50} className='rounded-full' />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{job.role}</h3>
                </div>
                <p className="text-blue-700 dark:text-gray-300 mt-2">{job.skills.join(', ')}</p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{job.company} | {job.date}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Education
          </motion.h2>
          <div className="space-y-8">
            {[{
              degree: 'Bachelor of Science in Computer Science',
              institution: 'XYZ University',
              duration: '2015 - 2019',
              description: 'Focused on software development, algorithms, and database management.'
            }].map((edu, index) => (
              <motion.div
                key={edu.institution}
                className="p-6 border rounded-lg shadow-md dark:border-gray-700 dark:shadow-gray-700 bg-gray-200 dark:bg-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <FaGraduationCap size={24} className="text-gray-600 dark:text-gray-300" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.institution} | {edu.duration}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ExperienceSection;
