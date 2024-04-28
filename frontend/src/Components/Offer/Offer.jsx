import React from 'react'
import exclusive_image from "../Assets/exclusive_image.png"

const Offer = () => {
  return (
    <div className='bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] lg:flex-row w-[80%] h-68 mx-auto flex shadow-lg border-1  rounded-lg '>
        <div className=' flex flex-col justify-center w-[60%] ml-24' id='offer-left'> 
            <div className='text-6xl space-y-4  font-semibold'>
              <p>Exclusive</p>
              <p>Offers For You</p>
            </div>
            <p className='text-[16px] font-semibold mt-4'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='bg-red-500 rounded-full text-white px-12 py-2 mt-2 w-fit'>Check Now</button>
        </div>

        <div className='flex w-[30%] items-center' id='offer-right'>
          <img src={exclusive_image} alt="" className='w-[280px] h-[400px]' />
        </div>
        
    </div>

  )
}

export default Offer