"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Can I immigrate to Canada without a language certificate?",
    answer: "For many programs like Express Entry, a language certificate is mandatory, but there may be exceptions in cases such as conditional study acceptance, spousal sponsorship, and tourist visas."
  },
  {
    question: "Can I obtain permanent residency in the USA after studying?",
    answer: "Yes, but it requires an employer sponsor for a Green Card, and the process is more complex than in Canada."
  },
  {
    question: "What is the UAE Golden Visa?",
    answer: "It is a 5 to 10-year residency for individuals with special skills, investors, and outstanding students."
  },
  {
    question: "What are the methods of immigration to the UK?",
    answer: "It is possible through study, skilled work (Skilled Worker visa), family visa, or investment (Innovator Founder)."
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
        
        {/* LEFT column: Title and description (always on top in mobile) */}
        <div className="space-y-4 order-1 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By reading these FAQs, you will get clear and detailed answers to the most common questions. 
            If you don’t find your answer here, feel free to contact our team directly.
          </p>
        </div>

        {/* RIGHT column: FAQ list */}
        <div className="space-y-4 order-2 md:order-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left"
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

              {/* Answer */}
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700 leading-relaxed text-sm text-left">
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