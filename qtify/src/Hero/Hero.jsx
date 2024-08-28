import React from 'react'
import HeroImage from '../assets/vibrating-headphone.png'
import './hero.css'
const Hero = () => {
  return (
    <>  
        <section className='h-[270px] flex justify-center items-center'>
            <div className=' hero__content flex flex-col justify-center items-center '>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
                <img className=' h-[212px] w-[212px]' src={HeroImage} alt='headphone'/>
        </section>
    </>
  )
}

export default Hero