import React, { useContext } from 'react'
import {ShopContext} from "../Context/ShopContext"
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item/Item"
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
   
    <div className=''>
      <img className='w-[82%] block m-[30px_auto]' src={props.banner} alt="" />
      <div className='flex justify-between w-[82%] mx-auto'>
        <p>
          <span className='font-bold'>Showing 1-12</span> out of 36 products
        </p>
        <div className='flex items-center justify-center gap-1 border-2 rounded-full px-2 py-1'>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-[82%] mt-4 mx-auto  gap-y-8'>
        {all_product.map((item,i)=>{
          if(props.category === item.category){

            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price } new_price={item.new_price}/>
          }else{
            return null;
          }

        })}
      </div>

      <div className='flex items-center justify-center py-24'>
         <button className='bg-gray-200 rounded-full py-4 px-12 text-gray-500'>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory