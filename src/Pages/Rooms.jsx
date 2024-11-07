import React from 'react';

//icon
import { SiGooglecalendar } from "react-icons/si";

const Rooms = () => {
  return (
    <>
        <body className='font-sen'>
            <section className='flex justify-between items-center p-2 border-b'>
                <div className='flex items-center gap-1'>
                    <img src="https://i.pinimg.com/564x/ec/11/16/ec111648a825b05a5f7d6846d3f473c2.jpg" alt="" className='max-w-[50px]' />
                    <h1 className='font-semibold text-xl'>Setup Rooms</h1>
                </div>
                <div className='flex justify-center gap-3'>
                    <button className='bg-transparent border border-black rounded-md px-3 py-2'>Embed setup cards</button>
                    <button className='bg-[#402DFE] text-white rounded-md px-3 py-2 text-sm'>Add new</button>
                </div>
            </section>
        </body>
    </>
  )
}

export default Rooms;