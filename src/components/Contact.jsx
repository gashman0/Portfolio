import React from "react";
import { useState } from "react";
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
import { useContact } from "../network/queries";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState("");

  const contactMutation = useContact();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setSuccessMessage("");

    if (contactMutation.isError) {
      contactMutation.reset();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage("");

    contactMutation.mutate(formData, {
      onSuccess: (data) => {
        setSuccessMessage(
          data?.message || "Your message has been sent successfully.",
        );

        setFormData(initialFormData);
      },
    });
  };

  const errorMessage =
    contactMutation.error?.response?.data?.message ||
    contactMutation.error?.message ||
    "Unable to send your message. Please try again.";

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
<form
              onSubmit={handleSubmit}
              className="w-full space-y-6 lg:w-3/5"
            >
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  required
                  disabled={contactMutation.isPending}
                  className="w-full bg-white p-3 text-base text-black outline-none disabled:cursor-not-allowed disabled:opacity-70 sm:text-[1.4rem]"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={254}
                  autoComplete="email"
                  required
                  disabled={contactMutation.isPending}
                  className="w-full bg-white p-3 text-base text-black outline-none disabled:cursor-not-allowed disabled:opacity-70 sm:text-[1.4rem]"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="sr-only">
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={150}
                  disabled={contactMutation.isPending}
                  className="w-full bg-white p-3 text-base text-black outline-none disabled:cursor-not-allowed disabled:opacity-70 sm:text-[1.4rem]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  minLength={10}
                  maxLength={2000}
                  required
                  disabled={contactMutation.isPending}
                  className="w-full resize-y bg-white p-3 text-base text-black outline-none disabled:cursor-not-allowed disabled:opacity-70 sm:text-[1.4rem]"
                />
              </div>

              {successMessage && (
                <p
                  role="status"
                  className="rounded border border-green-500 bg-green-950/40 p-3 text-green-300"
                >
                  {successMessage}
                </p>
              )}

              {contactMutation.isError && (
                <p
                  role="alert"
                  className="rounded border border-red-500 bg-red-950/40 p-3 text-red-300"
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="group flex w-fit items-center gap-2 border px-6 py-4 transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-[1rem] group-hover:text-black"
                />

                {contactMutation.isPending
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>


            {/* Contact info */}
            <div className="w-full lg:w-2/5 space-y-7">
              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-xl sm:text-2xl"
                />
                <p>Enugu, Nigeria.</p>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-xl sm:text-2xl"
                />
                <a href="tel:+2348140894435">+234 814 089 4435</a>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xl sm:text-2xl"
                />
                <a href="mailto:gashman878@gmail.com">gashman878@gmail.com</a>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl sm:text-2xl"
                />
                <a href="https://www.linkedin.com/in/victor-tochukwu-agashi/">
                  Victor Tochukwu Agashi
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-xl sm:text-2xl"
                />
                <a href="https://x.com/gashman00">Dev. Gashman</a>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl sm:text-2xl"
                />
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
