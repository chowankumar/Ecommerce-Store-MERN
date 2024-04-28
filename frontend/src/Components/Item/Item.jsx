import React from 'react'

const Item = (props) => {
    return (
        <div className='w-[250px]'  >
            <img src={props.image} alt=""  className='w-[270px]'/>
            <p className='text-[13px] mt-2'>{props.name}</p>
            <div className='flex gap-4'>
                <div className='text-[13px] font-semibold' >${props.new_price}</div>
                <div className='line-through  text-[#8c8c8c] text-[13px]'>${props.old_price}</div>
            </div>

        </div>
    )
}

export default Item