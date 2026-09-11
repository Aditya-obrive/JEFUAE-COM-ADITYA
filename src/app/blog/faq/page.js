"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What is electrical engineering blog?",
    answer:
      "Electrical Engineering Blog refers to the engineering assessment, analysis or service used to improve electrical safety, reliability and compliance. JEF UAE applies project-specific data, recognized engineering methods and documented recommendations.",
  },
  {
    question: "Why is electrical engineering blog important?",
    answer:
      "It helps identify technical risks before they lead to unsafe conditions, equipment damage, non-compliance or costly downtime, while supporting reliable operation and informed engineering decisions.",
  },
  {
    question: "What standards apply to electrical engineering blog?",
    answer:
      "The exact requirements depend on the project. Typical references include applicable IEC, IEEE, UAE/GCC utility, HSE and project-specific engineering requirements. JEF confirms the governing client, utility and authority requirements before finalizing the study basis.",
  },
  {
    question: "Does JEF provide electrical engineering blog across the UAE?",
    answer:
      "Yes. JEF UAE supports projects across the United Arab Emirates and can serve wider GCC, Middle East and international project requirements subject to scope and site needs.",
  },
  {
    question: "Which industries use electrical engineering blog?",
    answer:
      "Typical sectors include oil & gas, power utilities, manufacturing, process plants, commercial buildings, infrastructure and renewable energy.",
  },
  {
    question:
      "What information is needed to start electrical engineering blog?",
    answer:
      "Typical inputs include single-line diagrams, equipment data, layouts, operating scenarios, existing study reports, test data and applicable client or utility criteria.",
  },
  {
    question:
      "What are the typical deliverables for electrical engineering blog?",
    answer:
      "Deliverables can include assumptions and methodology, calculations or simulations, findings, risk ranking, compliance observations, engineering recommendations and a final technical report.",
  },
  {
    question: "How long does electrical engineering blog take?",
    answer:
      "Schedule depends on project size, data readiness, site access, modelling complexity and review cycles. A confirmed timeline should be issued after scope and inputs are reviewed.",
  },
  {
    question: "How much does electrical engineering blog cost in the UAE?",
    answer:
      "Pricing depends on system size, number of scenarios, site work, modelling effort and deliverables. JEF can provide a project-specific commercial proposal after reviewing the scope.",
  },
  {
    question: "Can JEF review an existing electrical engineering blog report?",
    answer:
      "Yes. A peer review can check assumptions, input data, methodology, standards, model settings, results and whether recommendations are technically practical.",
  },
  {
    question:
      "Can electrical engineering blog be performed for an existing facility?",
    answer:
      "Yes. Existing facilities can be assessed using available drawings, operating data, field measurements and site observations, with gaps documented before analysis.",
  },
  {
    question:
      "Can electrical engineering blog support a new project or expansion?",
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
      "How does JEF improve AEO-ready technical content for electrical engineering blog?",
    answer:
      "Use concise definitions, standards references, structured FAQs, clear methodology, quantified experience where verified, and schema markup so search and AI systems can extract reliable answers.",
  },
  {
    question: "What makes a high-quality electrical engineering blog report?",
    answer:
      "A strong report is traceable to verified inputs, states assumptions clearly, uses appropriate standards and software, explains results, prioritizes risks and gives implementable recommendations.",
  },
  {
    question: "Is site testing required for electrical engineering blog?",
    answer:
      "It depends on the scope. Some studies are primarily model-based; others benefit from field measurements or inspections to validate inputs and existing conditions.",
  },
  {
    question: "What software may be used for electrical engineering blog?",
    answer:
      "Depending on the study, engineering teams may use tools such as ETAP, DIgSILENT PowerFactory, PSS®E, PSCAD, EMTP-RV or CDEGS. The selected tool should match the technical objective.",
  },
  {
    question:
      "How should electrical engineering blog recommendations be prioritized?",
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
      "What is the first step to engage JEF for electrical engineering blog?",
    answer:
      "Share the project location, objective, available drawings/data, required standards, expected deliverables and target schedule through the JEF UAE contact page.",
  },
  {
    question: "How can electrical engineering blog reduce project risk?",
    answer:
      "Early analysis reveals design conflicts, compliance gaps and operating risks while there is still time to correct them with lower cost and less disruption.",
  },
  {
    question:
      "Should electrical engineering blog be updated after system changes?",
    answer:
      "Yes. Material changes in network configuration, generation, loads, protection settings, grounding, building geometry or equipment can invalidate previous assumptions.",
  },
  {
    question:
      "Can electrical engineering blog be used for compliance evidence?",
    answer:
      "A properly scoped study can support technical compliance documentation, but final statutory acceptance depends on the applicable authority, utility, client and project requirements.",
  },
  {
    question: "What geographic keywords should this page target?",
    answer:
      "Use natural combinations such as electrical engineering blog UAE, electrical engineering blog Abu Dhabi, electrical engineering blog Dubai, electrical engineering blog GCC and electrical engineering blog Middle East without keyword stuffing.",
  },
  {
    question:
      "How should JEF demonstrate expertise for electrical engineering blog?",
    answer:
      "Publish engineer-reviewed methodology, standards used, software capability, anonymized case studies, measurable project outcomes, author credentials and revision dates.",
  },
  {
    question:
      "What questions do procurement teams ask about electrical engineering blog?",
    answer:
      "Procurement teams typically ask about scope boundaries, deliverables, schedule, software, standards, site requirements, assumptions, exclusions, review cycles and commercial terms.",
  },
  {
    question:
      "What questions do engineering managers ask about electrical engineering blog?",
    answer:
      "Engineering managers focus on model accuracy, input validation, scenarios, acceptance criteria, sensitivity analysis, practical mitigation and how findings affect operations.",
  },
  {
    question:
      "How can this page win featured snippets for electrical engineering blog?",
    answer:
      "Place a 40–60 word definition directly below the H1, use question-based H2s, concise lists and tables, and ensure the FAQ answers are self-contained and technically reviewed.",
  },
  {
    question:
      "How can this page perform globally for electrical engineering blog?",
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
    <main className="min-h-screen bg-[#292a2c] text-white pt-32 md:pt-40 pb-20">
      {/* Breadcrumb */}
      <div className="mx-auto w-[90%] max-w-7xl mb-10">
        <div className="flex items-center gap-2 text-sm tracking-wider text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>

          <span>/</span>

          <Link href="/blog" className="hover:text-white transition-colors">
            BLOG
          </Link>

          <span>/</span>

          <span className="text-white">FAQ</span>
        </div>
      </div>

      {/* Heading */}
      <section className="mx-auto w-[90%] max-w-7xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[3px] uppercase leading-tight">
            BLOG FAQ
          </h1>

          <div className="mt-6 w-20 h-1 bg-[#FF0000]"></div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-600 bg-[#292a2c] overflow-hidden"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 text-left px-5 py-5 md:px-6 md:py-6 hover:bg-[#333436] transition-colors duration-300"
                >
                  <span className="text-base md:text-lg font-medium tracking-wide leading-relaxed">
                    {faq.question}
                  </span>

                  {/* Red Chevron */}
                  <span
                    className="
                      shrink-0
                      w-2
                      h-2
                      border-r-2
                      border-b-2
                      border-[#FF0000]
                      transition-transform
                      duration-300
                    "
                    style={{
                      transform: isOpen ? "rotate(-135deg)" : "rotate(45deg)",
                    }}
                  ></span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-gray-700 px-5 py-5 md:px-6 md:py-6">
                      <p className="text-gray-300 text-sm md:text-base leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back Link */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-[#FF0000] hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm md:text-base"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
