import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] h-[300px] w-[80%] m-auto flex justify-center items-center flex-col mb-28'>
        <h1 className='text-5xl font-medium mb-10'>Get Excluxive Offers On Your Email</h1>
        <p className='text-[18px] mb-4'>subscribe to our newletter and stay updated</p>
         <div>
            <input type="email" placeholder='Your Email  id' className='w-[550px] h-[60px] ml-[30px] border-none outline-none text-[#616161] text-[16px] rounded-[80px] p-4' />
            <button className='w-[200px] h-[60px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer ml-[-80px]'>Subscribe</button>
         </div>
        

    </div>
  )
}

export default NewsLetter