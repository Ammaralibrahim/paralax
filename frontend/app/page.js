"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardSection from "./components/Card";
import MoCard from "./components/mobile/MoCard";  // Mobile version import
import HowItWorks from "./components/HowItWorks";
import MoHowItWorks from "./components/mobile/MoHowItWorks";  // Import MoHowItWorks for mobile version
import HappyUsers from "./components/happyUser";
import MoHappyUsers from "./components/mobile/MoHappyUserSay"; // Import MoHappyUsers for mobile
import MoFaq from "./components/mobile/MoFaq"; // Import MoHappyUsers for mobile
import StayInTouch from "./components/stayInTouch";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile size threshold, adjust as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Add event listener to update state on resize

    return () => window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
  }, []);

  return (
    <div className="h-[150vh]">
      <Navbar />
      <Hero />
      {isMobile ? <MoCard /> : <CardSection />}  {/* Switch between CardSection and MoCard based on screen size */}
      {isMobile ? <MoHowItWorks /> : <HowItWorks />} {/* Switch between HowItWorks and MoHowItWorks based on screen size */}
      {isMobile ? <MoHappyUsers /> : <HappyUsers />}  {/* Mobil için MoHappyUsers eklendi */}
      <StayInTouch />
      {isMobile ? <MoFaq /> : <FAQ />}  {/* Mobil için MoHappyUsers eklendi */}
      <Footer />
    </div>
  );
}
