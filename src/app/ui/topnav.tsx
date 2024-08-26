'use client';

import { useState } from 'react';
import Link from 'next/link';
import { merriweather } from '@/app/ui/fonts';

export default function TopNavigation() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-neutral-0 text-black px-4 py-2 flex justify-between items-center pl-4 pr-4 md:pl-32 md:pr-32">
            <div className="flex items-center">
                <h1 className={`${merriweather.className} text-xl font-bold`}>Jeff Border</h1>
            </div>
            <div className='flex justify-end items-center space-x-4'>
                <nav className='flex space-x-4'>
                    <a href="../" className="hover:text-sky-400">Portfolio</a>
                    <a href="/resume" className="hover:text-sky-400">Resume</a>
                </nav>
                <Link
                  href="mailto:jeffrey.border@gmail.com"
                  className="'flex items-center rounded-lg bg-sky-400 p-3 text-sm font-medium text-white transition-colors hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-sky-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'">
                    Get in touch
                  </Link>
            </div>
        </header>
    );
}

