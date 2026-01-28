import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <div name="contact" className='h-fit  text-[#ffffff] flex justify-between items-center gap-25 pt-15'>


          <div className='w-[140%]'>
            <p className='text-[3rem] text-[#f1f1f1] '>Contact Me</p>


            <p>Let's get in touch, send a message</p>
            <input type="text" placeholder='Name' className='bg-white text-[1.4rem] text-black p-3 outline-none w-full'/><br />
            <input type="text" placeholder='Email' className='bg-white text-[1.4rem] text-black p-3 outline-none w-full mt-6'/><br />
            <input type="text" placeholder='Subject' className='bg-white text-[1.4rem] text-black p-3 outline-none w-full mt-6'/><br />
            <textarea placeholder='Message' className='bg-white text-[1.4rem] text-black p-3 outline-none w-full mt-6'></textarea> <br />

            <button className='border flex items-center justify-center px-6 py-4 mt-5 group hover:bg-white hover:text-black'>
              <FontAwesomeIcon icon={ faPaperPlane } className="text-[1rem] group-hover:text-black" />
              Send Message
            </button>
          </div>

          <div className='h-fit w-full'>
            <div className='flex items-center gap-4'>
              <FontAwesomeIcon icon={faLocationDot} className='text-[2rem]'/> 
              <p>Enugu, Nigeria.</p>
            </div>

            <div className='flex items-center gap-4 mt-7'>
              <FontAwesomeIcon icon={faPhone} className='text-[2rem]'/>
              <a href="tel:+2348140894435">+234 814 089 4435</a>
            </div>

            <div className='flex items-center gap-4 mt-7'>
              <FontAwesomeIcon icon={faEnvelope} className='text-[2rem]'/>
              <a href="mailto:gashman878@gmail.com">gashman878@gmail.com</a>
            </div>

            <div className='flex items-center gap-4 mt-7'>
              <FontAwesomeIcon icon={faLinkedin} className='text-[2rem]'/>
              <a href="https://www.linkedin.com/in/victor-tochukwu-agashi/">Victor Tochukwu Agashi</a>
            </div>

            <div className='flex items-center gap-4 mt-7'>
              <FontAwesomeIcon icon={faXTwitter} className='text-[2rem]'/>
              <a href="https://x.com/gashman00">Dev. Gashman</a>
            </div>

            <div className='flex items-center gap-4 mt-7'>
              <FontAwesomeIcon icon={faGithub} className='text-[2rem]'/>
              <a href="https://github.com/gashman0">GitHub</a>
            </div>
          </div>


        </div>

        <div className=' h-fit mb-5 border-t text-white text-[1.3rem] text-center mt-20 py-4 border-[#717171]'>

          <p className='text-[#717171]'>&copy; Copyright Gashman, 2025. All rights reserved. </p>
          
        </div>
      </div>
    </>
  )
}

export default Contact