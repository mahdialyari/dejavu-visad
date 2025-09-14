"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiLogIn, FiChevronDown, FiMenu, FiUser } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

// ================== Types ==================
type MenuObject = {
  title: string;
  items: (string | MenuObject)[];
};
type MenuData = Record<string, (string | MenuObject)[]>;

// ================== Menu Data ==================
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
            "برنامه‌های استانی (PNP)",
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
      items: ["خدمات اخذ تابعیت", "خدمات مجوز سفر برای پناهندگان"],
    },
  ],

  "امور حقوقی": [
    "دادگاه‌های فدرال و رفع ریجکتی ",
    "خدمات وکالت حقوقی کسب و کارها ",
    "دعاوی حقوقی در استان بریتیش کلمبیا ",
  ],

  "ثبت شرکت و توسعه کسب و کار": [
    "اجازه کار از طریق ثبت شرکت و انتقال شعبه"
  ],

  "خدمات پس از ورود": [
    "اجاره منزل",
    "کاریابی و تقویت رزومه",
    "افتتاح حساب بانکی + دریافت کارت ملی",
    "خدمات رفت و آمد فرودگاهی",
    "راه اندازی کسب و کار (بیزینس پلن)",
  ],

  "مشاوره بیزنسی و حقوقی در دبی": [
    "خدمات ما در دبی"
  ],
};

