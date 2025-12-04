import { Sparkles } from "lucide-react";

export default function SectionHeader({
  showBadge = true,
  badge,
  header1,
  header2,
  header3,
  subHeader1,
  subHeader2,
}: Readonly<{
  showBadge?: boolean;
  badge?: string;
  header1?: string;
  header2: string;
  header3?: string;
  subHeader1: string;
  subHeader2?: string;
}>) {
  return (
    <div className="flex flex-col items-center gap-6 px-4 md:px-10 py-5 mb-8 text-center">
      {/* Badge */}
      {showBadge && (
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-5 py-2 backdrop-blur-sm animate-pulse">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 text-sm font-semibold">{badge}</span>
        </div>
      )}

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-white">
        {header1} {" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
          {header2}
        </span>{" "}
        {header3}
      </h2>

      {/* Description */}
      <div className="space-y-2 max-w-3xl">
        <p className="text-gray-300 text-lg leading-relaxed">{subHeader1}</p>
        <p className="text-gray-400 text-base">{subHeader2}</p>
      </div>
    </div>
  );
}
