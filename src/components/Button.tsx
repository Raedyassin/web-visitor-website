"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href,
  color,
}: {
  children: React.ReactNode;
    href: string;
  color?: string;
}) {
  return (
    <Link
      href={href}
      className=" 
        relative inline-flex items-center gap-1 px-9 py-2
        rounded-full font-semibold text-[16px]
        text-lime-300 shadow-[0_0_0_2px_#ccff00]
        transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]
        overflow-hidden group
        border-[4px] border-transparent
      "
    >
      {/* LEFT ARROW (arr-2) */}
      <ArrowRight
        className="
          absolute left-[-25%] w-6 fill-lime-300 z-[9]
          transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:left-4 group-hover:fill-[#212121]
        "
      />

      {/* BUTTON TEXT */}
      <span
        className="
          relative z-[1]
          -translate-x-3
          transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:translate-x-3 group-hover:text-[#212121]
        "
      >
        {children}
      </span>

      {/* EXPANDING CIRCLE */}
      <span
        className="
          absolute top-1/2 left-1/2
          w-5 h-5 opacity-0
          -translate-x-1/2 -translate-y-1/2
          bg-lime-300 rounded-full
          transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100
        "
      />

      {/* RIGHT ARROW (arr-1) */}
      <ArrowRight
        className="
          absolute right-4 w-6 fill-indigo-300 z-[9]
          transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          group-hover:right-[-25%] group-hover:fill-[#212121]
        "
      />
    </Link>
  );
}