// ================== Header Component ==================
export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // تابع برای تولید لینک هر زیرمجموعه - اصلاح شده برای استفاده مستقیم از serviceName
  const getLinkForItem = (serviceName: string, item: string) => {
    const serviceMap: Record<string, string> = {
      "امور مهاجرتی": "immigration",
      "امور حقوقی": "legal",
      "ثبت شرکت و توسعه کسب و کار": "business",
      "خدمات پس از ورود": "after-arrival",
      "مشاوره بیزنسی و حقوقی در دبی": "dubai",
    };
    const servicePath = serviceMap[serviceName] || "default"; // اگر serviceName نامعتبر باشه، به default می‌ره (می‌تونی تغییر بدی)
    return `/fa/services/${servicePath}?section=${encodeURIComponent(item)}`;
  };

  // کامپوننت برای رندر آیتم‌های لینک‌دار منو
  const RenderMenuItems = ({ items, serviceName, onLinkClick }: { items: (string | MenuObject)[], serviceName: string, onLinkClick?: () => void }) => {
    return (
      <ul className="space-y-2">
        {items.map((item, index) =>
          typeof item === "string" ? (
            <li key={index}>
              <Link
                href={getLinkForItem(serviceName, item)}
                className="block py-2 px-4 rounded hover:bg-gray-100 transition"
                onClick={() => {
                  if (onLinkClick) onLinkClick();
                }}
              >
                {item}
              </Link>
            </li>
          ) : (
            <li key={index} className="border-b pb-2 mb-2">
              <div className="font-semibold mb-1">{item.title}</div>
              <div className="pr-4">
                <RenderMenuItems items={item.items} serviceName={serviceName} onLinkClick={onLinkClick} />
              </div>
            </li>
          )
        )}
      </ul>
    );
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-full border backdrop-blur-md shadow-lg px-4 py-2 transition-all ${
            scrolled
              ? "border-gray-200 bg-white/80 text-[#11388b]"
              : "border-white/20 bg-white/10 text-white"
          }`}
        >
          {/* لوگو در هدر */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full shadow bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="لوگو"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* دسکتاپ */}
          <nav className="hidden lg:flex gap-6 relative items-center">
            <NavLink href="/fa" scrolled={scrolled}>خانه</NavLink>

            {/* خدمات ما */}
            <div className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setActiveMenu(null); }}
                className={`flex items-center gap-1 px-3 py-2 rounded-full transition ${
                  scrolled ? "text-[#11388b] hover:bg-gray-100" : "text-white hover:bg-white/20"
                }`}
              >
                خدمات ما
                <FiChevronDown className={`${servicesOpen ? "rotate-180" : ""} transition-transform`} />
              </button>

              {/* Mega Menu */}
              {servicesOpen && (
                <div className="absolute right-0 top-full mt-2 w-[800px] h-[400px] bg-white text-gray-800 shadow-2xl rounded-lg flex overflow-hidden z-50">
                  {/* ستون راست */}
                  <div className="w-1/3 border-l p-4 bg-gray-50">
                    {Object.keys(menus).map((menu) => (
                      <button
                        key={menu}
                        onClick={() => menus[menu].length > 0 
                          ? setActiveMenu(activeMenu === menu ? null : menu) 
                          : null}
                        className={`w-full text-right py-2 px-3 rounded mb-2 font-semibold ${
                          activeMenu === menu
                            ? "bg-gradient-to-r from-[#092a7e] to-[#11388b] text-white"
                            : "hover:bg-gradient-to-r hover:from-[#11388b]/10 hover:to-[#092a7e]/10 text-black"
                        }`}
                      >
                        {menu}
                      </button>
                    ))}
                  </div>

                  {/* ستون چپ */}
                  <div className="w-2/3 p-6">
                    {activeMenu && menus[activeMenu].length > 0 && (
                      <div className="bg-white rounded-lg shadow-inner p-4 h-full overflow-y-auto">
                        <h3 className="font-bold mb-3 border-b pb-2">{activeMenu}</h3>
                        <RenderMenuItems items={menus[activeMenu]} serviceName={activeMenu} onLinkClick={() => setServicesOpen(false)} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* سایر لینک‌ها */}
            <NavLink href="/fa/blog" scrolled={scrolled}>پایگاه دانش</NavLink>
            <NavLink href="/fa/FAQ" scrolled={scrolled}>سوالات متداول</NavLink>
            <NavLink href="/fa/about" scrolled={scrolled}>درباره ما</NavLink>
            <NavLink href="/fa/ai" scrolled={scrolled} icon={<FaRobot size={16}/>}>
              هوش مصنوعی
            </NavLink>
            
            {/* ورود / ثبت نام */}
            <Link
              href="/fa/auth"
              className={`ml-4 flex items-center gap-2 rounded-full px-4 py-2 border transition ${
                scrolled
                  ? "bg-[#11388b] border-gray-300 text-white hover:bg-[#092a7e]"
                  : "bg-[#11388b] border-white/30 text-white hover:bg-[#092a7e]"
              }`}
            >
              <FiLogIn size={18} /> ورود / ثبت‌نام
            </Link>
          </nav>

          {/* موبایل */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* آیکون کاربر (سمت چپ) */}
            <Link
              href="/fa/auth"
              className={`p-2 rounded-full border ${
                scrolled ? "text-[#11388b] border-gray-300" : "text-white border-white/20"
              }`}
            >
              <FiUser size={20} /> {/* آیکون کاربر با اندازه 20px */}
            </Link>
            
            {/* منوی همبرگر (سمت چپ کنار آیکون کاربر) */}
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-full border ${
                scrolled ? "text-[#11388b] border-gray-300" : "text-white border-white/20"
              }`}
            >
              <FiMenu size={16} /> {/* آیکون منو با اندازه 16px */}
            </button>
          </div>
        </div>

        {/* موبایل Drawer */}
        {open && (
          <>
            <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 z-40" />
            
            <div className="fixed right-0 top-0 h-fit max-h-[80vh] w-4/5 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 overflow-y-auto">
              <div className="p-4">
                <ul className="space-y-3 text-gray-800 font-medium">
                  <li><Link href="/fa" onClick={() => setOpen(false)} className="block py-2">خانه</Link></li>
                  <li>
                    <button
                      onClick={() => setActiveMenu(activeMenu === "خدمات ما" ? null : "خدمات ما")}
                      className="flex w-full justify-between items-center py-2 px-2 rounded hover:bg-gray-100"
                    >
                      خدمات ما
                      <FiChevronDown className={`${activeMenu === "خدمات ما" ? "rotate-180 text-[#11388b]" : ""} transition-transform`} />
                    </button>
                    {activeMenu === "خدمات ما" && (
                      <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-700">
                        {Object.keys(menus).map((menu) => (
                          <li key={menu}>
                            {menus[menu].length > 0 ? (
                              <details className="group">
                                <summary className="flex justify-between items-center py-1 cursor-pointer list-none">
                                  {menu}
                                  <FiChevronDown className="group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="pl-4 border-l mt-1">
                                  <RenderMenuItems items={menus[menu]} serviceName={menu} onLinkClick={() => setOpen(false)} />
                                </div>
                              </details>
                            ) : (
                              <span className="py-1 block text-gray-500">{menu}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li><Link href="/fa/blog" onClick={() => setOpen(false)} className="block py-2">پایگاه دانش</Link></li>
                  <li><Link href="/fa/FAQ" onClick={() => setOpen(false)} className="block py-2">سوالات متداول</Link></li>
                  <li><Link href="/fa/about" onClick={() => setOpen(false)} className="block py-2">درباره ما</Link></li>
                  <li>
                    <Link href="/fa/ai" onClick={() => setOpen(false)} className="block py-2 flex gap-2 items-center">
                      <FaRobot /> هوش مصنوعی
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

// ================== Helper NavLink ==================
const NavLink = ({href, scrolled, children, icon}:{href:string, scrolled:boolean, children:React.ReactNode, icon?:React.ReactNode}) => (
  <Link
    href={href}
    className={`px-3 py-2 rounded-full transition flex items-center gap-1 ${
      scrolled ? "text-[#11388b] hover:bg-gray-100" : "text-white hover:bg-white/20"
    }`}
  >
    {icon} {children}
  </Link>
);