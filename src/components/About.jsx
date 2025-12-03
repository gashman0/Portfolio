import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div name="about" className='h-fit text-[#ffffff] pt-10 overflow-hidden' >
      <p className='text-[3rem] text-[#f1f1f1] py-8'>Agashi Victor Tochukwu</p>

      <hr className='w-[40%] pb-8'/>


      <p className='text-justify text-[2rem] text-[#ebebeb]'>
        Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
        laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <p className='text-[3rem] text-[#f1f1f1] pt-8'>My Skill</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div>
          <p className="text-[#ebebeb] text-[1.8rem]">JavaScript</p>
          <div className="bg-[#414141] h-[2.5vh]">
            <div className="bg-[#919191] h-full w-[82%] "></div>
          </div>
        </div>

        <div>
          <p className="text-[#ebebeb] text-[1.8rem]">TypeScript</p>
          <div className="bg-[#414141] h-[2.5vh]">
            <div className="bg-[#919191] h-full w-[60%]"></div>
          </div>
        </div>

        <div>
          <p className="text-[#ebebeb] text-[1.8rem]">React</p>
          <div className="bg-[#414141] h-[2.5vh]">
            <div className="bg-[#919191] h-full w-[70%]"></div>
          </div>
        </div>

        <div>
          <p className="text-[#ebebeb] text-[1.8rem]">HTML, CSS, Tailwind</p>
          <div className="bg-[#414141] h-[2.5vh]">
            <div className="bg-[#919191] h-full w-[90%]"></div>
          </div>
        </div>

        <div>
          <p className="text-[#ebebeb] text-[1.8rem]">Git & GitHub</p>
          <div className="bg-[#414141] h-[2.5vh]">
            <div className="bg-[#919191] h-full w-[50%]"></div>
          </div>
        </div>
      </div>

      <div className='mt-10 bg-[#ebebeb] h-[17vh] text-black flex items-center justify-around text-[1.5rem] font-[500]'>
        <div className='flex flex-col items-center'>
          <p>2+</p>
          <p>Partners</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>13+</p>
          <p>Projects Done</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>1+</p>
          <p>Jobs</p>
        </div>
        <div className='flex flex-col items-center'>
          <p>1+</p>
          <p>Years of Exp.</p>
        </div>
      </div>

      <div className='border w-fit flex items-center px-6 py-4 mt-10 cursor-pointer group hover:bg-white'>
        <FontAwesomeIcon icon={faDownload} className="text-[2rem] group-hover:text-black" />
        <p className='text-[1.5rem] group-hover:text-black'>Download Resume</p>
      </div>

      <p className='text-[3rem] text-[#f1f1f1] pt-8'>My Price</p>

      <div className='flex justify-between gap-4'>
        <div className='mt-5 w-1/2 group'>

          <p className='flex items-center justify-center text-[2rem] font-[500] bg-[#414141] h-[20vh] group-hover:bg-[#616161]'>Full-Time</p>

          <p className='flex items-center justify-center text-[1.7rem] text-black bg-[#919191] h-[12vh] border-b group-hover:bg-[#ebebeb]'>Frontend Developer</p>

          <p className='flex items-center justify-center text-[1.7rem] text-black bg-[#919191] h-[12vh] border-b group-hover:bg-[#ebebeb]'>Physical Contact</p>

          <p className='flex items-center justify-center text-[1.7rem] text-black bg-[#919191] h-[12vh] border-b group-hover:bg-[#ebebeb]'>30+ hrs weekly</p>

          <div className='flex flex-col items-center justify-center text-black bg-[#919191] h-[18vh] border-b group-hover:bg-[#ebebeb]'>
            <p className='text-[1.7rem]'>N200,000</p>
            <p>per month</p>
          </div>

          <div className='flex justify-center items-center h-[16vh] bg-[#818181] group-hover:bg-[#ababab]'>
            <button className='text-black text-[1.2rem] px-6 py-3 bg-[#919191] cursor-pointer group-hover:bg-[#ebebeb] hover:bg-black hover:text-white'>Sign up</button>
          </div>
        </div>



        <div className='mt-5 w-1/2 group'>

          <p className='flex items-center justify-center text-[2rem] font-[500] bg-[#414141] h-[20vh] group-hover:bg-[#616161]'>Contract</p>

          <p className='flex items-center justify-center text-[1.7rem] text-black bg-[#919191] h-[12vh] border-b group-hover:bg-[#ebebeb]'>Frontend Developer</p>

          <p className='flex items-center justify-center text-[1.7rem] text-black bg-[#919191] h-[12vh] border-b group-hover:bg-[#ebebeb]'>Physical Contact</p>

          <p className='flex items-center justify-center text-[1.7rem] text-black bg-[#919191] h-[12vh] border-b group-hover:bg-[#ebebeb]'>Flexible Hours</p>

          <div className='flex flex-col items-center justify-center text-black bg-[#919191] h-[18vh] border-b group-hover:bg-[#ebebeb]'>
            <p className='text-[1.7rem]'>N400,000</p>
            <p>per project</p>
          </div>

          <div className='flex justify-center items-center h-[16vh] bg-[#818181] group-hover:bg-[#ababab]'>
            <button className='text-black text-[1.2rem] px-6 py-3 bg-[#919191] cursor-pointer group-hover:bg-[#ebebeb] hover:bg-black hover:text-white'>Sign up</button>
          </div>
        </div>
      </div>




    </div>
  )
}

export default About