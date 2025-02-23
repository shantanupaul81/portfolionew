'use client';

import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Bio } from '@/data/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Shantanu Paul. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href={Bio.facebook} className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href={Bio.twitter} className="text-gray-400 hover:text-white transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href={Bio.linkedin} className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href={Bio.github} className="text-gray-400 hover:text-white transition duration-300">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
