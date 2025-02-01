import React from 'react';
import Image from 'next/image';

const MoHowItWorks = () => {
  // Define the shared height for mobile view
  const cardHeight = 'h-[600px]';

  return (
    <div className="max-w-7xl mx-auto py-8 relative px-3 pt-32" id='how-it-works'>
      <div className="text-center mb-12">
        <h2 className="text-[32px] font-bold text-[#6C4ECC]">How it’s work</h2>
        <p className="text-[24px] text-black">Discover how it works</p>
      </div>

      {/* Updated step layout */}
      <div className="space-y-16">

        {/* Step 1 */}
        <div className="flex flex-col items-center bg-[#DEDCF5] rounded-xl   overflow-hidden border-4 border-[#B8B2DB] text-black p-6">
          <div className="relative w-[220px] h-[220px] mb-4">
            <Image
              src="/hiw1.svg"
              alt="AI Interaction"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center mb-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden p-3">
              <Image src="/1.svg" alt="Step 1" width={64} height={64} />
            </div>
            <h3 className="text-[24px] ml-4 font-bold text-black">Select Subject</h3>
          </div>
          <p className="text-black text-lg leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center bg-[#FF0F4D4D] rounded-xl   overflow-hidden border-4 border-[#FF9EB7] text-black p-6">
          <div className="relative w-[220px] h-[220px] mb-4">
            <Image
              src="/hiw2.svg"
              alt="Book"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center mb-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden p-3">
              <Image src="/2.svg" alt="Step 2" width={64} height={64} />
            </div>
            <h3 className="text-[20px] ml-4 font-bold text-black">Interact with AI Mentor</h3>
          </div>
          <p className="text-black text-lg leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center bg-[#cbd7fe] rounded-xl   overflow-hidden border-4 border-[#8AB7FF] text-black p-6">
          <div className="relative w-[220px] h-[220px] mb-4">
            <Image
              src="/hiw3.svg"
              alt="Progress"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center mb-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden p-3">
              <Image src="/3.svg" alt="Step 3" width={64} height={64} />
            </div>
            <h3 className="text-[24px] ml-4 font-bold text-black">Complete Quiz & Assessment</h3>
          </div>
          <p className="text-black text-lg leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center bg-[#FFB3004D] rounded-xl   overflow-hidden border-4 border-[#FB8C0066] text-black p-6">
          <div className="relative w-[220px] h-[220px] mb-4">
            <Image
              src="/hiw4.svg"
              alt="Ranking"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex items-center mb-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden p-3">
              <Image src="/4.svg" alt="Step 4" width={64} height={64} />
            </div>
            <h3 className="text-[24px] ml-4 font-bold text-black">Your Level/Ranking Position</h3>
          </div>
          <p className="text-black text-lg leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

      </div>
    </div>
  );
};

export default MoHowItWorks;