"use client";

import { 
  FaTelegram, 
  FaInstagram, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope 
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* پس‌زمینه نویز + گرادینت */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/bg/noise.png')] bg-repeat opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-700 opacity-95"></div>
      </div>

      {/* محتوای فوتر */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        
        {/* لوگو + شبکه‌های اجتماعی */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow">
              <Image
                src="/images/logo.png"
                alt="لوگو"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="flex gap-6 text-2xl">
            <a href="https://t.me/Dreamigration" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaTelegram/>
            </a>
            <a href="https://instagram.com/dreamigration" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <FaInstagram/>
            </a>
            <a href="https://wa.me/16042239900" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FaWhatsapp/>
            </a>
          </div>
        </div>

        {/* سه ستون */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-sm">
          
          {/* ستون صفحات مهم */}
          <div>
            <h4 className="font-bold text-lg mb-4">صفحات مهم</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-200">خانه</a></li>
              <li><a href="#" className="hover:text-gray-200">پایگاه دانش</a></li>
              <li><a href="#" className="hover:text-gray-200">سؤالات متداول</a></li>
              <li><a href="#" className="hover:text-gray-200">درباره ما</a></li>
            </ul>
          </div>

          {/* ستون کشورهای مقصد */}
          <div>
            <h4 className="font-bold text-lg mb-4">کشورهای مقصد</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-200">آمریکا</a></li>
              <li><a href="#" className="hover:text-gray-200">کانادا</a></li>
              <li><a href="#" className="hover:text-gray-200">دبی</a></li>
              <li><a href="#" className="hover:text-gray-200">انگلستان</a></li>
            </ul>
          </div>

          {/* ستون تماس با ما */}
          <div>
            <h4 className="font-bold text-lg mb-4">تماس با ما</h4>
            <ul className="space-y-3">

              {/* ایمیل */}
              <li className="flex items-center gap-2">
                <FaEnvelope/> 
                <a href="mailto:info@info.com" className="hover:underline">Dejavuvisa1@gmail.com</a>
              </li>

              {/* دفتر ونکوور */}
              <li className="flex items-center gap-3">
                <span>دفتر ونکوور 🇨🇦</span>
                <a href="tel:+16042239900" className="hover:underline flex items-center gap-1">
                  <FaPhone/> 16042239900+
                </a>
                <a href="https://wa.me/16042239900" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                  <FaWhatsapp/>
                </a>
              </li>

              {/* دفتر لس‌آنجلس */}
              <li className="flex items-center gap-3">
                <span>دفتر لس‌آنجلس 🇺🇸</span>
                <a href="tel:+13237709994" className="hover:underline flex items-center gap-1">
                  <FaPhone/> 13237709994+
                </a>
                <a href="https://wa.me/13237709994" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                  <FaWhatsapp/>
                </a>
              </li>

              {/* دفتر دبی */}
              <li className="flex items-center gap-3">
                <span>دفتر دبی 🇦🇪</span>
                <a href="tel:+971506390560" className="hover:underline flex items-center gap-1">
                  <FaPhone/> 971506390560+
                </a>
                <a href="https://wa.me/971506390560" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                  <FaWhatsapp/>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="border-t border-white/20 pt-6 text-center text-xs text-gray-200">
          © تمامی حقوق این سایت محفوظ است برای هلدینگ دژاوو
        </div>
      </div>
    </footer>
  );
}