import React, { useEffect, useState } from 'react'
import {ReactComponent as LeftArrow} from '../assets/LeftArrow.svg';
import { useSwiper } from 'swiper/react';
import 'swiper/css';


const CarouselLeft = () => {
    let swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on('slideChange',()=>{
            setIsBeginning(swiper.isBeginning)
        })
    },[swiper]);
  return (
    <div className='absolute left-[10px] top-[40%] z-10 cursor-pointer translate-y-[50%]'>
        {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()} />}
    </div>
  )
}

export default CarouselLeft