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

    // Set a timer to scroll if no user interaction within 3 seconds
    const scrollTimer = setTimeout(() => {
      handleScrollStart();
    }, 3000);

    return () => {
      window.removeEventListener("wheel", handleScrollStart);
      window.removeEventListener("touchmove", handleScrollStart);
      clearTimeout(scrollTimer);
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
      document.body.style.overflow = "auto"; // Enable scrolling
    } else {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling on cleanup
    };
  }, [initialScrollDone]);

  const getPositionStyles = (imageKey) => {
    const positions = {
      mezun: {
        default: { bottom: 120, right: 320, width: 160, height: 160 },
        scrolled: { bottom: 40, right: 230, width: 160, height: 160 },
        mobile: {
          default: { bottom: 100, right: 70, width: 80, height: 80 },
          scrolled: { bottom: 100, right: 70, width: 80, height: 80 },
        },
      },
      girl: {
        default: { bottom: 170, left: 320, width: 120, height: 120 },
        scrolled: { bottom: 100, left: 130, width: 190, height: 190 },
        mobile: {
          default: { bottom: 150, left: 80, width: 80, height: 80 },
          scrolled: { bottom: 150, left: 80, width: 80, height: 80 },
        },
      },
      boy: {
        default: { top: 30, right: 350, width: 120, height: 120 },
        scrolled: { top: 30, right: 300, width: 180, height: 180 },
        mobile: {
          default: { top: -60, right: 100, width: 80, height: 80 },
          scrolled: { top: -60, right: 100, width: 80, height: 80 },
        },
      },
      pen: {
        default: { top: -70, left: 240, width: 160, height: 160 },
        scrolled: { top: 120, left: 220, width: 160, height: 160 },
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
      className="relative bg-white text-white h-[117vh] py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Logo animation */}
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
            opacity: scrolled || isMobile ? 1 : 1,
            y: scrolled || isMobile ? 50 : 50,
          }}
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          <span className="text-gray-400 text-sm md:text-[16px] font-normal pb-4">
            Seamlessly integrate with your LMS to boost <br /> student outcomes
            and reduce teacher workload
          </span>

          <button className="fixed bg-gradient-to-r mt-14 from-[#0099FF] to-[#CC00FF] text-white px-16 py-3 sm:px-8 sm:py-4 md:px-20 md:py-2 rounded-2xl text-md sm:text-xl md:text-xl shadow-xl transition-all duration-300 transform hover:scale-105 group">
              {/* Left stars */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex space-x-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z"
                    fill="white"
                    stroke="#CDCDCD"
                    strokeWidth="0.48"
                    strokeMiterlimit="2.613"
                  />
                </svg>

                <svg
                  width="18"
                  height="18"
                  className="mt-4"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z"
                    fill="white"
                    stroke="#CDCDCD"
                    strokeWidth="0.48"
                    strokeMiterlimit="2.613"
                  />
                </svg>
              </div>
              {/* Right stars */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z"
                    fill="white"
                    stroke="#CDCDCD"
                    strokeWidth="0.48"
                    strokeMiterlimit="2.613"
                  />
                </svg>

                <svg
                  width="18"
                  height="18"
                  className="mt-4"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5909 3.1421C20.2365 2.69314 16.3396 5.37089 14.3934 5.6771C12.0447 6.06748 9.64153 5.61315 7.61423 4.39549C6.02995 3.47039 3.58413 0.0344596 3.14213 0.306406C2.74474 0.639123 5.2292 4.04722 5.60489 5.84294C6.11802 8.15152 5.78776 10.575 4.67336 12.679C3.76648 14.4281 -0.00810462 17.2766 0.306034 17.7546C0.660301 18.2045 4.55761 15.5264 6.50388 15.2202C8.85259 14.8295 11.2559 15.2838 13.2831 16.5017C14.8674 17.4268 17.3132 20.8628 17.7546 20.5913C18.1525 20.2582 15.6681 16.85 15.2924 15.0543C14.7795 12.7457 15.1097 10.3224 16.2239 8.21821C17.1308 6.46913 20.9049 3.62101 20.5909 3.1421Z"
                    fill="white"
                    stroke="#CDCDCD"
                    strokeWidth="0.48"
                    strokeMiterlimit="2.613"
                  />
                </svg>
              </div>
              Request a Demo Now
            </button>
  
            <div className="fixed top-32 flex justify-center  flex-col items-center">
        <Image src="/heroicon.svg" alt="Logo" width={30} height={30} />

        <span className="text-gray-400 text-sm md:text-[16px] font-normal pb-4">
            Seamlessly integrate with your LMS to boost <br /> student outcomes
            and reduce teacher workload
          </span>
          
        </div>
        

          
        </motion.div>
        
      </motion.div>
    </section>
  );
}

export default Hero;
