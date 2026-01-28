import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faCircleUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-black">
      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside className="hidden lg:flex bg-[#222222] text-white w-[9.5vw] flex-col text-sm font-semibold">
        {/* Image */}
        <div className="w-full h-[23vh]">
          <img src="/Hero2.jpg" alt="Hero" className="h-full w-full object-cover" />
        </div>

        {/* Links */}
        <Link
          to="home"
          spy
          smooth
          offset={-10}
          containerId="scroll-container"
          activeClass="bg-black"
          className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black transition h-[17vh]"
        >
          <FontAwesomeIcon icon={faHouseUser} className="text-xl" />
          Home
        </Link>

        <Link
          to="about"
          spy
          smooth
          offset={-10}
          containerId="scroll-container"
          activeClass="bg-black"
          className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black transition h-[17vh]"
        >
          <FontAwesomeIcon icon={faCircleUser} className="text-xl" />
          About
        </Link>

        <Link
          to="works"
          spy
          smooth
          offset={-10}
          containerId="scroll-container"
          activeClass="bg-black"
          className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black transition h-[17vh]"
        >
          <FontAwesomeIcon icon={faBriefcase} className="text-xl" />
          Projects
        </Link>

        <Link
          to="contact"
          spy
          smooth
          offset={-10}
          containerId="scroll-container"
          activeClass="bg-black"
          className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-black transition h-[17vh]"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          Contact
        </Link>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex-1 flex flex-col">
        {/* ===== MOBILE TOP NAV ===== */}
        <nav className="lg:hidden sticky top-0 z-50 bg-[#111111] text-white border-b border-[#222]">
          <div className="flex justify-around py-4 text-sm font-medium">
            <Link
              to="home"
              spy
              smooth
              offset={-70}
              containerId="scroll-container"
              activeClass="text-[#919191] border-b border-[#919191]"
              className="cursor-pointer pb-1 transition"
            >
              Home
            </Link>

            <Link
              to="about"
              spy
              smooth
              offset={-70}
              containerId="scroll-container"
              activeClass="text-[#919191] border-b border-[#919191]"
              className="cursor-pointer pb-1 transition"
            >
              About
            </Link>

            <Link
              to="works"
              spy
              smooth
              offset={-70}
              containerId="scroll-container"
              activeClass="text-[#919191] border-b border-[#919191]"
              className="cursor-pointer pb-1 transition"
            >
              Projects
            </Link>

            <Link
              to="contact"
              spy
              smooth
              offset={-70}
              containerId="scroll-container"
              activeClass="text-[#919191] border-b border-[#919191]"
              className="cursor-pointer pb-1 transition"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* ===== SCROLLABLE CONTENT ===== */}
        <div
          id="scroll-container"
          className="flex-1 overflow-y-scroll scroll-smooth no-scrollbar px-4 lg:px-0"
        >
          <Home />
          <About />
          <Works />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
