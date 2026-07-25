// ============================================================================
//  PORTFOLIO CONTENT — single source of truth
//  Edit values in THIS file only. No UI/component file needs to change.
//  (Icons are referenced by name; see src/data/icons.js for allowed names.)
// ============================================================================

export const personalInfo = {
  name: "Muhammed Umar Akmal",
  title: "Agentic AI Engineer & Full Stack Developer",
  location: "Karachi, Pakistan",
  email: "umeraura99@gmail.com",
  linkedin: "linkedin.com/in/umar-backend-engineer",
  github: "https://github.com/Muhammadumerakmal",
  tagline: "Building the Web, Cinematically.",
  description:
    "I build scalable backend systems, AI-powered applications, and production-ready web experiences using MERN, FastAPI, Docker, APIs, and modern AI workflows.",
};

// ---- Hero section --------------------------------------------------------
export const hero = {
  badge: "Available for Work",
  // The large right-side headline, one array item per line:
  headlineLines: ["Building the", "Web,", "Cinematically."],
  // The line index that gets the primary/glow color (0-based):
  headlineAccentLine: 1,
  buttons: [
    { label: "View Projects", href: "#projects", variant: "primary" },
    { label: "Contact Me", href: "#contact", variant: "secondary" },
  ],
};

// ---- About section -------------------------------------------------------
export const aboutContent = {
  title: "About",
  titleAccent: "Me",
  mainText: "Most startups do not fail because of bad ideas.",
  subText: "They fail because their systems cannot scale.",
  description:
    "I help founders and startups transform ideas into production-ready applications through scalable backend architecture, AI integrations, automation workflows, and modern web technologies.",
  coreTechLabel: "Core Technologies",
  highlights: [
    "Node.js",
    "FastAPI",
    "MERN Stack",
    "OpenAI APIs",
    "Docker",
    "AI Automation",
    "RAG Systems",
  ],
  // NOTE: adjust these numbers to your real figures.
  stats: [
    { number: "9+", label: "GitHub Projects" },
    { number: "2+", label: "Years Experience" },
    { number: "10+", label: "Technologies" },
    { number: "5+", label: "Certifications" },
  ],
  features: [
    {
      title: "Backend Architecture",
      description:
        "Scalable systems with Node.js, FastAPI, and microservices patterns.",
      icon: "Zap",
      color: "text-yellow-400",
    },
    {
      title: "AI Integration",
      description:
        "Advanced AI features with OpenAI, RAG systems, and automation workflows.",
      icon: "Bot",
      color: "text-primary",
    },
    {
      title: "Full Stack Development",
      description:
        "End-to-end solutions with MERN stack, modern UI, and production deployment.",
      icon: "Rocket",
      color: "text-blue-400",
    },
  ],
};

// ---- Experience section --------------------------------------------------
export const experiences = [
  {
    id: 1,
    company: "Syntecxhub",
    role: "Back End Developer",
    description:
      "Built scalable backend systems, optimized APIs, and integrated AI features into production workflows.",
    period: "2024 - Present",
    featured: true,
  },
  {
    id: 2,
    company: "Synent Technologies",
    role: "Python Developer",
    description:
      "Worked on automation systems, AI integrations, APIs, and backend architecture.",
    period: "2024",
  },
  {
    id: 3,
    company: "Arch Technologies",
    role: "AI & Backend Developer Intern",
    description:
      "Worked with Python, Node.js, APIs, databases, and deployment workflows.",
    period: "2023 - 2024",
  },
  {
    id: 4,
    company: "Governor Sindh Initiative",
    role: "Full Stack Engineer",
    description:
      "Built AI-powered applications and backend systems using Python and modern APIs.",
    period: "2023",
  },
  {
    id: 5,
    company: "SMIT",
    role: "Full Stack Developer",
    description:
      "Developed full-stack applications using React, Node.js, PostgreSQL, dashboards, and SaaS systems.",
    period: "2023",
  },
];

// ---- Education section ---------------------------------------------------
export const education = [
  {
    id: 1,
    institution: "freeCodeCamp",
    year: "2025",
    type: "certification",
  },
  {
    id: 2,
    institution: "Board of Secondary Education Karachi",
    year: "2023 - 2025",
    field: "Biology",
    type: "secondary",
  },
];

