import "server-only";
// for testing
export const pricing = {
  egypt: [
    {
      name: "Starter",
      price: "4,999 EGP",
      description:
        "A high-converting, professionally built landing page — optimized for speed, SEO, and tracking.",
      features: [
        "Premium Landing Page Design",
        "Fully Responsive & Ultra Fast",
        "SEO + Schema Setup",
        "Analytics & Pixel Setup (GA4, Meta, TikTok)",
        "5–7 Days Delivery",
        "1 Round of Revisions",
        "Optional Hosting: +$60/year"
      ],
      color: "emerald",
      icon: "Rocket",
    },
    {
      name: "Professional",
      price: "12,999+ EGP",
      description:
        "A full business website, premium animations, SEO, and professional tracking setup — built for serious brands.",
      features: [
        "Up to 10 Core Pages",
        "Premium Animations",
        "Custom CMS + Blog Management (If needed)",
        "Technical & On-Page SEO + Schema Markup",
        "Advanced Analytics + Conversion Tracking",
        "Performance & Speed Optimization",
        "Mobile-First Responsive Design",
        "Security Hardening & Best Practices",
        "10-20+ (depending on complexity) Days Delivery",
        "3 Rounds of Revisions",
        "45 Days Post-Launch Support",
      ],
      color: "cyan",
      icon: "Zap",
    },
    {
      name: "Enterprise",
      price: "24,999+ EGP",
      description:
        "A fully scalable, enterprise-grade web application or e-commerce platform with advanced backend features, integrations, and top-level security.",
      features: [
        "Custom Solution (Pricing Based on Requirements)",
        "Scalable Pages & Dynamic Modules",
        "E-commerce Platform + Custom Checkout Flow",
        "API Integrations (REST / GraphQL / Webhooks)",
        "Advanced Backend Features (Auth, Roles, Dashboards)",
        "Enterprise-Level Security Hardening",
        "Performance, Caching & Scalability Optimization",
        "Automated Backups & Monitoring",
        "Advanced Analytics & Conversion Tracking",
        "Priority Support (Fast Response)",
        "20-30+ (depending on complexity) Days Delivery",
        "Unlimited Revisions (During Development)",
        "6 Months Post-Launch Support",
      ],
      color: "purple",
      icon: "Crown",
    },
  ],

  mena: [
    {
      name: "Starter",
      price: "$299+",
      description:
        "A high-converting, professionally built landing page — optimized for speed, SEO, and tracking.",
      features: [
        "Premium Landing Page Design",
        "Fully Responsive & Ultra Fast",
        "SEO + Schema Setup",
        "Analytics & Pixel Setup (GA4, Meta, TikTok)",
        "5–7 Days Delivery",
        "1 Round of Revisions",
        "Optional Hosting: +$60/year"
      ],
      color: "emerald",
      icon: "Rocket",
    },
    {
      name: "Professional",
      price: "$999+",
      description:
        "A full business website, premium animations, SEO, and professional tracking setup — built for serious brands.",
      features: [
        "Up to 10 Core Pages",
        "Premium Animations",
        "Custom CMS + Blog Management (If needed)",
        "Technical & On-Page SEO + Schema Markup",
        "Advanced Analytics + Conversion Tracking",
        "Performance & Speed Optimization",
        "Mobile-First Responsive Design",
        "Security Hardening & Best Practices",
        "10-20+ (depending on complexity) Days Delivery",
        "3 Rounds of Revisions",
        "45 Days Post-Launch Support",
      ],
      color: "cyan",
      icon: "Zap",
    },
    {
      name: "Enterprise",
      price: "$1,999+",
      description:
        "A fully scalable, enterprise-grade web application or e-commerce platform with advanced backend features, integrations, and top-level security.",
      features: [
        "Custom Solution (Pricing Based on Requirements)",
        "Scalable Pages & Dynamic Modules",
        "E-commerce Platform + Custom Checkout Flow",
        "API Integrations (REST / GraphQL / Webhooks)",
        "Advanced Backend Features (Auth, Roles, Dashboards)",
        "Enterprise-Level Security Hardening",
        "Performance, Caching & Scalability Optimization",
        "Automated Backups & Monitoring",
        "Advanced Analytics & Conversion Tracking",
        "Priority Support (Fast Response)",
        "20-30+ (depending on complexity) Days Delivery",
        "Unlimited Revisions (During Development)",
        "6 Months Post-Launch Support",
      ],
      color: "purple",
      icon: "Crown",
    },
  ],

  global: [
    {
      name: "Starter",
      price: "$399",
      description:
        "A high-converting, professionally built landing page — optimized for speed, SEO, and tracking.",
      features: [
        "Premium Landing Page Design",
        "Fully Responsive & Ultra Fast",
        "SEO + Schema Setup",
        "Analytics & Pixel Setup (GA4, Meta, TikTok)",
        "5–7 Days Delivery",
        "1 Round of Revisions",
        "Optional Hosting: +$60/year"
      ],
      color: "emerald",
      icon: "Rocket",
    },
    {
      name: "Professional",
      price: "$1,199+",
      description:
        "A full business website, premium animations, SEO, and professional tracking setup — built for serious brands.",
      features: [
        "Up to 10 Core Pages",
        "Premium Animations",
        "Custom CMS + Blog Management (If needed)",
        "Technical & On-Page SEO + Schema Markup",
        "Advanced Analytics + Conversion Tracking",
        "Performance & Speed Optimization",
        "Mobile-First Responsive Design",
        "Security Hardening & Best Practices",
        "10-20+ (depending on complexity) Days Delivery",
        "3 Rounds of Revisions",
        "45 Days Post-Launch Support",
      ],
      color: "cyan",
      icon: "Zap",
    },
    {
      name: "Enterprise",
      price: "$2,999+",
      description:
        "A fully scalable, enterprise-grade web application or e-commerce platform with advanced backend features, integrations, and top-level security.",
      features: [
        "Custom Solution (Pricing Based on Requirements)",
        "Scalable Pages & Dynamic Modules",
        "E-commerce Platform + Custom Checkout Flow",
        "API Integrations (REST / GraphQL / Webhooks)",
        "Advanced Backend Features (Auth, Roles, Dashboards)",
        "Enterprise-Level Security Hardening",
        "Performance, Caching & Scalability Optimization",
        "Automated Backups & Monitoring",
        "Advanced Analytics & Conversion Tracking",
        "Priority Support (Fast Response)",
        "20-30+ (depending on complexity) Days Delivery",
        "Unlimited Revisions (During Development)",
        "6 Months Post-Launch Support",
      ],
      color: "purple",
      icon: "Crown",
    },
  ],
};

export const extraPayments = [
  {
    name: "Domain & Hosting Renewal",
    price: "$10 - $29 / year",
    description:
      "Renewal for 1 year domain (.com, .net, .org, etc.) + managed hosting setup.",
  },
  {
    name: "Additional changes",
    price: "$20/hour",
    description: "One extra revision outside the included rounds.",
  },
  {
    name: "Extra Section / New Page",
    price: "$99",
    description: "Design + build a new page or section on the website.",
  },
  {
    name: "Monthly Maintenance",
    price: "$20 / hour",
    description: "Ongoing support, updates, backups, and bug fixes.",
  },
  {
    name: "Analytics Dashboard",
    price: "$99",
    description:
      "Custom dashboard for tracking visits, leads, and conversions.",
  },
  {
    name: "Custom Animations",
    price: "$69/page",
    description: "GSAP / Framer Motion animations added after delivery.",
  },
];
