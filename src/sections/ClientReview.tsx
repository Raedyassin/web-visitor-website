"use client";
import React, { useState } from "react";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/lib/constaints";
import SectionHeader from "@/components/SectionHeader";

export default function ClientReview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="reviews"
      className="min-h-screen py-20 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          badge="What Our Clients Say"
          header1="Client"
          header2="Reviews"
          subHeader1="Don't just take our word for it"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => {
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  relative group
                  bg-slate-900/50 backdrop-blur-xl rounded-2xl
                  border-2 border-cyan-500/50
                  shadow-[0_0_30px_rgba(34,211,238,0.3)]
                  hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 overflow-hidden 
                `}
              >
                {/* Quote Icon Background */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-20 h-20 text-cyan-400" />
                </div>

                <div className="relative p-8 space-y-6">
                  {/* Stars Rating */}
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className="transition-transform duration-300"
                        style={{
                          animation: isHovered
                            ? `starPop 0.5s ease-out ${star * 0.1}s both`
                            : "none",
                        }}
                      >
                        <Star className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                      </div>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 leading-relaxed text-base">
                    {review.review}
                  </p>

                  {/* Gradient Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

                  {/* Client Info */}
                  <div className="space-y-1">
                    <p className="text-white font-bold text-lg">
                      {review.name}
                    </p>
                    <p className="text-cyan-400 text-sm font-medium">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500
                  opacity-0 blur-2xl -z-10
                  ${isHovered ? "opacity-10" : ""}
                  transition-opacity duration-500
                `}
                ></div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>

                {/* Corner Glow */}
                <div
                  className={`
                  absolute -top-10 -right-10 w-32 h-32
                  bg-gradient-to-br from-cyan-400 to-blue-500
                  opacity-20 blur-3xl rounded-full
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
