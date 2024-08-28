import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Logo from "../Logo/Logo";

import Button from "../Button/Button";

const Navbar = ({searchData}) => {

    return (
        <>
            <nav className='flex flex-row bg-[#34c94b] justify-between items-center w-full h-[75px] px-[32px]'>
                <Logo />
                <SearchBar placeholder={"Search a song of your choice"}  />
                <Button children={"Give Feedback"} />
            </nav>

        </>

    );
}

export default Navbar;
