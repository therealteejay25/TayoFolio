// StarsBackground.tsx
"use client";
import { useEffect, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function StarsBackground() {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      initialized.current = true;
    }
  }, []);

  return (
    <Particles className="z-30"
      id="tsparticles"
      options={{
        background: {
          color: "transparent",
        },
        fpsLimit: 80,
        particles: {
          number: {
            value: 400, // fewer but more detailed
            density: { enable: true, area: 800 },
          },
          color: { value: "#6E06F2" },
          shape: { type: "circle" },
          opacity: {
            value: 1,
            random: false,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.4,
              sync: false, // each star twinkles independently
            },
          },
          size: {
            value: { min: 1, max: 1.5 },
            random: { enable: true },
          },
          shadow: {
            enable: true,
            color: "#ffffff",
            blur: 15, // dreamy glow softness
          },
          move: {
            enable: true,
            speed: 0.9,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
        emitters: [
          {
            direction: "none",
            rate: { delay: 0.2, quantity: 5 },
            size: { width: 0, height: 0 },
            particles: {
              size: { value: 0.1 },
              shadow: { enable: true, color: "#ffffff", blur: 30 }, // ultra dreamy glow
            },
          },
        ],
      }}
    />
  );
}
