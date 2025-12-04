"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href,
  color,
  fun,
}: {
  children: React.ReactNode;
  href: string;
  color?: string;
  fun?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => fun && fun()}
      className="
        relative inline-flex items-center gap-1 
        px-6 py-2 sm:px-8  md:px-9
        rounded-full font-semibold 
        text-sm sm:text-base md:text-[16px]
        text-cyan-300 shadow-[0_0_0_2px_#22d3ee]
        transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]
        overflow-hidden group
        border-[3px] md:border-[4px] border-transparent
      "
    >
      {/* LEFT ARROW */}
      <ArrowRight
        className="
          absolute left-[-35%] w-5 sm:w-6 fill-cyan-300 z-[9]
          transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:left-3 sm:group-hover:left-4 group-hover:fill-[#212121]
        "
      />

      {/* TEXT */}
      <span
        className="
          relative z-[1]
          -translate-x-2 sm:-translate-x-3
          transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:translate-x-2 sm:group-hover:translate-x-3 
          group-hover:text-[#212121]
        "
      >
        {children}
      </span>

      {/* EXPANDING CIRCLE */}
      <span
        className="
          absolute top-1/2 left-1/2
          w-4 h-4 sm:w-5 sm:h-5 opacity-0
          -translate-x-1/2 -translate-y-1/2
          bg-cyan-300 rounded-full
          transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:w-[200px] group-hover:h-[200px] 
          sm:group-hover:w-[260px] sm:group-hover:h-[220px]
          md:group-hover:w-[320px] md:group-hover:h-[220px]
          group-hover:opacity-100
        "
      />

      {/* RIGHT ARROW */}
      <ArrowRight
        className="
          absolute right-3 sm:right-4 w-5 sm:w-6 fill-indigo-300 z-[9]
          transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:right-[-35%] group-hover:fill-[#212121]
        "
      />
    </Link>
  );
}
