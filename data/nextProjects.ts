export interface NextProject {
  title: string;
  description: string;
  categories: string[];
  tech: string[];
}

export const nextProjects: NextProject[] = [
  {
    title: "Azure Serverless RAG Intelligence Platform",
    description:
      "A document ingestion, embeddings, and vector search system using Azure Blob Storage, Azure Functions, and AI APIs to build scalable Retrieval-Augmented Generation workflows. Designed for multi-tenant document intelligence with hybrid search (keyword + semantic) and configurable retrieval pipelines.",
    categories: ["AI/Automation", "Cloud/Azure"],
    tech: [
      "Azure Blob Storage",
      "Azure Functions",
      "Azure AI Search",
      "OpenAI Embeddings",
      "Python",
      "TypeScript",
      "RAG",
    ],
  },
  {
    title: "Event-Driven Webhook Gateway",
    description:
      "A production-grade webhook ingestion service with HMAC signature validation, idempotency-based deduplication, queue-based processing via Azure Service Bus, configurable retry logic with exponential backoff, and full observability instrumentation including structured logging and dead-letter alerting.",
    categories: ["Backend", "Cloud/Azure"],
    tech: [
      "Node.js",
      "TypeScript",
      "Azure Service Bus",
      "Redis",
      ".NET",
      "PostgreSQL",
      "OpenTelemetry",
    ],
  },
  {
    title: "Secure Multi-Tenant API Platform",
    description:
      "A backend system implementing JWT authentication with refresh token rotation, role-based access control (RBAC), distributed rate limiting, audit logging, and security hardening following OWASP Top 10 best practices. Built for multi-tenant isolation with per-tenant configuration and policy enforcement.",
    categories: ["Backend", "Security"],
    tech: [
      ".NET 8",
      "ASP.NET Core",
      "JWT / OAuth2",
      "Redis",
      "PostgreSQL",
      "OWASP",
      "Docker",
    ],
  },
  {
    title: "AI Conversation Scoring Simulator",
    description:
      "A web-based SaaS demo that analyzes transcript input and generates structured performance feedback, confidence scoring, and improvement suggestions using real-time AI analysis. Demonstrates the core scoring engine from the AI Voice Translator project in a standalone, publicly accessible format.",
    categories: ["AI/Automation", "Full-Stack"],
    tech: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "Vercel",
      "React",
      "Streaming",
    ],
  },
];
