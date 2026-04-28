import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div name="contact" className="px-6 lg:pl-12 pt-16 overflow-hidden">
      {/* Content wrapper */}
      <div className="text-white">
        {/* Form */}
        <div className="w-full">
          <p className="text-2xl sm:text-3xl lg:text-[3rem] text-[#f1f1f1] mb-2">
            Contact Me
          </p>

          <p className="mb-6">Let's get in touch, send a message</p>

          {/* Form + Contact info */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Inputs */}
            <div className="space-y-6 w-full lg:w-3/5">
              <input
                type="text"
                placeholder="Name"
                className="bg-white text-base sm:text-[1.4rem] text-black p-3 outline-none w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white text-base sm:text-[1.4rem] text-black p-3 outline-none w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="bg-white text-base sm:text-[1.4rem] text-black p-3 outline-none w-full"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="bg-white text-base sm:text-[1.4rem] text-black p-3 outline-none w-full"
              />

              <button className="border flex items-center gap-2 px-6 py-4 group hover:bg-white hover:text-black transition w-fit">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-[1rem] group-hover:text-black"
                />
                Send Message
              </button>
            </div>

            {/* Contact info */}
            <div className="w-full lg:w-2/5 space-y-7">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faLocationDot} className="text-xl sm:text-2xl" />
                <p>Enugu, Nigeria.</p>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faPhone} className="text-xl sm:text-2xl" />
                <a href="tel:+2348140894435">+234 814 089 4435</a>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl sm:text-2xl" />
                <a href="mailto:gashman878@gmail.com">
                  gashman878@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl sm:text-2xl" />
                <a href="https://www.linkedin.com/in/victor-tochukwu-agashi/">
                  Victor Tochukwu Agashi
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faXTwitter} className="text-xl sm:text-2xl" />
                <a href="https://x.com/gashman00">Dev. Gashman</a>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faGithub} className="text-xl sm:text-2xl" />
                <a href="https://github.com/gashman0">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-[#717171] py-4 text-center text-sm sm:text-[1.3rem] text-[#717171]">
        &copy; Copyright Gashman, 2025. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
