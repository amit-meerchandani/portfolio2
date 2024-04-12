"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "forkIt",
    description: "A community of peers ready to connect, collaborate, and create together.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-Voting DAPP",
    description: "Decentralized application aims to initialize and execute election using blockchain technology.",
    image: "/images/projects/2.png",
    tag: ["All", "Blockchain"],
    gitUrl: "https://github.com/amit-meerchandani/e-voting-dapp",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "ChatApp",
    description: "A realtime chat app using which, one can either create a room or join another using web sockets.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "QRify",
    description: "Converting text to QR is easy but ever heard of converting image to QR? Try QRify!",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amit-meerchandani/image-to-qrcode",
    previewUrl: "https://amit-meerchandani.github.io/image-to-qrcode/",
  },
  {
    id: 5,
    title: "Login-Signup Page",
    description: "Attractive login-signup page using CSS Animations.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amit-meerchandani/aninmated-login-signup",
    previewUrl: "https://amit-meerchandani.github.io/aninmated-login-signup/",
  },
  {
    id: 6,
    title: "First Portfolio",
    description: "My first portfolio website using plain HTML and CSS.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amit-meerchandani/first-portfolio",
    previewUrl: "https://amit-meerchandani.github.io/first-portfolio/index.html",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blockchain"
          isSelected={tag === "Blockchain"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
