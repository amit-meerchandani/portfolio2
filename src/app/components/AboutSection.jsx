"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJS</li>
        <li>ExpressJS</li>
        <li>NodeJS</li>
        <li>Git</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>AWS Cloud</li>
        <li>Docker</li>
        <li className="text-[#A855F7]">Solidity</li>
        <li className="text-[#A855F7]">Hyperledger Fabrics</li>
      </ul>
    ),
  },
  

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 lg:text-base font-bold" >
        <li className="flex  justify-between">
          <div><span className="font-bold text-l">• </span> Master of Computer Application (MCA) <br /><span className="font-normal ml-5">- Vellore Institute of Technology </span></div><span className="text-[#A855F7] font-bold">[2023 - 2025]</span></li><br />
        <li className="flex  justify-between">
          <div><span className="font-bold text-l">• </span> Bachelor of Computer Application (BCA)  <br /><span className="font-normal ml-5">- University of Rajasthan </span></div><span className="text-[#A855F7] font-bold">[2023 - 2025]</span></li><br />
      </ul>
    ),
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Blockchain Development from <a href="https://ineuron.ai/" target="_blank" className="text-[#A855F7]"><b> iNeuron </b></a></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I&apos;m a blockchain <span className="text-[#A855F7] font-bold text-2xl">x</span> front-end developer with a deep love for technology. I spend my free time devouring books on the latest advancements and watching biographies of tech masterminds. My skills include working with Solidity, JavaScript, React and Git. I&apos;m always eager to learn and expand my expertise, and I thrive in collaborative environments where I can contribute to creating innovative solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
