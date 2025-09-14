"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react"; // ✅ Suspense اضافه شد
import Image from "next/image";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

// Menu data for Dubai
const menus = {
  "Business & Legal Consulting in Dubai": ["Our Services in Dubai"],
};

// Content for each section
const contentMap: Record<string, React.JSX.Element> = {
  "Our Services in Dubai": (
    <div className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Our Services in Dubai</h3>
        <p className="leading-7">
          Dubai, as one of the international business hubs and a gateway to the
          Middle East and Asian markets, offers unique opportunities for
          investors and entrepreneurs. Setting up a company in Dubai not only
          provides access to a dynamic and free economy but can also lead to
          obtaining long-term UAE residency.
        </p>
      </section>

      <section className="space-y-4">
        <h4 className="font-semibold">Our Services Include:</h4>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>
            <span className="font-medium">Business & Legal Consulting:</span>{" "}
            Choosing the most suitable company structure (Free Zone, Mainland,
            or Offshore) according to your business and residency goals.
          </li>
          <li>
            <span className="font-medium">Company Registration:</span>{" "}
            Preparation and completion of all required documents, coordination
            with legal authorities, and fast company setup in Dubai.
          </li>
          <li>
            <span className="font-medium">Licenses & Permits:</span> Obtaining
            various commercial, industrial, and service licenses to match your
            business activity.
          </li>
          <li>
            <span className="font-medium">UAE Residency:</span> Acquiring
            residence permits through company registration, investment, or
            business management.
          </li>
          <li>
            <span className="font-medium">Post-Registration Services:</span>{" "}
            Opening corporate bank accounts, renting offices or retail spaces,
            and securing work visas for family members and employees.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h4 className="font-semibold">
          Why is Dubai the Right Choice?
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Strategic geographical position with access to global markets.</li>
          <li>
            Attractive tax system (no personal income tax and low corporate
            taxes).
          </li>
          <li>
            Modern infrastructure and advanced facilities for international
            trade.
          </li>
          <li>
            High security and supportive regulations for foreign investors.
          </li>
        </ul>
      </section>
    </div>
  ),
};

// Define proper types for menu items
type MenuItem = string | { title: string; items: MenuItem[] };

// ✅ کامپوننت محتوا
function DubaiContent() {
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

  const renderMenuItems = (items: MenuItem[], level = 0) => {
    return items.map((item, index) => {
      if (typeof item === "string") {
        return (
          <Link
            key={index}
            href={`?section=${encodeURIComponent(item)}`}
            className={`block px-4 py-2 rounded-lg transition ${
              level > 0 ? "pl-8 text-sm" : ""
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
                level > 0 ? "pl-8 text-sm" : ""
              }`}
            >
              <span>{item.title}</span>
              {isOpen ? (
                <HiChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <HiChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </button>

            {isOpen && (
              <div
                className={`pl-4 space-y-1 mt-1 ${
                  level > 0 ? "border-l-2 border-gray-200" : ""
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
    <div className="min-h-screen bg-gray-50">
      {/* Header with background image */}
      <div className="relative w-full h-[280px] rounded-b-3xl flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Dubai Business Consulting Services"
          fill
          className="object-cover rounded-b-3xl"
          priority
          sizes="100vw"
        />
        <h1 className="relative z-10">Business & Legal Consulting in Dubai</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">Submenus</h2>
            <div className="space-y-2">
              {renderMenuItems(menus["Business & Legal Consulting in Dubai"])}
            </div>
          </aside>

          {/* Content Section */}
          <main className="flex-1 bg-white rounded-lg shadow p-6 relative">
            {section && (
              <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {section}
              </div>
            )}

            {section ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">{section}</h2>
                {contentMap[section] || <div>No content available.</div>}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Business & Legal Consulting in Dubai
                </h2>
                <p>Please select a section from the sidebar.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// ✅ کامپوننت اصلی با Suspense
export default function DubaiPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DubaiContent />
    </Suspense>
  );
}