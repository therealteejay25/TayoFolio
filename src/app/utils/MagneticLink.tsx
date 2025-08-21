"use client";
import { useRef } from "react";

export default function MagneticLink({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block cursor-pointer transition-transform duration-150 ease-out hover:bg-gradient-to-r from-gradientone via-gradienttwo to-gradientthree bg-clip-text hover:text-transparent"
    >
      {children}
    </a>
  );
}
