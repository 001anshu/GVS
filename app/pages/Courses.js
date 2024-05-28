import React from 'react'
import CourseCard from './CourseCard'

const Courses = () => {
  //passing props with all the data ke remember to do it
  return (
    <div className=' '>
    <h1 className='text-5xl font-semibold flex justify-center'>What we offer</h1>
    <div id='courses' className='md:flex p-4   md:justify-center'>
      
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
    </div>
    </div>
  )
}

export default Courses