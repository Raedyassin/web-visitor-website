import Link from "next/link";
import Logo from "@/components/Logo";
import { Home, Sparkles, Code2, Globe, Backpack, ArrowBigDown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center relative overflow-hidden">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <Code2 className="absolute top-[10%] left-[5%] w-12 h-12 text-cyan-400 animate-bounce" />
        <Sparkles className="absolute top-[20%] right-[10%] w-16 h-16 text-blue-400 animate-pulse" />
        <Globe
          className="absolute bottom-[15%] left-[15%] w-14 h-14 text-cyan-500 animate-spin"
          style={{ animationDuration: "8s" }}
        />
        <ArrowBigDown
          className="absolute bottom-[25%] right-[15%] w-14 h-14 text-cyan-500 rotate-45 animate-bounce"/>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 transform scale-200 md:scale-300">
            <Logo />
          </div>

          {/* 404 Text */}
          <div>
            <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-400">
              Oops! The page you're looking for seems to have wandered off into
              the digital void.
            </p>
          </div>

          {/* Home Button */}
          <div className="flex justify-center pt-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300"
            >
              <Home className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
