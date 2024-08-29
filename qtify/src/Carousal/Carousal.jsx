import React, { useEffect } from 'react';
import  {useSwiper,Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CarouselLeft from './CarouselLeft';
import CarouselRight from './CarouselRight';



const Controls = ({data })=>{
    let swiper = useSwiper();

    useEffect(()=>{
        swiper.slideTo(0,1)
    },[data])
    return null
}
const Carousal = ({data, renderCardComponent}) => {

  return (
    <div className='relative '>
        <Swiper
        initialSlide={0}
        spaceBetween={20}
        slidesPerView={7}
        modules={[Navigation]}
        allowTouchMove
        >
          <Controls data={data}  />
          <CarouselLeft/>
          <CarouselRight/>
          {data?.map((item,index)=>{
            return (
               <SwiperSlide key={index}>
          {renderCardComponent(item)}
               </SwiperSlide>
            )
          })}
          
        </Swiper>
    </div>
  )
}

export default Carousal