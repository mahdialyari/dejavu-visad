"use client";

import { useState } from "react";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
import Modal from "./Modal";

export default function Hero() {
  const [openModal, setOpenModal] = useState<null | "consult" | "free">(null);

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center pt-32 pb-20 rounded-b-[3rem] bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/bg/hero-bg1.jpg')`,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* متن سمت راست */}
        <div className="text-white text-center lg:text-right">
          <h1 className="text-4xl font-extrabold mb-4">
               هلدینگ بین المللی دژاوو
          </h1>
          <p className="mt-4 text-lg leading-8 text-white/90 max-w-xl mx-auto lg:mx-0">
          خدمات تخصصی مهاجرتی  حقوقی وتوسعه کسب و کار
          </p>

          {/* دکمه‌ها */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            
            {/* دکمه مشاوره تخصصی */}
            <button
              onClick={() => setOpenModal("consult")}
              className="flex items-center gap-2 bg-white rounded-full px-6 py-3 font-medium text-gray-500 shadow hover:bg-slate-100 transition"
            >
              درخواست مشاوره تخصصی
              <span className="ml-2 flex items-center justify-center w-7 h-7 rounded-full bg-[#11388b]/70">
                <FiArrowUpRight size={16} className="text-white rotate-270" />
              </span>
            </button>

            {/* دکمه ارزشیابی رایگان */}
            <button
              onClick={() => setOpenModal("free")}
              className="flex items-center gap-2 bg-white rounded-full px-6 py-3 font-medium text-gray-500 shadow hover:bg-slate-100 transition"
            >
              ارزشیابی رایگان
              <span className="ml-2 flex items-center justify-center w-7 h-7 rounded-full bg-[#11388b]/70">
                <FiArrowUpRight size={16} className="text-white rotate-270" />
              </span>
            </button>
          </div>
        </div>

        {/* تصویر + Badgeها */}
        <div className="relative w-[85%] max-w-[280px] mx-auto lg:ml-auto translate-x-[-20px]">
          <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-lg">
            
            <div className="h-[180px] w-full relative overflow-hidden">
              <Image
                src="/images/images.jpg"
                alt="پاسپورت"
                width={280}
                height={180}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="h-[70px] bg-white/20 backdrop-blur-md border-t border-white/30 px-3 rounded-b-2xl flex flex-col justify-center gap-2">
              <div className="h-3 w-3/4 bg-white/40 rounded-full"></div>
              <div className="h-3 w-1/2 bg-white/25 rounded-full"></div>
            </div>
          </div>

          {/* Badgeها */}
          <div className="absolute bottom-[-20px] left-0 translate-x-[-80%] max-sm:left-0 max-sm:translate-x-0">
            <Badge text="ساختن مسیر موفقیت" />
          </div>
          <div className="absolute top-[40%] right-0 translate-x-[50%] -translate-y-[60%]">
            <Badge text=" صداقت" />
          </div>
          <div className="absolute top-[60%] right-0 translate-x-[40%] -translate-y-[60%]">
            <Badge text=" استراتژی و دانش " />
          </div>
        </div>
      </div>

      {/* مودال‌ها */}
      {openModal === "consult" && (
        <Modal
          title="فرم مشاوره تخصصی"
          onClose={() => setOpenModal(null)}
          onSubmit={() => {
            console.log("✅ مشاوره تخصصی ثبت شد");
            setOpenModal(null);
          }}
        />
      )}

      {openModal === "free" && (
        <Modal
          title="فرم ارزشیابی رایگان"
          onClose={() => setOpenModal(null)}
          onSubmit={() => {
            console.log("✅ ارزشیابی رایگان ثبت شد");
            setOpenModal(null);
          }}
        />
      )}
    </section>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-2 bg-white/25 backdrop-blur-md 
                     border border-white/30 px-3 py-1 rounded-full 
                     text-white shadow text-sm font-medium whitespace-nowrap">
      <FiCheckCircle size={14} className="text-white" />
      {text}
    </span>
  );
}