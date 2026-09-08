/* ==========================================================================
   KRISHNA KUMAR BANDOJU — PORTFOLIO SCRIPT
   Content below is sourced directly from the resume PDF. No invented
   metrics, clients, or technologies.

   ICONS are self-contained inline SVG (no external icon-font CDN) so the
   page renders identically offline, on restricted networks, or wherever
   a CDN happens to be blocked.
   ========================================================================== */

const ICONS = {
  github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.5-.6 1-.5 2V21"/>',
  "linkedin-in": '<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>',
  "arrow-down-to-line": '<path d="M12 3v12"/><polyline points="7 10 12 15 17 10"/><line x1="5" y1="21" x2="19" y2="21"/>',
  "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="8 7 17 7 17 16"/>',
  "arrow-up": '<line x1="12" y1="19" x2="12" y2="6"/><polyline points="6 12 12 6 18 12"/>',
  "arrow-right": '<line x1="4" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/>',
  "chevron-down": '<polyline points="6 9 12 15 18 9"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  angular: '<path d="M12 3l8 3-1.3 11L12 21l-6.7-4L4 6z"/><path d="M12 6.5L8 16h1.6l.8-2h3.2l.8 2H16z"/><path d="M9.9 12.6h4.2"/>',
  microsoft: '<rect x="3" y="3" width="7.5" height="7.5"/><rect x="13.5" y="3" width="7.5" height="7.5"/><rect x="3" y="13.5" width="7.5" height="7.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M20 5v14c0 1.7-3.6 3-8 3s-8-1.3-8-3V5"/><path d="M20 12c0 1.7-3.6 3-8 3s-8-1.3-8-3"/>',
  docker: '<path d="M22 12.5c-.7-.5-2-.7-3-.5-.2-1.3-1.1-2.4-2.4-3.2l-.5-.3-.3.5c-.6 1-.9 2.5-.1 3.6-.4.2-1.2.5-2.3.5H3.3c-.2 1.6.1 3.6 1.3 5 1.2 1.4 3 2.1 5.3 2.1 5 0 8.8-2.3 10.5-6.5 1.1.1 2.4-.3 3.2-1.1z"/><rect x="6" y="7" width="2.2" height="2.2"/><rect x="9" y="7" width="2.2" height="2.2"/><rect x="9" y="4" width="2.2" height="2.2"/><rect x="12" y="7" width="2.2" height="2.2"/>',
  infinity: '<path d="M8 9a3.5 3.5 0 000 7c2.5 0 3.7-1.6 4-3.5.3 1.9 1.5 3.5 4 3.5a3.5 3.5 0 000-7c-2.5 0-3.7 1.6-4 3.5C11.7 10.6 10.5 9 8 9z"/>',
  sparkles: '<path d="M12 3l1.8 4.8L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.2z"/><path d="M19 15l.7 1.9 2 .6-2 .6-.7 1.9-.7-1.9-2-.6 2-.6z"/>',
  "quote-left": '<path d="M7 8a3 3 0 00-3 3v2a3 3 0 003 3h1v-6H7"/><path d="M17 8a3 3 0 00-3 3v2a3 3 0 003 3h1v-6h-1"/><path d="M5 13V9a4 4 0 014-4"/><path d="M15 13V9a4 4 0 014-4"/>',
  "shield-halved": '<path d="M12 3l8 3.5v5.2c0 4.7-3.3 8.4-8 9.3-4.7-.9-8-4.6-8-9.3V6.5z"/><path d="M12 3v18"/>',
  "diagram-project": '<circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="12" cy="18" r="2.4"/><line x1="7.6" y1="8" x2="10.5" y2="16"/><line x1="16.4" y1="8" x2="13.5" y2="16"/>',
  robot: '<rect x="4" y="9" width="16" height="10" rx="2.5"/><circle cx="9.5" cy="14" r="1.1"/><circle cx="14.5" cy="14" r="1.1"/><line x1="12" y1="5" x2="12" y2="9"/><circle cx="12" cy="3.5" r="1.2"/><line x1="4" y1="13" x2="2" y2="13"/><line x1="22" y1="13" x2="20" y2="13"/>',
  xmark: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  "map-location-dot": '<path d="M9.5 19.5L4 17V6l5.5 2.5L14.5 6 20 8.5v11l-5.5-2.5-5 2.5z"/><line x1="9.5" y1="8.5" x2="9.5" y2="19.5"/><line x1="14.5" y1="6" x2="14.5" y2="17"/><circle cx="17" cy="12" r="1.3"/>',
  "heart-pulse": '<path d="M12.8 20.6L12 21l-.8-.4C6 17.8 2.5 14.5 2.5 10.4A5 5 0 0112 7.2a5 5 0 019.5 3.2c0 .8-.1 1.5-.4 2.2h-3.6l-1.5 3-2.4-6-1.5 3H8"/>',
  "list-check": '<polyline points="2.5 6 4.5 8 8.5 4"/><line x1="12" y1="6" x2="21.5" y2="6"/><polyline points="2.5 13 4.5 15 8.5 11"/><line x1="12" y1="13" x2="21.5" y2="13"/><polyline points="2.5 20 4.5 22 8.5 18"/><line x1="12" y1="20" x2="21.5" y2="20"/>',
  brain: '<path d="M9 4a3 3 0 00-3 3 3 3 0 00-1.5 5.6A3 3 0 007 18h1a1 1 0 001-1V5a1 1 0 00-1-1H9z"/><path d="M15 4a3 3 0 013 3 3 3 0 011.5 5.6A3 3 0 0117 18h-1a1 1 0 01-1-1V5a1 1 0 011-1h.5"/>',
  "puzzle-piece": '<path d="M9 4h4v2.2a1.4 1.4 0 002.8 0V4h1.2a2 2 0 012 2v1.2h2.2a1.4 1.4 0 010 2.8H19v4h-2.2a1.4 1.4 0 00-1.4 1.4v.8a1.4 1.4 0 002.8 0v-.2H20v1.2a2 2 0 01-2 2h-1.2V21a1.4 1.4 0 01-2.8 0v-2.2H10V21a1.4 1.4 0 01-2.8 0v-2.2H6a2 2 0 01-2-2v-1.2h2.2a1.4 1.4 0 000-2.8H4V10h2.2a1.4 1.4 0 001.4-1.4V8a1.4 1.4 0 00-2.8 0v.2H4V7a2 2 0 012-2h1.2V2.8a1.4 1.4 0 012.8 0V4z" stroke-linejoin="round"/>',
  gears: '<circle cx="12" cy="12" r="2.8"/><path d="M12 3v2.2M12 18.8V21M4.9 6.1l1.6 1.6M17.5 16.3l1.6 1.6M3 12h2.2M18.8 12H21M4.9 17.9l1.6-1.6M17.5 7.7l1.6-1.6"/>',
  server: '<rect x="3" y="3" width="18" height="7" rx="1.5"/><rect x="3" y="14" width="18" height="7" rx="1.5"/><line x1="6.5" y1="6.5" x2="6.5" y2="6.5"/><line x1="6.5" y1="17.5" x2="6.5" y2="17.5"/>',
  "layer-group": '<polygon points="12 3 21 8 12 13 3 8"/><polyline points="3 13 12 18 21 13"/><polyline points="3 18 12 23 21 18"/>',
  key: '<circle cx="7.5" cy="15.5" r="4.2"/><line x1="10.6" y1="12.4" x2="21" y2="2"/><line x1="16" y1="7" x2="19" y2="10"/><line x1="13" y1="10" x2="15" y2="12"/>',
  "file-lines": '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><polyline points="14 3 14 8 19 8"/><line x1="8.5" y1="13" x2="15.5" y2="13"/><line x1="8.5" y1="17" x2="15.5" y2="17"/>',
  "code-branch": '<line x1="6" y1="4" x2="6" y2="14"/><circle cx="18" cy="6" r="2.6"/><circle cx="6" cy="18" r="2.6"/><path d="M18 8.6a8.4 8.4 0 01-8.4 8.4"/>',
  vial: '<path d="M9 2.5v6.7l-5 8.6a1.8 1.8 0 001.6 2.7h12.8a1.8 1.8 0 001.6-2.7l-5-8.6V2.5"/><line x1="8" y1="2.5" x2="16" y2="2.5"/><line x1="6.6" y1="14.5" x2="17.4" y2="14.5"/>',
  "wand-magic-sparkles": '<line x1="4" y1="20" x2="15" y2="9"/><path d="M13 5l.7 1.8L15.5 7.5l-1.8.7L13 10l-.7-1.8L10.5 7.5l1.8-.7z"/><path d="M19 3l.5 1.4L21 5l-1.5.6L19 7l-.5-1.4L17 5l1.5-.6z"/><path d="M19 13l.5 1.4 1.5.6-1.5.6-.5 1.4-.5-1.4L17 15l1.5-.6z"/>',
  certificate: '<circle cx="12" cy="8.5" r="5.5"/><polyline points="9 13.5 7.2 20.5 12 17.8 16.8 20.5 15 13.5"/>',
  "graduation-cap": '<path d="M2 9.5L12 5l10 4.5-10 4.5z"/><path d="M6 11.8v4.6c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6v-4.6"/><line x1="21" y1="9.5" x2="21" y2="15.5"/>',
  envelope: '<rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3.5 6.5 12 13 20.5 6.5"/>',
  phone: '<path d="M21 16.4v2.6a1.9 1.9 0 01-2.1 1.9 18.6 18.6 0 01-8.1-2.9 18.3 18.3 0 01-5.7-5.7A18.6 18.6 0 012.2 4.1 1.9 1.9 0 014.1 2h2.6a1.9 1.9 0 011.9 1.6c.1.9.4 1.8.7 2.6a1.9 1.9 0 01-.4 2L7.9 9.3a15 15 0 005.7 5.7l1.1-1.1a1.9 1.9 0 012-.4c.8.3 1.7.6 2.6.7A1.9 1.9 0 0121 16.4z"/>',
  video: '<rect x="1.5" y="5.5" width="14" height="13" rx="2"/><path d="M22.5 8l-7 4 7 4z"/>',
  headset: '<path d="M4 14v-2a8 8 0 0116 0v2"/><rect x="2.5" y="14" width="4" height="6.5" rx="1.3"/><rect x="17.5" y="14" width="4" height="6.5" rx="1.3"/>',
  cubes: '<rect x="3" y="10" width="7.5" height="7.5" rx="1"/><rect x="13.5" y="10" width="7.5" height="7.5" rx="1"/><rect x="8.3" y="3" width="7.5" height="7.5" rx="1"/>',
  briefcase: '<rect x="2" y="7.5" width="20" height="13" rx="2"/><path d="M16 7.5V5.3a2 2 0 00-2-2h-4a2 2 0 00-2 2v2.2"/><line x1="2" y1="13" x2="22" y2="13"/>',
  "heart-circle-check": '<path d="M12.8 19.4L12 20l-.8-.6C6.8 16.2 4 13.4 4 10a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 2.2-1.2 4.2-3 6"/><polyline points="15 13 17 15 21 10.5"/>',
};

