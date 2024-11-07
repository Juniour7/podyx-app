import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

//components
import NavBar from '../Components/Menu/NavBar'; // Ensure NavBar is correctly imported

//icon
import { IoChevronDownOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineInfo, MdScreenshotMonitor, MdOutlineAddToHomeScreen   } from "react-icons/md";
import { RiHomeLine } from "react-icons/ri";
import { IoMdPhoneLandscape } from "react-icons/io";
import { PiWaveformBold, PiNotebook  } from "react-icons/pi";
import { IoShieldHalf } from "react-icons/io5";
import { BsTicketPerforated } from "react-icons/bs";
import { FiBox } from "react-icons/fi";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [clickedIndex, setClickedIndex] = useState(null);
  const handleClick = (index) => {
    // Toggle the background color on click (or set to the clicked index)
    setClickedIndex(index);
  };

  const [clickedIndex1, setClickedIndex1] = useState(null);
  const handleClick1 = (index) => {
    // Toggle the background color on click (or set to the clicked index)
    setClickedIndex1(index);
  };;

  const StudioLinks = [
    {
      path: 'availability',
      icon: <MdOutlineCalendarMonth />,
      title:'Availability'
    },
    {
      path: 'base-services',
      icon: <IoVideocamOutline />,
      title:'Base Services'
    },
    {
      path: 'additional-services',
      icon: <IoMdPhoneLandscape />,
      title:'Additional Services'
    },
    {
      path: 'setups',
      icon: <MdOutlineAddToHomeScreen  />,
      title:'Setups'
    },
    {
      path: 'rooms',
      icon: <RiHomeLine />,
      title:'Rooms'
    },
    {
      path: 'studio-settings',
      icon: <MdScreenshotMonitor  />,
      title:'Studio Settings'
    },
    {
      path: 'terms-conditions',
      icon: <MdOutlineInfo />,
      title:'Terms & Conditions'
    },
  ];

  const StudioLinks2 = [
    {
      path: '/',
      icon: <PiWaveformBold />,
      title:'Sessions'
    },
    {
      path: '/',
      icon: <PiNotebook  />,
      title:'Purchases'
    },
    {
      path: '/',
      icon: <IoShieldHalf />,
      title:'Slot blocker'
    },
    {
      path: '/',
      icon: <BsTicketPerforated />,
      title:'Promo Codes'
    },
    {
      path: '/',
      icon: <FiBox />,
      title:'Bundles'
    },
  ]


  return (
    <div className="flex min-h-screen bg-white font-sen">
      {/* Sidebar */}
      <aside
        className={`bg-[rgb(21,21,28)] text-white h-full transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-0'
        } fixed overflow-hidden`}
      >
        <nav className="pt-16 flex-1">
          <ul className=''>
            <li className="relative py-2 px-4 border-b border-[#636680]">
              {/* Main link for Settings with dropdown toggle */}
              <button
                onClick={toggleDropdown}
                className="w-full text-left focus:outline-none flex justify-between"
              >
                <div className='space-y-1'>
                  <h1 className='text-xl'>StudioName</h1>
                  <h3 className='text-sm'>studioName.podyx.com</h3>
                </div>
                <div>
                  <span className='text-xl'>
                    <IoChevronDownOutline />
                  </span>
                </div>
              </button>

              {/* Dropdown menu that pushes other items down */}
              <div className={`transition-all duration-[5s] ease-in-out ${isDropdownOpen ? 'block' : 'hidden'}`}>
                <ul className="bg-[#] text-white font-medium text-base rounded-md shadow-lg w-full mt-2  space-y-1">
                  {StudioLinks.map((Info,index) => (
                    <Link to={Info.path}>
                    <li
                      key={index}
                      onClick={() => handleClick(index)} // Pass the current index to handleClick
                      className={`py-2 px-3 flex items-center gap-2 rounded-md cursor-pointer transition-colors duration-500 ease-in-out ${
                        clickedIndex === index // Check if the current item is clicked
                        ? 'bg-[#14122C] border border-[#402DFE]' // Apply styles if clicked
                        : 'hover:bg-[#14122C]' // Apply hover styles if not clicked
                      }`}
                    >
                      <span className='text-[#636680] text-lg'>
                        {Info.icon}
                      </span>
                      {Info.title}
                    </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
          <div className='border-b border-[#636680]'>
            <ul className="bg-[#] text-white font-medium text-lg rounded-md shadow-lg w-full mt-2 px-2 space-y-1">
              {StudioLinks2.slice(0,3).map((Info,index1) => (
                <li
                  key={index1}
                  onClick={() => handleClick1(index1)} // Pass the current index to handleClick
                  className={`py-2 px-3 flex items-center gap-2 rounded-md cursor-pointer transition-colors duration-500 ease-in-out ${
                    clickedIndex1 === index1 // Check if the current item is clicked
                    ? 'bg-[#14122C] border border-[#402DFE]' // Apply styles if clicked
                    : 'hover:bg-[#14122C]' // Apply hover styles if not clicked
                  }`}
                >
                  <span className='text-[#636680] text-lg'>
                    {Info.icon}
                  </span>
                  <Link to={Info.path}>{Info.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='border-b border-[#636680]'>
            <ul className="bg-[#] text-white font-medium text-lg rounded-md shadow-lg w-full mt-2 px-2 space-y-1">
              {StudioLinks2.slice(3,5).map((Info,index1) => (
                <li
                  key={index1}
                  onClick={() => handleClick1(index1)} // Pass the current index to handleClick
                  className={`py-2 px-3 flex items-center gap-2 rounded-md cursor-pointer transition-colors duration-500 ease-in-out ${
                    clickedIndex1 === index1 // Check if the current item is clicked
                    ? 'bg-[#14122C] border border-[#402DFE]' // Apply styles if clicked
                    : 'hover:bg-[#14122C]' // Apply hover styles if not clicked
                  }`}
                >
                  <span className='text-[#636680] text-lg'>
                    {Info.icon}
                  </span>
                  <Link to={Info.path}>{Info.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <button
          onClick={toggleSidebar}
          className="absolute bottom-4 right-4 bg-gray-700 p-2 rounded-full"
        >
          <FiX />
        </button>
      </aside>

      {/* Content Area */}
      <div className="flex flex-col flex-1 transition-all duration-300">
        {/* Full-width Navbar */}
        <NavBar toggleSidebar={toggleSidebar} isOpen={isOpen} /> 

        {/* Main Content with Squeezing Effect */}
        <main
          className={`flex-1  overflow-y-auto transition-all duration-300 mt-16 md:mt-0 ${
            isOpen ? 'ml-64' : 'ml-0'
          }`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
