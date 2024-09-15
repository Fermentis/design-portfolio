'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TopNavigation() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-neutral-0 text-black flex justify-between items-center py-2 pl-4 pr-4 md:px-36 lg:px-64">
            <div className="flex items-center">
                <h1 className="font-semibold">Jeff Border</h1>
            </div>
            <div className='flex justify-end items-center space-x-4'>
                <nav className='flex space-x-4'>
                    <a href="../" className="hover:text-acorn-800 font-semibold">Portfolio</a>
                    <a href="/resume" className="hover:text-acorn-800 font-semibold">Resume</a>
                </nav>
                <Link
                  href="mailto:jeffrey.border@gmail.com"
                  className="'flex items-center rounded-full bg-acorn-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-acorn-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-sky-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'">
                    Get in touch
                  </Link>
            </div>
        </header>
    );
}

