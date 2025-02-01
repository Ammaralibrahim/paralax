import React from "react";

const StayInTouch = () => {
  return (
    <section className="h-auto py-32 flex flex-col items-center justify-center px-2 space-y-6" id="contact">
      {/* Section Başlığı */}
   

      <div className="bg-[#00A2E1] text-white py-16 px-8 md:px-6 lg:px-24 xl:px-32 rounded-[40px]  max-w-7xl w-full text-center space-y-12">
        {/* Görsel */}
        <div>
          <img
            src="/stay.svg"
            alt="Four cartoon faces with different expressions"
            className="mx-auto w-[200px] md:w-[250px] h-auto"
          />
        </div>

        {/* Başlık */}
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Stay in Touch!
          <br />
          Drop your email for
          <br />
          updates & more!
        </h1>

        {/* Input ve Buton */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 rounded-full w-full md:w-[400px] text-black text-lg focus:ring-4 focus:ring-blue-300 transition"
          />
          <button className="bg-black text-white px-6 py-2 rounded-full text-md font-semibold hover:bg-gray-800 transition">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
