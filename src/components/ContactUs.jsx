'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Contact Us</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
            <FaEnvelope size={30} className="text-blue-500" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">contact@example.com</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
            <FaPhone size={30} className="text-green-500" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">+123 456 7890</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
            <FaMapMarkerAlt size={30} className="text-red-500" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">Location</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">123 Main St, City, Country</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
