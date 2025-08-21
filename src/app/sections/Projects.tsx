"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProjectSlider from "../components/ProjectSlider";

const projects = [
  {
    title: "Studi",
    status: "in-progress",
    description:
      "A platform for collaborative study sessions with real-time interaction.",
    image: "/Frame 392.png",
    live: "https://studi-live-link.com",
    github: "https://github.com/yourusername/studi",
  },
  {
    title: "Chat App",
    status: "in-progress",
    description:
      "Seamless messaging with video and file sharing built for speed.",
    image: "/Hero Section.png",
    live: "https://chatapp-live-link.com",
    github: "https://github.com/yourusername/chatapp",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="px-8 flex flex-col justify-center items-center py-24 bg-white">
    {/* <h3 className='bg-gradient-to-b to-accenttwo bg-clip-text text-transparent from-accent font-medium flex items-center justify-center gap-2 py-8'><img src="logo.svg" className='h-4' alt="" />PROJECTS</h3> */}
    <div className="max-w-3xl text-center mb-24">
        <img src="projects.svg" className="h-10 mx-auto mb-6" alt="About" />
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
        Work That Speaks...
        </h1>
        <h2 className="text-4xl md:text-5xl font-medium mt-2">
        A collection of ideas turned real...
        </h2>
        <p className="mt-6 text-black/60 text-lg max-w-2xl mx-auto">
        Every project is a mix of design, code, and creativity — built to solve problems and leave an impression.
        </p>
      </div>
      <ProjectSlider />
    </section>
  );
}
