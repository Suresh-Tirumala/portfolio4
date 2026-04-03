"use client";

import React from "react";
import { Projects_data } from "@/constants";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromTop } from "@/utils/motion";

const Projects = () => {
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center py-20 px-5 md:px-10 relative"
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
                                🚀 Featured Work
                            </h2>
                        </div>
                        <h2 className="text-[40px] md:text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
                            My Projects
                        </h2>
                        <p className="text-gray-400 text-center max-w-[600px] mt-4 text-sm md:text-base">
                            A collection of my recent work. Each project is built with a focus
                            on performance, design, and developer experience.
                        </p>
                    </motion.div>
                )}
            </InView>

            {/* Project Cards Grid */}
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Projects_data.map((project, index) => (
                    <InView triggerOnce={false} key={index}>
                        {({ inView, ref }) => (
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <ProjectCard
                                    src={project.src}
                                    title={project.title}
                                    description={project.description}
                                    github={project.github}
                                    demo={project.demo}
                                    tags={project.tags}
                                />
                            </motion.div>
                        )}
                    </InView>
                ))}
            </div>

            {/* View All Projects Button */}
            <InView triggerOnce={false}>
                {({ inView, ref }) => (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-14"
                    >
                        <a
                            href="https://github.com/Suresh-Tirumala"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-primary py-3 px-8 text-white rounded-full font-medium text-sm border border-[#7042f88b] hover:scale-105 transition-transform duration-200 flex items-center gap-2"
                        >
                            View All on GitHub →
                        </a>
                    </motion.div>
                )}
            </InView>
        </section>
    );
};

export default Projects;