'use client';

import React, { useState, useEffect, useRef, useMemo } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';
import ContactUs from "@/components/ContactUs";

gsap.registerPlugin(ScrollTrigger);

function OilandGas() {

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
                            <source src="../IndustriesPage/Oil & Gas - Option 1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <h1 className="absolute bottom-8 left-6 right-6 z-10 flex max-w-5xl p-4 text-3xl font-bold leading-tight sm:text-4xl lg:left-20 lg:right-20 lg:text-6xl">
                            Electrical Safety And Power Studies For Oil And Gas Facilities
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
                            src="../AboutUs/OilandGas.png"
                            alt="Electrical engineering oil and gas engineering study by JEF UAE"
                            title="Electrical Engineering Oil And Gas — JEF UAE"
                            className="object-cover self-center max-w-full aspect-square w-20"
                        />
                        <h2 className="mt-16 self-center lg:w-[40%] font-semibold max-md:mt-10 max-md:max-w-full">
                            Our specialized services help
                            address your concerns of hazardous area safety and reliability of operation.
                        </h2>
                        
                    </header>
                </main>
            </section>

            {false && <>
            <section className="bg-stone-950 px-[7%] py-16 text-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-[#FF0000]">What Is Electrical Engineering Oil And Gas?</h2>
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <article><h3 className="text-xl font-semibold">Project Objectives</h3><h4 className="mt-4 font-semibold">Scope Definition</h4><h5 className="mt-2 text-sm font-semibold">Drawings &amp; SLDs</h5><h6 className="mt-1 text-xs font-medium">Input File Naming</h6><p className="mt-2 text-sm leading-6">The study defines facility boundaries, hazardous-area interfaces, operating modes and safety-critical electrical questions.</p></article>
                        <article><h3 className="text-xl font-semibold">Required Input Data</h3><h4 className="mt-4 font-semibold">Data Validation</h4><h5 className="mt-2 text-sm font-semibold">Equipment Data</h5><h6 className="mt-1 text-xs font-medium">Model Version</h6><p className="mt-2 text-sm leading-6">Validated single-line diagrams, equipment ratings, cable schedules, protection settings and operating records establish the study basis.</p></article>
                        <article><h3 className="text-xl font-semibold">Engineering Methodology</h3><h4 className="mt-4 font-semibold">Assumptions Register</h4><h5 className="mt-2 text-sm font-semibold">Operating Scenarios</h5><h6 className="mt-1 text-xs font-medium">Calculation Note</h6><p className="mt-2 text-sm leading-6">JEF documents assumptions, study cases, calculation methods and acceptance criteria before modelling begins.</p></article>
                        <article><h3 className="text-xl font-semibold">Modelling &amp; Simulation</h3><h4 className="mt-4 font-semibold">Study Scenarios</h4><h5 className="mt-2 text-sm font-semibold">Measurement Data</h5><h6 className="mt-1 text-xs font-medium">Software Version</h6><p className="mt-2 text-sm leading-6">Load flow, short-circuit, arc-flash, protection, harmonic, grounding and power-quality models are selected for the facility risk profile.</p></article>
                        <article><h3 className="text-xl font-semibold">Field Testing / Validation</h3><h4 className="mt-4 font-semibold">Acceptance Criteria</h4><h5 className="mt-2 text-sm font-semibold">Model Settings</h5><h6 className="mt-1 text-xs font-medium">Standard Clause Reference</h6><p className="mt-2 text-sm leading-6">Field measurements and commissioning records can validate model inputs and existing network conditions.</p></article>
                    </div>

                    <h2 className="mt-16 text-3xl font-semibold text-[#FF0000]">Why Electrical Engineering Oil And Gas Matters</h2>
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <article><h3 className="text-xl font-semibold">Key Risks Identified</h3><p className="mt-3 text-sm leading-6">Studies identify fault-level, arc-flash, protection, voltage, harmonic, grounding and equipment-duty risks.</p></article>
                        <article><h3 className="text-xl font-semibold">Mitigation Recommendations</h3><p className="mt-3 text-sm leading-6">Recommendations are ranked by personnel safety, compliance, reliability, asset protection and implementation effort.</p></article>
                        <article><h3 className="text-xl font-semibold">Industries &amp; Applications</h3><p className="mt-3 text-sm leading-6">Applications include upstream, midstream and downstream facilities, terminals, refineries, petrochemical plants and industrial networks.</p></article>
                        <article><h3 className="text-xl font-semibold">UAE &amp; GCC Project Considerations</h3><p className="mt-3 text-sm leading-6">The study basis can reflect UAE and GCC authority requirements, client standards, hazardous-area classifications and project grid codes.</p></article>
                        <article><h3 className="text-xl font-semibold">Frequently Asked Questions</h3><p className="mt-3 text-sm leading-6">Project FAQs should address inputs, standards, deliverables, software, timelines, cost and engagement requirements.</p></article>
                    </div>

                    <h2 className="mt-16 text-3xl font-semibold text-[#FF0000]">JEF UAE Methodology &amp; Deliverables</h2>
                    <p className="mt-4 max-w-4xl text-sm leading-6">JEF aligns verified project data, defined scenarios, engineering simulation, quality review and a practical report with prioritized actions.</p>

                    <h2 className="mt-12 text-3xl font-semibold text-[#FF0000]">Standards, Software &amp; Technical Requirements</h2>
                    <p className="mt-4 max-w-4xl text-sm leading-6">Applicable IEC and IEEE practices, UAE or GCC authority requirements, HSE expectations, client specifications and suitable engineering software are confirmed during project scoping.</p>

                    <h2 className="mt-12 text-3xl font-semibold text-[#FF0000]">Why Choose JEF UAE for Electrical Engineering Oil And Gas</h2>
                    <p className="mt-4 max-w-4xl text-sm leading-6">JEF combines electrical safety engineering, industrial power-system reliability, technical audit capability and commissioning support for oil and gas facilities.</p>
                </div>
            </section>

            <section className="bg-[#171515] px-[7%] py-16 text-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold text-[#FF0000]">Electrical Engineering Oil And Gas Services UAE</h2>
                    <p className="mt-5 text-sm leading-7">JEF UAE provides electrical engineering oil and gas services for upstream, midstream and downstream facilities across the UAE and wider GCC. The work supports operators, EPC contractors, engineering consultants and asset owners who need reliable electrical systems in hazardous, safety-critical and continuously operating environments.</p>
                    <p className="mt-4 text-sm leading-7">Electrical engineering oil and gas studies connect design verification with safe operation. A study may assess generation and distribution systems, medium- and low-voltage switchgear, transformers, motors, emergency power, protection, earthing, lightning protection, power quality and electrical interfaces with process and instrumentation systems. The objective is to produce decisions that can be implemented during design, construction, commissioning, modification or asset integrity programmes.</p>
                    <p className="mt-4 text-sm leading-7">JEF begins by confirming the facility boundary, operating philosophy, hazardous-area interfaces, utility connection, client requirements and required approval route. Data gaps and assumptions are recorded in a traceable register. The model and calculations are then reviewed against available drawings, equipment schedules, field measurements and previous reports before findings are issued.</p>

                    <h2 className="mt-12 text-3xl font-semibold text-[#FF0000]">Inputs and Deliverables</h2>
                    <div className="mt-5 overflow-x-auto">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                            <thead><tr className="border-b-2 border-stone-600"><th className="px-3 py-3">Input</th><th className="px-3 py-3">Engineering use</th><th className="px-3 py-3">Typical deliverable</th></tr></thead>
                            <tbody>
                                <tr className="border-b border-stone-700"><td className="px-3 py-3">Single-line diagrams and layouts</td><td className="px-3 py-3">Defines network topology, equipment boundaries and interfaces</td><td className="px-3 py-3">Validated study model and data-gap register</td></tr>
                                <tr className="border-b border-stone-700"><td className="px-3 py-3">Equipment ratings and cable schedules</td><td className="px-3 py-3">Represents transformers, switchgear, motors, cables and protective devices</td><td className="px-3 py-3">Loading, fault-duty and equipment assessment</td></tr>
                                <tr className="border-b border-stone-700"><td className="px-3 py-3">Protection settings and philosophy</td><td className="px-3 py-3">Tests selectivity, coordination and clearing performance</td><td className="px-3 py-3">Protection coordination observations and recommendations</td></tr>
                                <tr className="border-b border-stone-700"><td className="px-3 py-3">Hazardous-area and process information</td><td className="px-3 py-3">Checks electrical safety interfaces and operational constraints</td><td className="px-3 py-3">Compliance actions and design-verification notes</td></tr>
                                <tr><td className="px-3 py-3">Field measurements and existing reports</td><td className="px-3 py-3">Validates assumptions against site conditions</td><td className="px-3 py-3">Technical audit findings and action register</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="mt-12 text-3xl font-semibold text-[#FF0000]">Methodology and Quality Controls</h2>
                    <p className="mt-4 text-sm leading-7">The methodology starts with a scope workshop or document review. JEF confirms the operating cases, study scenarios, acceptance criteria, applicable client and authority requirements, software format and report expectations. The engineering team then validates the latest revision of drawings and data, identifies inconsistencies and agrees how missing information will be handled.</p>
                    <p className="mt-4 text-sm leading-7">Depending on the facility and risk profile, the package may include load-flow, short-circuit, protection coordination, arc-flash, motor-starting, harmonic, power-quality, grounding, lightning or transient analysis. Studies can consider normal operation, maximum and minimum generation, utility fault-level variation, transformer configurations, emergency generation, large-motor starting, bus coupler states and credible outages. Results are checked for numerical consistency, engineering plausibility, sensitivity to key assumptions and alignment with acceptance criteria.</p>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 md:grid-cols-2">
                        <li>✓ Confirm scope, interfaces, standards and approval requirements.</li>
                        <li>✓ Validate drawings, ratings, cable data and protection settings.</li>
                        <li>✓ Build and quality-check the electrical network model.</li>
                        <li>✓ Run base cases, sensitivities, contingencies and abnormal cases.</li>
                        <li>✓ Rank risks by safety, compliance, reliability and practicality.</li>
                        <li>✓ Issue a reviewed report, action register and closeout responses.</li>
                    </ul>

                    <h2 className="mt-12 text-3xl font-semibold text-[#FF0000]">Standards and Software Capability</h2>
                    <p className="mt-4 text-sm leading-7">The applicable basis depends on the facility, location, connection agreement, client specification and authority review route. Recognized IEC and IEEE practices, UAE or GCC utility requirements and project-specific engineering standards should be confirmed during scoping. The <a className="text-red-500 underline" href="https://www.iec.ch/" target="_blank" rel="noreferrer">International Electrotechnical Commission</a> and <a className="text-red-500 underline" href="https://standards.ieee.org/" target="_blank" rel="noreferrer">IEEE Standards Association</a> provide authoritative standards information; the applicable edition and clause references should be recorded in the study.</p>
                    <p className="mt-4 text-sm leading-7">Depending on the engineering question, engineers may use ETAP, DIgSILENT PowerFactory, PSS®E, PSCAD, EMTP-RV, CDEGS or another fit-for-purpose platform. Software does not replace engineering judgement. The quality of inputs, model validation, scenario selection, transparent assumptions and technical review determines whether a result can support design, procurement or operational decisions.</p>

                    <h2 className="mt-12 text-3xl font-semibold text-[#FF0000]">Oil &amp; Gas Applications Across UAE and GCC</h2>
                    <p className="mt-4 text-sm leading-7">For upstream facilities, electrical engineering may focus on remote generation, gathering systems, motors, packaged equipment, emergency power and hazardous-area interfaces. Midstream terminals and pipeline facilities may require studies for long feeders, compressor drives, substations, transfer systems, tank farms and utility interfaces. Refineries, petrochemical plants and gas-processing facilities often require coordinated assessment of large motors, process continuity, standby generation, critical loads, protection, arc-flash and power quality.</p>
                    <p className="mt-4 text-sm leading-7">UAE and GCC projects can include high ambient temperatures, coastal conditions, long cable routes, brownfield interfaces and multiple EPC or OEM packages. Clear document control, revision management, data validation and responsibility boundaries are therefore essential. JEF can adapt the study basis to Abu Dhabi, Dubai and wider GCC requirements when the required project information and authority criteria are available.</p>

                    <h2 className="mt-12 text-3xl font-semibold text-[#FF0000]">Anonymized Case-Study Approach</h2>
                    <p className="mt-4 text-sm leading-7">A typical review begins when an operator or EPC team needs to modify an existing oil and gas electrical network while maintaining production and safety. JEF reconciles the latest single-line diagrams, equipment schedules, model files, protection settings, field measurements and client criteria. The team agrees operating cases, tests the model, identifies constraints and issues a prioritized action register for design, procurement, commissioning or future maintenance. Client names, quantified outcomes and project-specific results should only be published with permission and verified records.</p>

                    <h2 className="mt-12 text-3xl font-semibold text-[#FF0000]">Electrical Engineering Oil And Gas Project Checklist</h2>
                    <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-6">
                        <li>Project location, facility type, voltage levels, connection point and target date.</li>
                        <li>Latest single-line diagrams, layouts, equipment schedules and cable information.</li>
                        <li>Generator, transformer, motor, switchgear and protection data.</li>
                        <li>Hazardous-area classification, process interfaces and emergency-power philosophy.</li>
                        <li>Utility, client, IEC/IEEE and authority criteria with required clause references.</li>
                        <li>Existing reports, field measurements, known incidents and requested deliverables.</li>
                    </ol>

                    <h2 className="mt-12 text-3xl font-semibold text-[#FF0000]">Related JEF Engineering Services</h2>
                    <p className="mt-4 text-sm leading-7">Related work may include <Link className="text-red-500 underline" href="/earthing-studies">earthing studies</Link>, <Link className="text-red-500 underline" href="/lightning-protection-studies">lightning protection studies</Link>, <Link className="text-red-500 underline" href="/power-system-studies">power system studies</Link>, <Link className="text-red-500 underline" href="/power-quality-studies">power quality studies</Link> and <Link className="text-red-500 underline" href="/instrumentation-earthing-studies">instrumentation earthing</Link>. These services can be coordinated when electrical safety, reliability, compliance and asset integrity depend on more than one study discipline.</p>
                    <p className="mt-10 text-sm leading-7">Technical content reviewed by the JEF electrical engineering team. Last reviewed: 11 September 2026. <Link className="font-semibold text-red-500 underline" href="/get-in-touch">Request a technical consultation</Link> to discuss your facility, study inputs and deliverables.</p>
                </div>
            </section>
            </>}




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
                                    alt="Oil and gas electrical engineering technical analysis by JEF UAE"
                                    title="Electrical Engineering Oil And Gas — JEF UAE"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        )}
                        <section className="flex flex-col text-base leading-6 text-center text-white uppercase w-full relative z-10">
                            <h2 className="self-center text-3xl font-semibold leading-none text-[#FF0000] tracking-[4.53px] max-md:max-w-full max-md:text-4xl">
                                Our Services
                            </h2>
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





            < ContactUs />


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
    { text: 'INDUSTRIES', path: '/industries/oilandgas', isActive: false },
    { text: 'OIL & GAS', path: '/industries/oilandgas', isActive: true },
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
                            <h3 className="text-xs font-semibold">{item.label}</h3>
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

export default OilandGas;
