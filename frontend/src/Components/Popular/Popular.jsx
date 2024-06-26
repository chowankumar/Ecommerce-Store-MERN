import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className=' flex flex-col gap-4 items-center h-screen mb-12'>
       <div className='flex flex-col gap-2 mt-72 lg:mt-2'>
       <h1 className='text-4xl font-semibold'>POPULAR IN WOMEN</h1>
        <hr className='w-[150px] h-[4px] bg-black rounded-full'/>
       </div>
        <div className='flex items-center justify-center gap-3 flex-wrap'>
            {
                data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price } new_price={item.new_price}/>

                })
            }
        </div>
    </div>
  )
}

export default Popular