"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Animation() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#a4", {
      y: "100%",
      duration: 0.25,
    });
    tl.to("#a3", {
      y: "-100%",
      duration: 0.25,
    },'-=0.25');
    tl.to("#a2", {
      y: "100%",
      duration: 0.25,
    },'-=0.05');
    tl.to("#a1", {
      y: "-100%",
      duration: 0.25,
    },'-=0.05');
    tl.to("#animation", {
      opacity: 0,
      onComplete: () => {
        gsap.set("#animation", { display: "none" });
      },
    });
  }, []);
  return (
    <div
      id="animation"
      className="bg-[#007E6E] h-screen z-2 w-screen grid grid-cols-4 
      overflow-hidden fixed inset-0 to-0% left-0"
    >
      <div id="a1" className="h-screen bg-[#540863]"></div>
      <div id="a2" className="h-screen bg-[#92487A]"></div>
      <div id="a3" className="h-screen bg-[#E49BA6]"></div>
      <div id="a4" className="h-screen bg-[#FFD3D5]"></div>
    </div>
  );
}
