// Portfolio data - Update this file to customize your portfolio content

export const personalInfo = {
  name: "Sanketh Harnoorkar",
  title: "Backend Engineer | Distributed Systems | Rust & AI Systems",
  shortIntro: "I'm Sanketh Harnoorkar, a backend engineer with 5 years of experience building scalable systems. I work on high-throughput backend services and I'm deeply interested in distributed systems, database internals, Rust, and AI-powered developer tooling.",
  role: "Software Engineer / Backend Engineer",
  experience: "5 years",
  currentCompany: "Myntra",
  location: "Bangalore, India",
  coreStrengths: ["backend engineering", "distributed systems", "scalability", "Java", "Rust", "Kubernetes", "databases", "observability"],
  currentInterests: ["Rust systems programming", "database internals", "AI-powered developer tools", "multi-repo debugging", "Solana/Anchor smart contracts"],
};

export const about = {
  summary: `I am a backend engineer with 5 years of experience specializing in building scalable, high-throughput systems. My work focuses on designing and maintaining backend services that handle significant load while ensuring reliability and performance.

I enjoy tackling complex engineering challenges, from optimizing database queries to architecting distributed systems. I prioritize code quality, system reliability, and long-term maintainability over quick fixes.

Currently, I'm exploring Rust for systems programming, diving deeper into database internals, and experimenting with AI-powered developer tools. I'm also learning Solana smart contract development through hands-on projects.`,
};

export const skills = {
  languages: ["Java", "Rust", "Python", "SQL", "JavaScript/TypeScript"],
  backend: ["Spring Boot", "REST APIs", "microservices", "Kafka"],
  infrastructure: ["Kubernetes", "Helm", "ArgoCD", "Docker"],
  databases: ["MySQL", "PostgreSQL", "Redis", "Elasticsearch"],
  observability: ["Prometheus", "Grafana", "logs", "tracing"],
  other: ["Solana", "Anchor", "AI tooling", "system design"],
};

export const experience = {
  company: "Myntra",
  role: "Backend Engineer",
  duration: "Current", // Update with actual duration
  highlights: [
    "Developed and maintained high-throughput backend services handling millions of requests daily",
    "Designed microservices architecture for improved scalability and maintainability",
    "Implemented observability solutions using Prometheus and Grafana for better system monitoring",
    "Optimized database queries and caching strategies to improve performance",
    "Collaborated with cross-functional teams to deliver features that impacted user experience",
    "Led initiatives to improve system reliability and reduce downtime",
  ],
};

export const projects = [
  {
    title: "Rust Redis Implementation",
    description: "A learning project implementing Redis from scratch in Rust to understand database internals and systems programming.",
    techStack: ["Rust", "Tokio", "Networking"],
    challenge: "Implementing the Redis protocol and data structures while ensuring thread safety and performance.",
    github: null, // Add project URL when available
    demo: null,
  },
  {
    title: "Solana Arbitrage Bot",
    description: "A smart contract-based arbitrage system on Solana for identifying and executing profitable trades across DEXs.",
    techStack: ["Rust", "Anchor", "Solana", "Web3.js"],
    challenge: "Handling blockchain transaction speeds, managing gas costs, and ensuring atomic operations.",
    github: null, // Add project URL when available
    demo: null,
  },
  {
    title: "AI-Powered Multi-Repo Debugger",
    description: "An AI tool that analyzes code across multiple repositories to identify bugs and suggest fixes.",
    techStack: ["Python", "OpenAI API", "Git", "FastAPI"],
    challenge: "Integrating AI models with code analysis and providing actionable debugging insights.",
    github: null, // Add project URL when available
    demo: null,
  },
  {
    title: "Distributed Cache System",
    description: "A custom distributed caching solution with consistency guarantees and fault tolerance.",
    techStack: ["Go", "gRPC", "Raft consensus", "Docker"],
    challenge: "Implementing distributed consensus and handling network partitions gracefully.",
    github: null, // Add project URL when available
    demo: null,
  },
];

export const writings = [
  {
    title: "Understanding Database Internals",
    description: "A deep dive into how databases store and retrieve data efficiently.",
    link: "/blog/understanding-database-internals",
  },
  {
    title: "Lessons from Building Distributed Systems",
    description: "Key insights and patterns from real-world distributed system deployments.",
    link: null, // Add published article URL when available
  },
  {
    title: "AI in Software Engineering",
    description: "Exploring how AI tools are changing the way we write and maintain code.",
    link: null, // Add published article URL when available
  },
  {
    title: "My Rust Learning Journey",
    description: "Personal experiences and lessons learned while mastering Rust.",
    link: null, // Add published article URL when available
  },
];

export const contact = {
  email: "sanketh.harnoorkar@gmail.com",
  github: null, // Add your profile URL
  linkedin: "https://www.linkedin.com/in/sanketh-harnoorkar-aa8520151/",
};
