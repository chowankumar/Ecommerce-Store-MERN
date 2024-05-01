import React from 'react'
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintrest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 p-4 '>
        <div id='footer-upper' className='flex items-center justify-center gap-4'>
                <img src={footer_logo} alt=""  className='w-[65px]'/>
                <p className='text-4xl font-medium'>SHOOPER</p>


        </div>

        <div id='footer-links'>
          <ul className='flex gap-7'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>


        </div>
        <div id='footer-icon' className='flex items-center justify-center gap-4'>
          <div className='border-2 p-1 bg-gray-50 rounded-xl'>
            <img src={instagram_icon} alt=""  className='w-[25px]'/>
          </div>
          <div className='border-2 p-1 bg-gray-50 rounded-xl'>
            <img src={pintrest_icon} alt="" className='w-[25px]' />
          </div>
          <div className='border-2 p-1 bg-gray-50 rounded-xl'>
            <img src={whatsapp_icon} alt="" className='w-[25px]' />
          </div>

        </div>
        <div className='h-[2px] rounded-lg bg-gray-300 w-[80%]'></div>
          <div>

        <div id='footer-last'>
         
            copyright@ 2023 - All Right Reserved
          </div>

        </div>
    </div>
  )
}

export default Footer