function iconSvg(name, extraClass) {
  const inner = ICONS[name];
  if (!inner) return "";
  const cls = "icon-svg" + (extraClass ? ` ${extraClass}` : "");
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach(el => {
    const name = el.getAttribute("data-icon");
    if (ICONS[name] && !el.querySelector("svg")) {
      el.innerHTML = iconSvg(name);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hydrateIcons();


  /* ============================================================
     DATA — straight from the resume
     ============================================================ */

  const SKILLS = [
    {
      id: "backend", name: "Backend", icon: "server", size: 2,
      tags: ["C#", ".NET 8", ".NET Core", "ASP.NET Core", "ASP.NET MVC", "Web API", "REST APIs", "Microservices", "Dependency Injection", "Middleware"]
    },
    {
      id: "frontend", name: "Frontend", icon: "angular", size: 2,
      tags: ["Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design", "Form Validation"]
    },
    {
      id: "database", name: "Database", icon: "database", size: 1,
      tags: ["MS SQL Server", "Stored Procedures", "Indexing", "Query Optimization", "Entity Framework Core", "LINQ"]
    },
    {
      id: "cloud", name: "Cloud", icon: "microsoft", size: 1,
      tags: ["Microsoft Azure", "Azure App Services", "Azure SQL", "Azure Storage", "Azure AD"]
    },
    {
      id: "devops", name: "DevOps", icon: "infinity", size: 1,
      tags: ["Azure DevOps", "GitHub Actions", "YAML Pipelines", "CI/CD", "Git", "Branching Strategies", "Branch Protection", "PR Validation Gates", "TFS"]
    },
    {
      id: "architecture", name: "Architecture", icon: "diagram-project", size: 1,
      tags: ["Microservices", "SOLID Principles", "Design Patterns", "API Versioning", "HLD", "LLD"]
    },
    {
      id: "testing", name: "Testing", icon: "vial", size: 1,
      tags: ["xUnit", "BDD", "Reqnroll", "Unit Testing", "End-to-End Automation"]
    },
    {
      id: "security", name: "Security & Logging", icon: "shield-halved", size: 1,
      tags: ["JWT Authentication", "Azure AD", "Role-Based Authorization", "Serilog", "Exception Handling"]
    },
    {
      id: "ai", name: "AI / GenAI", icon: "sparkles", size: 1,
      tags: ["GitHub Copilot", "Cursor", "Gemini", "Claude (Anthropic)", "Generative AI", "Agentic AI", "LLM", "Skills / Plugins"]
    },
    {
      id: "additional", name: "Additional Exposure", icon: "layer-group", size: 1,
      tags: ["CQRS", "MediatR", "gRPC", "Azure Service Bus", "Cosmos DB", "SignalR"]
    },
  ];

  const EXPERIENCE = [
    {
      id: "tcs",
      featured: true,
      company: "Tata Consultancy Services (TCS)",
      client: "Client: Microsoft",
      role: "Senior .NET Developer",
      dates: "Sep 2024 – Present",
      project: "ACD – Dynamics 365 Omnichannel",
      responsibilities: [
        "Develop and enhance backend services and integrations for Microsoft's Dynamics 365 Omnichannel (ACD) platform across multiple GEOs — C#, .NET / .NET Core, ASP.NET Core Web API, Angular frontend components and SQL Server-backed data layers.",
        "Analyze and fix critical defects and severity-based ICM incidents, delivering code changes and coordinating deployments across global environments.",
        "Support BDD framework migration efforts, refactoring automated test suites to align with platform upgrades.",
        "Collaborate with global engineering teams in an Agile/Scrum setup to plan and execute deployment rollouts across multiple GEOs."
      ],
      stack: [".NET / .NET Core", "C#", "ASP.NET Core Web API", "Angular", "SQL Server"],
      automation: [
        "Build and maintain CI/CD pipelines using GitHub Actions and Azure DevOps, leveraging GitHub Copilot to accelerate workflow authoring and code reviews.",
        "Configure and enforce branch protection rules and pull request validation gates using structured Git branching/merging strategies."
      ],
      ai: [
        "Explored GenAI/Agentic AI concepts by connecting LLMs with custom skills and plugins to build three automation agents — Atlas Agent (bug detection and root-cause tracing), Self-Heal Agent (proposing and applying fixes), and Tars Agent (reviewing, commenting on, and approving/requesting changes on pull requests).",
        "Used Azure integrations to orchestrate agent workflows, and implemented a markdown-based context file (copilot.md) to persist memory/state across agent runs.",
        "Works day-to-day with multiple AI coding assistants — GitHub Copilot, Cursor, Gemini, and Anthropic's Claude — across writing, reviewing, and debugging code."
      ]
    },
    {
      id: "shell",
      featured: false,
      company: "Shell Info Technologies",
      client: "",
      role: "Software Engineer",
      dates: "Mar 2024 – Aug 2024",
      project: "HR Benefits Management System",
      responsibilities: [
        "Supported the HR Benefits module enabling employees to view, select, and manage benefit plans.",
        "Updated and maintained NuGet package dependencies across the codebase to keep the application secure and current.",
        "Monitored and handled S360 production alerts, ensuring timely acknowledgement and resolution of application issues."
      ],
      stack: [".NET", "NuGet", "Production Monitoring"],
      automation: [],
      ai: []
    },
    {
      id: "amplelogic",
      featured: false,
      company: "AmpleLogic / VSS Software Services Pvt Ltd",
      client: "",
      role: "Senior Software Engineer",
      dates: "Sep 2019 – Feb 2024",
      project: "Multiple enterprise platforms",
      responsibilities: [],
      stack: [],
      automation: [],
      ai: [],
      subProjects: [
        {
          name: "LowCode v3.0", dates: "Oct 2020 – Feb 2024",
          points: [
            "Built full stack features end-to-end: designed RESTful APIs with API Versioning using ASP.NET Core on the backend and delivered corresponding Angular UI components on the frontend, within a Microservices Architecture.",
            "Implemented Dependency Injection, Middleware, JWT / Azure AD Authentication, Serilog logging, and centralized Exception Handling.",
            "Configured Azure CI/CD pipelines and integrated the BDD automation framework into the release process."
          ]
        },
        {
          name: "ATWORK", dates: "Mar 2022 – Mar 2023",
          points: [
            "Developed a full stack employee management system using ASP.NET MVC and Angular, backed by SQL Server for data persistence.",
            "Implemented reporting modules, LINQ-based data retrieval, application logging, and performance optimization."
          ]
        },
        {
          name: "e-LMS (Enterprise Learning Management System)", dates: "Sep 2019 – Sep 2020",
          points: [
            "Developed an enterprise Learning Management System with configurable approval workflows, covering both backend logic and frontend UI.",
            "Built frontend validations, database design, and report generation using ASP.NET MVC and SQL Server."
          ]
        }
      ]
    }
  ];

  const PROJECTS = [
    {
      id: "d365",
      featured: true,
      name: "Dynamics 365 Omnichannel",
      client: "Tata Consultancy Services — Client: Microsoft",
      tag: "Microsoft Client",
      tag2: "Enterprise Platform",
      icon: "headset",
      desc: "Backend services and integrations for Microsoft's Dynamics 365 Omnichannel (ACD) platform across multiple GEOs, spanning C#/.NET Core services, Angular components, and SQL Server data layers.",
      stack: [".NET", "C#", "ASP.NET Core", "Angular", "SQL Server", "Azure", "Azure DevOps", "GitHub Actions", "BDD", "GenAI"],
      overview: "The ACD platform is Microsoft's Dynamics 365 Omnichannel product, delivered globally across multiple GEOs. My work sits in the backend services and integration layer, alongside supporting Angular frontend components.",
      role: "Senior .NET Developer, delivering backend and integration work within a global engineering team using Agile/Scrum.",
      responsibilities: [
        "Develop and enhance backend services and integrations across multiple GEOs.",
        "Analyze and fix critical defects and severity-based ICM incidents, coordinating deployments across global environments.",
        "Support BDD framework migration, refactoring automated test suites to match platform upgrades."
      ],
      architecture: "C#/.NET Core and ASP.NET Core Web API services with Angular frontend components, backed by SQL Server.",
      challenges: "Diagnosing severity-based ICM incidents across multiple GEOs and keeping an existing BDD automation suite aligned through platform upgrades.",
      solutions: "Root-caused and resolved critical defects while coordinating rollout across environments; migrated automated test suites in step with the platform's evolving BDD framework.",
      contributions: "Explored GenAI/Agentic AI by connecting LLMs with custom skills/plugins to build three agents: Atlas (traces defects to the relevant service/module), Self-Heal (proposes and applies fixes), and Tars (reviews, comments on, and approves/requests changes on PRs) — orchestrated via Azure with state persisted in a markdown context file. Also works day-to-day with GitHub Copilot, Cursor, Gemini, and Anthropic's Claude.",
      devops: "CI/CD pipelines on GitHub Actions and Azure DevOps, accelerated with GitHub Copilot; branch protection rules and PR validation gates enforced through structured Git branching strategies."
    },
    {
      id: "lowcode",
      featured: false,
      name: "LowCode v3.0",
      client: "AmpleLogic / VSS Software Services",
      tag: "Platform",
      icon: "cubes",
      desc: "End-to-end features on a low-code platform — RESTful, versioned APIs on ASP.NET Core paired with Angular UI, inside a microservices architecture.",
      stack: ["ASP.NET Core", "Angular", "Microservices", "JWT / Azure AD", "Serilog", "Azure CI/CD", "BDD"],
      overview: "A low-code platform product built and evolved over three and a half years, spanning backend APIs and the Angular frontend that consumes them.",
      role: "Senior Software Engineer, building full-stack features end-to-end.",
      responsibilities: [
        "Design RESTful APIs with API Versioning on ASP.NET Core.",
        "Deliver corresponding Angular UI components within a Microservices Architecture.",
        "Configure Azure CI/CD pipelines and integrate the BDD automation framework into releases."
      ],
      architecture: "Microservices architecture with Dependency Injection and Middleware in the API layer.",
      challenges: "Keeping authentication, logging and error handling consistent across a growing set of services.",
      solutions: "Standardized JWT / Azure AD authentication, Serilog logging, and centralized exception handling across the platform's services.",
      contributions: "Owned features end-to-end from API design through to the Angular UI that surfaces them.",
      devops: "Azure CI/CD pipelines with BDD automation integrated into the release process."
    },
    {
      id: "atwork",
      featured: false,
      name: "ATWORK",
      client: "AmpleLogic / VSS Software Services",
      tag: "Employee Management",
      icon: "briefcase",
      desc: "A full stack employee management system built with ASP.NET MVC and Angular, backed by SQL Server.",
      stack: ["ASP.NET MVC", "Angular", "SQL Server", "LINQ"],
      overview: "An employee management system covering day-to-day HR-facing workflows, built across a full year-long engagement.",
      role: "Senior Software Engineer, developing the full stack application.",
      responsibilities: [
        "Build the ASP.NET MVC backend and Angular frontend.",
        "Implement reporting modules and LINQ-based data retrieval.",
        "Add application logging and tune performance."
      ],
      architecture: "ASP.NET MVC backend with SQL Server persistence and an Angular frontend.",
      challenges: "Delivering responsive reporting over growing SQL Server datasets.",
      solutions: "LINQ-based data retrieval paired with performance optimization work to keep reporting responsive.",
      contributions: "Delivered reporting modules end-to-end alongside the core employee management workflows.",
      devops: "Application logging in place to support ongoing performance monitoring."
    },
    {
      id: "elms",
      featured: false,
      name: "e-LMS",
      client: "AmpleLogic / VSS Software Services",
      tag: "Learning Management",
      icon: "graduation-cap",
      desc: "An enterprise Learning Management System with configurable approval workflows, spanning backend logic and frontend UI.",
      stack: ["ASP.NET MVC", "SQL Server"],
      overview: "An enterprise Learning Management System (e-LMS) built with configurable approval workflows for course/content management.",
      role: "Senior Software Engineer, covering both backend logic and frontend UI.",
      responsibilities: [
        "Build configurable approval workflows.",
        "Implement frontend validations.",
        "Handle database design and report generation."
      ],
      architecture: "ASP.NET MVC application backed by SQL Server.",
      challenges: "Modeling approval workflows that needed to stay configurable rather than hard-coded.",
      solutions: "Database design that kept workflow steps configurable, paired with frontend validation to guide users through them.",
      contributions: "Delivered both the backend workflow logic and the frontend UI/validation layer.",
      devops: "—"
    },
    {
      id: "hrbenefits",
      featured: false,
      name: "HR Benefits Management System",
      client: "Shell Info Technologies",
      tag: "HR Platform",
      icon: "heart-circle-check",
      desc: "Supported the HR Benefits module enabling employees to view, select and manage benefit plans.",
      stack: [".NET", "NuGet", "Production Monitoring"],
      overview: "An HR Benefits module within a larger HR platform, letting employees view, select, and manage their benefit plans.",
      role: "Software Engineer, supporting the benefits module.",
      responsibilities: [
        "Support the HR Benefits module for viewing, selecting and managing benefit plans.",
        "Update and maintain NuGet package dependencies to keep the application secure and current.",
        "Monitor and handle S360 production alerts, ensuring timely acknowledgement and resolution."
      ],
      architecture: "A .NET application with dependency management via NuGet.",
      challenges: "Keeping a live production module secure and stable while dependencies evolved.",
      solutions: "Regular NuGet dependency updates paired with active monitoring of S360 production alerts.",
      contributions: "Maintained application health through timely alert response and dependency upkeep.",
      devops: "Production alert monitoring via S360."
    }
  ];

  /* ============================================================
     RENDER: SKILLS
     ============================================================ */
  const skillsGrid = document.getElementById("skillsGrid");
  skillsGrid.innerHTML = SKILLS.map(s => `
    <div class="skill-card ${s.size === 1 ? 'span-1' : ''}" data-skill="${s.id}">
      <div class="skill-card-head">
        <div class="skill-card-title">
          <i class="icon" data-icon="${s.icon}"></i>
          <span>${s.name}</span>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <span class="skill-card-count">${s.tags.length}</span>
          <i class="icon skill-chevron" data-icon="chevron-down"></i>
        </div>
      </div>
      <div class="skill-card-body">
        <div class="skill-tags">
          ${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
  hydrateIcons(skillsGrid);

  skillsGrid.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("click", () => {
      const wasOpen = card.classList.contains("is-open");
      skillsGrid.querySelectorAll(".skill-card").forEach(c => {
        c.classList.remove("is-open");
        c.querySelector(".skill-card-body").style.maxHeight = null;
      });
      if (!wasOpen) {
        card.classList.add("is-open");
        const body = card.querySelector(".skill-card-body");
        body.style.maxHeight = body.scrollHeight + 40 + "px";
      }
    });
  });

  /* ============================================================
     RENDER: EXPERIENCE TIMELINE
     ============================================================ */
  const timeline = document.getElementById("timeline");

  function renderBlock(title, items) {
    if (!items || !items.length) return "";
    return `<div class="tl-block"><h4>${title}</h4><ul>${items.map(i => `<li>${i}</li>`).join("")}</ul></div>`;
  }

  timeline.innerHTML = EXPERIENCE.map(exp => `
    <div class="timeline-item ${exp.featured ? "is-featured" : ""}" data-exp="${exp.id}">
      <button class="timeline-card" aria-expanded="false">
        <div class="tl-head">
          <div>
            <span class="tl-dates">${exp.dates}</span>
            <h3 class="tl-role">${exp.role}</h3>
            <p class="tl-company">${exp.company}${exp.client ? " — " + exp.client : ""}</p>
            <span class="tl-project">${exp.project}</span>
          </div>
          <i class="icon tl-chevron" data-icon="chevron-down"></i>
        </div>
      </button>
      <div class="tl-body">
        <div class="tl-body-inner">
          ${renderBlock("Responsibilities", exp.responsibilities)}
          ${exp.stack && exp.stack.length ? `<div class="tl-block"><h4>Technology Stack</h4><div class="tl-stack">${exp.stack.map(t => `<span class="skill-tag">${t}</span>`).join("")}</div></div>` : ""}
          ${renderBlock("CI/CD &amp; Automation", exp.automation)}
          ${renderBlock("AI / GenAI", exp.ai)}
          ${exp.subProjects ? `
            <div class="tl-block">
              <h4>Projects</h4>
              <div class="sub-projects">
                ${exp.subProjects.map((sp, i) => `
                  <div class="sub-project" data-sub="${exp.id}-${i}">
                    <button class="sub-project-head" aria-expanded="false">
                      <div>
                        <h4>${sp.name}</h4>
                        <span class="sub-project-dates">${sp.dates}</span>
                      </div>
                      <i class="icon sp-chevron" data-icon="chevron-down"></i>
                    </button>
                    <div class="sub-project-body">
                      <div class="sub-project-body-inner">
                        <ul>${sp.points.map(p => `<li>${p}</li>`).join("")}</ul>
                      </div>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ""}
        </div>
      </div>
    </div>
  `).join("");
  hydrateIcons(timeline);

  timeline.querySelectorAll(".timeline-item").forEach(item => {
    const card = item.querySelector(".timeline-card");
    const body = item.querySelector(".tl-body");
    card.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open", !isOpen);
      card.setAttribute("aria-expanded", String(!isOpen));
      body.style.maxHeight = !isOpen ? body.scrollHeight + "px" : null;
    });
  });

  timeline.querySelectorAll(".sub-project").forEach(sp => {
    const head = sp.querySelector(".sub-project-head");
    const body = sp.querySelector(".sub-project-body");
    head.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = sp.classList.contains("is-open");
      sp.classList.toggle("is-open", !isOpen);
      head.setAttribute("aria-expanded", String(!isOpen));
      body.style.maxHeight = !isOpen ? body.scrollHeight + "px" : null;
      // re-measure parent timeline body since it grew
      const tlBody = sp.closest(".tl-body");
      if (tlBody && tlBody.style.maxHeight) {
        setTimeout(() => { tlBody.style.maxHeight = tlBody.scrollHeight + "px"; }, 60);
      }
    });
  });

  /* ============================================================
     RENDER: PROJECTS
     ============================================================ */
  const featured = PROJECTS.find(p => p.featured);
  const featuredEl = document.getElementById("featuredProject");
  featuredEl.innerHTML = `
    <div class="pf-copy">
      <div class="pf-tags">
        <span class="pf-tag">${featured.tag}</span>
        <span class="pf-tag">${featured.tag2}</span>
      </div>
      <h3 class="pf-title">${featured.name}</h3>
      <p class="pf-desc">${featured.desc}</p>
      <div class="pf-stack">${featured.stack.map(t => `<span class="skill-tag">${t}</span>`).join("")}</div>
      <button class="btn btn-primary" data-open-project="${featured.id}">Explore Case Study <i class="icon" data-icon="arrow-right"></i></button>
    </div>
    <div class="pf-visual"><i class="icon" data-icon="${featured.icon}"></i></div>
  `;
  hydrateIcons(featuredEl);

  const projectGrid = document.getElementById("projectGrid");
  const rest = PROJECTS.filter(p => !p.featured);
  projectGrid.innerHTML = rest.map(p => `
    <div class="project-card reveal">
      <div class="project-card-icon"><i class="icon" data-icon="${p.icon}"></i></div>
      <h3>${p.name}</h3>
      <p class="pc-client">${p.client}</p>
      <p class="pc-desc">${p.desc}</p>
      <div class="project-card-stack">${p.stack.map(t => `<span>${t}</span>`).join("")}</div>
      <button class="case-study-btn" data-open-project="${p.id}">View Case Study <i class="icon" data-icon="arrow-right"></i></button>
    </div>
  `).join("");
  hydrateIcons(projectGrid);

  /* ============================================================
     PROJECT MODAL
     ============================================================ */
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");
  let lastFocused = null;

  function openModal(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;
    modalContent.innerHTML = `
      <div class="modal-eyebrow">
        <span class="pf-tag">${p.tag}</span>
        ${p.tag2 ? `<span class="pf-tag">${p.tag2}</span>` : ""}
      </div>
      <h3 class="modal-title" id="modalTitle">${p.name}</h3>
      <p class="modal-client">${p.client}</p>

      <div class="modal-section"><h4>Project Overview</h4><p>${p.overview}</p></div>
      <div class="modal-section"><h4>My Role</h4><p>${p.role}</p></div>
      <div class="modal-section"><h4>Responsibilities</h4><ul>${p.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul></div>
      <div class="modal-section"><h4>Technology Stack</h4><div class="modal-stack">${p.stack.map(t => `<span class="skill-tag">${t}</span>`).join("")}</div></div>
      <div class="modal-section"><h4>Architecture</h4><p>${p.architecture}</p></div>
      <div class="modal-section"><h4>Challenges</h4><p>${p.challenges}</p></div>
      <div class="modal-section"><h4>Solutions</h4><p>${p.solutions}</p></div>
      <div class="modal-section"><h4>Engineering Contributions</h4><p>${p.contributions}</p></div>
      ${p.devops && p.devops !== "—" ? `<div class="modal-section"><h4>DevOps / Automation</h4><p>${p.devops}</p></div>` : ""}
    `;
    lastFocused = document.activeElement;
    modalBackdrop.classList.add("is-open");
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    modalBackdrop.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-project]");
    if (trigger) openModal(trigger.getAttribute("data-open-project"));
  });
  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => { if (e.target === modalBackdrop) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("is-open")) closeModal();
  });

  /* ============================================================
     NAVIGATION: scroll shadow, active link, mobile menu, back-to-top
     ============================================================ */
  const nav = document.getElementById("nav");
  const backToTop = document.getElementById("backToTop");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    backToTop.classList.toggle("is-visible", y > 700);

    let current = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (y >= top) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.getElementById("scrollCue").addEventListener("click", () => {
    document.getElementById("stats").scrollIntoView({ behavior: "smooth" });
  });

  const hamburger = document.getElementById("hamburger");
  const navLinksEl = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    const open = navLinksEl.classList.toggle("mobile-open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });
  navLinksEl.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinksEl.classList.remove("mobile-open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */
  const revealTargets = document.querySelectorAll(".reveal, .project-card, .stat-card, .skill-card, .agent-card, .devops-card, .credential-card");
  revealTargets.forEach(el => el.classList.add("reveal"));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealTargets.forEach(el => revealObserver.observe(el));

  /* ============================================================
     AGENT FLOW — subtle sequential highlight
     ============================================================ */
  const flowNodes = document.querySelectorAll(".flow-node");
  if (flowNodes.length) {
    let flowIndex = 0;
    const flowObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInterval(() => {
            flowNodes.forEach(n => n.classList.remove("is-active"));
            flowNodes[flowIndex % flowNodes.length].classList.add("is-active");
            flowIndex++;
          }, 1100);
          flowObserver.disconnect();
        }
      });
    }, { threshold: 0.4 });
    flowObserver.observe(document.querySelector(".agent-flow"));
  }

  /* ============================================================
     HERO CANVAS — subtle particle network (data/API communication)
     ============================================================ */
  const canvas = document.getElementById("heroCanvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let animId;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resizeCanvas() {
    const hero = document.querySelector(".hero");
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 140) {
          ctx.strokeStyle = `rgba(62, 147, 255, ${0.12 * (1 - d / 140)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = "rgba(124, 108, 246, 0.55)";
      ctx.beginPath();
      ctx.arc(particles[i].x, particles[i].y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
    animId = requestAnimationFrame(drawParticles);
  }

  if (!reducedMotion) {
    resizeCanvas();
    drawParticles();
    window.addEventListener("resize", () => { resizeCanvas(); });
  }

});
