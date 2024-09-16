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
            <div className="flex flex-row justify-items-start items-center text-acorn-800">
                <a href="../" className="font-semibold hidden sm:flex">Jeff Border</a>
                <a href="../" className="font-semibold visible sm:hidden">JB</a>
            </div>
            <div className='flex justify-end items-center space-x-4'>
                <nav className='flex space-x-4'>
                    <a href="../" className="hover:text-acorn-800 font-semibold text-sm">Portfolio</a>
                    <a href="/resume" className="hover:text-acorn-800 font-semibold text-sm">Resume</a>
                </nav>
                <Link
                    href="mailto:jeffrey.border@gmail.com"
                    className="'flex justify-center items-center rounded-full bg-acorn-500 px-2 md:px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-acorn-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:bg-acorn-800 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'">
                    Get in touch
                </Link>
            </div>
        </header>
    );
}

