// import { CodeXml } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link id="logo" href="/" className="flex flex-row gap-2 py-1 items-center
      group">
      {/* <CodeXml /> */}
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="lg:w-13 lg:h-13 w-10 h-10 roudned-full  bg-transparent p-1"
      />
      <p className="text-xl md:text-2xl group-hover:bg-gradient-to-br 
      group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:text-transparent
      group-hover:bg-clip-text
      font-bold">Web Visitor</p>
    </Link>
  );
}
