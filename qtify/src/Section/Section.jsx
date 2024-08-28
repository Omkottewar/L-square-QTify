import React from 'react'
import Card from '../Card/Card'

const Section = ({data}) => {
  return (
    <div className='text-white px-[28px]'>
        <div className="flex justify-between items-baseline ">
        <h1 className='text-[20px]'>Top Albums</h1>
        <button className='text-[#34c94b] font-bold'>Collapse</button>
        </div>
      

        <div className="grid grid-cols-7 gap-10 mt-[18px]">
            {data.map((card)=>{
             const{id,follows,image,title} = card;
             return (
            <Card  id={id} followers={follows} image={image} title={title} />
             )
                
            })}
        </div>
    </div>
  )
}

export default Section