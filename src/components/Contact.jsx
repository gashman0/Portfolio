import React, { useState } from "react";
import { useContact } from "../network/queries";
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
import Toast from "./ui/Toast";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [toast, setToast] = useState(null);

  const contactMutation = useContact();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    // Clear the current toast when the user starts editing again
    if (toast) {
      setToast(null);
    }

    // Reset previous mutation error
    if (contactMutation.isError) {
      contactMutation.reset();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    contactMutation.mutate(formData, {
      onSuccess: (data) => {
        setToast({
          type: "success",
          message:
            data?.message || "Your message has been sent successfully.",
        });

        setFormData(initialFormData);
      },

      onError: (error) => {
        const response = error?.response?.data;

        const fieldErrors = response?.errors;

        const firstFieldError = fieldErrors
          ? Object.values(fieldErrors)?.[0]?.[0]
          : null;

        setToast({
          type: "error",
          message:
            firstFieldError ||
            response?.message ||
            "Unable to send your message. Please try again.",
        });
      },
    });
  };

  return (
    <div
      name="contact"
      className="overflow-hidden px-6 pt-16 lg:pl-12"
    >
      {/* Content wrapper */}
      <div className="text-white">
        {/* Form */}
        <div className="w-full">
          <p className="mb-2 text-2xl text-[#f1f1f1] sm:text-3xl lg:text-[3rem]">
            Contact Me
          </p>

          <p className="mb-6">
            Let's get in touch, send a message
          </p>

          {/* Form + Contact info */}
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* Inputs */}
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-5 lg:w-3/5"
            >
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium tracking-wide text-[#cfcfcf] sm:text-base"
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  required
                  disabled={contactMutation.isPending}
                  className="w-full border border-[#3a3a3a] bg-[#111111] px-4 py-3 text-base text-white outline-none transition placeholder:text-[#777777] focus:border-white focus:bg-[#151515] disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium tracking-wide text-[#cfcfcf] sm:text-base"
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={254}
                  autoComplete="email"
                  required
                  disabled={contactMutation.isPending}
                  className="w-full border border-[#3a3a3a] bg-[#111111] px-4 py-3 text-base text-white outline-none transition placeholder:text-[#777777] focus:border-white focus:bg-[#151515] disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium tracking-wide text-[#cfcfcf] sm:text-base"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={150}
                  disabled={contactMutation.isPending}
                  className="w-full border border-[#3a3a3a] bg-[#111111] px-4 py-3 text-base text-white outline-none transition placeholder:text-[#777777] focus:border-white focus:bg-[#151515] disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium tracking-wide text-[#cfcfcf] sm:text-base"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  minLength={10}
                  maxLength={2000}
                  required
                  disabled={contactMutation.isPending}
                  className="w-full resize-y border border-[#3a3a3a] bg-[#111111] px-4 py-3 text-base text-white outline-none transition placeholder:text-[#777777] focus:border-white focus:bg-[#151515] disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={contactMutation.isPending}
                className="group flex w-fit items-center gap-3 border border-white px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:border-[#555555] disabled:text-[#777777] disabled:hover:bg-transparent disabled:hover:text-[#777777] sm:text-base"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="text-base transition group-hover:text-black group-disabled:text-[#777777]"
                />

                {contactMutation.isPending
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>

            {/* Contact info */}
            <div className="w-full space-y-7 lg:w-2/5">
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
                <a href="tel:+2348140894435">
                  +234 814 089 4435
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xl sm:text-2xl"
                />
                <a href="mailto:gashman878@gmail.com">
                  gashman878@gmail.com
                </a>
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
                <a href="https://x.com/gashman00">
                  Dev. Gashman
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-xl sm:text-2xl"
                />
                <a href="https://github.com/gashman0">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-[#717171] py-4 text-center text-sm text-[#717171] sm:text-[1.3rem]">
        &copy; Copyright Gashman, 2025. All rights reserved.
      </div>

      {/* Toast */}
      <Toast
        type={toast?.type}
        message={toast?.message}
        onClose={() => setToast(null)}
      />
    </div>
  );
};

export default Contact;