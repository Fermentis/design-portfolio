import { useState } from 'react';
import Button from './button';
import Image from 'next/image';
import { merriweather } from '@/app/ui/fonts';
import { Project } from '../lib/definitions'; 

export default function Projects({
    projects,
  }: {
    projects: Project[];
  }) {
    return (
      <div>
      {/* {projects?.map((project) => (
        <div className="bg-neutral-0 text-black px-4 py-2 flex justify-between items-center">
            <Image src="" alt="" />
            <h5>{project.name}</h5>
            <p>{project.description}</p>
        </div>
      ))} */}
        </div>
    );
}