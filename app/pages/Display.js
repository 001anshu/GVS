import React from 'react'
import EmblaCarousel from './EmblaCarousel'

const Display = () => {
  const images=[{
    name:"test2",src:"/10faith.jpg"
  },
{
  name:"test",src:"/1pic.jpg"
},
{
  name:"test",src:"/2pic.jpg"
},
{
  name:"test2",src:"/3pic.jpg"
}
]
  return (
    <div className='md:h-[580px] h-full p-8 m-4 flex justify-center items-center bg-slate-100'>
      <div className='w-full h-full overflow-hidden relative'>
  <EmblaCarousel images={images} />
  <button className='bg-blue-300 opacity-85 md:p-2 p-1 md:w-1/4 md:h-16 w-1/2 md:ml-20 rounded-md font-semibold text-2xl text-white absolute bottom-0 left-0 m-4'>EXPLORE</button>
</div>


      </div>
    
  )
}

export default Display