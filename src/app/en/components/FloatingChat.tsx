"use client";

import { useState } from "react";
import { FaComments, FaWhatsapp, FaTelegramPlane, FaInstagram, FaTimes } from "react-icons/fa";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  // Company WhatsApp number (Vancouver office)
  const companyNumber = "16042239900"; // Numbers only without +

  // Welcome message (when user starts chat)
  const welcomeMessage = `Hello and good day 👋

We're happy to assist you on WhatsApp.  
Please send us your message or request.  
🙏 Thank you for choosing us.`;

  // Main WhatsApp link
  const handleStartChat = () => {
    if (!phone) return alert("❗ Please enter your WhatsApp number");

    const url = `https://wa.me/${companyNumber}?text=${encodeURIComponent(welcomeMessage)}`;
    window.open(url, "_blank");

    // Save user info for thank you message later
    localStorage.setItem(
      "whatsapp_user",
      JSON.stringify({
        phone: phone,
        timestamp: new Date().getTime(),
        thanked: false,
      })
    );

    // Simulation: Send thank you message after 30 seconds (in real implementation would use WhatsApp Webhook)
    setTimeout(() => {
      simulateThankYouMessage(phone);
    }, 30000);
  };

  // Thank you message after user's first message
  const simulateThankYouMessage = (userPhone: string) => {
    const userData = localStorage.getItem("whatsapp_user");
    if (userData) {
      const user = JSON.parse(userData);
      if (user.phone === userPhone && !user.thanked) {
        console.log(`Thank you message sent to ${userPhone}`);
        user.thanked = true;
        localStorage.setItem("whatsapp_user", JSON.stringify(user));

        // Show thank you message
        alert(`✅ Thank you for contacting DejaVu Holding.  
Our team will contact you within 72 business hours.  
🌹 Wishing you success.`);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] font-sans">
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-tr from-indigo-600 via-blue-600 to-blue-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
        >
          <FaComments size={20} />
        </button>
      )}

      {/* Widget */}
      {open && (
        <div className="relative w-[300px] h-[480px] flex flex-col rounded-3xl shadow-2xl shadow-gray-300/40 overflow-hidden backdrop-blur-md border border-white/20">
          {/* ❌ Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white/90 hover:text-white transition z-10"
          >
            <FaTimes size={18} />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-br from-[#3047EC] via-[#4059F8] to-[#5A75FF] px-6 pt-12 pb-8 text-white rounded-b-[40px] relative">
            <h1 className="text-lg font-semibold opacity-90">Hello 👋</h1>
            <p className="text-sm font-medium mt-1">How can we help you?</p>
          </div>

          {/* Body */}
          <div className="flex-1 bg-gradient-to-b from-gray-50 via-white to-gray-100 p-5 space-y-4 -mt-6 relative z-0">
            {/* WhatsApp card */}
            <div
              className="bg-white p-4 rounded-2xl flex items-center gap-3 cursor-pointer shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={handleStartChat}
            >
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center shadow-inner">
                <FaWhatsapp className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">WhatsApp</p>
                <p className="text-xs text-gray-500">Direct contact with Vancouver office 🇨🇦</p>
              </div>
            </div>

            {/* WhatsApp number field */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <label className="block text-xs font-medium text-gray-700 mb-1">
                📱 Enter your WhatsApp number (with country code):
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1..."
                className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700 text-sm"
              />
              <button
                onClick={handleStartChat}
                className="mt-3 w-full bg-gradient-to-r from-indigo-600 to-blue-500 
                           text-white py-2.5 rounded-xl font-semibold shadow hover:scale-[1.02] 
                           transition-all duration-300 text-sm"
              >
                Start Chat on WhatsApp
              </button>
            </div>

            {/* Thank you message system explanation */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3">
              <p className="text-xs text-blue-700 text-center">
                💡 After sending your first message on WhatsApp, 
                <span className="font-semibold"> you will automatically receive a thank you message.</span>
              </p>
            </div>
          </div>

          {/* Bottom navigation - Icons */}
          <div className="bg-white border-t border-gray-200 py-5 flex justify-around items-center shadow-inner">
            {/* WhatsApp */}
            <a
              href="https://wa.me/16042239900"
              target="_blank"
              className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-full text-white hover:scale-110 hover:shadow-lg transition"
            >
              <FaWhatsapp size={20} />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/Dreamigration"
              target="_blank"
              className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full text-white hover:scale-110 hover:shadow-lg transition"
            >
              <FaTelegramPlane size={20} />
            </a>

            {/* Instagram */}
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