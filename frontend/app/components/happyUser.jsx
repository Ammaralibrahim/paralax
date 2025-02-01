import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HappyUsers = () => {
  return (
    <motion.div
      className="bg-[#EAF4FF] py-16 px-2 pt-32"
      id="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the section is in view
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Başlık */}
        <h2 className="text-4xl font-bold text-[#4C9BF3] mb-4">
          Happy User Say
        </h2>
        <p className="text-lg text-black mb-12">
          Some lovely feedback from our users
        </p>

        {/* Ana Container */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* Sol Görsel */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image
              src="/chatbubble.svg"
              alt="Chat Bubbles"
              width={600}
              height={90}
              className="object-contain"
            />
          </div>

          {/* Kartlar Container */}
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col lg:flex-row gap-6 justify-between">
              {/* Sütun 1 */}
              <div className="flex flex-col gap-6 w-full lg:w-[32%]">
                {/* Mavi Kart */}
                <motion.div
                  className="bg-blue-500 text-white p-4 rounded-lg  text-center flex justify-between min-h-[160px]"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 700 }}
                  viewport={{ once: false }} // Trigger animation every time the section enters the viewport
                >
                  <div className="text-left">
                    <div className="text-4xl font-bold">
                      4.9<span className="text-2xl font-normal">/5</span>
                    </div>
                    <div className="mt-2 text-lg font-semibold">Very Good</div>
                    <div className="text-sm">41 reviews</div>
                  </div>
                  <div className="flex items-start mt-3">
                    <Image
                      src="/stars.svg"
                      alt="User"
                      width={90}
                      height={90}
                      className="rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Oliver Kartı */}
                <motion.div
                  className="bg-white flex justify-between flex-col rounded-lg p-6  w-full min-h-[382px]"
                  initial={{ x: 50 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 700 }}
                  viewport={{ once: false }}
                >
                  <div>
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/oliver.svg"
                        alt="Profile Picture"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p className="text-gray-700 mb-4 text-left">
                      The personalized learning paths help me track my progress
                      and improve easily.
                    </p>
                  </div>
                  <div className="text-left">
                    <h2 className="font-bold text-lg">Oliver Charlotte</h2>
                    <p className="text-gray-500 text-sm">Student</p>
                  </div>
                </motion.div>
              </div>

              {/* Sütun 2 */}
              <div className="flex flex-col gap-6 w-full lg:w-[32%]">
                {/* Kart 1 */}
                <motion.div
                  className="bg-white flex justify-between flex-col p-6 rounded-xl  border border-gray-200 w-full min-h-[250px]"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 700 }}
                  viewport={{ once: false }}
                >
                  <div>
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/adam.svg"
                        alt="User"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p className="text-gray-700 mb-4 text-left">
                      The quizzes and study suggestions help me focus on my weak
                      areas.
                    </p>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-black">Ameita Wittiam</h3>
                    <p className="text-sm text-gray-500">Student</p>
                  </div>
                </motion.div>

                {/* Kart 2 */}
                <motion.div
                  className="bg-white flex justify-between flex-col p-6 rounded-xl  border border-gray-200 w-full min-h-[261px]"
                  initial={{ x: 50 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 700 }}
                  viewport={{ once: false }}
                >
                  <div>
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/amelia.svg"
                        alt="User"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p className="text-gray-700 mb-4 text-left">
                      Real-time feedback helps me stay on track and improve fast.
                    </p>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-black">Michael Johnson</h3>
                    <p className="text-sm text-gray-500">Manager</p>
                  </div>
                </motion.div>
              </div>

              {/* Sütun 3 */}
              <div className="flex flex-col gap-6 w-full lg:w-[32%]">
                {/* Kart 1 */}
                <motion.div
                  className="bg-white flex justify-between flex-col p-6 rounded-xl  border border-gray-200 w-full min-h-[298px]"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 700 }}
                  viewport={{ once: false }}
                >
                  <div>
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/oliver.svg"
                        alt="User"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p className="text-gray-700 mb-4 text-left">
                      The platform has helped me improve my skills significantly.
                    </p>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-black">John Doe</h3>
                    <p className="text-sm text-gray-500">Engineer</p>
                  </div>
                </motion.div>

                {/* Kart 2 */}
                <motion.div
                  className="bg-white flex justify-between flex-col p-6 rounded-xl  border border-gray-200 w-full min-h-[250px]"
                  initial={{ x: 50 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 700 }}
                  viewport={{ once: false }}
                >
                  <div>
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/amelia.svg"
                        alt="User"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <p className="text-gray-700 mb-4 text-left">
                      I love the interactive features and easy-to-follow design.
                    </p>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-black">Jane Smith</h3>
                    <p className="text-sm text-gray-500">Designer</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HappyUsers;
