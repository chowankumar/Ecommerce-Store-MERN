import React, { useState } from 'react'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"




const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <nav className='flex justify-around items-cente py-6 border-2 shadow-md'>
        <div className='flex items-center gap-2'>
        <img src={logo} alt="" className='w-10'/>
        <span className='font-semibold text-3xl'>SHOPPER</span>
        </div>
        <ul className='flex gap-12'>
            <li onClick={()=>{setMenu("shop")}} className='font-semibold active:border-b-2 border-red-300'>Shop{menu == "shop"?<hr className='border-none bg-[#FF4141] h-[3px]'/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}} className='font-semibold active:border-b-2 border-red-300'>Men{menu == "men"?<hr className='border-none bg-[#FF4141] h-[3px]'/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}} className='font-semibold active:border-b-2 border-red-300'>Women{menu == "women"?<hr className='border-none bg-[#FF4141] h-[3px]'/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}} className='font-semibold active:border-b-2 border-red-300'>Kids{menu == "kids"?<hr className='border-none bg-[#FF4141] h-[3px]'/>:<></>}</li>
        </ul>

        <div className='flex items-center gap-4'>
            <button className='border rounded-full px-6 py-1'>Login</button>
            <img src={cart_icon} alt="" className='w-6'/>
            <div className='w-[22px] h-[22px] flex justify-center items-center mt-[-38px] ml-[-28px] text-[14px]  bg-red-600 text-white rounded-[13px]'>0</div>
        </div>

    </nav>
  )
}

export default Navbar



 