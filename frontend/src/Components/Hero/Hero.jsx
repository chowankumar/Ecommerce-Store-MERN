import React from 'react'
import arrow_icon from "../Assets/arrow.png";
import hand_icon from "../Assets/hand_icon.png"
import hero_image from "../Assets/hero_image.png"
const Hero = () => {
  return (
  <div className='flex flex-col h-screen bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] lg:flex-row'>

      <div id='hero-left' className='flex flex-col items-center justify-center text-center  p-10 lg:w-[60%] lg:items-start lg:ml-28' >

           <p className='font-semibold text-xl hidden md:block mt-4'>NEW ARRIVALS ONLY</p>
           <p className='flex gap-2 items-center text-6xl  font-medium justify-center lg:text-7xl'>new <img src={hand_icon} alt="" className='w-10' /></p>
           <p className='text-6xl font-semibold lg:text-7xl'>collection</p>
           <p className='text-6xl font-semibold lg:text-7xl'>for everyone</p>
           <button className='bg-red-500 rounded-full text-white px-6 py-2 mt-8' >Latest Collection</button>
        
      </div>


      <div id='hero-right' className='flex items-center justify-center lg:w-[40%]'>

        <img src={hero_image} alt="" className='w-[400px]' />

      </div>

    </div>
  )
}

export default Hero