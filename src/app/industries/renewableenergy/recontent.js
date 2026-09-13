'use client';

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import ContactUs from '@/components/ContactUs'



gsap.registerPlugin(ScrollTrigger);

function RenewableEnergyResource() {

    useEffect(() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            document.querySelectorAll("video").forEach(video => {
                video.play();
            });
        }
    }, []);



    // Our Services Animation

    useEffect(() => {
        gsap.fromTo(
            gsap.utils.toArray('.Y-axis-Service-anm'),
            { opacity: 0, y: 100 },
            {
                y: 0,
                opacity: 1,
                duration: 1.1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '.circle-slider',
                    start: 'top 60%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);




    // Key Components 

    useEffect(() => {
        gsap.fromTo(
            gsap.utils.toArray('.Y-axis-card-anm'),
            { opacity: 0, y: 100 },
            {
                y: 0,
                opacity: 1,
                duration: 1.1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: '.card-slider',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    useEffect(() => {

        gsap.utils.toArray('.Y-axis-text').forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, y: 50 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    // Segments

    useEffect(() => {
        gsap.fromTo(
            gsap.utils.toArray('.Y-axis-Segments-anm'),
            { opacity: 0, y: 400 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.07,
                scrollTrigger: {
                    trigger: '.circle-slider',
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            gsap.utils.toArray('.Y-axis-Segments-anmMob'),
            { opacity: 0, y: 400 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.08,
                scrollTrigger: {
                    trigger: '.circle-sliderMob',
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);


    const services = useMemo(() => [
        { image: '', text: '', data: [], path: '' },
        { image: '', text: '', data: [], path: '' },
        { image: '', text: '', data: [], path: '' },
        { image: './HomePageImg/Earthing Studies 2.png', text: 'Earthing studies', data: [{ label: 'Total Projects', value: 165 }, { label: 'Middle East', value: 42 }], path: '/earthing-studies' },
        { image: './HomePageImg/Lightning Protection 2.png', text: 'Lightning protection system studies', data: [{ label: 'Total Projects', value: 233 }, { label: 'Middle East', value: 38 }], path: '/lightning-protection-studies' },
        { image: './HomePageImg/Power System Studies 2.png', text: 'Power system studies', data: [{ label: 'Total Projects', value: 74 }, { label: 'Middle East', value: 16 }], path: '/power-system-studies' },
        { image: '', text: '', data: [], path: '' },
        { image: '', text: '', data: [], path: '' },
        { image: '', text: '', data: [], path: '' },
        { image: '', text: '', data: [], path: '' },
        { image: '', text: '', data: [], path: '' },
        { image: '', text: '', data: [], path: '' },
        { image: '', text: '', data: [], path: '' },
        { image: './HomePageImg/Power Quality and Root cause Analysis 2.png', text: 'Power quality & root cause analysis', data: [{ label: 'Total Projects', value: 66 }, { label: 'Middle East', value: 30 }], path: '/power-quality-studies' },
        { image: '/HomePageImg/Instrumentation Earthing 2.png', text: 'Instrumentation earthing', data: [{ label: 'Total Projects', value: 32 }, { label: 'Middle East', value: "08" }], path: '/instrumentation-earthing-studies' },
        { image: '', text: '', data: [], path: '' },
        { image: '', text: '', data: [], path: '' },
        { image: '', text: '', data: [], path: '' },
        { image: './HomePageImg/Emi Emc 2.jpg', text: 'EMI EMC', data: [{ label: 'Total Projects', value: 96 }, { label: 'Middle East', value: "25" }], path: '/emi-emc' },
    ], []);


    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState('');
    const serviceRefs = useRef([]);
    const imgRef = useRef(null);

    useEffect(() => {
        const img = imgRef.current;
        if (img) {
            gsap.fromTo(img,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 2.5,
                    ease: 'power2.inOut'
                }
            );
        }
    }, [imgRef]);

    const handleMouseEnter = (index, image) => {
        setHoveredIndex(index);
        setBackgroundImage(image);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setBackgroundImage('');
    };

    useEffect(() => {
        serviceRefs.current = serviceRefs.current.slice(0, services.length);
    }, [services]);

    useEffect(() => {
        serviceRefs.current.forEach((ref, index) => {
            if (ref) {
                if (index === hoveredIndex && services[index]?.text !== '') {
                    gsap.to(ref, { scale: 1.3, opacity: 1, duration: 0.2, ease: 'power2.inOut' });
                } else {
                    gsap.to(ref, {
                        scale: hoveredIndex !== null ? 0.9 : 1,
                        opacity: hoveredIndex !== null ? 0.5 : 1,
                        // border: hoveredIndex !== null && services[index]?.text === '' ? '1px solid white' : '',
                        backgroundColor: hoveredIndex !== null && services[index]?.text === '' ? 'transparent' : '',
                        duration: 0.2,
                        ease: 'power2.inOut'
                    });
                }
            }
        });
    }, [hoveredIndex, services]);


    // ContactUs Section

    const inputFields = [
        { label: 'Name', type: 'text' },
        { label: 'Email', type: 'email' },
        { label: 'Mobile Number', type: 'tel' },
    ];

    function FormInput({ label, type }) {
        const id = label.toLowerCase().replace(' ', '-');

        return (
            <div className="mb-6">
                <label htmlFor={id} className="sr-only">{label}</label>
                <input
                    type={type}
                    id={id}
                    name={id}
                    placeholder={label}
                    className="overflow-hidden Y-axis-text px-5 py-3 w-full max-w-[380px] bg-white rounded-3xl border border-solid border-neutral-200"
                    required
                />
            </div>
        );
    }

    return (
        <>
            <section className="flex h-[520px] overflow-hidden flex-col text-4xl font-bold tracking-wider text-white lg:h-[650px] lg:text-5xl">
                <div className="relative flex h-full flex-col max-md:text-4xl">
                    <div className="">
                        <video autoPlay loop muted playsInline className="absolute size-full object-cover" >
                            <source src="../IndustriesPage/REI.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h1 className="absolute bottom-8 left-6 right-6 z-10 max-w-5xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:left-20 lg:right-20 lg:text-6xl">
                            Renewable Energy Grid Studies
                        </h1>
                    </div>
                </div>
            </section>



            {/* Navigated Section */}

            <section>
                < Navigation />
            </section>


            {/*  */}

            <section className="flex min-h-[452px] items-center bg-[#f1f2f4] px-[5%] py-20 text-[#171717] md:py-24">
                <main className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
                    <header className="flex w-full flex-col items-center text-2xl font-semibold uppercase tracking-[2.06px] max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="../AboutUs/RenewableEnergy.png"
                            alt="renewable energy grid studies engineering study by JEF UAE"
                            title="Renewable Energy Grid Studies — JEF UAE"
                            className="object-cover self-center max-w-full aspect-square w-20"
                        />
                        <p className="mt-16 self-center max-w-2xl font-semibold leading-[1.35] max-md:mt-10 max-md:max-w-full">
                            Optimising Renewable Energy Systems with Comprehensive Engineering Solutions
                        </p>
                    </header>
                </main>
            </section>

            {false && <section className="bg-[#111111] px-[7%] py-16 text-white">
                <div>
                {true && (
                    <div>
                <h2 id="renewable-definition" className="scroll-mt-8 text-3xl font-semibold text-[#FF0000]">What Is Renewable Energy Grid Studies?</h2>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <article>
                        <h3 className="text-xl font-semibold">Project Objectives</h3>
                        <h4 className="mt-4 text-base font-semibold">Scope Definition</h4>
                        <h5 className="mt-2 text-sm font-semibold">Drawings &amp; SLDs</h5>
                        <h6 className="mt-1 text-xs font-medium">Input File Naming</h6>
                        <p className="mt-2 text-sm leading-6">The study scope defines the network boundary, renewable assets, operating modes and technical questions to be answered.</p>
                    </article>
                    <article>
                        <h3 className="text-xl font-semibold">Required Input Data</h3>
                        <h4 className="mt-4 text-base font-semibold">Data Validation</h4>
                        <h5 className="mt-2 text-sm font-semibold">Equipment Data</h5>
                        <h6 className="mt-1 text-xs font-medium">Model Version</h6>
                        <p className="mt-2 text-sm leading-6">Validated single-line diagrams, equipment data, layouts and operating records create a traceable basis for analysis.</p>
                    </article>
                    <article>
                        <h3 className="text-xl font-semibold">Engineering Methodology</h3>
                        <h4 className="mt-4 text-base font-semibold">Assumptions Register</h4>
                        <h5 className="mt-2 text-sm font-semibold">Operating Scenarios</h5>
                        <h6 className="mt-1 text-xs font-medium">Calculation Note</h6>
                        <p className="mt-2 text-sm leading-6">JEF documents assumptions, study cases, calculation methods and review criteria before modelling begins.</p>
                    </article>
                    <article>
                        <h3 className="text-xl font-semibold">Modelling &amp; Simulation</h3>
                        <h4 className="mt-4 text-base font-semibold">Study Scenarios</h4>
                        <h5 className="mt-2 text-sm font-semibold">Measurement Data</h5>
                        <h6 className="mt-1 text-xs font-medium">Software Version</h6>
                        <p className="mt-2 text-sm leading-6">Load flow, short-circuit, dynamic, harmonic, transient and protection models can be selected according to project risk.</p>
                    </article>
                    <article>
                        <h3 className="text-xl font-semibold">Field Testing / Validation</h3>
                        <h4 className="mt-4 text-base font-semibold">Acceptance Criteria</h4>
                        <h5 className="mt-2 text-sm font-semibold">Model Settings</h5>
                        <h6 className="mt-1 text-xs font-medium">Standard Clause Reference</h6>
                        <p className="mt-2 text-sm leading-6">Field measurements and commissioning data may be used to validate model inputs and existing network conditions.</p>
                    </article>
                </div>
                    </div>
                )}

                {true && (
                    <div>
                <h2 id="renewable-importance" className="mt-16 scroll-mt-8 text-3xl font-semibold text-[#FF0000]">Why Renewable Energy Grid Studies Matters</h2>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <article>
                        <h3 className="text-xl font-semibold">Key Risks Identified</h3>
                        <h4 className="mt-4 text-base font-semibold">Quality Review</h4>
                        <h5 className="mt-2 text-sm font-semibold">Sensitivity Cases</h5>
                        <h6 className="mt-1 text-xs font-medium">Assumption Note</h6>
                        <p className="mt-2 text-sm leading-6">Studies can reveal voltage, frequency, fault-level, harmonic, resonance, protection and equipment-duty risks.</p>
                    </article>
                    <article>
                        <h3 className="text-xl font-semibold">Mitigation Recommendations</h3>
                        <h4 className="mt-4 text-base font-semibold">Compliance Mapping</h4>
                        <h5 className="mt-2 text-sm font-semibold">Risk Ranking</h5>
                        <h6 className="mt-1 text-xs font-medium">Review Comment</h6>
                        <p className="mt-2 text-sm leading-6">Recommendations are ranked by personnel safety, compliance, reliability, asset protection and implementation effort.</p>
                    </article>

                    <article>
                        <h3 className="text-xl font-semibold">Industries &amp; Applications</h3>
                        <h4 className="mt-4 text-base font-semibold">Report Structure</h4>
                        <h5 className="mt-2 text-sm font-semibold">Engineering Actions</h5>
                        <h6 className="mt-1 text-xs font-medium">Approval Status</h6>
                        <p className="mt-2 text-sm leading-6">Applications include solar PV, wind, BESS, hybrid plants, utilities, oil and gas facilities and industrial networks.</p>
                    </article>
                    <article>
                        <h3 className="text-xl font-semibold">UAE &amp; GCC Project Considerations</h3>
                        <h4 className="mt-4 text-base font-semibold">Implementation Priorities</h4>
                        <h5 className="mt-2 text-sm font-semibold">BOQ / Action Register</h5>
                        <h6 className="mt-1 text-xs font-medium">Deliverable Number</h6>
                        <p className="mt-2 text-sm leading-6">The study basis can reflect UAE and GCC utility requirements, grid codes, authority expectations and project-specific standards.</p>
                    </article>
                    <article>
                        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
                        <h4 className="mt-4 text-base font-semibold">Client Review &amp; Closeout</h4>
                        <h5 className="mt-2 text-sm font-semibold">Revision Control</h5>
                        <h6 className="mt-1 text-xs font-medium">Revision Date</h6>
                        <p className="mt-2 text-sm leading-6">See the detailed FAQ page for inputs, standards, deliverables, software, timelines, costs and project engagement.</p>
                    </article>
                </div>
                    </div>
                )}

                {true && (
                    <div>
                <h2 id="renewable-methodology" className="mt-16 scroll-mt-8 text-3xl font-semibold text-[#FF0000]">JEF UAE Methodology &amp; Deliverables</h2>
                <p className="mt-4 max-w-4xl text-sm leading-6">JEF aligns the study basis with verified project data, defined scenarios, engineering simulation, quality review and a practical report with prioritized actions.</p>
                    </div>
                )}

                {true && (
                    <div>
                <h2 id="renewable-standards" className="mt-12 scroll-mt-8 text-3xl font-semibold text-[#FF0000]">Standards, Software &amp; Technical Requirements</h2>
                <p className="mt-4 max-w-4xl text-sm leading-6">Applicable IEC and IEEE practices, UAE or GCC grid-code requirements, utility criteria and suitable engineering software are confirmed during project scoping.</p>
                    </div>
                )}

                {true && (
                    <div>
                <h2 id="renewable-why-jef" className="mt-12 scroll-mt-8 text-3xl font-semibold text-[#FF0000]">Why Choose JEF UAE for Renewable Energy Grid Studies</h2>
                <p className="mt-4 max-w-4xl text-sm leading-6">JEF combines electrical safety engineering, power-system reliability, technical audit capability and commissioning support for renewable and industrial projects.</p>
                    </div>
                )}

                </div>

                {true && <div className="mt-16 max-w-6xl text-left">
                    <p className="text-2xl font-semibold">Renewable energy grid studies services in the UAE</p>
                    <p className="mt-4 text-sm leading-7">Renewable projects connect inverter-based generation, transformers, collection systems, transmission assets and utility networks that must operate together under normal and abnormal conditions. A well-defined study helps owners, developers, EPC contractors and utilities understand those interactions before procurement, energisation or commercial operation. JEF UAE provides technology-enabled electrical engineering support for solar PV, wind, battery energy storage systems, hybrid generation, green-hydrogen facilities, microgrids and industrial networks.</p>
                    <p className="mt-4 text-sm leading-7">The purpose is not simply to produce a model. The purpose is to turn verified project information into decisions: whether equipment duties are acceptable, whether voltage and reactive-power performance meet the connection basis, whether protection settings coordinate, whether harmonic or resonance risks require mitigation, and which actions should be completed before commissioning. Results are presented in an engineering report with assumptions, study cases, limitations, findings and practical recommendations.</p>

                    <p className="mt-10 text-2xl font-semibold">Inputs and deliverables</p>
                    <div className="mt-4 overflow-x-auto">
                        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                            <thead>
                                <tr className="border-b-2 border-stone-600">
                                    <th className="px-3 py-3 font-semibold">Study input</th>
                                    <th className="px-3 py-3 font-semibold">How it is used</th>
                                    <th className="px-3 py-3 font-semibold">Typical output</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-stone-700"><td className="px-3 py-3">Single-line diagrams and layouts</td><td className="px-3 py-3">Defines network topology and study boundaries</td><td className="px-3 py-3">Validated network model</td></tr>
                                <tr className="border-b border-stone-700"><td className="px-3 py-3">Transformer, cable, inverter and generator data</td><td className="px-3 py-3">Represents equipment electrical characteristics</td><td className="px-3 py-3">Duty, loading and performance results</td></tr>
                                <tr className="border-b border-stone-700"><td className="px-3 py-3">Utility fault level and connection requirements</td><td className="px-3 py-3">Sets external-grid and compliance scenarios</td><td className="px-3 py-3">Grid-code and connection observations</td></tr>
                                <tr className="border-b border-stone-700"><td className="px-3 py-3">Operating modes and generation forecasts</td><td className="px-3 py-3">Tests import, export, outage and contingency cases</td><td className="px-3 py-3">Scenario comparison and risk ranking</td></tr>
                                <tr><td className="px-3 py-3">Field measurements and existing reports</td><td className="px-3 py-3">Checks model assumptions against site conditions</td><td className="px-3 py-3">Validation notes and action register</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-10 text-2xl font-semibold">Methodology and quality controls</p>
                    <p className="mt-4 text-sm leading-7">JEF starts with a project workshop or data review to confirm the objective, network boundary, study scenarios, applicable authority or client criteria and required deliverables. Data gaps are recorded rather than hidden. The model is then assembled and checked against drawings, equipment schedules and available measurements. Where different operating states are credible, the analysis considers more than one case—for example minimum and maximum renewable output, import and export operation, transformer configurations, capacitor or reactor status, utility fault-level variation and credible equipment outages.</p>
                    <p className="mt-4 text-sm leading-7">Depending on the connection and risk profile, the technical package may include load flow, short-circuit, protection coordination, motor starting, arc-flash, harmonic, power-quality, grounding, lightning, dynamic or electromagnetic-transient analysis. The selected method and software should match the engineering question. Results are reviewed for numerical consistency, engineering plausibility, sensitivity to key assumptions and alignment with acceptance criteria before the report is issued.</p>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 md:grid-cols-2">
                        <li>✓ Confirm scope, interfaces, standards and acceptance criteria.</li>
                        <li>✓ Validate drawings, ratings, cable data and inverter settings.</li>
                        <li>✓ Build and quality-check the electrical network model.</li>
                        <li>✓ Run base cases, sensitivities, contingencies and abnormal cases.</li>
                        <li>✓ Rank risks by safety, compliance, reliability and practicality.</li>
                        <li>✓ Issue a reviewed report, action register and closeout responses.</li>
                    </ul>

                    <p className="mt-10 text-2xl font-semibold">Standards, software and technical requirements</p>
                    <p className="mt-4 text-sm leading-7">The governing requirements depend on the project connection, authority, client and location. Study criteria may reference applicable UAE or GCC utility requirements, project grid codes and recognized IEC or IEEE practices. The <a className="text-red-600 underline" href="https://www.iec.ch/" target="_blank" rel="noreferrer">International Electrotechnical Commission</a> and <a className="text-red-600 underline" href="https://standards.ieee.org/" target="_blank" rel="noreferrer">IEEE Standards Association</a> are useful primary sources for standards information; the applicable edition and clause should be confirmed during project scoping rather than assumed.</p>
                    <p className="mt-4 text-sm leading-7">Depending on the study objective, engineers may use ETAP, DIgSILENT PowerFactory, PSS®E, PSCAD, EMTP-RV, CDEGS or another fit-for-purpose platform. Software selection does not replace engineering judgement: model quality, validated inputs, suitable scenarios and transparent assumptions determine whether a result can support a design or operational decision.</p>

                    <p className="mt-10 text-2xl font-semibold">Applications across UAE and GCC projects</p>
                    <p className="mt-4 text-sm leading-7">For a utility-scale solar or wind plant, the focus may be point-of-connection performance, reactive-power capability, fault response, harmonics, protection and dynamic behaviour. For BESS, the assessment may consider converter controls, operating modes, charge and discharge cases, fault contribution, protection interfaces and interaction with nearby inverter-based resources. For an industrial or oil-and-gas facility, the study can also connect renewable generation to existing switchgear, standby generation, critical loads, earthing and power-quality requirements.</p>
                    <p className="mt-4 text-sm leading-7">UAE and GCC projects often involve high ambient temperatures, long cable routes, large solar blocks, rapidly changing operating conditions and interfaces between owners, EPCs, OEMs and utilities. These conditions make document control, data validation, clear responsibility boundaries and commissioning support important. JEF can adapt the study basis to Abu Dhabi, Dubai and wider GCC project requirements when the required data and authority criteria are available.</p>

                    <p className="mt-10 text-2xl font-semibold">Related JEF engineering services</p>
                    <p className="mt-4 text-sm leading-7">Grid performance is connected to physical installation quality and protection of people and equipment. Explore the related <Link className="text-red-600 underline" href="/earthing-studies">earthing studies</Link>, <Link className="text-red-600 underline" href="/lightning-protection-studies">lightning protection studies</Link>, <Link className="text-red-600 underline" href="/power-system-studies">power system studies</Link>, <Link className="text-red-600 underline" href="/power-quality-studies">power quality studies</Link> and <Link className="text-red-600 underline" href="/instrumentation-earthing-studies">instrumentation earthing</Link> services.</p>

                    <p className="mt-10 text-2xl font-semibold">Anonymized project review example</p>
                    <p className="mt-4 text-sm leading-7">A typical review begins when a project team needs to connect a renewable plant to an existing industrial or utility network and has drawings from multiple design stages. JEF would first reconcile the latest single-line diagram, equipment schedule, model files and connection criteria. The engineering team would identify missing data, agree the operating cases, test the network model, assess the defined risks and issue a prioritized action register. This example is intentionally anonymized: project-specific results, client names and quantified outcomes should only be published with permission and verified records.</p>

                    <p className="mt-10 text-2xl font-semibold">Checklist before requesting a proposal</p>
                    <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6">
                        <li>Project location, voltage levels, connection point and target energisation date.</li>
                        <li>Plant capacity, technology type, inverter or generator information and BESS details.</li>
                        <li>Latest single-line diagrams, layouts, cable schedule, transformer data and protection philosophy.</li>
                        <li>Utility or client grid-code criteria, required software format and authority submission needs.</li>
                        <li>Existing study reports, field measurements, known issues and requested deliverables.</li>
                    </ol>

                    <p className="mt-10 text-sm leading-7">Technical content reviewed by the JEF electrical engineering team. Last reviewed: 11 September 2026. For a project-specific scope, use the <Link className="font-semibold text-red-600 underline" href="/renewable-energy-grid-studies/faq">renewable energy grid studies FAQ</Link> or <Link className="font-semibold text-red-600 underline" href="/get-in-touch">contact JEF UAE</Link> to request a technical consultation.</p>

                    <p className="mt-10 text-2xl font-semibold">Explore JEF UAE engineering resources</p>
                    <nav aria-label="Renewable energy  internal links" className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                        {internalLinkItems.map(([label, path], index) => (
                            <Link key={`${path}-${index}`} className="text-red-600 underline" href={path}>{label}</Link>
                        ))}
                    </nav>
                </div>}

            </section>}




            {/* Our Services Section */}

            <section>
                <div className="h-full bg-[#171515]">
                    <div
                        className="mainSection relative h-full w-full overflow-hidden bg-[#171515] py-20">
                        {backgroundImage && (
                            <div className="absolute inset-0 w-full h-full ">
                                <img
                                    ref={imgRef}
                                    src={backgroundImage}
                                    alt="renewable energy grid studies technical analysis by JEF UAE"
                                    title="Renewable Energy Grid Studies — JEF UAE"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        )}
                        <section className="flex flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
                            <div className="self-center text-3xl font-semibold leading-none text-[#FF0000] tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                                Our Services
                            </div>
                            <div className="flex circle-slider flex-wrap justify-center mt-20 max-md:mt-10 w-full h-full">
                                <div className='flex Y-axis-Service-anm items-center gap-x-2 md:gap-x-5 lg:gap-x-10 circleChild'>
                                    {services.slice(0, 9).map((service, index) => (
                                        <ServiceItem
                                            key={index}
                                            path={service.path}
                                            data={service.data}
                                            text={service.text}
                                            ref={(el) => (serviceRefs.current[index] = el)}
                                            onMouseEnter={(event) => handleMouseEnter(index, service.image, event)}
                                            onMouseLeave={handleMouseLeave}
                                        />


                                    ))}
                                </div>
                                <div className='flex items-center Y-axis-Service-anm gap-x-2 md:gap-x-5 lg:gap-x-10'>
                                    {services.slice(9).map((service, index) => (
                                        <ServiceItem
                                            key={index}
                                            path={service.path}
                                            data={service.data}
                                            text={service.text}
                                            ref={(el) => (serviceRefs.current[index + 9] = el)}
                                            onMouseEnter={() => handleMouseEnter(index + 9, service.image)}
                                            onMouseLeave={handleMouseLeave}
                                        />


                                    ))}
                                </div>
                                <div className='flex items-center Y-axis-Service-anm gap-x-2 md:gap-x-5 lg:gap-x-10'>
                                    {services.slice(18).map((service, index) => (
                                        <ServiceItem
                                            key={index}
                                            path={service.path}
                                            data={service.data}
                                            text={service.text}
                                            ref={(el) => (serviceRefs.current[index + 18] = el)}
                                            onMouseEnter={() => handleMouseEnter(index + 18, service.image)}
                                            onMouseLeave={handleMouseLeave}
                                        />


                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>




            <ContactUs />
            <Link href="/get-in-touch" aria-label="Talk to an engineer" className="fixed bottom-6 right-6 z-40 rounded-full bg-[#FF0000] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-red-700">
                Talk to an Engineer
            </Link>

        </>
    );
}









const NavigationItem = ({ text, path, isActive }) => (
    <div className="flex items-center self-stretch my-auto">
        <div
            className={`self-stretch my-auto text-xs tracking-wide leading-none uppercase ${isActive ? 'text-white' : 'text-[#FF0000]'
                }`}
        >
            {path ? <Link href={path}>{text}</Link> : text}
        </div>
        {!isActive && (
            <div className="flex flex-col self-stretch px-2.5 my-auto w-[27px]">
                <div className="flex items-center w-[7px]">
                    <div className="flex flex-col justify-center self-stretch my-auto min-h-[7px] w-[7px]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3113f381f331fdc6efbe3c0ae79c9bb98472ae04eaff8d3d44a215b51f8c5927?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                            alt=""
                            className="object-contain flex-1 w-full aspect-square"
                        />
                    </div>
                </div>
            </div>
        )}
    </div>
);

const navigationItems = [
    { text: 'HOME', path: '/', isActive: false },
    { text: 'RENEWABLE ENERGY', path: '/renewableenergy', isActive: true },
];

const internalLinkItems = [
    ['Earthing studies', '/earthing-studies'],
    ['Lightning protection studies', '/lightning-protection-studies'],
    ['Power system studies', '/power-system-studies'],
    ['Power quality studies', '/power-quality-studies'],
    ['Instrumentation earthing', '/instrumentation-earthing-studies'],
    ['EMI EMC studies', '/emi-emc'],
    ['Root cause analysis', '/renewable-energy-grid-studies/faq/root-cause-analysis'],
    ['Oil & Gas solutions', '/oilandgas'],
    ['Renewable Energy solutions', '/renewableenergy'],
    ['JEF UAE blog', '/blog'],
    ['About JEF UAE', '/about-us'],
    ['Leadership team', '/leadership-team'],
    ['Careers at JEF UAE', '/careers'],
    ['Earthing studies', '/earthing-studies'],
    ['Lightning protection studies', '/lightning-protection-studies'],
    ['Power system studies', '/power-system-studies'],
    ['Power quality studies', '/power-quality-studies'],
];

const Navigation = () => (
    <nav className="flex flex-col items-start justify-center bg-[#171515] px-16 py-6 max-md:px-5">
        <div className="flex gap-y-2 flex-wrap items-center max-md:max-w-full">
            {navigationItems.map((item, index) => (
                <NavigationItem key={index} {...item} />
            ))}
        </div>
    </nav>
);



const ServiceItem = React.forwardRef(({ path, text, data, onMouseEnter, onMouseLeave }, ref) => {
    // Local state to track hover state within ServiceItem
    const [isHovered, setIsHovered] = React.useState(false);

    // Determine the position class based on the text of the item
    const positionClass =
        text === 'Power quality & root cause analysis' || text === 'Instrumentation earthing' || text === 'EMI EMC'
            ? 'bottom-1/2'
            : 'top-1/2';

    const content = (
        <div
            ref={ref}
            className={` flex w-[7.2rem] h-[7.2rem] lg:h-[9rem] lg:w-[9rem] 2xl:w-[11.5rem] 2xl:h-[11.5rem] rounded-full items-center justify-center p-[0.5%] lg:p-[1.5%] transition-all duration-300 
        ${text === "" ? "bg-transparent" : "border border-solid hover:bg-red-600"}`}
            onMouseEnter={(e) => {
                setIsHovered(true);
                onMouseEnter(e); // Calls the main onMouseEnter function to handle background image changes
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                onMouseLeave(); // Calls the main onMouseLeave function to reset background image
            }}
        >
            <span className="text-center text-[10px] lg:text-[10px] 2xl:text-[12px] ">{text}</span>

            {/* Hover Box - Visible only when hovered */}
            {isHovered && text && data.length > 0 && (
                <div className={`absolute left-1/2 transform -translate-x-1/2 ${positionClass} bg-white text-black p-4 rounded shadow-lg transition-opacity z-20 w-max mt-2`}>
                    {data.map((item, index) => (
                        <div key={index} className="text-center mb-1">
                            <div className="text-xs font-semibold">{item.label}</div>
                            <p className="text-">{item.value}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return path ? <Link href={path}>{content}</Link> : content;
});

ServiceItem.displayName = "ServiceItem";









export default RenewableEnergyResource;
