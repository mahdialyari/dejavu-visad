"use client";

import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Video for Desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src="/video/hero-3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Video for Mobile */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 block md:hidden"
      >
        <source src="/video/hero-1.MP4" type="video/MP4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        {/* ✅ موبایل: flex-col + فاصله عمودی کوچک
            ✅ تبلت (sm): هنوز زیر هم باشن ولی فاصله بیشتر
            ✅ دسکتاپ (md): flex-row + فاصله افقی */}
        <div className="
          flex flex-col items-center justify-center
          space-y-3                 /* موبایل فاصله کم */
          sm:space-y-6              /* تبلت – فاصله بیشتر */
          md:flex-row md:space-y-0  /* دسکتاپ – row بشه */
          md:space-x-10             /* فاصله افقی زیاد */
        ">
          {/* Persian Button */}
          <Link
            href="/fa"
            className="px-8 py-4 text-lg sm:text-xl md:text-base
                       rounded-lg bg-gradient-to-r from-blue-900 to-blue-700 
                       text-white font-medium shadow hover:scale-105 transition"
          >
            فارسی / Farsi
          </Link>

          {/* English Button */}
          <Link
            href="/en"
            className="px-8 py-4 text-lg sm:text-xl md:text-base
                       rounded-lg bg-gradient-to-r from-blue-900 to-blue-700 
                       text-white font-medium shadow hover:scale-105 transition"
          >
            English
          </Link>
        </div>
      </div>
    </main>
  );
}