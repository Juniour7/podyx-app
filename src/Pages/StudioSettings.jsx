import React from 'react'

const StudioSettings = () => {
  return (
    <>
        <body className='font-sen'>
            <section className='flex justify-between items-center p-4 border-b'>
                <h1 className='font-semibold text-xl'>Studio settings</h1>
                <div className='flex justify-center gap-3'>
                    <button className='bg-[#402DFE] text-white rounded-md px-3 py-2 text-sm'>Save and publish</button>
                </div>
            </section>
        </body>
    </>
  )
}

export default StudioSettings;