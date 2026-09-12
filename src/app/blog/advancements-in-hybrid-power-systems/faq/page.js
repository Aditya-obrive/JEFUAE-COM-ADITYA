"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "WHAT ARE HYBRID POWER SYSTEMS?",
    answer:
      "Hybrid power systems combine two or more sources of electrical power, such as renewable generation, conventional generation and energy storage, to improve flexibility, reliability and system performance.",
  },
  {
    question: "WHY ARE HYBRID POWER SYSTEMS IMPORTANT?",
    answer:
      "Hybrid power systems can help improve energy reliability, integrate renewable generation, manage power demand and provide greater flexibility for different operating conditions.",
  },
  {
    question: "WHAT TYPES OF SOURCES CAN BE COMBINED IN A HYBRID POWER SYSTEM?",
    answer:
      "Hybrid systems can combine solar PV, wind generation, battery energy storage, conventional generators and other power-system resources depending on project requirements.",
  },
  {
    question: "HOW DO RENEWABLE ENERGY SOURCES WORK IN HYBRID POWER SYSTEMS?",
    answer:
      "Renewable sources such as solar and wind can be integrated with storage or conventional generation to balance variable renewable output and support reliable power delivery.",
  },
  {
    question:
      "WHAT IS THE ROLE OF BATTERY ENERGY STORAGE IN HYBRID POWER SYSTEMS?",
    answer:
      "Battery energy storage can store surplus electrical energy and provide power when required, helping manage renewable variability, peak demand and system operating conditions.",
  },
  {
    question: "WHAT ARE THE BENEFITS OF HYBRID POWER SYSTEMS?",
    answer:
      "Benefits can include improved reliability, renewable-energy integration, operational flexibility, energy management, reduced dependence on a single generation source and improved system resilience.",
  },
  {
    question: "WHAT CHALLENGES ARE ASSOCIATED WITH HYBRID POWER SYSTEMS?",
    answer:
      "Challenges can include variable renewable generation, control interactions, protection coordination, power quality, energy management, grid-code compliance and system modelling requirements.",
  },
  {
    question:
      "WHY ARE POWER SYSTEM STUDIES IMPORTANT FOR HYBRID POWER SYSTEMS?",
    answer:
      "Power system studies help evaluate system performance, identify technical risks and verify that generation, storage, protection and network equipment operate together safely and reliably.",
  },
  {
    question: "WHAT STUDIES MAY BE REQUIRED FOR A HYBRID POWER SYSTEM?",
    answer:
      "Depending on the project, studies can include load flow, short circuit, protection coordination, harmonic analysis, transient stability, dynamic studies, power quality and grid-code compliance studies.",
  },
  {
    question: "CAN HYBRID POWER SYSTEMS BE CONNECTED TO THE GRID?",
    answer:
      "Yes. Hybrid power systems can be connected to utility networks subject to the applicable grid connection requirements, protection requirements and grid-code compliance criteria.",
  },
  {
    question: "WHAT IS HYBRID POWER SYSTEM GRID INTEGRATION?",
    answer:
      "Grid integration involves evaluating how the hybrid generation and storage system interacts with the electrical network under normal, abnormal and changing operating conditions.",
  },
  {
    question: "WHAT INFORMATION IS NEEDED TO STUDY A HYBRID POWER SYSTEM?",
    answer:
      "Typical inputs include single-line diagrams, generation data, inverter models, battery information, transformer data, network parameters, protection settings, operating scenarios and applicable grid requirements.",
  },
  {
    question: "CAN JEF SUPPORT HYBRID POWER SYSTEM PROJECTS?",
    answer:
      "Yes. JEF UAE provides electrical engineering and power-system study capabilities relevant to renewable energy, battery storage, hybrid systems and grid integration projects.",
  },
  {
    question: "CAN HYBRID POWER SYSTEMS BE USED IN THE UAE?",
    answer:
      "Yes. Hybrid systems can support renewable-energy integration and reliable power supply for utility, industrial, infrastructure and other applications in the UAE.",
  },
  {
    question: "WHICH INDUSTRIES CAN USE HYBRID POWER SYSTEMS?",
    answer:
      "Applications can include utilities, oil and gas, industrial facilities, infrastructure, remote installations, renewable-energy projects and commercial facilities.",
  },
  {
    question: "WHAT IS THE ROLE OF INVERTERS IN HYBRID POWER SYSTEMS?",
    answer:
      "Inverters convert electrical energy between DC and AC and provide control functions that allow renewable generation and battery storage to interact with the electrical network.",
  },
  {
    question: "CAN HYBRID POWER SYSTEMS CAUSE POWER QUALITY ISSUES?",
    answer:
      "Depending on system design and operating conditions, inverter-based generation and storage can affect harmonics, voltage variations, power factor and other power-quality characteristics. Appropriate studies can identify these risks.",
  },
  {
    question: "HOW ARE HARMONICS ASSESSED IN HYBRID POWER SYSTEMS?",
    answer:
      "Harmonic analysis evaluates harmonic sources, network impedance, equipment characteristics and system operating conditions to determine whether harmonic levels comply with applicable requirements.",
  },
  {
    question: "IS TRANSIENT STABILITY IMPORTANT FOR HYBRID POWER SYSTEMS?",
    answer:
      "Yes. Transient and dynamic studies can evaluate how the system responds to disturbances, faults, generation changes and other network events.",
  },
  {
    question: "HOW DOES ENERGY STORAGE IMPROVE HYBRID SYSTEM OPERATION?",
    answer:
      "Energy storage can provide flexibility by absorbing surplus generation and supplying energy during periods of high demand or reduced renewable generation.",
  },
  {
    question: "CAN HYBRID POWER SYSTEMS SUPPORT MICROGRIDS?",
    answer:
      "Yes. Hybrid generation and storage are commonly suited to microgrid applications where multiple energy resources must operate together under grid-connected or islanded conditions.",
  },
  {
    question: "CAN HYBRID POWER SYSTEMS OPERATE IN ISLANDED MODE?",
    answer:
      "Some hybrid systems can operate in islanded mode when designed with suitable controls, generation resources, protection systems and energy-management strategies.",
  },
  {
    question: "WHAT IS GRID CODE COMPLIANCE FOR HYBRID POWER SYSTEMS?",
    answer:
      "Grid-code compliance evaluates whether the hybrid system meets the technical requirements established by the applicable utility or grid operator for connection and operation.",
  },
  {
    question: "HOW CAN HYBRID POWER SYSTEM STUDIES REDUCE PROJECT RISK?",
    answer:
      "Early engineering analysis can identify design conflicts, control interactions, compliance gaps and operating risks before commissioning, allowing corrective measures to be implemented more efficiently.",
  },
  {
    question: "CAN EXISTING POWER SYSTEMS BE CONVERTED TO HYBRID SYSTEMS?",
    answer:
      "Existing facilities can potentially integrate renewable generation or energy storage following an assessment of the existing network, equipment ratings, protection, operating conditions and available infrastructure.",
  },
  {
    question: "WHAT SOFTWARE MAY BE USED FOR HYBRID POWER SYSTEM STUDIES?",
    answer:
      "Depending on the study objective, engineering teams may use tools such as ETAP, DIgSILENT PowerFactory, PSS®E, PSCAD and other specialized power-system simulation software.",
  },
  {
    question:
      "WHAT ARE THE TYPICAL DELIVERABLES OF A HYBRID POWER SYSTEM STUDY?",
    answer:
      "Typical deliverables can include the study basis, input-data review, modelling methodology, simulation results, identified risks, compliance assessment, mitigation recommendations and a final technical report.",
  },
  {
    question: "HOW LONG DOES A HYBRID POWER SYSTEM STUDY TAKE?",
    answer:
      "The schedule depends on system size, model complexity, availability of project data, number of operating scenarios and required studies. A project-specific schedule can be established after reviewing the scope.",
  },
  {
    question: "WHAT IS THE FIRST STEP TO START A HYBRID POWER SYSTEM STUDY?",
    answer:
      "The first step is to define the project objective, system configuration, generation and storage technologies, grid connection requirements, available technical data and required study deliverables.",
  },
];

export default function HybridPowerSystemsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#292a2c] text-white pt-32 md:pt-40">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 pb-20">
        {/* Back to Blog */}
        <Link
          href="/blog/advancements-in-hybrid-power-systems"
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
          Frequently asked questions about hybrid power systems, renewable
          energy integration, battery energy storage, grid integration,
          power-system studies and electrical engineering applications.
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
                    {faq.question.charAt(0) +
                      faq.question.slice(1).toLowerCase()}
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
