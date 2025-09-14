import Image from "next/image";
import Link from "next/link";

// English Data
const countries: Record<
  string,
  { name: string; flag: string; desc: string; image: string }
> = {
  usa: {
    name: "USA",
    flag: "/images/flags/us.jpg",
    desc: "Here will be description about immigration to the United States...",
    image: "/images/usa.jpg",
  },
  canada: {
    name: "Canada",
    flag: "/images/flags/ca.png",
    desc: "Here will be description about moving and living in Canada...",
    image: "/images/canada.jpg",
  },
  dubai: {
    name: "Dubai",
    flag: "/images/flags/ae.jpg",
    desc: "Here will be description about Dubai, UAE opportunities...",
    image: "/images/dubai.jpg",
  },
  england: {
    name: "England",
    flag: "/images/flags/gb-eng.jpg",
    desc: "Here will be description about immigrating to England...",
    image: "/images/england.jpg",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CountryPageEn({ params }: PageProps) {
  // await کردن params
  const { slug } = await params;
  const country = countries[slug];

  if (!country) {
    return (
      <div className="p-10 text-center text-xl font-bold text-red-600">
        Country not found 😕
      </div>
    );
  }

  return (
    <div className="bg-neutral-100 min-h-screen" dir="ltr">
      
      {/* 🔹 Header with Gradient, Noise and Light Effects */}
      <div className="relative w-full h-[280px] rounded-b-3xl flex flex-col items-center justify-center text-white text-3xl font-bold overflow-hidden">
        
        {/* Main Gradient (top-left to bottom-right) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#123684] via-[#2B55A6] to-[#88A3D1]"></div>

        {/* Subtle noise overlay */}
        <div className="absolute inset-0 bg-[url('/images/bg/noise.png')] bg-cover opacity-20 mix-blend-overlay"></div>

        {/* Top-left light */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/15 rounded-full blur-[180px]"></div>

        {/* Bottom-right light */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/15 rounded-full blur-[180px]"></div>

        {/* Center text */}
        <h1 className="relative z-10">Immigration Destinations</h1>
      </div>

      {/* 🔹 Main Container */}
      <div className="flex flex-col lg:flex-row-reverse w-full lg:w-[1320px] mx-auto gap-6 mt-10 px-4">
        
        {/* 📖 Main Content */}
        <main className="order-1 flex-1 bg-white/90 backdrop-blur-sm rounded-lg shadow p-6">
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

        {/* 📋 Sidebar */}
        <aside className="order-2 flex flex-col w-full lg:w-[300px] bg-white/90 backdrop-blur-sm rounded-lg shadow p-4 gap-2">
          {Object.entries(countries).map(([key, item]) => (
            <Link
              key={key}
              href={`/en/countries/${key}`}
              className={`flex items-center gap-2 px-3 py-2 rounded transition text-sm lg:text-base 
                ${
                  key === slug
                    ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md"
                    : "hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-700/10 hover:text-blue-700"
                }`}
            >
              {/* Flag circle */}
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
      </div>
    </div>
  );
}