import { whyChooseMe } from "@/lib/constaints";
import { Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ChoseMeAnimation from "@/components/ChoseMeAnimation";

export default function WhyChooseMe() {
  return (
    // min-h-screen
    <section id="whychooseme" className=" px-15 overflow-hidden">
      <div>
        <SectionHeader
          showBadge={false}
          header1="Why "
          header2="Businesses Trust Us?"
          subHeader1="We don't just write code; we build digital assets that drive growth. Our commitment to quality and performance sets us apart."
          subHeader2="We combine technical excellence with business understanding."
        />
        <ChoseMeAnimation />

        <div id="cards-trust">
          <div className="flex flex-row  pt-30  gap-10 w-max">
            {whyChooseMe.map((card, index) => (
              <div
                key={card.title}
                className={`
                relative group
                flex flex-col
                bg-slate-900/50 backdrop-blur-xl rounded-2xl
                border-2 border-cyan-500/50
                shadow-[0_0_30px_rgba(34,211,238,0.3)]
                hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]
                transition-all duration-500 ease-out
                sm:w-[420px] w-[350px] overflow-hidden
                hover:-translate-y-2
              `}
              >
                {/* Top gradient line */}
                <div
                  className={`h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-500`}
                ></div>

                <div className="p-8 space-y-6 relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`
                      p-3 rounded-xl bg-cyan-500/20
                      group-hover:scale-110 transition-transform duration-300
                    `}
                    >
                      <div className="text-cyan-400">{card.Icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className={`w-full h-px bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20`}
                  ></div>

                  {/* Features List */}
                  <div className="space-y-4">
                    {card.desc.map((desc, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 group/item"
                      >
                        <div
                          className={`
                          mt-0.5 p-1 rounded-lg bg-cyan-500/20
                          group-hover/item:scale-110 transition-transform duration-300
                          flex-shrink-0
                        `}
                        >
                          <Check className={`w-4 h-4 text-cyan-400`} />
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <span className={`text-7xl font-bold text-cyan-400`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div
                  className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br 
                  from-cyan-400 to-blue-500
                  opacity-0 blur-2xl -z-10
                  hover:opacity-10
                  transition-opacity duration-500
                `}
                ></div>

                {/* Corner accent */}
                <div
                  className={`
                  absolute bottom-0 right-0 w-32 h-32
                  bg-gradient-to-tl from-cyan-400 to-blue-500
                  opacity-10 blur-2xl rounded-full
                  transition-transform duration-500
                `}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
