"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Features() {
  return (
    <section
      className="relative w-full py-28"
      style={{ backgroundColor: "rgb(241,245,251)" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* RIGHT column - Card with image + background */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          
          {/* Blue background card */}
          <div className="absolute top-0 right-0 w-[260px] h-[340px] md:w-[280px] md:h-[360px] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 z-0 overflow-hidden shadow-lg">
            {/* Glass circles */}
            <div className="absolute top-6 left-6 w-14 h-14 bg-white/40 backdrop-blur-md rounded-full shadow-md" />
            <div className="absolute bottom-6 right-6 w-14 h-14 bg-white/40 backdrop-blur-md rounded-full shadow-md" />
          </div>

          {/* White card with image - کل کارت برعکس شده */}
<div className="relative z-10 mt-6 w-[240px] h-[320px] md:w-[260px] md:h-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden transform -scale-x-100">
  <Image
    src="/images/just.jpg"
    alt="Flags"
    width={260}
    height={340}
    className="object-cover w-full h-full"
  />
</div>

          {/* Glass badge */}
          <div className="absolute -bottom-6 right-6 z-20 bg-white/30 backdrop-blur-md text-blue-700 rounded-full px-4 py-2 flex items-center font-bold shadow-lg text-sm md:text-base">
            +1700 Visas Issued
            <span className="ml-2 bg-yellow-400 text-white w-7 h-7 flex items-center justify-center rounded-full shadow">
              👍
            </span>
          </div>
        </div>

        {/* LEFT column - Texts */}
        <div className="order-2 md:order-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            No two immigration journeys are the same!
          </h2>

          {/* Item 1 - Canada */}
          <div>
            <div className="flex items-center text-lg font-bold text-gray-900 mb-2">
              <FaCheck className="text-orange-400 mr-2" />
              Canada
            </div>
            <p className="text-gray-700 leading-relaxed">
              Canada stands out with its transparent immigration system, high standard of social welfare, 
              and supportive policies for immigrants, making it one of the best choices for starting a new and stable life.
            </p>
          </div>

          {/* Item 2 - USA */}
          <div>
            <div className="flex items-center text-lg font-bold text-gray-900 mb-2">
              <FaCheck className="text-orange-400 mr-2" />
              United States
            </div>
            <p className="text-gray-700 leading-relaxed">
              With its powerful economy, countless job opportunities, and leading universities, 
              the USA is an excellent destination for those seeking professional growth and global success.
            </p>
          </div>

          {/* Item 3 - UAE */}
          <div>
            <div className="flex items-center text-lg font-bold text-gray-900 mb-2">
              <FaCheck className="text-orange-400 mr-2" />
              United Arab Emirates
            </div>
            <p className="text-gray-700 leading-relaxed">
              The UAE, particularly Dubai, with its modern infrastructure, luxurious lifestyle, 
              tax exemptions, and geographical proximity to Iran, is a smart choice for entrepreneurs and professionals in the region.
            </p>
          </div>

          {/* Item 4 - UK */}
          <div>
            <div className="flex items-center text-lg font-bold text-gray-900 mb-2">
              <FaCheck className="text-orange-400 mr-2" />
              United Kingdom
            </div>
            <p className="text-gray-700 leading-relaxed">
              With prestigious universities, a dynamic job market, and the possibility of obtaining residency after studies or work, 
              the UK is an ideal option for those seeking a bright future in Europe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}