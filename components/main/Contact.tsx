"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend } from "react-icons/fi";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Web3Forms AJAX submission
        const data = {
            ...formData,
            access_key: "https://api.web3forms.com/submit" // <-- ADD YOUR WEB3FORMS ACCESS KEY HERE
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            }).then((res) => res.json());

            if (res.success) {
                setSubmitted(true);
                // Clear the form fields after successful submission
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitted(false), 4000);
            } else {
                console.error("Submission failed", res);
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Form submission error", error);
            alert("Network error. Please try again later.");
        }
    };

    const contactInfo = [
        {
            icon: <FiMail className="w-5 h-5" />,
            label: "Email",
            value: "sureshtirumala466@gmail.com",
            href: "mailto:sureshtirumala466@gmail.com",
        },
        {
            icon: <FiMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Kerala, India",
            href: null,
        },
        {
            icon: <FiLinkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "linkedin.com/in/suresh-tirumala",
            href: "https://www.linkedin.com/in/suresh-tirumala/",
        },
        {
            icon: <FiGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "github.com/Suresh-Tirumala",
            href: "https://github.com/Suresh-Tirumala",
        },
    ];

    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-20 px-5 md:px-10 relative overflow-hidden"
        >
            {/* Section Header */}
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={slideInFromTop}
                        className="flex flex-col items-center mb-16"
                    >
                        <div className="Welcome-box px-[15px] py-[4px] z-[20] border border-[#7042f88b] opacity-[0.9] mb-6">
                            <h2 className="Welcome-text text-[13px] font-semibold tracking-widest uppercase">
                                📬 Get In Touch
                            </h2>
                        </div>
                        <h2 className="text-[40px] md:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
                            Contact Me
                        </h2>
                        <p className="text-gray-400 text-center max-w-[600px] mt-4 text-sm md:text-base">
                            Have a project in mind or want to work together? I&apos;d love to hear
                            from you. Drop me a message and I&apos;ll get back to you ASAP!
                        </p>
                    </motion.div>
                )}
            </InView>

            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Info */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.4)}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-white text-2xl font-bold">
                                Let&apos;s build something{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                    amazing
                                </span>{" "}
                                together
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                I&apos;m currently open to full-stack development roles and
                                freelance projects. Whether you have a
                                question or just want to say hi, my inbox is always open!
                            </p>

                            <div className="flex flex-col gap-4 mt-2">
                                {contactInfo.map((info, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full border border-[#7042f861] bg-[#7042f811] flex items-center justify-center text-[#ba9cff] flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-xs uppercase tracking-wider">
                                                {info.label}
                                            </p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 text-sm hover:text-[#ba9cff] transition-colors duration-200"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-300 text-sm">
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Availability Badge */}
                            <div className="flex items-center gap-3 mt-4 Welcome-box px-4 py-3 border border-[#7042f861] w-fit">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                                </span>
                                <span className="text-green-400 text-sm font-medium">
                                    Available for opportunities
                                </span>
                            </div>
                        </motion.div>
                    )}
                </InView>

                {/* Contact Form */}
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.4)}
                        >
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-5 rounded-2xl border border-[#7042f861] bg-[#0300145e] backdrop-blur-sm p-7 shadow-lg shadow-[#2A0E61]/20"
                            >
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-400 text-sm" htmlFor="contact-name">
                                        Your Name
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-[#0300142e] border border-[#7042f861] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#7042f8] transition-colors duration-200"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-400 text-sm" htmlFor="contact-email">
                                        Email Address
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-[#0300142e] border border-[#7042f861] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#7042f8] transition-colors duration-200"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-400 text-sm" htmlFor="contact-message">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Hi Suresh! I'd love to talk about..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="bg-[#0300142e] border border-[#7042f861] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#7042f8] transition-colors duration-200 resize-none"
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center gap-2 button-primary py-3 px-6 text-white rounded-lg font-medium text-sm border border-[#7042f88b] transition-all duration-200"
                                >
                                    {submitted ? (
                                        "✅ Message Sent!"
                                    ) : (
                                        <>
                                            <FiSend className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    )}
                </InView>
            </div>
        </section>
    );
};

export default Contact;
