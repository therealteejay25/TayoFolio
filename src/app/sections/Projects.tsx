"use client";

import React, { useState } from "react";
import ProjectSlider from "../components/ProjectSlider";

export default function ProjectsSection() {
  // const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="flex flex-col justify-center items-center py-24">
      <div className="max-w-3xl text-center mb-24 px-4">
        <img src="projects.svg" className="h-10 mx-auto mb-6" alt="Projects" />
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

      {/* Slider Wrapper */}
      <div className="w-[180vw] -translate-x-[7rem] mx-auto">
        <ProjectSlider />
      </div>
    </section>
  );
}
