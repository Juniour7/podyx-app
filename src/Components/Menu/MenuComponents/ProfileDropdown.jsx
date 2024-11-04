import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//icons
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";


const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <>
        <div className="relative inline-block text-left font-sen">
            {/* Dropdown Button */}
            <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-2  text-white font-semibold rounded-lg "
            >
                <span className="text-2xl">
                {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-[270px] bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                    <div className='flex gap-3 py-2 px-2 border-b'>
                        <div>
                            <img src="https://i.pinimg.com/564x/6a/13/77/6a1377185a9b462467c562328fa4abf3.jpg" alt="" className='rounded-full w-[50px] h-[50px] object-cover' />
                        </div>
                        <div>
                            <h2 className='font-semibold'>Roseline Anyango</h2>
                            <p className='text-sm text-[#5F5F75]'>roselineanyango@gmail.com</p>
                        </div>
                    </div>
                    <div className="font-semibold">
                        <div className='px-3 py-2 border-b'>
                            <Link to=''>
                            <div className='flex items-center gap-2  p-2 hover:bg-blue-200 duration-500 transition-colors ease-in-out rounded-lg'>
                                <span className='text-2xl text-[#5F5F75]'>
                                    <MdOutlineAccountCircle />
                                </span>
                                Account
                            </div>
                            </Link>
                        </div>
                            
                        <div className='px-3 py-1'>
                            <Link to=''>
                            <div className='flex items-center gap-2  p-2 hover:bg-blue-200 duration-500 transition-colors ease-in-out rounded-lg'>
                                <span className='text-2xl text-[#5F5F75]'>
                                    <IoIosHelpCircleOutline />
                                </span>
                                Help Center
                            </div>
                            </Link>
                        </div>

                        <div className='px-3 py-1'>
                            <Link to=''>
                            <div className='flex items-center gap-2  p-2 hover:bg-blue-200 duration-500 transition-colors ease-in-out rounded-lg'>
                                <span className='text-2xl text-[#5F5F75]'>
                                    <IoIosLogOut />
                                </span>
                                Log Out
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
  );
}

export default ProfileDropdown;