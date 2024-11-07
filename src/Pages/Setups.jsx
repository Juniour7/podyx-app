import React from 'react'

const Setups = () => {
  return (
    <>
        <body className='font-sen'>
            <section className='flex justify-between items-center p-4 border-b'>
                <h1 className='font-semibold text-xl'>Studio setups</h1>
                <div className='flex justify-center gap-3'>
                    <button className='bg-transparent border border-black rounded-md px-3 py-2'>Embed setup cards</button>
                    <button className='bg-[#402DFE] text-white rounded-md px-3 py-2 text-sm'>Add new</button>
                </div>
            </section>
        </body>
    </>
  )
}

export default Setups