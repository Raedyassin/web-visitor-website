'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whyChooseMe } from "@/constants/constaints";
import { MapPinPlusInside } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseMe() {
    useGSAP(() => {
    const row = document.querySelector("#cards-trust");

    const totalWidth = row?.scrollWidth || 0;
    const viewportWidth = window.innerWidth;
      gsap.to("#cards-trust", {
        x: -(totalWidth - viewportWidth + 100),
        scrollTrigger: {
          trigger: "#whychooseme",
          start: "top top", // pin starts here
          end: () => "+=" + (totalWidth - viewportWidth),
          pin: true,
          scrub: true,
        },
      });
  }, []);
  return (
    <section id="whychooseme" className="min-h-screen px-15 overflow-hidden">
      <div>
        <div
          className="flex flex-col items-center gap-5 px-10 py-10 mb-3"
        >
          <p className="text-5xl font-bold">
            Why businesses trust{" "}
            <span className="text-lime-400">Web Visitor</span>
          </p>
          <p>
            We do not just write code; we build digital assets that drive
            growth. Our commitment to quality and performance sets us apart
          </p>
          <p>We combine technical excellence with business understanding.</p>
        </div>
        <div id="cards-trust" className="flex flex-row gap-10 w-max">
          {whyChooseMe.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-5  py-10
              px-5 border rounded-2xl border-slate-400 w-[400px]
              shadow-lg shadow-lime-300/50 hover:shadow-lime-300/30"
            >
              <div className="flex flex-row gap-2">
                {card.Icon}
                <p className="text-2xl font-bold ">{card.title}</p>
              </div>
              <div className="px-3 space-y-3">
                {card.desc.map((desc, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 justify-start"
                  >
                    <MapPinPlusInside className="text-lime-400 size-5" />
                    <p key={desc}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
