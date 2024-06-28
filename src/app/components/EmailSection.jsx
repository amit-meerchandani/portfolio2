"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";

import {
  Button,
} from "@chakra-ui/react";

const EmailSection = ({ callingToast }) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { name, email, subject, message };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      } else {
        toast.error("Failed to send Message");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }

    setIsLoading(false);
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-4 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-950 to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/amit-meerchandani" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/amit-meerchandani-51bb93210/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10 mt-5 md:mt-0">

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Bhupendra Jogi"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jogi@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about ....."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* might be using this in future */}
          {/* <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={isLoading}
            isLoading={isLoading}
          >
            Send Message
          </button> */}
          <Button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={isLoading}
            isLoading={isLoading}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
