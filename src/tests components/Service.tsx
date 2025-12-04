import { services } from "@/lib/constaints";
import { MapPinPlusInside } from "lucide-react";
export default function Service() {
  return (
    <section id="services" className="min-h-screen px-15">
      <div
        className="flex flex-col items-center gap-5 px-10 py-10
        mb-3"
      >
        <p className="text-5xl font-bold">
          Services{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            We Provide
          </span>
        </p>
        <p className="text-gray-400">
          We deliver end-to-end development services tailored to your unique
          business needs.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {services.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-start gap-5  py-10
              px-5 border rounded-2xl border-slate-400/50
              shadow-[0_10px_10px_rgba(34,211,238,0.4)] bg-slate-900/50"
          >
            <div className="flex flex-row gap-2">
              {card.Icon}
              <p className="text-2xl font-bold ">{card.title}</p>
            </div>
            <div className="px-3 space-y-3">
              {card.desc.map((desc, index) => (
                <div key={index} className="flex flex-row gap-2 justify-start">
                  <MapPinPlusInside className="text-cyan-400 size-5 " />
                  <p key={desc} className="text-gray-200">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
