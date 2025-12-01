import { CodeXml } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link id="logo" href="/" className="flex flex-row gap-2 px-2 py-1  rounded">
      <CodeXml />
      <p>Web Visitor</p>
    </Link>
  );
}
