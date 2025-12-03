import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faCircleUser, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCode, faCodeBranch, faCodeCommit, faCodePullRequest } from "@fortawesome/free-solid-svg-icons";



const MainLayout = () => {
  return (
    <div className="flex h-screen bg-[#000000]">

      {/* LEFT NAV */}
      <div className="bg-[#222222] text-[#ffffff] w-[9.5vw] flex flex-col text-xl font-bold">
        <div className='w-full h-[23vh]'>
          <img src="/Hero2.jpg" alt="" className='h-full'/>
          
        </div>
        <Link to="home" offset={-10} containerId="scroll-container" spy={true} activeClass='bg-[#000000]' className="flex flex-col items-center justify-center cursor-pointer hover:bg-[#000000] h-[17vh]">
          <FontAwesomeIcon icon={faHouseUser} className="text-[2rem] mb-2" />
          Home
        </Link>

        <Link to="about" offset={-10} containerId="scroll-container" spy={true} activeClass='bg-[#000000]' className="flex flex-col items-center justify-center cursor-pointer hover:bg-[#000000] h-[17vh]">
          <FontAwesomeIcon icon={faCircleUser} className="text-[2rem] mb-2" />
          About
        </Link>

        <Link to="works" offset={-10} containerId="scroll-container" spy={true} activeClass='bg-[#000000]' className="flex flex-col items-center justify-center cursor-pointer hover:bg-[#000000] h-[17vh]">
          <FontAwesomeIcon icon={faBriefcase} className="text-[2rem] mb-2" />
          Projects
        </Link>

        <Link to="contact" offset={-10} containerId="scroll-container" spy={true} activeClass='bg-[#000000]' className="flex flex-col items-center justify-center cursor-pointer hover:bg-[#000000] h-[17vh]">
          <FontAwesomeIcon icon={faEnvelope} className="text-[2rem] mb-2" />
          Contact Us
        </Link>
      </div>

      {/* RIGHT SCROLLABLE CONTENT */}
      <div id="scroll-container" className="w-[90.5vw] overflow-y-scroll scroll-smooth no-scrollbar px-30">
        <Home />
        <About />
        <Works />
        <Contact />
      </div>
      
    </div>
  );
};

export default MainLayout;
