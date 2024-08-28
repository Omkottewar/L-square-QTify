import React from "react";
// The imported PNG file is treated as a React component, and you can use it just like any other React component in your application.
import {ReactComponent as SearchIcon} from  "../assets/search-icon.svg"

const SearchBar = ({search}) => {

    return (
        <form className='flex flex-row items-center h-[48px]'>
            <input
                className='w-[502px] h-full border border-black rounded-tl-lg rounded-bl-lg px-[20px] py-[14px]'
                placeholder={search}
            />
            <button className='rounded-br-lg rounded-tr-lg border border-black h-full cursor-pointer px-[20px] py-[14px]' type="submit"><SearchIcon /></button>
        </form>
    );
}

export default SearchBar;
