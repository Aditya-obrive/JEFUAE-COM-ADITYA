"use client";

import { useState } from "react";
import Link from "next/link";

const faqData = [
  {
    question: "What is power system studies?",
    answer:
      "Power System Studies refers to the engineering assessment, analysis or service used to improve electrical safety, reliability and compliance. JEF UAE applies project-specific data, recognized engineering methods and documented recommendations.",
  },
  {
    question: "Why is power system studies important?",
    answer:
      "It helps identify technical risks before they lead to unsafe conditions, equipment damage, non-compliance or costly downtime, while supporting reliable operation and informed engineering decisions.",
  },
  {
    question: "What standards apply to power system studies?",
    answer:
      "The exact requirements depend on the project. Typical references include applicable UAE/GCC grid codes, IEC/IEEE practices and project-specific utility requirements. JEF confirms the governing client, utility and authority requirements before finalizing the study basis.",
  },
  {
    question: "Does JEF provide power system studies across the UAE?",
    answer:
      "Yes. JEF UAE supports projects across the United Arab Emirates and can serve wider GCC, Middle East and international project requirements subject to scope and site needs.",
  },
  {
    question: "Which industries use power system studies?",
    answer:
      "Typical sectors include oil & gas, power utilities, manufacturing, process plants, commercial buildings, infrastructure and renewable energy.",
  },
  {
    question: "What information is needed to start power system studies?",
    answer:
      "Typical inputs include single-line diagrams, equipment data, layouts, operating scenarios, existing study reports, test data and applicable client or utility criteria.",
  },
  {
    question: "What are the typical deliverables for power system studies?",
    answer:
      "Deliverables can include assumptions and methodology, calculations or simulations, findings, risk ranking, compliance observations, engineering recommendations and a final technical report.",
  },
  {
    question: "How long does power system studies take?",
    answer:
      "Schedule depends on project size, data readiness, site access, modelling complexity and review cycles. A confirmed timeline should be issued after scope and inputs are reviewed.",
  },
  {
    question: "How much does power system studies cost in the UAE?",
    answer:
      "Pricing depends on system size, number of scenarios, site work, modelling effort and deliverables. JEF can provide a project-specific commercial proposal after reviewing the scope.",
  },
  {
    question: "Can JEF review an existing power system studies report?",
    answer:
      "Yes. A peer review can check assumptions, input data, methodology, standards, model settings, results and whether recommendations are technically practical.",
  },
  {
    question: "Can power system studies be performed for an existing facility?",
    answer:
      "Yes. Existing facilities can be assessed using available drawings, operating data, field measurements and site observations, with gaps documented before analysis.",
  },
  {
    question: "Can power system studies support a new project or expansion?",
    answer:
      "Yes. Studies are valuable during concept, FEED, detailed design, expansion and commissioning because risks can be addressed before equipment and layouts are finalized.",
  },
  {
    question: "Does JEF support EPC consultants and contractors?",
    answer:
      "Yes. JEF can work with owners, developers, EPCs, consultants, OEMs and contractors as a specialist engineering partner for defined study packages.",
  },
  {
    question:
      "How does JEF improve AEO-ready technical content for power system studies?",
    answer:
      "Use concise definitions, standards references, structured FAQs, clear methodology, quantified experience where verified, and schema markup so search and AI systems can extract reliable answers.",
  },
  {
    question: "What makes a high-quality power system studies report?",
    answer:
      "A strong report is traceable to verified inputs, states assumptions clearly, uses appropriate standards and software, explains results, prioritizes risks and gives implementable recommendations.",
  },
  {
    question: "Is site testing required for power system studies?",
    answer:
      "It depends on the scope. Some studies are primarily model-based; others benefit from field measurements or inspections to validate inputs and existing conditions.",
  },
  {
    question: "What software may be used for power system studies?",
    answer:
      "Depending on the study, engineering teams may use tools such as ETAP, DIgSILENT PowerFactory, PSS®E, PSCAD, EMTP-RV or CDEGS. The selected tool should match the technical objective.",
  },
  {
    question: "How should power system studies recommendations be prioritized?",
    answer:
      "Prioritize personnel safety and statutory compliance first, followed by system stability, asset protection, operational continuity, maintainability and cost optimization.",
  },
  {
    question: "Can JEF support renewable energy and BESS projects?",
    answer:
      "Yes. JEF's power-system capabilities are relevant to solar PV, wind, BESS, hybrid systems, green hydrogen and microgrids, including grid-integration and dynamic studies.",
  },
  {
    question: "Can JEF support oil and gas facilities?",
    answer:
      "Yes. Electrical reliability, grounding, lightning, power quality, EMI/EMC and interference risks are especially relevant to oil and gas and other process facilities.",
  },
  {
    question: "What is the first step to engage JEF for power system studies?",
    answer:
      "Share the project location, objective, available drawings/data, required standards, expected deliverables and target schedule through the JEF UAE contact page.",
  },
  {
    question: "How can power system studies reduce project risk?",
    answer:
      "Early analysis reveals design conflicts, compliance gaps and operating risks while there is still time to correct them with lower cost and less disruption.",
  },
  {
    question: "Should power system studies be updated after system changes?",
    answer:
      "Yes. Material changes in network configuration, generation, loads, protection settings, grounding, building geometry or equipment can invalidate previous assumptions.",
  },
  {
    question: "Can power system studies be used for compliance evidence?",
    answer:
      "A properly scoped study can support technical compliance documentation, but final statutory acceptance depends on the applicable authority, utility, client and project requirements.",
  },
  {
    question: "What geographic keywords should this page target?",
    answer:
      "Use natural combinations such as power system studies UAE, power system studies Abu Dhabi, power system studies Dubai, power system studies GCC and power system studies Middle East without keyword stuffing.",
  },
  {
    question: "How should JEF demonstrate expertise for power system studies?",
    answer:
      "Publish engineer-reviewed methodology, standards used, software capability, anonymized case studies, measurable project outcomes, author credentials and revision dates.",
  },
  {
    question:
      "What questions do procurement teams ask about power system studies?",
    answer:
      "Procurement teams typically ask about scope boundaries, deliverables, schedule, software, standards, site requirements, assumptions, exclusions, review cycles and commercial terms.",
  },
  {
    question:
      "What questions do engineering managers ask about power system studies?",
    answer:
      "Engineering managers focus on model accuracy, input validation, scenarios, acceptance criteria, sensitivity analysis, practical mitigation and how findings affect operations.",
  },
  {
    question:
      "How can this page win featured snippets for power system studies?",
    answer:
      "Place a 40–60 word definition directly below the H1, use question-based H2s, concise lists and tables, and ensure the FAQ answers are self-contained and technically reviewed.",
  },
  {
    question: "How can this page perform globally for power system studies?",
    answer:
      "Use one authoritative English canonical page, add market-specific proof and terminology, implement hreflang only when localized versions exist, earn engineering-industry backlinks, and keep organization facts consistent across the site.",
  },
];

export default function BlogFAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#292a2c] text-white pt-32 md:pt-40">
      {/* Header */}
      <div className="container mx-auto px-6 py-10">
        <Link
          href="/blog/power-system-studies-renewable-energy-integration-uae-middle-east"
          className="text-red-600 hover:text-white transition"
        >
          ← BACK TO BLOG
        </Link>

        <h1 className="mt-10 text-4xl md:text-6xl font-bold uppercase tracking-wide">
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <p className="mt-6 max-w-4xl text-gray-300 text-base md:text-lg">
          Frequently asked questions about power system studies, including
          standards, inputs, deliverables, applications and project
          requirements.
        </p>
      </div>

      {/* FAQ GRID */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-600 bg-[#292a2c] self-start"
            >
              {/* Question */}
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-5 text-left px-5 py-6"
                aria-expanded={openIndex === index}
              >
                <h2 className="text-base md:text-lg font-semibold uppercase tracking-wide">
                  {faq.question}
                </h2>

                <span
                  className={`w-2 h-2 border-r-2 border-b-2 border-[#ff0000] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-[-135deg]" : "rotate-45"
                  }`}
                ></span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-5 pb-6 text-gray-300 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
