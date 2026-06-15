import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div
      name="about"
      className="text-white px-6 lg:px-12 pt-16 overflow-hidden"
    >
      {/* Name */}
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] text-[#f1f1f1] mb-6">
        Agashi Victor Tochukwu
      </p>

      <hr className="w-32 sm:w-48 mb-8" />

      {/* About text */}
      <p className="text-justify text-base sm:text-lg md:text-2xl text-[#ebebeb] leading-relaxed">
        I started out building simple interfaces with Javascript and  React, and over the past two 
        years I have grown into building full web applications used in real
        environments. Currently, I work with a fintech startup where I
        contribute to developing products that people actually rely on. That
        experience has pushed me to think beyond just UI, I now look at performance,
        structure, and real-world usability. Outside of work, I have built projects
        like a job/career platform and a crypto tracking app, not just for practice, but
        to understand how real products are designed, built, and improved over
        time. I’m currently expanding into backend development with Node.js so I
        can take full ownership of the applications I build. I care about doing
        things properly, writing clean code, and getting better every day.
      </p>

      {/* Skills */}
      <p className="text-2xl sm:text-3xl lg:text-[3rem] text-[#f1f1f1] mt-12 mb-6">
        My Skills
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          {name: "Rust", value: "30%"},
          { name: "JavaScript", value: "82%" },
          { name: "TypeScript", value: "60%" },
          { name: "React", value: "70%" },
          { name: "HTML, CSS, Tailwind", value: "90%" },
          { name: "Git & GitHub", value: "50%" },
        ].map((skill) => (
          <div key={skill.name}>
            <p className="text-[#ebebeb] text-sm sm:text-base md:text-lg mb-2">
              {skill.name}
            </p>
            <div className="bg-[#414141] h-3 sm:h-4">
              <div
                className="bg-[#919191] h-full"
                style={{ width: skill.value }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-12 bg-[#ebebeb] text-black grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 text-center">
        {[
          ["2+", "Partners"],
          ["13+", "Projects Done"],
          ["1+", "Jobs"],
          ["1+", "Years of Exp."],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-xl sm:text-2xl font-semibold">{value}</p>
            <p className="text-sm sm:text-base">{label}</p>
          </div>
        ))}
      </div>

      {/* Download */}
      <div className="mt-10">
        <button className="border flex items-center gap-3 px-6 py-4 group hover:bg-white transition">
          <FontAwesomeIcon
            icon={faDownload}
            className="text-xl group-hover:text-black"
          />
          <span className="text-base sm:text-lg group-hover:text-black">
            Download Resume
          </span>
        </button>
      </div>

{/* Pricing */}
<p className="text-2xl sm:text-3xl lg:text-[3rem] text-[#f1f1f1] mt-16 mb-6">
  My Pricing
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {[
    {
      title: "Full-Time",
      price: "N200,000",
      duration: "per month",
      hours: "30+ hrs weekly",
    },
    {
      title: "Contract",
      price: "N400,000",
      duration: "per project",
      hours: "Flexible Hours",
    },
  ].map((plan) => (
    <div key={plan.title} className="group">
      {/* Header */}
      <p className="
        flex items-center justify-center text-xl font-semibold h-20
        bg-[#616161] lg:bg-[#414141]
        lg:group-hover:bg-[#616161]
        transition
      ">
        {plan.title}
      </p>

      {/* Features */}
      {["Frontend Developer", "Physical Contact", plan.hours].map((item) => (
        <p
          key={item}
          className="
            flex items-center justify-center text-base text-black h-14 border-b
            bg-[#ebebeb] lg:bg-[#919191]
            lg:group-hover:bg-[#ebebeb]
            transition
          "
        >
          {item}
        </p>
      ))}

      {/* Price */}
      <div
        className="
          flex flex-col items-center justify-center text-black h-20 border-b
          bg-[#ebebeb] lg:bg-[#919191]
          lg:group-hover:bg-[#ebebeb]
          transition
        "
      >
        <p className="text-lg">{plan.price}</p>
        <p>{plan.duration}</p>
      </div>

      {/* Button area */}
      <div
        className="
          flex justify-center items-center h-20
          bg-[#ababab] lg:bg-[#818181]
          lg:group-hover:bg-[#ababab]
          transition
        "
      >
        <button className="text-black text-sm px-6 py-3 bg-[#919191] hover:bg-black hover:text-white transition">
          Sign up
        </button>
      </div>
    </div>
  ))}
</div>



    </div>
  );
};

export default About;
