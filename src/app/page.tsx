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
        className="w-full bg-gradient-to-b from-[#4bbea3] to-[#45a033] py-16 lg:py-32"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-y-8 md:gap-y-16 lg:gap-x-16 justify-center items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col md:space-y-4 space-y-1 font-medium lg:w-3/5">
            <p className="text-white md:text-7xl text-5xl font-extrabold font-['Figtree']">Jeff Border</p>
            <p className="md:text-2xl text-white lg:leading-7"><span className="text-[#264e19] font-bold">Product Designer</span> and strategist shipping experiences in complex industries</p>
            <p className="text-[#bdf0d1] text-sm md:text-base font-bold">Finance • Healthcare • Insurance • Education</p>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-8 font-medium w-full lg:w-2/5">
            <div className="flex flex-row">
              <PaintBrushIcon className="size-8 text-acorn-800" />
              <div className="">
                <p className="text-white md:text-2xl font-bold pl-2">Design</p>
                <p className="text-white/90 md:text-2xl pl-2">Ms in Design & 10 yrs experience</p>
              </div>
            </div>
            <div className="flex flex-row">
              <BriefcaseIcon className="size-8 text-acorn-800" />
              <div className="">
                <p className="text-white md:text-2xl font-bold pl-2">Business</p>
                <p className="text-white/90 md:text-2xl pl-2">Bs in Business Admin</p>
              </div>
            </div>
            <div className="flex flex-row">
              <CodeBracketIcon className="size-8 text-acorn-800" />
              <div className="">
                <p className="text-white md:text-2xl font-bold pl-2">Technology</p>
                <p className="text-white/90 md:text-2xl pl-2">Previous Front End Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MAIN CONTENT: constrained width */}
      <main className="flex flex-col justify-center max-w-7xl mx-auto w-full">
        <div className="flex flex-col space-y-12 lg:space-y-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 justify-center">
          <h3 className="flex flex-row text-xl md:text-3xl font-bold text-neutral-600">Work I've done as a designer and leader</h3>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-6">
              <Link
                href="/projects/fidelityyouth"
                className="flex flex-row w-[360px] md:w-[475px] md:h-[228px] justify-between items-end md:items-center rounded-lg bg-neutral-100 space-x-6 pt-6 pr-6 pl-6 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:bg-acorn-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                <div className="flex flex-col space-y-8">
                  <p className="text-l font-bold">2023</p>
                  <Image
                    src="/fidelity_logo.svg"
                    width={40}
                    height={40}
                    alt="Fidelity logo"
                  />
                  <div>
                    <p className="text-l font-bold">Fidelity Investments</p>
                    <p className="text-gray-600 text-neutral-500 font-semibold pb-4">Fidelity Youth™ app</p>
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
                className="flex flex-row w-[360px] md:w-[475px] md:h-[228px] justify-between items-end md:items-center rounded-lg bg-neutral-100 space-x-6 pt-6 px-6 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:bg-acorn-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                <div className="flex flex-col space-y-8">
                  <p className="text-l font-bold">2021</p>
                  <Image
                    src="/geisinger_logo.svg"
                    width={40}
                    height={40}
                    alt="Geisinger logo"
                  />
                  <div>
                    <p className="text-l font-bold">Geisinger Health System</p>
                    <p className="text-gray-600 text-neutral-500 font-semibold pb-4">Food insecurity app</p>
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
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-x-6 gap-y-6">
              <Link
                href="/projects/asthma"
                className="flex flex-row w-[360px] md:w-[475px] md:h-[228px] justify-between items-center rounded-lg bg-neutral-100 space-x-6 pt-6 pr-6 pl-6 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:bg-acorn-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                <div className="flex flex-col space-y-8">
                  <p className="text-l font-bold">2018</p>
                  <Image
                    src="/geisinger_logo.svg"
                    width={40}
                    height={40}
                    alt="Geisinger logo"
                  />
                  <div>
                    <p className="text-l font-bold">Geisinger Health System</p>
                    <p className="text-gray-600 text-neutral-500 font-semibold pb-4">Asthma management suite of apps</p>
                  </div>
                </div>
                <Image
                  src="/project_edge.png"
                  width={137}
                  height={82}
                  alt="Asthma management screenshot"
                  className="flex flex-col h-[82px]"
                />
              </Link>
              <Link
                href="/projects/cdm"
                className="flex flex-row w-[360px] md:w-[475px] md:h-[228px] justify-between items-center rounded-lg bg-neutral-100 space-x-6 pt-6 pr-6 pl-6 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acorn-500 active:bg-acorn-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                <div className="flex flex-col space-y-8">
                  <p className="text-l font-bold">2020</p>
                  <Image
                    src="/geisinger_logo.svg"
                    width={40}
                    height={40}
                    alt="Geisinger logo"
                  />
                  <div>
                    <p className="text-l font-bold">Geisinger Health System</p>
                    <p className="text-gray-600 text-neutral-500 font-semibold pb-4">Chronic disease management</p>
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
          </div>
          <h3 className="text-xl md:text-3xl font-bold text-neutral-600">I've worked for and learn about a variety of industries and topics, which helps make connections and design for complex systems.</h3>
          <div className="flex flex-col w-full">
            <h3 className="text-xl md:text-3xl font-bold text-neutral-600">About me</h3>
            <p className="md:text-2xl text-neutral-500 font-medium">I’m a curious designer who loves digging into how things work — and why people do what they do. My background spans front-end development, instructional design, and emerging tech, which gives me a well-rounded perspective on problem-solving. Outside of design, I’m into gaming and VR, smoked BBQ, fermentation projects, cycling, and experimenting in the kitchen.</p>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-xl md:text-3xl font-bold text-neutral-600">Get in touch!</h3>
            <a className="text-sky-400 underline" href="mailto:jeffrey.border@gmail.com">jeffrey.border@gmail.com</a>
          </div>
        </div>
      </main>
    </div>
  );
}
