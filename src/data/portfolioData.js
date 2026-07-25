// ============================================================================
//  PORTFOLIO CONTENT — single source of truth
//  Edit values in THIS file only. No UI/component file needs to change.
//  (Icons are referenced by name; see src/data/icons.js for allowed names.)
// ============================================================================

export const personalInfo = {
  name: "Muhammad Umar Akmal",
  title: "Agentic AI Engineer & Backend Developer",
  location: "Karachi, Sindh, Pakistan",
  email: "umeraura99@gmail.com",
  linkedin: "linkedin.com/in/umar-backend-engineer",
  github: "https://github.com/Muhammadumerakmal",
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
  // NOTE: adjust these numbers to your real figures.
  stats: [
    { number: "8+", label: "Roles & Internships" },
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

// ---- Experience section --------------------------------------------------
export const experiences = [
  {
    id: 1,
    company: "FlyRank AI",
    role: "Back End Developer",
    description:
      "Developing backend services and AI-driven features for the platform as part of the core engineering team.",
    period: "Jun 2026 - Present",
    featured: true,
  },
  {
    id: 2,
    company: "Syntecxhub",
    role: "Back End Developer",
    description:
      "Built and maintained scalable Node.js backends, integrated AI features into production workflows, and optimized APIs for performance and reliability alongside a distributed remote team.",
    period: "Apr 2026 - Present",
  },
  {
    id: 3,
    company: "Governor Sindh Initiative (GenAI, Web3 & Metaverse)",
    role: "Full Stack Engineer",
    description:
      "Built AI-powered applications and backend systems in Python, shipped LLM-based features, and turned experimental AI concepts into functional, integrated products.",
    period: "Feb 2024 - Present",
  },
  {
    id: 4,
    company: "S.M.I.T (Saylani Mass I.T Training)",
    role: "Full-stack Developer",
    description:
      "Built full-stack applications with Node.js, React, and PostgreSQL — REST APIs, authentication, dashboards, and CRUD-based SaaS capstone projects.",
    period: "Mar 2025 - Present",
  },
  {
    id: 5,
    company: "Synent Technologies",
    role: "Python Developer",
    description:
      "Contributed to backend development and AI system integrations, building automation workflows and API-driven architectures for real-world use cases.",
    period: "Apr 2026 - Present",
  },
  {
    id: 6,
    company: "Arch Technologies",
    role: "AI & Backend Developer Intern",
    description:
      "Built and tested Python and Node.js backend services across APIs, databases, and cloud deployment, and shipped AI and automation features for internal tools.",
    period: "Apr 2026 - Present",
  },
  {
    id: 7,
    company: "Nexe-Agent",
    role: "Full-stack Developer",
    description:
      "Delivered full-stack features across the product within a fast-moving remote engineering team.",
    period: "Apr 2026 - Jun 2026",
  },
  {
    id: 8,
    company: "Black Ink Motion",
    role: "Business Development Specialist",
    description:
      "Leading business development initiatives for a US-based team, connecting technical capability with client needs.",
    period: "Jun 2026 - Present",
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
  "Cisco Content Networking Specialist Certification",
  "Anthropic Education",
  "Coding Night",
  "Modern Web and App Development with AI",
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
    title: "AI Soft",
    description:
      "A full-stack AI SaaS application with a modern TypeScript front end and an AI-powered backend, shipped to production on Vercel.",
    tech: ["TypeScript", "React", "Node.js", "OpenAI API"],
    github: "https://github.com/Muhammadumerakmal/ai-soft",
    demo: "https://ai-soft-frontend.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "AI Clinic",
    description:
      "An AI-assisted clinic platform built with a spec-driven workflow, bringing intelligent patient interactions to a clean, responsive UI. Live on Vercel.",
    tech: ["TypeScript", "React", "AI", "Vercel"],
    github: "https://github.com/Muhammadumerakmal/ai-clininc-sdd",
    demo: "https://ai-clininc-sdd-ten.vercel.app",
    featured: false,
  },
  {
    id: 3,
    title: "OpenAI Agents SDK Suite",
    description:
      "A collection of agentic AI systems built on the OpenAI Agents SDK — tool-using agents, multi-step workflows, and LLM orchestration in Python.",
    tech: ["Python", "OpenAI Agents SDK", "LLM", "Agentic AI"],
    github: "https://github.com/Muhammadumerakmal/openai-agents-sdk-all-work",
    demo: "",
    featured: false,
  },
  {
    id: 4,
    title: "AI-Powered Freelancer Platform",
    description:
      "A freelancing platform that uses AI to match clients with the right talent and automate parts of the hiring and project workflow.",
    tech: ["AI", "Automation", "Full Stack"],
    github: "https://github.com/Muhammadumerakmal/ai-powered-freelancer-platform",
    demo: "",
    featured: false,
  },
  {
    id: 5,
    title: "CoreEd Backend",
    description:
      "A scalable backend for an online education platform — REST APIs, authentication, and data models built on Node.js and Express.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/Muhammadumerakmal/coreed-backend-latest",
    demo: "",
    featured: false,
  },
  {
    id: 6,
    title: "Coding Night Web App",
    description:
      "A polished, production-deployed web app built for the Coding Night showcase and shipped end to end with a modern TypeScript stack.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/Muhammadumerakmal/coding-night-final-umer-web-dev",
    demo: "https://coding-night-final-umer-web-dev.vercel.app",
    featured: false,
  },
];

// ---- Contact section -----------------------------------------------------
export const contactMeta = {
  // Paste your Formspree form ID to enable real in-page sending. Create a
  // free form at https://formspree.io — the ID is the part after "/f/" in
  // your endpoint (e.g. "xldabcde"). Leave "" to show a direct-contact
  // notice instead of sending.
  formspreeId: "",
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
