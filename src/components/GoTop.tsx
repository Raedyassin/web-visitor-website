"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function GoTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isMovile = useMediaQuery({ maxWidth: 768 });

  return (
    <button
      onClick={scrollToTop}
      className={`${isMovile ? "hidden" : ""} group flex items-center gap-2 px-4 py-2 z-10
      right-10 bottom-4 fixed transition-all duration-300
      bg-cyan-900 border border-cyan-500/30 rounded-xl 
      hover:bg-cyan-500/50 hover:border-cyan-500/50 
      hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] 
      cursor-pointer
      ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }
    `}
    >
      <ArrowUp className="w-5 h-5 text-cyan-600 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
}
