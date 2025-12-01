import {
  Building2,
  Globe,
  ShoppingCart,
  Smartphone,
  Code,
  Activity,
  Shield,
  DollarSign,
  Headphones,
  Lock,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export const services = [
  {
    title: "Landing Pages",
    Icon: <Globe className="size-7 text-lime-400" />,
    desc: [
      "High-converting designs optimized for sales and leads",
      "Built with fast, modern Next.js performance",
      "SEO-friendly structure for better visibility",
      "Responsive across all devices",
      "Clean animations to increase engagement",
    ],
  },
  {
    title: "E-commerce Websites",
    Icon: <ShoppingCart className="size-7 text-lime-400" />,
    desc: [
      "Fully functional online stores with product management",
      "Secure checkout and payment integration (Stripe, PayPal, etc.)",
      "Admin dashboard for orders, inventory, and customers",
      "Built with scalable databases (PostgreSQL/MySQL)",
      "Fast performance with Next.js and Redis caching",
    ],
  },
  {
    title: "Business Websites",
    Icon: <Building2 className="size-7 text-lime-400" />,
    desc: [
      "Professional websites tailored to your brand",
      "Optimized for speed, security, and scalability",
      "Multi-page structure (Home, About, Services, Contact)",
      "Built with Next.js + modern UI frameworks",
      "Fully mobile-responsive and user-friendly",
    ],
  },
  {
    title: "Full-Stack Web Applications",
    Icon: <Smartphone className="size-7 text-lime-400" />,
    desc: [
      "Custom applications tailored to business needs",
      "Next.js + NestJS/Express for full-stack power",
      "Scalable SQL databases (PostgreSQL/MySQL)",
      "Redis caching for high performance",
      "Secure authentication, dashboards, and APIs",
    ],
  },
];

export const whyChooseMe = [
  {
    title: "Modern Tech Stack",
    Icon: <Code className="size-7 text-lime-400" />,
    desc: [
      "Built with Next.js, React, NestJS, Express, and modern tooling",
      "Future-proof architecture with scalable patterns",
      "Real-world performance optimizations using caching and SSR",
    ],
  },
  {
    title: "Fast Delivery",
    Icon: <Activity className="size-7 text-lime-400" />,
    desc: [
      "Efficient workflow for delivering projects quickly",
      "No quality sacrifice — speed + precision together",
      "Clear timelines for every project phase",
    ],
  },
  {
    title: "Clean & Scalable Code",
    Icon: <Shield className="size-7 text-lime-400" />,
    desc: [
      "Maintainable, readable code following industry best practices",
      "Modular architecture ready for future updates",
      "Optimized for long-term growth and team collaboration",
    ],
  },
  {
    title: "Security First",
    Icon: <Lock className="size-7 text-lime-400" />,
    desc: [
      "Secure authentication and authorization flows",
      "Protection against common vulnerabilities (XSS, SQL Injection, CSRF)",
      "Encrypted data handling and safe API practices",
    ],
  },
  {
    title: "Regional & Global Pricing",
    Icon: <DollarSign className="size-7 text-lime-400" />,
    desc: [
      "Clear and simple pricing with no hidden fees",
      "Packages designed for different project sizes",
      "Flexible options based on your goals and requirements",
    ],
  },
  {
    title: "Reliable Support",
    Icon: <Headphones className="size-7 text-lime-400" />,
    desc: [
      "Free support after delivery (3 months and more depending on project)",
      "Quick fixes and updates when needed",
      "Direct communication via WhatsApp, Email, or Telegram",
    ],
  },
];

export const reviews = [
  {
    name: "Sarah M.",
    role: "E-Commerce Store Owner",
    review:
      "Working with Web Visitor was an amazing experience. He built my entire e-commerce website with a smooth product system, fast checkout, and clean admin panel. The site is super fast and my conversion rate increased. Delivered earlier than expected!",
  },
  {
    name: "Ahmed R.",
    role: "Startup Founder",
    review:
      "I needed a custom full-stack app with authentication, dashboards, and a scalable backend. Web Visitor delivered everything with professionalism. The UI is modern and the code is clean. Definitely working with him again.",
  },
  {
    name: "Laura K.",
    role: "Content Creator",
    review:
      "He redesigned my portfolio with an amazing modern UI and smooth animations. The site feels professional and responsive on all devices. Great experience overall!",
  },
];

export const socialMedia = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/webvi_sitor25",
    Icon: (
      <Instagram
        className="size-7 bg-gray-200 rounded-full text-black p-1
    hover:bg-gray-400 transition-all duration-300 hover:scale-150"
      />
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/web-visitor-b84827392/",
    Icon: (
      <Linkedin
        className="size-7 bg-gray-200 rounded-full text-black p-1
    hover:bg-gray-400 transition-all duration-300 hover:scale-150"
      />
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61584185821991",
    Icon: (
      <Facebook
        className="size-7 bg-gray-200 rounded-full text-black p-1
    hover:bg-gray-400 transition-all duration-300 hover:scale-150"
      />
    ),
  },
  {
    name: "Youtube",
    url: "https://www.facebook.com/profile.php?id=61584185821991",
    Icon: (
      <Youtube
        className="size-7 bg-gray-200 rounded-full text-black p-1
    hover:bg-gray-400 transition-all duration-300 hover:scale-150"
      />
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@web_visitor",
    Icon: (
      <Image
        src="/tiktok.svg"
        alt="tiktok"
        width={7}
        height={7}
        className="size-7 p-1 bg-gray-200 rounded-full hover:bg-gray-400 
    transition-all duration-300 hover:scale-150"
      />
    ),
  },
];

export const links = [
  { name: "Home", url: "/" },
  { name: "Services", url: "#services" },
  { name: "Price", url: "#price" },
  { name: "Q/A", url: "#qa" },
  { name: "Contact", url: "#contact" },
];

export const contactInfo = [
  {
    name: "Email Us",
    url: "webvisitor25@gmail.com",
    Icon: <Mail className="size-7 text-cyan-400" />,
  },
  {
    name: "Call Us",
    url: "+20 010 6816 8967",
    Icon: <Phone className="size-7 text-cyan-400" />,
  },
  {
    name: "Location",
    url: "Global / Remote Working",
    Icon: <MapPin className="size-7 text-cyan-400" />,
  },
];
