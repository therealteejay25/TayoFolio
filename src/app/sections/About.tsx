"use client";

import React, { useState } from "react";

const sections = [
  {
    title: "Code.",
    number: "01",
    description:
      "Transforming ideas into clean, efficient, and maintainable code that solves real problems.",
  },
  {
    title: "Design.",
    number: "02",
    description:
      "Crafting beautiful, intuitive interfaces that create seamless user experiences.",
  },
  {
    title: "Build.",
    number: "03",
    description:
      "Bringing designs to life with precision, performance, and attention to detail.",
  },
  {
    title: "Repeat.",
    number: "04",
    description:
      "Iterating quickly, refining continuously, and improving with every loop.",
  },
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [fadeKey, setFadeKey] = useState(0);

  const displayIndex = hoverIndex !== null ? hoverIndex : activeIndex;

  const handleSwitch = (index: number, lock = false) => {
    setFadeKey((prev) => prev + 1);
    if (lock) setActiveIndex(index);
    else setHoverIndex(index);
  };

  return (
    <section className="min-h-screen bg-background text-black px-6 md:px-12 lg:px-24 py-32 flex flex-col items-center">
      {/* Top Intro */}
      <div className="max-w-3xl text-center mb-24">
        <img src="about.svg" className="h-10 mx-auto mb-6" alt="About" />
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Creator of Works That Click...
        </h1>
        <h2 className="text-4xl md:text-5xl font-medium mt-2">
          Experiences That Stick...
        </h2>
        <p className="mt-6 text-black/60 text-lg max-w-2xl mx-auto">
          I thrive on challenges that push me to think outside the box and
          deliver results that not only impress but perform.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
        {/* LEFT - Active section details */}
        <div
          key={fadeKey}
          className="transition-all duration-500 ease-out animate-fadeIn"
        >
          <p className="text-transparent bg-gradient-to-r from-gradientone via-gradienttwo to-gradientthree bg-clip-text font-semibold text-3xl">
            {sections[displayIndex].number}
          </p>
          <p className="text-2xl font-semibold mt-1">
            {sections[displayIndex].title}
          </p>
          <h2 className="text-lg text-black/70 font-normal leading-relaxed mt-6 max-w-md">
            {sections[displayIndex].description}
          </h2>
        </div>

        {/* RIGHT - Navigation */}
        <div className="flex flex-col space-y-8">
          {sections.map((sec, i) => (
            <div
              key={sec.number}
              className={`cursor-pointer flex items-center justify-between border-b pb-4 border-black/10 text-3xl md:text-6xl my-6 font-bold transition-all duration-300 
              ${
                displayIndex === i
                  ? "text-transparent bg-gradient-to-r from-gradientone via-gradienttwo to-gradientthree bg-clip-text border-black/10"
                  : "text-black/70 hover:text-black"
              }`}
              onMouseEnter={() => handleSwitch(i)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => handleSwitch(i, true)}
            >
              <span>{sec.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
