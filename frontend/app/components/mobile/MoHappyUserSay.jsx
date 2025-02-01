import React from "react";
import Image from "next/image";

const MoHappyUserSay = () => {
  return (
    <div className="bg-[#EAF4FF] py-16 px-2 pt-32"  id="testimonials">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Başlık */}
        <h2 className="text-4xl font-bold text-[#4C9BF3] mb-4">Happy User Say</h2>
        <p className="text-lg text-black mb-12">Some lovely feedback from our users</p>

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

          {/* Mavi Kart */}
          <div className="w-full lg:w-[60%] mb-6">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg text-center flex justify-between min-h-[160px]">
              <div className="text-left">
                <div className="text-4xl font-bold">
                  4.9<span className="text-2xl font-normal">/5</span>
                </div>
                <div className="mt-2 text-lg font-semibold">Very Good</div>
                <div className="text-sm">41 reviews</div>
              </div>
              <div className="flex items-start mt-3">
                <Image src="/stars.svg" alt="User" width={90} height={90} />
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div className="overflow-x-auto flex gap-6 py-4 px-2 scrollbar-hide">
          {[
            { name: "Oliver Charlotte", role: "Student", image: "/oliver.svg", text: "The personalized learning paths help me track my progress and improve easily." },
            { name: "Ameita Wittiam", role: "Student", image: "/adam.svg", text: "The quizzes and study suggestions help me focus on my weak areas." },
            { name: "Michael Johnson", role: "Manager", image: "/amelia.svg", text: "Real-time feedback helps me stay on track and improve fast." },
            { name: "John Doe", role: "Engineer", image: "/oliver.svg", text: "The platform has helped me improve my skills significantly." },
            { name: "Jane Smith", role: "Designer", image: "/amelia.svg", text: "I love the interactive features and easy-to-follow design." }
          ].map((user, index) => (
            <div key={index} className="bg-white flex flex-col justify-between p-6 rounded-xl shadow-lg border border-gray-200 min-w-[300px] max-w-[320px] min-h-[250px]">
              <div>
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                  <Image src={user.image} alt="User" layout="fill" objectFit="cover" />
                </div>
                <p className="text-gray-700 mb-4 text-left">{user.text}</p>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-black">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoHappyUserSay;
