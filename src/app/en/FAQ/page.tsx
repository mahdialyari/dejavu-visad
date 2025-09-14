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
      question: "Can I immigrate to Canada without a language certificate?",
      answer: "For many programs like Express Entry, language certification is mandatory, but there may be exceptions for conditional student acceptance, spousal sponsorship, and tourist visas.",
      category: "cat1",
    },
    {
      question: "Can I get permanent residency in the USA after studying?",
      answer: "Yes, but it requires an employer sponsor for a Green Card and the process is more complex than in Canada.",
      category: "cat1",
    },
    {
      question: "What is the UAE Golden Visa?",
      answer: "A 5 to 10 year residency for individuals with special skills, investors, and outstanding students.",
      category: "cat2",
    },
    {
      question: "What are the methods of immigration to the UK?",
      answer: "Possible through study, skilled work (Skilled Worker visa), family visa, or investment (Innovator Founder).",
      category: "cat2",
    },
  ];

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
          <p className="text-sm mb-2">Home / FAQ</p>

          {/* Title */}
          <h1 className="font-black text-[32px] sm:text-[40px] leading-tight mb-4">
            Frequently Asked Questions
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg leading-7">
            In this section we’ve answered the most common questions. Our goal is to provide
            you with clear and accurate information so you can make better decisions.
            If you don’t find your answer, feel free to contact our team!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-12 w-full max-w-[875px] px-4 mb-20">
        <h2
          className="text-center font-black text-[24px] mb-6 bg-gradient-to-r from-[#072C7D] to-[#548CE1] bg-clip-text text-transparent"
        >
          FAQ Categories
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
            All
          </button>
          <button
            onClick={() => setActiveCategory("cat1")}
            className={`px-6 py-3 rounded-[24px] text-sm font-medium ${
              activeCategory === "cat1"
                ? "text-white"
                : "text-[#011F3B] border border-[#011F3B] bg-white"
            }`}
            style={
              activeCategory === "cat1"
                ? {
                    background:
                      "linear-gradient(130.44deg, #072C7D 17.37%, #548CE1 141.88%)",
                  }
                : {}
            }
          >
            Category One
          </button>
          <button
            onClick={() => setActiveCategory("cat2")}
            className={`px-6 py-3 rounded-[24px] text-sm font-medium ${
              activeCategory === "cat2"
                ? "text-white"
                : "text-[#011F3B] border border-[#011F3B] bg-white"
            }`}
            style={
              activeCategory === "cat2"
                ? {
                    background:
                      "linear-gradient(130.44deg, #072C7D 17.37%, #548CE1 141.88%)",
                  }
                : {}
            }
          >
            Category Two
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
                <span className="font-bold text-[16px] text-left text-[#011F3B]">
                  {faq.question}
                </span>
                <span className="w-6 h-6 text-[#011F3B]">
                  {activeIndex === idx ? "▲" : "▼"}
                </span>
              </div>

              {/* Content */}
              {activeIndex === idx && (
                <div className="px-6 pb-3 text-[16px] leading-8 text-[#0C0C0C] text-left">
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