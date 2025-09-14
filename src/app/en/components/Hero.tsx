"use client";

import { useState } from "react";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
import Modal from "./Modal";

export default function Hero() {
  const [openModal, setOpenModal] = useState<null | "consult" | "free">(null);

  return (
    <section className="relative overflow-hidden min-h-screen pt-32 pb-20">
      
      {/* Background با افقی برعکس شده و border-radius برای گوشه‌های پایین */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg/hero-bg1.jpg')",
            transform: 'scaleX(-1)',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px'
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center mt-16">
        
        {/* RIGHT (Text + buttons) */}
        <div className="order-1 text-white text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Dejavu International Holding
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/90 max-w-xl mx-auto lg:mx-0">
            Specialized immigration, legal, and business development services
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            
            {/* Consultation button */}
            <button
              onClick={() => setOpenModal("consult")}
              className="flex items-center gap-2 bg-white rounded-full px-6 py-3 font-medium text-gray-800 shadow-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105"
            >
              Request Consultation
              <span className="ml-2 flex items-center justify-center w-7 h-7 rounded-full bg-[#11388b]">
                <FiArrowUpRight size={16} className="text-white" />
              </span>
            </button>

            {/* Free Assessment button */}
            <button
              onClick={() => setOpenModal("free")}
              className="flex items-center gap-2 bg-white rounded-full px-6 py-3 font-medium text-gray-800 shadow-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105"
            >
              Free Assessment
              <span className="ml-2 flex items-center justify-center w-7 h-7 rounded-full bg-[#11388b]">
                <FiArrowUpRight size={16} className="text-white" />
              </span>
            </button>
          </div>
        </div>

        {/* LEFT (Passport image + badges) */}
        <div className="order-2 relative w-[85%] max-w-[280px] mx-auto lg:mr-auto translate-x-[20px] mt-10">
          {/* اینجا div اصلی عکس پاسپورت - با border-radius برای گوشه‌های پایین اضافه شده */}
          <div className="relative overflow-hidden border border-white/20 shadow-lg rounded-t-2xl rounded-b-lg">
            <div className="h-[180px] w-full relative overflow-hidden">
              <Image
                src="/images/images.jpg"
                alt="Passport"
                width={280}
                height={180}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="h-[70px] bg-white/20 backdrop-blur-sm border-t border-white/30 px-3 flex flex-col justify-center gap-2 rounded-b-lg">
              <div className="h-3 w-3/4 bg-white/40 rounded-full"></div>
              <div className="h-3 w-1/2 bg-white/25 rounded-full"></div>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute bottom-[-10px] right-0 translate-x-[30%] sm:translate-x-[50%] md:translate-x-[80%] lg:translate-x-[50%]">
            <Badge text="Path to Success" />
          </div>
          <div className="absolute top-[40%] left-0 -translate-x-[50%] -translate-y-[60%]">
            <Badge text="Integrity" />
          </div>
          <div className="absolute top-[60%] left-0 -translate-x-[40%] -translate-y-[60%]">
            <Badge text="Strategy & Knowledge" />
          </div>
        </div>
      </div>

      {/* Modals */}
      {openModal === "consult" && (
        <Modal
          title="Consultation Form"
          onClose={() => setOpenModal(null)}
          onSubmit={() => {
            console.log("✅ Consultation submitted");
            setOpenModal(null);
          }}
        />
      )}

      {openModal === "free" && (
        <Modal
          title="Free Assessment Form"
          onClose={() => setOpenModal(null)}
          onSubmit={() => {
            console.log("✅ Free assessment submitted");
            setOpenModal(null);
          }}
        />
      )}
    </section>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-2 bg-white/25 backdrop-blur-sm 
                     border border-white/30 px-3 py-1 rounded-full 
                     text-white shadow text-sm font-medium whitespace-nowrap">
      <FiCheckCircle size={14} className="text-white" />
      {text}
    </span>
  );
}