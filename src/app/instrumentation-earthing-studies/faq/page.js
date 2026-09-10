"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What is instrumentation earthing studies?",
    answer:
      "Instrumentation Earthing Studies refers to the engineering assessment, analysis or service used to improve electrical safety, reliability and compliance. JEF UAE applies project-specific data, recognized engineering methods and documented recommendations.",
  },
  {
    question: "Why is instrumentation earthing studies important?",
    answer:
      "It helps identify technical risks before they lead to unsafe conditions, equipment damage, non-compliance or costly downtime, while supporting reliable operation and informed engineering decisions.",
  },
  {
    question: "What standards apply to instrumentation earthing studies?",
    answer:
      "The exact requirements depend on the project. Typical references include IEEE 80, IEEE 81, IEEE 142/3003 series, IEC 60364 and applicable UAE/GCC requirements. JEF confirms the governing client, utility and authority requirements before finalizing the study basis.",
  },
  {
    question:
      "Does JEF provide instrumentation earthing studies across the UAE?",
    answer:
      "Yes. JEF UAE supports projects across the United Arab Emirates and can serve wider GCC, Middle East and international project requirements subject to scope and site needs.",
  },
  {
    question: "Which industries use instrumentation earthing studies?",
    answer:
      "Typical sectors include oil & gas, power utilities, manufacturing, process plants, commercial buildings, infrastructure and renewable energy.",
  },
  {
    question:
      "What information is needed to start instrumentation earthing studies?",
    answer:
      "Typical inputs include single-line diagrams, equipment data, layouts, operating scenarios, existing study reports, test data and applicable client or utility criteria.",
  },
  {
    question:
      "What are the typical deliverables for instrumentation earthing studies?",
    answer:
      "Deliverables can include assumptions and methodology, calculations or simulations, findings, risk ranking, compliance observations, engineering recommendations and a final technical report.",
  },
  {
    question: "How long does instrumentation earthing studies take?",
    answer:
      "Schedule depends on project size, data readiness, site access, modelling complexity and review cycles. A confirmed timeline should be issued after scope and inputs are reviewed.",
  },
  {
    question: "How much does instrumentation earthing studies cost in the UAE?",
    answer:
      "Pricing depends on system size, number of scenarios, site work, modelling effort and deliverables. JEF can provide a project-specific commercial proposal after reviewing the scope.",
  },
  {
    question:
      "Can JEF review an existing instrumentation earthing studies report?",
    answer:
      "Yes. A peer review can check assumptions, input data, methodology, standards, model settings, results and whether recommendations are technically practical.",
  },
  {
    question:
      "Can instrumentation earthing studies be performed for an existing facility?",
    answer:
      "Yes. Existing facilities can be assessed using available drawings, operating data, field measurements and site observations, with gaps documented before analysis.",
  },
  {
    question:
      "Can instrumentation earthing studies support a new project or expansion?",
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
      "How does JEF improve AEO-ready technical content for instrumentation earthing studies?",
    answer:
      "Use concise definitions, standards references, structured FAQs, clear methodology, quantified experience where verified, and schema markup so search and AI systems can extract reliable answers.",
  },
  {
    question:
      "What makes a high-quality instrumentation earthing studies report?",
    answer:
      "A strong report is traceable to verified inputs, states assumptions clearly, uses appropriate standards and software, explains results, prioritizes risks and gives implementable recommendations.",
  },
  {
    question: "Is site testing required for instrumentation earthing studies?",
    answer:
      "It depends on the scope. Some studies are primarily model-based; others benefit from field measurements or inspections to validate inputs and existing conditions.",
  },
  {
    question: "What software may be used for instrumentation earthing studies?",
    answer:
      "Depending on the study, engineering teams may use tools such as ETAP, DIgSILENT PowerFactory, PSS®E, PSCAD, EMTP-RV or CDEGS. The selected tool should match the technical objective.",
  },
  {
    question:
      "How should instrumentation earthing studies recommendations be prioritized?",
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
    question:
      "What is the first step to engage JEF for instrumentation earthing studies?",
    answer:
      "Share the project location, objective, available drawings/data, required standards, expected deliverables and target schedule through the JEF UAE contact page.",
  },
  {
    question: "How can instrumentation earthing studies reduce project risk?",
    answer:
      "Early analysis reveals design conflicts, compliance gaps and operating risks while there is still time to correct them with lower cost and less disruption.",
  },
  {
    question:
      "Should instrumentation earthing studies be updated after system changes?",
    answer:
      "Yes. Material changes in network configuration, generation, loads, protection settings, grounding, building geometry or equipment can invalidate previous assumptions.",
  },
  {
    question:
      "Can instrumentation earthing studies be used for compliance evidence?",
    answer:
      "A properly scoped study can support technical compliance documentation, but final statutory acceptance depends on the applicable authority, utility, client and project requirements.",
  },
  {
    question: "What geographic keywords should this page target?",
    answer:
      "Use natural combinations such as instrumentation earthing studies UAE, instrumentation earthing studies Abu Dhabi, instrumentation earthing studies Dubai, instrumentation earthing studies GCC and instrumentation earthing studies Middle East without keyword stuffing.",
  },
  {
    question:
      "How should JEF demonstrate expertise for instrumentation earthing studies?",
    answer:
      "Publish engineer-reviewed methodology, standards used, software capability, anonymized case studies, measurable project outcomes, author credentials and revision dates.",
  },
  {
    question:
      "What questions do procurement teams ask about instrumentation earthing studies?",
    answer:
      "Procurement teams typically ask about scope boundaries, deliverables, schedule, software, standards, site requirements, assumptions, exclusions, review cycles and commercial terms.",
  },
  {
    question:
      "What questions do engineering managers ask about instrumentation earthing studies?",
    answer:
      "Engineering managers focus on model accuracy, input validation, scenarios, acceptance criteria, sensitivity analysis, practical mitigation and how findings affect operations.",
  },
  {
    question:
      "How can this page win featured snippets for instrumentation earthing studies?",
    answer:
      "Place a 40–60 word definition directly below the H1, use question-based H2s, concise lists and tables, and ensure the FAQ answers are self-contained and technically reviewed.",
  },
  {
    question:
      "How can this page perform globally for instrumentation earthing studies?",
    answer:
      "Use one authoritative English canonical page, add market-specific proof and terminology, implement hreflang only when localized versions exist, earn engineering-industry backlinks, and keep organization facts consistent across the site.",
  },
];

