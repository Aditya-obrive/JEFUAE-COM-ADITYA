'use client'

import React, { useState, useEffect, useRef, useContext } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { TranslationContext } from '@/context/TranslationContext'

const menuItems = [
    { label: 'About', hasDropdown: true },
    { label: 'Our Business', hasDropdown: true },
    { label: 'Industries', hasDropdown: true },
    { label: 'Blogs', hasDropdown: false, path: '/blog' },
]

const Navbar = () => {
    const { isArabic, toggleTranslation } = useContext(TranslationContext)
    const [isDropdownVisible, setIsDropdownVisible] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [isSlideOpen, setIsSlideOpen] = useState(false)
    const [resetTimeout, setResetTimeout] = useState(null)
    const [scrollNav, setScrollNav] = useState(false)
    const [hoverLine, setHoverLine] = useState('')

    const pathname = usePathname()
    const isFaqPage = pathname?.endsWith('/faq')

    const toggleDropdown = () => setIsDropdownVisible(prev => !prev)
    const toggleSlideMenu = () => setIsSlideOpen(prev => !prev)

    useEffect(() => {
        if (isDropdownVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isDropdownVisible]);

    const handleMenuHover = label => {
        if (resetTimeout) {
            clearTimeout(resetTimeout)
            setResetTimeout(null)
        }

        if (label === 'Home' || label === 'Careers') {
            setActiveSection('')
        } else {
            setActiveSection(label)
        }
    }

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setActiveSection('')
        }, 200)
        setResetTimeout(timeout)
    }

    useEffect(() => {
        if (activeSection || isSlideOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
            if (resetTimeout) clearTimeout(resetTimeout)
        }
    }, [activeSection, isSlideOpen, resetTimeout])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrollNav(true)
            } else {
                setScrollNav(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleMouseLineEnter = label => setHoverLine(label)
    const handleMouseLineLeave = () => setHoverLine('')

    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
        exit: { opacity: 0, y: -50, transition: { duration: 0.6, ease: 'easeIn' } },
    }

    const menuVariants = {
        hidden: {
            opacity: 0,
            transition: { when: 'afterChildren' },
        },
        visible: {
            opacity: 1,
            transition: { when: 'beforeChildren', staggerChildren: 0.15 },
        },
        exit: {
            opacity: 0,
            transition: { when: 'afterChildren', staggerChildren: 0.15 },
        },
    }

    useEffect(() => {
        // Close all menus on route change
        setActiveSection('');
        setIsSlideOpen(false);
        setIsDropdownVisible(false);
        document.body.style.overflow = ''; // re-enable scroll
    }, [pathname]);


    return (
        <div
            className={`flex fixed w-full z-[60] overflow-hidden flex-col transition-colors duration-900 ${pathname?.endsWith('/faq') ? 'faq-page-navbar' : ''} ${scrollNav || activeSection
                ? 'bg-stone-800'
                : pathname === '/' || pathname === '/about-us' || pathname === '/leadership-team'
                    ? 'lg:bg-transparent'
                    : 'bg-stone-800'
                }`}
        >
            <div className="flex flex-col pt-6 w-full h-full max-md:max-w-full">
                <header className="flex relative lg:gap-20 justify-between items-center self-center w-[90%] 2xl:max-w-[92%] max-md:max-w-full">
                    <Link href='/' className='z-20'>
                        <img
                            loading="lazy"
                            // src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f72711985a65d5e9cccf583145ef02cf25367e53a9dbd9152d31ad79b46cc8c?placeholderIfAbsent=true&apiKey=60c6eb6ce37644fdb727618799199006"
                            src="/NavLogo/JEFLogo.svg"
                            alt="JEF Company logo"
                            className="object-contain w-[7rem] lg:w-[7rem] 2xl:w-[8rem]"
                        />
                    </Link>

                    <div className="flex justify-between w-screen">
                        <nav className="flex gap-5 xl:gap-8 items-center my-auto max-md:max-w-full">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="lg:flex cursor-pointer hidden gap-2 justify-center items-center self-stretch my-auto group" // Added 'group' here
                                >
                                    {item.path ? (
                                        <Link
                                            href={item.path}
                                            className={`nav-item cursor-pointer uppercase md:text-xs xl:text-sm font-medium tracking-[2px] text-white ${pathname === item.path ? 'active' : ''
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <button
                                            onMouseEnter={() => handleMenuHover(item.label)}
                                            onMouseLeave={handleMouseLeave}
                                            className="nav-item cursor-pointer uppercase md:text-xs xl:text-sm font-medium text-white tracking-[2px]"
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                    {item.hasDropdown && (
                                        <div className="flex cursor-pointer flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-8 min-h-[20px]">
                                            <img
                                                onMouseEnter={() => handleMenuHover(item.label)}
                                                onMouseLeave={handleMouseLeave}
                                                loading="lazy"
                                                src="/HomePageImg/Dropdown.png"
                                                alt="Dropdown"
                                                className="object-contain w-5 hidden lg:block transition-transform duration-300 transform group-hover:rotate-180"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}

                        </nav>


                        <div className="flex gap-8 items-center self-stretch my-auto max-md:max-w-full">
                            <button onClick={toggleDropdown} className="lg:flex cursor-pointer z-20 hidden group gap-2.5 items-center self-stretch my-auto translation">
                                <div
                                    translate='no'
                                    className="self-stretch uppercase cursor-pointer my-auto text-xs xl:text-sm font-light tracking-[2px] text-white"
                                >
                                    {isArabic ? "Arabic (عربي)" : "English"}
                                </div>
                                <div className="flex cursor-pointer flex-col justify-center items-center self-stretch px-2.5 py-3.5 my-auto w-8 min-h-[20px]">
                                    <img
                                        loading="lazy"
                                        src="/HomePageImg/Dropdown.png"
                                        alt="Dropdown"
                                        className={`object-contain w-5 hidden lg:block ${isDropdownVisible ? "transition-transform duration-300 transform rotate-180 group-hover:rotate-180" : "transition-transform duration-300 transform rotate-360"
                                            }`}
                                    />
                                </div>
                            </button>
                            <AnimatePresence>
                                {isDropdownVisible && (
                                    <motion.div
                                        animate="visible"
                                        id="navigation-menu"
                                        initial="hidden"
                                        exit="exit"
                                        variants={menuVariants}
                                        className="fixed inset-0 bg-black flex z-10 justify-center items-start"
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
                                    >
                                        <div
                                            className=" text-white shadow-md mt-40 flex flex-col items-end text-right w-[90%] 2xl:max-w-[92%]"
                                        >
                                            <motion.div
                                                variants={buttonVariants}
                                                translate='no'
                                                className="cursor-pointer flex items-center gap-2 mb-8 w-fit"
                                                onClick={() => {
                                                    toggleTranslation("en");
                                                    setIsDropdownVisible(false);
                                                }}
                                            >
                                                <div>English</div> <img className={`w-4 h-4 ${isArabic ? "hidden" : "block"}`} src="/red-check-mark-icon.png" />
                                            </motion.div>
                                            <motion.div
                                                variants={buttonVariants}
                                                translate='no'
                                                className="cursor-pointer w-fit flex items-center gap-2"
                                                onClick={() => {
                                                    toggleTranslation("ar");
                                                    setIsDropdownVisible(false);
                                                }}
                                            >
                                                <div>Arabic (عربي)</div> <img className={`w-4 h-4 ${isArabic ? "block" : "hidden"}`} src="/red-check-mark-icon.png" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <Link href='/get-in-touch' className='z-20'>
                                <button className="gap-3 uppercase cursor-pointer self-stretch py-3 px-4 md:py-2 lg:py-3 md:px-4 lg:px-7 my-auto text-xs md:text-sm text-[#FF0000] bg-white hover:text-white hover:bg-[#FF0000] rounded-[30px] tracking-[2px] whitespace-nowrap">
                                    Contact Us
                                </button>
                            </Link>
                            <button className="lg:hidden mr-2 justify-items-center w-[2.3rem]" onClick={toggleSlideMenu}>
                                <img src="/HomePageImg/MenuLogo.png" alt="Mobile View Menu Button" />
                            </button>
                        </div>
                    </div>
                </header>

                <div className="relative shrink-0 mt-7 h-0 border-b border-solid border-neutral-600 max-md:max-w-full" />
            </div>

            {/* Conditionally Render Sections */}
            {activeSection === 'About' && (
                <div
                    onMouseEnter={() => handleMenuHover('About')}
                    onMouseLeave={handleMouseLeave}
                >
                    <AboutSection />
                </div>
            )}
            {activeSection === 'Our Business' && (
                <div
                    onMouseEnter={() => handleMenuHover('Our Business')}
                    onMouseLeave={handleMouseLeave}
                >
                    <ServicesComponent />
                </div>
            )}
            {activeSection === 'Industries' && (
                <div
                    onMouseEnter={() => handleMenuHover('Industries')}
                    onMouseLeave={handleMouseLeave}
                >
                    <IndustriesComponent />
                </div>
            )}

            {/* Mobile Navbar Content */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-stone-900 z-50 transform ${isSlideOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-500 ease-in-out`}
            >
                <button
                    className="absolute top-5 right-4 p-2 text-white"
                    onClick={toggleSlideMenu}
                >
                    <img src="/HomePageImg/CLoseMenuLogo.png" alt="closeButton" className='w-[10vw] sm:w-[5vw] md:w-[3vw]' />
                </button>
                <div className="h-full">
                    <FAQComponent />
                </div>
            </div>

        </div>


    );
};

const navigationItems = [
    { number: "01", title: "About JEF", path: "/about-us" },
    { number: "02", title: "JEF leadership team", path: "/leadership-team" },  // Add a path for the leadership team
    { number: "03", title: "Our mission" },
    { number: "04", title: "Our vision" }
];

const contentMap = {
    // "01": "About",
    "02": "",
    "03": "Deliver Value added, technically superior and cost-optimum solutions to enhance the safety & reliability of Electrical systems by combining knowledge, experience and technology.",
    "04": "Make more customers across the world benefit from our expertise and achieve 40% annual growth rate."
};

function AboutSection() {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-stone-900 max-md:px-5 max-md:pb-24">
            <div className="ml-10 max-w-full w-[994px]">
                <div className="flex gap-5 max-md:flex-col">
                    <nav className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-wrap grow gap-6 max-md:mt-10 max-md:max-w-full h-full">
                            <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit max-md:max-w-full">
                                {navigationItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-7 items-center mt-11 uppercase tracking-[3.36px] max-md:mt-10"
                                    >
                                        <div className="self-stretch my-auto text-base text-[#FF0000]">
                                            {item.number}
                                        </div>
                                        <Link
                                            href={item.path || "#"} // Use the path for clickable items, otherwise keep "#" for others
                                            onMouseEnter={() => setHoveredItem(item.number)}
                                            className="self-stretch my-auto text-lg hover:text-gray-400 font-medium text-white"
                                        >
                                            {item.title}
                                        </Link>
                                        {item.number === "01" && (
                                            <div className="flex flex-col justify-center items-center py-1.5 pr-2.5 pl-2.5 min-h-[29px]">
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div
                                className="shrink-0 w-0 border-l border-solid border-neutral-700 mt-[9%] min-h-full"
                                role="separator"
                                aria-orientation="vertical"
                            ></div>
                        </div>
                    </nav>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div
                            className={`transition-all duration-500 ease-in-out flex gap-10 mt-[10%] text-xl font-medium text-white uppercase tracking-[3.36px] max-md:mt-10 ${hoveredItem ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                                }`}
                        >
                            <Link href="/about-us">
                                <h2 className="text-xs leading-5 hover:text-gray-400">
                                    {hoveredItem ? contentMap[hoveredItem] : "About"}
                                </h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ServiceItem = ({ icon, text, path, isVisible }) => (
    <div
        className={`flex gap-4 items-center mt-8 first:mt-10 transition-all duration-500 ease-in-out`}
    >
        <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <Link href={path}>
            <div className="text-xs self-stretch hover:text-gray-400 my-auto">{text}</div>
        </Link>
    </div>
);

function ServicesComponent() {

    const services = [
        {
            icon: '/es-nav-logo.png',
            text: 'Earthing studies',
            path: '/earthing-studies',
        },
        {
            icon: '/lps-nav-logo.png',
            text: 'Lightning protection studies',
            path: '/lightning-protection-studies',
        },
        {
            icon: '/pss-nav-logo.png',
            text: 'Power system studies',
            path: '/power-system-studies',
        },
        {
            icon: '/pqs-nav-logo.png',
            text: 'Power quality studies',
            path: '/power-quality-studies',
        },
        {
            icon: '/ie-logo.png',
            text: 'Instrumentation earthing studies',
            path: '/instrumentation-earthing-studies',
        },
        {
            icon: '/emi-emc-nav.png',
            text: 'EMI EMC & AC INTERFERENCE STUDIES',
            path: '/emi-emc',
        },
        {
            icon: '/rc-logo.png',
            text: 'Root Cause Analysis',
            path: '/root-cause-analysis',
        },
    ];

    return (
        <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-stone-900 max-md:px-5 max-md:pb-24">
            <div className="w-full">
                <div className="flex">
                    <div className="flex flex-col ml-10 max-md:w-full">
                        <div className="flex flex-wrap grow gap-10 text-base font-medium text-white uppercase h-full tracking-[3.36px] max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit max-md:max-w-full">
                                {services.map((service, index) => (
                                    <ServiceItem
                                        key={index}
                                        icon={service.icon}
                                        text={service.text}
                                        path={service.path}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const IndustriesItem = ({ path, icon, text, isVisible }) => (
    <div
        className={`flex gap-4 items-center mt-8 first:mt-10 transition-all duration-500 ease-in-out`}
    >
        <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <Link href={path}>
            <div className="text-xs self-stretch  hover:text-gray-400 my-auto">{text}</div>
        </Link>
    </div>
);

function IndustriesComponent() {

    const Industries = [
        { icon: '../AboutUs/OilandGas.png', text: 'Oil and Gas', path: '/industries/oilandgas' },
        { icon: '../AboutUs/PoweUtilities.png', text: 'Power Utilities', path: '/industries/powerutilities' },
        { icon: '../AboutUs/MFplant.png', text: 'Manufacturing Plant', path: '/industries/manufacturingplant' },
        { icon: '../AboutUs/ProcessPlant.png', text: 'Process Plant', path: '/industries/processplant' },
        { icon: '../AboutUs/CBimg.png', text: 'Commercial Buildings', path: '/industries/commercialbuilding' },
        { icon: '../AboutUs/RenewableEnergy.png', text: 'Renewable Energy', path: '/industries/renewableenergy' },
    ];

    return (
        <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-stone-900 max-md:px-5 max-md:pb-24">
            <div className="ml-10 w-full">
                <div className="flex">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-wrap grow gap-10 text-base font-medium text-white h-full uppercase tracking-[3.36px] max-md:mt-10 max-md:max-w-full">
                            <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit max-md:max-w-full">
                                {Industries.map((industry, index) => (
                                    <IndustriesItem
                                        key={index}
                                        icon={industry.icon}
                                        text={industry.text}
                                        path={industry.path}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const FAQComponent = () => {

    const { isArabic, toggleTranslation } = useContext(TranslationContext);

    const [faqData, setFaqData] = useState([
        {
            question: "Home",
            path: "/", // Direct link path for Home
            isOpen: false,
        },
        {
            question: "About",
            content: [
                { label: 'About Us', path: '/about-us' },
                { label: 'JEF Leadership Team', path: '/leadership-team' },
            ],
            isOpen: false,
        },
        {
            question: "Our Business",
            content: [
                { label: 'Earthing Studies', path: '/earthing-studies' },
                { label: 'LPS System Studies', path: '/lightning-protection-studies' },
                { label: 'Power System Studies', path: '/power-system-studies' },
                { label: 'Power Quality Studies', path: '/power-quality-studies' },
                { label: 'Instrumentation Studies', path: '/instrumentation-earthing-studies' },
                { label: 'EMI EMC', path: '/emi-emc' },
                { label: 'Root Cause Analysis', path: '/root-cause-analysis' }
            ],
            isOpen: false,
        },
        {
            question: "Industries",
            content: [
                { label: 'Oil and Gas', path: '/industries/oilandgas' },
                { label: 'Power Utilites', path: '/industries/powerutilities' },
                { label: 'Manufacturing Plant', path: '/industries/manufacturingplant' },
                { label: 'Process Plant', path: '/industries/processplant' },
                { label: 'Commercial Buildings', path: '/industries/commercialbuilding' },
                { label: 'Renewable Energy', path: '/industries/renewableenergy' }
            ],
            isOpen: false,
        },
        {
            question: "Blogs",
            path: "/blog", // Direct link path for Blogs
            isOpen: false,
        },
    ]);

    const toggleFAQ = (index) => {
        setFaqData(
            faqData.map((item, i) => ({
                ...item,
                isOpen: i === index ? !item.isOpen : false // Close other items
            }))
        );
    };

    const FAQItem = ({ question, content, path, isOpen, onToggle }) => {
        const contentRef = useRef(null);
        const [height, setHeight] = useState(0);

        useEffect(() => {
            if (isOpen && contentRef.current) {
                setHeight(contentRef.current.scrollHeight);
            } else {
                const timeout = setTimeout(() => {
                    setHeight(0);
                }, 1000); // Match this duration with the transition duration

                return () => clearTimeout(timeout);
            }
        }, [isOpen]);

        return (
            <div className="flex flex-col justify-center p-px self-center border-b w-[85%] border-solid bg-transparent bg-opacity-70 max-md:max-w-full">
                <div onClick={onToggle} className="flex gap-10 justify-between items-start py-5 md:py-10 w-full max-md:max-w-full">
                    {path ? (
                        <Link href={path}>
                            <h2 className="self-stretch py-px leading-relaxed my-auto font-semibold text-xl tracking-wider uppercase text-red-600">
                                {question}
                            </h2>
                        </Link>
                    ) : (
                        <h2 className="self-stretch py-px leading-relaxed my-auto font-semibold text-xl tracking-wider uppercase text-red-600">
                            {question}
                        </h2>
                    )}
                    {!path && ( // Only show the dropdown button if no direct path exists
                        <button
                            className="flex flex-col justify-center p-3 w-10 min-h-[40px]"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? "Close answer" : "Open answer"}
                        >
                            <img
                                loading="lazy"
                                src={
                                    isOpen
                                        ? "/AboutUs/DropUpArr.png"
                                        : "/AboutUs/DropdownArr.png"
                                }
                                alt=""
                                className="object-contain flex-1 w-full aspect-square"
                            />
                        </button>
                    )}
                </div>
                {!path && (
                    <div
                        ref={contentRef}
                        className="overflow-hidden transition-all w-[100vw] duration-300 ease-in-out"
                        style={{ maxHeight: `${height}px` }}
                    >
                        <div className="px-5 py-5">
                            {Array.isArray(content) ? (
                                <ul>
                                    {content.map((item, idx) => (
                                        <li key={idx} className="mb-2">
                                            <Link href={item.path}>
                                                <div className="text-stone-300 hover:underline">
                                                    {item.label}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className='text-gray-500'>{content}</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    };


    return (
        <section className="flex mt-[15%] overflow-hidden relative flex-col">
            <div className="flex absolute inset-0 z-0 flex-col py-0.5 w-full max-md:max-w-full"></div>
            <div className="flex z-0 flex-col self-center w-[95%] xl:w-[70%] lg:w-[80%]">
                <div className="flex max-md:flex-col justify-between items-start w-full max-md:max-w-full">
                    <div className="flex flex-col pt-5 min-w-[240px] w-full lg:w-[48%] max-md:max-w-full">
                        {faqData.slice(0, 5).map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                content={item.content} // Pass dynamic content
                                path={item.path} // Pass direct link path
                                isOpen={item.isOpen}
                                onToggle={() => toggleFAQ(index)}
                            />
                        ))}
                        <div className='mt-[10%] mx-auto'>
                            <button
                                onClick={() => {
                                    console.log("Switched to English");
                                    toggleTranslation("en");
                                }}
                                translate='no'
                                className={` ${isArabic ? "block" : "hidden"} self-stretch border p-4 uppercase my-auto text-base font-light border-red-500 tracking-[2px] text-white`}
                            >
                                English
                            </button>

                            <button
                                onClick={() => {
                                    console.log("Switched to arabic");
                                    toggleTranslation("ar");
                                }}
                                translate='no'
                                className={` ${isArabic ? "hidden" : "block"} self-stretch border p-4 uppercase my-auto text-base font-light border-red-500 tracking-[2px] text-white`}
                            >
                                Arabic (عربي)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Navbar;
