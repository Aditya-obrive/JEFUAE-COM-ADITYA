"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MainFooter = () => {
  const pathname = usePathname();

  /*
   * =========================================================
   * FAQ LINKS FOR OUR BUSINESS SERVICES
   * =========================================================
   */
  const faqLinks = {
    "/earthing-studies": "/earthing-studies/faq",

    "/lightning-protection-studies": "/lightning-protection-studies/faq",

    "/power-system-studies": "/power-system-studies/faq",

    "/power-quality-studies": "/power-quality-studies/faq",

    "/instrumentation-earthing-studies":
      "/instrumentation-earthing-studies/faq",

    "/emi-emc": "/emi-emc/faq",

    "/root-cause-analysis": "/root-cause-analysis/faq",
  };

  /*
   * =========================================================
   * FAQ LINKS FOR ALL 9 BLOG PAGES
   * =========================================================
   */
  const blogFaqLinks = {
    // 1. Power System Studies for Renewable Energy
    "/blog/power-system-studies-renewable-energy-integration-uae-middle-east":
      "/blog/power-system-studies-renewable-energy-integration-uae-middle-east/faq",

    // 2. Role of Power System Studies in Energy Transition
    "/blog/role-of-power-system-studies-in-energy-transition":
      "/blog/role-of-power-system-studies-in-energy-transition/faq",

    // 3. Need for Comprehensive Earthing Audits
    "/blog/need-for-comprehensive-earthing-audits":
      "/blog/need-for-comprehensive-earthing-audits/faq",

    // 4. Need for Lightning Protection Systems
    "/blog/need-for-lightning-protection-systems":
      "/blog/need-for-lightning-protection-systems/faq",

    // 5. Advancements in Hybrid Power Systems
    "/blog/advancements-in-hybrid-power-systems":
      "/blog/advancements-in-hybrid-power-systems/faq",

    // 6. Electromagnetic Transient Studies
    "/blog/electromagnetic-transient-studies-renewable-grid-integration":
      "/blog/electromagnetic-transient-studies-renewable-grid-integration/faq",

    // 7. Advanced Electromagnetic Transient Studies
    "/blog/advanced-electromagnetic-transient-studies-renewable-grid-uae":
      "/blog/advanced-electromagnetic-transient-studies-renewable-grid-uae/faq",

    // 8. Need for Sub-Synchronous Oscillation Studies
    "/blog/need-for-sub-synchronous-oscillation-studies":
      "/blog/need-for-sub-synchronous-oscillation-studies/faq",

    // 9. AC Interference Studies for Oil & Gas Utilities
    "/blog/ac-interference-studies-for-oil-gas-utilities":
      "/blog/ac-interference-studies-for-oil-gas-utilities/faq",
  };

  /*
   * =========================================================
   * REMOVE /faq FROM CURRENT URL
   * =========================================================
   *
   * Example:
   *
   * /blog/example
   *
   * becomes:
   *
   * /blog/example
   *
   * And:
   *
   * /blog/example/faq
   *
   * becomes:
   *
   * /blog/example
   *
   * This allows the footer to work on BOTH
   * the blog page and its FAQ page.
   */
  const servicePath = pathname?.endsWith("/faq")
    ? pathname.replace(/\/faq$/, "")
    : pathname;

  /*
   * =========================================================
   * FIND FAQ FOR CURRENT PAGE
   * =========================================================
   *
   * First check service FAQ.
   * If it is not a service page,
   * check blog FAQ.
   */
  const currentFaqPath = faqLinks[servicePath] || blogFaqLinks[servicePath];

  /*
   * =========================================================
   * FOOTER ANIMATION
   * =========================================================
   */
  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(".X-axis-anm-footer"),
      {
        opacity: 0,
        x: 100,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".card-slider-footer",
          start: "top 80%",
          end: "top 100%",
          toggleActions: "play none none none",
        },
      },
    );
  }, []);

  /*
   * =========================================================
   * ABOUT
   * =========================================================
   */
  const itemsAbout = [
    {
      name: "What is JEF",
      path: "/about-us",
    },
    {
      name: "JEF Leadership Team",
      path: "/leadership-team",
    },
    {
      name: "JEF Smart Digitization",
      path: "/SmartDigitalization",
    },
    {
      name: "JEF L&D Centre",
      path: "/L&D-Centre",
    },
  ];

  /*
   * =========================================================
   * OUR BUSINESS
   * =========================================================
   */
  const itemsService = [
    {
      name: "Power System Studies",
      path: "/power-system-studies",
    },
    {
      name: "Power Quality Studies",
      path: "/power-quality-studies",
    },
    {
      name: "Earthing Studies",
      path: "/earthing-studies",
    },
    {
      name: "LPS System Studies",
      path: "/lightning-protection-studies",
    },
    {
      name: "Instrumentation Studies",
      path: "/instrumentation-earthing-studies",
    },
    {
      name: "Root Cause Analysis",
      path: "/root-cause-analysis",
    },
    {
      name: "EMI EMC",
      path: "/emi-emc",
    },
  ];

  /*
   * =========================================================
   * LOCATIONS
   * =========================================================
   */
  const itemsLocation = [
    {
      name: "India",
    },
    {
      name: "USA",
    },
    {
      name: "UAE",
    },
  ];

  /*
   * =========================================================
   * INDUSTRIES
   * =========================================================
   */
  const itemsBusiness = [
    {
      name: "Oil and Gas",
      path: "/industries/oilandgas",
    },
    {
      name: "Power Utilities",
      path: "/industries/powerutilities",
    },
    {
      name: "Manufacturing Plant",
      path: "/industries/manufacturingplant",
    },
    {
      name: "Process Plant",
      path: "/industries/processplant",
    },
    {
      name: "Commercial Buildings",
      path: "/industries/commercialbuilding",
    },
    {
      name: "Renewable Energy",
      path: "/industries/renewableenergy",
    },
  ];

  /*
   * =========================================================
   * CAREERS
   * =========================================================
   */
  const itemsCareers = [
    {
      name: "Jobs",
      path: "/careers",
    },
  ];

  /*
   * =========================================================
   * INTERNAL LINKS
   * =========================================================
   *
   * Only show FAQ when the current page has an FAQ.
   *
   * This works for:
   *
   * Service page
   * Blog page
   * Service FAQ page
   * Blog FAQ page
   */
  const itemsInternalLinks = currentFaqPath
    ? [
        {
          name: "FAQ",
          path: currentFaqPath,
        },
      ]
    : [];

  return (
    <main className="flex overflow-hidden flex-col items-center lg:pt-24 bg-stone-800">
      {/* =====================================================
          DESKTOP FOOTER MENU
      ====================================================== */}

      <div className="hidden lg:flex flex-col md:flex-row w-[88vw] max-w-[95vw] tracking-wider justify-between">
        {/* ABOUT */}
        <Section title="About" items={itemsAbout} />

        {/* OUR BUSINESS */}
        <Section title="Our Business" items={itemsService} />

        {/* LOCATIONS */}
        <Section title="Locations" items={itemsLocation} />

        {/* INDUSTRIES */}
        <Section title="Industries" items={itemsBusiness} />

        {/* CAREERS */}
        <Section title="Careers" items={itemsCareers} />

        {/* INTERNAL LINKS */}
        {itemsInternalLinks.length > 0 && (
          <Section title="Internal Links" items={itemsInternalLinks} />
        )}
      </div>

      {/* =====================================================
          MOBILE FOOTER MENU
      ====================================================== */}

      <div className="lg:hidden w-full">
        <FAQComponent currentFaqPath={currentFaqPath} />
      </div>

      {/* =====================================================
          SOCIAL + COPYRIGHT FOOTER
      ====================================================== */}

      <Footer />
    </main>
  );
};

