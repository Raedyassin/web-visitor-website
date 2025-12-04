'use client';
import { useState } from "react";
import Button from "@/components/Button";
import { colorThemes } from "@/lib/constaints";
import { faqData } from "@/lib/question";
import SectionHeader from "@/components/SectionHeader";
import {
  Code,
  Server,
  Lightbulb,
  Globe,
  ChevronDown,
  DollarSign,
} from "lucide-react";
const icon = { Code, Server, Lightbulb, Globe, DollarSign };
export default function Questions() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestion(openQuestion === key ? null : key);
  };

  return (
    <section
      id="qaa"
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionHeader
          badge="Got Questions?"
          header2="Frequently Asked Questions"
          subHeader1="Everything you need to know about our services, process, and what makes us different."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqData.map((category, index) => {
            const theme =
              colorThemes[category.color as keyof typeof colorThemes];
            const Icon = icon[category.icon as keyof typeof icon];
            const isActive = activeCategory === index;

            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-xl
                  border-2 ${isActive ? theme.border : "border-slate-700"}
                  ${isActive ? theme.bg : "bg-slate-900/50"}
                  backdrop-blur-sm transition-all duration-300
                  ${isActive ? "scale-105" : "hover:scale-105"}
                  ${isActive ? theme.text : "text-gray-400"}
                  font-semibold cursor-pointer
                `}
              >
                <Icon className="w-5 h-5" />
                <span>{category.category}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData[activeCategory].questions.map((item, questionIndex) => {
            const theme =
              colorThemes[
                faqData[activeCategory].color as keyof typeof colorThemes
              ];
            const isOpen =
              openQuestion === `${activeCategory}-${questionIndex}`;

            return (
              <div
                key={questionIndex}
                className={`
                  bg-slate-900/50 backdrop-blur-xl rounded-2xl
                  border-2 ${isOpen ? theme.border : "border-slate-800"}
                  ${isOpen ? theme.bg : ""}
                  transition-all duration-300
                  overflow-hidden
                `}
              >
                <button
                  onClick={() => toggleQuestion(activeCategory, questionIndex)}
                  className={`
                    w-full px-6 py-5 flex items-center justify-between
                    text-left ${theme.hoverBg} transition-colors duration-300
                  `}
                >
                  <span
                    className={`text-lg font-semibold ${
                      isOpen ? theme.text : "text-white"
                    } pr-4`}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`
                      w-6 h-6 ${isOpen ? theme.text : "text-gray-400"}
                      transition-transform duration-300 flex-shrink-0
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                <div
                  className={`
                    transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-6 pb-5 pt-0">
                    <div
                      className={`w-full h-px bg-gradient-to-r ${theme.gradient} opacity-20 mb-4`}
                    ></div>
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border-2 border-cyan-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-400 mb-6">
              We are here to help! Reach out and we will get back to you within
              24 hours. choose Consultation as a project Type
            </p>
            <Button href="/#contact">Ask Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}