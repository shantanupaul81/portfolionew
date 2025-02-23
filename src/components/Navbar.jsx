'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { AiFillOpenAI } from "react-icons/ai";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="backdrop-blur-sm shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className='flex items-center justify-center gap-1'>
                        <AiFillOpenAI size={40}/>
                        <p className='uppercase font-bold'>Portfolio</p>
                            {/* <span className="text-xl font-bold text-gray-800 cursor-pointer uppercase" style={{ fontFamily: "Poppins", fontWeight: 400 }}>Shantanu Paul</span> */}
                        </Link>
                    </div>


                     <div className="hidden md:flex space-x-6 items-center" style={{ fontFamily: "Poppins", fontWeight: 400 }}>
                     <ThemeToggle/>
                        {/* <Link href="#About" className="block py-2 text-gray-700 hover:text-gray-900">About</Link>
                        <Link href="#Education" className="block py-2 text-gray-700 hover:text-gray-900">Education</Link>
                        <Link href="#Experiance" className="block py-2 text-gray-700 hover:text-gray-900">Experiance</Link>
                        <Link href="#Contact" className="block py-2 text-gray-700 hover:text-gray-900">Contact</Link> */}
                    </div> 
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-gray-900">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} backdrop-blur-sm shadow-md p-4`} style={{ fontFamily: "Poppins", fontWeight: 400 }}>
                {/* <Link href="#About" className="block py-2 text-gray-700 hover:text-gray-900">About</Link>
                <Link href="#Education" className="block py-2 text-gray-700 hover:text-gray-900">Education</Link>
                <Link href="#Experiance" className="block py-2 text-gray-700 hover:text-gray-900">Experiance</Link>
                <Link href="#Contact" className="block py-2 text-gray-700 hover:text-gray-900">Contact</Link> */}
                <ThemeToggle/>
            </div>
        </nav>
    );
}
