import ContactForm from "@/components/ContactForm";
import { contactInfo, socialMedia } from "@/constants/constaints";
import { Eye, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-15 overflow-hidden
      min-h-screen mb-10 my-5"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-5 py-2 backdrop-blur-sm mb-6">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-300 text-sm font-semibold">
            {"Let's"} Build Something Amazing
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get Your
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Free Consultation
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="p-2 pt-0 relative ">
          <div className="text-center mb-5">
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Describe your project and I’ll personally get back to you within
              24 hours with a clear action plan.{" "}
            </p>
          </div>

          <div className="relative ">
            {/* Additional Info */}
            <div className="  grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-6">
                <div className="text-cyan-400 text-2xl mb-2">⚡</div>
                <h3 className="text-white font-semibold mb-1">Fast Response</h3>
                <p className="text-gray-400 text-sm">
                  Get a reply within 24 hours
                </p>
              </div>
              <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-6">
                <div className="text-cyan-400 text-2xl mb-2">💰</div>
                <h3 className="text-white font-semibold mb-1">
                  Free Consultation
                </h3>
                <p className="text-gray-400 text-sm">No commitment required</p>
              </div>
              <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/10 rounded-xl p-6">
                <div className="text-cyan-400 text-2xl mb-2">🎯</div>
                <h3 className="text-white font-semibold mb-1">Custom Quote</h3>
                <p className="text-gray-400 text-sm">Tailored to your needs</p>
              </div>
            </div>
            <div>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-slate-900/30 
                    backdrop-blur-sm border border-cyan-500/10 rounded-xl 
                    p-6 my-4"
                >
                  <div className="text-cyan-400 text-2xl mb-2">{item.Icon}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.url}</p>
                  </div>
                </div>
              ))}
              <div
                className=" flex flex-row gap-3 bg-slate-900/30 
                    backdrop-blur-sm border border-cyan-500/10 rounded-xl 
                    p-6 my-4"
              >
                <div className="mt-2">
                  <Eye className="size-7 text-cyan-400" />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg mb-3">Follow us on social media</p>
                  <div className="flex flex-row gap-3">
                    {socialMedia.map((item, index) => (
                      <Link key={index} href={item.url} className="text-lg ">
                        {item.Icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
