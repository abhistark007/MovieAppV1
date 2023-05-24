import React from 'react'

function HeroBanner() {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col gap-5 items-center'> 
          <p className='text-9xl text-white'>Welcome</p>
          <p className='text-3xl text-white'>Millions of TVSows and movies waiting to be discovered. Explore now!</p>
          <div className='flex border-2 border-purple-600 rounded-full w-[60%]'>
            <input type='text' placeholder='Search' className=' rounded-l-full outline-none py-3 px-2 flex-1'/>
            <button className='bg-purple-600 rounded-r-full text-white px-4 hover:scale-110 duration-200'>Search</button>
          </div>
        </div>
    </div>
  )
}

export default HeroBanner