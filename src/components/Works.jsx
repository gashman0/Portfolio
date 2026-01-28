import React from 'react'

const Works = () => {
  return (
    <>
      <div className=''>
        <p className='text-[3rem] text-[#f1f1f1] mt-15 w-fit '>My Projects</p>


        <div name="works" className='grid grid-cols-2 gap-4 h-fit text-[#ffffff] mt-5'>
          <div className='relative group'>
            <img src="/billstation.png" alt="" className='opacity-50 group-hover:opacity-100 transition duration-500'/>
            <a href="" className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-sm px-4 py-2 hover:bg-black/90 transition duration-300'>View More</a>
          </div>

          <div class="relative group">
            <img src="/digital-bank.png" alt="Digital Bank" className='opacity-50 group-hover:opacity-100 transition duration-500' />
            <a href="" className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-sm px-4 py-2 hover:bg-black/90 transition duration-300'>View More</a>
          </div>

          <div class="relative group">
            <img src="/jobs-board.png" alt="Digital Bank" className='opacity-50 group-hover:opacity-100 transition duration-500' />
            <a href="" className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-sm px-4 py-2 hover:bg-black/90 transition duration-300'>View More</a>
          </div>
          
          <div class="relative group">
            <img src="/crypto-tracker.png" alt="Digital Bank" className='opacity-50 group-hover:opacity-100 transition duration-500' />
            <a href="" className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-sm px-4 py-2 hover:bg-black/90 transition duration-300'>View More</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Works