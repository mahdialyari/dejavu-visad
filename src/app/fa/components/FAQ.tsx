"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "آیا بدون مدرک زبان می‌توان به کانادا مهاجرت کرد؟",
    answer: "برای بسیاری از برنامه‌ها مانند Express Entry، مدرک زبان الزامی است، اما در مواردی مانند پذیرش تحصیلی مشروط و یا اسپانسرشیپ همسر و ویزای توریستی ممکن است استثنا وجود داشته باشد."
  },
  {
    question: "آیا بعد از تحصیل می‌توان در آمریکا اقامت دائم گرفت؟",
    answer: "بله، اما نیاز به کارفرمای حامی برای گرین کارت است و مسیر آن از کانادا پیچیده‌تر است."
  },
  {
    question: "ویزای طلایی امارات چیست؟",
    answer: "اقامت ۵ تا ۱۰ ساله برای افراد با مهارت‌های خاص، سرمایه‌گذاران و دانشجویان ممتاز است."
  },
  {
    question: "روش‌های مهاجرت به انگلستان چیست؟",
    answer: "از طریق تحصیل، کار تخصصی (Skilled Worker visa)، ویزای خانواده، و یا سرمایه‌گذاری (Innovator Founder) امکان‌پذیر است."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative w-full py-20"
      style={{ backgroundColor: "rgb(241,245,251)" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* ستون چپ: عنوان و توضیحات */}
        <div className="space-y-4 order-1 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
            پرسش‌های متداول
          </h2>
          <p className="text-gray-700 leading-relaxed">
            با مطالعه این سوالات از جدیدترین موضوعات و مباحث حوزه مهاجرت مطلع شوید.
          </p>
        </div>

        {/* ستون راست: لیست سوالات */}
        <div className="space-y-4 order-2 md:order-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              {/* سوال */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-right"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-blue-600" : "text-gray-500"
                  }`}
                />
              </button>

              {/* جواب */}
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}