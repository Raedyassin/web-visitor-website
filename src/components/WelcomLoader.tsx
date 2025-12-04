"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect } from "react";

export default function WelcomLoader() {
  const [done, setDone] = useState(false);
  const text1 = "Building Websites That Actually";
  const text2 = "Grow Your Business";
  const textLength1 = text1.length; // auto-count characters
  const textLength2 = text1.length; // auto-count characters

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {
      setDone(true);
      document.body.classList.remove("overflow-hidden");
    }, 1500);
  }, []);

  useGSAP(() => {
    
    if (!done) {
      const tl = gsap.timeline({});
      tl.fromTo(
        "#hook-1",
        { width: "0ch" },
        {
          width: "auto",
          duration: 0.8,
          ease: `steps(${textLength1})`,
        }
      );
      tl.fromTo(
        "#hook-2",
        { width: "0ch" },
        {
          width: "auto",
          duration: 0.6,
          ease: `steps(${textLength2})`,
        }
      );
      
      // Pulse
      tl.to("#hook-text", {
        scale: 1.2,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });
    }
    
    if (done) {
      const tl = gsap.timeline({});
      tl.to("#lodaer-1", { x: "-100%", duration: 0.5, opacity: 0 });
      tl.to("#lodaer-4", { x: "100%", duration: 0.5, opacity: 0 }, "-=0.2");
      tl.to("#lodaer-2", { x: "-100%", duration: 0.5, opacity: 0 });
      tl.to("#lodaer-3", { x: "100%", duration: 0.5, opacity: 0 }, "-=0.2");
      tl.to(
        "#hook-text",
        {
          opacity: 0,
          ease: "power1.inOut",
          scale: 0,
          duration: 0.2,
        },
        "-=0.6"
      );
      tl.to("#loader", { alpha: 0, duration: 0.2, display: "none" });

    }
  }, [done]);

  return (
    <div
      id="loader"
      className="fixed top-0 left-0 w-screen h-screen flex items-center flex-col
      justify-center z-70"
    >
      <h3
        id="hook-text"
        className="absolute text-xl md:text-2xl  lg:text-5xl font-bold text-white overflow-hidden 
        "
        style={{ borderRight: "2px solid #fff" }}
      >
        <p id="hook-1" className="whitespace-nowrap">
          {text1}
        </p>
        <p id="hook-2" className="whitespace-nowrap bg-gradient-to-r text-center
          from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {text2}
        </p>
      </h3>

      <div id="lodaer-1" className="h-[25%] w-full bg-dark-blue"></div>
      <div id="lodaer-2" className="h-[25%] w-full bg-dark-blue"></div>
      <div id="lodaer-3" className="h-[25%] w-full bg-dark-blue"></div>
      <div id="lodaer-4" className="h-[25%] w-full bg-dark-blue"></div>
    </div>
  );
}
