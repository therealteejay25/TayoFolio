"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://getform.io/f/bzygwxxa', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setShowModal(true);
        e.currentTarget.reset();
      } 
    } catch (error) {
      console.error(error);
    //   alert('Something went wrong. Try again!');
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    {
      name: "Whatsapp",
      href: "https://wa.me/23480869876",
      logo: "/WhatsappLogo.svg",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/therealteejay25",
      logo: "/InstagramLogo.svg",
    },
    {
      name: "X",
      href: "https://x.com/therealteejay25",
      logo: "/XLogo.svg",
    },
    {
      name: "GitHub",
      href: "https://github.com/therealteejay25",
      logo: "/GitHubLogo.svg",
    },
  ];

  return (
    <div id='contact' className="min-h-screen flex flex-col items-center justify-center w-full mt-32 md:mt-16 pt-16 px-6 relative">
      {/* Header */}
      <div className="max-w-3xl text-center mb-16 px-4">
        <img src="contact.svg" className="h-10 mx-auto mb-6" alt="Contact" />
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Talk to me...
        </h1>
        <h2 className="text-4xl md:text-5xl font-medium mt-2">
          Been impressed so far? Let&apos;s work on your next project...
        </h2>
        <p className="mt-6 text-black/60 text-lg max-w-2xl mx-auto">
          This is the point where you contact me for your next project. Looking forward to hearing from you!
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          className="w-full p-3 rounded-xl bg-gradientone/10 border border-black/10 focus:outline-none focus:ring-2 focus:ring-gradientone text-lg"
          placeholder="Your Name..."
          required
        />
        <input
          type="email"
          name="email"
          className="w-full p-3 rounded-xl bg-gradienttwo/10 border border-black/10 focus:outline-none focus:ring-2 focus:ring-gradienttwo text-lg"
          placeholder="Your Email..."
          required
        />
        <textarea
          name="message"
          rows={5}
          className="w-full p-3 rounded-xl bg-gradientthree/10 border border-black/10 focus:outline-none focus:ring-2 focus:ring-gradientthree text-lg resize-none"
          placeholder="Your Message..."
          required
        />
        <button
          type="submit"
          className="w-full md:w-fit self-center bg-gradient-to-r from-gradientone via-gradienttwo to-gradientthree text-white font-semibold py-3 px-12 cursor-pointer rounded-xl shadow-md hover:opacity-90 transition flex items-center justify-center gap-2"
          disabled={loading}
        >
          {loading ? (
            <div className='loader'></div>
          ) : (
            'Send Message'
          )}
        </button>
      </form>

      {/* Social Icons */}
      <div className="flex justify-center gap-16 pt-12">
      {socials.map((platform) => (
        <a
          key={platform.name}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform.name}
          className={`
            p-2 rounded-full border border-black/20 
            transition-all duration-500 
            hover:border-transparent 
            hover:bg-[conic-gradient(from_0deg_at_50%_50%,var(--color-gradientone),var(--color-gradienttwo),var(--color-gradientthree),var(--color-gradientone))] 
            hover:bg-[length:300%_300%] 
            hover:animate-[gradientMove_3s_linear_infinite]
          `}
        >
          <Image
            src={platform.logo}
            alt={`${platform.name} logo`}
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </a>
      ))}
    </div>

      {/* Big Gradient Text */}
      <div className="text-[13.5rem] text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#00000015] to-background">
        Let's Connect
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white/50 backdrop-blur-3xl flex items-center justify-center z-50">
          <div className="bg-white/35 border-2 border-white rounded-4xl p-4 max-w-md w-full text-center shadow-lg animate-scaleUp">
            <div className="bg-white p-6 rounded-2xl flex flex-col items-center justify-center">
               <div className="bg-green-200 h-12 rounded-full my-3 mx-auto p-2 w-12">
                <div className="bg-green-300 rounded-full flex items-center p-1 justify-center h-full w-full">
                <img src='check.svg' className='' />
                </div>
               </div>
            <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
            <p className="mb-6 text-black/70">
              Thanks for reaching out. I’ll get back to you soon!
            </p>
            <button
              className="bg-gradient-to-r from-gradientone via-gradienttwo to-gradientthree text-white font-semibold py-3 px-12 rounded-xl shadow-md hover:opacity-90 transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}

      {/* Loader Keyframe (optional animation) */}
      <style>
        {`
          @keyframes scaleUp {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-scaleUp {
            animation: scaleUp 0.3s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
