"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react"; // ✅ Suspense import شد

// ================== Menus ==================
const menus = {
  "Legal Services": [
    "Federal Courts & Rejection Appeals",
    "Business Legal Services",
    "Civil Litigation in British Columbia",
  ],
};

// ================== ContentMap ==================
const contentMap: Record<string, React.JSX.Element> = {
  "Federal Courts & Rejection Appeals": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Federal Courts & Rejection Appeals in Canada</h3>
        <p className="leading-7">
          Sometimes, despite complete documentation and suitable conditions, a visa or residence application in Canada is rejected by an immigration officer.
          In such cases, one of the legal avenues for appeal is to approach the Federal Court of Canada.
          This process, known as Judicial Review, allows the applicant to have the immigration officer&apos;s decision reviewed by an impartial judge.
        </p>
        <p className="leading-7">
          In this process, the court examines whether the immigration officer made legal errors, abused their authority, or disregarded evidence in their decision-making.
          If the judge concludes that the decision was unfair, the case is returned to the immigration department (IRCC) for re-evaluation.
        </p>
        <p className="leading-7">
          Our firm, with a team of licensed immigration lawyers in collaboration with Canadian barristers, provides specialized services for appealing rejections and pursuing federal court cases.
          We manage all stages for you, from gathering documentation, preparing petitions, court representation, to following up on the case&apos;s return to IRCC.
        </p>
      </section>
    </div>
  ),

  "Business Legal Services": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Business Legal Services & Corporate Law</h3>
        <p className="leading-7">
          Businesses of all sizes need specialized legal consultation and representation for sustainable growth and to prevent legal risks.
          From company registration and incorporation to drafting complex commercial contracts and even handling legal disputes,
          the presence of a professional legal team can guarantee success and investment security.
        </p>
        <p className="leading-7">
          Our firm, in collaboration with licensed lawyers in Canada and the UAE, provides comprehensive legal services in business and corporate law.
          Our goal is to enable managers, entrepreneurs, and investors to develop their commercial activities in domestic and international markets with peace of mind.
        </p>
      </section>

      <section>
        <h4 className="font-semibold">Legal Services in Canada</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Company registration and incorporation (Corporation, Partnership, Sole Proprietorship)</li>
          <li>Drafting and amending articles of association and internal bylaws</li>
          <li>Review of commercial contracts (employment, lease, sale, distribution, supply)</li>
          <li>Shareholder agreements and investment agreements</li>
          <li>Mergers and Acquisitions (M&A) advisory</li>
          <li>Corporate litigation in courts and legal authorities</li>
          <li>Intellectual property and brand protection</li>
          <li>Compliance with Canadian tax and commercial laws</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold">Legal Services in UAE</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Company setup in Free Zone and Mainland</li>
          <li>Drafting and reviewing domestic and international contracts</li>
          <li>Partnership and investment agreements (JV & Shareholding Agreements)</li>
          <li>UAE labor law advisory and employment contracts</li>
          <li>Dispute resolution through negotiation, arbitration, or courts</li>
          <li>Legal advisory for foreign investors (Compliance)</li>
          <li>Commercial agency and franchise agreements</li>
          <li>Brand registration and protection in UAE and GCC</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold">Our Service Advantages</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Preventing disputes with precise and transparent contracts</li>
          <li>Support in commercial disputes and litigation</li>
          <li>Assistance in international expansion for investors</li>
          <li>Presence of licensed lawyers in Canada and the UAE</li>
        </ul>
      </section>
    </div>
  ),

  "Civil Litigation in British Columbia": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Civil Litigation in British Columbia</h3>
        <p className="leading-7">
          British Columbia is one of Canada&apos;s most important economic and commercial centers.
          Resolving disputes in this province requires thorough familiarity with the BC judicial system.
          The main courts include the <b>Provincial Court</b> and the <b>Supreme Court of BC</b>.
        </p>
      </section>

      <section>
        <h4 className="font-semibold">Our Services in BC</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Contract disputes (termination, breach, or enforcement)</li>
          <li>Commercial and shareholder disputes</li>
          <li>Real estate and tenancy disputes</li>
          <li>Employment and labor disputes</li>
          <li>Financial and debt disputes</li>
          <li>Family law disputes</li>
        </ul>
      </section>

      <section>
        <h4 className="font-semibold">Alternative Dispute Resolution Methods</h4>
        <p className="leading-7">
          In addition to court representation, our team offers services such as mediation and arbitration
          to resolve disputes with lower costs and time, outside of court.
        </p>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ Using our services in BC ensures your interests are protected in the best possible way, both in and out of court.
        </p>
      </section>
    </div>
  ),
};

// ✅ کامپوننت محتوا
function LegalContent() {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  // General function to render menu items
  const renderMenuItems = (items: string[], level = 0) => {
    return items.map((item, index) => (
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
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative w-full h-[280px] rounded-b-3xl flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Legal Services Header"
          fill
          className="object-cover rounded-b-3xl"
          quality={100}
          priority
          sizes="100vw"
        />
        <h1 className="relative z-10">Legal Services</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">Submenus</h2>
            <div className="space-y-2">
              {renderMenuItems(menus["Legal Services"])}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg shadow p-6 relative">
            {section ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">{section}</h2>
                {contentMap[section] || (
                  <div>No content available for this section.</div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">Legal Services</h2>
                <p>Please select a legal section from the sidebar.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// ✅ کامپوننت اصلی با Suspense
export default function LegalPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LegalContent />
    </Suspense>
  );
}