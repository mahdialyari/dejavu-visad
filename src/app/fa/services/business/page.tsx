"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";
import Image from "next/image";

// داده‌های منو برای ثبت شرکت
const menus = {
  "ثبت شرکت و توسعه کسب و کار": [
    "اجازه کار از طریق ثبت شرکت و انتقال شعبه"
  ],
};

// محتوای هر بخش برای ثبت شرکت
const contentMap: Record<string, React.JSX.Element> = {
  "اجازه کار از طریق ثبت شرکت و انتقال شعبه": (
    <div className="space-y-6 text-right">
      <p className="text-gray-700 leading-relaxed">
        یکی از مسیرهای مهم و کاربردی برای کارآفرینان و مدیران ارشد، دریافت اجازه کار از طریق ثبت شرکت جدید یا انتقال شعبه یک شرکت بین‌المللی به کشور مقصد است. این برنامه‌ها علاوه بر فراهم کردن امکان کار قانونی، راهی برای توسعه کسب‌وکار در بازارهای جهانی و حتی دریافت اقامت دائم در برخی کشورها محسوب می‌شوند. شرکت ما با تیمی از وکلای رسمی و مشاوران کسب‌وکار، خدمات کامل در زمینه ثبت شرکت و اخذ اجازه کار مرتبط را ارائه می‌دهد.
      </p>

      <hr className="border-gray-300" />

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-3">کانادا – Intra-Company Transfer (ICT) & Incorporation</h3>
        <p className="text-gray-700 leading-relaxed">
          در کانادا، برنامه ICT – انتقال درون‌شرکتی این امکان را می‌دهد که مدیران، مالکان و کارکنان کلیدی شرکت‌های خارجی به شعبه یا شرکت ثبت‌شده در کانادا منتقل شوند. همچنین با ثبت شرکت جدید (Incorporation)، می‌توان مسیر دریافت اجازه کار کارآفرینی و مدیریتی را فعال کرد. خدمات ما شامل:
        </p>
        <ul className="list-disc pr-6 mt-2 space-y-2 text-gray-700">
          <li>ثبت شرکت کانادایی و تهیه اساسنامه و مدارک قانونی</li>
          <li>آماده‌سازی پرونده ICT برای مدیران و کارمندان کلیدی</li>
          <li>طراحی بیزینس پلن قوی برای اثبات فعالیت واقعی شرکت</li>
          <li>پیگیری مسیر تبدیل به اقامت دائم (PR) برای متقاضیان واجد شرایط</li>
        </ul>
      </div>

      <hr className="border-gray-300" />

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-3">آمریکا – L-1 Visa (Intra-Company Transfer)</h3>
        <p className="text-gray-700 leading-relaxed">
          در آمریکا، برنامه ویزای L-1 برای مدیران، صاحبان بیزینس و کارکنان کلیدی طراحی شده است که قصد دارند از شعبه خارجی به شعبه یا دفتر تازه‌تأسیس در ایالات متحده منتقل شوند. این ویزا به شما اجازه می‌دهد به عنوان مدیر اجرایی یا متخصص در آمریکا کار کنید و در برخی موارد به مسیر گرین کارت منتهی می‌شود. خدمات ما شامل:
        </p>
        <ul className="list-disc pr-6 mt-2 space-y-2 text-gray-700">
          <li>ثبت شرکت یا شعبه در آمریکا</li>
          <li>آماده‌سازی مدارک جهت اخذ ویزای L-1</li>
          <li>مشاوره در خصوص انتخاب ایالت و ساختار مناسب بیزینس</li>
          <li>استراتژی مهاجرتی برای تبدیل L-1 به گرین کارت</li>
        </ul>
      </div>

      <hr className="border-gray-300" />

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-3">انگلستان – Expansion Worker Visa</h3>
        <p className="text-gray-700 leading-relaxed">
          در انگلستان، برنامه UK Expansion Worker Visa به شرکت‌های خارجی اجازه می‌دهد نمایندگان خود را برای افتتاح شعبه یا ثبت شرکت جدید به بریتانیا بفرستند. این مسیر یکی از بهترین گزینه‌ها برای کارآفرینان بین‌المللی است. خدمات ما شامل:
        </p>
        <ul className="list-disc pr-6 mt-2 space-y-2 text-gray-700">
          <li>راه‌اندازی شرکت یا شعبه در انگلستان</li>
          <li>تهیه و ارائه مدارک برای ویزای Expansion Worker</li>
          <li>مشاوره در زمینه قوانین مالیاتی و تجاری بریتانیا</li>
          <li>طراحی استراتژی برای تبدیل اقامت موقت به اقامت دائم</li>
        </ul>
      </div>

      <hr className="border-gray-300" />

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-3">امارات – Company Incorporation & Investor Visa</h3>
        <p className="text-gray-700 leading-relaxed">
          در امارات، سرمایه‌گذاران و کارآفرینان می‌توانند با ثبت شرکت در سرزمین اصلی (Mainland) یا مناطق آزاد (Free Zone) اجازه اقامت و کار دریافت کنند. همچنین مدیران شرکت‌های بین‌المللی می‌توانند برای انتقال شعبه و فعالیت در دبی یا ابوظبی اقدام کنند. خدمات ما شامل:
        </p>
        <ul className="list-disc pr-6 mt-2 space-y-2 text-gray-700">
          <li>ثبت شرکت در Free Zone یا Mainland</li>
          <li>اخذ ویزای کاری و اقامتی برای مدیران و سهامداران</li>
          <li>دریافت مجوزهای تجاری (Business Licences) برای شروع فعالیت</li>
          <li>مشاوره در خصوص اجاره دفتر و شروع عملیات تجاری</li>
        </ul>
      </div>

      <hr className="border-gray-300" />

      <p className="text-gray-700 leading-relaxed font-semibold">
        ✅ با خدمات ما در زمینه ثبت شرکت و انتقال شعبه، شما می‌توانید نه‌تنها اجازه کار در کشور مقصد را به دست آورید، بلکه یک پایگاه تجاری بین‌المللی برای توسعه کسب‌وکار خود ایجاد کنید. ما از مرحله ثبت رسمی تا دریافت ویزا و شروع فعالیت در کنار شما خواهیم بود.
      </p>
    </div>
  ),
};

