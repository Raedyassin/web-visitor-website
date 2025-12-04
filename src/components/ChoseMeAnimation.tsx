"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function ChoseMeAnimation() {

  useGSAP(() => {
    const row = document.querySelector("#cards-trust");

    const totalWidth = row?.scrollWidth || 0;
    const viewportWidth = window.innerWidth;
    gsap.to("#cards-trust", {
      x: -(totalWidth - viewportWidth + 100),
      scrollTrigger: {
        trigger: "#cards-trust",
        start: "top top", // pin starts here
        end: () => "+=" + (totalWidth - viewportWidth),
        pin: true,
        scrub: true,
      },
    });
  }, []);

  return null;
}
