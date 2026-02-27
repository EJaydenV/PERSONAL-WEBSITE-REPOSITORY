export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: "full-time" | "internship" | "contract" | "part-time";
  description: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "SmartCues.ai",
    role: "Software Engineer",
    period: "2024 – Present",
    location: "Remote (Costa Rica)",
    type: "full-time",
    current: true,
    description:
      "Building the core AI conversation intelligence platform — real-time cue card engine, Azure OpenAI integrations, and the agent-facing React overlay.",
    highlights: [
      "Architected real-time pipeline processing 2,000+ concurrent calls with sub-800ms latency",
      "Integrated Azure OpenAI with RAG over client knowledge bases for contextual cue generation",
      "Built multi-tenant SignalR hub infrastructure for live agent coaching overlay",
      "Reduced new agent onboarding time by 40% across 3 enterprise clients",
    ],
    tech: [".NET 8", "Azure OpenAI", "Azure SignalR", "React", "TypeScript", "CosmosDB"],
  },
  {
    company: "Growth Acceleration Partners (GAP)",
    role: "AI Automation Engineer Intern",
    period: "2023 – 2024",
    location: "Remote (Costa Rica)",
    type: "internship",
    description:
      "Designed and shipped AI-driven automation workflows for GAP's clients, focusing on CRM automation, webhook integration pipelines, and LLM-powered process optimization.",
    highlights: [
      "Automated 85% of manual CRM data entry for a B2B SaaS client (500+ daily interactions)",
      "Built webhook orchestration layer integrating HubSpot, Salesforce, and Slack",
      "Developed LLM prompt chains for automated lead qualification and routing",
      "Reduced client operational overhead by an average of 12 hours/week per team",
    ],
    tech: ["Node.js", "TypeScript", "Azure Functions", "HubSpot API", "OpenAI API", "PostgreSQL", "Redis"],
  },
  {
    company: "Amazon SPS",
    role: "Software Development Engineer Intern",
    period: "2023",
    location: "Remote",
    type: "internship",
    description:
      "Contributed to Amazon's Seller Partner Services platform — shipping backend features and internal tooling for seller-facing APIs.",
    highlights: [
      "Implemented new API endpoint features for the Selling Partner API",
      "Improved internal developer tooling reducing deployment cycle time",
      "Collaborated with cross-functional teams across time zones",
      "Wrote comprehensive unit and integration tests maintaining 90%+ coverage",
    ],
    tech: ["Java", "AWS", "TypeScript", "React", "DynamoDB", "CDK"],
  },
  {
    company: "CentauroSolutions",
    role: "Full-Stack Developer",
    period: "2022 – 2023",
    location: "Costa Rica",
    type: "contract",
    description:
      "Delivered full-stack features and AI-assisted document automation for a logistics and compliance-focused software company.",
    highlights: [
      "Built Azure-powered document processing pipeline replacing $120K/year manual review",
      "Developed React dashboards for operations monitoring and reporting",
      "Designed .NET API services for supplier and contract management",
      "Integrated Azure Document Intelligence with OpenAI for 94% extraction accuracy",
    ],
    tech: [".NET 8", "React", "TypeScript", "Azure", "SQL Server", "Azure Functions"],
  },
];
