import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import NavBar from '../Components/Menu/NavBar'; // Ensure NavBar is correctly imported

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside
        className={`bg-[#0F0F14] text-white h-full transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-0'
        } fixed`}
      >
        <nav className="pt-16 flex-1">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
              <Link to="/reports">Reports</Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-700">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
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
          className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
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
