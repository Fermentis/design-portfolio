'use client';

import Image from "next/image";
import TopNavigation from "@/app/ui/topnav";
import Link from 'next/link';
import {
  PaintBrushIcon,
  BriefcaseIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div>
      <TopNavigation />
      {/* HERO SECTION: full width background, aligned content */}
      <div
        id="hero"
        className="w-full bg-gradient-to-b from-[#4bbea3] to-[#45a033] py-16 lg:py-32 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center px-8 sm:px-12 md:px-16 lg:px-32 xl:px-48">
          <div className="flex flex-col md:space-y-4 space-y-1 font-medium">
            <p className="text-white md:text-7xl text-5xl font-extrabold font-['Figtree']">Jeff Border</p>
            <p className="md:text-2xl text-white lg:leading-7"><span className="text-[#264e19] font-bold">Product Designer</span></p>
            <p className="text-white md:text-2xl mb-4">Combining 10+ years design experience, developer background, and business acumen to ship user experiences in complex industries</p>
            <p className="text-[#bdf0d1] text-sm md:text-base font-bold">Finance • Healthcare • Insurance • Education</p>
          </div>
        </div>
      </div>
      {/* MAIN CONTENT: constrained width */}
      <main className="flex flex-col justify-center max-w-7xl mx-auto w-full">
        <div className="flex flex-col space-y-12 lg:space-y-24 px-8 sm:px-12 md:px-16 lg:px-32 xl:px-48 py-16 md:py-24 justify-center">
          <h3 className="flex flex-row text-xl md:text-3xl font-bold text-neutral-600">Work I've done as a designer and leader</h3>
          {/* Project grid with consistent breakpoints */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center">
            <Link
              href="/projects/fidelityyouth"
              className="flex flex-row w-full max-w-[475px] justify-between items-center space-x-6 pt-6 px-6 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:opacity-80 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
              style={{
                borderRadius: '16px',
                border: '2px solid rgba(255, 255, 255, 0.80)',
                background: 'linear-gradient(107deg, #37174C 18.51%, #286724 75.74%, #5880BE 98.32%)',
                boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.12)'
              }}
            >
              <div className="flex flex-col space-y-6">
                <Image
                  src="/fidelity_logo.svg"
                  width={40}
                  height={40}
                  alt="Fidelity logo"
                />
                <div>
                  <p className="text-xl font-bold">Fidelity Investments</p>
                  <p className="text-neutral-100 font-semibold pb-4">Fidelity Youth™ app</p>
                </div>
              </div>
              <Image
                src="/fidyouth_main.png"
                width={137}
                height={204}
                alt="Fidelity Youth screenshot"
                className="flex flex-col h-[204px]"
              />
            </Link>

            <Link
              href="/projects/freshfoodfarmacy"
              className="flex flex-row w-full max-w-[475px] justify-between items-center space-x-6 pt-6 px-6 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:opacity-80 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
              style={{
                borderRadius: '16px',
                border: '2px solid rgba(255, 255, 255, 0.80)',
                background: 'linear-gradient(180deg, #4B963E 0%, #5EB94E 100%)',
                boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.12)'
              }}
            >
              <div className="flex flex-col space-y-6">
                <Image
                  src="/geisinger_logo_transparent_bg.svg"
                  width={40}
                  height={40}
                  alt="Geisinger logo"
                />
                <div>
                  <p className="text-xl font-bold">Geisinger Health System</p>
                  <p className="text-neutral-100 font-semibold pb-4">Food insecurity app</p>
                </div>
              </div>
              <Image
                src="/fff_main.png"
                width={137}
                height={204}
                alt="Fresh Food Farmacy screenshot"
                className="flex flex-col h-[204px]"
              />
            </Link>
            <Link
              href="/projects/asthma"
              className="flex flex-row w-full max-w-[475px] justify-between items-center space-x-6 pt-6 px-6 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:opacity-80 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
              style={{
                borderRadius: '16px',
                border: '2px solid rgba(255, 255, 255, 0.80)',
                background: 'linear-gradient(180deg, #0069A2 0%, #018CD8 100%)',
                boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.12)'
              }}
            >
              <div className="flex flex-col space-y-6">
                <Image
                  src="/geisinger_logo_transparent_bg.svg"
                  width={40}
                  height={40}
                  alt="Geisinger logo"
                />
                <div>
                  <p className="text-xl font-bold">Geisinger Health System</p>
                  <p className="text-neutral-100 font-semibold pb-4">Asthma management suite of apps</p>
                </div>
              </div>
              <Image
                src="/project_edge.png"
                width={164}
                height={100}
                alt="Asthma management screenshot"
                className="flex flex-col h-[100px]"
              />
            </Link>
            <Link
              href="/projects/cdm"
              className="flex flex-row w-full max-w-[475px] justify-between items-center space-x-6 pt-6 px-6 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:opacity-80 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
              style={{
                borderRadius: '16px',
                border: '2px solid rgba(255, 255, 255, 0.80)',
                background: 'linear-gradient(180deg, #4F469E 0%, #7366E6 100%)',
                boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.12)'
              }}
            >
              <div className="flex flex-col space-y-6">
                <Image
                  src="/geisinger_logo_transparent_bg.svg"
                  width={40}
                  height={40}
                  alt="Geisinger logo"
                />
                <div>
                  <p className="text-xl font-bold">Geisinger Health System</p>
                  <p className="text-neutral-100 font-semibold pb-4">Chronic disease management</p>
                </div>
              </div>
              <Image
                src="/cdm_main.png"
                width={137}
                height={82}
                alt="Chronic disease management screenshot"
                className="flex flex-col h-[82px]"
              />
            </Link>

          </div>
          <h3 className="text-xl md:text-3xl font-bold text-neutral-600">I've worked for and learn about a variety of industries and topics, which helps make connections and design for complex systems.</h3>
          <div className="flex flex-col w-full">
            <h3 className="text-xl md:text-3xl font-bold text-neutral-600 mb-6">What I'm working on</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#41AD7B] text-white px-3 py-1 rounded-full text-sm font-semibold">Vibe coding</span>
              <span className="bg-[#41AD7B] text-white px-3 py-1 rounded-full text-sm font-semibold">Figma's MCP</span>
              <span className="bg-[#41AD7B] text-white px-3 py-1 rounded-full text-sm font-semibold">Automations</span>
              <span className="bg-[#41AD7B] text-white px-3 py-1 rounded-full text-sm font-semibold">Python</span>
              <span className="bg-[#41AD7B] text-white px-3 py-1 rounded-full text-sm font-semibold">Storybook</span>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-xl md:text-3xl font-bold text-neutral-600 mb-3">About me</h3>
            <p className="md:text-2xl text-neutral-500 font-medium mb-4">I’m a curious designer who loves digging into how things work, and why people do what they do. My background spans front-end development, instructional design, and emerging tech, which gives me a well-rounded perspective on problem-solving. Outside of design, I’m into gaming and VR, smoked BBQ, fermentation projects, cycling, and experimenting in the kitchen.</p>
            <p className="md:text-2xl text-neutral-500 font-medium">I developed my portfolio using NextJS/React, Tailwind, and a little bit of vibe coding  using Cursor to round things out.</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-xl md:text-3xl font-bold text-neutral-600 mb-6">Get in touch!</h3>
            <div className="flex flex-row gap-4">
              <a 
                className="relative inline-flex justify-center items-center rounded-[100px] px-4 py-3 text-base font-bold text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:opacity-80 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 w-fit"
                href="mailto:jeffrey.border@gmail.com"
                style={{
                  border: '0.5px solid #4AC78D',
                  background: 'linear-gradient(324deg, #4CCC91 14.72%, #3A9D6F 76.36%)',
                  boxShadow: '0 4px 8px 0 rgba(65, 173, 123, 0.40)'
                }}>
                Email Jeff
              </a>
              <a 
                className="relative inline-flex justify-center items-center rounded-[100px] px-4 py-3 text-base font-bold text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:opacity-80 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 w-fit"
                href="https://www.linkedin.com/in/jeff-border-0381483/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '0.5px solid #4AC78D',
                  background: 'linear-gradient(324deg, #4CCC91 14.72%, #3A9D6F 76.36%)',
                  boxShadow: '0 4px 8px 0 rgba(65, 173, 123, 0.40)'
                }}>
                <Image
                  src="/LinkedIn.svg"
                  width={20}
                  height={20}
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
