import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full my-32 md:my-16 py-16 px-6">
      <div className="max-w-3xl text-center mb-16 px-4">
        <img src="contact.svg" className="h-10 mx-auto mb-6" alt="Contact" />
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Talk to me...
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mt-2">
          Been impressed so far? Let’s work on your next project...
        </h2>
        <p className="mt-6 text-black/60 text-lg max-w-2xl mx-auto">
          This is the point where you contact me for your next project. Looking forward to hearing from you!
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-2xl w-full flex flex-col gap-6">
        <input
          type="text"
          className="w-full p-3 rounded-xl bg-gradientone/10 border border-black/10 focus:outline-none focus:ring-2 focus:ring-gradientone text-lg"
          placeholder="Your Name..."
        />
        <input
          type="email"
          className="w-full p-3 rounded-xl bg-gradienttwo/10 border border-black/10 focus:outline-none focus:ring-2 focus:ring-gradienttwo text-lg"
          placeholder="Your Email..."
        />
        <textarea
          rows={5}
          className="w-full p-3 rounded-xl bg-gradientthree/10 border border-black/10 focus:outline-none focus:ring-2 focus:ring-gradientthree text-lg resize-none"
          placeholder="Your Message..."
        />
        <button
          type="submit"
          className="w-full md:w-fit self-center bg-gradient-to-r from-gradientone via-gradienttwo to-gradientthree text-white font-semibold py-3 px-12 cursor-pointer rounded-xl shadow-md hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
