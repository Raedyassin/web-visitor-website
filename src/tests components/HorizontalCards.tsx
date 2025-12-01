"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalCards() {
  useGSAP(() => {
    const row = document.querySelector(".cards-row");

    const totalWidth = row?.scrollWidth || 0;
    const viewportWidth = window.innerWidth;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".horizontal-section",
        start: "top top", // pin starts here
        end: () => "+=" + (totalWidth - viewportWidth),
        pin: true,
        scrub: true,
      },
    });
    // 1️⃣ Entrance animation (bottom-right → center)
    tl.fromTo(
      ".cards-row",
      {
        x: 100,
        y: 100,
        opacity: 0,
        scale: 0.6,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        // ease: "power3.out",
        scrollTrigger: {
          trigger: ".horizontal-section",
          start: "top bottom", // start when it barely enters
          scrub: true,
        },
      }
    );

    // 2️⃣ Horizontal scrolling animation
    tl.to(".cards-row", {
      x: -(totalWidth - viewportWidth),
      ease: "none",
    });
  }, []);

  return (
    <div className="horizontal-section h-screen w-screen overflow-hidden bg-gray-100 flex items-center">
      <div className="cards-row flex flex-row gap-6 p-10 w-max">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="w-[500px] h-[500px] bg-teal-500/80 rounded-xl 
            shadow-xl flex items-center justify-center text-white text-3xl font-bold"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}
