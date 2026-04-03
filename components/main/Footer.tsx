import React from "react";
import {
    RxGithubLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { FiMail, FiMapPin } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#03001417] backdrop-blur-md border-t border-[#7042f830] text-gray-300 py-12 px-5 md:px-20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <a href="#home" className="flex items-center gap-3 w-fit">
                            <Image
                                src="/logo.png"
                                alt="Suresh Tirumala Logo"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <span className="font-bold text-lg text-white">Suresh Tirumala</span>
                        </a>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                            Full Stack Developer passionate about building impactful digital
                            experiences. Open to new opportunities.
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <FiMapPin className="w-4 h-4 text-[#ba9cff]" />
                            <span>Kerala, India</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-base">Navigation</h4>
                        <nav className="flex flex-col gap-3">
                            {[
                                { label: "Home", href: "#home" },
                                { label: "About Me", href: "#about" },
                                { label: "Skills", href: "#skills" },
                                { label: "Experience", href: "#experience" },
                                { label: "Projects", href: "#projects" },
                                { label: "Contact", href: "#contact" },
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-400 text-sm hover:text-[#ba9cff] transition-colors duration-200 w-fit"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-base">Connect</h4>
                        <a
                            href="mailto:sureshtirumala466@gmail.com"
                            className="flex items-center gap-3 text-gray-400 text-sm hover:text-[#ba9cff] transition-colors duration-200"
                        >
                            <FiMail className="w-4 h-4 text-[#ba9cff]" />
                            sureshtirumala466@gmail.com
                        </a>

                        <div className="flex flex-row gap-5 mt-2">
                            <a
                                href="https://www.linkedin.com/in/suresh-tirumala/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full border border-[#7042f861] bg-[#7042f811] flex items-center justify-center text-[#ba9cff] hover:bg-[#7042f830] hover:scale-110 transition-all duration-200"
                            >
                                <RxLinkedinLogo className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/Suresh-Tirumala"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="w-10 h-10 rounded-full border border-[#7042f861] bg-[#7042f811] flex items-center justify-center text-[#ba9cff] hover:bg-[#7042f830] hover:scale-110 transition-all duration-200"
                            >
                                <RxGithubLogo className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="MuLearn"
                                className="w-10 h-10 rounded-full border border-[#7042f861] bg-[#7042f811] flex items-center justify-center hover:bg-[#7042f830] hover:scale-110 transition-all duration-200"
                            >
                                <Image src="/mulearn.svg" alt="MuLearn" width={20} height={20} />
                            </a>
                        </div>

                        {/* Available badge */}
                        <div className="flex items-center gap-2 mt-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                            </span>
                            <span className="text-green-400 text-xs">
                                Open to opportunities
                            </span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#7042f820] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm">
                        © {currentYear} Jenin Joseph. All rights reserved.
                    </p>
                    <p className="text-gray-700 text-xs">
                        Built with Next.js · TypeScript · Framer Motion · Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;