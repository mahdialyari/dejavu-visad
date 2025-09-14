"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

// تعریف انواع TypeScript برای ساختار منو
interface MenuItem {
  title: string;
  items: (string | MenuItem)[];
}

interface MenuData {
  [key: string]: MenuItem[];
}

// داده‌های منو
const menus: MenuData = {
  "امور مهاجرتی": [
    {
      title: "ویزاهای موقتی",
      items: [
        "ویزای توریستی (ویزیتور)",
        "ویزای تحصیلی (اخذ پذیرش و ویزا)",
        {
          title: "ویزای کاری",
          items: [
            "اجازه کار بسته (جاب آفر)",
            "اجازه کار باز",
            "اجازه کار همراه همسر",
            "اجازه کار برنامه ثبت شرکت و انتقال شعبه",
          ],
        },
      ],
    },
    {
      title: "ویزاهای دائم",
      items: [
        "اسپانسری همسر و فرزندان زیر ۲۲ سال",
        "اسپانسرشیپ والدین",
        {
          title: "اکسپرس انتری",
          items: [
            "نیروی کار ماهر فدرال",
            "تجربه کار کانادایی (CEC)",
            {
              title: "برنامه‌های استانی (PNP)",
              items: [
                "بریتیش کلمبیا",
                "انتاریو", 
                "آلبرتا",
                "ساسکاچوان",
                "نوا اسکوشیا",
                "برنامه آتلانتیک",
                "منیتوبا",
                "نیوبرانزویک", 
                "یوکان",
                "کبک"
              ]
            },
            "برنامه فدرال اسکیلد ترید",
            {
              title: "برنامه‌های تخصصی محور",
              items: ["کادر درمان", "STEM", "فرانسوی زبان‌ها", "آموزش"],
            },
          ],
        },
        "خرید بیزنس",
        "کارآفرینی استانی",
      ],
    },
    {
      title: "بشر دوستانه و پناهندگی",
      items: [
        "بشر دوستانه",
        "پناهندگی",
        {
          title: "دادگاه‌های مهاجرتی",
          items: [
            "دادگاه‌های پناهندگی",
            "دادگاه‌های تجدید نظر پناهندگی",
            "دادگاه بازداشتی",
            "دادگاه تعهدات مقیمان دائم",
          ],
        },
      ],
    },
    {
      title: "سیتیزن شیپ (امور شهروندی)",
      items: [
        "خدمات اخذ تابعیت",
        "خدمات مجوز سفر برای پناهندگان"
      ],
    },
  ],
};

