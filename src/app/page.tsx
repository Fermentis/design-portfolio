'use client';

import Image from "next/image";
import TopNavigation from "@/app/ui/topnav";
import Button from "@/app/ui/button";
import { merriweather } from '@/app/ui/fonts';
//import Projects from "./ui/projects";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <TopNavigation />
      <main className="flex flex-col items-center">
        <div className="flex flex-col w-full justify-between pt-16 pb-16 pl-8 pr-8 md:p-48 text-center bg-sky-400 text-white text-xl space-y-2">
          <p>Hi, I'm</p>
          <p className={`${merriweather.className} text-5xl drop-shadow`}>Jeff Border</p>
          <p>I work at the intersection of business, design, and tech</p>
          <p>I'm a Product Designer and Strategist with over 10 years of design and development experience. My focus is UX/UI product design for mobile and web applications.</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-12 p-4 md:p-24 w-full lg:w-4/5">
          <div className="flex flex-col w-full md:grid md:grid-cols-2 items-center gap-12 lg:gap-0">
            <Image
              src="/project_fidyouth.png"
              width={275}
              height={350}
              className="m-auto md:ml-auto"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className="flex flex-col w-full">
              <h3 className="text-3xl font-bold">Fidelity Youth™ app</h3>
              <p className="text-gray-600">An app to help teens learn about, manage, and invest their own money.</p>
              <div className="flex">
                <Link
                  href="/projects/fidelityyouth"
                  className="items-center rounded-lg bg-sky-400 p-3 mt-5 mb-5 text-sm font-medium text-white transition-colors hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-sky-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                  View project
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:grid md:grid-cols-2 items-center gap-12 lg:gap-0">
            <Image
              src="/project_fff.png"
              width={275}
              height={400}
              className="m-auto md:ml-auto"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className="flex flex-col w-full">
            <h3 className="text-3xl font-bold">Fresh Food Farmacy</h3>
              <p className="text-gray-600">An app that helps patients manage food insecurity and diabetes, and a web app to manage patients and pantry.</p>
              <div className="flex">
                <Link
                  href="/projects/freshfoodfarmacy"
                  className="'flex items-center rounded-lg bg-sky-400 p-3 mt-5 mb-5 text-sm font-medium text-white transition-colors hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-sky-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'">
                  View project
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:grid md:grid-cols-2 items-center gap-12 lg:gap-0">
            <Image
              src="/project_cdm.png"
              width={275}
              height={166}
              className="m-auto md:ml-auto"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className="flex flex-col w-full">
            <h3 className="text-3xl font-bold">Chronic Disease Management Center</h3>
            <p className="text-gray-600">An expansion of previous apps that allows for managing multiple chronic diseases in the outpatient setting.</p>
              <div className="flex">
                <Link
                  href="/projects/cdm"
                  className="'flex items-center rounded-lg bg-sky-400 p-3 mt-5 mb-5 text-sm font-medium text-white transition-colors hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-sky-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'">
                  View project
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:grid md:grid-cols-2 items-center gap-12 lg:gap-0">
            <Image
              src="/project_edge.png"
              width={275}
              height={124}
              className="m-auto md:ml-auto"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className="flex flex-col w-full">
            <h3 className="text-3xl font-bold">Asthma Management Suite</h3>
            <p className="text-gray-600">An ecosystem of applications to manage asthma.</p>
              <div className="flex">
                <Link
                  href="/projects/edge"
                  className="'flex items-center rounded-lg bg-sky-400 p-3 mt-5 mb-5 text-sm font-medium text-white transition-colors hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-sky-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'">
                  View project
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:grid md:grid-cols-2 items-center gap-12 lg:gap-0">
            <Image
              src="/project_concepts.png"
              width={275}
              height={190}
              className="m-auto md:ml-auto"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className="flex flex-col w-full">
            <h3 className="text-3xl font-bold">Concept Work</h3>
            <p className="text-gray-600">A few concept pieces I've worked on to help round out my skillset.</p>
              <div className="flex">
                <Link
                  href="/projects/concepts"
                  className="'flex items-center rounded-lg bg-sky-400 p-3 mt-5 mb-5 text-sm font-medium text-white transition-colors hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-sky-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'">
                  View project
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
          <h3 className="text-3xl font-bold">About</h3>
          <p className="text-gray-600">In addition to being a designer, I'm a husband and dad of two daughters, love to cook, home brew, smoked bbq enthusiast, cyclist, and technologist. I am a curious person and like to learn why things work and why people do the things they do. I also enjoy gaming including VR on the Quest and have a background as a front-end developer and instructional designer and technologist.</p>
          </div>
          <div className="flex flex-col w-full">
          <h3 className="text-3xl font-bold">Get in touch!</h3>
            <a className="text-sky-400 underline" href="mailto:jeffrey.border@gmail.com">jeffrey.border@gmail.com</a>
          </div>
        </div>
      </main>
    </div>
  );
}