// تعریف نوع برای آیتم‌های منو
type MenuItem = string | { title: string; items: MenuItem[] };

// کامپوننت داخلی برای استفاده از useSearchParams
function BusinessPageContent() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menuTitle: string) => {
    setOpenMenus(prev =>
      prev.includes(menuTitle)
        ? prev.filter(item => item !== menuTitle)
        : [...prev, menuTitle]
    );
  };

  const renderMenuItems = (items: MenuItem[], level = 0) => {
    return items.map((item, index) => {
      if (typeof item === "string") {
        return (
          <Link
            key={index}
            href={`?section=${encodeURIComponent(item)}`}
            className={`block px-4 py-2 rounded-lg transition ${
              level > 0 ? "pr-8 text-sm" : ""
            } ${
              section === item
                ? "bg-blue-100 text-blue-700 font-medium"
                : "hover:bg-gray-100"
            }`}
          >
            {item}
          </Link>
        );
      } else {
        const isOpen = openMenus.includes(item.title);
        return (
          <div key={index}>
            <button
              onClick={() => toggleMenu(item.title)}
              className={`flex justify-between items-center w-full px-4 py-2 rounded-lg transition hover:bg-gray-100 ${
                level > 0 ? "pr-8 text-sm" : ""
              }`}
            >
              <span className="text-right">{item.title}</span>
              <span>{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
              <div
                className={`pr-4 space-y-1 mt-1 ${
                  level > 0 ? "border-r-2 border-gray-200" : ""
                }`}
              >
                {renderMenuItems(item.items, level + 1)}
              </div>
            )}
          </div>
        );
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* هدر با عکس پس‌زمینه */}
      <div className="relative w-full h-[280px] rounded-b-3xl flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Header Background"
          fill
          className="object-cover rounded-b-3xl"
          priority
          sizes="100vw"
        />
        <h1 className="relative z-10">ثبت شرکت و کسب و کار</h1>
      </div>

      {/* محتوای اصلی */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* سایدبار */}
          <aside className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">زیرمنوها</h2>
            <div className="space-y-2">
              {renderMenuItems(menus["ثبت شرکت و توسعه کسب و کار"])}
            </div>
          </aside>

          {/* بخش محتوا */}
          <main className="flex-1 bg-white rounded-lg shadow p-6 relative">
            {section && (
              <div className="absolute top-4 left-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {section}
              </div>
            )}

            {section ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">{section}</h2>
                {contentMap[section] || (
                  <div>محتوایی برای این بخش یافت نشد.</div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  ثبت شرکت و توسعه کسب و کار
                </h2>
                <p>لطفاً از سایدبار یک بخش را انتخاب کنید.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// کامپوننت اصلی با Suspense
export default function BusinessPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">در حال بارگذاری...</div>}>
      <BusinessPageContent />
    </Suspense>
  );
}