'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase, FaGitAlt, 
  FaDocker, FaAws, FaLinux, FaSlack, FaUsers, FaLightbulb, FaComments 
} from 'react-icons/fa';

export default function SkillSections() {
  return (
    <>
      {/* Skills Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            As a MERN stack developer, I specialize in building full-stack web applications using modern technologies.
          </p>
          
          {/* Frontend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Frontend Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 text-gray-800 dark:text-white">
              <div className="flex flex-col items-center">
                <FaReact size={50} className="text-blue-500" />
                <span className="mt-2">React</span>
              </div>
              <div className="flex flex-col items-center">
                <FaHtml5 size={50} className="text-orange-500" />
                <span className="mt-2">HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt size={50} className="text-blue-600" />
                <span className="mt-2">CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJs size={50} className="text-yellow-400" />
                <span className="mt-2">JavaScript</span>
              </div>
            </div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Backend Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 text-gray-800 dark:text-white">
              <div className="flex flex-col items-center">
                <FaNodeJs size={50} className="text-green-500" />
                <span className="mt-2">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <FaDatabase size={50} className="text-yellow-500" />
                <span className="mt-2">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <FaGitAlt size={50} className="text-red-500" />
                <span className="mt-2">Git</span>
              </div>
            </div>
          </div>

          {/* DevOps Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">DevOps Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 text-gray-800 dark:text-white">
              <div className="flex flex-col items-center">
                <FaDocker size={50} className="text-blue-500" />
                <span className="mt-2">Docker</span>
              </div>
              <div className="flex flex-col items-center">
                <FaAws size={50} className="text-orange-500" />
                <span className="mt-2">AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLinux size={50} className="text-gray-600" />
                <span className="mt-2">Linux</span>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 text-gray-800 dark:text-white">
              <div className="flex flex-col items-center">
                <FaUsers size={50} className="text-purple-500" />
                <span className="mt-2">Teamwork</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLightbulb size={50} className="text-yellow-500" />
                <span className="mt-2">Problem-Solving</span>
              </div>
              <div className="flex flex-col items-center">
                <FaComments size={50} className="text-blue-400" />
                <span className="mt-2">Communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
