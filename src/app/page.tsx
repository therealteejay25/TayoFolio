import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Stars from './components/Stars'
import About from './sections/About'
import Services from './sections/Services'
import ProjectsSection from './sections/Projects'
import Faq from './sections/Faq'
import Contact from './sections/Contact'

const page = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectsSection />
      <Faq />
      <Contact />
    </div>
  )
}

export default page