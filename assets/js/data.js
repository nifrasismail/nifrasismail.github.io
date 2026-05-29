/* ============================================================
   PORTFOLIO DATA — Nifras Ismail · AI Architect
   All content sourced from CV + public GitHub repos.
   ============================================================ */

window.PORTFOLIO = {

  profile: {
    name: "Nifras Ismail",
    fullName: "Mohamed Ismail Mohamed Nifras",
    title: "AI Architect",
    tagline: "I design the buildings that intelligence lives in.",
    summary:
      "Engineer with 10 years designing scalable, AI-powered distributed systems. " +
      "Shipped platforms handling 100M+ monthly requests and $1B+ in annual e-commerce revenue. " +
      "I build goal-driven agentic systems — across developer productivity, ERP, legal research, " +
      "incident investigation, and creative tooling — and turn technology into measurable business outcomes.",
    email: "nifrasismail@gmail.com",
    phone: "+94 77 899 0300",
    linkedin: "https://linkedin.com/in/nifrasismail",
    github: "https://github.com/nifrasismail",
    location: "Sri Lanka · UAE"
  },

  // Animated counters in the "blueprint stats" band
  stats: [
    { value: 10, suffix: "+", label: "Years engineering" },
    { value: 100, suffix: "M+", label: "Monthly requests served" },
    { value: 1, prefix: "$", suffix: "B+", label: "Annual revenue powered" },
    { value: 27, suffix: "ms", label: "API latency (from 300ms)" }
  ],

  // ── THE HISTORY OF MY BUILDINGS ──────────────────────────
  // Each era is a "structure" raised over the timeline.
  timeline: [
    {
      year: "2021",
      span: "Dec 2021 – Present",
      role: "Lead Software Engineer — Full Stack & AI Platform",
      company: "Ounass",
      place: "UAE",
      blueprint: "The AI Era",
      desc: "Architecting and delivering production-grade agentic AI systems on GKE & Docker while leading a full-stack team. Scaled microservices to 100M+ monthly requests at 50k+ RPM, cut API latency from 300ms to 27ms, and established Responsible AI guardrails and an LLM-as-a-Judge evaluation framework.",
      tags: ["Agentic AI", "GKE", "LangGraph", "Node.js", "Responsible AI"],
      current: true
    },
    {
      year: "2020",
      span: "Dec 2020 – Dec 2021",
      role: "Senior Lead Software Engineer",
      company: "Circles Life",
      place: "Singapore · Remote",
      blueprint: "Scaling Up",
      desc: "Led the Node.js → Golang migration, boosting API performance by 40%. Designed and integrated 11 core telco microservices (customer, billing, network) via event-driven architecture — supporting $100M+ annual revenue and 7% of the Singapore market.",
      tags: ["Golang", "Microservices", "RabbitMQ", "Telco"]
    },
    {
      year: "2017",
      span: "Dec 2017 – Dec 2020",
      role: "Senior Software Engineer & Team Lead",
      company: "Sprii.com",
      place: "UAE",
      blueprint: "Going Serverless",
      desc: "Led the transition to serverless architecture on Google Cloud (Cloud Functions, Pub/Sub) for a regional e-commerce platform. Spearheaded the Sprii Community App (Flutter + Node.js + Firebase) supporting 10k+ concurrent users across MENA.",
      tags: ["GCP", "Serverless", "Flutter", "Pub/Sub"]
    },
    {
      year: "2016",
      span: "Oct 2016 – Oct 2017",
      role: "Software Engineer",
      company: "TechOrin (Pvt) Ltd",
      place: "Sri Lanka",
      blueprint: "Framing",
      desc: "Built backend services and dashboards with Java Spring Boot & Angular. Partnered directly with clients on requirements and system architecture, delivering scalable solutions on deadline and mentoring juniors.",
      tags: ["Spring Boot", "Angular", "Architecture"]
    },
    {
      year: "2016",
      span: "May – Oct 2016",
      role: "Associate Software Engineer",
      company: "WSO2 Inc",
      place: "Sri Lanka",
      blueprint: "Foundations",
      desc: "Laid the first stones — built middleware connectors for the WSO2 ESB ecosystem, including the StubHub Connector and RSA SecurID Authenticator, enabling secure third-party integrations.",
      tags: ["Java", "ESB", "Open Source", "Integrations"]
    }
  ],

  // ── FLAGSHIP AI PROJECTS ─────────────────────────────────
  aiProjects: [
    {
      name: "Cody",
      kind: "AI Engineering Workflow Agent",
      icon: "⚙️",
      desc: "A self-extending Claude Code agent with two layers — a tool layer connecting MCP servers (Jira, Confluence, Slack, GitLab, GitHub, Figma, Docker) and a skill layer encoding domain playbooks (standup, incident triage, feature-dev, code review, multi-agent orchestration). A built-in skill-creator autonomously designs and registers new skills. PII-compliant by default.",
      stack: ["Claude Code", "MCP", "Multi-agent", "Skills"]
    },
    {
      name: "Legent",
      kind: "Legal Case Law Research Agent",
      icon: "⚖️",
      desc: "A multilingual legal SaaS for lawyers and researchers to search Sri Lankan court judgments in natural language. Hybrid RAG combining BM25 sparse retrieval and dense semantic embeddings with chunking — returning ranked, highlighted excerpts in seconds. Pluggable multi-provider LLMs. Sinhala, Tamil & English.",
      stack: ["Hybrid RAG", "BM25", "pgvector", "Cloud Run", "Supabase"]
    },
    {
      name: "AI QA Agent",
      kind: "Autonomous Regression Testing",
      icon: "🧪",
      desc: "A Claude-powered agentic QA system that pulls test cases from TestRail, generates and executes browser-based regression tests via Browserless, and reasons over UI state to validate behaviour. Delivers structured reports and — on approval — raises Jira tickets via MCP. Human-in-the-loop by design.",
      stack: ["Claude", "Browserless", "TestRail", "MCP"]
    },
    {
      name: "AI Email Designer",
      kind: "Intelligent Email Template Generator",
      icon: "✉️",
      desc: "A conversational agent (Claude + LangChain) that lets marketing teams generate on-brand, production-ready HTML email templates through chat — strictly within the existing design system and adhering to Can-I-Email cross-client guidelines, with live email-client rendering validation.",
      stack: ["Claude", "LangChain", "HTML Email", "Design System"]
    },
    {
      name: "AIR",
      kind: "AI Reporting Tool",
      icon: "📊",
      desc: "A conversational reporting agent on Agent Core + Amazon Bedrock that lets internal teams build custom reports in natural language — no SQL needed. LangGraph orchestration translates queries into optimized PostgreSQL using metadata-driven schema understanding, delivering tables and exportable PDFs.",
      stack: ["Bedrock", "Agent Core", "LangGraph", "PostgreSQL"]
    },
    {
      name: "ERP AI Agent",
      kind: "Conversational DMS Intelligence",
      icon: "🏷️",
      desc: "A multi-agent system (Gemma 3 via OpenRouter, LangGraph) letting external clients query their distribution management system in natural language — invoices, balances, product ageing, credit checks. An orchestrator routes to specialised sub-agents: a PostgreSQL data agent and an investigation agent.",
      stack: ["Gemma 3", "OpenRouter", "LangGraph", "Multi-agent"]
    },
    {
      name: "Entity",
      kind: "Incident Investigation Agent",
      icon: "🛰️",
      desc: "A Slack-triggered ReAct agent (Claude) with Keycloak multi-user authorization. Analyses logs and metrics, crawls databases, Jira and Confluence via MCP, writes code, and produces resolution plans — cutting incident investigation time and boosting team productivity.",
      stack: ["Claude", "ReAct", "Keycloak", "MCP", "Slack"]
    },
    {
      name: "Jira Ticket Analyser",
      kind: "RAG Classification Agent",
      icon: "🎟️",
      desc: "A Python Lambda RAG agent using Gemini with hybrid retrieval over pgvector and OpenSearch — automating ticket classification and resolution suggestions from proprietary history.",
      stack: ["Gemini", "RAG", "pgvector", "OpenSearch", "Lambda"]
    }
  ],

  // ── CORE COMPETENCIES ────────────────────────────────────
  skills: [
    { group: "Agentic Frameworks", items: ["LangGraph", "LangChain", "CrewAI", "ReAct", "Chain-of-Thought", "Tool / Function Calling", "Planner-Executor", "Multi-agent Orchestration"] },
    { group: "Cloud AI Platforms", items: ["Agent Core", "Amazon Bedrock", "SageMaker", "Azure AI Foundry", "Vertex AI", "Hugging Face", "Cloud Run", "Cloud Functions"] },
    { group: "RAG & Vector Stores", items: ["Hybrid Retrieval", "BM25 + Dense", "Embedding Pipelines", "Chunking", "Reranking", "Pinecone", "pgvector", "OpenSearch"] },
    { group: "Responsible AI", items: ["PII Redaction", "Content Filtering", "Guardrails", "Structured Output Validation", "LLM-as-a-Judge", "Prompt-Injection Defense"] },
    { group: "Engineering", items: ["Python", "TypeScript / Node.js", "Golang", "Microservices", "Event-Driven", "RabbitMQ", "Pub/Sub", "REST / API Gateway"] },
    { group: "Data & DevOps", items: ["PostgreSQL", "Redis", "Elasticsearch", "Firestore", "Docker", "CI/CD", "New Relic", "ELK"] }
  ],

  awards: [
    { title: "IEEE Research Paper", detail: "Consumer Buying-Pattern Analysis using Association Rule Learning — Apriori Algorithm (ICETECH 2016)" },
    { title: "University of Jaffna Prize", detail: "Best Performance in Computer Science (Level 3)" },
    { title: "ICTA Sri Lanka Award", detail: "Appreciation for Digital Content (e-Swabimani 2014)" },
    { title: "Innovation Runner-Up", detail: "Inter-University Innovation Championship (SLASSCOM & Motorola, 2013)" }
  ],

  education: {
    degree: "BSc. in Computer Science",
    school: "University of Jaffna, Sri Lanka",
    span: "2011 – 2016",
    detail: "Second Class Upper · GPA 3.64 / 4.0 · Research: consumer buying-pattern analysis (IEEE ICETECH 2016)"
  },

};
