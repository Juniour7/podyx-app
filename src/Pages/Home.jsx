import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <body className='flex flex-xol justify-center items-center w-full h-screen'>
        <Link to='/availability'>
        <button className='bg-[#402DFE] text-white px-3 py-2 rounded-md'>Dashboard</button>
    </Link>
    </body>
  )
}

export default Home