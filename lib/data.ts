export interface Tool {
  id: number;
  name: string;
  slug: string;
  category: string;
  tags: string[];
  description: string;
  features: string[];
  pricing: string;
  url: string;
}

export const categories = [
  "AI Assistants",
  "DevOps",
  "Testing",
  "Databases",
  "Security",
  "Productivity",
] as const;

export type Category = (typeof categories)[number];

export const tools: Tool[] = [
  {
    id: 1,
    name: "CodePilot AI",
    slug: "codepilot-ai",
    category: "AI Assistants",
    tags: ["ai", "code-completion", "free", "open-source"],
    description:
      "An intelligent code completion engine that understands your entire codebase context. Provides real-time suggestions, refactoring tips, and natural language to code translation.",
    features: [
      "Context-aware autocomplete",
      "Multi-language support (50+)",
      "Natural language to code",
      "Privacy-first local model option",
    ],
    pricing: "Free tier available, Pro from $12/mo",
    url: "https://example.com/codepilot",
  },
  {
    id: 2,
    name: "NeuralDebug",
    slug: "neuraldebug",
    category: "AI Assistants",
    tags: ["ai", "debugging", "logs", "free"],
    description:
      "AI-powered debugging assistant that analyzes stack traces, identifies root causes, and suggests fixes. Integrates with VS Code, JetBrains, and terminal environments.",
    features: [
      "Smart stack trace analysis",
      "Fix suggestion engine",
      "IDE integrations",
      "Historical bug pattern learning",
    ],
    pricing: "Free for open source, $8/mo for private repos",
    url: "https://example.com/neuraldebug",
  },
  {
    id: 3,
    name: "DeployStream",
    slug: "deploystream",
    category: "DevOps",
    tags: ["ci-cd", "deployment", "docker", "kubernetes"],
    description:
      "Unified CI/CD pipeline orchestrator with built-in container management. Deploy to any cloud or on-prem with a single config file.",
    features: [
      "Pipeline as code",
      "Multi-cloud deployments",
      "Built-in container registry",
      "Rollback automation",
    ],
    pricing: "Free for 100 builds/mo, Team $29/mo",
    url: "https://example.com/deploystream",
  },
  {
    id: 4,
    name: "InfraScan",
    slug: "infrascan",
    category: "DevOps",
    tags: ["monitoring", "infrastructure", "cloud", "security"],
    description:
      "Real-time infrastructure monitoring with predictive alerting. Visualize cloud costs, detect anomalies, and auto-scale resources based on ML predictions.",
    features: [
      "Predictive scaling",
      "Cost analytics dashboard",
      "Anomaly detection",
      "50+ cloud integrations",
    ],
    pricing: "Free for 5 resources, Pro $19/mo",
    url: "https://example.com/infrascan",
  },
  {
    id: 5,
    name: "TestForge",
    slug: "testforge",
    category: "Testing",
    tags: ["testing", "automation", "e2e", "free"],
    description:
      "Next-generation test automation framework with AI-generated test cases. Record browser interactions, auto-generate assertions, and run tests across parallel browsers.",
    features: [
      "AI test generation",
      "Visual regression testing",
      "Cross-browser parallel runs",
      "CI-ready reporting",
    ],
    pricing: "Open source core, Cloud from $15/mo",
    url: "https://example.com/testforge",
  },
  {
    id: 6,
    name: "LoadStorm",
    slug: "loadstorm",
    category: "Testing",
    tags: ["testing", "performance", "load-testing", "api"],
    description:
      "Distributed load testing platform that simulates millions of concurrent users. Analyze bottlenecks with flame graphs and auto-generated optimization reports.",
    features: [
      "1M+ concurrent virtual users",
      "Flame graph analysis",
      "API contract validation",
      "Slack/email alerting",
    ],
    pricing: "Free tier 10k users, Pro $39/mo",
    url: "https://example.com/loadstorm",
  },
  {
    id: 7,
    name: "QueryMind",
    slug: "querymind",
    category: "Databases",
    tags: ["database", "sql", "ai", "optimization"],
    description:
      "AI-powered SQL assistant that writes, optimizes, and explains queries. Supports PostgreSQL, MySQL, BigQuery, and Snowflake with schema-aware suggestions.",
    features: [
      "Natural language to SQL",
      "Query optimization tips",
      "Schema exploration",
      "Cross-database support",
    ],
    pricing: "Free for basic queries, Pro $10/mo",
    url: "https://example.com/querymind",
  },
  {
    id: 8,
    name: "DataFlow",
    slug: "dataflow",
    category: "Databases",
    tags: ["database", "realtime", "sync", "api"],
    description:
      "Real-time data synchronization layer for distributed databases. Conflict-free replicated data types (CRDTs) ensure consistency across edge and cloud.",
    features: [
      "CRDT-based sync",
      "Edge-first architecture",
      "Offline support",
      "SQL and NoSQL adapters",
    ],
    pricing: "Free for 10k ops/mo, Scale $49/mo",
    url: "https://example.com/dataflow",
  },
  {
    id: 9,
    name: "ShieldWall",
    slug: "shieldwall",
    category: "Security",
    tags: ["security", "scanning", "vulnerability", "free"],
    description:
      "Automated security scanner for dependencies, containers, and infrastructure-as-code. Detects CVEs, misconfigurations, and secrets in code with PR-level blocking.",
    features: [
      "Dependency vulnerability scan",
      "Container image analysis",
      "IaC misconfiguration detection",
      "Secret redaction",
    ],
    pricing: "Open source, Enterprise on request",
    url: "https://example.com/shieldwall",
  },
  {
    id: 10,
    name: "CipherVault",
    slug: "ciphervault",
    category: "Security",
    tags: ["security", "encryption", "secrets", "compliance"],
    description:
      "Zero-knowledge secrets management platform. Encrypt API keys, certificates, and credentials with envelope encryption and hardware security module (HSM) support.",
    features: [
      "Zero-knowledge architecture",
      "HSM integration",
      "Dynamic secrets generation",
      "Audit logging & compliance",
    ],
    pricing: "Free for 50 secrets, Team $24/mo",
    url: "https://example.com/ciphervault",
  },
  {
    id: 11,
    name: "TaskPilot",
    slug: "taskpilot",
    category: "Productivity",
    tags: ["productivity", "project-management", "kanban", "free"],
    description:
      "Developer-centric project management with built-in sprint planning, code review tracking, and GitHub/GitLab sync. Board views designed for engineering teams.",
    features: [
      "GitHub/GitLab integration",
      "Sprint planning & burndown",
      "Code review tracking",
      "Custom automation rules",
    ],
    pricing: "Free for up to 10 users, Team $12/user/mo",
    url: "https://example.com/taskpilot",
  },
  {
    id: 12,
    name: "DocuGen",
    slug: "docugen",
    category: "Productivity",
    tags: ["productivity", "documentation", "markdown", "open-source"],
    description:
      "Automated documentation generator that reads code comments, OpenAPI specs, and architecture diagrams to produce interactive docs with search and versioning.",
    features: [
      "Multi-format input",
      "Interactive API explorer",
      "Versioned docs",
      "Self-hostable",
    ],
    pricing: "Open source, Cloud $9/mo",
    url: "https://example.com/docugen",
  },
  {
    id: 13,
    name: "APIForge",
    slug: "apiforge",
    category: "AI Assistants",
    tags: ["ai", "api", "generation", "openapi"],
    description:
      "Generate production-ready REST and GraphQL APIs from natural language descriptions. Includes OpenAPI specs, mock servers, and client SDK generation.",
    features: [
      "Natural language to API",
      "OpenAPI / GraphQL output",
      "Mock server generation",
      "Client SDK in 6 languages",
    ],
    pricing: "Free tier 3 APIs, Pro $18/mo",
    url: "https://example.com/apiforge",
  },
  {
    id: 14,
    name: "KubeSentinel",
    slug: "kubesentinel",
    category: "DevOps",
    tags: ["kubernetes", "monitoring", "security", "cloud"],
    description:
      "Kubernetes security and observability platform. Enforce policies, audit RBAC, visualize service mesh traffic, and detect drift in real time.",
    features: [
      "Policy as code (OPA)",
      "RBAC audit & visualization",
      "Service mesh observability",
      "Drift detection",
    ],
    pricing: "Free for 1 cluster, Pro $35/cluster/mo",
    url: "https://example.com/kubesentinel",
  },
  {
    id: 15,
    name: "PixelTest",
    slug: "pixeltest",
    category: "Testing",
    tags: ["testing", "visual", "ui", "accessibility"],
    description:
      "Visual regression and accessibility testing for web and mobile. Capture baseline screenshots, detect pixel diffs, and run WCAG audits automatically in CI.",
    features: [
      "Visual diff engine",
      "WCAG 2.1 AA audit",
      "Mobile & web support",
      "GitHub Actions integration",
    ],
    pricing: "Free for 5k screenshots/mo, Team $22/mo",
    url: "https://example.com/pixeltest",
  },
  {
    id: 16,
    name: "StreamBase",
    slug: "streambase",
    category: "Databases",
    tags: ["database", "streaming", "realtime", "analytics"],
    description:
      "Distributed streaming database for real-time analytics. Ingest events via Kafka or HTTP, query with SQL, and materialize results with sub-millisecond latency.",
    features: [
      "Kafka-native ingestion",
      "Materialized views",
      "Sub-ms query latency",
      "Time-series optimizations",
    ],
    pricing: "Free for 1M events/mo, Scale $59/mo",
    url: "https://example.com/streambase",
  },
  {
    id: 17,
    name: "GhostProxy",
    slug: "ghostproxy",
    category: "Security",
    tags: ["security", "proxy", "privacy", "api"],
    description:
      "Lightweight API proxy with request signing, rate limiting, and IP whitelisting. Deploy as a sidecar or edge function to protect microservices.",
    features: [
      "Request signing & verification",
      "Rate limiting & quotas",
      "IP allowlist / blocklist",
      "Edge deployment (Cloudflare Workers)",
    ],
    pricing: "Open source, Managed $14/mo",
    url: "https://example.com/ghostproxy",
  },
  {
    id: 18,
    name: "SnippetVault",
    slug: "snippetvault",
    category: "Productivity",
    tags: ["productivity", "snippets", "code-sharing", "teams"],
    description:
      "Team snippet manager with syntax highlighting, tagging, and instant search. Share boilerplate, configs, and one-liners across your organization with permissions.",
    features: [
      "Syntax highlighting (200+ languages)",
      "Team workspaces",
      "Instant full-text search",
      "VS Code & browser extensions",
    ],
    pricing: "Free for personal use, Team $7/user/mo",
    url: "https://example.com/snippetvault",
  },
];

export const allTags = Array.from(new Set(tools.flatMap((t) => t.tags))).sort();
