import React, { useEffect, useState } from 'react'
import Tabs from '../songTabs/songTabs'
import './filtersection.css'
import Carousal from '../Carousal/Carousal';
import Card from '../Card/Card';

const FilterSection = ({type,title,data}) => {
    const [tab,setTab] = useState('all');
  const [filteredSongs, setFilteredSongs] = useState(data);

    
    
    function handleClick(key){
        setTab(key)
    }
    useEffect(()=>{
        if(tab==='all'){
            setFilteredSongs(data);
        }
        else{
            const newList = data.filter((song)=>song.genre.key === tab);
            setFilteredSongs(newList);
        }
    },[tab,data])
   return ( 
    <div className="text-white px-[28px] mt-[32px] ">
        <div className="">
            <h3 className='text-[20px] font-bold'>{title}</h3>
        </div>
        <div className="tabs flex gap-10 w-[331px] h-[34px] mt-10 ">
        <p className={tab==='all'?'border-b-4 border-green-500':'' } onClick={()=>handleClick('all')}>ALL</p>
        <p className={tab==='rock'?'border-b-4 border-green-500':''}  onClick={()=>handleClick('rock')}>ROCK</p>
        <p className={tab==='pop'?'border-b-4 border-green-500':''} onClick={()=>handleClick('pop')}>POP</p>
        <p className={tab==='jazz'?'border-b-4 border-green-500':''} onClick={()=>handleClick('jazz')}>JAZZ</p>
        <p className={tab==='blues'?'border-b-4 border-green-500':''} onClick={()=>handleClick('blues')}>BLUES</p>
        </div>

        <div className="">
        <Carousal
              data={filteredSongs}
              renderCardComponent={(card) => <Card data={card} type={type} />}
            />
        </div>
    </div>
  )
}

export default FilterSection