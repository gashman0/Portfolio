import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useHire } from "../network/queries";
import resume from "../assets/Resume.pdf";

const About = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const openHireModal = (plan) => {
    setSelectedPlan(plan);
    setIsHireModalOpen(true);
  };

  const closeHireModal = () => {
    setIsHireModalOpen(false);
    setSelectedPlan(null);
  };

  const pricingPlans = [
    {
      title: "Full-Time",
      value: "full-time",
      price: "N200,000",
      duration: "per month",
      hours: "30+ hrs weekly",
    },
    {
      title: "Contract",
      value: "contract",
      price: "N400,000",
      duration: "per project",
      hours: "Flexible Hours",
    },
  ];

  return (
    <div
      name="about"
      className="overflow-hidden px-6 pt-16 text-white lg:px-12"
    >
      <p className="mb-6 text-2xl text-[#f1f1f1] sm:text-3xl md:text-4xl lg:text-[3rem]">
        Agashi Victor Tochukwu
      </p>

      <hr className="mb-8 w-32 sm:w-48" />

      <p className="text-justify text-base leading-relaxed text-[#ebebeb] sm:text-lg md:text-2xl">
        I started out building simple interfaces with Javascript and React, and
        over the past two years I have grown into building full web applications
        used in real environments. Currently, I work with a fintech startup
        where I contribute to developing products that people actually rely on.
        That experience has pushed me to think beyond just UI, I now look at
        performance, structure, and real-world usability. Outside of work, I
        have built projects like a job/career platform and a crypto tracking
        app, not just for practice, but to understand how real products are
        designed, built, and improved over time. I’m currently expanding into
        backend development with Node.js so I can take full ownership of the
        applications I build. I care about doing things properly, writing clean
        code, and getting better every day.
      </p>

      <p className="mb-6 mt-12 text-2xl text-[#f1f1f1] sm:text-3xl lg:text-[3rem]">
        My Skills
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {[
          { name: "Rust", value: "30%" },
          { name: "Node.js", value: "40%" },
          { name: "JavaScript", value: "82%" },
          { name: "TypeScript", value: "60%" },
          { name: "React", value: "70%" },
          { name: "HTML, CSS, Tailwind", value: "90%" },
          { name: "Git & GitHub", value: "50%" },
        ].map((skill) => (
          <div key={skill.name}>
            <p className="mb-2 text-sm text-[#ebebeb] sm:text-base md:text-lg">
              {skill.name}
            </p>

            <div className="h-3 bg-[#414141] sm:h-4">
              <div
                className="h-full bg-[#919191]"
                style={{ width: skill.value }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 bg-[#ebebeb] py-8 text-center text-black sm:grid-cols-4">
        {[
          ["2+", "Partners"],
          ["13+", "Projects Done"],
          ["1+", "Jobs"],
          ["1+", "Years of Exp."],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-xl font-semibold sm:text-2xl">{value}</p>
            <p className="text-sm sm:text-base">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href={resume}
          download="Agashi-Victor-Resume.pdf"
          className="group flex w-fit items-center gap-3 border px-6 py-4 transition hover:bg-white"
        >
          <FontAwesomeIcon
            icon={faDownload}
            className="text-xl group-hover:text-black"
          />

          <span className="text-base group-hover:text-black sm:text-lg">
            Download Resume
          </span>
        </a>
      </div>

      <p className="mb-6 mt-16 text-2xl text-[#f1f1f1] sm:text-3xl lg:text-[3rem]">
        My Pricing
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {pricingPlans.map((plan) => (
          <div key={plan.value} className="group">
            <p className="flex h-20 items-center justify-center bg-[#616161] text-xl font-semibold transition lg:bg-[#414141] lg:group-hover:bg-[#616161]">
              {plan.title}
            </p>

            {["Frontend Developer", "Physical Contact", plan.hours].map(
              (item) => (
                <p
                  key={item}
                  className="flex h-14 items-center justify-center border-b bg-[#ebebeb] text-base text-black transition lg:bg-[#919191] lg:group-hover:bg-[#ebebeb]"
                >
                  {item}
                </p>
              ),
            )}

            <div className="flex h-20 flex-col items-center justify-center border-b bg-[#ebebeb] text-black transition lg:bg-[#919191] lg:group-hover:bg-[#ebebeb]">
              <p className="text-lg">{plan.price}</p>
              <p>{plan.duration}</p>
            </div>

            <div className="flex h-20 items-center justify-center bg-[#ababab] transition lg:bg-[#818181] lg:group-hover:bg-[#ababab]">
              <button
                type="button"
                onClick={() => openHireModal(plan.value)}
                className="border border-black px-6 py-3 text-black transition hover:bg-black hover:text-white"
              >
                Hire me
              </button>
            </div>
          </div>
        ))}
      </div>

      {isHireModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
          <div className="w-full max-w-xl border border-[#333] bg-[#0f0f0f] p-6 text-white shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl">Hire Request</h2>

              <button
                type="button"
                onClick={closeHireModal}
                className="text-xl transition hover:text-red-400"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <HireForm selectedPlan={selectedPlan} onClose={closeHireModal} />
          </div>
        </div>
      )}
    </div>
  );
};

const HireForm = ({ selectedPlan, onClose }) => {
  const hireMutation = useHire();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: selectedPlan || "",
    projectType: "",
    projectDescription: "",
    budget: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    hireMutation.mutate(formData, {
      onSuccess: () => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          plan: selectedPlan || "",
          projectType: "",
          projectDescription: "",
          budget: "",
        });

        onClose();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        minLength={2}
        maxLength={100}
        className="w-full bg-white p-3 text-black outline-none"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        maxLength={254}
        className="w-full bg-white p-3 text-black outline-none"
      />

      <input
        name="phone"
        type="text"
        placeholder="Phone number"
        value={formData.phone}
        onChange={handleChange}
        maxLength={30}
        className="w-full bg-white p-3 text-black outline-none"
      />

      <select
        name="plan"
        value={formData.plan}
        onChange={handleChange}
        required
        className="w-full bg-white p-3 text-black outline-none"
      >
        <option value="">Select plan</option>
        <option value="full-time">Full-Time</option>
        <option value="contract">Contract</option>
      </select>

      <input
        name="projectType"
        type="text"
        placeholder="Project type e.g. E-commerce website"
        value={formData.projectType}
        onChange={handleChange}
        className="w-full bg-white p-3 text-black outline-none"
      />

      <textarea
        name="projectDescription"
        placeholder="Tell me about the project"
        rows={5}
        value={formData.projectDescription}
        onChange={handleChange}
        required
        minLength={10}
        maxLength={5000}
        className="w-full resize-y bg-white p-3 text-black outline-none"
      />

      <input
        name="budget"
        type="text"
        placeholder="Budget e.g. NGN 400,000"
        value={formData.budget}
        onChange={handleChange}
        maxLength={100}
        className="w-full bg-white p-3 text-black outline-none"
      />

      {hireMutation.isError && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={hireMutation.isPending}
        className="border px-6 py-3 transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        {hireMutation.isPending ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
};

export default About;
