import Link from "next/link";
import Button from "../components/Button";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <nav id="nav" className="transition-all duration-300 
    bg-transparent font-bold flex justify-between items-center px-15 py-5">
      <Logo/>
      <ul id="menu" className="flex flex-row gap-5">
        <li className="px-2 py-1 hover:text-lime-400">
          <Link href="/#services">Services</Link>
        </li>
        <li className="px-2 py-1 hover:text-lime-400">
          <Link href="/#price">Price</Link>
        </li>
        <li className="px-2 py-1 hover:text-lime-400">
          <Link href="/#qa">Q/A</Link>
        </li>
      </ul>
      <div id="contact">
        <Button href="/#contact">
          Get Your WebSite
        </Button>
      </div>
    </nav>
  );
}
