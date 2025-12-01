"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ZoomScroll() {
  useGSAP(() => {
    gsap.to("#xx", {
      scale: 3,
      scrollTrigger: {
        trigger: "#xx",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="h-[200vh]  z-1 flex justify-center items-center">
      <div id="xx" className=" mx-auto w-40 h-40 bg-teal-500"></div>
    </div>
  );
}
