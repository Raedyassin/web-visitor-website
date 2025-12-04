import {
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



// export const whyChooseMe = [
//   {
//     title: "Modern Tech Stack",
//     Icon: <Code className="size-7 text-cyan-400" />,
//     desc: [
//       "Built with Next.js, React, NestJS, Express, and modern tooling",
//       "Future-proof architecture with scalable patterns",
//       "Real-world performance optimizations using caching and SSR",
//     ],
//   },
//   {
//     title: "Fast Delivery",
//     Icon: <Activity className="size-7 text-cyan-400" />,
//     desc: [
//       "Efficient workflow for delivering projects quickly",
//       "No quality sacrifice — speed + precision together",
//       "Clear timelines for every project phase",
//     ],
//   },
//   {
//     title: "Clean & Scalable Code",
//     Icon: <Shield className="size-7 text-cyan-400" />,
//     desc: [
//       "Maintainable, readable code following industry best practices",
//       "Modular architecture ready for future updates",
//       "Optimized for long-term growth and team collaboration",
//     ],
//   },
//   {
//     title: "Security First",
//     Icon: <Lock className="size-7 text-cyan-400" />,
//     desc: [
//       "Secure authentication and authorization flows",
//       "Protection against common vulnerabilities (XSS, SQL Injection, CSRF)",
//       "Encrypted data handling and safe API practices",
//     ],
//   },
//   {
//     title: "Regional & Global Pricing",
//     Icon: <DollarSign className="size-7 text-cyan-400" />,
//     desc: [
//       "Clear and simple pricing with no hidden fees",
//       "Packages designed for different project sizes",
//       "Flexible options based on your goals and requirements",
//     ],
//   },
//   {
//     title: "Reliable Support",
//     Icon: <Headphones className="size-7 text-cyan-400" />,
//     desc: [
//       "Free support after delivery (3 months and more depending on project)",
//       "Quick fixes and updates when needed",
//       "Direct communication via WhatsApp, Email, or Telegram",
//     ],
//   },
// ];
export const whyChooseMe = [
  {
    title: "Modern Technology",
    Icon: <Code className="size-7 text-cyan-400" />,
    desc: [
      "Your website runs on the same modern technologies used by top companies",
      "Fast loading, smooth animations, and a great user experience",
      "Built to stay updated and work for years without issues",
    ],
  },
  {
    title: "Fast Delivery",
    Icon: <Activity className="size-7 text-cyan-400" />,
    desc: [
      "Clear timeline from day one — no delays or surprises",
      "Quick, efficient development with high quality",
      "Perfect for clients who want results fast",
    ],
  },
  {
    title: "Clean & Organized Build",
    Icon: <Shield className="size-7 text-cyan-400" />,
    desc: [
      "Your website is easy to update and expand in the future",
      "Built professionally so other developers can work on it too",
      "Smooth performance even as your business grows",
    ],
  },
  {
    title: "Security Focused",
    Icon: <Lock className="size-7 text-cyan-400" />,
    desc: [
      "Your website and customer data are protected",
      "Secure login and safe payment integrations if needed",
    ],
  },
  {
    title: "Fair & Flexible Pricing",
    Icon: <DollarSign className="size-7 text-cyan-400" />,
    desc: [
      "Simple pricing with no hidden fees",
      "Different packages for different budgets",
      "You only pay for what you need — nothing extra",
    ],
  },
  {
    title: "Dedicated Support",
    Icon: <Headphones className="size-7 text-cyan-400" />,
    desc: [
      "Support after the project is delivered",
      "Quick response for fixes, updates, or questions",
      "Direct communication through WhatsApp or Email",
    ],
  },
];

export const reviews = [
  {
    name: "Sarah M.",
    role: "E-Commerce Store Owner",
    review:
      "Working with Web Visitor was an amazing experience. He built my entire e-commerce website with a smooth product system, fast checkout, and clean admin panel. The site is super fast and my conversion rate increased. Delivered earlier than expected!",
    rating: 5,
  },
  {
    name: "Ahmed R.",
    role: "Startup Founder",
    review:
      "I needed a custom full-stack app with authentication, dashboards, and a scalable backend. Web Visitor delivered everything with professionalism. The UI is modern and the code is clean. Definitely working with him again.",
    rating: 5,
  },
  {
    name: "Laura K.",
    role: "Content Creator",
    review:
      "He redesigned my portfolio with an amazing modern UI and smooth animations. The site feels professional and responsive on all devices. Great experience overall!",
    rating: 5,
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
  { name: "Projects", url: "#projects" },
  { name: "Q/A", url: "#qaa" },
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


export const colorThemes = {
  emerald: {
    gradient: "from-emerald-400 to-green-500",

    // backgrounds
    bg: "bg-emerald-500/10",
    iconBg: "bg-emerald-500/20",
    buttonBg: "bg-emerald-500/20",

    // borders
    border: "border-emerald-500/50",

    // shadows
    shadow: "shadow-[0_0_40px_rgba(16,185,129,0.3)]",
    hoverShadow: "hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]",

    // text
    text: "text-emerald-400",
    checkIcon: "text-emerald-400",

    // hovers
    hoverBg: "hover:bg-emerald-500/20",
    buttonHover: "hover:bg-emerald-500/30",

    // badge
    badgeBg: "bg-gradient-to-r from-emerald-400 to-green-500",
  },

  cyan: {
    gradient: "from-cyan-400 to-blue-500",

    bg: "bg-cyan-500/10",
    iconBg: "bg-cyan-500/20",
    buttonBg: "bg-cyan-500/20",

    border: "border-cyan-500/50",

    shadow: "shadow-[0_0_40px_rgba(34,211,238,0.4)]",
    hoverShadow: "hover:shadow-[0_0_60px_rgba(34,211,238,0.6)]",

    text: "text-cyan-400",
    checkIcon: "text-cyan-400",

    hoverBg: "hover:bg-cyan-500/20",
    buttonHover: "hover:bg-cyan-500/30",

    badgeBg: "bg-gradient-to-r from-cyan-400 to-blue-500",
  },

  purple: {
    gradient: "from-purple-400 to-pink-500",

    bg: "bg-purple-500/10",
    iconBg: "bg-purple-500/20",
    buttonBg: "bg-purple-500/20",

    border: "border-purple-500/50",

    shadow: "shadow-[0_0_40px_rgba(168,85,247,0.3)]",
    hoverShadow: "hover:shadow-[0_0_60px_rgba(168,85,247,0.5)]",

    text: "text-purple-400",
    checkIcon: "text-purple-400",

    hoverBg: "hover:bg-purple-500/20",
    buttonHover: "hover:bg-purple-500/30",

    badgeBg: "bg-gradient-to-r from-purple-400 to-pink-500",
  },

  blue: {
    gradient: "from-blue-400 to-indigo-500",

    bg: "bg-blue-500/10",
    iconBg: "bg-blue-500/20",
    buttonBg: "bg-blue-500/20",

    border: "border-blue-500/50",

    shadow: "shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    hoverShadow: "hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]",

    text: "text-blue-400",
    checkIcon: "text-blue-400",

    hoverBg: "hover:bg-blue-500/20",
    buttonHover: "hover:bg-blue-500/30",

    badgeBg: "bg-gradient-to-r from-blue-400 to-indigo-500",
  },
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description:
      "A modern e-commerce solution with real-time inventory management, secure payment integration, and advanced analytics dashboard.",
    image: "/public/hero-side.png",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    color: "cyan",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "Web Application",
    description:
      "Comprehensive analytics dashboard for business intelligence with real-time data visualization and customizable reports.",
    image: "/public/hero-side.png",
    technologies: ["React.js", "NestJS", "MySQL", "Chart.js"],
    color: "purple",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Corporate Landing Page",
    category: "Landing Page",
    description:
      "High-converting landing page with modern animations, SEO optimization, and integrated contact forms for lead generation.",
    image: "/public/hero-side.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    color: "emerald",
    liveUrl: "#",
    githubUrl: "#",
  },
];


export const languages = [
  {
    name: "English",
    code: "en",
  },
  {
    name: "عربي",
    code: "ar",
  },
]