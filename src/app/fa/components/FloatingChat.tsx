"use client";

import { useState } from "react";
import { FaComments, FaWhatsapp, FaTelegramPlane, FaInstagram, FaTimes } from "react-icons/fa";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  // شماره واتساپ شرکت (دفتر ونکوور)
  const companyNumber = "16042239900"; // فقط عدد بدون +

  // پیام خوش‌آمدگویی (وقتی کاربر شروع چت می‌کند)
  const welcomeMessage = `سلام و وقت بخیر 👋

خوشحالیم که شما را در واتساپ همراهی می‌کنیم.  
لطفاً پیام و درخواست خود را ارسال کنید.  
🙏 از همراهی شما بسیار سپاسگزاریم.`;

  // لینک واتساپ اصلی
  const handleStartChat = () => {
    if (!phone) return alert("❗ لطفاً شماره واتساپ خود را وارد کنید");

    const url = `https://wa.me/${companyNumber}?text=${encodeURIComponent(welcomeMessage)}`;
    window.open(url, "_blank");

    // ذخیره اطلاعات کاربر برای ارسال پیام تشکر بعداً
    localStorage.setItem(
      "whatsapp_user",
      JSON.stringify({
        phone: phone,
        timestamp: new Date().getTime(),
        thanked: false,
      })
    );

    // شبیه‌سازی: بعد از 30 ثانیه پیام تشکر (در عمل واقعی باید Webhook واتساپ باشه)
    setTimeout(() => {
      simulateThankYouMessage(phone);
    }, 30000);
  };

  // پیام تشکر بعد از اولین پیام کاربر
  const simulateThankYouMessage = (userPhone: string) => {
    const userData = localStorage.getItem("whatsapp_user");
    if (userData) {
      const user = JSON.parse(userData);
      if (user.phone === userPhone && !user.thanked) {
        console.log(`پیام تشکر برای ${userPhone} ارسال شد`);
        user.thanked = true;
        localStorage.setItem("whatsapp_user", JSON.stringify(user));

        // نمایش پیام تشکر
        alert(`✅ با تشکر از ارسال پیام به هلدینگ دژاوو.  
همکاران ما ظرف ۷۲ ساعت کاری با شما تماس خواهند گرفت.  
🌹 با آرزوی موفقیت.`);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] font-sans">
      {/* دکمه شناور */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-tr from-indigo-600 via-blue-600 to-blue-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
        >
          <FaComments size={20} />
        </button>
      )}

      {/* ویجت */}
      {open && (
        <div className="relative w-[300px] h-[480px] flex flex-col rounded-3xl shadow-2xl shadow-gray-300/40 overflow-hidden backdrop-blur-md border border-white/20">
          {/* ❌ دکمه بستن */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white/90 hover:text-white transition z-10"
          >
            <FaTimes size={18} />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-br from-[#3047EC] via-[#4059F8] to-[#5A75FF] px-6 pt-12 pb-8 text-white rounded-b-[40px] relative">
            <h1 className="text-lg font-semibold opacity-90">سلام 👋</h1>
            <p className="text-sm font-medium mt-1">چطور می‌تونیم کمک کنیم؟</p>
          </div>

          {/* Body */}
          <div className="flex-1 bg-gradient-to-b from-gray-50 via-white to-gray-100 p-5 space-y-4 -mt-6 relative z-0">
            {/* کارت واتساپ */}
            <div
              className="bg-white p-4 rounded-2xl flex items-center gap-3 cursor-pointer shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={handleStartChat}
            >
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center shadow-inner">
                <FaWhatsapp className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">واتساپ</p>
                <p className="text-xs text-gray-500">ارتباط مستقیم با مشاور دفتر ونکوور 🇨🇦</p>
              </div>
            </div>

            {/* فیلد شماره واتساپ */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                📱 شماره واتساپ خود را وارد کنید (با کد کشور):
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+98..."
                className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700 text-sm"
              />
              <button
                onClick={handleStartChat}
                className="mt-3 w-full bg-gradient-to-r from-indigo-600 to-blue-500 
                           text-white py-2.5 rounded-xl font-semibold shadow hover:scale-[1.02] 
                           transition-all duration-300 text-sm"
              >
                شروع گفتگو در واتساپ
              </button>
            </div>

            {/* توضیح سیستم پیام تشکر */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3">
              <p className="text-xs text-blue-700 text-center">
                💡 پس از ارسال اولین پیام در واتساپ، 
                <span className="font-semibold"> به طور خودکار پیام تشکر دریافت خواهید کرد.</span>
              </p>
            </div>
          </div>

          {/* Nav پایین – آیکون‌ها */}
          <div className="bg-white border-t border-gray-200 py-5 flex justify-around items-center shadow-inner">
            {/* واتساپ */}
            <a
              href="https://wa.me/16042239900"
              target="_blank"
              className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-full text-white hover:scale-110 hover:shadow-lg transition"
            >
              <FaWhatsapp size={20} />
            </a>

            {/* تلگرام */}
            <a
              href="https://t.me/Dreamigration"
              target="_blank"
              className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full text-white hover:scale-110 hover:shadow-lg transition"
            >
              <FaTelegramPlane size={20} />
            </a>

            {/* اینستاگرام */}
            <a
              href="https://instagram.com/dreamigration"
              target="_blank"
              className="bg-gradient-to-br from-pink-500 to-pink-600 p-3 rounded-full text-white hover:scale-110 hover:shadow-lg transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}