"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";

export default function Features() {
  return (
    <section
      className="relative w-full py-28"
      style={{ backgroundColor: "rgb(241,245,251)" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ستون چپ - کارت سفید و آبی */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          
          {/* کارت آبی (بک‌گراند – پشت کارت عکس) */}
          <div className="absolute top-0 left-0 w-[260px] h-[340px] md:w-[280px] md:h-[360px] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 z-0 overflow-hidden shadow-lg">
            {/* دایره‌های گلس */}
            <div className="absolute top-6 right-6 w-14 h-14 bg-white/40 backdrop-blur-md rounded-full shadow-md" />
            <div className="absolute bottom-6 left-6 w-14 h-14 bg-white/40 backdrop-blur-md rounded-full shadow-md" />
          </div>

          {/* کارت عکس (سفید) - کمی پایین‌تر آورده شده */}
          <div className="relative z-10 mt-6 w-[240px] h-[320px] md:w-[260px] md:h-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <Image
              src="/images/just.jpg"
              alt="Flags"
              width={260}
              height={340}
              className="object-cover w-full h-full"
            />
          </div>

          {/* باکس آماری گلس (شیشه‌ای) */}
          <div className="absolute -bottom-6 left-6 z-20 bg-white/30 backdrop-blur-md text-blue-700 rounded-full px-4 py-2 flex items-center font-bold shadow-lg text-sm md:text-base">
            +1700 ویزای صادرشده
            <span className="ml-2 bg-yellow-400 text-white w-7 h-7 flex items-center justify-center rounded-full shadow">
              👍
            </span>
          </div>
        </div>

        {/* ستون راست - متن‌ها */}
        <div className="order-2 md:order-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            هیچ دو مسیر مهاجرتی شبیه هم نیست!
          </h2>

          {/* مورد اول - کانادا */}
          <div>
            <div className="flex items-center text-lg font-bold text-gray-900 mb-2">
              <FaCheck className="text-orange-400 ml-2" />
              کانادا
            </div>
            <p className="text-gray-700 leading-relaxed">
              کانادا به دلیل سیستم مهاجرتی شفاف، سطح بالای رفاه اجتماعی، و سیاست‌های حمایت‌گرانه از مهاجران، 
              یکی از بهترین گزینه‌ها برای شروع یک زندگی جدید و پایدار است.
            </p>
          </div>

          {/* مورد دوم - آمریکا */}
          <div>
            <div className="flex items-center text-lg font-bold text-gray-900 mb-2">
              <FaCheck className="text-orange-400 ml-2" />
              آمریکا
            </div>
            <p className="text-gray-700 leading-relaxed">
              آمریکا با اقتصاد قدرتمند، فرصت‌های بی‌شمار شغلی، و دانشگاه‌های پیشرو، 
              مقصدی عالی برای افرادی است که به دنبال رشد حرفه‌ای و دستیابی به موفقیت جهانی هستند.
            </p>
          </div>

          {/* مورد سوم - امارات */}
          <div>
            <div className="flex items-center text-lg font-bold text-gray-900 mb-2">
              <FaCheck className="text-orange-400 ml-2" />
              امارات
            </div>
            <p className="text-gray-700 leading-relaxed">
              امارات، به‌ویژه دبی، با زیرساخت‌های مدرن، سبک زندگی لوکس، معافیت‌های مالیاتی، 
              و نزدیکی جغرافیایی به ایران، انتخابی هوشمندانه برای کارآفرینان و متخصصان منطقه است.
            </p>
          </div>

          {/* مورد چهارم - انگلستان */}
          <div>
            <div className="flex items-center text-lg font-bold text-gray-900 mb-2">
              <FaCheck className="text-orange-400 ml-2" />
              انگلستان
            </div>
            <p className="text-gray-700 leading-relaxed">
              انگلستان با دانشگاه‌های معتبر، بازار کار پویا، و امکان اخذ اقامت پس از تحصیل یا کار، 
              گزینه‌ای ایده‌آل برای کسانی است که به دنبال آینده‌ای روشن در اروپا هستند.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}