import Image from "next/image";
import Link from "next/link";

// دیتای فارسی
const countries: Record<
  string,
  { name: string; flag: string; desc: string; image: string }
> = {
  usa: {
    name: "آمریکا",
    flag: "/images/flags/us.jpg",
    desc: "اینجا توضیحات مربوط به کشور آمریکا نوشته میشه...",
    image: "/images/usa.jpg",
  },
  canada: {
    name: "کانادا",
    flag: "/images/flags/ca.png",
    desc: "اینجا توضیحات مربوط به کانادا نوشته میشه...",
    image: "/images/canada.jpg",
  },
  dubai: {
    name: "دبی",
    flag: "/images/flags/ae.jpg",
    desc: "اینجا توضیحات مربوط به دبی نوشته میشه...",
    image: "/images/dubai.jpg",
  },
  england: {
    name: "انگلستان",
    flag: "/images/flags/gb-eng.jpg",
    desc: "اینجا توضیحات مربوط به انگلستان نوشته میشه...",
    image: "/images/england.jpg",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CountryPageFa({ params }: PageProps) {
  // await کردن params
  const { slug } = await params;
  const country = countries[slug];

  if (!country) {
    return (
      <div className="p-10 text-center text-xl font-bold text-red-600">
        کشور پیدا نشد 😕
      </div>
    );
  }

  return (
    <div className="bg-neutral-100 min-h-screen" dir="rtl">
      
      {/* 🔹 هدر با گرادینت ، نویز و نور گوشه‌ها */}
      <div className="relative w-full h-[280px] rounded-b-3xl flex flex-col items-center justify-center text-white text-3xl font-bold overflow-hidden">
        
        {/* گرادینت اصلی (از بالا-چپ به پایین-راست) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#123684] via-[#2B55A6] to-[#88A3D1]"></div>

        {/* نویز subtle روی گرادینت */}
        <div className="absolute inset-0 bg-[url('/images/bg/noise.png')] bg-cover opacity-20 mix-blend-overlay"></div>

        {/* نور گوشه بالا-چپ */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/15 rounded-full blur-[180px]"></div>

        {/* نور گوشه پایین-راست */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/15 rounded-full blur-[180px]"></div>

        {/* متن وسط */}
        <h1 className="relative z-10">کشورهای مهاجرتی</h1>
      </div>

      {/* 🔹 کانتینر اصلی */}
      <div className="flex flex-col lg:flex-row w-full lg:w-[1320px] mx-auto gap-6 mt-10 px-4">
        
        {/* 📋 سایدبار */}
        <aside className="order-1 flex flex-col w-full lg:w-[300px] bg-white/90 backdrop-blur-sm rounded-lg shadow p-4 gap-2">
          {Object.entries(countries).map(([key, item]) => (
            <Link
              key={key}
              href={`/fa/countries/${key}`}
              className={`flex items-center gap-2 px-3 py-2 rounded transition text-sm lg:text-base 
                ${
                  key === slug
                    ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md"
                    : "hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-700/10 hover:text-blue-700"
                }`}
            >
              {/* دایره پرچم */}
              <span className="w-6 h-6 rounded-full overflow-hidden inline-block">
                <Image
                  src={item.flag}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </span>
              {item.name}
            </Link>
          ))}
        </aside>

        {/* 📖 محتوای توضیحات */}
        <main className="order-2 flex-1 bg-white/90 backdrop-blur-sm rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={country.flag}
                alt={country.name}
                width={32}
                height={32}
                className="object-cover"
              />
            </span>
            {country.name}
          </h2>
          <p className="mb-6 leading-relaxed text-gray-700">{country.desc}</p>
          <div className="w-full flex justify-center my-6">
            <Image
              src={country.image}
              alt={country.name}
              width={500}
              height={280}
              className="rounded-2xl shadow-lg object-cover max-w-full h-auto"
            />
          </div>
        </main>
      </div>
    </div>
  );
}