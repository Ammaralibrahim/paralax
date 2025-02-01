"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [initialScrollDone, setInitialScrollDone] = useState(false);
  const sectionRef = useRef(null);

  // Track the scroll state for floating images
  const [scrolledState, setScrolledState] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScrollStart = () => {
      if (!initialScrollDone) {
        setInitialScrollDone(true);
        setScrolled(true);
      }

      // If scroll has happened, update the scroll state
      if (!scrolledState) {
        setScrolledState(true);
      }
    };

    window.addEventListener("wheel", handleScrollStart, { passive: true });
    window.addEventListener("touchmove", handleScrollStart, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScrollStart);
      window.removeEventListener("touchmove", handleScrollStart);
    };
  }, [initialScrollDone, scrolledState]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const atTop = scrollTop < 1;

      if (atTop && initialScrollDone) {
        setScrolled(false);
      } else if (!atTop && initialScrollDone && !scrolledState) {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialScrollDone, scrolledState]);

  useEffect(() => {
    if (initialScrollDone) {
      document.body.style.overflow = "auto"; // Kaydırma etkin
    } else {
      document.body.style.overflow = "hidden"; // Kaydırma engellenmiş
    }
    return () => {
      document.body.style.overflow = "auto"; // Sayfa temizlendiğinde kaydırma aktif olsun
    };
  }, [initialScrollDone]);

  const getPositionStyles = (imageKey) => {
    const positions = {
      mezun: {
        default: { bottom: 50, right: 320, width: 160, height: 160 },
        scrolled: { bottom: 50, right: 230, width: 160, height: 160 },
        mobile: {
          default: { bottom: 100, right: 70, width: 80, height: 80 },
          scrolled: { bottom: 100, right: 70, width: 80, height: 80 },
        },
      },
      girl: {
        default: { bottom: 80, left: 320, width: 120, height: 120 },
        scrolled: { bottom: 100, left: 130, width: 190, height: 190 },
        mobile: {
          default: { bottom: 150, left: 80, width: 80, height: 80 },
          scrolled: { bottom: 150, left: 80, width: 80, height: 80 },
        },
      },
      boy: {
        default: { top: 110, right: 350, width: 120, height: 120 },
        scrolled: { top: 70, right: 350, width: 180, height: 180 },
        mobile: {
          default: { top: -60, right: 100, width: 80, height: 80 },
          scrolled: { top: -60, right: 100, width: 80, height: 80 },
        },
      },
      pen: {
        default: { top: 10, left: 240, width: 160, height: 160 },
        scrolled: { top: 140, left: 240, width: 160, height: 160 },
        mobile: {
          default: { top: -10, left: 110, width: 60, height: 60 },
          scrolled: { top: -10, left: 110, width: 60, height: 60 },
        },
      },
    };
    const state = scrolled || scrolledState ? "scrolled" : "default";
    return isMobile
      ? positions[imageKey].mobile[state]
      : positions[imageKey][state];
  };

  const images = [
    { src: "/mezun.svg", alt: "Feature 1", key: "mezun" },
    { src: "/girl.svg", alt: "Feature 2", key: "girl" },
    { src: "/boy.svg", alt: "Feature 3", key: "boy" },
    { src: "/pen.svg", alt: "Feature 4", key: "pen" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-white h-dvh flex items-center justify-center overflow-hidden "
    >
      {/* Logo animasyonu */}
      <motion.div
        className="fixed z-50 hidden md:block"
        animate={
          initialScrollDone
            ? {
                top: "10px",
                left: "270px",
                x: "0%",
                y: "0%",
                scale: 0.6,
                opacity: 1,
              }
            : {
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                scale: 4,
                opacity: 1,
              }
        }
        transition={{ duration: 0.5 }}
      >
        <Image src="/brightedu.svg" alt="Logo" width={200} height={200} />
      </motion.div>

      {/* Floating Images */}
      <div className="absolute">
        {images.map(({ src, alt, key }) => {
          const { top, left, right, bottom, width, height } =
            getPositionStyles(key);
          return (
            <motion.div
              key={key}
              className="absolute"
              style={{
                top: `${top}px`,
                left: `${left}px`,
                right: right ? `${right}px` : "auto",
                bottom: bottom ? `${bottom}px` : "auto",
                width: `${width}px`,
                height: `${height}px`,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                top: `${top}px`,
                left: `${left}px`,
                right: right ? `${right}px` : "auto",
                bottom: bottom ? `${bottom}px` : "auto",
              }}
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5, ease: "easeOut" },
                top: { duration: 0.5 },
                left: { duration: 0.5 },
                right: { duration: 0.5 },
                bottom: { duration: 0.5 },
              }}
            >
              <Image src={src} alt={alt} width={width} height={height} />
            </motion.div>
          );
        })}
      </div>

      {/* Text Content with Button */}
      <motion.div
        className="absolute w-[90%] md:w-[800px] text-center"
        style={{
          left: "50%",
          x: "-50%",
          top: "50%",
        }}
        initial={{
          opacity: 0,
          y: "100vh",
        }}
        animate={{
          opacity: initialScrollDone || isMobile ? 1 : 0,
          y: isMobile ? "-70%" : initialScrollDone ? "-50%" : "100vh",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.5,
        }}
      >
        <h1 className="flex flex-wrap items-center justify-center ml-10 text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          <span className="text-black text-5xl sm:text-6xl md:text-8xl lg:text-[80px] xl:text-[100px] mr-12 text-left ml-[-50px] sm:ml-[-100px] md:ml-[-150px] lg:ml-[-200px]">
            Transform
          </span>

          <div className="inline-flex flex-col items-center relative space-y-4">
            <span className="absolute left-[-85px] sm:left-[100px] md:left-[-50px] lg:left-[-100px] xl:left-[-250px] top-1/2 transform -translate-y-1/2 text-5xl sm:text-6xl md:text-8xl lg:text-[80px] xl:text-[100px] text-black">
              with
            </span>
            <span className="text-black text-5xl sm:text-6xl md:text-8xl lg:text-[80px] xl:text-[100px]">
              Education
            </span>
            <span className="block bg-[#5E3CB5] text-white px-6 py-1 rounded-2xl text-4xl sm:text-5xl md:text-7xl lg:text-[80px] xl:text-[100px]">
              AI-Powered
            </span>
          </div>

          <span className="text-black text-5xl sm:text-6xl md:text-8xl lg:text-[80px] xl:text-[100px]">
            Tutoring
          </span>
        </h1>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: scrolled || isMobile ? 1 : 0,
            y: scrolled || isMobile ? 50 : 50,
          }}
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          <span className="text-gray-400 text-sm md:text-[16px] font-normal pb-4">
            Seamlessly integrate with your LMS to boost <br /> student outcomes
            and reduce teacher workload
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
