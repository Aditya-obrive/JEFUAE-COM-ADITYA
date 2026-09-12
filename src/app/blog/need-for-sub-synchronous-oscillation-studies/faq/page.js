"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "WHAT IS SUB-SYNCHRONOUS OSCILLATION (SSO)?",
    answer:
      "Sub-Synchronous Oscillation (SSO) refers to destabilizing oscillations that occur below the grid's fundamental frequency of 50/60 Hz. These oscillations can affect the stability and reliability of power systems.",
  },
  {
    question: "WHY ARE SSO STUDIES IMPORTANT FOR INVERTER-BASED POWER PLANTS?",
    answer:
      "SSO studies are important because inverter-based power plants use power electronics and fast digital controls that can introduce unintended resonances and interactions with the electrical grid.",
  },
  {
    question: "WHICH TYPES OF POWER PLANTS CAN EXPERIENCE SSO RISKS?",
    answer:
      "SSO risks can be relevant to inverter-based power plants such as solar PV, wind power and battery energy storage systems.",
  },
  {
    question: "HOW DO INVERTER-BASED POWER PLANTS CREATE SSO RISKS?",
    answer:
      "Inverter-based power plants use controls such as phase-locked loops and current regulators. These fast controls can interact with grid components, capacitors or weak networks and may create unintended resonances.",
  },
  {
    question: "WHAT IS THE ROLE OF POWER ELECTRONIC CONTROLS IN SSO?",
    answer:
      "Power electronic controls can influence the dynamic response of inverter-based resources. Their interaction with the network can amplify sub-synchronous frequencies or create resonance conditions.",
  },
  {
    question: "HOW CAN MULTIPLE INVERTER-BASED PLANTS INTERACT?",
    answer:
      "Multiple inverter-based plants can interact through the electrical network and create complex or overlapping resonance modes, particularly when connected to low-inertia or weak-grid conditions.",
  },
  {
    question: "WHAT IS A WEAK GRID?",
    answer:
      "A weak grid is a power-system condition in which the electrical network has relatively low strength at the point of connection. Such conditions can increase the sensitivity of inverter controls to grid disturbances and interactions.",
  },
  {
    question: "WHY DOES REDUCED DAMPING MATTER FOR SSO?",
    answer:
      "Inverter-based resources do not provide the same inherent rotational damping as traditional synchronous generators. Reduced damping can make the power system more vulnerable to oscillatory behavior.",
  },
  {
    question: "HOW DOES GRID TOPOLOGY AFFECT SSO?",
    answer:
      "Changes in grid topology can change the electrical impedance and resonance characteristics of the network. High penetration of inverter-based resources can therefore create new pathways for sub-synchronous interactions.",
  },
  {
    question: "CAN SOLAR PV PLANTS BE AFFECTED BY SSO?",
    answer:
      "Yes. Solar PV plants use power electronic inverters and can therefore be involved in sub-synchronous interactions depending on the inverter controls and the characteristics of the connected electrical network.",
  },
  {
    question: "CAN WIND POWER PLANTS BE AFFECTED BY SSO?",
    answer:
      "Yes. Wind power plants can experience SSO-related risks, particularly when power electronic controls interact with network characteristics or nearby system components.",
  },
  {
    question: "CAN BATTERY ENERGY STORAGE SYSTEMS BE INVOLVED IN SSO?",
    answer:
      "Yes. Battery energy storage systems use power electronic converters and controls, which means their interaction with the electrical network can be considered in SSO assessments.",
  },
  {
    question: "WHAT ARE CONTROL INTERACTION RISKS?",
    answer:
      "Control interaction risks occur when the control systems of inverter-based resources interact with electrical network characteristics and amplify or sustain oscillatory behavior.",
  },
  {
    question: "CAN SSO AFFECT NEARBY SYNCHRONOUS GENERATORS?",
    answer:
      "Yes. SSO interactions involving inverter-based resources can potentially affect nearby synchronous-machine torsional modes depending on the network configuration and operating conditions.",
  },
  {
    question: "WHAT CAN HAPPEN IF SSO IS NOT IDENTIFIED?",
    answer:
      "Unchecked SSO can contribute to equipment damage, protection misoperation and, in severe circumstances, wider power-system disturbances or blackouts.",
  },
  {
    question: "HOW DO SSO STUDIES HELP POWER SYSTEM RELIABILITY?",
    answer:
      "SSO studies help identify potentially unstable interactions before they become operational problems. The results can support inverter design, grid-code requirements and operating practices.",
  },
  {
    question: "WHEN SHOULD AN SSO STUDY BE PERFORMED?",
    answer:
      "SSO assessment can be considered during the planning, design and grid-integration stages of inverter-based power projects, particularly where significant renewable or storage capacity is being connected.",
  },
  {
    question: "CAN SSO STUDIES BE PERFORMED FOR EXISTING POWER PLANTS?",
    answer:
      "Yes. SSO assessments can be performed for existing plants to investigate possible steady-state, dynamic or electromagnetic interactions and to evaluate system behavior under relevant operating conditions.",
  },
  {
    question: "CAN SSO STUDIES SUPPORT NEW RENEWABLE ENERGY PROJECTS?",
    answer:
      "Yes. SSO studies can support renewable projects by identifying potential oscillatory interactions associated with inverter controls and the connected grid before commissioning or operation.",
  },
  {
    question: "WHAT INFORMATION IS NEEDED FOR AN SSO STUDY?",
    answer:
      "The required information depends on the study scope but can include the electrical network model, inverter or plant controller models, operating scenarios, network configuration and relevant equipment parameters.",
  },
  {
    question: "WHY ARE INVERTER CONTROL MODELS IMPORTANT?",
    answer:
      "Accurate inverter and controller models are important because SSO behavior can depend strongly on the characteristics and interactions of power-electronic controls.",
  },
  {
    question: "HOW CAN GRID-FOLLOWING INVERTERS CONTRIBUTE TO SSO RISKS?",
    answer:
      "Grid-following inverter controls can interact with network conditions and nearby electrical equipment. Under certain conditions these interactions can contribute to sub-synchronous oscillatory behavior.",
  },
  {
    question: "HOW DOES RENEWABLE ENERGY PENETRATION AFFECT SSO?",
    answer:
      "Increasing renewable penetration changes the composition and electrical characteristics of the grid. Higher inverter-based penetration can create additional interaction paths and increase the importance of SSO assessment.",
  },
  {
    question: "WHAT IS THE RELATIONSHIP BETWEEN SSO AND GRID STABILITY?",
    answer:
      "SSO is a power-system stability concern because poorly damped sub-synchronous oscillations can grow or persist and negatively affect electrical equipment, controls and system operation.",
  },
  {
    question: "CAN SSO STUDIES SUPPORT GRID CODE REQUIREMENTS?",
    answer:
      "Yes. SSO studies can provide technical information that supports inverter design requirements, grid-code development and verification of acceptable dynamic performance.",
  },
  {
    question: "CAN SSO STUDIES HELP WITH INVERTER DESIGN?",
    answer:
      "Yes. Study results can identify problematic control interactions and help engineers develop more robust inverter control strategies and operating settings.",
  },
  {
    question: "CAN SSO STUDIES HELP DEFINE OPERATING PRACTICES?",
    answer:
      "Yes. SSO assessments can identify operating conditions associated with increased oscillatory risk and can therefore support appropriate operating and mitigation practices.",
  },
  {
    question: "WHAT SOFTWARE CAN BE USED FOR POWER SYSTEM AND SSO STUDIES?",
    answer:
      "The appropriate software depends on the technical objective and modelling requirements. JEF states that it has capabilities for steady-state, dynamic, electromagnetic transient and harmonic studies.",
  },
  {
    question: "DOES JEF SUPPORT SSO AND ADVANCED POWER SYSTEM STUDIES?",
    answer:
      "JEF states that it can study steady-state, dynamic, electromagnetic transient and harmonic issues in new or existing plants. For an SSO project, the exact scope and modelling requirements should be confirmed with JEF.",
  },
  {
    question: "HOW CAN I CONTACT JEF FOR AN SSO STUDY?",
    answer:
      "For an SSO study, project information and the required scope can be discussed directly with JEF. The published SSO article directs readers to get in touch with JEF for further details.",
  },
];

export default function SubSynchronousOscillationFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#292a2c] text-white pt-32 md:pt-40">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 pb-20">
        {/* Back to Blog */}
        <Link
          href="/blog/need-for-sub-synchronous-oscillation-studies"
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
          Frequently asked questions about sub-synchronous oscillation studies,
          inverter-based power plants, renewable energy integration and
          power-system stability.
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
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full min-h-[90px] px-6 py-5 flex items-center justify-between text-left hover:bg-[#252525] transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base text-gray-300 pr-4">
                    {faq.question.charAt(0) +
                      faq.question.slice(1).toLowerCase()}
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
