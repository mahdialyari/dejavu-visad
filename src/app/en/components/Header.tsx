"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiLogIn, FiChevronDown, FiMenu, FiUser } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

type MenuObject = {
  title: string;
  items: (string | MenuObject)[];
};
type MenuData = Record<string, (string | MenuObject)[]>;

const menus: MenuData = {
  "Immigration Services": [
    {
      title: "Temporary Visas",
      items: [
        "Tourist Visa (Visitor)",
        "Study Permit (Admission & Visa)",
        {
          title: "Work Permits",
          items: [
            "Closed Work Permit (Job Offer)",
            "Open Work Permit",
            "Spousal Open Work Permit",
            "Company Registration & Branch Transfer Work Permit"
          ],
        },
      ],
    },
    {
      title: "Permanent Residence",
      items: [
        "Spousal & Children Under 22 Sponsorship",
        "Parent Sponsorship",
        {
          title: "Express Entry",
          items: [
            "Federal Skilled Worker",
            "Canadian Experience Class (CEC)",
            "Provincial Nominee Programs (PNP)",
            "Federal Skilled Trades Program",
            {
              title: "Category-Based Programs",
              items: ["Healthcare", "STEM", "French Speakers", "Education"],
            },
          ],
        },
        "Business Purchase",
        "Provincial Entrepreneurship",
      ],
    },
    {
      title: "Humanitarian & Refugee",
      items: [
        "Humanitarian & Compassionate",
        "Refugee Claims",
        {
          title: "Immigration Court",
          items: [
            "Refugee Protection Division",
            "Refugee Appeal Division",
            "Detention Reviews",
            "Permanent Resident Compliance",
          ],
        },
      ],
    },
    {
      title: "Citizenship Services",
      items: ["Citizenship Application", "Travel Document for Refugees"],
    },
  ],

  "Legal Services": [
    "Federal Court & Judicial Review",
    "Business Legal Services",
    "Civil Litigation in British Columbia",
  ],

  "Company Registration & Business Development": [
    "Work Permit through Company Registration & Branch Transfer"
  ],

  "Post-Arrival Services": [
    "Housing Rental",
    "Job Search & Resume Enhancement",
    "Bank Account Opening + SIN Application",
    "Airport Pickup Services",
    "Business Setup (Business Plan)",
  ],

  "Business & Legal Consulting in Dubai": [
    "Our Services in Dubai"
  ],
};

// نقشه service slugs برای صفحات اصلی
const serviceSlugMap: Record<string, string> = {
  "Immigration Services": "immigration",
  "Legal Services": "legal",
  "Company Registration & Business Development": "business",
  "Post-Arrival Services": "after-arrival",
  "Business & Legal Consulting in Dubai": "dubai",
};

