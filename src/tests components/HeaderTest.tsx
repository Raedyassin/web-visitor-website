"use client";
import Link from "next/link";
import Button from "../components/Button";
import Logo from "@/components/Logo";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { languages, links, socialMedia } from "@/lib/constaints";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function HeaderTest() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const router = useRouter();

  const navigateTo = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  // 🔒 Close menu automatically when switching from mobile → desktop
  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  useGSAP(() => {
    if (open) {
      gsap.to("#menu-open", {
        x: 0,
        duration: 0.5,
        onStart: () => {
          gsap.set("#menu-open", { display: "block" });
        },
      });
    } else {
      gsap.to("#menu-open", {
        x: "110%",
        duration: 0.5,
        onComplete: () => {
          gsap.set("#menu-open", { display: "none" });
        },
      });
    }
  }, [open]);

  return (
    <nav
      id="nav"
      className={`w-full z-20 px-5 md:px-10 py-5 font-bold overflow-y-auto overflow-x-hidden sm:overflow-hidden
        ${open ? "fixed top-0 left-0 h-screen bg-dark-blue" : ""}
        `}
    >
      {/* ============ MOBILE HEADER ============ */}
      {isMobile ? (
        <>
          {/* Top Row */}
          <div
            className="flex justify-between items-center fixed top-0 left-0 
          w-full px-4 md:px-10 py-2 z-50 backdrop-blur-sm  bg-dark-blue/80 "
          >
            <Logo />
            {open ? (
              <X
                onClick={() => setOpen(false)}
                className="size-10 p-2  border-2 border-gray-300  
                rounded-full text-gray-300  cursor-pointer hover:bg-gray-300 
                transition-all duration-200 hover:border-dark-blue hover:text-dark-blue"
              />
            ) : (
              <Menu
                onClick={() => setOpen(true)}
                className="size-10 p-2  border-2 border-gray-300  
                rounded-full text-gray-300  cursor-pointer hover:bg-gray-300 
                transition-all duration-200 hover:border-dark-blue hover:text-dark-blue"
              />
            )}
          </div>

          {/* Mobile Menu */}
          {/* {open && ( */}
          <div
            id="menu-open"
            className="
            mt-15 space-y-4 bg-dark-blue overflow-y-auto
            "
          >
            {/* Links */}
            <ul className="flex flex-col gap-4">
              {links.slice(1, 5).map((item, i) => (
                <li
                  onClick={() => navigateTo(item.url)}
                  key={i}
                  className="px-5 py-3 border border-cyan-500/30 rounded-lg 
                        bg-cyan-500/10 backdrop-blur-sm cursor-pointer
                        hover:bg-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            {/* Languages */}
            <div className="space-y-1">
              <label className="text-gray-300 block"> Language:</label>
              <select
                id="lang"
                className="px-5 py-3 border border-cyan-500/30 rounded-lg 
                bg-cyan-500/10 backdrop-blur-sm w-full cursor-pointer
                hover:bg-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              >
                {languages.map((item, i) => (
                  <option
                    key={i}
                    value={item.code}
                    className="border-none cursor-pointer bg-dark-blue text-gray-300"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center my-10">
              <Button
                href="/#contact"
                fun={() => {
                  setOpen(false);
                }}
              >
                Get Your WebSite
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-300 text-sm mb-4">
                Stay connected on social media
              </p>

              <div className="flex flex-wrap gap-4">
                {socialMedia.map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl 
                        hover:bg-cyan-500/20 hover:border-cyan-500/50 
                        transition-all hover:-translate-y-1"
                  >
                    <div className="text-cyan-400">{item.Icon}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* )} */}
        </>
      ) : (
        // ============ DESKTOP HEADER ============ //
        <div className="flex justify-between items-center">
          <Logo />

          <ul className="flex gap-8">
            {links.slice(1, 5).map((item, i) => (
              <li
                key={i}
                className="px-2 py-1 hover:bg-gradient-to-r hover:from-cyan-400 
              hover:to-blue-400 hover:bg-clip-text hover:text-transparent 
              transition-all"
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <select
              id="lang"
              className="px-3 py-2 rounded bg-dark-blue text-white border border-cyan-500/30"
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((item, i) => (
                <option key={i} value={item.code} className="bg-dark-blue">
                  {item.name}
                </option>
              ))}
            </select>
            <Button href="/#contact">Get Your WebSite</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
