import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardSection from "./components/Card";
import HowItWorks from "./components/HowItWorks";
import HappyUsers from "./components/happyUser";
import StayInTouch from "./components/stayInTouch";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-[150vh]"> 
      <Navbar/>
      <Hero/>
      <CardSection/>
      <HowItWorks/>
      <HappyUsers/>
      <StayInTouch/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
