"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What are comprehensive earthing audits?",
    answer:
      "Comprehensive earthing audits are engineering assessments used to evaluate the condition, performance, safety and reliability of an electrical earthing and grounding system.",
  },
  {
    question: "Why are comprehensive earthing audits important?",
    answer:
      "Earthing audits help identify grounding deficiencies, unsafe conditions, equipment risks and compliance gaps before they result in electrical hazards, equipment damage or operational problems.",
  },
  {
    question: "What is checked during an earthing audit?",
    answer:
      "An earthing audit can include grounding conductors, earth electrodes, connections, equipment grounding, bonding, earth resistance, continuity, potential differences and other project-specific requirements.",
  },
  {
    question: "When should an earthing audit be performed?",
    answer:
      "Earthing audits can be performed for new projects, existing facilities, plant expansions, periodic maintenance programs, troubleshooting activities and when significant electrical-system changes are introduced.",
  },
  {
    question: "Who provides earthing audits in the UAE?",
    answer:
      "Specialist electrical engineering consultants with experience in grounding systems, electrical safety, testing and technical assessment can provide earthing audit services in the UAE.",
  },
  {
    question: "Does JEF provide earthing audit services in the UAE?",
    answer:
      "JEF UAE provides electrical engineering and technical assessment services covering earthing and grounding systems for industrial, utility, infrastructure and other electrical facilities.",
  },
  {
    question: "Which industries require earthing audits?",
    answer:
      "Earthing audits are relevant to oil and gas facilities, power utilities, industrial plants, renewable energy projects, infrastructure facilities, commercial facilities and other electrical installations.",
  },
  {
    question: "What information is required for an earthing audit?",
    answer:
      "Typical information includes electrical drawings, grounding layouts, equipment details, previous test reports, site information, operating conditions and applicable client or authority requirements.",
  },
  {
    question: "Is field testing required for an earthing audit?",
    answer:
      "Field testing may be required depending on the audit scope. Measurements can be used to verify existing conditions and validate information used in the engineering assessment.",
  },
  {
    question: "What earth resistance value is required?",
    answer:
      "The acceptable earth resistance depends on the installation, applicable standards, system design, utility requirements and project-specific criteria. The target value should therefore be established for the specific facility.",
  },
  {
    question: "What standards apply to earthing audits?",
    answer:
      "The applicable standards depend on the project and installation. Relevant IEC, IEEE, BS and local utility or authority requirements may apply depending on the scope.",
  },
  {
    question: "Can earthing audits be performed on existing facilities?",
    answer:
      "Yes. Existing facilities can be assessed using available documentation, site inspections, field measurements and engineering analysis.",
  },
  {
    question: "Can earthing audits identify safety risks?",
    answer:
      "Yes. An audit can identify grounding deficiencies and other conditions that may affect electrical safety, equipment protection and reliable system operation.",
  },
  {
    question: "Can earthing audits help with compliance?",
    answer:
      "Yes. The findings from an appropriately scoped audit can support compliance assessment against applicable engineering standards, client requirements and authority criteria.",
  },
  {
    question: "What are the typical deliverables of an earthing audit?",
    answer:
      "Typical deliverables include the audit methodology, input information, field observations, test results where applicable, identified deficiencies, risk assessment, recommendations and a final technical report.",
  },
  {
    question: "How long does an earthing audit take?",
    answer:
      "The duration depends on facility size, system complexity, number of locations or assets, availability of information, site access and the required testing and reporting scope.",
  },
  {
    question: "How much does an earthing audit cost in the UAE?",
    answer:
      "The cost depends on the facility size, audit scope, number of assets, field testing requirements, engineering analysis and reporting requirements. A project-specific quotation is normally required.",
  },
  {
    question: "Can JEF review an existing earthing audit report?",
    answer:
      "Yes. An existing report can be technically reviewed to assess its assumptions, measurements, methodology, findings, recommendations and alignment with the applicable requirements.",
  },
  {
    question: "Can earthing audits be performed for oil and gas facilities?",
    answer:
      "Yes. Earthing performance is particularly important in oil and gas and process facilities because electrical safety, equipment protection and reliable operation are critical.",
  },
  {
    question: "Can earthing audits be performed for power utilities?",
    answer:
      "Yes. Utility installations can require detailed grounding assessments covering substations, equipment, grounding networks and other electrical infrastructure.",
  },
  {
    question: "Can earthing audits support renewable energy projects?",
    answer:
      "Yes. Solar PV, wind, battery storage and other renewable energy facilities can require grounding assessment as part of electrical safety and system design verification.",
  },
  {
    question: "What problems can a poor earthing system cause?",
    answer:
      "Poor earthing can contribute to unsafe touch or step potentials, ineffective fault-current paths, equipment damage, protection problems, electromagnetic interference and increased electrical safety risks.",
  },
  {
    question: "Why is earthing important for electrical equipment?",
    answer:
      "An effective grounding system provides appropriate fault-current paths and supports personnel safety, equipment protection and reliable operation of electrical systems.",
  },
  {
    question: "Can earthing audits identify corrosion or damaged connections?",
    answer:
      "Depending on the audit scope, inspections and testing can identify visible deterioration, damaged connections, continuity issues and other conditions that may reduce grounding-system performance.",
  },
  {
    question: "Should earthing audits be repeated periodically?",
    answer:
      "Periodic assessment can be useful because grounding systems can change due to corrosion, construction work, equipment modifications, environmental conditions and other changes to the facility.",
  },
  {
    question: "What software can be used for earthing studies?",
    answer:
      "The software used depends on the technical objective and study scope. Engineering tools may be selected for grounding analysis, electrical-system modelling and specialized earthing calculations.",
  },
  {
    question: "How can JEF demonstrate expertise in earthing audits?",
    answer:
      "Expertise can be demonstrated through relevant engineering experience, documented methodology, appropriate testing capabilities, applicable standards knowledge, technical reporting and project-specific recommendations.",
  },
  {
    question: "What is the first step to start an earthing audit?",
    answer:
      "The first step is to define the facility, audit objective, available documentation, required testing, applicable standards and expected deliverables so the appropriate audit scope can be established.",
  },
  {
    question: "Can earthing audits reduce electrical project risk?",
    answer:
      "Yes. Identifying grounding deficiencies early allows corrective measures to be planned before they develop into more serious safety, reliability or equipment-protection issues.",
  },
  {
    question: "Why choose JEF for earthing audits in the UAE?",
    answer:
      "JEF UAE provides electrical engineering expertise for grounding and earthing assessments, with project-specific analysis, technical recommendations and engineering documentation for industrial and infrastructure applications.",
  },
];

export default function EarthingAuditsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#292a2c] text-white pt-32 md:pt-40">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 pb-20">
        {/* Back to Blog */}
        <Link
          href="/blog/need-for-comprehensive-earthing-audits"
          className="text-[#ff0000] text-sm uppercase tracking-wide hover:underline"
        >
          ← BACK TO BLOG
        </Link>

        {/* Heading */}
        <h1 className="mt-10 text-3xl md:text-5xl font-bold uppercase tracking-[2px]">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl mb-10">
          Frequently asked questions about comprehensive earthing audits,
          grounding systems, electrical safety, compliance, testing and
          engineering applications.
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#202020] overflow-hidden border border-[#292929]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full min-h-[90px] px-6 py-5 flex items-center justify-between text-left hover:bg-[#252525] transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base text-gray-300 pr-4">
                    {faq.question}
                  </span>

                  <span
                    className={`w-2 h-2 border-r-2 border-b-2 border-[#ff0000] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-[-135deg]" : "rotate-45"
                    }`}
                  ></span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#333] px-6 py-6">
                    <p className="text-sm md:text-base leading-7 text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
