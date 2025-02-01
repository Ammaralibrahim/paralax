"use client";
import { useRef } from "react";

const cards = [
  {
    id: 1,
    title: "LMS Integration",
    content: "Real-time data insights powered by advanced machine learning algorithms.",
    image: "/card1.svg",
    layout: "image-left",
    bgColor: "bg-[#E0C9FB]",
    textColor: "text-[#861DDE]",
  },
  {
    id: 2,
    title: "Real time feedback",
    content: "Adaptive learning system that personalizes educational content.",
    image: "/card2.svg",
    layout: "image-right",
    bgColor: "bg-[#FFD2E5]",
    textColor: "text-[#FA47A0]",
  },
  {
    id: 3,
    title: "Gamified Learning",
    content: "Comprehensive performance metrics and progress visualization.",
    image: "/card3.svg",
    layout: "image-left",
    bgColor: "bg-[#D0E9F2]",
    textColor: "text-[#30ACDD]",
  },
  {
    id: 4,
    title: "Emotional Intelligence",
    content: "Centralized repository of educational materials and resources.",
    image: "/card4.svg",
    layout: "image-right",
    bgColor: "bg-[#EAD9FF]",
    textColor: "text-[#A480EA]",
  },
  {
    id: 5,
    title: "Multilingual Support",
    content: "Interactive environment for team projects and collaboration.",
    image: "/card5.svg",
    layout: "image-left",
    bgColor: "bg-[#F8DDDD]",
    textColor: "text-[#F8B668]",
  },
];

export default function ScrollCards() {
  return (
    <section className="relative bg-white pt-32" id="features">
      <div className="px-4 py-8">
        {cards.map((card) => {
          return (
            <div key={card.id} className="mb-12 relative">
              {/* Başlık ve büyük nokta */}
              <h2 className="text-center py-5 text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
                {card.title} <span className={`${card.textColor} text-4xl`}>●</span>
              </h2>

              <div
                className={`relative ${card.bgColor} rounded-[20px] md:rounded-[40px] p-6   md: `}
              >
                <div
                  className={`flex flex-col ${
                    card.layout === "image-right" ? "md:flex-row-reverse" : "md:flex-row"
                  } h-full gap-6 md:gap-12 items-center justify-center text-left`}
                >
                  <div className="flex-1 relative rounded-xl md:rounded-3xl h-[300px] md:h-auto flex items-center justify-center">
                    <img src={card.image} alt={card.title} className="w-[500px] md:scale-105" loading="lazy" />
                  </div>

                  <div className="flex-1 flex flex-col justify-center md:pr-0 pr-0 items-start text-left">
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
