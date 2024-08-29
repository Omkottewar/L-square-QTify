import React from 'react'
import {Chip, Tooltip} from '@mui/material';

const Card = ({data,type}) => {
    console.log(data)
    switch(type){
        case "album":{
            const {image,follows,title,songs} = data
            return (
                <div className="w-[160px] h-[232px]">
                    <div className="h-[205px] w-[160px] rounded-[10px] overflow-hidden relative">
                        <img src={image} className='w-full h-[170px]' alt="" />
                        <div className=" banner absolute bottom-0 left-0 w-full h-[42px] bg-white flex items-center p-[6px]">
                            <Chip
                            sx={{backgroundColor:'black', color:'white'}}
                            label={`${follows} Follows`}
                            size='small'
                            />
                        </div> 
                    </div>
                    <div className="mt-[6px] overflow-hidden text-ellipsis text-white">
                        <p>{title}</p>
                        </div>
                </div>
            )
        }

        case 'song':{
            
            const {image,follows,title,songs,likes} = data
            return (
                <div className="w-[160px] h-[232px]">
                    <div className="h-[205px] w-[160px] rounded-[10px] overflow-hidden relative">
                        <img src={image} className='w-full h-[170px]' alt="" loading='lazy'/>
                        <div className=" banner absolute bottom-0 left-0 w-full h-[42px] bg-white flex items-center p-[6px]">
                          <div className="">
                          <Chip
                            sx={{backgroundColor:'black', color:'white'}}
                            label={`${likes} Likes`}
                            size='small'
                            />
                          </div>
                        </div> 
                    </div>
                    <div className="mt-[6px] overflow-hidden text-ellipsis text-white">
                        <p>{title}</p>
                        </div>
                </div>
            )
        }
        default:{
            return <></>
        }
    
    }

   
}

export default Card