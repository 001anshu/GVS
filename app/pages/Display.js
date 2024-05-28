import React from 'react'
import EmblaCarousel from './EmblaCarousel'

const Display = () => {
  const images=[{
    name:"test2",src:"/10faith.jpg"
  },
{
  name:"test",src:"/19krsna.jpg"
},
{
  name:"test",src:"/6Baby-Krishna-with-parrots.jpg"
},
{
  name:"test2",src:"/9faith.jpg"
}
]
  return (
    <div className='md:h-[580px] h-full p-8 m-4 flex justify-center items-center bg-slate-100'>
      <div className='w-full h-full  overflow-hidden'>
        <EmblaCarousel images={images} />
      </div>
      </div>
    
  )
}

export default Display