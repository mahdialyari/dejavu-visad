"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import Image from "next/image";

const menus = {
  "مشاوره بیزنسی و حقوقی در دبی": [
    "خدمات ما در دبی"
  ],
};

const contentMap: Record<string, React.JSX.Element> = {
  "خدمات ما در دبی": (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-bold">خدمات ما در دبی</h3>
        <p className="leading-7">
          دبی به‌عنوان یکی از مراکز تجاری بین‌المللی و دروازه ورود به بازارهای خاورمیانه و آسیا، 
          فرصت‌های بی‌نظیری برای سرمایه‌گذاران و کارآفرینان فراهم کرده است. ثبت شرکت در دبی 
          نه‌تنها دسترسی به یک اقتصاد پویا و آزاد را ممکن می‌سازد، بلکه می‌تواند به دریافت 
          اقامت بلندمدت امارات نیز منجر شود.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">خدمات ما:</h4>
        <ul className="list-disc pr-6 space-y-3">
          <li>
            <span className="font-medium">مشاوره بیزینسی و حقوقی:</span> انتخاب بهترین ساختار شرکت 
            (Free Zone، Mainland یا Offshore) با توجه به اهداف تجاری و اقامتی شما.
          </li>
          <li>
            <span className="font-medium">ثبت شرکت رسمی:</span> آماده‌سازی و تکمیل تمام مدارک مورد نیاز، 
            هماهنگی با مراجع قانونی و ثبت سریع شرکت در امارات.
          </li>
          <li>
            <span className="font-medium">دریافت مجوزها و لایسنس‌ها:</span> اخذ انواع لایسنس‌های تجاری، 
            صنعتی و خدماتی متناسب با فعالیت شما.
          </li>
          <li>
            <span className="font-medium">دریافت اقامت امارات:</span> امکان اخذ اقامت از طریق ثبت شرکت، 
            سرمایه‌گذاری یا مدیریت بیزینس.
          </li>
          <li>
            <span className="font-medium">خدمات پس از ثبت:</span> شامل افتتاح حساب بانکی، اجاره دفتر یا 
            فروشگاه، اخذ ویزاهای کاری برای خانواده و پرسنل.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold">چرا دبی انتخاب مناسبی است؟</h4>
        <ul className="list-disc pr-6 space-y-3">
          <li>موقعیت جغرافیایی استراتژیک و دسترسی به بازارهای جهانی.</li>
          <li>سیستم مالیاتی بسیار جذاب (بدون مالیات بر درآمد شخصی).</li>
          <li>زیرساخت‌های مدرن و پیشرفته برای تجارت بین‌المللی.</li>
          <li>امنیت بالا و قوانین حمایتی برای سرمایه‌گذاران خارجی.</li>
        </ul>
      </div>
    </div>
  ),
};

function DubaiContent() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  const renderMenuItems = (items: string[], level = 0) => {
    return items.map((item, index) => (
      <Link
        key={index}
        href={`?section=${encodeURIComponent(item)}`}
        className={`block px-4 py-2 rounded-lg transition ${level > 0 ? 'pr-8 text-sm' : ''} ${
          section === item
            ? "bg-blue-100 text-blue-700 font-medium"
            : "hover:bg-gray-100"
        }`}
      >
        {item}
      </Link>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="relative w-full h-[280px] rounded-b-3xl flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Header Background"
          fill
          className="object-cover rounded-b-3xl"
          priority
          sizes="100vw"
        />
        <h1 className="relative z-10">مشاوره بیزنسی و حقوقی در دبی</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">زیرمنوها</h2>
            <div className="space-y-2">
              {renderMenuItems(menus["مشاوره بیزنسی و حقوقی در دبی"])}
            </div>
          </aside>

          <main className="flex-1 bg-white rounded-lg shadow p-6 relative">
            {section && (
              <div className="absolute top-4 left-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {section}
              </div>
            )}

            {section ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">{section}</h2>
                {contentMap[section] || <div>محتوایی برای این بخش یافت نشد.</div>}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">مشاوره بیزنسی و حقوقی در دبی</h2>
                <p>لطفاً از سایدبار یک بخش را انتخاب کنید.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function DubaiPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">در حال بارگذاری...</p>
        </div>
      </div>
    }>
      <DubaiContent />
    </Suspense>
  );
}