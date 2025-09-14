"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

// Menu data
const menus = {
  "Immigration Services": [
    {
      title: "Temporary Visas",
      items: [
        "Tourist Visa (Visitor)",
        "Study Visa (Admission & Visa)",
        {
          title: "Work Visa",
          items: [
            "Closed Work Permit (Job Offer)",
            "Open Work Permit",
            "Spousal Work Permit",
            "Company Registration & Branch Transfer Work Permit",
          ],
        },
      ],
    },
    {
      title: "Permanent Visas",
      items: [
        "Spousal and Children Under 22 Sponsorship",
        "Parent Sponsorship",
        {
          title: "Express Entry",
          items: [
            "Federal Skilled Worker",
            "Canadian Experience Class (CEC)",
            {
              title: "Provincial Nominee Programs (PNP)",
              items: [
                "British Columbia",
                "Ontario",
                "Alberta",
                "Saskatchewan",
                "Nova Scotia",
                "Atlantic Program",
                "Manitoba",
                "New Brunswick",
                "Yukon",
                "Quebec"
              ]
            },
            "Federal Skilled Trades Program",
            {
              title: "Category-Based Programs",
              items: ["Healthcare Workers", "STEM", "French Speakers", "Education"],
            },
          ],
        },
        "Business Purchase",
        "Provincial Entrepreneurship",
      ],
    },
    {
      title: "Humanitarian & Asylum",
      items: [
        "Humanitarian & Compassionate",
        "Refugee & Asylum",
        {
          title: "Immigration Courts",
          items: [
            "Refugee Protection Division",
            "Refugee Appeal Division",
            "Detention Review",
            "Immigration Appeal Division",
          ],
        },
      ],
    },
    {
      title: "Citizenship Matters",
      items: [
        "Citizenship Application Services",
        "Travel Document for Refugees"
      ],
    },
  ],
};

// Define proper types for menu items
type MenuItem = string | { title: string; items: MenuItem[] };

