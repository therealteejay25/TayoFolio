"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Simply fill out the form on the site with your project details. You'll get an instant quote, and if it aligns with your budget, we proceed with a quick confirmation and initial payment. From there, the work begins, and you’ll receive regular updates throughout the process.",
    },
    {
      question: "How long does a project take to complete?",
      answer:
        "Timelines depend on the complexity of the project. A basic website or landing page typically takes 5-6 days, while larger applications or e-commerce platforms can take 3–4 weeks. You'll get a clear timeline once we define the scope.",
    },
    {
      question: "How much will my project cost?",
      answer:
        "Costs vary based on the size and features of the project. I provide transparent quotes upfront so there are no surprises.",
    },
    {
      question: "Can you help with an existing website or app?",
      answer:
        "Yes. Whether you need updates, fixes, new features, or a full redesign, I can assess your existing site or app and propose a plan that fits your goals and budget.",
    },
    {
      question: "What if I need revisions after the project is completed?",
      answer:
        "Reasonable revisions are always part of the process to ensure you’re satisfied. If major changes are requested after delivery, I offer flexible maintenance and update packages to keep your product evolving.",
    },
    {
      question: "Will my site or app be mobile-friendly?",
      answer:
        "Yes. Every project is designed and built to be fully responsive, ensuring a seamless experience across mobile, tablet, and desktop devices.",
    },
    {
      question: "Do you assist with SEO or analytics setup?",
      answer:
        "I follow SEO best practices during development and can set up basic analytics, metadata, and site performance tools.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full text-black px-4 pb-12 flex flex-col md:flex-row gap-12 md:gap-20">
      {/* Right: FAQ List */}
      <div className="flex-1 flex max-w-2xl mx-auto w-full flex-col gap-5">
        {faqs.map((faq, idx) => (
          <div
            className="shadow bg-white shadow-[#747EBE]/5 rounded-xl p-3"
            key={faq.question}
          >
            <button
              className="w-full flex justify-between items-center text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <span className="text-lg">{faq.question}</span>
              <span className="ml-4">
                <motion.span
                  key={openIndex === idx ? "open" : "closed"} // forces animation when state changes
                  initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
                  animate={{
                    rotate: openIndex === idx ? 180 : 0,
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{ rotate: 0, scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="inline-block text-3xl font-light"
                >
                  {openIndex === idx ? "×" : "+"}
                </motion.span>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 border-b border-white/10 ${
                openIndex === idx
                  ? "max-h-40 py-4 opacity-100"
                  : "max-h-0 py-0 opacity-0"
              }`}
            >
              <p className="text-base text-black/50">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center mb-24 px-4">
        <img src="faq.svg" className="h-10 mx-auto mb-6" alt="Projects" />
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Questions, Answered...
        </h1>
        <h2 className="text-4xl md:text-5xl font-medium mt-2">
          Here’s what people usually ask me...
        </h2>
        <p className="mt-6 twhite/60 text-lg max-w-2xl mx-auto">
          Got questions? I’ve got answers. Here are some of the things people
          usually want to know before we start working together.
        </p>
      </div>
      <FAQSection />
    </div>
  );
};

export default Faq;
