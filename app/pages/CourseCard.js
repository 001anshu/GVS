import React from 'react'

const CourseCard = () => {
  return (
    <div >
      
      <div className='border border-black m-4 '>
        <img
        src="/Image_test.png"
        alt='test'
        />
        <h2 className='flex justify-center text-2xl'>Name</h2>
        <p className='font-mono'>Description</p>
        <div className="flex justify-center items-center">
        <button className='bg-red-600 w-1/3 m-2 flex justify-center items-center text-2xl text-white p-2'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard