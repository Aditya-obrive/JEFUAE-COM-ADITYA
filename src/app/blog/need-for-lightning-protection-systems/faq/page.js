"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "WHAT IS LIGHTNING PROTECTION SYSTEMS?",
    answer:
      "Lightning protection systems are engineered systems designed to protect structures, equipment and people from the effects of lightning strikes by providing controlled paths for lightning current and reducing associated risks.",
  },
  {
    question: "WHY ARE LIGHTNING PROTECTION SYSTEMS IMPORTANT?",
    answer:
      "Lightning protection systems help reduce the risk of damage to structures, electrical equipment and critical systems while supporting personnel safety and reliable facility operation.",
  },
  {
    question: "WHAT IS A LIGHTNING PROTECTION STUDY?",
    answer:
      "A lightning protection study is an engineering assessment used to evaluate lightning risk and determine suitable protection measures for a structure or facility.",
  },
  {
    question: "WHEN IS A LIGHTNING PROTECTION STUDY REQUIRED?",
    answer:
      "A study may be required for new facilities, existing structures, major expansions, industrial facilities, infrastructure projects and installations where lightning risk needs to be evaluated.",
  },
  {
    question: "WHAT STANDARDS APPLY TO LIGHTNING PROTECTION SYSTEMS?",
    answer:
      "Typical references include IEC 62305, IEC 62561, IEC 61643 and applicable local authority requirements. The governing requirements depend on the project and applicable authority.",
  },
  {
    question: "WHAT INFORMATION IS NEEDED FOR A LIGHTNING PROTECTION STUDY?",
    answer:
      "Typical inputs include site information, building layouts, electrical drawings, equipment details, structural information, existing protection systems and applicable project requirements.",
  },
  {
    question:
      "WHAT ARE THE TYPICAL DELIVERABLES OF A LIGHTNING PROTECTION STUDY?",
    answer:
      "Deliverables can include the study methodology, input data, risk assessment, calculations, protection requirements, identified risks, recommendations and a final technical report.",
  },
  {
    question: "HOW LONG DOES A LIGHTNING PROTECTION STUDY TAKE?",
    answer:
      "The schedule depends on project size, data availability, site access, modelling requirements and the required reporting scope. A confirmed timeline can be established after reviewing the project requirements.",
  },
  {
    question: "HOW MUCH DOES LIGHTNING PROTECTION STUDY COST IN THE UAE?",
    answer:
      "The cost depends on the size and complexity of the facility, number of structures, site requirements, engineering analysis and deliverables. A project-specific quotation is required.",
  },
  {
    question: "CAN JEF REVIEW AN EXISTING LIGHTNING PROTECTION SYSTEM?",
    answer:
      "Yes. An existing lightning protection system can be reviewed using available drawings, site observations, inspection information, test results and applicable standards.",
  },
  {
    question:
      "CAN LIGHTNING PROTECTION STUDIES BE PERFORMED FOR EXISTING FACILITIES?",
    answer:
      "Yes. Existing facilities can be assessed to identify deficiencies, evaluate existing protection arrangements and recommend appropriate improvements.",
  },
  {
    question: "CAN LIGHTNING PROTECTION STUDIES SUPPORT NEW PROJECTS?",
    answer:
      "Yes. Performing the assessment during concept, FEED or detailed design can help identify lightning-related risks before construction and installation are completed.",
  },
  {
    question: "DOES JEF PROVIDE LIGHTNING PROTECTION STUDIES ACROSS THE UAE?",
    answer:
      "Yes. JEF UAE supports projects across the United Arab Emirates and can also support wider GCC, Middle East and international project requirements subject to project scope.",
  },
  {
    question: "WHICH INDUSTRIES NEED LIGHTNING PROTECTION SYSTEMS?",
    answer:
      "Lightning protection is relevant to oil and gas, power utilities, industrial plants, manufacturing facilities, commercial buildings, infrastructure and renewable energy projects.",
  },
  {
    question: "CAN LIGHTNING PROTECTION SYSTEMS PROTECT ELECTRICAL EQUIPMENT?",
    answer:
      "A properly engineered protection system can reduce lightning-related risks to electrical and electronic equipment by providing appropriate current paths and coordinating associated protection measures.",
  },
  {
    question: "WHAT IS LIGHTNING PROTECTION RISK ASSESSMENT?",
    answer:
      "Lightning protection risk assessment evaluates the potential consequences and probability of lightning-related events to determine whether protection measures are required and what level of protection is appropriate.",
  },
  {
    question: "WHAT IS THE ROLE OF IEC 62305 IN LIGHTNING PROTECTION?",
    answer:
      "IEC 62305 provides internationally recognized principles and requirements for lightning protection, including lightning risk assessment and protection measures.",
  },
  {
    question: "WHAT IS JEF SHIELD?",
    answer:
      "JEF SHIELD is an advanced software solution for Lightning Protection Risk Assessment designed in compliance with IEC 62305 requirements.",
  },
  {
    question: "IS SITE INSPECTION REQUIRED FOR LIGHTNING PROTECTION?",
    answer:
      "It depends on the project scope. Existing installations may benefit from site inspections to verify the actual condition and configuration of lightning protection systems.",
  },
  {
    question:
      "CAN LIGHTNING PROTECTION SYSTEMS BE USED FOR OIL AND GAS FACILITIES?",
    answer:
      "Yes. Lightning protection is particularly important for oil and gas and process facilities where electrical safety, equipment protection and operational continuity are critical.",
  },
  {
    question:
      "CAN LIGHTNING PROTECTION STUDIES SUPPORT RENEWABLE ENERGY PROJECTS?",
    answer:
      "Yes. Solar PV, wind, battery storage and other renewable energy facilities can require lightning risk assessment and appropriate protection measures.",
  },
  {
    question: "WHAT RISKS CAN LIGHTNING CAUSE TO A FACILITY?",
    answer:
      "Lightning can cause structural damage, electrical equipment damage, fire hazards, system disturbances and risks to personnel if appropriate protection measures are not provided.",
  },
  {
    question:
      "CAN LIGHTNING PROTECTION STUDIES IDENTIFY EXISTING DEFICIENCIES?",
    answer:
      "Yes. Engineering assessment and site verification can identify deficiencies in existing protection arrangements and provide recommendations for corrective action.",
  },
  {
    question: "SHOULD LIGHTNING PROTECTION SYSTEMS BE INSPECTED PERIODICALLY?",
    answer:
      "Periodic inspection can help verify the condition and continued effectiveness of protection systems, particularly after modifications, construction activities or significant environmental exposure.",
  },
  {
    question:
      "CAN LIGHTNING PROTECTION STUDIES BE UPDATED AFTER FACILITY CHANGES?",
    answer:
      "Yes. Changes to structures, equipment, electrical systems, building geometry or facility use can affect the assumptions and results of an earlier assessment.",
  },
  {
    question: "HOW CAN LIGHTNING PROTECTION STUDIES REDUCE PROJECT RISK?",
    answer:
      "Early analysis reveals design conflicts, compliance gaps and lightning-related risks while there is still time to address them with less disruption and potentially lower corrective costs.",
  },
  {
    question: "DOES JEF SUPPORT EPC CONSULTANTS AND CONTRACTORS?",
    answer:
      "Yes. JEF can work with owners, developers, EPCs, consultants, OEMs and contractors as a specialist engineering partner for defined study and assessment packages.",
  },
  {
    question: "WHAT MAKES A HIGH-QUALITY LIGHTNING PROTECTION STUDY?",
    answer:
      "A high-quality study uses verified project inputs, appropriate standards, a clear methodology, suitable engineering analysis, documented assumptions, risk evaluation and practical recommendations.",
  },
  {
    question:
      "WHAT IS THE FIRST STEP TO ENGAGE JEF FOR LIGHTNING PROTECTION STUDIES?",
    answer:
      "Share the project location, objective, available drawings and information, applicable standards, expected deliverables and target schedule so the appropriate study scope can be established.",
  },
  {
    question: "WHY CHOOSE JEF FOR LIGHTNING PROTECTION STUDIES?",
    answer:
      "JEF UAE provides specialist electrical engineering expertise for lightning protection risk assessment and system studies, using project-specific engineering analysis and recognized standards.",
  },
];

export default function LightningProtectionFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#292a2c] text-white pt-32 md:pt-40">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 pb-20">
        {/* Back to Blog */}
        <Link
          href="/blog/need-for-lightning-protection-systems"
          className="text-[#ff0000] text-sm uppercase tracking-wide hover:underline"
        >
          ← BACK TO BLOG
        </Link>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-12 mb-6 tracking-wide">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl mb-10">
          Frequently asked questions about lightning protection systems,
          lightning protection studies, risk assessment, IEC standards,
          electrical safety and engineering applications.
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border border-gray-600 self-start">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-4 py-6 hover:bg-[#303133] transition-colors"
                >
                  <span className="text-sm md:text-base font-semibold pr-6">
                    {faq.question}
                  </span>

                  <span
                    className={`w-2 h-2 border-r-2 border-b-2 border-[#ff0000] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-[-135deg]" : "rotate-45"
                    }`}
                  ></span>
                </button>

                {isOpen && (
                  <div className="border-t border-gray-600 px-4 py-5">
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
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
