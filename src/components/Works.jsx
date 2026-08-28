import React from "react";

const projects = [
  {
    name: "The Bill Station",
    description:
      "A fintech platform for sending money, paying bills, utilities, and subscriptions.",
    image: "/billstation.webp",
    url: "https://www.thebillstation.com/",
  },
  {
    name: "Fluxa",
    description:
      "A jobs board that aggregates job opportunities from multiple platforms into one place.",
    image: "/fluxa.webp",
    url: "https://fluxa.bond",
  },
  {
    name: "Jobs Board",
    description:
      "A job board application where users can post, edit, apply for, and delete jobs.",
    image: "/jobs-board.webp",
    url: "https://jobsboards.netlify.app",
  },
  {
    name: "Crypto Tracker",
    description:
      "A cryptocurrency tracking application for monitoring cryptocurrency prices.",
    image: "/crypto-tracker.webp",
    url: "https://crypto-tracke.netlify.app/",
  },
];

const Works = () => {
  return (
    <section
      id="works"
      name="works"
      className="min-h-screen bg-black px-6 pt-16 pb-20 lg:pl-12"
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-normal text-white sm:text-3xl lg:text-[3rem]">
          Projects by Agashi Victor Tochukwu
        </h2>

        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Some of the things I've built.
        </p>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-md border border-[#222] bg-[#111]"
          >
            {/* Project Image */}
            <div className="h-[220px] w-full overflow-hidden sm:h-[260px]">
              <img
                src={project.image}
                alt={`${project.name} project by Agashi Victor Tochukwu`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-normal text-white sm:text-2xl">
                {project.name}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
                {project.description}
              </p>

              {/* View Project */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-gray-500
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-yellow-500
                  transition
                  hover:bg-gray-500
                  hover:text-black
                  sm:text-base
                "
              >
                View Project
                {/* <span aria-hidden="true">↗</span> */}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Works;