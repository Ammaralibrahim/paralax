"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "LMS Integration",
    content:
      "Real-time data insights powered by advanced machine learning algorithms.",
    image: "/card1.svg",
    layout: "image-left",
    bgColor: "bg-[#E0C9FB]",
    dotColor: "#8A2BE2",
  },
  {
    id: 2,
    title: "Real time feedback",
    content: "Adaptive learning system that personalizes educational content.",
    image: "/card2.svg",
    layout: "image-right",
    bgColor: "bg-[#FFD2E5]",
    dotColor: "#FF1493",
  },
  {
    id: 3,
    title: "Gamified Learning",
    content: "Comprehensive performance metrics and progress visualization.",
    image: "/card3.svg",
    layout: "image-left",
    bgColor: "bg-[#D0E9F2]",
    dotColor: "#30ACDD",
  },
  {
    id: 4,
    title: "Emotional Intelligence",
    content: "Centralized repository of educational materials and resources.",
    image: "/card4.svg",
    layout: "image-right",
    bgColor: "bg-[#EAD9FF]",
    dotColor: "#BA55D3",
  },
  {
    id: 5,
    title: "Multilingual Support",
    content: "Interactive environment for team projects and collaboration.",
    image: "/card5.svg",
    layout: "image-left",
    bgColor: "bg-[#F8DDDD]",
    dotColor: "#F8B668",
  },
];

const colorMap = {
  "bg-blue-50": "bg-blue-500",
  "bg-green-50": "bg-green-500",
  "bg-yellow-50": "bg-yellow-400",
  "bg-pink-50": "bg-pink-500",
  "bg-purple-50": "bg-purple-500",
};

export default function ScrollCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const getAnimations = (index) => {
    const cardCount = cards.length;
    const section = 1 / (cardCount + 1);
    const animationRatio = 1.1;
    const start = index * section;
    const end = start + section * animationRatio;
    const pauseEnd = (index + 1) * section;

    const isLastCard = index === cardCount + 1;
    const finalEnd = isLastCard ? 1 : end;
    const finalPauseEnd = isLastCard ? 1 : pauseEnd;

    const titleY = useTransform(scrollYProgress, [start, finalEnd], [900, 0], {
      clamp: true,
    });

    const titleRotate = useTransform(
      scrollYProgress,
      [start, finalEnd],
      [-35, 0],
      { clamp: true }
    );

    const titleOpacity = useTransform(
      scrollYProgress,
      [start, start + section * 1.1, finalEnd], // Make it stay visible for a longer time
      [30, 1, 0], // Title stays visible until later and fades out right before the next title
      { clamp: true }
    );

    // For the previous title's animation
    const prevTitleY = useTransform(
      scrollYProgress,
      [start - section, start],
      [0, -100],
      {
        clamp: true,
      }
    );

    const prevTitleOpacity = useTransform(
      scrollYProgress,
      [index > 0 ? start - section : 0, start],
      [index > 0 ? 1 : 0, 0]
    );

    const yOffset = index * 7; // This is the added vertical offset (adjust the value as needed)

    const cardY = useTransform(
      scrollYProgress,
      [start, finalEnd],
      [1000 + yOffset, 0 + yOffset],
      { clamp: true }
    );

    const cardRotate = useTransform(
      scrollYProgress,
      [start + 0.1, finalEnd],
      [-20, 0],
      { clamp: true }
    );

    const cardOpacity = useTransform(
      scrollYProgress,
      [start, finalEnd, finalPauseEnd],
      [0, 10, 1],
      { clamp: true }
    );

    const zIndex = useTransform(
      scrollYProgress,
      [start, finalEnd],
      [index * 100 + 100, index * 100 + 200]
    );

    return {
      titleY,
      titleRotate,
      titleOpacity,
      prevTitleOpacity,
      prevTitleY,
      cardY,
      cardRotate,
      cardOpacity,
      zIndex,
    };
  };

  return (
    <section
      ref={containerRef}
      className=" h-[500vh] md:h-[600vh] bg-white"
      id="features"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map((card, index) => {
            const {
              titleY,
              titleRotate,
              titleOpacity,
              prevTitleOpacity,
              cardY,
              cardRotate,
              cardOpacity,
              zIndex,
            } = getAnimations(index);

            return (
              <motion.div
                key={card.id}
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ zIndex, opacity: cardOpacity }}
              >
                {index > 0 && (
                  <motion.h2
                    className="text-[40px] md:text-[100px] font-black text-gray-800/90 absolute top-[15%] md:top-[20%] left-1/2 -translate-x-1/2 origin-bottom pointer-events-none"
                    style={{
                      y: titleY,
                      rotateZ: titleRotate,
                      opacity: prevTitleOpacity,
                      textShadow: "4px 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    {cards[index - 1].title}
                  </motion.h2>
                )}

                <motion.div
                  className="w-[90%] md:w-[1300px] md:mb-10 relative"
                  style={{
                    y: titleY,
                    rotateZ: titleRotate,
                    opacity: titleOpacity,
                  }}
                >
                  <h2 className="text-[40px] md:text-[100px] font-black text-gray-800 text-center leading-[0] mb-11 flex items-end justify-center">
                    {card.title}
                    <span
                      className="ml-4 w-[25px] h-[25px] md:w-[35px] md:h-[35px] rounded-full"
                      style={{
                        backgroundColor: card.dotColor,
                        position: "relative", // Allow positioning relative to its normal position
                        top: 60, // Adjust this value to move the dot down
                      }}
                    />
                  </h2>
                </motion.div>

                <motion.div
                  className={`${card.bgColor} rounded-[20px]  md:rounded-[40px] p-6 md:p-12`}
                  style={{
                    width: "90%",
                    height: "auto",
                    minHeight: "500px",
                    maxWidth: "1300px",
                    y: cardY,
                    rotate: cardRotate,
                    transformOrigin: "top center",
                    opacity: 1, // Ensuring full opacity
                  }}
                >
                  <div
                    className={`flex flex-col ${
                      card.layout === "image-right"
                        ? "md:flex-row-reverse"
                        : "md:flex-row"
                    } h-full gap-6 md:gap-12 items-center justify-center text-left`}
                  >
                    <motion.div
                      className="flex-1 relative rounded-xl md:rounded-3xl h-[300px] md:h-auto flex items-center justify-center"
                      initial={{
                        opacity: 0,
                        x: card.layout === "image-right" ? 150 : -150,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-[500px] md:scale-105"
                        loading="lazy"
                      />
                    </motion.div>

                    <motion.div
                      className="flex-1 flex flex-col justify-center md:pr-0 pr-0 items-start text-left"
                      initial={{ opacity: 0, y: 80 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 md:mb-8">
                        {card.title}
                      </h3>
                      <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                        {card.content}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
