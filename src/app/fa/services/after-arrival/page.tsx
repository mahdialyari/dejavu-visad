"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react"; // ✅ useState حذف و Suspense اضافه شد

// داده‌های منو برای خدمات پس از ورود
const menus = {
  "خدمات پس از ورود": [
    "اجاره منزل",
    "کاریابی و تقویت رزومه",
    "افتتاح حساب بانکی + دریافت کارت ملی",
    "خدمات رفت و آمد فرودگاهی",
    "راه اندازی کسب و کار (بیزینس پلن)",
  ],
};

// محتوای هر بخش برای خدمات پس از ورود
const contentMap: Record<string, React.JSX.Element> = {
  "اجاره منزل": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">خدمات اجاره منزل</h3>
      <p>ما به شما در پیدا کردن مسکن مناسب در کانادا کمک می‌کنیم. خدمات ما شامل:</p>
      <ul className="list-disc pr-4 space-y-2">
        <li>پیدا کردن آپارتمان، خانه یا سوئیت مناسب</li>
        <li>مشاوره در مورد مناطق مختلف شهر</li>
        <li>هماهنگی برای بازدید از ملک</li>
        <li>کمک در درک قرارداد اجاره</li>
        <li>راهنمایی برای تأمین ضمانت اجاره</li>
      </ul>
    </div>
  ),

  "کاریابی و تقویت رزومه": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">خدمات کاریابی و تقویت رزومه</h3>
      <p>برای ورود موفق به بازار کار کانادا، خدمات زیر را ارائه می‌دهیم:</p>
      <ul className="list-disc pr-4 space-y-2">
        <li>نگارش رزومه به سبک کانادایی</li>
        <li>نوشتن Cover Letter حرفه‌ای</li>
        <li>آماده‌سازی برای مصاحبه‌های کاری</li>
        <li>معرفی به شرکت‌های معتبر</li>
        <li>راهنمایی برای شناخت بازار کار کانادا</li>
      </ul>
    </div>
  ),

  "افتتاح حساب بانکی + دریافت کارت ملی": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">افتتاح حساب بانکی و دریافت کارت ملی</h3>
      <p>پشتیبانی کامل برای امور اداری اولیه:</p>
      <ul className="list-disc pr-4 space-y-2">
        <li>هماهنگی برای افتتاح حساب در بانک‌های معتبر</li>
        <li>راهنمایی برای دریافت کارت اجتماعی (SIN)</li>
        <li>کمک در دریافت کارت بهداشتی (Health Card)</li>
        <li>راهنمایی برای دریافت گواهینامه رانندگی</li>
        <li>پشتیبانی در ثبت‌نام برای خدمات ضروری</li>
      </ul>
    </div>
  ),

  "خدمات رفت و آمد فرودگاهی": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">خدمات ترانسفر فرودگاهی</h3>
      <p>استقبال و انتقال ایمن از فرودگاه به مقصد:</p>
      <ul className="list-disc pr-4 space-y-2">
        <li>استقبال در فرودگاه بین‌المللی</li>
        <li>انتقال به هتل یا محل اقامت</li>
        <li>کمک در حمل و نقل چمدان‌ها</li>
        <li>ارائه اطلاعات اولیه درباره شهر</li>
        <li>رزرو هتل برای روزهای اول</li>
      </ul>
    </div>
  ),

  "راه اندازی کسب و کار (بیزینس پلن)": (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">راه‌اندازی کسب و کار در کانادا</h3>
      <p>پشتیبانی تخصصی برای کارآفرینان:</p>
      <ul className="list-disc pr-4 space-y-2">
        <li>نگارش بیزینس پلن حرفه‌ای</li>
        <li>مشاوره در انتخاب نوع کسب و کار</li>
        <li>راهنمایی برای ثبت شرکت</li>
        <li>کمک در دریافت مجوزهای لازم</li>
        <li>مشاوره مالیاتی و حسابداری</li>
      </ul>
    </div>
  ),
};

// ✅ کامپوننت محتوا
function AfterArrivalContent() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  const renderMenuItems = (items: string[], level = 0) => {
    return items.map((item, index) => (
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
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* هدر با Image */}
      <div className="relative w-full h-[280px] rounded-b-3xl flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Header Background"
          fill
          className="object-cover rounded-b-3xl"
          quality={100}
          priority
          sizes="100vw"
        />
        <h1 className="relative z-10">خدمات پس از ورود</h1>
      </div>

      {/* محتوای اصلی */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* سایدبار */}
          <aside className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">زیرمنوها</h2>
            <div className="space-y-2">
              {renderMenuItems(menus["خدمات پس از ورود"])}
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
                <h2 className="text-2xl font-bold mb-4">{section}</h2>
                {contentMap[section] || (
                  <div>محتوایی برای این بخش یافت نشد.</div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">خدمات پس از ورود</h2>
                <p>لطفاً از سایدبار یک بخش را انتخاب کنید.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// ✅ کامپوننت اصلی با Suspense
export default function AfterArrivalPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">درحال بارگذاری...</div>}>
      <AfterArrivalContent />
    </Suspense>
  );
}