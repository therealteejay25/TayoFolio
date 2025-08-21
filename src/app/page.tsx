import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Stars from './components/Stars'
import About from './sections/About'
import Services from './sections/Services'
import ProjectsSection from './sections/Projects'

const page = () => {
  return (
    <div className='w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ProjectsSection />
    </div>
  )
}

export default page