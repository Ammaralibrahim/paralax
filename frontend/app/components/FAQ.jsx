"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur. Soglitis id.",
    content:
      "Lorem ipsum dolor sit amet consectetur. In ouque ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa...",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    content:
      "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa...",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    content:
      "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa...",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    content:
      "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa...",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    content:
      "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa...",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      className="min-h-[80vh] flex flex-col items-center py-32 px-4 sm:px-6 lg:px-8 relative mt-16"
      id="faqs"
    >
      <div className="text-center w-full z-10">
        <h1 className="text-3xl font-bold text-[#EACF77] mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-6">Quick answers to your most common queries</p>
      </div>

      {/* Mobile Image Animation from Left to Right */}
      <motion.div
        className="lg:hidden flex justify-center mb-6"
        initial={{ opacity: 0, x: -100 }} // Image starts from the left
        animate={{ opacity: 1, x: 0 }} // Image moves to the right
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }} // Triggers animation only when the image is in view
        viewport={{ once: true }} // Triggers animation only once
      >
        <motion.img
          src="/soru.svg"
          alt="Illustration"
          className="w-full max-w-xs object-contain"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="max-w-2xl mx-auto w-full">
            {faqData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 100 }} // Dropdown content starts from the right
                whileInView={{ opacity: 1, x: 0 }} // Dropdown content moves to the original position
                transition={{ duration: 0.5 }}
                className="mb-3 bg-white rounded-lg"
              >
                <button
                  className="w-full p-5 text-left flex items-center justify-between rounded-md border border-gray-200"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <div className="flex items-start">
                    <span className="text-xl font-bold mr-3 text-gray-600">{String(index + 1).padStart(2, "0")}</span>
                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  </div>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 360 : 0 }}
                    className="text-4xl text-gray-600"
                  >
                    {activeIndex === index ? "-" : "+"}
                  </motion.span>
                </button>

                {/* Dropdown content with sliding animation from right to left */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                    x: activeIndex === index ? 0 : 100, // Content slides from the right
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-gray-50"
                >
                  <div className="p-5 text-gray-600 text-base">{item.content}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Image Animation from Left to Right */}
        <motion.div
                initial={{ opacity: 0, x: -200 }} // Dropdown content starts from the right
                whileInView={{ opacity: 1, x: 0 }} // Dropdown content moves to the original position
                transition={{ duration: 0.8 }}
                className="mb-3 bg-white rounded-lg"
              >
          <motion.img
            src="/soru.svg"
            alt="Illustration"
            className="w-full max-w-[400px] object-contain mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
