import { Check, Zap, Rocket, Crown } from "lucide-react";
import Button from "@/components/Button";
import { colorThemes } from "@/lib/constaints";
import { pricing } from "@/lib/pricing";
import SectionHeader from "@/components/SectionHeader";
import { cookies } from "next/headers";
import Link from "next/link";
const icon = { Zap , Rocket, Crown};  
export default async function AmazingPricing() {
  const cookieStore = await cookies();
  const region = cookieStore.get("user-region")?.value || "global";
  return (
    <section id="price" className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          badge="Simple & Transparent"
          header2="Choose Your Perfect Plan"
          subHeader1="Honest pricing designed for real business needs. No hidden fees, no surprises—just quality work at fair prices."
          // subHeader2="We Can Customize a Plan to Suit Your Needs"
        />
        <div className="mx-auto w-fit mb-10 px-6 py-3 rounded-xl border-2 
        border-cyan-500/70  text-white text-xl
        font-semibold backdrop-blur-sm
        bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500
        bg-clip-text bg-transparent 
        ">
          We Can Customize a Plan to Suit Your Needs
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {pricing[region as keyof typeof pricing].map((card, index) => {
            const theme = colorThemes[card.color as keyof typeof colorThemes];
            const Icon = icon[card.icon as keyof typeof icon];

            return (
              <div
                key={index}
                className={`
                  relative flex flex-col bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8
                  border-2 ${theme.border}
                  ${theme.shadow} ${theme.hoverShadow}
                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                `}
              >
                {/* Package Name Badge */}
                <div
                  className={`absolute -top-4 
                    px-8 py-2 rounded-full ${theme.badgeBg} shadow-lg`}
                >
                  <span className="text-slate-900 font-bold text-lg">
                    {card.name}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`mt-8 mb-6 inline-flex p-4 rounded-2xl ${theme.iconBg} w-fit`}
                >
                  <Icon className={`w-8 h-8 ${theme.text}`} />
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-5xl font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
                    >
                      {card.price}
                    </span>
                  </div>
                  <p className="text-gray-300 text-md mt-5">
                    {card.description}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`w-full h-px bg-gradient-to-r ${theme.gradient} opacity-30 my-6`}
                ></div>

                {/* Features */}
                <div className="flex-1 space-y-4 mb-8">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group">
                      <div
                        className={`mt-0.5 p-1 rounded-lg ${theme.iconBg} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Check className={`w-5 h-5 ${theme.checkIcon}`} />
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href="/#contact"
                  className={` cursor-pointer
                    w-full py-4 px-6 rounded-xl font-bold text-slate-900
                    bg-gradient-to-r ${theme.gradient}
                    shadow-lg ${theme.shadow}
                    hover:shadow-2xl hover:scale-105
                    transition-all duration-300
                    group relative overflow-hidden
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started
                    <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Link>

                {/* Glow effect on hover */}
                <div
                  className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-r ${theme.gradient} opacity-0 blur-2xl -z-10
                  hover:opacity-5 transition-opacity duration-500
                `}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            We Can Customize a Plan to Suit Your Needs
          </p>
          <Button href="/#contact">Contact us for a custom quote</Button>
        </div>
      </div>
    </section>
  );
}
