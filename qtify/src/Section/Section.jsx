import React, { useState } from "react";
import Card from "../Card/Card";
import Carousal from "../Carousal/Carousal";

const Section = ({ data, type,title }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="text-white px-[28px] mt-[32px]">
      <div className="flex justify-between items-baseline ">
        <h1 className="text-[20px] font-bold">{title}</h1>
        <button
          onClick={() => setToggle(!toggle)}
          className="text-[#34c94b] font-bold"
        >
          {toggle ? "Show All" : "Collapse"}
        </button>
      </div>
      <div className="mt-10 ">
        {!toggle ? (
          <div className=" flex flex-wrap  gap-[20px]">
            {console.log(data)}
            {data.map((card) => {
            return (<Card data={card} type={type}/>);
          })}
          </div>
          
        ) : (
          <div className="w-full">
            <Carousal
              data={data}
              renderCardComponent={(card) => <Card data={card} type={type} />}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