/* =========================================================
   SOCIAL MEDIA + COPYRIGHT FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="card-slider-footer flex flex-col items-center pt-10 bg-stone-800">
      {/* Horizontal Line */}
      <hr className="hidden lg:block shrink-0 mt-2 max-w-[95vw] w-[88vw] border border-solid border-neutral-400 max-md:mt-8" />

      {/* =====================================================
          SOCIAL MEDIA
      ====================================================== */}

      <div className="flex X-axis-card-anm-footer-footer flex-row gap-10 justify-between items-start mt-5 lg:w-[88vw] max-w-[95vw]">
        <div className="hidden card-slider-footer X-axis-card-anm-footer lg:block text-xl tracking-widest text-white uppercase max-md:max-w-full">
          FOLLOW JEF ON SOCIAL MEDIA
        </div>

        <div className="flex X-axis-card-anm-footer flex-row h-full space-x-12 lg:space-x-6">
          {/* YouTube */}
          <Link
            href="https://www.youtube.com/@JEFgroup"
            target="_blank"
            rel="noopener noreferrer"
            className="object-contain card-slider-footer"
          >
            <img src="../FooterLogo/Link - Youtube.png" alt="YoutubeImg" />
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/JEFTECHNO/"
            target="_blank"
            rel="noopener noreferrer"
            className="object-contain card-slider-footer"
          >
            <img src="../FooterLogo/Link - Facebook.png" alt="FacebookImg" />
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/showcase/jef-engineering-services-middle-east/"
            target="_blank"
            rel="noopener noreferrer"
            className="object-contain card-slider-footer"
          >
            <img src="../FooterLogo/Link - Linkedin.png" alt="LinkedInImg" />
          </Link>

          {/* X / Twitter */}
          <Link
            href="https://x.com/JeftechnoIndia"
            target="_blank"
            rel="noopener noreferrer"
            className="object-contain card-slider-footer"
          >
            <img src="../FooterLogo/Link - Twitter.png" alt="TwitterImg" />
          </Link>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ====================================================== */}

      <div className="flex overflow-hidden flex-col justify-center items-center py-7 mt-6 w-screen text-white bg-stone-900 max-md:max-w-full">
        <div className="flex X-axis-card-anm-footer flex-wrap justify-between gap-6 w-full lg:w-[88vw] max-w-[95vw] max-md:max-w-full">
          {/* Policies */}
          <div className="flex card-slider-footer shrink gap-4 mx-auto lg:mx-0 lg:self-start text-[10px] sm:text-xs font-light basis-auto grow-0 tracking-widest">
            <Link href="/privacypolicy">Privacy Policy</Link>

            <Link href="/termsandconditions">· Terms & Conditions</Link>

            <Link href="/cookiepolicy">· Cookie Policy</Link>
          </div>

          {/* Copyright */}
          <div className="sm:text-xs text-[10px] card-slider-footer mx-auto lg:mx-0 flex gap-0 tracking-wide max-md:max-w-full">
            Copyright 2025. All Rights Reserved © jeftechno | Production Company
            <Link
              className="ml-[5px]"
              href="https://www.obnov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/FooterLogo/obrive-footer-logo.png"
                alt="ObnovLogo"
                className="h-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   DESKTOP FOOTER SECTION
