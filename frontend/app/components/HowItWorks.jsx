import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 pt-32 relative px-3" id='how-it-works'>
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-bold text-[#6C4ECC]">How it’s work</h2>
        <p className="text-[24px] text-black">Discover how it’s work</p>
      </div>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Mavi Kart */}
        <div className="w-full h-[600px] bg-[#DEDCF5] rounded-xl shadow-lg overflow-hidden border-4 border-[#B8B2DB] text-black relative ">
          <div className="h-[248px] relative">
            <Image
              src="/hiw1.svg"
              alt="AI Interaction"
              layout="fill"
              objectFit="contain"
              className="p-8"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="relative   rounded-lg overflow-hidden p-3">
                <Image src="/1.svg" alt="Step 1" width={64} height={64} />
              </div>
              <div>
                <h3 className="text-[32px] mb-2 text-black">Select Subject</h3>
                <p className="text-black text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Şerit (1. ve 2. Kart Arasında) */}
        <div className="hidden sm:block absolute left-[395px] top-[300px] w-[52px] h-[40px] border-t-4 border-b-4 border-[#B8B2DB] bg-[#DEDCF5] z-10"></div>

        {/* Orta Kartlar */}
        <div className="space-y-7">
          {/* Yeşil Kart */}
          <div className="h-[286px] w-full sm:w-[471px] bg-[#FF0F4D4D] rounded-xl  p-6 border-4 border-[#FF9EB7] text-black">
            <div className="flex items-center text-center justify-between mb-4">
              <div className="relative">
                <Image src="/2.svg" alt="Book" width={64} height={64} className="text-green-600" />
              </div>
              <h3 className="text-[32px] px-4 text-left text-black">Interact with AI mentor</h3>
              <div className="relative">
                <Image src="/hiw2.svg" alt="List" width={60} height={60} />
              </div>
            </div>
            <p className="text-black text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Şerit (3. ve 4. Kart Arasında) */}
          <div className="hidden sm:block absolute left-[914px] top-[710px] w-[47px]  h-[40px] border-t-4 border-b-4 border-[#8AB7FF] bg-[#cbd7fe] z-10"></div>

          {/* Mor Kart */}
          <div className="h-[286px] w-full sm:w-[471px] bg-[#cbd7fe] rounded-xl shadow-lg p-6 border-4 border-[#8AB7FF] text-black">
            <div className="flex items-center justify-between mb-4">
              <div className="relative">
                <Image src="/3.svg" alt="Quiz" width={54} height={54} />
              </div>
              <h3 className="text-[32px] px-4 text-left text-black">Complete quiz & assessment</h3>
              <div className="relative">
                <Image src="/hiw3.svg" alt="Progress" width={60} height={32} />
              </div>
            </div>
            <p className="text-black text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
 
        <div className="hidden sm:block absolute left-[650px] top-[546px] w-[52px] h-[28px] border-l-4 border-r-4 border-[#FF9EB7] bg-[#FF0F4D4D] z-10"></div>


        {/* Turuncu Kart */}
        <div className="w-full sm:w-[382px] h-[600px] bg-[#FFB3004D] rounded-xl shadow-lg overflow-hidden border-4 border-[#FB8C0066] text-black sm:ml-20">
          <div className="h-[248px] relative flex justify-center items-center">
            <Image
              src="/hiw4.svg"
              alt="Ranking"
              width={220}
              height={220}
            />
          </div>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="relative rounded-lg overflow-hidden p-3">
                <Image src="/4.svg" alt="Trophy" width={130} height={124} />
              </div>
              <div>
                <h3 className="text-[30px] mb-2 text-black">Your level/Ranking position</h3>
                <p className="text-black text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
