"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (  
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mt-7 mb-6 text-2xl lg:text-7xl lg:leading-normal font-extrabold lg:ml-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Amit Meerchandani",
                1000,
                "Blockchain Developer",
                1000,
                "Frontend Developer",
                1000,
                "Graphic Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-[11px] sm:text-lg mb-14 lg:text-l lg:ml-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">|</span> Web3 and Front-end Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">|</span> MCA student at VIT Chennai <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">| <b>Open to Work</b> |</span> Biography Enthusiast <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">|</span>
          </p>
          <div>
            <Link
              href="/#contact"
              className="lg:ml-12 px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire me
            </Link>    
            
            <Link
              href="https://drive.google.com/file/d/1MLn85ALZZJaAVNdDhlwyiyGL589RNsmz/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3" target="_blank"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Resume
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
