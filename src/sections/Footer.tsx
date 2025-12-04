import React from "react";
import {
  Mail,
} from "lucide-react";
// import ScrollToTopButton from "@/components/ScrollTop";
import { links, socialMedia } from "@/lib/constaints";
import Link from "next/link";
import Logo from "@/components/Logo";


export default function Footer() {

  return (
      <footer
        className="relative overflow-hidden mt-15"
        style={{ backgroundColor: "#010725" }}
      >

        {/* Top gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="space-y-6">
            {/* Logo */}
            <Logo/>
              {/* <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <span className="text-2xl font-bold text-white">
                  Web Visitor
                </span>
              </div> */}

              <p className="text-gray-400 text-base leading-relaxed">
                Building digital experiences that matter. Expert engineering for
                modern businesses. We help you bring your vision to life.
              </p>

              {/* Email with icon */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <a
                  href="mailto:webvisitor25@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  webvisitor25@gmail.com
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-3">
                {links.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 w-fit"
                  >
                    <span className="w-0 h-px bg-cyan-400 group-hover:w-4 transition-all duration-300"></span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Connect With Us */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
                Connect With Us
              </h3>

              <p className="text-gray-400">
                Stay updated with our latest projects and insights
              </p>

              <div>
                <p className="text-sm text-gray-500 mb-3">
                  Follow us on social media
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialMedia.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      className="group p-3 bg-slate-900/50 border 
                      border-cyan-500/30 rounded-xl hover:bg-cyan-500/10 
                      hover:border-cyan-500/50 transition-all duration-300 
                      hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    >
                      <div className="text-cyan-400 group-hover:scale-110 
                      transition-transform duration-300">
                        {item.Icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-800/50">
            <div className="flex  items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-gray-500 text-sm flex items-center gap-2">
                © {new Date().getFullYear()} Web Visitor. All rights reserved.{" "}
              </p>              
            </div>
          </div>
        </div>
      </footer>
  );
}