========================================================= */

function Section({ title, items }) {
  return (
    <section className="flex .card-slider-footer X-axis-card-anm-footer flex-col min-h-[234px] w-[219px]">
      {/* Section Title */}
      <header className="w-full text-xl font-bold tracking-widest text-[#FF0000] uppercase whitespace-nowrap">
        {title}
      </header>

      {/* Section Items */}
      <ul className="flex overflow-hidden font-light flex-col mt-4 w-full text-base leading-none text-gray-300">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col justify-center items-start py-2.5 w-full"
          >
            <div className="flex items-center">
              {item.path ? (
                <Link href={item.path}>
                  <div className="self-stretch my-auto hover:text-white transition">
                    {item.name}
                  </div>
                </Link>
              ) : (
                <div className="self-stretch my-auto">{item.name}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* =========================================================
   MOBILE FOOTER FAQ COMPONENT
========================================================= */

const FAQComponent = ({ currentFaqPath }) => {
  const [faqData, setFaqData] = useState([
    /*
     * =====================================================
     * ABOUT
     * =====================================================
     */
    {
      question: "ABOUT",

      content: [
        {
          label: "What is JEF",
          path: "/about-us",
        },
        {
          label: "JEF leadership team",
          path: "/leadership-team",
        },
        {
          label: "JEF Smart Digitization",
          path: "/SmartDigitalization",
        },
        {
          label: "JEF L&D Centre",
          path: "/L&D-Centre",
        },
      ],

      isOpen: false,
    },

    /*
     * =====================================================
     * OUR BUSINESS
     * =====================================================
     */
    {
      question: "Our Business",

      content: [
        {
          label: "Power System Studies",
          path: "/power-system-studies",
        },
        {
          label: "Power Quality Studies",
          path: "/power-quality-studies",
        },
        {
          label: "Earthing Studies",
          path: "/earthing-studies",
        },
        {
          label: "LPS System Studies",
          path: "/lightning-protection-studies",
        },
        {
          label: "Instrumentation Studies",
          path: "/instrumentation-earthing-studies",
        },
        {
          label: "Root Cause Analysis",
          path: "/root-cause-analysis",
        },
        {
          label: "EMI EMC",
          path: "/emi-emc",
        },
      ],

      isOpen: false,
    },

    /*
     * =====================================================
     * LOCATIONS
     * =====================================================
     */
    {
      question: "Locations",

      content: [
        {
          label: "India",
          path: "",
        },
        {
          label: "USA",
          path: "",
        },
        {
          label: "UAE",
          path: "",
        },
      ],

      isOpen: false,
    },

    /*
     * =====================================================
     * INDUSTRIES
     * =====================================================
     */
    {
      question: "Industries",

      content: [
        {
          label: "Oil and Gas",
          path: "/industries/oilandgas",
        },
        {
          label: "Power Utilities",
          path: "/industries/powerutilities",
        },
        {
          label: "Manufacturing Plant",
          path: "/industries/manufacturingplant",
        },
        {
          label: "Process Plant",
          path: "/industries/processplant",
        },
        {
          label: "Commercial Buildings",
          path: "/industries/commercialbuilding",
        },
        {
          label: "Renewable Energy",
          path: "/industries/renewableenergy",
        },
      ],

      isOpen: false,
    },

    /*
     * =====================================================
     * CAREERS
     * =====================================================
     */
    {
      question: "Careers",

      content: [
        {
          label: "Jobs",
          path: "/careers",
        },
      ],

      isOpen: false,
    },

    /*
     * =====================================================
     * INTERNAL LINKS
     *
     * Only appears when current page has an FAQ.
     * =====================================================
     */
    ...(currentFaqPath
      ? [
          {
            question: "Internal Links",

            content: [
              {
                label: "FAQ",
                path: currentFaqPath,
              },
            ],

            isOpen: false,
          },
        ]
      : []),
  ]);

  /* =====================================================
     TOGGLE MOBILE FOOTER SECTIONS
  ===================================================== */

  const toggleFAQ = (index) => {
    setFaqData(
      faqData.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false,
      })),
    );
  };

  /* =====================================================
     MOBILE FAQ ITEM
  ===================================================== */

  const FAQItem = ({ question, content, isOpen, onToggle }) => {
    const contentRef = useRef(null);

    const [height, setHeight] = useState(0);

    /* Calculate content height */
    useEffect(() => {
      if (isOpen && contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        const timeout = setTimeout(() => {
          setHeight(0);
        }, 300);

        return () => clearTimeout(timeout);
      }
    }, [isOpen]);

    /* GSAP animation */
    useEffect(() => {
      gsap.fromTo(
        gsap.utils.toArray(".X-axis-card-anm-footer"),

        {
          opacity: 0,
          x: 100,
        },

        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,

          scrollTrigger: {
            trigger: ".card-slider-footer",

            start: "top 80%",
            end: "top 100%",

            toggleActions: "play none none none",
          },
        },
      );
    }, []);

    return (
      <div className="flex flex-col justify-center p-px self-center border-b w-[85%] border-solid bg-transparent bg-opacity-70 max-md:max-w-full">
        {/* Question */}

        <div
          onClick={onToggle}
          className="flex gap-10 justify-between items-start py-5 md:py-10 w-full max-md:max-w-full cursor-pointer"
        >
          <h2 className="self-stretch py-px leading-relaxed my-auto font-semibold text-lg md:text-xl tracking-wider uppercase text-red-600">
            {question}
          </h2>

          <div className="flex flex-col items-start self-stretch my-auto min-h-[40px]">
            <button
              type="button"
              className="flex flex-col justify-center p-3 w-10 min-h-[40px]"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close answer" : "Open answer"}
            >
              <img
                loading="lazy"
                src={
                  isOpen
                    ? "../AboutUs/DropUpArr.png"
                    : "../AboutUs/DropdownArr.png"
                }
                alt=""
                className="object-contain flex-1 w-full aspect-square"
              />
            </button>
          </div>
        </div>

        {/* Content */}

        <div
          ref={contentRef}
          className="overflow-hidden transition-all w-[100vw] duration-300 ease-in-out"
          style={{
            maxHeight: `${height}px`,
          }}
        >
          <div className="px-5 py-5">
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item.path ? (
                      <Link href={item.path}>
                        <div className="text-stone-300 hover:text-white hover:underline">
                          {item.label}
                        </div>
                      </Link>
                    ) : (
                      <div className="text-stone-300">{item.label}</div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">{content}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  /* =====================================================
     MOBILE FOOTER RETURN
  ===================================================== */

  return (
    <section className="flex overflow-hidden relative flex-col">
      <div className="flex absolute inset-0 z-0 flex-col py-0.5 w-full max-md:max-w-full"></div>

      <div className="flex z-0 flex-col self-center w-[95%] xl:w-[70%] lg:w-[80%]">
        <h1 className="pb-px w-full text-4xl leading-loose uppercase whitespace-nowrap text-zinc-800 tracking-[3.36px] max-md:max-w-full">
          FAQ
        </h1>

        <div className="flex max-md:flex-col justify-between items-start w-full max-md:max-w-full">
          <div className="flex flex-col pt-5 min-w-[240px] w-full lg:w-[48%] max-md:max-w-full">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                content={item.content}
                isOpen={item.isOpen}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFooter;  
