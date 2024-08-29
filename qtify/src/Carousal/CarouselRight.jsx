import React, { useEffect, useState } from 'react'
import {ReactComponent as RightArrow} from '../assets/RightArrow.svg';
import { useSwiper } from 'swiper/react';
import 'swiper/css'

const CarouselRight = () => {
    let swiper = useSwiper();
    const [isEnd,setIsEnd] = useState(swiper.isEnd);
    useEffect(()=>{
        swiper.on('SlideChange',()=>{
            setIsEnd(swiper.isEnd);
        })
    },[swiper])
 
    return (
    <div className='absolute right-[10px] top-[40%] z-10 cursor-pointer translate-y-[50%]'>
        {!isEnd && <RightArrow onClick = {()=> swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRight