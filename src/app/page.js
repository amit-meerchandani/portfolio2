"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { useToast } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const toast = useToast();

  const callingToast = () => {
    toast({
      title: "Message Sent",
      description: "Your email has been sent successfully.",
      status: "success",
      duration: 3000,
      position: "top-right",
      isClosable: true,
    });
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection callingToast={callingToast} />
      </div>
      <Footer />
      <ToastContainer />
    </main>
  );
}
