'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TopNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-neutral-0 text-black flex justify-between items-center py-2 max-w-7xl mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-32 xl:px-48">
            <div className="flex flex-row justify-items-start items-center text-acorn-800">
                <a href="../" className="font-semibold hidden sm:flex">Jeff Border</a>
                <a href="../" className="font-semibold visible sm:hidden">JB</a>
            </div>
            <div className='flex justify-end items-center space-x-4'>
                <nav className='flex space-x-4'>
                    <a href="../" className="hover:text-acorn-800 font-semibold text-sm">Portfolio</a>
                    <a href="/JeffBorderResume.pdf" className="hover:text-acorn-800 font-semibold text-sm">Resume</a>
                </nav>
                <Link
                    href="mailto:jeffrey.border@gmail.com"
                    className="relative flex justify-center items-center rounded-[100px] px-4 py-3 text-base font-bold text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:opacity-80 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                    style={{
                        border: '0.5px solid #4AC78D',
                        background: 'linear-gradient(324deg, #4CCC91 14.72%, #3A9D6F 76.36%)',
                        boxShadow: '0 4px 8px 0 rgba(65, 173, 123, 0.40)'
                    }}>
                    Get in touch
                </Link>
            </div>
        </header>
    );
}

