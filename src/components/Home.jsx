import React from "react";

const Home = () => {
  return (
    <div
      name="home"
      className="
        min-h-[90vh]
        text-white
        flex
        flex-col-reverse
        lg:flex-row
        items-center
        justify-center
        lg:justify-between
        px-6
        lg:px-12
        pt-24
        lg:pt-[18vh]
        overflow-hidden
      "
    >
      {/* Text Section */}
      <div className="text-center lg:text-left max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight">
          Agashi Victor Tochukwu
        </h1>

        <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-gray-200">
          Full-Stack Developer · Gashman
        </p>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base">
          I build modern web applications and software with React, TypeScript,
          Node.js, JavaScript and Rust.
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-8 lg:mb-0 flex justify-center w-full lg:w-auto">
        <img
          src="/Hero2.jpg"
          alt="Agashi Victor Tochukwu, also known as Gashman"
          className="
            h-[260px]
            sm:h-[320px]
            md:h-[380px]
            lg:h-[90vh]
            w-auto
            max-w-full
            object-contain
          "
        />
      </div>
    </div>
  );
};

export default Home;
