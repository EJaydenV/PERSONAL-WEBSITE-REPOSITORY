export type ProjectCategory =
  | "AI/Automation"
  | "Backend"
  | "Full-Stack"
  | "Cloud/Azure"
  | "Games"
  | "Security";

export interface Project {
  slug: string;
  title: string;
  categories: ProjectCategory[];
  summary: string;
  description: string;
  tech: string[];
  links: {
    demo?: string;
    github?: string;
  };
  featured: boolean;
  // Case study fields
  problem: string;
  constraints: string[];
  solution: string;
  keyFeatures: string[];
  results: string[];
  lessons: string[];
  architectureDescription: string;
}

export const projects: Project[] = [
  {
    slug: "ai-voice-translator-sales-intelligence",
    title: "AI Real-Time Voice Translator & Sales Intelligence Desktop Platform",
    categories: ["AI/Automation", "Backend"],
    summary:
      "Windows desktop platform delivering real-time AI conversation translation, live sales coaching, and CRM-enriched contextual intelligence during live meetings.",
    description:
      "A Windows desktop application built in C# (.NET) designed for real-time AI-driven conversation translation and sales performance feedback. The system integrates a Node.js + TypeScript backend server and orchestrates Azure Speech Services, Gemini, and ElevenLabs APIs to deliver live coaching prompts, conversation scoring, and CRM-based contextual intelligence during meetings. Calendar integrations trigger automated enrichment pipelines before meetings begin, giving sales reps full prospect context before the first word is spoken.",
    tech: [
      "C#",
      ".NET",
      "Node.js",
      "TypeScript",
      "Azure Speech Services",
      "Gemini API",
      "ElevenLabs API",
      "CRM APIs",
      "Google Calendar API",
      "Microsoft Calendar API",
      "REST APIs",
      "Real-time Streaming",
    ],
    links: {
      github: "https://github.com/EJaydenV",
    },
    featured: true,
    problem:
      "Sales representatives struggle to follow structured playbooks during live calls and lack contextual intelligence about prospects during meetings. Language barriers, absence of real-time structured feedback, and manual post-call logging reduce meeting effectiveness and pipeline visibility. Existing solutions rely on invasive cloud-based meeting bots that introduce privacy and compliance concerns.",
    constraints: [
      "Low-latency AI responses — sub-500ms round trip from speech capture to on-screen feedback display",
      "Secure desktop-to-server communication without compromising audio fidelity or introducing perceptible delay",
      "Multi-API orchestration (Azure Speech + Gemini + ElevenLabs) requiring a unified retry and fallback layer",
      "Calendar event-based triggers must operate asynchronously without blocking the main desktop UI thread",
      "CRM context enrichment pipeline must complete and be available before the meeting begins",
    ],
    solution:
      "Built a hybrid desktop + cloud architecture: a C# desktop application handles audio capture, real-time UI overlay, and local event management, while a Node.js + TypeScript backend server orchestrates all AI inference. Azure Speech Services handles real-time voice transcription via streaming. Gemini processes contextual intelligence and generates coaching prompts and performance scoring. ElevenLabs provides voice synthesis for translated output. Google Calendar and Microsoft Calendar integrations trigger CRM enrichment pipelines before meetings begin, populating the agent's context window with deal history and contact intelligence before the call starts.",
    architectureDescription:
      "C# Desktop App → Audio Capture → Azure Speech SDK → Node.js Backend → AI Orchestration (Gemini + ElevenLabs) → CRM Enrichment Pipeline → Calendar Triggers → Real-time Scoring Engine → Desktop UI Feedback",
    keyFeatures: [
      "Real-time conversation translation and transcription via Azure Speech Services streaming pipeline",
      "Live AI coaching prompts with context-aware, playbook-aligned suggestions during calls",
      "Automatic conversation recording with AI-generated post-call analytics and summaries",
      "AI-generated performance scoring using conversation quality signals (talk ratio, objection handling, playbook adherence)",
      "CRM context enrichment triggered automatically when meetings are added to Google or Microsoft Calendar",
      "Document upload and AI scanning for pre-meeting contextual awareness and knowledge injection",
      "Multi-API streaming orchestration: Azure Speech + Gemini + ElevenLabs with unified fallback handling",
      "Performance analytics dashboard with scoring trends, coaching history, and rep comparison views",
    ],
    results: [
      "Enabled structured real-time sales coaching without invasive cloud-based meeting bots",
      "Automated conversation analytics and performance reporting pipeline, eliminating manual post-call logging",
      "Improved contextual awareness during calls via automated pre-meeting CRM enrichment",
      "Built a privacy-first, desktop-native architecture keeping audio and transcript data within controlled infrastructure",
    ],
    lessons: [
      "Hybrid desktop + cloud architectures require explicit state synchronization contracts — the desktop must handle partial API failures gracefully without breaking the UI overlay",
      "Low-latency AI inference benefits significantly from streaming completions — waiting for full responses introduces perceptible lag in real-time coaching contexts",
      "Multi-API orchestration with Azure + Gemini + ElevenLabs requires a dedicated retry and fallback layer; cascade failures without it cause total system degradation",
      "Calendar-triggered enrichment pipelines must be decoupled and async — blocking the main thread on CRM API calls breaks the meeting experience",
    ],
  },
  {
    slug: "crm-webhook-automation-engine",
    title: "CRM Webhook Automation Engine",
    categories: ["AI/Automation", "Backend"],
    summary:
      "Automated 85% of manual CRM data entry across 500+ daily customer interactions for a B2B SaaS client.",
    description:
      "A webhook-driven automation layer connecting HubSpot CRM to multiple data sources, intelligently classifying inbound events, enriching contact records, and triggering downstream workflows using AI classification.",
    tech: [
      "Node.js",
      "TypeScript",
      "HubSpot API",
      "Azure Functions",
      "Webhooks",
      "OpenAI API",
      "PostgreSQL",
      "Redis",
    ],
    links: {
      github: "https://github.com/EJaydenV",
    },
    featured: true,
    problem:
      "A Growth Acceleration Partners client's sales team was manually updating CRM records after every interaction — averaging 45 minutes/day per rep. Data quality was poor, and lead scoring was unreliable due to stale or missing fields.",
    constraints: [
      "HubSpot API rate limits: 100 requests per 10 seconds",
      "Idempotency required — webhooks may deliver duplicate events",
      "Zero downtime deployment — sales team operates 24/7 across time zones",
      "Budget constraint: minimize Azure Function invocations",
    ],
    solution:
      "Designed an event-driven pipeline where every inbound webhook is deduplicated via Redis, classified by an OpenAI prompt chain into action types (contact update, deal stage, task creation), then routed to specialized handlers that call HubSpot's API with retry/backoff logic. A PostgreSQL audit log captures all mutations for debugging.",
    architectureDescription:
      "Inbound Webhook → Azure Function Gateway → Redis Dedup → Event Classifier (OpenAI) → Router → HubSpot API Handlers → PostgreSQL Audit Log",
    keyFeatures: [
      "Idempotency layer using Redis TTL keys for webhook deduplication",
      "AI-powered event classification with fallback to rule-based routing",
      "Rate limiter with adaptive backoff for HubSpot API compliance",
      "Dead-letter queue for failed events with Slack alerting",
      "Audit log with full mutation history and rollback support",
    ],
    results: [
      "85% reduction in manual CRM data entry tasks",
      "500+ daily interactions processed with 99.7% success rate",
      "Average rep time saved: 38 minutes/day",
      "Lead score accuracy improved by 31% due to richer, timelier data",
    ],
    lessons: [
      "Webhook idempotency is non-negotiable — HubSpot will re-deliver on timeout, and duplicate contact creation is a nightmare to clean up",
      "OpenAI classification adds ~200ms latency; for high-volume flows, caching common patterns cuts this to near-zero",
      "Building the audit log from day one saved hours of debugging — never skip it",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const allCategories: ProjectCategory[] = [
  "AI/Automation",
  "Backend",
];
