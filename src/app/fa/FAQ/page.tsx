// src/app/fa/FAQ/page.tsx
"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "آیا بدون مدرک زبان می‌توان به کانادا مهاجرت کرد؟",
      answer: "برای بسیاری از برنامه‌ها مانند Express Entry، مدرک زبان الزامی است، اما در مواردی مانند پذیرش تحصیلی مشروط و یا اسپانسرشیپ همسر و ویزای توریستی ممکن است استثنا وجود داشته باشد.",
      category: "مهاجرت",
    },
    {
      question: "آیا بعد از تحصیل می‌توان در آمریکا اقامت دائم گرفت؟",
      answer: "بله، اما نیاز به کارفرمای حامی برای گرین کارت است و مسیر آن از کانادا پیچیده‌تر است.",
      category: "مهاجرت",
    },
    {
      question: "ویزای طلایی امارات چیست؟",
      answer: "اقامت ۵ تا ۱۰ ساله برای افراد با مهارت‌های خاص، سرمایه‌گذاران و دانشجویان ممتاز است.",
      category: "ویزا",
    },
    {
      question: "روش‌های مهاجرت به انگلستان چیست؟",
      answer: "از طریق تحصیل، کار تخصصی (Skilled Worker visa)، ویزای خانواده، و یا سرمایه‌گذاری (Innovator Founder) امکان‌پذیر است.",
      category: "مهاجرت",
    },
  ];

  // فیلتر سؤالات براساس دسته فعال
  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <main className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section
        className="w-full flex items-center justify-center text-white relative"
        style={{
          height: "360px",
          background: `
            radial-gradient(circle at top left, rgba(255,255,255,0.25), transparent 40%),
            radial-gradient(circle at top right, rgba(255,255,255,0.25), transparent 40%),
            linear-gradient(180deg, #072C7D 0%, #548CFF 100%)
          `,
          borderBottomLeftRadius: "32px",
          borderBottomRightRadius: "32px",
        }}
      >
        <div className="w-full max-w-[700px] text-center px-4">
          {/* Breadcrumb */}
          <p className="text-sm mb-2">صفحه اصلی / پرسش‌های متداول</p>

          {/* Title */}
          <h1 className="font-black text-[32px] sm:text-[40px] leading-tight mb-4">
            پرسش‌های متداول
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg leading-7">
            در این بخش به رایج‌ترین پرسش‌ها پاسخ داده‌ایم. هدف ما ارائه اطلاعات دقیق و شفاف به شماست
            تا راحت‌تر تصمیم‌گیری کنید. اگر جواب خودتان را پیدا نکردید، حتماً با تیم ما در ارتباط باشید 
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-12 w-full max-w-[875px] px-4 mb-20">
        {/* Title */}
        <h2
          className="text-center font-black text-[24px] mb-6 bg-gradient-to-r from-[#072C7D] to-[#548CE1] bg-clip-text text-transparent"
        >
          دسته‌بندی پرسش‌ها
        </h2>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-3 rounded-[32px] text-sm font-medium ${
              activeCategory === "all"
                ? "text-white"
                : "text-[#011F3B] border border-[#011F3B] bg-white"
            }`}
            style={
              activeCategory === "all"
                ? {
                    background:
                      "linear-gradient(130.44deg, #072C7D 17.37%, #548CE1 141.88%)",
                  }
                : {}
            }
          >
            همه
          </button>
          <button
            onClick={() => setActiveCategory("مهاجرت")}
            className={`px-6 py-3 rounded-[24px] text-sm font-medium ${
              activeCategory === "مهاجرت"
                ? "text-white"
                : "text-[#011F3B] border border-[#011F3B] bg-white"
            }`}
            style={
              activeCategory === "مهاجرت"
                ? {
                    background:
                      "linear-gradient(130.44deg, #072C7D 17.37%, #548CE1 141.88%)",
                  }
                : {}
            }
          >
            مهاجرت
          </button>
          <button
            onClick={() => setActiveCategory("ویزا")}
            className={`px-6 py-3 rounded-[24px] text-sm font-medium ${
              activeCategory === "ویزا"
                ? "text-white"
                : "text-[#011F3B] border border-[#011F3B] bg-white"
            }`}
            style={
              activeCategory === "ویزا"
                ? {
                    background:
                      "linear-gradient(130.44deg, #072C7D 17.37%, #548CE1 141.88%)",
                  }
                : {}
            }
          >
            ویزا
          </button>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="w-full border border-[#E0E0E2] rounded-[16px] bg-white cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-[14px]">
                <span className="font-bold text-[16px] text-right text-[#011F3B]">
                  {faq.question}
                </span>
                <span className="w-6 h-6 text-[#011F3B]">
                  {activeIndex === idx ? "▲" : "▼"}
                </span>
              </div>

              {/* Content */}
              {activeIndex === idx && (
                <div className="px-6 pb-3 text-[16px] leading-8 text-[#0C0C0C] text-right">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default FAQ;