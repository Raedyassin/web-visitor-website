import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import { contactInfo, socialMedia } from "@/lib/constaints";
import { Eye, Zap, DollarSign, Target } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 md:px-8 overflow-hidden min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionHeader
          badge="Let's Build Something Amazing"
          header1="Get Your"
          header2="Free Consultation"
          subHeader1="Describe your project and I'll personally get back to you within 24 hours with a clear action plan."
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8 order-2 lg:order-1 ">
            {/* Quick Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
              <div className="group relative bg-slate-900/50 backdrop-blur-xl border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Fast Response</h3>
                    <p className="text-gray-400 text-sm">
                      Reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-slate-900/50 backdrop-blur-xl border-2 border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <DollarSign className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">
                      Free Consultation
                    </h3>
                    <p className="text-gray-400 text-sm">
                      No commitment required
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative bg-slate-900/50 backdrop-blur-xl border-2 border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-emerald-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Custom Quote</h3>
                    <p className="text-gray-400 text-sm">
                      Tailored to your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h3>

              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-900/30 backdrop-blur-xl border-1 border-cyan-500/30 rounded-xl p-5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{item.Icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-sm break-all">
                        {item.url}
                      </p>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 blur-xl -z-10 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
              ))}

              {/* Social Media */}
              <div className="relative bg-slate-900/50 backdrop-blur-xl border-2 border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-xl">
                    <Eye className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-3">
                      Follow Us
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Stay connected on social media
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {socialMedia.map((item, index) => (
                        <Link
                          key={index}
                          href={item.url}
                          className="group/social p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                        >
                          <div className="text-cyan-400 group-hover/social:scale-110 transition-transform duration-300">
                            {item.Icon}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative order-1 lg:order-2 ">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
