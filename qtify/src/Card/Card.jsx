import React from 'react'
import {Chip, Tooltip} from '@mui/material';

const Card = ({songs, image , followers , title}) => {
return (
    <div className="w-[160px] h-[232px]">
        <div className="h-[205px] w-[160px] rounded-[10px] overflow-hidden relative">
            <img src={image} className='w-full h-[170px]' alt="" />
            <div className=" banner absolute bottom-0 left-0 w-full h-[42px] bg-white flex items-center p-[6px]">
                <Chip
                sx={{backgroundColor:'black', color:'white'}}
                label={`${followers} Follows`}
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

export default Card