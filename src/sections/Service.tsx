import { services } from "@/constants/constaints";
import { BadgeCheck, MapPinPlusInside } from "lucide-react";
export default function Service() {
  return (
    <section id="services" className="min-h-screen px-15">
      <div
        className="flex flex-col items-center gap-5 px-10 py-10
        mb-3
      "
      >
        <p className="text-5xl font-bold">
          Services <span className="text-lime-400">We Provide</span>
        </p>
        {/* <p>
          Comprehensive web development solutions tailored to your business
          needs
        </p> */}
        <p>
          We deliver end-to-end development services tailored to your unique
          business needs.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {services.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-start gap-5  py-10
              px-5 border rounded-2xl border-slate-400
              shadow-lg shadow-lime-300/50 hover:shadow-lime-300/30"
            
          >
            <div className="flex flex-row gap-2">
              {card.Icon}
              <p className="text-2xl font-bold ">{card.title}</p>
            </div>
            <div className="px-3 space-y-3">
              {card.desc.map((desc, index) => (
                <div key={index} className="flex flex-row gap-2 justify-start">
                  <MapPinPlusInside className="text-lime-400 size-5" />
                  <p key={desc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
