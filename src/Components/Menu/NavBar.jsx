import React, { useState } from 'react';

//components
import ProfileDropdown from './MenuComponents/ProfileDropdown';
import SideBar from './SideBar';

//icons
import { RxHamburgerMenu } from "react-icons/rx";


const NavBar = ({ toggleSidebar }) => {
  return (
    <>
        <header className="w-full h-16 bg-[#0F0F14] shadow-md flex items-center justify-between px-6 fixed md:relative">
            <div className="flex space-x-3 text-white">
                <div onClick={toggleSidebar} className="cursor-pointer">
                    <span className="text-4xl">
                        <RxHamburgerMenu />
                    </span>
                </div>
                <div>
                    <button className='border font-semibold border-white bg-transparent px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors ease-in-out duration-300'>Create New</button>
                </div>
            </div>
            <div className="flex items-center space-x-">
                <div>
                    <img src="https://i.pinimg.com/564x/6a/13/77/6a1377185a9b462467c562328fa4abf3.jpg" alt="" className='rounded-full object-cover w-[40px] h-[40px]' />
                </div>
                <div>
                    <ProfileDropdown /> 
                </div>
            </div>
        </header>
    </>
  )
}

export default NavBar;