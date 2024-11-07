import React, { useState } from 'react'
import { Link } from 'react-router-dom';

//icons
import { FiX } from 'react-icons/fi';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <aside
        className={`bg-[#0F0F14] text-white min-h-full transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
        } fixed`}
      >
        {/* Sidebar Menu */}
        <nav className="pt-4 flex-1 px-3">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700">
              
            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
              <Link to="/reports"></Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute bottom-4 right-4 bg-gray-700 p-2 rounded-full"
        >
          <FiX />
        </button>
      </aside>
    </>
  )
}

export default SideBar;