export default function InstrumentationEarthingFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#292a2c] text-white">
      {/* Breadcrumb */}
      <div className="bg-[#1d1d1d] px-6 md:px-16 lg:px-32 py-5">
        <div className="flex items-center gap-3 text-xs tracking-[2px] uppercase">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            Home
          </Link>

          <span className="text-gray-500">&gt;</span>

          <Link
            href="/instrumentation-earthing-studies"
            className="text-gray-400 hover:text-white transition"
          >
            Instrumentation Earthing Studies
          </Link>

          <span className="text-gray-500">&gt;</span>

          <span className="text-[#FF0000]">FAQ</span>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="px-6 md:px-16 lg:px-32 py-20">
        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-[2px] mb-14">
          INSTRUMENTATION EARTHING STUDIES — FREQUENTLY ASKED QUESTIONS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-[#202020] overflow-hidden border border-[#292929]"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleClick(index)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[90px] px-6 py-5 flex items-center justify-between text-left hover:bg-[#252525] transition"
                >
                  <span className="text-sm md:text-base text-gray-300 pr-4">
                    {faq.question}
                  </span>

                  <span className="text-[#FF0000] text-2xl ml-4 flex-shrink-0">
                    {isOpen ? "⌃" : "⌄"}
                  </span>
                </button>

                {/* Answer */}
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

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/instrumentation-earthing-studies"
            className="inline-flex items-center gap-3 px-7 py-3 border border-white rounded-full text-sm uppercase tracking-wider hover:bg-[#FF0000] hover:border-[#FF0000] transition"
          >
            ← Back to Instrumentation Earthing Studies
          </Link>
        </div>
      </section>
    </main>
  );
}
