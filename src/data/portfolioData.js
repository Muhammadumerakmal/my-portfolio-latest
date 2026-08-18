// ============================================================================
//  PORTFOLIO CONTENT — single source of truth
//  Edit values in THIS file only. No UI/component file needs to change.
//  (Icons are referenced by name; see src/data/icons.js for allowed names.)
// ============================================================================

export const personalInfo = {
  name: "Muhammad Umer Akmal",
  title: "Agentic AI Engineer & Backend Developer",
  location: "Karachi, Sindh, Pakistan",
  email: "umeraura99@gmail.com",
  linkedin: "www.linkedin.com/in/umar-backend-engineer",
  github: "https://github.com/Muhammadumerakmal",
  resumeUrl: "/Muhammad-Umer-Akmal-Resume.pdf",
  resumeLabel: "Résumé",
  tagline: "Building AI products that survive beyond the demo stage.",
  description:
    "I build scalable backend systems and integrate AI into products made for production — not just demos. My stack spans Node.js, Express, FastAPI, MongoDB, PostgreSQL, and modern LLM and agentic-AI workflows.",
};

// ---- Hero section --------------------------------------------------------
export const hero = {
  badge: "Available for Work",
  // Rotating job titles typed out under the name (edit freely):
  roles: [
    "Agentic AI Engineer",
    "Backend Developer",
    "Full-Stack Engineer",
    "AI Automation Builder",
  ],
  // The large right-side headline, one array item per line:
  headlineLines: ["Building AI products", "that survive beyond", "the demo stage."],
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
  mainText: "Most AI projects don't fail because the idea was bad.",
  subText: "They fail when it's time to move beyond the demo.",
  description:
    "I specialize in scalable backend systems and production-grade AI integrations. I help founders and teams get past the point where most AI products stall — the demo — by designing architectures that stay fast, reliable, and maintainable as real users arrive.",
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
  // Grounded in the resume PDF (public/Muhammad-Umer-Akmal-Resume.pdf).
  // Update here if your real figures change.
  stats: [
    { number: "3+", label: "Roles & Internships" },
    { number: "2+", label: "Years Experience" },
    { number: "9+", label: "GitHub Projects" },
    { number: "4+", label: "Certifications" },
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

// ---- Services section ----------------------------------------------------
export const servicesMeta = {
  badge: "What I Do",
  title: "How I Can",
  titleAccent: "Help",
  subtitle:
    "I help founders and teams turn ideas into production-ready products — backends that scale, AI that ships, and interfaces that convert.",
};

export const services = [
  {
    title: "Scalable Backend Development",
    description:
      "APIs and services built to stay fast and reliable under real traffic — Node.js, Express, and FastAPI with clean, maintainable architecture.",
    icon: "Server",
  },
  {
    title: "Agentic AI & LLM Integration",
    description:
      "Production AI features that go beyond the demo — OpenAI Agents SDK, LLM integration, RAG, and automation wired into real workflows.",
    icon: "Bot",
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "End-to-end products with Next.js, React, and TypeScript — responsive, accessible, SEO-ready interfaces backed by solid data models.",
    icon: "Layers",
  },
  {
    title: "APIs, DevOps & Deployment",
    description:
      "REST API design with auth, rate limiting, and pagination — containerised with Docker and shipped via CI/CD for zero-downtime releases.",
    icon: "Workflow",
  },
];

// ---- Experience section --------------------------------------------------
export const experiences = [
  {
    id: 1,
    company: "Governor Sindh Initiative (GIAIC)",
    role: "Full-Stack Developer",
    description:
      "Building AI-powered web applications with advanced prompt engineering and LLM integration, engineering full-stack interfaces in Next.js, React, TypeScript, and Tailwind CSS, and developing RESTful APIs with FastAPI and Node.js.",
    period: "Feb 2024 - Present",
    featured: true,
    highlights: [
      "AI apps with prompt engineering & LLM integration",
      "Full-stack UIs in Next.js, React & TypeScript",
      "REST APIs with FastAPI & Node.js",
      "Web3 / decentralised app prototypes",
    ],
  },
  {
    id: 2,
    company: "Independent / Freelance",
    role: "Full-Stack Developer (Self-Directed)",
    description:
      "Designing and shipping production-ready web apps with Next.js, TypeScript, React, and Python backends — integrating the OpenAI Agents SDK for autonomous multi-step AI, containerising with Docker, and building REST APIs with auth, rate limiting, and pagination.",
    period: "2023 - Present",
  },
  {
    id: 3,
    company: "SMIT (Saylani Mass I.T Training)",
    role: "Full-Stack Developer",
    description:
      "Built full-stack applications with Node.js, React, and PostgreSQL — REST APIs, authentication, dashboards, and CRUD-based SaaS capstone projects.",
    period: "Mar 2025 - Present",
  },
];

// ---- Education section ---------------------------------------------------
export const education = [
  {
    id: 1,
    institution: "freeCodeCamp",
    year: "Feb 2025",
    type: "certification",
  },
  {
    id: 2,
    institution: "Board of Secondary Education, Karachi",
    year: "2023 - 2025",
    field: "Biology",
    type: "secondary",
  },
];

export const certifications = [
  { name: "Content Networking Specialist", issuer: "Cisco" },
  { name: "Modern Web & App Development with AI", issuer: "GIAIC" },
  { name: "AI Education Program", issuer: "Anthropic" },
  { name: "Coding Night Hackathon", issuer: "GIAIC" },
];

export const languages = [
  { name: "English", level: "Professional Working", proficiency: 90 },
  { name: "Urdu", level: "Full Professional", proficiency: 100 },
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
    title: "Umer Akmal Kitchen",
    description:
      "An AI-powered restaurant ordering platform — a conversational order assistant that takes orders in natural language, plus table reservations and delivery tracking in one modern interface. Live on Vercel.",
    tech: ["React", "AI Assistant", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Muhammadumerakmal/resturant",
    demo: "https://resturant-frontend-alpha.vercel.app/",
    image: "/projects/restaurant.png",
    category: "AI",
    featured: true,
  },
  {
    id: 7,
    title: "Physical AI & Humanoid Robotics",
    description:
      "A first-edition technical book and interactive learning platform — a practical engineering guide to physical AI and humanoid robots, with full-text search, a glossary, and an in-browser lab where you command a working 3D humanoid in natural language. Live on Vercel.",
    tech: ["Docusaurus", "React", "3D / WebGL", "AI Assistant", "Vercel"],
    github: "https://github.com/Muhammadumerakmal/physical-ai-humanoid-robotics",
    demo: "https://physical-ai-humanoid-robotics-five-iota.vercel.app/",
    image: "/projects/physical-ai-robotics.jpg",
    category: "AI",
    featured: false,
  },
  {
    id: 2,
    title: "AI Clinic",
    description:
      "An AI-assisted clinic management platform built with a spec-driven workflow — intelligent appointment scheduling, patient records, and AI diagnostics in a clean, responsive UI. Live on Vercel.",
    tech: ["TypeScript", "React", "AI", "Vercel"],
    github: "https://github.com/Muhammadumerakmal/ai-clininc-sdd",
    demo: "https://ai-clininc-sdd-ten.vercel.app",
    image: "/projects/ai-clinic.png",
    category: "AI",
    featured: false,
  },
  {
    id: 3,
    title: "HelpHub AI",
    description:
      "A community-powered support platform — AI help requests, leaderboards, and trust scores — built for the Coding Night showcase and shipped end to end with a modern TypeScript stack.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/Muhammadumerakmal/coding-night-final-umer-web-dev",
    demo: "https://coding-night-final-umer-web-dev.vercel.app",
    image: "/projects/coding-night.png",
    category: "Full-Stack",
    featured: false,
  },
  {
    id: 4,
    title: "OpenAI Agents SDK Suite",
    description:
      "A collection of agentic AI systems built on the OpenAI Agents SDK — tool-using agents, multi-step workflows, and LLM orchestration in Python.",
    tech: ["Python", "OpenAI Agents SDK", "LLM", "Agentic AI"],
    github: "https://github.com/Muhammadumerakmal/openai-agents-sdk-all-work",
    demo: "",
    category: "AI",
    featured: false,
  },
  {
    id: 5,
    title: "AI-Powered Freelancer Platform",
    description:
      "A freelancing platform that uses AI to match clients with the right talent and automate parts of the hiring and project workflow.",
    tech: ["AI", "Automation", "Full Stack"],
    github: "https://github.com/Muhammadumerakmal/ai-powered-freelancer-platform",
    demo: "",
    category: "Full-Stack",
    featured: false,
  },
  {
    id: 6,
    title: "CoreEd Backend",
    description:
      "A scalable backend for an online education platform — REST APIs, authentication, and data models built on Node.js and Express.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Muhammadumerakmal/coreed-backend-latest",
    demo: "",
    category: "Backend",
    featured: false,
  },
];

// ---- Contact section -----------------------------------------------------
export const contactMeta = {
  // Paste your Formspree form ID to enable real in-page sending. Create a
  // free form at https://formspree.io — the ID is the part after "/f/" in
  // your endpoint (e.g. "xldabcde"). Leave "" to show a direct-contact
  // notice instead of sending.
  formspreeId: "xjgnjvzz",
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
  brandAccent: "Umer",
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
      href: "https://www.linkedin.com/in/umar-backend-engineer",
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
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
