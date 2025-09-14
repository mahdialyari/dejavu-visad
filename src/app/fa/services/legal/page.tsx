"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

// ================== Menus ==================
const menus = {
  "خدمات حقوقی": [
    "دادگاه فدرال و تجدید نظر رد پرونده",
    "خدمات حقوقی بیزینسی",
    "دعاوی حقوقی در بریتیش کلمبیا",
  ],
};

// ================== ContentMap ==================
const contentMap: Record<string, React.JSX.Element> = {
  "دادگاه فدرال و تجدید نظر رد پرونده": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">دادگاه فدرال و تجدید نظر رد پرونده در کانادا</h3>
        <p className="leading-7">
          گاهی اوقات، علیرغم ارائه مدارک کامل و شرایط مناسب، درخواست ویزا یا اقامت در کانادا توسط افسر مهاجرت رد می‌شود.
          در چنین مواردی، یکی از راه‌های قانونی برای تجدید نظر، مراجعه به دادگاه فدرال کانادا است.
          این فرآیند که به نام Judicial Review شناخته می‌شود، به متقاضی اجازه می‌دهد تا تصمیم افسر مهاجرت توسط یک قاضی بی‌طرف مورد بررسی قرار گیرد.
        </p>
        <p className="leading-7">
          در این فرآیند، دادگاه بررسی می‌کند که آیا افسر مهاجرت در تصمیم‌گیری خود مرتکب خطای قانونی شده، از اختیارات خود سوء استفاده کرده یا مدارک را نادیده گرفته است.
          اگر قاضی به این نتیجه برسد که تصمیم ناعادلانه بوده، پرونده برای ارزیابی مجدد به اداره مهاجرت (IRCC) بازگردانده می‌شود.
        </p>
        <p className="leading-7">
          موسسه ما، با تیمی از وکلای مهاجرت دارای پروانه و در همکاری با وکلای کانادایی، خدمات تخصصی برای تجدید نظر در رد پرونده‌ها و پیگیری پرونده‌های دادگاه فدرال ارائه می‌دهد.
          ما تمام مراحل را برای شما مدیریت می‌کنیم، از جمع‌آوری مدارک، تهیه دادخواست، نمایندگی در دادگاه، تا پیگیری بازگشت پرونده به IRCC.
        </p>
      </section>
    </div>
  ),

  "خدمات حقوقی بیزینسی": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">خدمات حقوقی بیزینسی و حقوق شرکت‌ها</h3>
        <p className="leading-7">
          کسب‌وکارها در هر اندازه‌ای برای رشد پایدار و پیشگیری از ریسک‌های حقوقی نیاز به مشاوره و نمایندگی حقوقی تخصصی دارند.
          از ثبت و تأسیس شرکت گرفته تا تنظیم قراردادهای تجاری پیچیده و حتی رسیدگی به اختلافات حقوقی،
          حضور یک تیم حقوقی حرفه‌ای می‌تواند موفقیت و امنیت سرمایه‌گذاری را تضمین کند.
        </p>
        <p className="leading-7">
          موسسه ما، در همکاری با وکلای دارای پروانه در کانادا و امارات، خدمات جامع حقوقی در زمینه کسب‌وکار و حقوق شرکت‌ها ارائه می‌دهد.
          هدف ما این است که مدیران، کارآفرینان و سرمایه‌گذاران بتوانند با خیال راحت فعالیت‌های تجاری خود را در بازارهای داخلی و بین‌المللی توسعه دهند.
        </p>
      </section>

      <section>
        <h4 className="font-semibold">خدمات حقوقی در کانادا</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>ثبت و تأسیس شرکت (Corporation, Partnership, Sole Proprietorship)</li>
          <li>تنظیم و اصلاح اساسنامه و آیین‌نامه‌های داخلی</li>
          <li>بازبینی قراردادهای تجاری (استخدام، اجاره، فروش، توزیع، تأمین)</li>
          <li>قراردادهای سهامداران و قراردادهای سرمایه‌گذاری</li>
          <li>مشاوره ادغام و تملیک (M&A)</li>
          <li>دعاوی شرکت‌ها در دادگاه‌ها و مراجع قانونی</li>
          <li>مالکیت فکری و حفاظت از برند</li>
          <li>رعایت قوانین مالیاتی و تجاری کانادا</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold">خدمات حقوقی در امارات</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>راه‌اندازی شرکت در Free Zone و Mainland</li>
          <li>تنظیم و بازبینی قراردادهای داخلی و بین‌المللی</li>
          <li>قراردادهای مشارکت و سرمایه‌گذاری (JV & Shareholding Agreements)</li>
          <li>مشاوره حقوق کار امارات و قراردادهای استخدام</li>
          <li>حل اختلاف از طریق مذاکره، داوری یا دادگاه‌ها</li>
          <li>مشاوره حقوقی برای سرمایه‌گذاران خارجی (Compliance)</li>
          <li>قراردادهای نمایندگی تجاری و فرانچایز</li>
          <li>ثبت و حفاظت برند در امارات و GCC</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold">مزایای خدمات ما</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>پیشگیری از اختلافات با قراردادهای دقیق و شفاف</li>
          <li>پشتیبانی در اختلافات تجاری و دعاوی</li>
          <li>کمک به توسعه بین‌المللی سرمایه‌گذاران</li>
          <li>حضور وکلای دارای پروانه در کانادا و امارات</li>
        </ul>
      </section>
    </div>
  ),

  "دعاوی حقوقی در بریتیش کلمبیا": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">دعاوی حقوقی در بریتیش کلمبیا</h3>
        <p className="leading-7">
          بریتیش کلمبیا یکی از مهم‌ترین مراکز اقتصادی و تجاری کانادا است.
          حل اختلافات در این استان نیاز به آشنایی کامل با سیستم قضایی BC دارد.
          دادگاه‌های اصلی شامل <b>دادگاه استانی</b> و <b>دادگاه عالی BC</b> می‌شوند.
        </p>
      </section>

      <section>
        <h4 className="font-semibold">خدمات ما در BC</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>اختلافات قراردادی (فسخ، نقض یا اجرای قرارداد)</li>
          <li>اختلافات تجاری و سهامداران</li>
          <li>اختلافات ملکی و اجاره‌ای</li>
          <li>اختلافات کاری و трудовی</li>
          <li>اختلافات مالی و بدهی</li>
          <li>اختلافات حقوق خانواده</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold">روش‌های جایگزین حل اختلاف</h4>
        <p className="leading-7">
          علاوه بر نمایندگی در دادگاه، تیم ما خدمات میانجی‌گری و داوری را نیز ارائه می‌دهد
          تا اختلافات با هزینه و زمان کمتر، خارج از دادگاه حل شوند.
        </p>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ استفاده از خدمات ما در BC تضمین می‌کند که منافع شما به بهترین شکل ممکن، هم در دادگاه و هم خارج از آن، محافظت شود.
        </p>
      </section>
    </div>
  ),
};

// ================== Component ==================
function LegalPageContent() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  // تابع عمومی برای رندر آیتم‌های منو
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
      {/* هدر */}
      <div className="relative w-full h-[280px] rounded-b-3xl flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="خدمات حقوقی هدر"
          fill
          className="object-cover rounded-b-3xl"
          quality={100}
          priority
          sizes="100vw"
        />
        <h1 className="relative z-10">خدمات حقوقی</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* سایدبار */}
          <aside className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">زیرمنوها</h2>
            <div className="space-y-2">
              {renderMenuItems(menus["خدمات حقوقی"])}
            </div>
          </aside>

          {/* محتوای اصلی */}
          <main className="flex-1 bg-white rounded-lg shadow p-6 relative">
            {section ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">{section}</h2>
                {contentMap[section] || (
                  <div>محتوایی برای این بخش وجود ندارد.</div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">خدمات حقوقی</h2>
                <p>لطفاً یک بخش حقوقی را از سایدبار انتخاب کنید.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// کامپوننت اصلی با Suspense
export default function LegalPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">در حال بارگذاری...</div>}>
      <LegalPageContent />
    </Suspense>
  );
}