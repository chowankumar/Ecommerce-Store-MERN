import React from 'react'
import new_collection from "../Assets/new_collections"
import Item from '../Item/Item'
const NewCollection = () => {
  return (
    <div className='grid justify-center gap-12 mt-[200px] mb-[150px]'>

     <div className='grid justify-center'>
     <h1 className='text-4xl font-semibold'>NEW COLLECTION</h1>
     <hr className='w-[150px] h-[2px] bg-black rounded-full' />
     </div>
     <div className='grid grid-cols-4 gap-[30px]'>
        {
            new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price } new_price={item.new_price}/>

            })
        }

     </div>

    </div>
  )
}

export default NewCollection