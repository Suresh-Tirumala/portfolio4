"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Props {
    src: string;
    title: string;
    description: string;
    github?: string;
    demo?: string;
    tags?: string[];
}

const ProjectCard = ({ src, title, description, github, demo, tags }: Props) => {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative overflow-hidden rounded-2xl border border-[#7042f861] bg-[#0300145e] backdrop-blur-sm flex flex-col group shadow-lg shadow-[#2A0E61]/30"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden h-52">
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />

                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#030014]/60 backdrop-blur-sm">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-[#7042f8]/80 hover:bg-[#7042f8] text-white rounded-full text-sm font-medium transition-all duration-200 border border-[#7042f88b]"
                            aria-label="View GitHub Repository"
                        >
                            <FiGithub className="w-4 h-4" />
                            Code
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-[#ffffff15] text-white rounded-full text-sm font-medium transition-all duration-200 border border-white/30"
                            aria-label="View Live Demo"
                        >
                            <FiExternalLink className="w-4 h-4" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-grow">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="text-xs px-3 py-1 rounded-full border border-[#7042f861] text-[#ba9cff] bg-[#7042f811]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;