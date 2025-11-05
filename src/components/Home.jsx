import React from 'react';


const Home = () => {
  return (
    <div name="home" className='h-[100vh] text-[#ffffff] flex items-center justify-around pt-[18vh] overflow-hidden'>
        <div>
          <p className='text-[60px]'>I'm Gashman.</p>
          <p>Frontend Web Developer</p>
        </div>

        <img src="/Hero2.jpg" alt="" className='h-[90vh] w-[40vw]'/>
    </div>
  )
}

export default Home