// نقشه anchorها برای زیرمجموعه‌ها (با حذف فاصله و کاراکترهای خاص)
const getAnchorForItem = (item: string): string => {
  return item
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      const hamburgerButton = document.querySelector('.hamburger-button');
      
      if (open && mobileMenu && !mobileMenu.contains(event.target as Node) && 
          hamburgerButton && !hamburgerButton.contains(event.target as Node)) {
        setOpen(false);
        setOpenSubMenus({});
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const toggleSubMenu = (menuKey: string) => {
    setOpenSubMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

  // تابع تولید لینک برای آیتم‌های منو
  const getLinkForItem = (item: string, parentMenu?: string | null): string => {
    if (!parentMenu) return "#";
    
    const serviceSlug = serviceSlugMap[parentMenu];
    if (!serviceSlug) return "#";
    
    const anchor = getAnchorForItem(item);
    return `/en/services/${serviceSlug}#${anchor}`;
  };

  // کامپوننت RenderMenuItems برای نمایش آیتم‌های منو
  const RenderMenuItems = ({ 
    items, 
    mobile = false, 
    parentMenu = activeMenu 
  }: { 
    items: (string | MenuObject)[], 
    mobile?: boolean,
    parentMenu?: string | null
  }) => {
    return (
      <ul className={`${mobile ? "pl-2 text-sm space-y-1" : "space-y-2 text-sm leading-relaxed"}`}>
        {items.map((item, index) =>
          typeof item === "string" ? (
            <li key={index}>
              <Link
                href={getLinkForItem(item, parentMenu)}
                className={`${mobile ? "py-1" : "p-2 rounded hover:bg-gray-50/70"} block`}
                onClick={() => {
                  setServicesOpen(false);
                  setOpen(false);
                }}
              >
                {item}
              </Link>
            </li>
          ) : (
            <li key={index}>
              <span className="font-semibold block mt-2">{item.title}</span>
              <div className={`${mobile ? "pl-2" : "pr-4"}`}>
                <RenderMenuItems 
                  items={item.items} 
                  mobile={mobile} 
                  parentMenu={parentMenu} // استفاده از parentMenu یکسان برای سطوح عمیق
                />
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
          {/* Logo - Left side */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full shadow bg-white flex items-center justify-center overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 relative items-center">
            <NavLink href="/en" scrolled={scrolled}>Home</NavLink>

            {/* Services */}
            <div className="relative">
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setActiveMenu(null);
                }}
                className={`flex items-center gap-1 px-3 py-2 rounded-full transition ${
                  scrolled ? "text-[#11388b] hover:bg-gray-100" : "text-white hover:bg-white/20"
                }`}
              >
                Our Services
                <FiChevronDown className={`${servicesOpen ? "rotate-180" : ""} transition-transform`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full mt-2 w-[800px] h-[400px] 
                             bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl 
                             text-gray-800 flex overflow-hidden z-50
                             rtl:right-0 rtl:left-auto ltr:left-0 ltr:right-auto"
                >
                  {/* Left Column */}
                  <div className="w-1/3 border-l p-4 bg-gray-50/80 backdrop-blur-sm">
                    {Object.keys(menus).map((menu) => (
                      <button
                        key={menu}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (menus[menu].length > 0) {
                            setActiveMenu(activeMenu === menu ? null : menu);
                          }
                        }}
                        className={`w-full text-left py-2 px-3 rounded-lg border transition mb-2 font-semibold ${
                          activeMenu === menu
                            ? "bg-gradient-to-r from-[#092a7e] to-[#11388b] text-white border-[#092a7e] shadow-md"
                            : "hover:bg-gradient-to-r hover:from-[#11388b]/5 hover:to-[#092a7e]/5 text-gray-800 border-transparent hover:border-[#11388b]/30"
                        }`}
                      >
                        {menu}
                      </button>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="w-2/3 p-6">
                    {activeMenu && menus[activeMenu].length > 0 && (
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-inner p-4 h-full overflow-y-auto">
                        <h3 className="font-bold mb-3 border-b pb-2">{activeMenu}</h3>
                        <RenderMenuItems items={menus[activeMenu]} parentMenu={activeMenu} />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            <NavLink href="/en/blog" scrolled={scrolled}>Knowledge Base</NavLink>
            <NavLink href="/en/FAQ" scrolled={scrolled}>FAQ</NavLink>
            <NavLink href="/en/about" scrolled={scrolled}>About Us</NavLink>
            <NavLink href="/en/ai" scrolled={scrolled} icon={<FaRobot size={16}/>}>
              AI Assistant
            </NavLink>

            {/* Login/Register */}
            <Link
              href="/en/auth"
              className={`ml-4 flex items-center gap-2 rounded-full px-4 py-2 border transition ${
                scrolled
                  ? "bg-[#11388b] border-gray-300 text-white hover:bg-[#092a7e]"
                  : "bg-[#11388b] border-white/30 text-white hover:bg-[#092a7e]"
              }`}
            >
              <FiLogIn size={18} /> Login / sign up
            </Link>
          </nav>

          {/* Mobile - Icons on the right side */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* User icon */}
            <Link
              href="/en/auth"
              className={`p-2 rounded-full border transition ${
                scrolled ? "text-[#11388b] border-gray-300" : "text-white border-white/20"
              }`}
            >
              <FiUser size={20} />
            </Link>

            {/* Hamburger menu */}
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 rounded-full border hamburger-button ${
                scrolled ? "text-[#11388b] border-gray-300" : "text-white border-white/20"
              }`}
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mobile-menu absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-4 h-fit z-50">
            <nav className="flex flex-col space-y-3">
              <MobileNavLink href="/en" onClick={() => setOpen(false)}>Home</MobileNavLink>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubMenu("services");
                  }}
                  className="w-full text-left py-2 px-3 rounded-lg bg-gray-100 font-semibold flex items-center justify-between"
                >
                  Our Services
                  <FiChevronDown className={`${openSubMenus["services"] ? "rotate-180" : ""} transition-transform`} />
                </button>
                
                {openSubMenus["services"] && (
                  <div className="mt-2 pl-4 border-l-2 border-gray-200 max-h-96 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                    {Object.keys(menus).map((menu) => (
                      <div key={menu} className="mb-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSubMenu(menu);
                          }}
                          className="w-full text-left py-2 px-3 rounded-lg bg-gray-50 font-medium flex items-center justify-between"
                        >
                          {menu}
                          {menus[menu].length > 0 && (
                            <FiChevronDown className={`${openSubMenus[menu] ? "rotate-180" : ""} transition-transform`} />
                          )}
                        </button>
                        
                        {openSubMenus[menu] && menus[menu].length > 0 && (
                          <div className="mt-2 pl-4 border-l-2 border-gray-200 max-h-64 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                            <RenderMenuItems items={menus[menu]} mobile={true} parentMenu={menu} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <MobileNavLink href="/en/blog" onClick={() => setOpen(false)}>Knowledge Base</MobileNavLink>
              <MobileNavLink href="/en/FAQ" onClick={() => setOpen(false)}>FAQ</MobileNavLink>
              <MobileNavLink href="/en/about" onClick={() => setOpen(false)}>About Us</MobileNavLink>
              <MobileNavLink href="/en/ai" onClick={() => setOpen(false)} icon={<FaRobot size={16}/>}>
                AI Assistant
              </MobileNavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// ================== NavLink Helper ==================
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

// ================== MobileNavLink Helper ==================
const MobileNavLink = ({href, children, onClick, icon}:{href:string, children:React.ReactNode, onClick:()=>void, icon?:React.ReactNode}) => (
  <Link
    href={href}
    onClick={onClick}
    className="py-2 px-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2 text-gray-800"
  >
    {icon} {children}
  </Link>
);