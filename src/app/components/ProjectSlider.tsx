"use client"
import React from "react";

const ProjectSlider = () => {
  const projects = [
    {
      id: 1,
      name: "Studi",
      image: "/pro1.png",
      desc: "Lorem text..",
      status: "in-progress",
    },
    {
      id: 2,
      name: "ChatApp",
      image: "/pro2.png",
      desc: "Lorem text..",
      status: "in-progress",
    },
    {
      id: 3,
      name: "Studi",
      image: "/pro3.png",
      desc: "Lorem text..",
      status: "in-progress",
    },
    {
      id: 4,
      name: "Studi",
      image: "/pro4.png",
      desc: "Lorem text..",
      status: "in-progress",
    },
    {
      id: 5,
      name: "Studi",
      image: "/pro5.png",
      desc: "Lorem text..",
      status: "in-progress",
    },
    {
      id: 6,
      name: "Studi",
      image: "/pro6.png",
      desc: "Lorem text..",
      status: "in-progress",
    },
    {
      id: 7,
      name: "Studi",
      image: "/pro7.png",
      desc: "Lorem text..",
      status: "in-progress",
    },
    {
      id: 8,
      name: "Studi",
      image: "/pro8.png",
      desc: "Lorem text..",
      status: "in-progress",
    },
    {
      id: 9,
      name: "Studi",
      image: "/pro9.png",
      desc: "Lorem text..",
      status: "in-progress",
    },
    {
      id: 10,
      name: "Studi",
      image: "/pro10.png",
      desc: "Lorem text..",
      status: "in-progress",
    },
  ];

  // duplicate the array so it loops seamlessly
  const doubledProjects = [...projects, ...projects];

  return (
    <div className="slider overflow-hidden h-[320px] m-auto relative w-[95%] grid place-items-center">
      <div className="slide-track flex w-[calc(300px*24)]">
        {doubledProjects.map((project, i) => (
          <div
            className="slide flex items-center p-4"
            key={i}
          >
            <img
              className="img w-[1400px] aspect-auto h-full rounded-xl"
              src={project.image}
              alt={project.name || "project"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSlider;
