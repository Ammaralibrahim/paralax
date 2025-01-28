// components/HappyUsers.tsx
import React from "react";
import Image from "next/image";

const HappyUsers = () => {
  return (
    <div className="bg-[#EAF4FF] py-16 px-2">
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
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg text-center flex justify-between min-h-[160px]">
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
                </div>

                {/* Oliver Kartı */}
                <div className="bg-blue-100 flex justify-between flex-col rounded-lg p-6 shadow-md w-full min-h-[382px]">
                  <div>
                  <div className="relative w-16 h-16  rounded-full overflow-hidden mb-4">
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
                </div>
              </div>

              {/* Sütun 2 */}
              <div className="flex flex-col gap-6 w-full lg:w-[32%]">
                {/* Kart 1 */}
                <div className="bg-white flex justify-between flex-col p-6 rounded-xl shadow-lg border border-gray-200 w-full min-h-[250px]">
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
                </div>

                {/* Kart 2 */}
                <div className="bg-white flex justify-between flex-col p-6 rounded-xl shadow-lg border border-gray-200 w-full min-h-[261px]">
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
                </div>
              </div>

              {/* Sütun 3 */}
              <div className="flex flex-col gap-6 w-full lg:w-[32%]">
                {/* Kart 1 */}
                <div className="bg-white flex justify-between flex-col p-6 rounded-xl shadow-lg border border-gray-200 w-full min-h-[298px]">
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
                </div>

                {/* Kart 2 */}
                <div className="bg-white flex justify-between flex-col p-6 rounded-xl shadow-lg border border-gray-200 w-full min-h-[250px]">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyUsers;
