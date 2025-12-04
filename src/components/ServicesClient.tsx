// "use client";
// import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { colorThemes } from "@/lib/constaints";
import { Globe, ShoppingCart, Building2, Smartphone } from "lucide-react";


export default function ModernServicesClient({
  services,
}: {
  services: {
    title: string;
    color: string;
    desc: string[];
  }[];
}) {
  // const [hoveredCard, setHoveredCard] = useState<number | null>(null);
   // dynamic lookup
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {services.map((service, index) => {
        const theme = colorThemes[service.color as keyof typeof colorThemes];
        // const isHovered = hoveredCard === index;
        const Icon = [
          Globe,
          ShoppingCart,
          Building2,
          Smartphone,
        ][index];
        return (
          <div
            key={service.title}
            // onMouseEnter={() => setHoveredCard(index)}
            // onMouseLeave={() => setHoveredCard(null)}
            // ${index===0?'h-full': index===1?'h-[120%]':index===2?'h-[140%]':index===3?'h-[160%]':''}
            className={`
              relative group 
              bg-slate-900/50 backdrop-blur-xl rounded-2xl
              border-2 ${theme.border}
              ${theme.shadow} ${theme.hoverShadow}
              transition-all duration-500 ease-out
              overflow-hidden hover:-translate-y-5
            `}
          >
            <div className={`h-1 w-full bg-gradient-to-r ${theme.gradient}`} />

            <div className="p-6 space-y-6 relative z-10">
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl ${theme.iconBg} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${theme.text}`} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              <div
                className={`w-full h-px bg-gradient-to-r ${theme.gradient} opacity-20`}
              />

              <div className="space-y-3">
                {service.desc.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 group/item"
                    // style={{
                    //   animation: isHovered
                    //     ? `slideIn 0.3s ease-out ${idx * 0.1}s both`
                    //     : "none",
                    // }}
                  >
                    <div className={`mt-0.5 p-1 rounded-lg ${theme.iconBg}`}>
                      <Check className={`w-4 h-4 ${theme.checkIcon}`} />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className={`w-full mt-4 py-3 px-4 rounded-xl border-2 ${theme.border} ${theme.text} ${theme.bg} flex items-center justify-center gap-2`}
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
