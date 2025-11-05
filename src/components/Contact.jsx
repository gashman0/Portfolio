import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faXTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div name="contact" className='h-[100vh] text-[#ffffff]'>
      <div>
        <p className='text-[3rem] text-[#f1f1f1] py-8'>Contact Me</p>

        <hr className='w-[20%] pb-8'/>


        <p>Let's get in touch, send a message</p>
        <input type="text" placeholder='Name' className='bg-white text-[1.4rem] text-black p-3 outline-none w-1/2'/><br />
        <input type="text" placeholder='Email' className='bg-white text-[1.4rem] text-black p-3 outline-none w-1/2 mt-6'/><br />
        <input type="text" placeholder='Subject' className='bg-white text-[1.4rem] text-black p-3 outline-none w-1/2 mt-6'/><br />
        <textarea placeholder='Message' className='bg-white text-[1.4rem] text-black p-3 outline-none w-1/2 mt-6'></textarea> <br />

        <button className='border flex items-center justify-center px-6 py-4 mt-5 group hover:bg-white hover:text-black'>
          <FontAwesomeIcon icon={ faPaperPlane } className="text-[1rem] group-hover:text-black" />
          Send Message
        </button>
      </div>

      <div>
        opjegopjer
      </div>


    </div>
  )
}

export default Contact