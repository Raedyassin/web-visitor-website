"use client";
import React, { useState } from "react";
import { ExternalLink, Github, } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { colorThemes, projects } from "@/lib/constaints";

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          badge="Our Work"
          header2="Featured Projects"
          subHeader1="Explore our latest work showcasing cutting-edge web solutions tailored to drive business growth."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const theme = colorThemes[project.color as keyof typeof colorThemes];
            const isHovered = hoveredCard === index;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  relative group
                  bg-slate-900/50 backdrop-blur-xl rounded-2xl
                  border-2 ${theme.border}
                  ${theme.shadow} ${theme.hoverShadow}
                  transition-all duration-500 ease-out
                  ${isHovered ? "-translate-y-2" : ""}
                  overflow-hidden
                `}
              >
                {/* Top gradient line */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${theme.gradient}`}
                ></div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={project.image}
                    alt={project.title}
                    className={`
                      w-full h-full object-cover
                      transition-transform duration-700
                      hover:scale-110 scale-100
                    `}
                  />
                  {/* Image Overlay */}
                  <div
                    className={`
                    absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent
                    transition-opacity duration-500
                    hover:opacity-90 opacity-60
                  `}
                  ></div>

                  {/* Category Badge */}
                  <div
                    className={`
                    absolute top-4 left-4
                    px-3 py-1 rounded-full
                    ${theme.bg} backdrop-blur-md
                    border ${theme.border}
                  `}
                  >
                    <span className={`text-xs font-semibold ${theme.text}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`
                          px-3 py-1 rounded-lg text-xs font-medium
                          ${theme.bg} ${theme.text}
                          border ${theme.border}
                        `}
                        style={{
                          animation: isHovered
                            ? `slideIn 0.3s ease-out ${idx * 0.1}s both`
                            : "none",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div
                    className={`w-full h-px bg-gradient-to-r ${theme.gradient} opacity-20`}
                  ></div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className={`
                        flex-1 py-2.5 px-4 rounded-xl
                        border-2 ${theme.border}
                        ${theme.text} font-semibold text-sm
                        ${theme.buttonBg} ${theme.buttonHover}
                        transition-all duration-300
                        flex items-center justify-center gap-2
                        group/btn
                      `}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className={`
                        py-2.5 px-4 rounded-xl
                        border-2 ${theme.border}
                        ${theme.text}
                        ${theme.buttonBg} ${theme.buttonHover}
                        transition-all duration-300
                        flex items-center justify-center
                        group/btn
                      `}
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br ${
                    theme.gradient
                  }
                  opacity-0 blur-2xl -z-10
                  ${isHovered ? "opacity-10" : ""}
                  transition-opacity duration-500
                `}
                ></div>

                {/* Corner accent */}
                <div
                  className={`
                  absolute bottom-0 right-0 w-24 h-24 
                  bg-gradient-to-tl ${theme.gradient} 
                  opacity-10 blur-2xl rounded-full
                  ${isHovered ? "scale-150" : "scale-100"}
                  transition-transform duration-500
                `}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
