import Image from "next/image";
import Button from "../components/Button";
import { Code2, Globe, Sparkles, Zap } from "lucide-react";
import FloatingIcon from "@/components/FloatingIcon";

export default function Hero() {
  return (
    <section
      id="hero"
      // min-h-[90vh]
      className=" mt-10 sm:mt-0 w-full relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div
            className="flex flex-col items-center lg:items-start text-center 
          lg:text-left mt-5  space-y-5 z-20"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Build a High-Performance Website
              </span>{" "}
              That Grows Your Business
            </h1>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-200">
              Stop using generic templates — get a custom, conversion-focused
              digital experience built for results.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Modern{" "}
              <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1 backdrop-blur-sm text-cyan-500 text-sm font-semibold">
                landing pages
              </span>{" "}
              <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1 backdrop-blur-sm text-cyan-500 text-sm font-semibold">
                e-commerce stores
              </span>{" "}
              <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3 py-1 backdrop-blur-sm text-cyan-500 text-sm font-semibold">
                web apps
              </span>{" "}
              built with full-stack technologies — fast, SEO-optimized, and
              fully mobile-ready.
            </p>

            <div className="mt-5 w-full sm:w-auto">
              <Button href="/#contact">Start Your Project Now</Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative  w-full h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
            {/* Floating Icons - Hidden on mobile, visible on larger screens */}
            <div className="block z-60">
              <FloatingIcon
                icon={Code2}
                delay={0}
                position="top-[30%] left-[5%]"
              />
              <FloatingIcon
                icon={Zap}
                delay={0.5}
                position="top-[25%] right-[8%]"
              />
              <FloatingIcon
                icon={Globe}
                delay={1}
                position="top-[10%] left-[2%]"
              />
              <FloatingIcon
                icon={Sparkles}
                delay={1.5}
                position="top-[5%] right-[15%]"
              />
            </div>

            {/* Glow Effect */}
            <div
              className="animate-pulse absolute inset-0 top-1/2 rounded-full 
              bg-cyan-500/20 blur-3xl w-full h-[50%]"
            ></div>

            {/* Performance Badge */}
            <div
              className="absolute z-20 bottom-4 right-4 sm:bottom-6 sm:right-6 bg-slate-900/90 backdrop-blur-xl border-2 border-emerald-500/30 rounded-2xl p-3 sm:p-4 shadow-xl shadow-emerald-500/20 animate-slideUp"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-400">
                    99%
                  </p>
                  <p className="text-gray-400 text-xs">Performance</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-full z-10">
              <Image
                src="/hero-side.png"
                alt="hero"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
