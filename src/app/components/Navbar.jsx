"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect  } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

// Function to get current activity based on the time (IST)
const getCurrentActivity = () => {
  const date = new Date();
  const hours = date.getUTCHours() + 5.5; // IST is UTC+5:30
  const adjustedHours = hours % 24; // Adjust if hours go over 24
  console.log(adjustedHours)

  if (adjustedHours >= 0 && adjustedHours < 6) {
    return "might be sleeping";
  } else if (adjustedHours >= 6 && adjustedHours < 10) {
    return "might be eating";
  } else if (adjustedHours >= 10 && adjustedHours < 18) {
    return "might be coding";
  } else if (adjustedHours >= 18 && adjustedHours < 24) {
    return "might be chilling";
  } else {
    return "undefined activity";
  }
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [activity, setActivity] = useState("");

  useEffect(() => {
    const activity = getCurrentActivity();
    setActivity(activity);
  }, []);

  return (
    <nav className="fixed mx-auto border border-[#33353F] md:top-1 left-0 right-0 z-30 bg-[#121212] bg-opacity-75 backdrop-blur-md md:rounded-full md:w-[97%]">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold flex items-center"
        >
          <Image
            src="/images/hero-image.png"
            width={35}
            height={35}
            className="lg:ml-6"
          />
          <span className="ml-3 text-base md:text-lg lg:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 font-semibold">{activity}</span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 lg:mr-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