// شروع contentMap
const contentMap: Record<string, React.JSX.Element> = {
  "ویزای توریستی (ویزیتور)": (
    <div className="space-y-8">
      {/* بخش کانادا */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">ویزای توریستی کانادا (Temporary Resident Visa – TRV)</h3>
        <p className="leading-7">
          ویزای توریستی کانادا یا همان Temporary Resident Visa (TRV) یکی از پرطرفدارترین مسیرهای ورود موقت به کاناداست.  
          این ویزا برای اهدافی مانند گردشگری، بازدید از خانواده و دوستان، شرکت در رویدادها و همایش‌ها، یا سفرهای کوتاه‌مدت کاری صادر می‌شود.  
          متقاضی باید ثابت کند که توانایی مالی کافی برای پوشش هزینه‌های سفر دارد و وابستگی‌های قوی مثل شغل، خانواده یا دارایی در کشور خود دارد  
          تا افسر مهاجرت اطمینان یابد پس از پایان اعتبار ویزا به کشور مبدا بازخواهد گشت.
        </p>
        <p className="leading-7">
          یکی از مهم‌ترین دلایل ریجکت ویزای توریستی کانادا ناتوانی در اثبات همین پیوندهاست.  
          به همین دلیل، تهیه مدارک مالی، شغلی و خانوادگی دقیق اهمیت زیادی دارد.  
          استفاده از خدمات وکیل رسمی مهاجرت کمک می‌کند پرونده با استراتژی درست و مدارک کامل ارائه شود و شانس موفقیت به‌طور چشمگیری افزایش یابد.
        </p>
      </section>

      {/* بخش آمریکا */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">ویزای توریستی آمریکا (B1/B2)</h3>
        <p className="leading-7">
          ویزای توریستی آمریکا (B1/B2) یکی از پرتقاضاترین ویزاهای موقت این کشور است که برای گردشگری، دیدار خانواده و دوستان،  
          درمان پزشکی، سفرهای تجاری کوتاه‌مدت و شرکت در نمایشگاه‌ها و کنفرانس‌ها صادر می‌شود.  
          این ویزا معمولاً با اعتبار ۵ یا ۱۰ ساله صادر می‌شود و امکان ورود چندباره به خاک آمریکا را فراهم می‌کند.
        </p>
        <p className="leading-7">
          برای دریافت این ویزا، متقاضی باید نشان دهد که منابع مالی کافی برای پوشش هزینه‌های سفر دارد و وابستگی‌های محکمی مثل شغل یا خانواده در کشور خود دارد.  
          افسر کنسولی تنها در صورتی درخواست را تایید می‌کند که اطمینان یابد فرد پس از پایان سفر به کشورش بازخواهد گشت.
        </p>
      </section>

      {/* بخش انگلستان */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">ویزای توریستی انگلستان (UK Standard Visitor Visa)</h3>
        <p className="leading-7">
          ویزای توریستی انگلستان (Standard Visitor Visa) به متقاضیان اجازه می‌دهد برای اهدافی مانند گردشگری، ملاقات با خانواده و دوستان،  
          سفرهای کوتاه‌مدت کاری، درمان پزشکی و دوره‌های آموزشی کوتاه‌مدت وارد انگلستان شوند.  
          اعتبار این ویزا معمولاً شش ماهه است اما در برخی شرایط می‌تواند برای ۲، ۵ یا حتی ۱۰ سال صادر شود.  
          با این حال، در هر بار ورود حداکثر شش ماه اجازه اقامت وجود دارد.
        </p>
        <p className="leading-7">
          در روند دریافت این ویزا، ارائه دعوت‌نامه معتبر، مدارک مالی شفاف، رزرو هتل و بلیت برگشت اهمیت زیادی دارد.  
          همچنین داشتن سابقه سفرهای بین‌المللی می‌تواند تاثیر مثبت بر تصمیم افسر مهاجرت داشته باشد.  
          مشاوره با یک کارشناس مهاجرت باتجربه ریسک ریجکت شدن پرونده را کاهش می‌دهد.
        </p>
      </section>
    </div>
  ),
  "ویزای تحصیلی (اخذ پذیرش و ویزا)": (
    <div className="space-y-8">
      {/* کانادا */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">ویزای تحصیلی کانادا (Canada Study Permit)</h3>
        <p className="leading-7">
          ما در DéjàVu Visa به شما کمک می‌کنیم برای ادامه تحصیل در کانادا پذیرش معتبر دریافت کنید 
          و برای ویزای تحصیلی کانادا اقدام کنید. 
          خدمات ما شامل انتخاب دانشگاه یا کالج‌های مورد تأیید (DLI)، آماده‌سازی مدارک مالی و تحصیلی، 
          نوشتن استراتژی قوی برای پرونده و مشاوره در روند اقدام برای همراهان (همسر و فرزندان) است.
        </p>
        <p className="leading-7">
          از مزایای این مسیر می‌توان به امکان کار حین تحصیل، دریافت ویزای همراه برای خانواده 
          و شانس اقدام برای اقامت دائم پس از پایان تحصیل اشاره کرد.
        </p>
      </section>

      {/* آمریکا */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">ویزای تحصیلی آمریکا (US F-1 Visa)</h3>
        <p className="leading-7">
          در مسیر دریافت ویزای تحصیلی آمریکا (F-1)، ما شما را از انتخاب دانشگاه تا مصاحبه سفارت همراهی می‌کنیم.  
          تیم ما تجربه دارد مدارک مالی و تحصیلی شما را به شکل حرفه‌ای آماده کند 
          تا افسر کنسولی مطمئن شود هدف شما تحصیل است و توان بازگشت دارید.
        </p>
      </section>

      {/* انگلستان */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">ویزای تحصیلی انگلستان (UK Student Visa)</h3>
        <p className="leading-7">
          دریافت پذیرش از دانشگاه‌های معتبر و اخذ ویزای دانشجویی انگلستان نیازمند مدارکی مثل تمکن مالی و مدرک زبان انگلیسی است.  
          تیم ما مدارک شما را آماده کرده و پرونده را به شکلی قوی ارائه می‌دهد. 
        </p>
        <p className="leading-7">
          همچنین درباره Graduate Route پس از تحصیل هم راهنمایی کامل دریافت می‌کنید.
        </p>
      </section>

      {/* امارات */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">ویزای تحصیلی امارات (UAE Student Visa)</h3>
        <p className="leading-7">
          برای تحصیل در دانشگاه‌های معتبر دبی و ابوظبی، ما تمام مراحل پذیرش و اخذ ویزا را مدیریت می‌کنیم. 
          تحصیل در امارات به دلیل نزدیکی به ایران, تدریس به زبان انگلیسی و فرصت‌های کاری پس از تحصیل گزینه‌ای عالی است.
        </p>
      </section>
    </div>
  ),
  "اجازه کار بسته (جاب آفر)": (
    <div className="space-y-8">
      {/* کانادا */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">اجازه کار بسته کانادا (Closed Work Permit)</h3>
        <p className="leading-7">
          مخصوص افرادی است که از یک کارفرمای کانادایی پیشنهاد شغلی معتبر (Job Offer) گرفته‌اند.  
          در این نوع ویزا، متقاضی تنها حق کار برای همان کارفرما را دارد.  
          در بسیاری از موارد نیاز به LMIA است، مگر اینکه معافیت‌هایی مثل قراردادهای بین‌المللی شامل شود.
        </p>
      </section>

      {/* آمریکا */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">ویزای کاری آمریکا (H-1B و سایر)</h3>
        <p className="leading-7">
          پرطرفدارترین مسیر کاری آمریکا ویزای H-1B است که مخصوص حرفه‌ای‌ها مثل IT، مهندسی و پزشکی است.  
          نیاز به کارفرمای رسمی و قرعه‌کشی دارد. مسیرهایی مثل L-1 (انتقال شرکتی) و O-1 (برای استعدادهای خاص) هم گزینه هستند.
        </p>
      </section>

      {/* انگلستان */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">ویزای کاری انگلستان (Skilled Worker Visa)</h3>
        <p className="leading-7">
          جایگزین Tier 2 شده است. برای متقاضیانی است که از کارفرمای تأیید شده بریتانیا جاب آفر دارند.  
          نیاز به مدرک زبان، قرارداد کار و تمکن مالی دارد. 
          امکان اقامت دائم پس از ۵ سال یکی از مزایا است. 
        </p>
      </section>

      {/* امارات */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">ویزای کاری امارات (Work Permit)</h3>
        <p className="leading-7">
          جاب آفر معتبر از کارفرمای اماراتی پیش‌نیاز این مسیر است.  
          پس از تأیید وزارت کار، اجازه کار و اقامت صادر می‌شود. 
          معمولاً ۲ تا ۳ سال اعتبار دارد و قابل تمدید است.
        </p>
      </section>
    </div>
  ),
  "اجازه کار باز": (
    <div className="space-y-8">
      {/* معرفی کلی */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">اجازه کار باز (Open Work Permit)</h3>
        <p className="leading-7">
          این نوع ویزا برخلاف ویزای کار بسته محدود نیست؛ دارنده آن می‌تواند برای هر کارفرمای قانونی در کشور مقصد کار کند.  
          انعطاف بالایی دارد و بیشتر برای همسر دانشجویان بین‌المللی، برخی مسیرهای مهاجرتی و فارغ‌التحصیلان واجد شرایط صادر می‌شود.
        </p>
      </section>

      {/* کانادا */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">کانادا – Open Work Permit</h3>
        <p className="leading-7">
          در کانادا این مجوز بیشتر به همسر یا همراه دانشجویان بین‌المللی یا دارندگان ویزای کاری داده می‌شود.  
          همچنین فارغ‌التحصیلان از طریق PGWP می‌توانند OWP بگیرند.  
          مزیت اصلی این است که تغییر کارفرما یا شهر نیاز به درخواست جدید ندارد.
        </p>
      </section>

      {/* آمریکا */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">آمریکا – EAD</h3>
        <p className="leading-7">
          در آمریکا مشابه این مجوز با نام Employment Authorization Document (EAD) شناخته می‌شود.  
          مخصوص همسر دارندگان ویزاهای خاص مثل H-1B یا L-1 و نیز کسانی که در مسیر گرین کارت هستند.  
          با داشتن EAD اجازه دارید با هر کارفرما همکاری کنید.
        </p>
      </section>

      {/* انگلستان */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">انگلستان – Graduate / Dependant Visa</h3>
        <p className="leading-7">
          در بریتانیا بیشتر ویزاهای کاری به کارفرما وابسته‌اند، اما مسیرهایی مثل Graduate Route یا ویزای همراه (Dependant) اجازه کار آزاد برای هر کارفرما می‌دهند.
        </p>
      </section>

      {/* امارات */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">امارات – Freelance / Spouse Permits</h3>
        <p className="leading-7">
          در امارات مسیر مستقیم OWP نداریم، اما ویزای فریلنس یا ویزای همراه مشابه همین کار می‌کند.  
          این مجوزها امکان همکاری با چند کارفرما یا پروژه را به متخصصان و همراهان می‌دهد.
        </p>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ OWP آزادی انتخاب بیشتری برای کار و اشتغال در کشور میزبان می‌دهد.
        </p>
      </section>
    </div>
  ),
  "اجازه کار همراه همسر": (
    <div className="space-y-8">
      {/* معرفی */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">اجازه کار همراه همسر (Spousal Work Permit)</h3>
        <p className="leading-7">
          مخصوص خانواده‌هایی است که می‌خواهند همزمان با مهاجرت تحصیلی یا کاری، همسر نیز اجازه کار داشته باشد.  
          این ویزا معمولاً برای همسر دانشجویان بین‌المللی یا نیروی کار خارجی معتبر صادر می‌شود.
        </p>
      </section>

      {/* کانادا */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">کانادا – Spousal OWP</h3>
        <p className="leading-7">
          در کانادا، همسر دانشجو یا نیروی کار خارجی می‌تواند درخواست Spousal Open Work Permit بدهد.  
          باز و بدون محدودیت شغلی است و همزمان با متقاضی اصلی انجام می‌شود.
        </p>
      </section>

      {/* آمریکا */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">آمریکا – EAD</h3>
        <p className="leading-7">
          همسر دارندگان ویزاهایی مثل H-1B یا L-1 در آمریکا می‌توانند برای EAD اقدام کنند.  
          این کارت اجازه می‌دهد در هر کسب‌وکاری شاغل شوند.
        </p>
      </section>

      {/* انگلستان */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">انگلستان – Dependant Visa</h3>
        <p className="leading-7">
          همسران دانشجو یا متخصص در انگلستان می‌توانند ویزای همراه بگیرند که شامل مجوز کامل کار است.  
          حتی مسیر اقامت دائم و شهروندی را مستقل پیگیری کنند.
        </p>
      </section>

      {/* امارات */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">امارات – Spouse Work Permit</h3>
        <p className="leading-7">
          در امارات، همسر نیروی کار خارجی بعد از گرفتن اقامت وابسته (Dependant Residence)، می‌تواند Work Permit درخواست دهد.  
          این مسیر توسط کارفرما اسپانسر می‌شود.
        </p>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ SWP کمک می‌کند خانواده‌ها همزمان با هم به کانادا، آمریکا، انگلستان یا امارات مهاجرت کنند و کیفیت زندگی‌شان بالاتر برود. 
        </p>
      </section>
    </div>
  ),
  "اجازه کار برنامه ثبت شرکت و انتقال شعبه": (
    <div className="space-y-8">
      {/* معرفی کلی */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">اجازه کار از طریق ثبت شرکت و انتقال شعبه</h3>
        <p className="leading-7">
          مخصوص مدیران، کارآفرینان و صاحبان بیزینس که قصد دارند یک شرکت جدید ثبت کنند 
          یا شعبه بین‌المللی‌شان را منتقل کنند.  
          علاوه بر اجازه کار، مسیر مطمئن برای توسعه کسب‌وکار و حتی دریافت اقامت دائم در برخی کشورهاست.
        </p>
      </section>

      {/* کانادا */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">کانادا – ICT & Incorporation</h3>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>انتقال مدیران یا نیروهای کلیدی به شعبه کانادایی.</li>
          <li>ثبت شرکت جدید و دریافت مجوز کار مدیریتی.</li>
          <li>نوشتن بیزنس‌پلن و اثبات فعالیت اقتصادی واقعی.</li>
          <li>امکان تبدیل مسیر به اقامت دائم (PR).</li>
        </ul>
      </section>

      {/* آمریکا */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">آمریکا – L-1 Visa</h3>
        <p className="leading-7">
          مخصوص مدیران و کارمندان متخصصی که از دفتر خارجی به شعبه آمریکایی منتقل می‌شوند.  
          در بسیاری از موارد امکان تبدیل مسیر به گرین کارت دارد.
        </p>
      </section>

      {/* انگلستان */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">انگلستان – Expansion Worker Visa</h3>
        <p className="leading-7">
          اجازه می‌دهد شرکت‌های خارجی نمایندگان‌شان را برای راه‌اندازی شعبه جدید به بریتانیا بفرستند.
        </p>
      </section>

      {/* امارات */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">امارات – Company Incorporation</h3>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>ثبت شرکت در Free Zone یا Mainland.</li>
          <li>دریافت مجوز کار و اقامت برای مالکان و مدیران.</li>
          <li>امکان دریافت ویزای سرمایه‌گذاری یا طلایی.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ یکی از سریع‌ترین راه‌ها برای مدیران بین‌المللی و صاحبان کسب‌وکار جهت کار و اقامت در کشورهای پیشرفته.
        </p>
      </section>
    </div>
  ),
  "اسپانسری همسر و فرزندان زیر ۲۲ سال": (
    <div className="space-y-8">
      {/* معرفی */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">اسپانسری همسر و فرزندان زیر ۲۲ سال</h3>
        <p className="leading-7">
          یکی از محبوب‌ترین مسیرهای مهاجرتی کانادا که به شهروندان و مقیمان دائم اجازه می‌دهد همسر و فرزندان وابسته را 
          برای زندگی مشترک به کانادا بیاورند. هدف این برنامه اتحاد خانوادگی است.
        </p>
      </section>

      {/* شرایط اسپانسر */}
      <section className="space-y-4">
        <h4 className="font-semibold">شرایط اسپانسر:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>شهروند یا مقیم دائم بودن اسپانسر.</li>
          <li>زندگی در کانادا یا قصد بازگشت به کانادا.</li>
          <li>نداشتن مانع قانونی یا سابقه کیفری خاص.</li>
          <li>توانایی مالی کافی (با شروط سبک‌تر از سایر ویزاها).</li>
        </ul>
      </section>

      {/* شرایط فرزندان وابسته */}
      <section className="space-y-4">
        <h4 className="font-semibold">شرایط فرزندان:</h4>
        <p className="leading-7">
          وابسته باید زیر ۲۲ سال و مجرد باشد.  
          اگر بالای ۲۲ سال است، تنها در شرایط خاص مثل وابستگی به دلیل معلولیت واجد شرایط می‌شود.
        </p>
      </section>

      {/* مزایا */}
      <section className="space-y-1">
        <h4 className="font-semibold">مزایا:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>اقامت دائم کانادا برای همراهان.</li>
          <li>اجازه کار باز (OWP) برای همسر در زمان بررسی پرونده.</li>
          <li>تحصیل رایگان برای فرزندان در مدارس کانادا.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ مسیر اسپانسری همسر و فرزندان ساده و مطمئن است؛ بهترین راه برای آوردن خانواده به کانادا و شروع زندگی کنار هم.
        </p>
      </section>
    </div>
  ),
  "اسپانسرشیپ والدین": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">اسپانسرشیپ والدین (Parents and Grandparents Sponsorship – PGP)</h3>
        <p className="leading-7">
          یکی از محبوب‌ترین مسیرهای خانوادگی مهاجرت به کاناداست.  
          این برنامه به شهروندان و مقیمان دائم کانادا اجازه می‌دهد والدین و پدربزرگ/مادربزرگ خود را برای اقامت دائم اسپانسر کنند.  
          هدف اصلی این برنامه، حفظ اتحاد خانواده و ایجاد امکان زندگی مشترک در کاناداست.
        </p>
      </section>

      {/* شرایط اسپانسر */}
      <section className="space-y-4">
        <h4 className="font-semibold">شرایط اسپانسر:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>شهروند یا مقیم دائم کانادا بودن.</li>
          <li>حداقل ۱۸ سال سن.</li>
          <li>سه سال اخیر درآمد کافی (MNI) طبق جداول IRCC.</li>
          <li>ارائه مدارک CRA (Notice of Assessment).</li>
          <li>پذیرفتن تعهد مالی (Undertaking) برای حمایت از والدین طی مدت مشخص.</li>
        </ul>
      </section>

      {/* مزایا */}
      <section>
        <h4 className="font-semibold">مزایا برای والدین:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>دریافت اقامت دائم کانادا (PR).</li>
          <li>استفاده از خدمات درمانی عمومی.</li>
          <li>امکان اقدام برای شهروندی کانادا در آینده.</li>
          <li>زندگی در کنار فرزندان و نوه‌ها در محیطی امن و با کیفیت.</li>
        </ul>
      </section>

      {/* گزینه جایگزین – سوپر ویزا */}
      <section>
        <h4 className="font-semibold">جایگزین موقت – سوپر ویزا (Super Visa)</h4>
        <p className="leading-7">
          به دلیل محدودیت ظرفیت PGP، بسیاری از متقاضیان از طریق سوپر ویزا اقدام می‌کنند.  
          سوپر ویزا ورود چندبار (Multiple Entry) تا ۱۰ سال اعتبار دارد و امکان اقامت ۵ ساله‌ی مداوم در هر بار ورود فراهم است.
        </p>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ با اسپانسرشیپ والدین یا سوپر ویزا، می‌توانید عزیزانتان را به کانادا بیاورید و از فرصت زندگی خانوادگی بهره‌مند شوید.
        </p>
      </section>
    </div>
  ),
  "نیروی کار ماهر فدرال": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">برنامه نیروی کار ماهر فدرال (Federal Skilled Worker Program – FSWP)</h3>
        <p className="leading-7">
          یکی از سه برنامه اصلی Express Entry کاناداست.  
          مخصوص متقاضیانی با تحصیلات دانشگاهی، سابقه کار تخصصی و تسلط به زبان انگلیسی یا فرانسوی.  
          این مسیر سریع‌ترین راه برای دریافت اقامت دائم برای متخصصان خارجی است.
        </p>
      </section>

      {/* شرایط اصلی */}
      <section className="space-y-4">
        <h4 className="font-semibold">شرایط واجدین:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>حداقل یک سال سابقه کار تخصصی در ۵ سال گذشته در NOC (TEER 0,1,2,3).</li>
          <li>مدرک زبان معتبر CLB 7 یا بالاتر.</li>
          <li>تحصیلات معادل دیپلم دبیرستان کانادایی یا بالاتر (ECA برای مدارک خارجی).</li>
          <li>کسب حداقل ۶۷ امتیاز از ۱۰۰ در فاکتورهای Selection Factors.</li>
        </ul>
      </section>

      {/* سیستم امتیازدهی CRS */}
      <section className="space-y-4">
        <h4 className="font-semibold">سیستم امتیاز CRS:</h4>
        <p className="leading-7">
          بعد از ورود به استخر اکسپرس انتری، متقاضیان بر اساس عوامل سن، تحصیلات، زبان، سابقه کار و جاب آفر امتیاز می‌گیرند.  
          کسانی که بالاترین امتیاز را دارند، دعوتنامه (ITA) برای PR دریافت خواهند کرد.
        </p>
      </section>

      {/* مزایا */}
      <section>
        <h4 className="font-semibold">مزایا:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>اقامت سریع برای خود و خانواده.</li>
          <li>امکان زندگی و کار در هر نقطه کانادا.</li>
          <li>مسیر مستقیم به شهروندی پس از دریافت PR.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ برنامه FSWP پلی مطمئن برای موفقیت متخصصان در کاناداست.
        </p>
      </section>
    </div>
  ),
  "تجربه کار کانادایی (CEC)": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">برنامه تجربه کار کانادایی (Canadian Experience Class – CEC)</h3>
        <p className="leading-7">
          یکی از سریع‌ترین و محبوب‌ترین مسیرها برای گرفتن اقامت دائم کاناداست که مخصوص کسانی طراحی شده 
          که قبلاً در کانادا کار قانونی انجام داده‌اند. بسیاری از دانشجوهای بین‌المللی بعد از تحصیل 
          و دریافت اجازه کار فارغ‌التحصیلی (PGWP) از این مسیر اقدام می‌کنند.
        </p>
      </section>

      {/* شرایط */}
      <section>
        <h4 className="font-semibold">شرایط اصلی:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>حداقل یک سال سابقه کار تمام وقت (یا معادل پاره‌وقت) در کانادا در سه سال گذشته.</li>
          <li>سطح زبان CLB 7 برای مشاغل TEER 0 و 1، و CLB 5 برای مشاغل TEER 2 و 3.</li>
          <li>کار باید با مجوز معتبر (Work Permit) انجام شده باشد.</li>
          <li>قصد اقامت در خارج از کبک (چون کبک برنامه مستقل دارد).</li>
        </ul>
      </section>

      {/* مزایا */}
      <section>
        <h4 className="font-semibold">مزایا:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>پردازش سریع (اغلب کمتر از ۶ ماه بعد از ITA).</li>
          <li>نیازی به اثبات تمکن مالی در اکثر موارد نیست.</li>
          <li>مسیر ویژه برای فارغ‌التحصیلان و کارگران موقت.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ CEC بهترین مسیر برای تبدیل وضعیت موقت (دانشجویی/کاری) به PR در کاناداست.
        </p>
      </section>
    </div>
  ),
  "برنامه‌های استانی (PNP)": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">برنامه‌های استانی کانادا (PNP) – معرفی کامل استان‌ها و شاخه‌ها</h3>
        <p className="leading-7">
          هر استان و قلمرو کانادا برنامه نامزدی مخصوص خود را دارد. این برنامه‌ها به استان‌ها امکان می‌دهد 
          متناسب با نیاز بازار کار و جمعیتی مهاجر انتخاب کنند. 
          حتی اگر امتیاز CRS شما پایین باشد، انتخاب استانی می‌تواند شانس گرفتن اقامت دائم را بالا ببرد.
        </p>
      </section>

      {/* استان‌ها */}
      <section>
        <h4 className="font-semibold">برنامه‌های برخی استان‌ها:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li><b>بریتیش کلمبیا (BC PNP):</b> شامل Skills Immigration (Skilled Worker, Healthcare Prof, International Graduate/Post-grad, Entry-level Semi-Skilled)، 
          مسیر Express Entry BC و مسیر کارآفرینی (Base، Regional Pilot).</li>
          <li><b>انتاریو (OINP):</b> Human Capital Stream (Human Capital Priorities، French-Speaking، Skilled Trades)، 
          Employer Job Offer Streams (فرصت کارگر خارجی، فارغ‌التحصیلان، مشاغل مورد نیاز)، 
          Business – Entrepreneur Stream.</li>
          <li><b>ساسکاچوان (SINP):</b> International Skilled Worker (Express Entry، Occupation in-demand)، 
          Saskatchewan Experience Streams (دارندگان اجازه کار، متخصصان بهداشت، دانشجوها، Hospitality، کامیون‌داران)، 
          Entrepreneur & Farm.</li>
          <li><b>آلبرتا (AAIP):</b> شامل Alberta Opportunity، Alberta Express Entry، Rural Renewal، 
          و Streams برای کارآفرینان (Graduate Entrepreneur، Foreign Graduate Entrepreneur، Farm Stream).</li>
          <li><b>مانیتوبا (MPNP):</b> Skilled Workers in Manitoba، Skilled Workers Overseas، International Education Stream، 
          Business Investor (Entrepreneur + Farm Investor Pathway).</li>
          <li><b>نوا اسکوشیا (NSNP):</b> Express Entry Streams (Nova Scotia Demand، Nova Scotia Experience، Labour Market Priorities)، 
          Skilled Worker، Occupation in-demand، Entrepreneur Streams.</li>
          <li><b>نیوبرانزویک (NBPNP):</b> Skilled Worker، Express Entry، Business Immigration، Strategic Initiative (فرانکوفون‌ها).</li>
          <li><b>جزیره پرنس ادوارد (PEI PNP):</b> Labour Impact مؤثر (Skilled Worker، Critical Worker، International Graduate)، 
          Express Entry، Business Impact (Work Permit).</li>
          <li><b>نیوفاندلند و لابرادور (NLPNP):</b> Skilled Worker، International Graduate، Entrepreneur، Priority Skills NL.</li>
          <li><b>یوکان (YNP):</b> Skilled Worker، Critical Impact Worker، Express Entry، Business Nominee.</li>
          <li><b>مناطق شمال غربی (NTNP):</b> Employer Driven Streams (Skilled Worker، Semi-skilled)، Business Stream.</li>
          <li><b>نوناووت:</b> در حال حاضر PNP فعال ندارد.</li>
        </ul>
      </section>

      {/* مزایا */}
      <section>
        <h4 className="font-semibold">مزایا:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>افزایش ۶۰۰ امتیاز CRS و شانس مطمئن دریافت ITA.</li>
          <li>امکان دریافت اقامت حتی با امتیاز CRS پایین‌تر.</li>
          <li>زندگی و کار در استان متناسب با تخصص یا تجربه فرد.</li>
          <li>مسیرهای ویژه برای فارغ‌التحصیلان، نیروهای کار و کارآفرینان.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ PNP امن‌ترین و سریع‌ترین راه برای تبدیل شدن به مقیم دائم کاناداست.
        </p>
      </section>
    </div>
  ),
  "برنامه فدرال اسکیلد ترید": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">برنامه فدرال اسکیلد ترید (Federal Skilled Trades Program – FSTP)</h3>
        <p className="leading-7">
          یکی از مسیرهای Express Entry ویژه افرادی با سابقه کار فنی و تخصصی است.  
          این برنامه به دلیل نیاز بالای بازار کار کانادا به نیروهای فنی طراحی شده و شانس بالایی برای گرفتن اقامت دائم دارد.
        </p>
      </section>

      {/* شرایط واجدین */}
      <section className="space-y-4">
        <h4 className="font-semibold">شرایط اصلی:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>حداقل دو سال سابقه کار تمام‌وقت در مشاغل فنی در پنج سال اخیر.</li>
          <li>مدرک زبان با حداقل CLB 5 (گفتاری و شنیداری) و CLB 4 (خواندن و نوشتن).</li>
          <li>داشتن جاب آفر معتبر یک‌ساله از کارفرمای کانادایی یا گواهی صلاحیت استانی.</li>
          <li>قصد اقامت در خارج از استان کبک.</li>
        </ul>
      </section>

      {/* گروه‌های شغلی */}
      <section>
        <h4 className="font-semibold">مثال گروه‌های شغلی تحت پوشش:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>مشاغل ساخت‌وساز (برق‌کاران، لوله‌کشان، جوشکاران)</li>
          <li>مشاغل صنعتی و اپراتوری ماشین‌آلات</li>
          <li>قصاب‌ها و نانواها</li>
          <li>مشاغل مرتبط با صنایع طبیعی و کشاورزی</li>
        </ul>
      </section>

      {/* مزایا */}
      <section>
        <h4 className="font-semibold">مزایا:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>شانس بالا به دلیل نیاز واقعی به نیروهای فنی.</li>
          <li>الزامات تحصیلی کمتر نسبت به برنامه‌های دیگر.</li>
          <li>فرصت سریع برای گرفتن اقامت دائم خانواده.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ بهترین فرصت برای کسانی که مهارت‌های فنی دارند و به دنبال اقامت دائم مطمئن هستند.
        </p>
      </section>
    </div>
  ),
  "کادر درمان": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">برنامه‌های تخصصی محور – کادر درمان</h3>
        <p className="leading-7">
          کمبود نیروی کار در حوزه سلامت باعث شده کانادا مسیرهای ویژه‌ای برای پزشکان، پرستاران، دندان‌پزشکان، داروسازان، ماماها و سایر رشته‌های سلامت باز کند.  
          افرادی با تجربه کاری و مدرک زبان مناسب از شانس بالاتری برخوردارند.
        </p>
      </section>

      {/* مسیرها */}
      <section>
        <h4 className="font-semibold">مسیرها:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>اکسپرس انتری (Category-Based Selection) برای مشاغل Health.</li>
          <li>برنامه‌های استانی ویژه نیروهای بهداشتی مثل BC، انتاریو و ساسکاچوان.</li>
          <li>برخی جریان‌ها نیازمند جاب آفر هستند، برخی بدون آن هم پذیرش دارند.</li>
        </ul>
      </section>

      {/* مزایا */}
      <section>
        <h4 className="font-semibold">مزایا:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>دسترسی سریع‌تر به ITA در دراوهای ویژه.</li>
          <li>بازار کار پایدار و پردرآمد.</li>
          <li>مسیر مستقیم به اقامت دائم خانواده.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ اگر در رشته‌های درمانی هستی، شانست برای مهاجرت کانادا بسیار بالاست.
        </p>
      </section>
    </div>
  ),
  "آموزش": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">برنامه تخصصی محور – آموزش (Education Stream)</h3>
        <p className="leading-7">
          به دلیل کمبود شدید معلم و نیروی آموزشی، کانادا مسیر ویژه‌ای برای جذب معلمان، مربیان و متخصصان آموزش باز کرده است.  
          حتی متقاضیان با امتیاز CRS پایین با این استریم شانس بالایی برای دعوت دارند.
        </p>
      </section>

      {/* شرایط */}
      <section>
        <h4 className="font-semibold">شرایط:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>سابقه کاری مرتبط با آموزش در سطوح ابتدایی، متوسطه یا آموزش‌های ویژه.</li>
          <li>مدرک زبان حداقل CLB 7.</li>
          <li>مدرک تحصیلی مرتبط (آموزش، روانشناسی آموزشی، زبان) با ECA معتبر.</li>
        </ul>
      </section>

      {/* کد شغلی‌ها */}
      <section>
        <h4 className="font-semibold">کدهای شغلی NOC شامل:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>NOC 41220 – معلمان دبیرستان</li>
          <li>NOC 41221 – معلمان ابتدایی</li>
          <li>NOC 41222 – مشاوران آموزشی</li>
          <li>NOC 41200 – استادان دانشگاه و کالج‌ها</li>
          <li>NOC 42201 – مربیان مهدکودک و پیش‌دبستان</li>
        </ul>
      </section>

      {/* مزایا */}
      <section>
        <h4 className="font-semibold">مزایا:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>شانس بالا در Drawهای اختصاصی.</li>
          <li>دسترسی به بازار کار گسترده و پایدار.</li>
          <li>اقامت دائم سریع‌تر برای معلمان و خانواده.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ آموزش یکی از مسیرهای بسیار مطمئن برای مهاجرت و اشتغال در کاناداست.
        </p>
      </section>
    </div>
  ),
  "خرید بیزنس": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">خرید بیزنس در خارج از کشور</h3>
        <p className="leading-7">
          یکی از مطمئن‌ترین و سریع‌ترین راه‌های ورود به بازارهای بین‌المللی، خرید یک بیزنس آماده (Business Acquisition) است.  
          کشورهای پیشرفته‌ای مانند کانادا، آمریکا, بریتانیا و امارات فرصت‌های ویژه‌ای برای سرمایه‌گذاران خارجی دارند تا با خرید 
          کسب‌وکارهای فعال، هم از سودآوری اقتصادی بهره‌مند شوند و هم مسیر مهاجرتی و اقامت خود را هموار سازند.
        </p>
      </section>

      {/* مزایا */}
      <section>
        <h4 className="font-semibold">مزایای خرید بیزنس:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>شروع فعالیت اقتصادی بدون نیاز به ساختن کسب‌وکار از صفر.</li>
          <li>دسترسی سریع به مشتریان، قراردادها و برند موجود.</li>
          <li>امکان دریافت اقامت کاری یا سرمایه‌گذاری برای متقاضی و خانواده.</li>
          <li>کاهش ریسک از طریق خرید بیزنس‌های موفق و دارای سوابق مالی معتبر.</li>
        </ul>
      </section>

      {/* کشورها */}
      <section>
        <h4 className="font-semibold">خرید بیزنس در کشورها:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li><b>کانادا:</b> خرید شرکت‌ها یا فرانچایز می‌تواند شما را واجد شرایط PNP کارآفرینی یا سرمایه‌گذاری کند. امکان اقامت دائم پس از تایید وجود دارد.</li>
          <li><b>آمریکا:</b> ویزای E-2 مخصوص سرمایه‌گذاری یا خرید بیزنس فعال. مسیرهای دیگری مثل EB-5 نیز برای سرمایه‌های بیشتر وجود دارد.</li>
          <li><b>انگلستان:</b> فرصت خرید یا مشارکت در بیزنس‌های فعال در چارچوب قوانین سرمایه‌گذاری.</li>
          <li><b>امارات:</b> خرید بیزنس در Free Zone و Mainland باعث صدور اقامت کاری یا ویزای طلایی برای سرمایه‌گذاران می‌شود.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ خرید بیزنس راه مطمئن برای تضمین آینده اقتصادی و دریافت اقامت بین‌المللی برای کل خانواده است.
        </p>
      </section>
    </div>
  ),
  "کارآفرینی استانی": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">برنامه‌های کارآفرینی استانی کانادا (PNP Entrepreneur)</h3>
        <p className="leading-7">
          علاوه بر مسیرهای فنی و تخصصی، کانادا برنامه‌های کارآفرینی متنوعی در سطح استانی اجرا می‌کند.  
          متقاضیان می‌توانند با سرمایه‌گذاری و راه‌اندازی کسب‌وکار در هر استان واجد شرایط, وارد کانادا شده 
          و در ادامه اقامت دائم دریافت کنند.
        </p>
      </section>

      {/* چند استان نمونه */}
      <section>
        <h4 className="font-semibold">نمونه شرایط استان‌ها:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li><b>بریتیش کلمبیا:</b> دارایی خالص 600,000 دلار – سرمایه‌گذاری 200,000 دلار (Base) یا 100,000 دلار (Regional Pilot).</li>
          <li><b>انتاریو:</b> دارایی خالص 800,000 دلار (GTA) یا 400,000 دلار (خارج GTA) – سرمایه‌گذاری 600,000 یا 200,000 دلار.</li>
          <li><b>ساسکاچوان:</b> دارایی خالص 500,000 دلار – سرمایه‌گذاری 200,000 تا 300,000 دلار.</li>
          <li><b>آلبرتا:</b> مسیرهای Graduate Entrepreneur، Foreign Graduate Entrepreneur، Farm Stream و Rural Entrepreneur Stream.</li>
          <li><b>مانیتوبا:</b> مسیر Entrepreneur (250,000 دلار سرمایه در وینیپگ یا 150,000 دلار خارج شهر) و Farm Investor Pathway.</li>
          <li><b>نوا اسکوشیا:</b> مسیر Entrepreneur با دارایی 600,000 CAD و سرمایه‌گذاری 150,000 CAD. مسیر ویژه فارغ‌التحصیلان استانی هم دارد.</li>
          <li><b>نیوبرانزویک:</b> دارایی خالص 600,000 CAD (300,000 نقدی) و سرمایه‌گذاری 250,000 CAD.</li>
          <li><b>PEI:</b> مسیر Work Permit – شروع کارآفرینی با ویزای کار موقت و دریافت نامزدی استانی پس از اثبات موفقیت.</li>
          <li><b>NLPNP، یوکان و NTNP:</b> شرایط مشابه؛ نیازمند دارایی خالص 500,000 تا 600,000 CAD و سرمایه‌گذاری 200,000 تا 300,000 CAD.</li>
        </ul>
      </section>

      {/* مزایا */}
      <section>
        <h4 className="font-semibold">مزایا:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>فرصت دسترسی به اقامت دائم از طریق سرمایه‌گذاری در استان‌ها.</li>
          <li>تنوع مسیرها بر اساس نیاز استان‌ها و توانایی‌های متقاضی.</li>
          <li>اجازه آوردن خانواده همراه و تحصیل رایگان برای فرزندان.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ برنامه‌های استانی کارآفرینی شانس فوق‌العاده‌ای برای سرمایه‌گذارانی است که می‌خواهند همزمان مهاجرت و کسب‌وکار داشته باشند.
        </p>
      </section>
    </div>
  ),
  "بشر دوستانه": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">برنامه بشر دوستانه کانادا (Humanitarian & Compassionate – H&C)</h3>
        <p className="leading-7">
          کانادا یکی از کشورهایی است که مسیر خاصی برای دریافت اقامت دائم بر اساس دلایل انسان‌دوستانه و دلسوزانه (Humanitarian & Compassionate Grounds) دارد.  
          این مسیر مخصوص افرادی است که امکان اقدام از طرق معمول (Express Entry، PNP، ویزای کاری یا تحصیلی) را ندارند، اما شرایط خاصی دارند.
        </p>
      </section>

      {/* افراد واجد شرایط */}
      <section>
        <h4 className="font-semibold">چه کسانی واجد شرایط هستند؟</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>افرادی که مدت طولانی در کانادا زندگی کرده‌اند و وابستگی اجتماعی ایجاد کرده‌اند.</li>
          <li>والدینی که فرزندانشان در کانادا متولد شده یا اقامت دارند و بازگشت به کشور مبدا برایشان مضر است.</li>
          <li>کسانی که بازگشت برایشان تهدیدی جدی (جانی، سلامتی، اجتماعی یا امنیتی) دارد.</li>
          <li>افرادی که اثبات کنند بودنشان در کانادا سازگار با منافع کودک است (Best Interests of the Child).</li>
        </ul>
      </section>

      {/* مزایا */}
      <section>
        <h4 className="font-semibold">مزایا:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>مسیر استثنایی برای دریافت اقامت دائم (PR).</li>
          <li>امکان باقی‌ماندن در کانادا حتی در صورت بسته بودن سایر مسیرها.</li>
          <li>توجه ویژه به شرایط انسانی و فردی.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">✅ آخرین امید افرادی که شرایط خاص انسانی دارند.</p>
      </section>
    </div>
  ),
  "پناهندگی": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">پناهندگی در کانادا (Refugee & Asylum)</h3>
        <p className="leading-7">
          کانادا به‌عنوان یکی از حامیان حقوق بشر جهان، برنامه‌های مختلفی برای حمایت از پناهجویان دارد.  
          افرادی که به‌دلایلی مثل نژاد، مذهب، ملیت، عقاید سیاسی یا عضویت در گروه‌های اجتماعی خاص در کشور خود مورد تهدید یا آزار هستند، 
          می‌توانند پرونده پناهندگی در کانادا باز کنند.
        </p>
      </section>

      {/* انواع مسیرها */}
      <section>
        <h4 className="font-semibold">انواع مسیر پناهندگی:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li><b>پناهندگی از داخل کانادا (Inland Claim):</b> ارائه درخواست به IRCC یا CBSA پس از ورود به کانادا.</li>
          <li><b>اسکان مجدد پناهندگان (Resettlement):</b> معرفی توسط UNHCR یا گروه‌های حمایتی و انتقال به کانادا.</li>
        </ul>
      </section>

      {/* مراحل رسیدگی */}
      <section>
        <h4 className="font-semibold">مراحل رسیدگی به پرونده:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>ثبت درخواست رسمی پناهندگی.</li>
          <li>تکمیل فرم BOC (Basis of Claim).</li>
          <li>برگزاری جلسه استماع در هیئت مهاجرت و پناهندگی (IRB – RPD).</li>
          <li>صدور تصمیم: پذیرش و اعطای اقامت دائم، یا رد با امکان اعتراض.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ پناهندگی مسیری حساس و پیچیده است و نقش وکیل رسمی (RCIC یا وکیل فدرال) بسیار حیاتی است.
        </p>
      </section>
    </div>
  ),
  "دادگاه‌های پناهندگی": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">دادگاه‌های پناهندگی (Refugee Protection Division – RPD)</h3>
        <p className="leading-7">
          تمام درخواست‌های پناهندگی ابتدا در بخش حمایت از پناهندگان (RPD) از هیئت مهاجرت و پناهندگی کانادا (IRB) بررسی می‌شوند.  
          این مرجع تصمیم می‌گیرد آیا متقاضی واجد شرایط حمایت پناهندگی در کانادا است یا خیر.
        </p>
      </section>

      {/* فرآیند رسیدگی */}
      <section>
        <h4 className="font-semibold">مراحل رسیدگی در RPD:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>تکمیل و ارسال فرم Basis of Claim (BOC) توسط متقاضی.</li>
          <li>برگزاری جلسه استماع (Hearing) در مقابل عضو هیئت مهاجرت.</li>
          <li>ارائه شهادت، مستندات و دفاعیات توسط متقاضی یا وکیل او.</li>
          <li>صدور رأی: پذیرش یا رد درخواست.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ در صورت پذیرش، متقاضی می‌تواند اقامت دائم دریافت کند؛ در صورت رد، فرصت اعتراض در RAD وجود دارد.
        </p>
      </section>
    </div>
  ),
  "دادگاه‌های تجدید نظر پناهندگی": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">دادگاه تجدیدنظر پناهندگی (Refugee Appeal Division – RAD)</h3>
        <p className="leading-7">
          وقتی درخواست پناهندگی در RPD رد شود، متقاضی می‌تواند به RAD اعتراض کند.  
          این بخش از IRB برای بررسی دوباره تصمیمات و دادن فرصت مجدد به متقاضیان طراحی شده است.
        </p>
      </section>

      {/* وظایف و نقش RAD */}
      <section>
        <h4 className="font-semibold">وظایف و روند RAD:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>بازبینی کامل دلایل رد پرونده в RPD.</li>
          <li>بررسی مدارک و شواهد جدیدی که ممکن است قبلاً ارائه نشده باشد.</li>
          <li>صدور یکی از تصمیم‌ها: تأیید رد، لغو و پذیرش پناهندگی، یا بازگرداندن پرونده به RPD.</li>
        </ul>
      </section>

      {/* شرایط تجدیدنظر */}
      <section>
        <h4 className="font-semibold">شرایط اعتراض در RAD:</h4>
        <ul className="list-disc pr-6 space-y-1 text-sm">
          <li>اعلام قصد تجدیدنظر ظرف ۱۵ روز از تاریخ رد پرونده.</li>
          <li>ارائه مدارک و استدلال‌های کتبی ظرف ۳۰ روز.</li>
          <li>تصمیم RAD معمولاً بر اساس پرونده کتبی است (جلسه حضوری فقط در موارد خاص).</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ RAD آخرین امید بسیاری از متقاضیانی است که درخواست پناهندگی‌شان رد شده؛ همراهی وکیل حرفه‌ای شانس موفقیت را بالا می‌برد.
        </p>
      </section>
    </div>
  ),
  "دادگاه بازداشتی": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">دادگاه بازداشتی (Detention Review – ID)</h3>
        <p className="leading-7">
          اگر فردی توسط آژانس خدمات مرزی کانادا (CBSA) به دلایل مهاجرتی بازداشت شود، 
          پرونده او در بخش Immigration Division (ID) از هیئت مهاجرت و پناهندگی (IRB) بررسی می‌شود.  
          این دادگاه تعیین می‌کند ادامه بازداشت قانونی است یا امکان آزادی تحت شرایط خاص وجود دارد.
        </p>
      </section>

      {/* دلایل بازداشت */}
      <section>
        <h4 className="font-semibold">دلایل بازداشت مهاجرتی:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>هویت فرد برای مقامات مهاجرتی تأیید نشده باشد.</li>
          <li>احتمال فرار یا عدم حضور در جلسات رسیدگی.</li>
          <li>تشخیص تهدیدی برای امنیت عمومی یا نظم اجتماعی.</li>
          <li>نقض شرایط ویزا یا اقامت دائم.</li>
        </ul>
      </section>

      {/* روند رسیدگی */}
      <section>
        <h4 className="font-semibold">روند رسیدگی:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>اولین جلسه ظرف ۴۸ ساعت از بازداشت.</li>
          <li>اگر بازداشت ادامه داشته باشد, جلسه بعدی ظرف ۷ روز و سپس هر ۳۰ روز یک بار.</li>
          <li>امکان آزادی تحت شرایط ضمانت یا وثیقه.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ این دادگاه تضمین می‌کند حقوق افراد بازداشت‌شده رعایت شود و تصمیم‌گیری منصفانه انجام گیرد.
        </p>
      </section>
    </div>
  ),
  "دادگاه تعهدات مقیمان دائم": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">دادگاه‌های تجدیدنظر مهاجرتی (Immigration Appeal Division – IAD)</h3>
        <p className="leading-7">
          دادگاه IAD یکی از شاخه‌های هیئت مهاجرت و پناهندگی کانادا (IRB) است.  
          این بخش به اعتراضات مهاجرتی رسیدگی می‌کند، از جمله پرونده‌های مربوط به تعهدات اقامتی مقیمان دائم (Residency Obligation) و اعتراضات اسپانسرشیپ.
        </p>
      </section>

      {/* Residency Obligation */}
      <section>
        <h4 className="font-semibold">تعهد اقامتی برای مقیمان دائم:</h4>
        <p className="leading-7">
          مقیمان دائم باید در هر ۵ سال حداقل ۷۳۰ روز (۲ سال) در کانادا حضور فیزیکی داشته باشند.  
          در صورت نقض این شرط، IRCC یا CBSA می‌توانند اقامت دائم را لغو کنند.
        </p>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>رد تمدید کارت PR به دلیل کمبود روزهای حضور.</li>
          <li>تصمیم CBSA в مرز مبنی بر لغو اقامت.</li>
        </ul>
      </section>

      {/* اعتراضات اسپانسرشیپ */}
      <section>
        <h4 className="font-semibold">اعتراضات اسپانسری:</h4>
        <p className="leading-7">
          اگر درخواست اسپانسرشیپ همسر، فرزندان یا والدین رد شود، امکان اعتراض در IAD وجود دارد.  
          شواهد جدید و دلایل انسانی می‌توانند رأی قبلی را تغییر دهند.
        </p>
      </section>

      {/* عوامل بررسی */}
      <section>
        <h4 className="font-semibold">عواملی که IAD بررسی می‌کند:</h4>
        <ul className="list-disc pr-6 text-sm space-y-1">
          <li>شرایط انسانی و دلسوزانه (H&C).</li>
          <li>پیوندهای خانوادگی و اجتماعی متقاضی در کانادا.</li>
          <li>شرایط خارج از کنترل (بیماری، جنگ، مراقبت از والدین مسن).</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ IAD آخرین فرصت برای حفظ اقامت دائم یا موفقیت در اعتراضات اسپانسری است و نقش وکیل متخصص اینجا بسیار کلیدی است.
        </p>
      </section>
    </div>
  )
};

// کامپوننت داخلی برای استفاده از useSearchParams
function ImmigrationPageContent() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menuTitle: string) => {
    setOpenMenus((prev) =>
      prev.includes(menuTitle)
        ? prev.filter((item) => item !== menuTitle)
        : [...prev, menuTitle]
    );
  };

  const renderMenuItems = (items: (string | MenuItem)[], level = 0) => {
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
              {isOpen ? (
                <HiChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <HiChevronDown className="w-4 h-4 text-gray-500" />
              )}
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
      {/* هدر صفحه */}
      <div className="relative w-full h-[280px] rounded-b-3xl flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Immigration Header"
          fill
          className="object-cover rounded-b-3xl"
          quality={100}
          priority
          sizes="100vw"
        />
        <h1 className="relative z-10">امور مهاجرتی</h1>
      </div>

      {/* بدنه */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* سایدبار */}
          <aside className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">زیرمنوها</h2>
            <div className="space-y-2">
              {renderMenuItems(menus["امور مهاجرتی"])}
            </div>
          </aside>

          {/* محتوای اصلی */}
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
                  <div>محتوایی برای این بخش وجود ندارد.</div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">امور مهاجرتی</h2>
                <p>لطفاً یکی از بخش‌ها را از منوی کناری انتخاب کنید.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// کامپوننت اصلی با Suspense
export default function ImmigrationPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">در حال بارگذاری...</div>}>
      <ImmigrationPageContent />
    </Suspense>
  );
}