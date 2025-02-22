'use client';

import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
