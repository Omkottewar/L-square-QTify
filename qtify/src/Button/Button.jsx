import React from "react";
import './Button.css';

const Button=({children})=>{
    return(
        <button className=' btn bg-black text-[#34c94b] rounded-xl cursor-pointer py-[10px] px-[16px] m-[14px] w-[170px] h-[47px] '>
        {children}
        </button>
    )
}

export default Button;