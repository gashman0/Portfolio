import React from "react";

const Works = () => {
  return (
    <div name="works" className="px-6 lg:pl-12 pt-16">
      {/* Heading */}
      <p className="text-2xl sm:text-3xl lg:text-[3rem] text-[#f1f1f1] mb-8 w-fit">
        My Projects
      </p>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          "/billstation.png",
          "/digital-bank.png",
          "/jobs-board.png",
          "/crypto-tracker.png",
        ].map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={img}
              alt="Project preview"
              className="
                w-full h-full object-cover
                opacity-100 lg:opacity-60
                lg:group-hover:opacity-100
                transition duration-500
              "
            />

            <a
              href="#"
              className="
                absolute bottom-4 left-1/2 -translate-x-1/2
                bg-black/70 text-sm sm:text-base px-5 py-2
                hover:bg-black/90 transition text-white rounded-md
              "
            >
              View More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
