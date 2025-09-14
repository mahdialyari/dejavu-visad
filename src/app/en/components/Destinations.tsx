"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Destinations() {
  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-[#fdfbf7] to-[#f0f4fb]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#11388b] mb-12">
          Popular Immigration Destinations
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Canada Card - First */}
          <Link href="/en/countries/canada">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/images/canada.jpg"
                alt="Canada"
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-2 px-4 py-2 shadow-lg">
                <h3 className="text-white text-base font-bold">Canada</h3>
                <FaArrowRight className="text-white -rotate-45" />
              </div>
            </div>
          </Link>

          {/* USA Card */}
          <Link href="/en/countries/usa">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/images/usa.jpg"
                alt="USA"
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-2 px-4 py-2 shadow-lg">
                <h3 className="text-white text-base font-bold">USA</h3>
                <FaArrowRight className="text-white -rotate-45" />
              </div>
            </div>
          </Link>

          {/* England Card */}
          <Link href="/en/countries/england">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/images/england.jpg"
                alt="England"
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-2 px-4 py-2 shadow-lg">
                <h3 className="text-white text-base font-bold">England</h3>
                <FaArrowRight className="text-white -rotate-45" />
              </div>
            </div>
          </Link>

          {/* Dubai Card - Last */}
          <Link href="/en/countries/dubai">
            <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
              <Image
                src="/images/dubai.jpg"
                alt="Dubai"
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-full flex items-center gap-2 px-4 py-2 shadow-lg">
                <h3 className="text-white text-base font-bold">Dubai</h3>
                <FaArrowRight className="text-white -rotate-45" /> 
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}