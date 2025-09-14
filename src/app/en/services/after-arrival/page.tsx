"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

// Menu data for Post-Arrival Services
const menus = {
  "Post-Arrival Services": [
    "Housing Rental",
    "Job Search & Resume Enhancement",
    "Bank Account Opening & National ID",
    "Airport Transfer Services",
    "Business Setup (Business Plan)",
  ],
};

// Content for each section
const contentMap: Record<string, React.JSX.Element> = {
  "Housing Rental": (
    <div className="space-y-6">
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Housing Rental Services</h3>
        <p className="leading-7">
          We assist you in finding suitable accommodation in Canada. Our comprehensive housing services include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Finding apartments, houses, or suites based on your budget and preferences</li>
          <li>Consultation about different neighborhoods and their amenities</li>
          <li>Arranging property viewings and virtual tours</li>
          <li>Assistance with understanding lease agreements and tenant rights</li>
          <li>Guidance for rental guarantors and credit history requirements</li>
          <li>Utility setup assistance (hydro, internet, cable)</li>
          <li>Rental insurance guidance</li>
        </ul>
      </section>
    </div>
  ),

  "Job Search & Resume Enhancement": (
    <div className="space-y-6">
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Job Search & Resume Enhancement</h3>
        <p className="leading-7">
          To help you successfully enter the Canadian job market, we provide comprehensive career services:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Writing professional resumes in Canadian format</li>
          <li>Customized Cover Letter preparation for specific job applications</li>
          <li>LinkedIn profile optimization</li>
          <li>Mock interview preparation and coaching sessions</li>
          <li>Introductions to reputable companies and networking opportunities</li>
          <li>Guidance on understanding the Canadian job market and salary expectations</li>
          <li>Workshops on Canadian workplace culture and etiquette</li>
        </ul>
      </section>
    </div>
  ),

  "Bank Account Opening & National ID": (
    <div className="space-y-6">
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Bank Account Opening & National ID</h3>
        <p className="leading-7">
          Complete support for your initial administrative tasks in Canada, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Opening accounts with major Canadian banks (TD, RBC, Scotia, BMO, CIBC)</li>
          <li>Guidance for obtaining Social Insurance Number (SIN)</li>
          <li>Assistance in applying for Provincial Health Card</li>
          <li>Support with obtaining a Canadian driver&apos;s license</li>
          <li>Help with registering for essential government services</li>
          <li>Credit history establishment guidance</li>
          <li>Tax identification number assistance</li>
        </ul>
      </section>
    </div>
  ),

  "Airport Transfer Services": (
    <div className="space-y-6">
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Airport Transfer Services</h3>
        <p className="leading-7">
          Safe and welcoming airport pickup and transfer to your destination:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Meet and greet at international airports (Toronto, Vancouver, Montreal, Calgary)</li>
          <li>Comfortable transfer to hotel or temporary residence</li>
          <li>Assistance with luggage handling and customs procedures</li>
          <li>Providing initial orientation about the city and essential services</li>
          <li>Hotel bookings for first days of arrival</li>
          <li>SIM card provision for immediate communication</li>
          <li>Emergency contact support 24/7</li>
        </ul>
      </section>
    </div>
  ),

  "Business Setup (Business Plan)": (
    <div className="space-y-6">
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Business Setup in Canada</h3>
        <p className="leading-7">
          Specialized support for entrepreneurs looking to establish businesses in Canada:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>Professional business plan writing for immigration and funding purposes</li>
          <li>Consultation on choosing the right business structure (Sole Proprietorship, Partnership, Corporation)</li>
          <li>Guidance for federal and provincial company registration</li>
          <li>Assistance in obtaining necessary business permits and licenses</li>
          <li>Taxation and accounting consultation</li>
          <li>Market research and feasibility studies</li>
          <li>Business banking setup and financing options</li>
          <li>Ongoing business compliance support</li>
        </ul>
      </section>
    </div>
  ),
};

// Define proper types for menu items
type MenuItem = string | { title: string; items: MenuItem[] };

// Content Component
function AfterArrivalContent() {
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
      {/* Header with Image */}
      <div className="relative w-full h-[280px] rounded-b-3xl flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Post-Arrival Services in Canada"
          fill
          className="object-cover rounded-b-3xl"
          quality={100}
          priority
          sizes="100vw"
        />
        <h1 className="relative z-10">Post-Arrival Services</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">Our Services</h2>
            <div className="space-y-2">
              {renderMenuItems(menus["Post-Arrival Services"])}
            </div>
          </aside>

          {/* Content */}
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
                <h2 className="text-2xl font-bold mb-4">Post-Arrival Services</h2>
                <p className="text-gray-600">Please select a service from the sidebar to learn more about our comprehensive post-arrival support services in Canada.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// Main Page Component with Suspense
export default function AfterArrivalPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <AfterArrivalContent />
    </Suspense>
  );
}