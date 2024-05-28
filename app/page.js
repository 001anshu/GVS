import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Features from './pages/Features'
import About from './pages/About'
import Courses from './pages/Courses'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <Courses/>
    </div>
  )
}

export default page