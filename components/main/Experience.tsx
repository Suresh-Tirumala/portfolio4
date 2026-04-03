"use client";

import React from "react";
import { Experience_data } from "@/constants";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop } from "@/utils/motion";

const Experience = () => {
    return (
        <section
            id="experience"
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
                                🧑‍💻 Career Journey
                            </h2>
                        </div>
                        <h2 className="text-[40px] md:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
                            Experience
                        </h2>
                        <p className="text-gray-400 text-center max-w-[600px] mt-4 text-sm md:text-base">
                            A timeline of my professional journey — roles I&apos;ve held, teams
                            I&apos;ve built, and impact I&apos;ve created.
                        </p>
                    </motion.div>
                )}
            </InView>

            {/* Timeline */}
            <div className="relative w-full max-w-4xl">
                {/* Vertical line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/70 via-cyan-500/40 to-transparent -translate-x-1/2" />

                <div className="flex flex-col gap-12">
                    {Experience_data.map((exp, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <InView triggerOnce={false} key={index}>
                                {({ inView, ref }) => (
                                    <motion.div
                                        ref={ref}
                                        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                                        animate={
                                            inView
                                                ? { opacity: 1, x: 0 }
                                                : { opacity: 0, x: isLeft ? -60 : 60 }
                                        }
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className={`relative flex flex-col md:flex-row items-center gap-6 ${
                                            isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                    >
                                        {/* Card */}
                                        <div className="w-full md:w-[45%] rounded-2xl border border-[#7042f861] bg-[#0300145e] backdrop-blur-sm p-6 shadow-lg shadow-[#2A0E61]/20 hover:border-[#7042f8] transition-colors duration-300">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h3 className="text-white font-bold text-lg">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold text-sm">
                                                        {exp.company}
                                                    </p>
                                                </div>
                                                <span className="text-gray-500 text-xs whitespace-nowrap ml-2 mt-1 border border-[#7042f861] rounded-full px-3 py-1">
                                                    {exp.duration}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                                {exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tags.map((tag, ti) => (
                                                    <span
                                                        key={ti}
                                                        className="text-xs px-3 py-1 rounded-full border border-[#7042f861] text-[#ba9cff] bg-[#7042f811]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Timeline dot — hidden on mobile */}
                                        <div className="hidden md:flex w-[10%] justify-center">
                                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 ring-4 ring-[#030014] shadow-lg shadow-purple-500/50 z-10" />
                                        </div>

                                        {/* Spacer for the other side */}
                                        <div className="hidden md:block w-[45%]" />
                                    </motion.div>
                                )}
                            </InView>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
