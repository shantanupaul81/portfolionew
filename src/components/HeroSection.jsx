'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const roles = ['Software Engineer', 'MERN Stack Developer', 'WordPress Developer'];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 max-w-7xl mx-auto py-20">
      {/* Left Side Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Shantanu Paul
        </h1>

        <div className="h-10 overflow-hidden mt-2">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[currentRole]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl text-blue-500 font-semibold"
            >
              {roles[currentRole]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Passionate about building scalable web applications and creating delightful user experiences.
        </p>
        <a href="/resume.pdf" download>
          <Button className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700">
            Download Resume
          </Button>
        </a>
      </motion.div>
      
      {/* Right Side Image */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <Image 
          src="/shantanu.png" 
          alt="shantanu paul" 
          width={400} 
          height={400} 
          className="rounded-full"
        />
      </motion.div>
    </section>
  );
}
