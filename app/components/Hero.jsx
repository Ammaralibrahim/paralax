"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [initialScrollDone, setInitialScrollDone] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = initialScrollDone ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [initialScrollDone]);

  useEffect(() => {
    const handleScrollStart = () => {
      if (!initialScrollDone) {
        setInitialScrollDone(true);
        setScrolled(true);
      }
    };

    window.addEventListener("wheel", handleScrollStart, { passive: true });
    window.addEventListener("touchmove", handleScrollStart, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScrollStart);
      window.removeEventListener("touchmove", handleScrollStart);
    };
  }, [initialScrollDone]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const atTop = scrollTop < 50; // Daha hassas bir threshold

      if (atTop && initialScrollDone) {
        setScrolled(false);
      } else if (!atTop && initialScrollDone) {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialScrollDone]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "2%"]);

  const shimmerVariants = {
    animate: {
      y: ["0%", "15%", "0%", "-15%", "0%"],
      scale: [1, 1.1, 0.9, 1.05, 1],
      rotate: [0, 15, -15, 10, 0],
      transition: { 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut",
        // Animasyonun tersine dönüşte de çalışması için
        repeatType: "mirror" 
      },
    },
  };

  // Logo animasyonu için yeni transition ayarı
  const logoTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    duration: 0.5
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-white h-[140vh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url(/hero-bg.jpg)', y }}
      />

      {/* Animated Logo */}
      <motion.div
        className="fixed z-50"
        initial={{ top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 4 }}
        animate={
          scrolled
            ? { top: "25px", left: "270px", x: "0%", y: "0%", scale: 0.6 }
            : { top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 4 }
        }
        transition={{ duration: 0.5 }}
      >
        <Image src="/brightedu.svg" alt="Logo" width={200} height={200} />
      </motion.div>

      {/* Floating Images */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute"
          initial={{ top: "-120px", left: "-290px", width: 120, height: 120 }}
          animate={{
            top: scrolled ? "-280px" : "-380px",
            left: scrolled ? "-340px" : "-450px",
            width: scrolled ? 160 : 130,
            height: scrolled ? 160 : 120,
          }}
          transition={{ duration: 0.5 }}
          variants={shimmerVariants}
        >
          <Image
            src="/mezun.svg"
            alt="Feature 1"
            width={160}
            height={160}
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ top: "-135px", right: "-290px", width: 120, height: 120 }}
          animate={{
            top: scrolled ? "-360px" : "-430px",
            right: scrolled ? "-300px" : "-510px",
            width: scrolled ? 160 : 200,
            height: scrolled ? 160 : 120,
          }}
          transition={{ duration: 0.5 }}
          variants={shimmerVariants}
        >
          <Image
            src="/girl.svg"
            alt="Feature 2"
            width={160}
            height={160}
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ bottom: "-150px", left: "-290px", width: 120, height: 120 }}
          animate={{
            bottom: scrolled ? "-130px" : "-60px",
            left: scrolled ? "-460px" : "-460px",
            width: scrolled ? 160 : 200,
            height: scrolled ? 160 : 120,
          }}
          transition={{ duration: 0.5 }}
          variants={shimmerVariants}
        >
          <Image
            src="/boy.svg"
            alt="Feature 3"
            width={160}
            height={160}
            className="object-cover z-[0]"
          />
        </motion.div>

        <motion.div
          className="absolute"
          initial={{ bottom: "-120px", right: "-240px", width: 120, height: 120 }}
          animate={{
            bottom: scrolled ? "-220px" : "50px",
            right: scrolled ? "-300px" : "-400px",
            width: scrolled ? 160 : 160,
            height: scrolled ? 160 : 120,
          }}
          transition={{ duration: 0.5 }}
          variants={shimmerVariants}
        >
          <Image
            src="/pen.svg"
            alt="Feature 4"
            width={160}
            height={160}
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Text Content with Button */}
      <motion.div
  className="absolute w-[800px] text-center"
  style={{
    left: "50%",
    x: "-50%", // Yatayda tam ortala
    top: "45%", 
  }}
  initial={{ 
    opacity: 0,
    y: "100vh" // Başlangıçta ekranın tam altında
  }}
  animate={{ 
    opacity: scrolled ? 1 : 0,
    y: scrolled ? "-50%" : "100vh" // Ortaya gel (-50% ile dikeyde ortala)
  }}
  transition={{ 
    type: "spring", 
    stiffness: 100,
    damping: 20,
    duration: 0.5 
  }}
>
        <h1 className="text-[96px] text-center relative h-full w-full flex flex-col items-center justify-center">
          <span className="block ml-[-150px] text-black text-[96px]">Transform</span>
          <div className="inline-flex flex-col items-start relative">
            <span className="absolute left-[-200px] top-1/2 transform -translate-y-1/2 text-[96px] text-black">
              with
            </span>
            <span className="block text-black ml-[40px] text-[96px]">Education</span>
            <span className="block bg-[#5E3CB5] text-white px-6 py-1 rounded-2xl text-[80px]">
              AI-Powered
            </span>
          </div>
          <span className="block mr-[100px] text-[96px] text-black">Tutoring</span>
        </h1>

        {/* Animated Button with Description */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: scrolled ? 1 : 0,
            y: scrolled ? 100 : 50,
          }}
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          <span className="text-gray-400 text-[16px] font-normal  pb-4 ">
            Seamlessly integrate with your LMS to boost <br/> student outcomes and reduce teacher workload
          </span>
          <button className="relative bg-gradient-to-r from-[#0099FF]  to-[#CC00FF] text-white px-20 py-2 rounded-2xl text-2xl shadow-xl  transition-all duration-300 transform hover:scale-105 group">
  {/* Sol yıldızlar */}
  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex space-x-1 ">
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z" fill="white" stroke="#CDCDCD" strokeWidth="0.48" strokeMiterlimit="2.613"/>
</svg>

<svg width="21" className="mt-4 " height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z" fill="white" stroke="#CDCDCD" strokeWidth="0.48" strokeMiterlimit="2.613"/>
</svg>

  </div>

  {/* Sağ yıldızlar */}
  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-1 ">
  <svg className="mt-4 " width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z" fill="white" stroke="#CDCDCD" strokeWidth="0.48" strokeMiterlimit="2.613"/>
</svg>

<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z" fill="white" stroke="#CDCDCD" strokeWidth="0.48" strokeMiterlimit="2.613"/>
</svg>

  </div>

  Request a Demo Now
</button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
