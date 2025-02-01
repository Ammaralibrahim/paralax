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
    <section className="min-h-[80vh] flex flex-col items-center py-32 px-4 sm:px-6 lg:px-8 relative mt-16" id="faqs">
      <div className="text-center w-full z-10">
        <h1 className="text-3xl font-bold text-[#EACF77] mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-6">Quick answers to your most common queries</p>
      </div>

      {/* Mobilde Resim Üstte */}
      <motion.div
        className="lg:hidden flex justify-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img src="/soru.svg" alt="Illustration" className="w-full max-w-xs object-contain" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <div className="max-w-2xl mx-auto w-full">
            {faqData.map((item, index) => (
              <div key={item.id} className="mb-3 bg-white rounded-lg ">
                <button
                  className="w-full p-5 text-left flex items-center justify-between rounded-md border border-gray-200"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <div className="flex items-start">
                    <span className="text-xl font-bold mr-3 text-gray-600">{String(index + 1).padStart(2, "0")}</span>
                    <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  </div>
                  <motion.span animate={{ rotate: activeIndex === index ? 360 : 0 }} className="text-4xl text-gray-600">
                    {activeIndex === index ? "-" : "+"}
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: activeIndex === index ? "auto" : 0, opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-gray-50"
                >
                  <div className="p-5 text-gray-600 text-base">{item.content}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop için Sağda Resim */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <motion.img src="/soru.svg" alt="Illustration" className="w-full max-w-[400px] object-contain mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
