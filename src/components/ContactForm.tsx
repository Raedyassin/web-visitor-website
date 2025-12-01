'use client'
import React, { useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Message sent! We will get back to you within 24 hours.");
  };

  return (
    <div
      className="min-h-screen  px-4 h-full"
      style={{ backgroundColor: "#010725" }}
    >
      <div className="w-full max-w-2xl">
        {/* Form Container */}
        <div className="relative h-full">
          {/* Glow effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r 
          from-cyan-500/0 to-blue-500/20 rounded-3xl blur-lg"
          ></div>

          {/* Form */}
          <div
            className="relative bg-slate-900/50 backdrop-blur-xl 
          rounded-3xl p-8 md:p-10 border border-cyan-500/20
          shadow-[0_0_50px_rgba(34,211,238,0.1)] h-full"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                    focused.name ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  Your Name
                </label>
                <div className="relative">
                  <div
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      focused.name ? "text-cyan-400" : "text-gray-500"
                    }`}
                  >
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, name: true })}
                    onBlur={() => setFocused({ ...focused, name: false })}
                    required
                    className={`w-full pl-12 pr-4 py-4 bg-slate-800/50 border rounded-xl text-white placeholder-gray-500 
                      outline-none transition-all duration-300
                      focus:bg-slate-800/70 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                      ${focused.name ? "border-cyan-400" : "border-slate-700"}`}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                    focused.email ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  Email Address
                </label>
                <div className="relative">
                  <div
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      focused.email ? "text-cyan-400" : "text-gray-500"
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, email: true })}
                    onBlur={() => setFocused({ ...focused, email: false })}
                    required
                    className={`w-full pl-12 pr-4 py-4 bg-slate-800/50 border rounded-xl text-white placeholder-gray-500 
                      outline-none transition-all duration-300
                      focus:bg-slate-800/70 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                      ${
                        focused.email ? "border-cyan-400" : "border-slate-700"
                      }`}
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <label
                  htmlFor="subject"
                  className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                    focused.subject ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  Project Type
                </label>
                <div className="relative">
                  <div
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                      focused.subject ? "text-cyan-400" : "text-gray-500"
                    }`}
                  >
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, subject: true })}
                    onBlur={() => setFocused({ ...focused, subject: false })}
                    required
                    className={`w-full pl-12 pr-4 py-4 bg-slate-800/50 border rounded-xl text-white 
                      outline-none transition-all duration-300 appearance-none cursor-pointer
                      focus:bg-slate-800/70 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                      ${
                        focused.subject ? "border-cyan-400" : "border-slate-700"
                      }`}
                  >
                    <option value="" className="bg-slate-800">
                      Select a service...
                    </option>
                    <option value="Landing Page" className="bg-slate-800">
                      Landing Page
                    </option>
                    <option value="Business Website" className="bg-slate-800">
                      Business Website
                    </option>
                    <option value="E-commerce Store" className="bg-slate-800">
                      E-commerce Store
                    </option>
                    <option value="Web Application" className="bg-slate-800">
                      Web Application
                    </option>
                    <option value="Consultation" className="bg-slate-800">
                      Consultation
                    </option>
                    <option value="Other / Not Sure" className="bg-slate-800">
                      Other / Not Sure
                    </option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`block text-sm font-semibold mb-2 transition-colors duration-300 ${
                    focused.message ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your vision, goals, and any specific features you need..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, message: true })}
                  onBlur={() => setFocused({ ...focused, message: false })}
                  required
                  className={`w-full px-4 py-4 bg-slate-800/50 border rounded-xl text-white placeholder-gray-500 
                    outline-none transition-all duration-300 resize-none
                    focus:bg-slate-800/70 focus:border-cyan-400 
                    focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                    ${focused.message ? "border-cyan-400" : "border-slate-700"} 
                    `}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="group relative w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold py-4 px-8 
                  rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.4)] 
                  hover:scale-[1.02]
                  transition-all duration-300 overflow-hidden cursor-pointer text-white"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Hover gradient overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              {/* Trust Message */}
              <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
