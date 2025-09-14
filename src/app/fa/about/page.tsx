"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* 🔹 Hero Section */}
      <section className="relative h-[340px] bg-gradient-to-br from-[#072C7D] to-[#548CE1] 
                          text-white text-center rounded-b-[40px] overflow-hidden 
                          flex flex-col justify-center items-center px-6">
        <Image
          src="/images/bg/noise.png"
          alt="Background noise"
          fill
          className="object-cover mix-blend-soft-light opacity-20"
        />
        <h1 className="relative z-10 text-[36px] font-extrabold mb-3">درباره ما</h1>
        <p className="relative z-10 max-w-2xl mx-auto text-[16px] leading-8 opacity-95">
          Déjà Vu یک مؤسسه مشاوره بین‌المللی در حوزه مهاجرت، خدمات حقوقی و توسعه کسب‌وکار است. 
          ما با تیمی از وکلای رسمی و مشاوران حرفه‌ای مسیر موفقیت شما را شفاف و ایمن می‌سازیم.
        </p>
      </section>

      {/* 🔹 ما که هستیم - Glassmorphism Oval */}
      <section className="container mx-auto relative -mt-12 px-6">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-md 
                        rounded-full px-8 py-4 text-center max-w-3xl mx-auto">
          <h2 className="text-lg font-bold mb-2 text-gray-900">ما که هستیم</h2>
          <p className="leading-7 text-gray-800 text-[15px] font-medium">
            Déjà Vu یک مؤسسه مشاوره بین‌المللی معتبر است که در زمینه‌های حقوق مهاجرت، 
            توسعه کسب‌وکار و خدمات مشاوره حقوقی تخصص دارد. تیم ما شامل وکلای مهاجرت 
            دارای مجوز، مشاوران و کارشناسان توسعه کسب‌وکار است که به مشتریان کمک می‌کنند 
            با اطمینان مسیرهای پیچیده حقوقی و تجاری را طی کنند.
          </p>
        </div>
      </section>

      {/* 🔹 Vision / Mission / Values */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl shadow bg-gray-50">
            <h3 className="text-xl font-bold mb-4 text-gray-900">چشم‌انداز</h3>
            <p className="text-gray-700 text-[16px] leading-8 font-medium">
              پیشتاز جهانی در مشاوره مهاجرت و کسب‌وکار بودن؛ توانمندسازی افراد و شرکت‌ها برای رشد و موفقیت فرامرزی.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow bg-gray-50">
            <h3 className="text-xl font-bold mb-4 text-gray-900">ماموریت</h3>
            <ul className="list-disc pr-5 text-gray-700 text-[16px] leading-8 space-y-2 font-medium text-right">
              <li>ارائه استراتژی‌های تخصصی مهاجرت</li>
              <li>خدمات حقوقی و تجاری جامع</li>
              <li>خلق تجربه‌ای متمایز و مشتری‌محور</li>
              <li>ایجاد فرصت برای نوآوری و سرمایه‌گذاری</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl shadow bg-gray-50">
            <h3 className="text-xl font-bold mb-4 text-gray-900">ارزش‌ها</h3>
            <ol className="list-decimal pr-5 text-gray-700 text-[16px] leading-8 space-y-2 font-medium text-right">
              <li>صداقت</li>
              <li>تخصص</li>
              <li>نوآوری</li>
              <li>مشتری‌محوری</li>
              <li>نگاه جهانی</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 🔹 تیم مدیریت با Divider قوسی */}
      <section className="relative w-full bg-gradient-to-br from-[#072C7D] to-[#548CE1] py-20 mt-10">
        <svg
          className="absolute -top-[1px] left-0 w-full h-20 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,96 C480,0 960,192 1440,96 L1440,0 L0,0 Z"></path>
        </svg>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center text-white mb-12 drop-shadow">با تیم ما آشنا شوید</h2>

          <div className="container mx-auto flex flex-col gap-12 px-6">
            {/* کارت سالار */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image
                src="/images/1.JPG"
                alt="سالار اسکندری"
                width={280}
                height={280}
                className="object-cover rounded-2xl w-[280px] h-[280px] shadow-lg"
              />
              <div className="flex-1 p-8 text-right text-gray-100 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-2">سالار اسکندری – RCIC-IRB</h3>
                <p className="text-md opacity-90 mb-4">بنیان‌گذار و وکیل رسمی مهاجرت کانادا</p>
                <p className="leading-8 opacity-95 text-[16px]">
                  سالار اسکندری، وکیل رسمی مهاجرت کانادا و عضو{" "}
                  <span className="font-medium">CICC (RCIC-IRB)</span> است. همچنین عضو دائم{" "}
                  <span className="font-medium">CAPIC</span>. او با سابقه قوی در حقوق مهاجرت و توسعه 
                  کسب‌وکار، راهکارهای استراتژیک و مطمئن برای مهاجران و کارآفرینان ارائه می‌دهد.
                </p>
              </div>
            </div>

            {/* کارت حسن */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-6">
              <Image
                src="/images/2.JPG"
                alt="حسن زارع"
                width={300}
                height={400}
                className="object-cover rounded-2xl w-[300px] h-[450px] shadow-lg"
              />
              <div className="flex-1 p-8 text-right text-gray-100 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold mb-2">حسن زارع</h3>
                <p className="text-md opacity-90 mb-4">مدیر عملیات و مشاور کسب‌وکار</p>
                <p className="leading-8 opacity-95 text-[16px]">
                  به عنوان مدیر عملیات، حسن زارع مسئول مدیریت روزانه در Déjà Vu Visa است. 
                  با تخصص در مشاوره و استراتژی عملیاتی، هم ساختار داخلی مجموعه را ارتقا می‌دهد 
                  و هم به کارآفرینان برای توسعه بین‌المللی کسب‌وکارشان مشاوره کاربردی و نتیجه‌محور ارائه می‌کند.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}