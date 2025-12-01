"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function Art() {
  useGSAP(() => {
    gsap.to(".mask", {
      clipPath: "circle(100% at 50% 50%)",
      duration: 2,
    });
  }, []);

  return (
    <Image
      src="/out.jpg"
      className="mask1"
      width={1000}
      height={1000}
      alt="art"
    />
  );
}
