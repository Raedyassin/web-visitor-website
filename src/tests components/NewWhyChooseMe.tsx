'use client';
import React, { useState, useEffect } from "react";
import { Check, Sparkles, Zap, Shield, Rocket, Award } from "lucide-react";

// Demo data
const whyChooseMe = [
  {
    title: "Lightning Fast Development",
    Icon: <Zap className="w-7 h-7" />,
    desc: [
      "Rapid prototyping and deployment using modern frameworks",
      "Optimized code for maximum performance and speed",
      "Agile methodology ensuring quick iterations",
      "Pre-built components for faster delivery",
    ],
  },
  {
    title: "Enterprise-Grade Security",
    Icon: <Shield className="w-7 h-7" />,
    desc: [
      "Industry-standard security practices implemented",
      "Regular security audits and updates",
      "Data encryption and secure authentication",
      "GDPR and compliance-ready solutions",
    ],
  },
  {
    title: "Scalable Architecture",
    Icon: <Rocket className="w-7 h-7" />,
    desc: [
      "Built to handle growth from day one",
      "Microservices architecture for flexibility",
      "Cloud-native solutions with auto-scaling",
      "Database optimization for high traffic",
    ],
  },
  {
    title: "Premium Support",
    Icon: <Award className="w-7 h-7" />,
    desc: [
      "24/7 technical support and maintenance",
      "Regular updates and feature enhancements",
      "Dedicated project manager for communication",
      "Free post-launch support and bug fixes",
    ],
  },
];

const colorThemes = [
  {
    gradient: "from-cyan-400 to-blue-500",
    border: "border-cyan-500/50",
    shadow: "shadow-[0_0_30px_rgba(34,211,238,0.3)]",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    iconBg: "bg-cyan-500/20",
    checkIcon: "text-cyan-400",
  },
  {
    gradient: "from-purple-400 to-pink-500",
    border: "border-purple-500/50",
    shadow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    iconBg: "bg-purple-500/20",
    checkIcon: "text-purple-400",
  },
  {
    gradient: "from-emerald-400 to-green-500",
    border: "border-emerald-500/50",
    shadow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(16,185,129,0.5)]",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
    checkIcon: "text-emerald-400",
  },
  {
    gradient: "from-blue-400 to-indigo-500",
    border: "border-blue-500/50",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    hoverShadow: "hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    iconBg: "bg-blue-500/20",
    checkIcon: "text-blue-400",
  },
];

export default function WhyChooseMeDemo() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (e) => {
    const container = e.target;
    setScrollPosition(container.scrollLeft);
  };

  return (
    <div
      className="min-h-screen px-4 md:px-8 overflow-hidden py-20"
      style={{ backgroundColor: "#010725" }}
    >
      <div>
        {/* Enhanced Header */}
        <div className="flex flex-col items-center gap-6 px-4 md:px-10 py-10 mb-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-5 py-2 backdrop-blur-sm animate-pulse">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-semibold">
              Why Choose Us
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl">
            <span className="text-white">Why </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Businesses Trust
            </span>
            <span className="text-white"> Web Visitor</span>
          </h2>

          {/* Description */}
          <div className="space-y-2 max-w-3xl">
            <p className="text-gray-300 text-lg leading-relaxed">
              We don't just write code; we build digital assets that drive
              growth. Our commitment to quality and performance sets us apart.
            </p>
            <p className="text-gray-400 text-base">
              We combine technical excellence with business understanding.
            </p>
          </div>

        </div>

        {/* Scrollable Container */}
        <div
          className="overflow-x-auto overflow-y-hidden pb-8 px-4 md:px-10 scrollbar-hide"
          onScroll={handleScroll}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex flex-row gap-8 w-max">
            {whyChooseMe.map((card, index) => {
              const theme = colorThemes[index % colorThemes.length];
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={card.title}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`
                    relative group
                    flex flex-col
                    bg-slate-900/50 backdrop-blur-xl rounded-2xl
                    border-2 ${theme.border}
                    ${theme.shadow} ${theme.hoverShadow}
                    transition-all duration-500 ease-out
                    w-[420px] overflow-hidden
                    ${isHovered ? "-translate-y-2 scale-[1.02]" : ""}
                  `}
                >
                  {/* Top gradient line */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${theme.gradient}`}
                  ></div>

                  <div className="p-8 space-y-6 relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4">
                      <div
                        className={`
                          p-3 rounded-xl ${theme.iconBg}
                          group-hover:scale-110 transition-transform duration-300
                        `}
                      >
                        <div className={theme.text}>{card.Icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className={`w-full h-px bg-gradient-to-r ${theme.gradient} opacity-20`}
                    ></div>

                    {/* Features List */}
                    <div className="space-y-4">
                      {card.desc.map((desc, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 group/item"
                          style={{
                            animation: isHovered
                              ? `slideIn 0.3s ease-out ${idx * 0.1}s both`
                              : "none",
                          }}
                        >
                          <div
                            className={`
                              mt-0.5 p-1 rounded-lg ${theme.iconBg}
                              group-hover/item:scale-110 transition-transform duration-300
                              flex-shrink-0
                            `}
                          >
                            <Check className={`w-4 h-4 ${theme.checkIcon}`} />
                          </div>
                          <p className="text-gray-300 text-base leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <span className={`text-7xl font-bold ${theme.text}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
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
                      absolute bottom-0 right-0 w-32 h-32 
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

        {/* Scroll Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {whyChooseMe.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  scrollPosition > index * 400
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