// Start of contentMap
const contentMap: Record<string, React.JSX.Element> = {
  "Tourist Visa (Visitor)": (
    <div className="space-y-8">
      {/* Canada Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Canada Tourist Visa (Temporary Resident Visa – TRV)</h3>
        <p className="leading-7">
          The Canadian Tourist Visa, or Temporary Resident Visa (TRV), is one of the most popular routes for temporary entry to Canada.
          This visa is issued for purposes such as tourism, visiting family and friends, attending events and conferences, or short-term business trips.
          The applicant must prove sufficient financial capacity to cover travel expenses and strong ties such as job, family, or assets in their home country
          to assure the immigration officer that they will return after the visa expires.
        </p>
        <p className="leading-7">
          One of the main reasons for Canadian tourist visa rejection is the inability to prove these ties.
          Therefore, preparing precise financial, employment, and family documents is crucial.
          Using the services of a licensed immigration lawyer helps present the case with the right strategy and complete documentation, significantly increasing the chances of success.
        </p>
      </section>

      {/* USA Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">US Tourist Visa (B1/B2)</h3>
        <p className="leading-7">
          The US Tourist Visa (B1/B2) is one of the most sought-after temporary visas for tourism, visiting family and friends,
          medical treatment, short-term business trips, and attending exhibitions and conferences.
          It is usually issued with 5 or 10 years validity and allows multiple entries into the US.
        </p>
        <p className="leading-7">
          To obtain this visa, the applicant must show sufficient financial resources to cover travel costs and strong ties like employment or family in their home country.
          The consular officer will only approve the application if convinced the individual will return after their trip.
        </p>
      </section>

      {/* UK Section */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">UK Standard Visitor Visa</h3>
        <p className="leading-7">
          The UK Standard Visitor Visa allows applicants to enter the UK for purposes such as tourism, visiting family and friends,
          short-term business trips, medical treatment, and short-term training courses.
          The visa is typically valid for six months but can be issued for 2, 5, or even 10 years under certain conditions.
          However, each entry allows a maximum stay of six months.
        </p>
        <p className="leading-7">
          In the visa application process, providing a valid invitation letter, clear financial documents, hotel reservations, and return tickets is crucial.
          A history of international travel can also positively influence the immigration officer&apos;s decision.
          Consulting with an experienced immigration expert reduces the risk of application rejection.
        </p>
      </section>
    </div>
  ),
  "Study Visa (Admission & Visa)": (
    <div className="space-y-8">
      {/* Canada */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Canada Study Permit</h3>
        <p className="leading-7">
          At DéjàVu Visa, we help you obtain valid admission to study in Canada and apply for a Canadian study permit.
          Our services include selecting designated learning institutions (DLIs), preparing financial and academic documents,
          writing a strong application strategy, and advising on the process for accompanying family members (spouse and children).
        </p>
        <p className="leading-7">
          Benefits of this pathway include the ability to work while studying, obtaining a family visa, and the opportunity to apply for permanent residence after graduation.
        </p>
      </section>

      {/* USA */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">US F-1 Student Visa</h3>
        <p className="leading-7">
          In the process of obtaining a US F-1 student visa, we guide you from university selection to the embassy interview.
          Our team has experience in professionally preparing your financial and academic documents
          to assure the consular officer that your intention is to study and that you have strong ties to return.
        </p>
      </section>

      {/* UK */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">UK Student Visa</h3>
        <p className="leading-7">
          Obtaining admission from reputable universities and a UK student visa requires documents such as proof of funds and English language proficiency.
          Our team prepares your documents and presents your application strongly.
        </p>
        <p className="leading-7">
          You will also receive complete guidance on the Graduate Route after studies.
        </p>
      </section>

      {/* UAE */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">UAE Student Visa</h3>
        <p className="leading-7">
          For studying at reputable universities in Dubai and Abu Dhabi, we manage all admission and visa processes.
          Studying in the UAE is an excellent option due to its proximity to Iran, English-taught programs, and post-study work opportunities.
        </p>
      </section>
    </div>
  ),
  "Closed Work Permit (Job Offer)": (
    <div className="space-y-8">
      {/* Canada */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Canada Closed Work Permit</h3>
        <p className="leading-7">
          For individuals who have received a valid job offer from a Canadian employer.
          With this visa, the applicant can only work for that specific employer.
          In many cases, an LMIA is required, unless exemptions such as international agreements apply.
        </p>
      </section>

      {/* USA */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">US Work Visas (H-1B and others)</h3>
        <p className="leading-7">
          The most popular US work visa is the H-1B, designed for professionals in fields like IT, engineering, and medicine.
          It requires a sponsoring employer and is subject to a lottery. Other pathways like L-1 (intra-company transfer) and O-1 (for individuals with extraordinary ability) are also options.
        </p>
      </section>

      {/* UK */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">UK Skilled Worker Visa</h3>
        <p className="leading-7">
          Replaces the Tier 2 visa. For applicants with a job offer from a UK approved sponsor.
          Requires language proficiency, a job contract, and proof of funds.
          The possibility of permanent residence after 5 years is one of its advantages.
        </p>
      </section>

      {/* UAE */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">UAE Work Permit</h3>
        <p className="leading-7">
          A valid job offer from a UAE employer is a prerequisite for this pathway.
          After approval from the Ministry of Labor, a work permit and residence visa are issued.
          Typically valid for 2 to 3 years and renewable.
        </p>
      </section>
    </div>
  ),
  "Open Work Permit": (
    <div className="space-y-8">
      {/* General Introduction */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Open Work Permit (OWP)</h3>
        <p className="leading-7">
          Unlike a closed work permit, this visa is not restricted; the holder can work for any lawful employer in the destination country.
          It offers high flexibility and is mostly issued to spouses of international students, certain immigration pathways, and eligible graduates.
        </p>
      </section>

      {/* Canada */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Canada – Open Work Permit</h3>
        <p className="leading-7">
          In Canada, this permit is primarily granted to spouses or partners of international students or work permit holders.
          Graduates can also obtain an OWP through the Post-Graduation Work Permit (PGWP) program.
          The main advantage is that changing employers or cities does not require a new application.
        </p>
      </section>

      {/* USA */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">USA – Employment Authorization Document (EAD)</h3>
        <p className="leading-7">
          In the US, a similar permit is known as the Employment Authorization Document (EAD).
          It is specific to spouses of certain visa holders like H-1B or L-1, as well as those in the green card process.
          With an EAD, you are allowed to work for any employer.
        </p>
      </section>

      {/* UK */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">UK – Graduate / Dependant Visa</h3>
        <p className="leading-7">
          In the UK, most work visas are employer-specific, but pathways like the Graduate Route or Dependant visa allow open work permission for any employer.
        </p>
      </section>

      {/* UAE */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">UAE – Freelance / Spouse Permits</h3>
        <p className="leading-7">
          The UAE does not have a direct OWP pathway, but freelance visas or spouse visas function similarly.
          These permits allow professionals and dependents to collaborate with multiple employers or projects.
        </p>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ OWP provides greater freedom of choice for work and employment in the host country.
        </p>
      </section>
    </div>
  ),
  "Spousal Work Permit": (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Spousal Work Permit (SWP)</h3>
        <p className="leading-7">
          Designed for families who want the spouse to have work permission simultaneously with study or work migration.
          This visa is typically issued for the spouse of international students or valid foreign workers.
        </p>
      </section>

      {/* Canada */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Canada – Spousal Open Work Permit</h3>
        <p className="leading-7">
          In Canada, the spouse of a student or foreign worker can apply for a Spousal Open Work Permit.
          It is open and without job restrictions, processed concurrently with the main applicant.
        </p>
      </section>

      {/* USA */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">USA – EAD for Spouses</h3>
        <p className="leading-7">
          Spouses of H-1B or L-1 visa holders in the US can apply for an EAD.
          This card allows them to be employed in any business.
        </p>
      </section>

      {/* UK */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">UK – Dependant Visa</h3>
        <p className="leading-7">
          Spouses of students or skilled workers in the UK can obtain a dependant visa, which includes full work rights.
          They can even pursue permanent residence and citizenship independently.
        </p>
      </section>

      {/* UAE */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">UAE – Spouse Work Permit</h3>
        <p className="leading-7">
          In the UAE, the spouse of a foreign worker can apply for a Work Permit after obtaining dependant residence status.
          This pathway is sponsored by the employer.
        </p>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ SWP helps families migrate together to Canada, the US, the UK, or the UAE simultaneously, improving their quality of life.
        </p>
      </section>
    </div>
  ),
  "Company Registration & Branch Transfer Work Permit": (
    <div className="space-y-8">
      {/* General Introduction */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Work Permit through Company Registration and Branch Transfer</h3>
        <p className="leading-7">
          For managers, entrepreneurs, and business owners who intend to register a new company or transfer their international branch.
          In addition to work permission, it is a reliable pathway for business development and even obtaining permanent residence in some countries.
        </p>
      </section>

      {/* Canada */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Canada – ICT & Incorporation</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Transfer of managers or key personnel to the Canadian branch.</li>
          <li>Registering a new company and obtaining a managerial work permit.</li>
          <li>Writing a business plan and proving genuine economic activity.</li>
          <li>Possibility to transition to permanent residence (PR).</li>
        </ul>
      </section>

      {/* USA */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">USA – L-1 Visa</h3>
        <p className="leading-7">
          For managers and specialized employees transferring from a foreign office to a US branch.
          In many cases, it can lead to a green card.
        </p>
      </section>

      {/* UK */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">UK – Expansion Worker Visa</h3>
        <p className="leading-7">
          Allows foreign companies to send their representatives to the UK to establish a new branch.
        </p>
      </section>

      {/* UAE */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">UAE – Company Incorporation</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Company registration in Free Zone or Mainland.</li>
          <li>Obtaining work and residence permits for owners and managers.</li>
          <li>Eligibility for investment or golden visa.</li>
          <li>Possibility of permanent residence after approval.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ One of the fastest ways for international managers and business owners to work and reside in developed countries.
        </p>
      </section>
    </div>
  ),
  "Spousal and Children Under 22 Sponsorship": (
    <div className="space-y-8">
      {/* Introduction */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Spousal and Children Under 22 Sponsorship</h3>
        <p className="leading-7">
          One of the most popular immigration pathways to Canada, allowing citizens and permanent residents to bring their spouse and dependent children to live together in Canada. The goal of this program is family reunification.
        </p>
      </section>

      {/* Sponsor Conditions */}
      <section className="space-y-4">
        <h4 className="font-semibold">Sponsor Conditions:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Sponsor must be a citizen or permanent resident.</li>
          <li>Living in Canada or intending to return to Canada.</li>
          <li>No specific legal barriers or criminal record.</li>
          <li>Sufficient financial ability (with lighter conditions compared to other visas).</li>
        </ul>
      </section>

      {/* Dependent Children Conditions */}
      <section className="space-y-4">
        <h4 className="font-semibold">Children&apos;s Conditions:</h4>
        <p className="leading-7">
          The dependent must be under 22 years old and unmarried.
          If over 22, they may qualify only under specific circumstances, such as dependency due to a disability.
        </p>
      </section>

      {/* Benefits */}
      <section className="space-y-1">
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Canadian permanent residence for dependents.</li>
          <li>Open Work Permit (OWP) for the spouse during application processing.</li>
          <li>Free education for children in Canadian schools.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ The spousal and children sponsorship pathway is straightforward and reliable; the best way to bring your family to Canada and start a life together.
        </p>
      </section>
    </div>
  ),
  "Parent Sponsorship": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Parents and Grandparents Sponsorship (PGP)</h3>
        <p className="leading-7">
          One of the most popular family immigration pathways to Canada.
          This program allows Canadian citizens and permanent residents to sponsor their parents and grandparents for permanent residence.
          The main goal is to maintain family unity and enable shared living in Canada.
        </p>
      </section>

      {/* Sponsor Conditions */}
      <section className="space-y-4">
        <h4 className="font-semibold">Sponsor Conditions:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Must be a Canadian citizen or permanent resident.</li>
          <li>At least 18 years old.</li>
          <li>Sufficient income (MNI) for the past three years according to IRCC tables.</li>
          <li>Provide CRA documents (Notice of Assessment).</li>
          <li>Accept financial undertaking to support parents for a specified period.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section>
        <h4 className="font-semibold">Benefits for Parents:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Obtain Canadian permanent residence (PR).</li>
          <li>Access to public healthcare services.</li>
          <li>Eligibility to apply for Canadian citizenship in the future.</li>
          <li>Living with children and grandchildren in a safe, high-quality environment.</li>
        </ul>
      </section>

      {/* Alternative Option – Super Visa */}
      <section>
        <h4 className="font-semibold">Temporary Alternative – Super Visa</h4>
        <p className="leading-7">
          Due to PGP capacity limitations, many applicants use the Super Visa pathway.
          The Super Visa allows multiple entries for up to 10 years and permits continuous stays of up to 5 years per entry.
        </p>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ With Parent Sponsorship or the Super Visa, you can bring your loved ones to Canada and benefit from family life opportunities.
        </p>
      </section>
    </div>
  ),
  "Federal Skilled Worker": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Federal Skilled Worker Program (FSWP)</h3>
        <p className="leading-7">
          One of the three main programs under Canada&apos;s Express Entry system.
          Designed for applicants with university education, specialized work experience, and proficiency in English or French.
          This pathway is the fastest way for foreign professionals to obtain permanent residence.
        </p>
      </section>

      {/* Main Conditions */}
      <section className="space-y-4">
        <h4 className="font-semibold">Eligibility Conditions:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>At least one year of continuous skilled work experience in the past 5 years in NOC TEER 0, 1, 2, or 3.</li>
          <li>Valid language test results with CLB 7 or higher.</li>
          <li>Education equivalent to a Canadian high school diploma or higher (ECA required for foreign credentials).</li>
          <li>Score at least 67 out of 100 points on the selection factors grid.</li>
        </ul>
      </section>

      {/* CRS Scoring System */}
      <section className="space-y-4">
        <h4 className="font-semibold">CRS Scoring System:</h4>
        <p className="leading-7">
          After entering the Express Entry pool, candidates are scored based on age, education, language, work experience, and job offer factors.
          Those with the highest scores receive an Invitation to Apply (ITA) for PR.
        </p>
      </section>

      {/* Benefits */}
      <section>
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Fast permanent residence for yourself and family.</li>
          <li>Ability to live and work anywhere in Canada.</li>
          <li>Direct path to citizenship after obtaining PR.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ The FSWP is a reliable bridge to success for professionals in Canada.
        </p>
      </section>
    </div>
  ),
  "Canadian Experience Class (CEC)": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Canadian Experience Class (CEC)</h3>
        <p className="leading-7">
          One of the fastest and most popular pathways to obtain Canadian permanent residence, designed for those who have previously worked legally in Canada.
          Many international students use this pathway after graduation and obtaining a Post-Graduation Work Permit (PGWP).
        </p>
      </section>

      {/* Conditions */}
      <section>
        <h4 className="font-semibold">Main Conditions:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>At least one year of full-time (or equivalent part-time) skilled work experience in Canada within the past three years.</li>
          <li>Language proficiency of CLB 7 for TEER 0 and 1 occupations, and CLB 5 for TEER 2 and 3 occupations.</li>
          <li>Work must have been performed with a valid work permit.</li>
          <li>Intention to reside outside Quebec (as Quebec has its own program).</li>
        </ul>
      </section>

      {/* Benefits */}
      <section>
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Fast processing (often less than 6 months after ITA).</li>
          <li>No need to prove settlement funds in most cases.</li>
          <li>Special pathway for graduates and temporary workers.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ CEC is the best pathway to transition from temporary status (student/work) to PR in Canada.
        </p>
      </section>
    </div>
  ),
  "Provincial Nominee Programs (PNP)": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Provincial Nominee Programs (PNP) – Complete Guide to Provinces and Streams</h3>
        <p className="leading-7">
          Each Canadian province and territory has its own nomination program. These programs allow provinces to select immigrants based on their labor market and demographic needs.
          Even if your CRS score is low, a provincial nomination can significantly increase your chances of obtaining permanent residence.
        </p>
      </section>

      {/* Provinces */}
      <section>
        <h4 className="font-semibold">Programs of Some Provinces:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">

          <li><b>British Columbia (BC PNP):</b> Includes Skills Immigration (Skilled Worker, Healthcare Prof, International Graduate/Post-grad, Entry-level Semi-Skilled),
          Express Entry BC stream, and Entrepreneur streams (Base, Regional Pilot).</li>

          <li><b>Ontario (OINP):</b> Human Capital Stream (Human Capital Priorities, French-Speaking, Skilled Trades),
          Employer Job Offer Streams (Foreign Worker, International Student, In-Demand Skills),
          Business – Entrepreneur Stream.</li>

          <li><b>Saskatchewan (SINP):</b> International Skilled Worker (Express Entry, Occupation In-Demand),
          Saskatchewan Experience Streams (Work Permit Holders, Health Professionals, Students, Hospitality, Long-Haul Truck Drivers),
          Entrepreneur & Farm.</li>

          <li><b>Alberta (AAIP):</b> Includes Alberta Opportunity, Alberta Express Entry, Rural Renewal,
          and streams for entrepreneurs (Graduate Entrepreneur, Foreign Graduate Entrepreneur, Farm Stream).</li>

          <li><b>Manitoba (MPNP):</b> Skilled Workers in Manitoba, Skilled Workers Overseas, International Education Stream,
          Business Investor (Entrepreneur + Farm Investor Pathway).</li>

          <li><b>Nova Scotia (NSNP):</b> Express Entry Streams (Nova Scotia Demand, Nova Scotia Experience, Labour Market Priorities),
          Skilled Worker, Occupation In-Demand, Entrepreneur Streams.</li>

          <li><b>New Brunswick (NBPNP):</b> Skilled Worker, Express Entry, Business Immigration, Strategic Initiative (Francophones).</li>

          <li><b>Prince Edward Island (PEI PNP):</b> Labour Impact (Skilled Worker, Critical Worker, International Graduate),
          Express Entry, Business Impact (Work Permit).</li>

          <li><b>Newfoundland and Labrador (NLPNP):</b> Skilled Worker, International Graduate, Entrepreneur, Priority Skills NL.</li>

          <li><b>Yukon (YNP):</b> Skilled Worker, Critical Impact Worker, Express Entry, Business Nominee.</li>

          <li><b>Northwest Territories (NTNP):</b> Employer Driven Streams (Skilled Worker, Semi-skilled), Business Stream.</li>

          <li><b>Nunavut:</b> Currently does not have an active PNP.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section>
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>600 additional CRS points and a secure chance of receiving an ITA.</li>
          <li>Possibility of obtaining PR even with a lower CRS score.</li>
          <li>Living and working in a province that matches your skills or experience.</li>
          <li>Special pathways for graduates, workers, and entrepreneurs.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ PNP is the safest and fastest way to become a permanent resident of Canada.
        </p>
      </section>
    </div>
  ),
  "Federal Skilled Trades Program": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Federal Skilled Trades Program (FSTP)</h3>
        <p className="leading-7">
          One of the Express Entry pathways specifically for individuals with technical and skilled trade experience.
          This program is designed due to the high demand in Canada&apos;s labor market for skilled trades and offers a high chance of obtaining permanent residence.
        </p>
      </section>

      {/* Eligibility Conditions */}
      <section className="space-y-4">
        <h4 className="font-semibold">Main Conditions:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>At least two years of full-time work experience in a skilled trade within the past five years.</li>
          <li>Language test results with minimum CLB 5 (speaking and listening) and CLB 4 (reading and writing).</li>
          <li>A valid full-time job offer from a Canadian employer or a provincial qualification certificate.</li>
          <li>Intention to reside outside the province of Quebec.</li>
          <li>Meet all other standard Express Entry requirements</li>
        </ul>
      </section>

      {/* Occupational Groups */}
      <section>
        <h4 className="font-semibold">Example Covered Occupational Groups:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Construction trades (electricians, plumbers, welders)</li>
          <li>Industrial and machinery operators</li>
          <li>Butchers and bakers</li>
          <li>Jobs in natural resources and agriculture</li>
        </ul>
      </section>

      {/* Benefits */}
      <section>
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>High chances due to real demand for skilled trades.</li>
          <li>Lower educational requirements compared to other programs.</li>
          <li>Fast opportunity for permanent residence for the family.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ The best opportunity for those with technical skills seeking secure permanent residence.
        </p>
      </section>
    </div>
  ),
  "Healthcare Workers": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Category-Based Programs – Healthcare Workers</h3>
        <p className="leading-7">
          Labor shortages in the healthcare sector have led Canada to create special pathways for doctors, nurses, dentists, pharmacists, midwives, and other health professions.
          Individuals with relevant work experience and language proficiency have higher chances.
        </p>
      </section>

      {/* Pathways */}
      <section>
        <h4 className="font-semibold">Pathways:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Express Entry (Category-Based Selection) for Health occupations.</li>
          <li>Provincial programs specifically for healthcare workers in BC, Ontario, and Saskatchewan.</li>
          <li>Some streams require a job offer, while others accept applications without one.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section>
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Faster access to ITA in special draws.</li>
          <li>Stable and high-income job market.</li>
          <li>Direct pathway to permanent residence for the family.</li>
          <li>Priority processing for healthcare professionals.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ If you work in healthcare, your chances for Canadian immigration are very high.
        </p>
      </section>
    </div>
  ),
  "Education": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Category-Based Program – Education Stream</h3>
        <p className="leading-7">
          Due to a severe shortage of teachers and educational staff, Canada has opened a special pathway to attract teachers, instructors, and education specialists.
          Even applicants with lower CRS scores have a high chance of invitation through this stream.
        </p>
      </section>

      {/* Conditions */}
      <section>
        <h4 className="font-semibold">Conditions:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Relevant work experience in education at elementary, secondary, or special education levels.</li>
          <li>Language proficiency of at least CLB 7.</li>
          <li>Relevant educational degree (education, educational psychology, language) with a valid ECA.</li>
          <li>Teaching certification or license may be required for some positions.</li>
          <li>Must meet all other standard Express Entry requirements</li>
        </ul>
      </section>

      {/* NOC Codes */}
      <section>
        <h4 className="font-semibold">Included NOC Codes:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>NOC 41220 – Secondary school teachers</li>
          <li>NOC 41221 – Elementary school teachers</li>
          <li>NOC 41222 – Educational counsellors</li>
          <li>NOC 41200 – University and college professors</li>
          <li>NOC 42201 – Early childhood educators and assistants</li>
          <li>NOC 43100 – Elementary and secondary school teacher assistants</li>
        </ul>
      </section>

      {/* Benefits */}
      <section>
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>High chances in dedicated draws</li>
          <li>Access to a vast and stable job market</li>
          <li>Faster permanent residence for teachers and their families</li>
          <li>Opportunities for professional development and career advancement</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ Education is a very reliable pathway for immigration and employment in Canada.
        </p>
      </section>
    </div>
  ),
  "Business Purchase": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Business Purchase Abroad</h3>
        <p className="leading-7">
          One of the most secure and fastest ways to enter international markets is to purchase an existing business (Business Acquisition).
          Developed countries like Canada, the US, the UK, and the UAE offer special opportunities for foreign investors to benefit from profitable existing businesses while facilitating their immigration and residence pathways.
        </p>
      </section>

      {/* Benefits */}
      <section>
        <h4 className="font-semibold">Benefits of Buying a Business:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Start economic activity without building a business from scratch</li>
          <li>Quick access to existing customers, contracts, and brand</li>
          <li>Possibility of obtaining work or investment residence for the applicant and family</li>
          <li>Reduced risk by purchasing successful businesses with verified financial records</li>
          <li>Immediate cash flow from day one of operation</li>
        </ul>
      </section>

      {/* Countries */}
      <section>
        <h4 className="font-semibold">Buying a Business by Country:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li><b>Canada:</b> Purchasing companies or franchises can make you eligible for PNP entrepreneurship or investment streams. Possibility of permanent residence after approval.</li>
          <li><b>USA:</b> E-2 visa for investment or purchase of an active business. Other pathways like EB-5 also exist for larger investments.</li>
          <li><b>UK:</b> Opportunity to purchase or partner in active businesses within investment frameworks like Innovator Founder visa.</li>
          <li><b>UAE:</b> Buying a business in a Free Zone or Mainland leads to issuance of work residence or golden visa for investors.</li>
          <li><b>Australia:</b> Business Innovation and Investment Program (BIIP) offers pathways for business owners.</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ Buying a business is a secure way to guarantee economic future and obtain international residence for the entire family.
        </p>
      </section>
    </div>
  ),
  "Provincial Entrepreneurship": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Canadian Provincial Entrepreneur Programs (PNP Entrepreneur)</h3>
        <p className="leading-7">
          In addition to technical and skilled pathways, Canada runs various entrepreneurial programs at the provincial level.
          Applicants can enter Canada by investing and establishing a business in any eligible province and subsequently obtain permanent residence.
        </p>
      </section>

      {/* Sample Provinces */}
      <section>
        <h4 className="font-semibold">Sample Provincial Conditions:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li><b>British Columbia:</b> Net worth $600,000 – investment $200,000 (Base) or $100,000 (Regional Pilot).</li>
          <li><b>Ontario:</b> Net worth $800,000 (GTA) or $400,000 (outside GTA) – investment $600,000 or $200,000.</li>
          <li><b>Saskatchewan:</b> Net worth $500,000 – investment $200,000 to $300,000.</li>
          <li><b>Alberta:</b> Pathways include Graduate Entrepreneur, Foreign Graduate Entrepreneur, Farm Stream, and Rural Entrepreneur Stream.</li>
          <li><b>Manitoba:</b> Entrepreneur Pathway ($250,000 investment in Winnipeg or $150,000 outside the city) and Farm Investor Pathway.</li>
          <li><b>Nova Scotia:</b> Entrepreneur stream with $600,000 CAD net worth and $150,000 CAD investment. Also has a special stream for provincial graduates.</li>
          <li><b>New Brunswick:</b> Net worth $600,000 CAD ($300,000 liquid) and investment $250,000 CAD.</li>
          <li><b>Prince Edward Island:</b> Work Permit stream – start entrepreneurship with a temporary work visa and receive provincial nomination after proving success.</li>
          <li><b>Newfoundland and Labrador, Yukon, and Northwest Territories:</b> Similar conditions; require net worth of $500,000 to $600,000 CAD and investment of $200,000 to $300,000 CAD.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section>
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Opportunity to access permanent residence through investment in provinces</li>
          <li>Diverse pathways based on provincial needs and applicant capabilities</li>
          <li>Permission to bring family and free education for children</li>
          <li>Business support and networking opportunities in the local community</li>
          <li>Pathway to Canadian citizenship after meeting residency requirements</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ Provincial entrepreneur programs offer fantastic opportunities for investors who want to combine immigration and business.
        </p>
      </section>
    </div>
  ),
  "Humanitarian & Compassionate": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Canada&apos;s Humanitarian & Compassionate Program (H&C)</h3>
        <p className="leading-7">
          Canada is one of the countries with a specific pathway for obtaining permanent residence on humanitarian and compassionate grounds (H&C).
          This pathway is for individuals who cannot apply through regular means (Express Entry, PNP, work or study visas) but have special circumstances.
        </p>
      </section>

      {/* Eligible Individuals */}
      <section>
        <h4 className="font-semibold">Who is Eligible?</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Individuals who have lived in Canada for a long time and established social ties</li>
          <li>Parents whose children were born in Canada or have residence, and returning to their home country would be harmful</li>
          <li>Those for whom return poses a serious threat (life, health, social, or security)</li>
          <li>Individuals who can prove their presence in Canada is in the best interests of a child</li>
          <li>People facing unusual, undeserved or disproportionate hardship if required to leave Canada</li>
        </ul>
      </section>

      {/* Assessment Factors */}
      <section>
        <h4 className="font-semibold">Assessment Factors:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Establishment in Canada (employment, community involvement, family ties)</li>
          <li>Best interests of any children affected by the decision</li>
          <li>Factors in the country of origin (discrimination, violence, medical care availability)</li>
          <li>Health considerations and family violence considerations</li>
          <li>Any other relevant factors unique to the case</li>
        </ul>
      </section>

      {/* Benefits */}
      <section>
        <h4 className="font-semibold">Benefits:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Exceptional pathway to obtain permanent residence (PR)</li>
          <li>Ability to remain in Canada even if other pathways are closed</li>
          <li>Special consideration for human and individual circumstances</li>
          <li>Possible work authorization while application is processing</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ The last hope for individuals with special humanitarian circumstances. Success rates improve significantly with professional legal representation.
        </p>
      </section>
    </div>
  ),
  "Refugee & Asylum": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Refugee & Asylum in Canada</h3>
        <p className="leading-7">
          As one of the world&apos;s human rights advocates, Canada has various programs to support refugees.
          Individuals who face threats or persecution in their home country due to reasons such as race, religion, nationality, political opinion, or membership in a particular social group can file a refugee claim in Canada.
        </p>
      </section>

      {/* Types of Pathways */}
      <section>
        <h4 className="font-semibold">Types of Asylum Pathways:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li><b>Inland Claim:</b> Applying to IRCC or CBSA after entering Canada</li>
          <li><b>Resettlement:</b> Referral by UNHCR or support groups and transfer to Canada</li>
          <li><b>Blended Visa Office-Referred Program:</b> Combination of government and private sponsorship</li>
          <li><b>Private Sponsorship:</b> Groups of Canadians can sponsor refugees to come to Canada</li>
        </ul>
      </section>

      {/* Processing Steps */}
      <section>
        <h4 className="font-semibold">Application Processing Steps:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Formal registration of the refugee claim</li>
          <li>Completion of the Basis of Claim (BOC) form</li>
          <li>Eligibility interview with immigration officials</li>
          <li>Hearing session at the Immigration and Refugee Board (IRB – RPD)</li>
          <li>Decision issuance: acceptance and grant of protected person status, or rejection with appeal possibility</li>
          <li>Application for permanent residence after receiving protected person status</li>
        </ul>
      </section>

      {/* Rights and Benefits */}
      <section>
        <h4 className="font-semibold">Rights and Benefits:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Right to a fair hearing before an independent decision-maker</li>
          <li>Access to healthcare through the Interim Federal Health Program</li>
          <li>Work authorization while claim is being processed</li>
          <li>Access to settlement services and language training</li>
          <li>Opportunity to apply for permanent residence after claim acceptance</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ The asylum process is sensitive and complex, and the role of a licensed lawyer (RCIC or federal lawyer) is crucial for success.
        </p>
      </section>
    </div>
  ),
  "Refugee Protection Division": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Refugee Protection Division (RPD)</h3>
        <p className="leading-7">
          All refugee claims are initially reviewed by the Refugee Protection Division (RPD) of Canada&apos;s Immigration and Refugee Board (IRB).
          This independent tribunal decides whether the applicant qualifies for Canada&apos;s refugee protection based on the Immigration and Refugee Protection Act.
        </p>
      </section>

      {/* Review Process */}
      <section>
        <h4 className="font-semibold">RPD Review Process:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Completion and submission of the Basis of Claim (BOC) form within strict deadlines</li>
          <li>Document submission supporting the claim of persecution</li>
          <li>Hearing before an independent IRB member (usually within 60 days for expedited cases)</li>
          <li>Opportunity to present testimony, witnesses, and documentary evidence</li>
          <li>Right to legal representation at the hearing</li>
          <li>Decision issuance: acceptance and grant of protected person status, or rejection with reasons</li>
        </ul>
      </section>

      {/* Hearing Details */}
      <section>
        <h4 className="font-semibold">Hearing Details:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Hearings are usually private to protect claimant confidentiality</li>
          <li>Claimants can use an interpreter if needed</li>
          <li>Members are trained in international human rights and refugee law</li>
          <li>Decisions must be based on evidence and applicable law</li>
          <li>Process is designed to be less formal than court but equally rigorous</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ If accepted, the applicant obtains protected person status and can apply for permanent residence; if rejected, there is an opportunity to appeal to the RAD within strict timelines.
        </p>
      </section>
    </div>
  ),
  "Refugee Appeal Division": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Refugee Appeal Division (RAD)</h3>
        <p className="leading-7">
          When a refugee claim is rejected by the RPD, the applicant can appeal to the RAD.
          This division of the IRB provides a mechanism for error correction and ensures decision-making consistency in refugee matters.
        </p>
      </section>

      {/* RAD Duties and Role */}
      <section>
        <h4 className="font-semibold">RAD Duties and Process:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Complete review of the RPD decision based on the record</li>
          <li>Consideration of new evidence that was not reasonably available before</li>
          <li>Assessment of errors in fact, law, or mixed fact and law</li>
          <li>Standard of review: correctness for legal questions; reasonableness for factual findings</li>
          <li>Issuance of one of the decisions: confirm RPD decision, set aside and substitute new decision, or refer back to RPD for re-determination</li>
        </ul>
      </section>

      {/* Appeal Conditions */}
      <section>
        <h4 className="font-semibold">Appeal Conditions in RAD:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Notice of Appeal must be filed within 15 days of receiving the RPD decision</li>
          <li>Appellant&apos;s Record (written arguments and evidence) due within 30 days</li>
          <li>Minister&apos;s Response (if any) due within 15 days after Appellant&apos;s Record</li>
          <li>Reply (if any) due within 10 days after Minister&apos;s Response</li>
          <li>Oral hearings are rare; most appeals decided on written record</li>
          <li>Strict deadlines with limited extension possibilities</li>
        </ul>
      </section>

      {/* New Evidence Rules */}
      <section>
        <h4 className="font-semibold">New Evidence Rules:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm">
          <li>Evidence must be new and not reasonably available at time of RPD hearing</li>
          <li>Evidence must be credible and relevant</li>
          <li>Evidence must be material to the decision</li>
          <li>Must demonstrate due diligence in obtaining evidence for RPD hearing</li>
          <li>RAD has discretion to accept or reject new evidence</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ RAD is the last hope for many applicants whose refugee claims have been rejected; professional legal representation dramatically increases the chances of success through proper evidence presentation and legal argumentation.
        </p>
      </section>
    </div>
  ),
  "Detention Review": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Detention Review (ID)</h3>
        <p className="leading-7">
          If an individual is detained by the Canada Border Services Agency (CBSA) for immigration reasons,
          their case is reviewed by the Immigration Division (ID) of the Immigration and Refugee Board (IRB).
          This independent tribunal ensures detention is used as a last resort and reviews whether continued detention is justified under Canadian law.
        </p>
      </section>

      {/* Reasons for Detention */}
      <section>
        <h4 className="font-semibold">Reasons for Immigration Detention:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Identity not confirmed to immigration authorities</li>
          <li>Risk of flight or failure to appear at proceedings</li>
          <li>Perceived threat to public safety or security</li>
          <li>Violation of visa or permanent residence conditions</li>
          <li>Being part of an irregular arrival or human smuggling operation</li>
          <li>Inadmissibility on security grounds or serious criminality</li>
        </ul>
      </section>

      {/* Review Process */}
      <section>
        <h4 className="font-semibold">Review Process:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>First hearing within 48 hours of detention (24 hours for minors)</li>
          <li>Subsequent reviews within 7 days of previous review if detention continues</li>
          <li>Further reviews every 30 days if detention continues beyond initial periods</li>
          <li>Right to legal representation at all hearings</li>
          <li>CBSA must show why detention should continue</li>
          <li>Member considers alternatives to detention (conditions, bonds, community sponsors)</li>
        </ul>
      </section>

      {/* Alternatives to Detention */}
      <section>
        <h4 className="font-semibold">Alternatives to Detention:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Release on bond with financial guarantee</li>
          <li>Release with conditions (reporting, residency, surrender of documents)</li>
          <li>Community sponsorship programs</li>
          <li>Electronic monitoring in some cases</li>
          <li>Third-party custody arrangements</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ This court ensures the rights of detained individuals are respected and decisions are made fairly. Most detainees are released with conditions rather than held indefinitely.
        </p>
      </section>
    </div>
  ),
  "Immigration Appeal Division": (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold">Immigration Appeal Division (IAD)</h3>
        <p className="leading-7">
          The IAD is a division of Canada&apos;s Immigration and Refugee Board (IRB) that handles various types of immigration appeals.
          It provides an independent administrative tribunal process for challenging certain immigration decisions.
        </p>
      </section>

      {/* Types of Appeals */}
      <section>
        <h4 className="font-semibold">Types of IAD Appeals:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Sponsorship appeals (refusal of family class applications)</li>
          <li>Residency obligation appeals (loss of permanent resident status)</li>
          <li>Removal order appeals (certain types of removal orders)</li>
          <li>Minister&apos;s appeals on residency obligation decisions</li>
          <li>Appeals based on humanitarian and compassionate considerations</li>
        </ul>
      </section>

      {/* Residency Obligation */}
      <section>
        <h4 className="font-semibold">Residency Obligation for Permanent Residents:</h4>
        <p className="leading-7">
          Permanent residents must be physically present in Canada for at least 730 days (2 years) in every 5-year period.
          The obligation can be met through:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Actual physical presence in Canada</li>
          <li>Time spent outside Canada accompanying a Canadian citizen spouse/common-law partner</li>
          <li>Time spent outside Canada employed by a Canadian business</li>
          <li>Time spent outside Canada accompanying a permanent resident spouse/common-law partner employed by a Canadian business</li>
        </ul>
      </section>

      {/* Appeal Process */}
      <section>
        <h4 className="font-semibold">Appeal Process:</h4>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Notice of Appeal must be filed within strict timelines (usually 30 days)</li>
          <li>Alternative Dispute Resolution (ADR) conference may be offered</li>
          <li>Full hearing if ADR is unsuccessful or not available</li>
          <li>Right to legal representation throughout the process</li>
          <li>Decision can confirm, reverse, or refer the matter back for re-determination</li>
          <li>Further appeal to Federal Court on questions of law only</li>
        </ul>
      </section>

      {/* Humanitarian Considerations */}
      <section>
        <h4 className="font-semibold">Humanitarian Considerations:</h4>
        <p className="leading-7">
          The IAD can allow appeals based on humanitarian and compassionate grounds, considering factors such as:
        </p>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Best interests of any children affected</li>
          <li>Degree of establishment in Canada</li>
          <li>Family ties and support in Canada</li>
          <li>Conditions in the country of return</li>
          <li>Health and special needs considerations</li>
          <li>Any other relevant factors</li>
        </ul>
      </section>

      <section>
        <p className="leading-7 font-medium">
          ✅ The IAD provides an important safety net for immigrants facing loss of status or family separation. Professional legal representation is crucial for navigating the complex appeal process and presenting a compelling case based on humanitarian grounds when applicable.
        </p>
      </section>
    </div>
  )
};

// Content Component
function ImmigrationContent() {
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
      {/* Page Header */}
      <div className="relative w-full h-[280px] rounded-b-3xl flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
        <Image
          src="/images/about.jpg"
          alt="Immigration Services Header"
          fill
          className="object-cover rounded-b-3xl"
          quality={100}
          priority
          sizes="100vw"
        />
        <h1 className="relative z-10">Immigration Services</h1>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">Submenus</h2>
            <div className="space-y-2">
              {renderMenuItems(menus["Immigration Services"])}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg shadow p-6 relative">
            {section && (
              <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {section}
              </div>
            )}

            {section ? (
              <div>
                <h2 className="text-2xl font-bold mb-6">{section}</h2>
                {contentMap[section] || (
                  <div>No content available for this section.</div>
                )}
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold mb-4">Immigration Services</h2>
                <p>Please select a section from the side menu.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

// Main Page Component with Suspense
export default function ImmigrationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ImmigrationContent />
    </Suspense>
  );
}