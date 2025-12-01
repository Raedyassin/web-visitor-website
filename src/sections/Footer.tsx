import Logo from "@/components/Logo";
import { links, socialMedia } from "@/constants/constaints";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030711] text-gray-300">
      <div className="h-0.25 bg-gray-900"></div>
      <div className="grid grid-cols-3  p-15 pt-7">
        <div>
          <Logo />
          <p className="text-lg mt-5">
            Building digital experiences that matter. Expert engineering for
            modern businesses. We help you bring your vision to life.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-5">Quick Links</p>
          <div className="flex flex-col space-y-1.5">
            {links.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="text-lg hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg mb-5">Connect With Us</p>
          <p className="text-lg">webvisitor25@gmail.com</p>
          <p className="my-5">Follow us on social media</p>
          <div className="flex flex-row gap-3">
            {socialMedia.map((item, index) => (
              <Link key={index} href={item.url} className="text-lg ">
                {item.Icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-0.25 bg-gray-900"></div>
      <div className="flex items-center justify-center py-10">
        © {new Date().getFullYear()} Web Visitor. All rights reserved.
      </div>
    </footer>
  );
}