export const certifications = [
  "Cisco Content Networking Specialist",
  "Anthropic Education",
  "Coding Night",
  "Modern Web and App Development with AI",
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
];

// ---- Skills section ------------------------------------------------------
export const skills = {
  backend: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Socket.io"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
  ai: ["OpenAI API", "LLM Integration", "RAG", "AI Automation", "Prompt Engineering"],
  database: ["MongoDB", "PostgreSQL"],
  devops: ["Docker", "Git", "GitHub"],
};

// ---- Projects section ----------------------------------------------------
// Real repos from github.com/Muhammadumerakmal. Descriptions are inferred
// from repo names/languages — refine the wording as you like. Leave `demo`
// as an empty string ("") for projects with no live demo (the Live Demo
// link is hidden automatically).
export const projectsMeta = {
  badge: "Featured Work",
  title: "Selected",
  titleAccent: "Projects",
  subtitle:
    "Production-ready applications showcasing AI integration, scalable architecture, and modern web technologies",
  viewAllUrl: "https://github.com/Muhammadumerakmal",
  viewAllLabel: "View All Projects on GitHub",
};

export const projects = [
  {
    id: 1,
    title: "AI Soft",
    description:
      "Full-stack AI-powered web application built with a modern TypeScript stack and deployed on Vercel.",
    tech: ["TypeScript", "React", "AI"],
    github: "https://github.com/Muhammadumerakmal/ai-soft",
    demo: "https://ai-soft-frontend.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "AI Clinic (SDD)",
    description:
      "AI-assisted clinic application built with a spec-driven development workflow, live on Vercel.",
    tech: ["TypeScript", "React", "AI"],
    github: "https://github.com/Muhammadumerakmal/ai-clininc-sdd",
    demo: "https://ai-clininc-sdd-ten.vercel.app",
    featured: false,
  },
  {
    id: 3,
    title: "AI-Powered Freelancer Platform",
    description:
      "Platform connecting freelancers and clients with AI-driven matching and workflow automation.",
    tech: ["Python", "AI", "Automation"],
    github: "https://github.com/Muhammadumerakmal/ai-powered-freelancer-platform",
    demo: "",
    featured: false,
  },
  {
    id: 4,
    title: "CoreEd Arch Backend",
    description:
      "Backend architecture for an education platform, built with Node.js and a scalable API design.",
    tech: ["JavaScript", "Node.js", "REST API"],
    github: "https://github.com/Muhammadumerakmal/coreed-arch-backend",
    demo: "",
    featured: false,
  },
  {
    id: 5,
    title: "UMS",
    description:
      "TypeScript application implementing a management system with a typed, component-based architecture.",
    tech: ["TypeScript", "React"],
    github: "https://github.com/Muhammadumerakmal/ums",
    demo: "",
    featured: false,
  },
  {
    id: 6,
    title: "n8n Local Workflows",
    description:
      "Collection of self-hosted n8n automation workflows for local task orchestration and integrations.",
    tech: ["n8n", "Automation", "Workflows"],
    github: "https://github.com/Muhammadumerakmal/n8n-local-workflows",
    demo: "",
    featured: false,
  },
];

// ---- Contact section -----------------------------------------------------
export const contactMeta = {
  badge: "Get In Touch",
  title: "Let's Work",
  titleAccent: "Together",
  subtitle:
    "Have a project in mind? Let's discuss how we can bring your ideas to life with scalable technology and AI-powered solutions.",
  availableFor: [
    "Full-time opportunities",
    "Freelance projects",
    "Technical consulting",
    "AI integration projects",
    "Backend architecture",
  ],
};

// ---- Footer --------------------------------------------------------------
export const footerContent = {
  brandAccent: "Umar",
  brandRest: "Akmal",
  tagline:
    "Building scalable systems and AI-powered applications that make a difference.",
  bottomNote: "Designed & Developed with passion",
  // Social links shown in the footer. `icon` must be a name from icons.js.
  socials: [
    { icon: "Mail", label: "Email", href: "mailto:umeraura99@gmail.com" },
    {
      icon: "ExternalLink",
      label: "LinkedIn",
      href: "https://linkedin.com/in/umar-backend-engineer",
    },
    {
      icon: "ExternalLink",
      label: "GitHub",
      href: "https://github.com/Muhammadumerakmal",
    },
  ],
};

// ---- Navigation ----------------------------------------------------------
export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
