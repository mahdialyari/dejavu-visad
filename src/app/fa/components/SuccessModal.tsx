"use client";

import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: "evaluation" | "consultation";
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  modalType,
}) => {
  if (!isOpen) return null;

  const messages = {
    evaluation: {
      title: "ارزشیابی رایگان",
      message:
        "مشخصات شما با موفقیت ثبت شد ✅ همکاران ما ظرف ۷۲ ساعت با شما تماس خواهند گرفت.",
    },
    consultation: {
      title: "مشاوره تخصصی",
      message:
        "مشخصات شما با موفقیت ثبت شد ✅ لطفا رسید واریزی را به واتساپ ارسال کنید.",
    },
  };

  const { title, message } = messages[modalType];

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-white shadow-xl rounded-xl p-6 w-full max-w-[380px] z-50 text-center">
      <div className="text-5xl text-green-500 mb-4">✅</div>

      <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>

      <p className="text-gray-600 mb-6">{message}</p>

      <button
        onClick={onClose}
        className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 
                   text-white font-semibold hover:opacity-90 transition"
      >
        بستن
      </button>
    </div>
  );
};

export default SuccessModal;