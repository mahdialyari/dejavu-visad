"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* 🔹 Hero Section */}
      <section className="relative h-[340px] bg-gradient-to-br from-[#072C7D] to-[#548CE1] 
                          text-white text-center rounded-b-[40px] overflow-hidden 
                          flex flex-col justify-center items-center px-6">
        <Image
          src="/images/bg/noise.png"
          alt="Background noise"
          fill
          className="object-cover mix-blend-soft-light opacity-20"
        />
        <h1 className="relative z-10 text-[36px] font-extrabold mb-3">About Us</h1>
        <p className="relative z-10 max-w-2xl mx-auto text-[16px] leading-8 opacity-95">
          Déjà Vu is an international consulting firm specializing in immigration, 
          legal services, and business development. Our team of licensed consultants 
          and professional advisors ensures clarity and confidence throughout your journey.
        </p>
      </section>

      {/* 🔹 Who We Are - Glassmorphism Oval */}
      <section className="container mx-auto relative -mt-12 px-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-md 
                        rounded-full px-8 py-4 text-center max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-2 text-gray-900">Who We Are</h2>
          <p className="leading-7 text-gray-800 text-[15px] font-medium">
            Déjà Vu is a trusted international consulting organization specializing 
            in immigration law, business development, and legal advisory services. 
            Our team consists of licensed immigration consultants, business strategists, 
            and legal experts who help clients navigate complex legal and commercial 
            pathways with confidence.
          </p>
        </div>
      </section>

      {/* 🔹 Vision / Mission / Values */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl shadow bg-gray-50">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Vision</h3>
            <p className="text-gray-700 text-[16px] leading-8 font-medium">
              To be a global leader in immigration and business consulting, 
              empowering individuals and organizations to achieve international growth and success.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow bg-gray-50">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Mission</h3>
            <ul className="list-disc pr-5 text-gray-700 text-[16px] leading-8 space-y-2 font-medium text-left">
              <li>Deliver expert immigration strategies tailored to unique goals</li>
              <li>Provide comprehensive legal and business solutions</li>
              <li>Create a client-centric and professional experience</li>
              <li>Enable opportunities for innovation and investment worldwide</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl shadow bg-gray-50">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Core Values</h3>
            <ol className="list-decimal pr-5 text-gray-700 text-[16px] leading-8 space-y-2 font-medium text-left">
              <li>Integrity</li>
              <li>Expertise</li>
              <li>Innovation</li>
              <li>Client-Centricity</li>
              <li>Global Mindset</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 🔹 Leadership Team with Curve Divider */}
      <section className="relative w-full bg-gradient-to-br from-[#072C7D] to-[#548CE1] py-20 mt-10">
        <svg
          className="absolute -top-[1px] left-0 w-full h-20 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,96 C480,0 960,192 1440,96 L1440,0 L0,0 Z"></path>
        </svg>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-12 drop-shadow">
            Meet Our Leadership Team
          </h2>

          <div className="container mx-auto flex flex-col gap-12 px-6">
            {/* Salar Eskandari */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image
                src="/images/1.jpg"
                alt="Salar Eskandari"
                width={280}
                height={280}
                className="object-cover rounded-2xl w-[280px] h-[280px] shadow-lg"
              />
              <div className="flex-1 p-8 text-left text-gray-100 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-2">Salar Eskandari – RCIC-IRB</h3>
                <p className="text-md opacity-90 mb-4">Founder & Regulated Canadian Immigration Consultant</p>
                <p className="leading-8 opacity-95 text-[16px]">
                  Salar Eskandari is a licensed member of the{" "}
                  <span className="font-medium">CICC (RCIC-IRB)</span> and a permanent member of{" "}
                  <span className="font-medium">CAPIC</span>. With a strong background in immigration law, 
                  business development, and international legal consulting, he delivers strategic and reliable solutions 
                  for clients worldwide.
                </p>
              </div>
            </div>

            {/* Hasan Zare */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <Image
                src="/images/2.jpg"
                alt="Hasan Zare"
                width={300}
                height={400}
                className="object-cover rounded-2xl w-[300px] h-[450px] shadow-lg"
              />
              <div className="flex-1 p-8 text-left text-gray-100 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-2">Hasan Zare</h3>
                <p className="text-md opacity-90 mb-4">Chief Operating Officer & Business Advisor</p>
                <p className="leading-8 opacity-95 text-[16px]">
                  As COO, Hasan Zare is in charge of daily operations and organizational development at Déjà Vu Visa. 
                  With expertise in operations and business strategy, he strengthens the company internally and provides 
                  practical, results-driven consulting to entrepreneurs expanding internationally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}