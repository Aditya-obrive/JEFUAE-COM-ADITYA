"use client";

import { useState } from "react";
import Link from "next/link";

const faqData = [
  {
    question: "What are electromagnetic transient studies?",
    answer:
      "Electromagnetic transient studies are engineering studies used to evaluate fast electrical transients and switching events in power systems. They help assess system behaviour during events such as switching, energization, faults, lightning-related disturbances and other transient conditions.",
  },
  {
    question:
      "Why are electromagnetic transient studies important for renewable energy projects?",
    answer:
      "Electromagnetic transient studies help evaluate transient behaviour in renewable energy systems and their connection to the electrical grid. They can support assessment of switching events, overvoltages, equipment stresses and grid integration requirements.",
  },
  {
    question: "What types of electromagnetic transient studies are performed?",
    answer:
      "Typical studies can include insulation coordination, temporary overvoltage studies, switching overvoltage studies, lightning overvoltage studies, ferro-resonance studies, TRV/RRRV studies, transformer and cable energization or de-energization studies, transmission line reclosing studies and VFTO analysis.",
  },
  {
    question:
      "What information is required to start an electromagnetic transient study?",
    answer:
      "The required information depends on the project scope. Typical inputs include single-line diagrams, equipment data, network configuration, operating scenarios, transformer and cable information, protection details, switching conditions and applicable client or utility requirements.",
  },
  {
    question:
      "What are the typical deliverables of an electromagnetic transient study?",
    answer:
      "Typical deliverables include the study model, defined study scenarios, simulation results, technical analysis, identified risks or transient conditions, compliance assessment and engineering recommendations. The exact deliverables depend on the agreed project scope.",
  },
  {
    question: "Which standards can apply to electromagnetic transient studies?",
    answer:
      "The applicable standards depend on the project, equipment and governing requirements. Relevant IEC, IEEE, utility, client and project-specific engineering requirements may be considered when defining the study basis.",
  },
  {
    question:
      "Can electromagnetic transient studies be used for renewable energy grid integration?",
    answer:
      "Yes. Electromagnetic transient studies can support the technical assessment of renewable energy projects connected to electrical networks by evaluating transient conditions and system interactions associated with grid integration.",
  },
  {
    question:
      "Can JEF UAE perform electromagnetic transient studies for industrial projects?",
    answer:
      "JEF UAE provides electrical engineering study services for industrial, utility, infrastructure and energy projects. The applicable scope, inputs, modelling requirements and deliverables are determined according to the specific project requirements.",
  },
  {
    question: "How long does an electromagnetic transient study take?",
    answer:
      "The project duration depends on the system size, available input data, number of study scenarios, modelling requirements and agreed deliverables. A project-specific schedule can be established after reviewing the project scope and available information.",
  },
  {
    question:
      "How can I request an electromagnetic transient study from JEF UAE?",
    answer:
      "You can contact JEF UAE and provide the project scope, system information and required study objectives. JEF can then review the requirements and define the appropriate technical scope and deliverables.",
  },
];

export default function BlogFAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#292a2c] text-white pt-32 md:pt-40">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 pb-20">
        {/* Back to Blog */}
        <Link
          href="/blog/advanced-electromagnetic-transient-studies-renewable-grid-uae"
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
          Frequently asked questions about electromagnetic transient studies,
          renewable energy grid integration, technical requirements,
          deliverables and project applications.
        </p>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#202020] overflow-hidden border border-[#292929]"
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleClick(index)}
                  className="w-full min-h-[90px] px-6 py-5 flex items-center justify-between text-left hover:bg-[#252525] transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base text-gray-300 pr-4">
                    {faq.question}
                  </span>

                  {/* Red CSS Chevron */}
                  <span
                    className={`w-2 h-2 border-r-2 border-b-2 border-[#ff0000] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-[-135deg]" : "rotate-45"
                    }`}
                  ></span>
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
      </div>
    </main>
  );
}
