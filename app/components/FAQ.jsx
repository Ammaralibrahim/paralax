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
      "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam. ",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    content: "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam.",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    content: "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam.",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur. Viverra.",
    content: "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Animations for the FAQ and Image
  const faqVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.2 },
    },
  };

  return (
    <section className="min-h-[80vh] flex items-center py-12 px-4 sm:px-6 lg:px-8 relative mt-16">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center w-full z-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Quick answers to your most common queries
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full pt-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          whileOutOfView="hidden"
          viewport={{ once: false }}
        >
          {/* Sol Taraf - FAQ */}
          <motion.div
            className="flex flex-col justify-center"
            variants={faqVariants}
          >
            <div className="max-w-2xl mx-auto w-full">
              {faqData.map((item, index) => (
                <div
                  key={item.id}
                  className="mb-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    className="w-full p-5 text-left flex items-center justify-between"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    <div className="flex items-start">
                      <span className="text-xl font-bold mr-3 text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl font-semibold text-gray-800">
                        {item.title}
                      </h2>
                    </div>
                    <motion.span
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      className="text-3xl text-gray-600"
                    >
                      +
                    </motion.span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeIndex === index ? "auto" : 0,
                      opacity: activeIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 pl-12 pr-6 text-gray-600 text-lg">
                      {item.content}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sağ Taraf - Resim */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            variants={imageVariants}
          >
            <div className="relative ">
              <motion.img
                src="/soru.svg" // Resim yolunu güncelleyin
                alt="Illustration"
                className="w-[100%]  object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                className="absolute inset-0 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
