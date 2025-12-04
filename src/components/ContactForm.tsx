"use client";
import React, { useState } from "react";
import { Send, Mail, User, MessageSquare, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = "Please select a project type";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLETE_ID || "",
        e.currentTarget,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
        }
      );

      // Show success animation
      setSubmitSuccess(true);

      // Reset form after 1 second
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitSuccess(false);
        setIsSubmitting(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <div className="w-full">
        {/* Form Container */}
        <div className="relative h-full">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/20 rounded-3xl blur-lg"></div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-10 border-cyan-500/20
            shadow-[0_0_50px_rgba(34,211,238,0.1)] h-full border-2 transition-all duration-300"
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
                    className={`w-full pl-12 pr-4 py-4 bg-slate-800/50 border rounded-xl text-white placeholder-gray-500 
                      outline-none transition-all duration-300
                      focus:bg-slate-800/70 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                      ${
                        errors.name
                          ? "border-red-500"
                          : focused.name
                          ? "border-cyan-400"
                          : "border-slate-700"
                      }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400 animate-slideDown">
                    {errors.name}
                  </p>
                )}
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
                    className={`w-full pl-12 pr-4 py-4 bg-slate-800/50 border rounded-xl text-white placeholder-gray-500 
                      outline-none transition-all duration-300
                      focus:bg-slate-800/70 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                      ${
                        errors.email
                          ? "border-red-500"
                          : focused.email
                          ? "border-cyan-400"
                          : "border-slate-700"
                      }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400 animate-slideDown">
                    {errors.email}
                  </p>
                )}
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
                    className={`w-full pl-12 pr-4 py-4 bg-slate-800/50 border rounded-xl text-white 
                      outline-none transition-all duration-300 appearance-none cursor-pointer
                      focus:bg-slate-800/70 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                      ${
                        errors.subject
                          ? "border-red-500"
                          : focused.subject
                          ? "border-cyan-400"
                          : "border-slate-700"
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
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-400 animate-slideDown">
                    {errors.subject}
                  </p>
                )}
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
                  rows={7}
                  placeholder="Describe your vision, goals, and any specific features you need..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, message: true })}
                  onBlur={() => setFocused({ ...focused, message: false })}
                  className={`scrollbar-hide w-full px-4 py-4 bg-slate-800/50 border rounded-xl text-white placeholder-gray-500 
                    outline-none transition-all duration-300 resize-none
                    focus:bg-slate-800/70 focus:border-cyan-400 
                    focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                    ${
                      errors.message
                        ? "border-red-500"
                        : focused.message
                        ? "border-cyan-400"
                        : "border-slate-700"
                    }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400 animate-slideDown">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className={`group relative w-full font-bold py-4 px-8 
                  rounded-xl transition-all duration-300 overflow-hidden cursor-pointer text-white
                  ${
                    submitSuccess
                      ? "bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                      : "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-[1.02]"
                  }
                  ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
                  `}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitSuccess ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 animate-bounce" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isSubmitting
                            ? "animate-pulse"
                            : "group-hover:translate-x-1"
                        }`}
                      />
                    </>
                  )}
                </span>
                {/* Hover gradient overlay */}
                {!submitSuccess && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </button>

              {/* Trust Message */}
              <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                We typically respond within 24 hours
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
