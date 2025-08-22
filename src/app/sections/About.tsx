"use client";

import React, { useState } from "react";
import AboutCard from "../components/AboutCard";

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
    <section id="about" className="min-h-screen bg-background text-black px-6 md:px-12 lg:px-24 py-32 flex flex-col items-center">
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
     
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-10 items-center">
        <AboutCard title="My Approach" content="Blending creativity and code to turn ideas into experiences that feel effortless" />
        <AboutCard title="What Drives Me" content="Curiosity and challenge push me to craft work that actually resonates." />
        <AboutCard title="Why I Create" content="To make digital spaces that inspire, connect, and leave a mark." />
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
