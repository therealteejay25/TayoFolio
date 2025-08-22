"use client";

import Image from "next/image";

const services = [
    {
      title: "Web Development",
      description:
        "Building fast, scalable, and modern web applications with clean, maintainable code.",
      image: "/image2.jpg", // replace with your image
      icon: "/code.svg", // replace with your own SVG/icon
    },
    {
      title: "UI Design",
      description:
        "Designing beautiful, intuitive interfaces that deliver seamless user experiences.",
      image: "/image2.jpg", // replace with your image
      icon: "/design.svg", // replace with your own SVG/icon
    },
  ];
  

export default function ServicesSection() {
  return (
    <section id="services" className="h-screen flex flex-col items-center justify-center my-60 md:my-10 py-16 px-6">
        {/* <h3 className='bg-gradient-to-b to-accenttwo bg-clip-text text-transparent from-accent font-medium flex items-center justify-center gap-2 py-8'><img src="logo.svg" className='h-4' alt="" />SERVICES</h3> */}
        <div className="max-w-3xl text-center mb-24">
        <img src="services.svg" className="h-10 mx-auto mb-6" alt="About" />
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
        Focus On Your Ideas...
        </h1>
        <h2 className="text-4xl md:text-5xl font-medium mt-2">
        I’ll handle the rest....
        </h2>
        <p className="mt-6 text-black/60 text-lg max-w-2xl mx-auto">
        From design to development, I turn concepts into finished products that look good, work smoothly, and connect with people.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              width={800}
              height={500}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-black/60 h-24 bottom-3"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              {/* Icon */}
              <div className="absolute top-4 left-4 bg-black/50 rounded-full p-3 text-2xl">
                <img className="h-7" src={service.icon} alt="" />
              </div>

              <h3 className="text-3xl pb-4 font-semibold">{service.title}</h3>
              <p className="opacity-80">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
