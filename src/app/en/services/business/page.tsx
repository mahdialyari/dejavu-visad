"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react"; // ✅ Suspense اضافه شد
import Image from "next/image";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

// Menu data for Business Registration & Development
const menus = {
  "Business Registration & Development": [
    "Work Permit via Company Registration & Branch Transfer",
  ],
};

// Content for each section
const contentMap: Record<string, React.JSX.Element> = {
  "Work Permit via Company Registration & Branch Transfer": (
    <div className="space-y-8">
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Work Permit through Company Registration and Branch Transfer</h3>
        <p className="leading-7">
          For managers, entrepreneurs, and business owners who intend to register a new company 
          or transfer their international branch to Canada, this pathway offers a reliable route 
          to obtain work permission and eventually permanent residence.
        </p>
      </section>

      <section className="space-y-4">
        <h4 className="font-semibold">Canada – ICT & Incorporation</h4>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Transfer of managers or key personnel to the Canadian branch under Intra-Company Transfer program</li>
          <li>Registering a new company and obtaining a managerial work permit</li>
          <li>Writing a comprehensive business plan and proving genuine economic activity</li>
          <li>Demonstrating sufficient investment capital and business experience</li>
          <li>Possibility to transition to permanent residence through PNP entrepreneur streams</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h4 className="font-semibold">Requirements:</h4>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Proof of business experience (minimum 2-3 years for most programs)</li>
          <li>Sufficient investment funds (varies by province from $100,000 to $600,000 CAD)</li>
          <li>Business plan demonstrating economic benefit to Canada</li>
          <li>Intent to actively manage the business from within Canada</li>
          <li>Clean criminal record and medical admissibility</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h4 className="font-semibold">Our Services Include:</h4>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Business viability assessment and program selection</li>
          <li>Business plan development and financial projections</li>
          <li>Document preparation and application submission</li>
          <li>Liaison with provincial immigration authorities</li>
          <li>Post-approval business setup support</li>
          <li>Ongoing compliance and renewal assistance</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ This pathway is ideal for experienced business owners seeking to establish 
          operations in Canada while securing work authorization for themselves and key staff.
        </p>
      </section>
    </div>
  ),
};

// Define proper types for menu items
type MenuItem = string | { title: string; items: MenuItem[] };

// ✅ کامپوننت محتوا
function BusinessContent() {
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
          alt="Business Registration and Development Services"
          fill
          className="object-cover rounded-b-3xl"
          priority
          sizes="100vw"
        />
        <h1 className="relative z-10">Business Registration & Development</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">Submenus</h2>
            <div className="space-y-2">
              {renderMenuItems(menus["Business Registration & Development"])}
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
                  Business Registration & Development
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
export default function BusinessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BusinessContent />
    </Suspense>
  );
}