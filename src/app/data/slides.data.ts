import { Slide } from '../models/slide.model';

// ============================================================
// SLIDES — Edit this file to change presentation content.
// ============================================================

export const SLIDES: Slide[] = [
  {
    id: 1,
    type: 'title',
    eyebrow: 'Global Azure 2026',
    title: 'From Cloud to Agents',
    subtitle: 'Building AI-Centric Systems on Azure',
    note: 'Welcome everyone. Today we trace a path from cloud-native platform engineering to AI agents, Azure Local Foundry, and the new avatar interface. Over the next 30 minutes, I want you to see how Azure lets developers keep control while building systems that reason, act, and stay compliant. This session is practical, architectural, and designed for people who build the systems behind the experiences.'
  },

  // --- Keynote recap (session 1 of the event) ---
  {
    id: 2,
    type: 'two-column',
    eyebrow: 'Keynote · Session 1',
    title: 'Innovation Without Compromise',
    subtitle: 'AI and Sovereign Cloud with Azure',
    left: {
      title: 'The tension',
      accent: 'purple',
      bullets: [
        { text: 'Generative AI + hyperscale cloud move at unprecedented speed' },
        { text: 'Organisations must innovate without losing control' },
        { text: 'Trust, residency and compliance are non-negotiable' },
        { text: 'Global capability vs. local requirements' }
      ]
    },
    right: {
      title: 'Azure\'s answer',
      accent: 'blue',
      bullets: [
        { text: 'AI-first cloud platform — innovation by default' },
        { text: 'Sovereign principles — security, transparency, compliance' },
        { text: 'Align global innovation with local sovereignty' },
        { text: 'Responsible transformation — preserve trust + data autonomy' }
      ]
    },
    note: 'This slide sets the stage. The keynote says innovation is moving faster than ever, but trust, sovereignty and compliance cannot be afterthoughts. Azure answers with a cloud that is both AI-first and governance-first, so teams can innovate while meeting policy demands. Keep this framing in mind as we move through agents, local infrastructure and semantic data.'
  },

  // --- What it means for developers & engineering ---
  {
    id: 3,
    type: 'two-column',
    eyebrow: 'Translation',
    title: 'What this means for developers & engineering',
    subtitle: 'From keynote principles to architectural decisions',
    left: {
      title: 'For developers',
      accent: 'blue',
      bullets: [
        { text: 'Build with AI primitives — models, agents, tools, memory' },
        { text: 'Treat data residency as a first-class API concern' },
        { text: 'Use managed identity for every model and tool call' },
        { text: 'Ship faster — but with traceability built in' }
      ]
    },
    right: {
      title: 'For engineering teams',
      accent: 'teal',
      bullets: [
        { text: 'Design for sovereignty: regions, keys, isolation by default' },
        { text: 'Observability + content safety on every run, not as an add-on' },
        { text: 'Multi-region, multi-jurisdiction architectures from day one' },
        { text: 'Governance, lineage and audit baked into the platform' }
      ]
    },
    note: 'This is the developer translation of the keynote. On one side, developers must build with AI primitives — models, agents, tools and memory — while treating data residency and identity as first-class APIs. On the other side, engineering teams need observability, multi-region design and auditability baked in from day one. The architecture we are describing keeps speed and control together.'
  },

  // ============================================================
  // SESSION 2 RECAP — Microsoft Agent Framework
  // "The Future of AI: agents that reason, plan, and act"
  // ============================================================

  {
    id: 4,
    type: 'section',
    eyebrow: 'Keynote · Session 2',
    title: 'The Future of AI is Agentic',
    subtitle: 'Microsoft Agent Framework — systems that reason, plan, and act',
    note: 'This is the second part of our story: the Microsoft Agent Framework. We are moving from what AI can do conceptually to how it actually becomes a system that reasons, plans and acts. Think of this as the runtime layer where your intelligence meets your business processes.'
  },

  {
    id: 5,
    type: 'architecture',
    eyebrow: 'Anatomy',
    title: 'Inside an Agent — primitives',
    layers: [
      {
        label: 'Inputs',
        detail: 'User intent, system instructions, conversation history, tool results, files, signals from other agents.',
        accent: 'purple'
      },
      {
        label: 'Capabilities',
        detail: 'Reasoning model · Planning loop · Tool calling · Memory (short + long term) · Guardrails & policies.',
        accent: 'blue'
      },
      {
        label: 'Outputs',
        detail: 'Decisions, actions executed via tools, structured responses, side effects in systems of record, handoffs.',
        accent: 'teal'
      }
    ],
    note: 'Inside an agent, there are three core primitives. Inputs are everything the agent observes: user requests, system instructions, context, tool results and history. Capabilities are the reasoning, planning, memory and guardrails that decide what to do. Outputs are the actions, decisions, or structured responses that actually move the system forward.'
  },

  {
    id: 6,
    type: 'two-column',
    eyebrow: 'Patterns',
    title: 'Design patterns & use cases',
    subtitle: 'Where agents earn their place',
    left: {
      title: 'Design patterns',
      accent: 'blue',
      bullets: [
        { text: 'Single agent + tools — focused task automation' },
        { text: 'Multi-agent orchestration — specialists collaborate' },
        { text: 'Human-in-the-loop — approval and oversight' },
        { text: 'Retrieval-augmented — grounded on enterprise data' },
        { text: 'Reflection / critic — agents review their own work' }
      ]
    },
    right: {
      title: 'Use cases',
      accent: 'teal',
      bullets: [
        { text: 'Customer service triage and resolution' },
        { text: 'Sales research, account planning, proposal drafting' },
        { text: 'IT operations — incident triage, runbook execution' },
        { text: 'Knowledge work — analysis, summarisation, reporting' },
        { text: 'Developer productivity — code, tests, reviews' }
      ]
    },
    note: 'Agents are not one-size-fits-all. Some are single-task automation with a tool, while others are orchestrators coordinating multiple specialists. Human-in-the-loop patterns keep oversight in place, and retrieval-augmented designs ground the agent in enterprise data. The right pattern depends on whether the problem needs a single voice, a team, or a critic.'
  },

  {
    id: 33,
    type: 'code',
    eyebrow: 'Hands-on — C#',
    title: 'Building agents with the Microsoft Agent Framework',
    description: 'One SDK, three patterns — pick a tab to see the code.',
    codeTabs: [
      {
        label: '1. Streaming chatbot',
        description: 'A single agent with a tool, streaming tokens straight to the caller.',
        codeBlocks: [
          {
            language: 'csharp',
            code: `using Azure.AI.OpenAI;
using Azure.Identity;
using Microsoft.Agents.AI;
using Microsoft.Extensions.AI;

// 1. Connect to Azure OpenAI / Foundry with Entra ID — no keys.
var chat = new AzureOpenAIClient(
        new Uri("https://my-foundry.openai.azure.com"),
        new DefaultAzureCredential())
    .GetChatClient("gpt-4o-mini")
    .AsIChatClient();

// 2. Give the agent a persona and a tool it can call.
[Description("Get the live weather for a city.")]
static string GetWeather(string city) => $"It's 21°C and sunny in {city}.";

AIAgent agent = new ChatClientAgent(chat, options: new()
{
    Name        = "support-bot",
    Instructions = "You are a friendly support assistant. Be concise.",
    ChatOptions  = new() { Tools = [AIFunctionFactory.Create(GetWeather)] }
});

// 3. Stream the answer token-by-token — same loop you'd pipe to SignalR/SSE.
AgentThread thread = agent.GetNewThread();

await foreach (var update in agent.RunStreamingAsync(
                   "What's the weather in Lisbon?", thread))
{
    Console.Write(update);   // each chunk arrives as it's generated
}`
          }
        ]
      },
      {
        label: '2. A2A — sequential workflow',
        description: 'Researcher → Writer → Editor. Output of one is the input of the next.',
        codeBlocks: [
          {
            language: 'csharp',
            code: `using Microsoft.Agents.AI;
using Microsoft.Agents.AI.Workflows;

// Three focused agents — each with a single responsibility.
AIAgent researcher = new ChatClientAgent(chat, new()
{
    Name = "researcher",
    Instructions = "Gather 3 key facts about the topic. Return a bullet list."
});

AIAgent writer = new ChatClientAgent(chat, new()
{
    Name = "writer",
    Instructions = "Turn the bullet list into a 120-word LinkedIn post."
});

AIAgent editor = new ChatClientAgent(chat, new()
{
    Name = "editor",
    Instructions = "Tighten the post. Return only the final text."
});

// Compose them into a sequential A2A workflow.
var workflow = AgentWorkflowBuilder
    .BuildSequential(researcher, writer, editor);

// Run it. Each step is observable, checkpointable and replayable.
var run = await InProcessExecution.RunAsync(
    workflow,
    "Microsoft Agent Framework GA at Global Azure 2026");

string finalPost = run.GetFinalOutput<string>();
Console.WriteLine(finalPost);`
          }
        ]
      },
      {
        label: '3. A2A — fan-out / fan-in',
        description: 'One coordinator dispatches work to many specialists in parallel, then an aggregator merges their results.',
        codeBlocks: [
          {
            language: 'csharp',
            code: `using Microsoft.Agents.AI;
using Microsoft.Agents.AI.Workflows;

// Three specialists run in parallel — fan-out.
AIAgent legal = new ChatClientAgent(chat, new()
{
    Name = "legal",
    Instructions = "Review the proposal for legal and compliance risks."
});

AIAgent finance = new ChatClientAgent(chat, new()
{
    Name = "finance",
    Instructions = "Review the proposal for cost and ROI implications."
});

AIAgent security = new ChatClientAgent(chat, new()
{
    Name = "security",
    Instructions = "Review the proposal for security and data-handling risks."
});

// One aggregator merges their findings — fan-in.
AIAgent aggregator = new ChatClientAgent(chat, new()
{
    Name = "aggregator",
    Instructions = "Merge the three reviews into a single go/no-go recommendation."
});

// Fan-out to all three, then fan-in to the aggregator.
var workflow = new WorkflowBuilder("proposal-review")
    .AddFanOut("review", from: "start", to: [legal, finance, security])
    .AddFanIn("decision", from: "review", to: aggregator)
    .Build();

var run = await InProcessExecution.RunAsync(
    workflow,
    "Adopt Azure Local for our 12 retail edge sites in 2026.");

Console.WriteLine(run.GetFinalOutput<string>());`
          }
        ]
      },
      {
        label: '4. MCP server as agent tools',
        description: 'Connect to a Model Context Protocol server and expose every tool it advertises to the agent — no per-tool wiring.',
        codeBlocks: [
          {
            language: 'csharp',
            code: `using Microsoft.Agents.AI;
using Microsoft.Extensions.AI;
using ModelContextProtocol.Client;

// 1. Connect to an MCP server (stdio, SSE or HTTP — here: a local stdio server).
await using IMcpClient github = await McpClientFactory.CreateAsync(
    new StdioClientTransport(new()
    {
        Name      = "github-mcp",
        Command   = "npx",
        Arguments = ["-y", "@modelcontextprotocol/server-github"],
        EnvironmentVariables = new()
        {
            ["GITHUB_PERSONAL_ACCESS_TOKEN"] = Environment.GetEnvironmentVariable("GH_PAT")!
        }
    }));

// 2. Pull every tool the server advertises and adapt it to AIFunction.
IList<McpClientTool> mcpTools = await github.ListToolsAsync();
IEnumerable<AIFunction> tools = mcpTools.Select(t => t.AsAIFunction());

// 3. Hand them to the agent — same shape as any other tool.
AIAgent agent = new ChatClientAgent(chat, options: new()
{
    Name        = "repo-assistant",
    Instructions = "You help engineers triage GitHub issues and PRs.",
    ChatOptions  = new() { Tools = [.. tools] }
});

var thread = agent.GetNewThread();

await foreach (var update in agent.RunStreamingAsync(
                   "List the 5 oldest open issues on Azure/azure-sdk-for-net.",
                   thread))
{
    Console.Write(update);
}`
          }
        ]
      }
    ],
    note: 'This code example shows how the same SDK becomes multiple agent patterns. First, a streaming chatbot sends tokens back as they are generated. Second, a sequential researcher → writer → editor workflow composes focused responsibilities. Third, a fan-out architecture runs specialists in parallel and merges their work. The message is that agent architecture is composition, not a new language.'
  },

  {
    id: 35,
    type: 'two-column',
    eyebrow: 'From code to endpoint',
    title: 'How do you ship and host this code?',
    subtitle: 'The Agent Framework is just a NuGet package — you choose the application model.',
    left: {
      title: 'Project templates you start from',
      accent: 'blue',
      bullets: [
        {
          text: 'Console app — fastest path, great for demos, batch jobs, CLIs and MCP stdio servers',
          sub: ['dotnet new console + Microsoft.Agents.AI']
        },
        {
          text: 'ASP.NET Core Web API / Minimal API — expose the agent over HTTP, SSE or SignalR',
          sub: ['dotnet new webapi — pair with the OpenAI-compatible chat endpoint pattern']
        },
        {
          text: 'Worker Service — long-running background agent, queue or event consumer',
          sub: ['dotnet new worker — Service Bus, Event Hubs, Storage Queues triggers']
        },
        {
          text: 'Azure Functions (isolated worker) — event-driven, scale-to-zero, pay-per-call',
          sub: ['HTTP, Service Bus, Cosmos, Event Grid, Timer triggers']
        },
        {
          text: 'Blazor / Web app — agent embedded in your UI, streaming over SignalR',
          sub: ['Same SDK on the server, Speech/Avatar SDKs on the client']
        },
        {
          text: 'Teams app / Bot Framework — agent surfaces inside Microsoft Teams',
          sub: ['Bot adapter wraps the same ChatClientAgent']
        },
        {
          text: 'MCP server — package the agent\'s tools so other agents can consume them',
          sub: ['stdio for local, HTTP/SSE for remote']
        }
      ]
    },
    right: {
      title: 'Where you deploy it',
      accent: 'purple',
      bullets: [
        {
          text: 'Azure App Service — easiest managed hosting for ASP.NET Core and Blazor',
          sub: ['Slots, autoscale, Easy Auth with Entra ID, App Insights out of the box']
        },
        {
          text: 'Azure Container Apps — serverless containers, scale-to-zero, KEDA-driven',
          sub: ['Best default for new agent workloads — Dapr, revisions, traffic split']
        },
        {
          text: 'Azure Kubernetes Service (AKS) — full control, GitOps, multi-tenant platforms',
          sub: ['Same workload runs on AKS enabled by Arc — cloud or Azure Local']
        },
        {
          text: 'Azure Functions — consumption, Flex Consumption or Premium plans',
          sub: ['Ideal for spiky, event-triggered or per-request agent invocations']
        },
        {
          text: 'Azure Foundry — host the agent as a managed Foundry agent (no infra to run)',
          sub: ['Versioning, evaluations, Content Safety, observability built in']
        },
        {
          text: 'Edge & on-prem — Arc-enabled AKS, IIS or Windows Service on Azure Local',
          sub: ['Same binaries; identity, policy and monitoring via Arc']
        },
        {
          text: 'Local — stdio MCP server, dev container, or `azd up` for the whole stack',
          sub: ['Same code path you ship to production']
        }
      ]
    },
    note: 'Once code exists, the question is how you surface it. The Agent Framework is a library, so the same logic can run as a console app, web API, worker service, Functions, Blazor, Teams app or an MCP server. Then choose the host that matches your SLA: App Service, Container Apps, AKS, Foundry, edge hardware or Azure Local. That separation gives you flexibility without changing your business logic.'
  },

  {
    id: 7,
    type: 'two-column',
    eyebrow: 'The toolbox',
    title: 'Build agents — for every audience',
    subtitle: 'Microsoft offers a full spectrum, from pro-code to no-code',
    left: {
      title: 'For developers (pro-code)',
      accent: 'blue',
      bullets: [
        { text: 'GitHub Copilot — AI pair-programmer in the IDE' },
        { text: 'Microsoft Agent Framework — orchestration in code' },
        { text: 'Microsoft Foundry — full agent runtime + tools + observability' },
        { text: 'Semantic Kernel & Agents SDK across .NET, Python, JS, Java' }
      ]
    },
    right: {
      title: 'For makers (low-code)',
      accent: 'purple',
      bullets: [
        { text: 'Microsoft Copilot Studio — visual agent builder' },
        { text: 'Connectors to 1,000+ systems out of the box' },
        { text: 'Topics, knowledge sources, actions — no code required' },
        { text: 'Same governance plane as pro-code agents' }
      ]
    },
    note: 'This slide shows the breadth of Microsoft tooling. Developers use GitHub Copilot, the Agent Framework and Foundry SDKs. Makers use Copilot Studio, connectors and visual prompt flows. The important point is that pro-code and low-code are not separate islands; they converge on the same runtime and governance fabric.'
  },

  {
    id: 36,
    type: 'section',
    eyebrow: 'Agent runtime',
    title: 'Microsoft Foundry',
    subtitle: 'From running an agent locally to deploying governed AI at scale',
    note: 'Now we shift from building agents to hosting and governing them. Microsoft Foundry is the runtime where agents are deployed, observed and managed. It is the place that makes agent workloads production-ready, with versioning, safety and telemetry all in one system.'
  },

  {
    id: 8,
    type: 'architecture',
    eyebrow: 'The big picture',
    title: 'Microsoft Foundry — AI Agent Ecosystem',
    revealFromBottom: true,
    layers: [
      {
        label: 'Channels & Surfaces',
        detail: 'Microsoft 365 Copilot · Teams · Web · Mobile · Custom apps · Other agents (A2A).',
        accent: 'purple'
      },
      {
        label: 'Agents',
        detail: 'Built with Copilot Studio (makers) or Agent Framework / Foundry SDK (developers). Versioned, observable, governed.',
        accent: 'blue'
      },
      {
        label: 'Knowledge & Tools',
        detail: 'Grounding on Microsoft Graph, Fabric, SharePoint, vector stores; actions via OpenAPI, Logic Apps, MCP, Functions.',
        accent: 'teal'
      },
      {
        label: 'Models',
        detail: 'OpenAI, Mistral, Meta, Phi and custom — multi-model catalog with routing and fine-tuning.',
        accent: 'blue'
      },
      {
        label: 'Trust, Identity & Governance',
        detail: 'Entra agent identities, content safety, evals, policies, audit and cost controls — applied to every run.',
        accent: 'purple'
      }
    ],
    note: 'Foundry is an ecosystem, not just a single service. Channels and surfaces like Copilot, Teams, web and custom apps live at the top, while agents are built and versioned below. Knowledge, tools and models ground them, and trust, identity and governance make them enterprise-ready. This is the platform that powers both Microsoft 365 and custom agent solutions.'
  },

  // ============================================================
  // FOUNDRY PROJECT AS CODE — versioning, IaC, CI/CD
  // ============================================================

  {
    id: 9,
    type: 'two-column',
    eyebrow: 'Project as code',
    title: 'A Foundry project is just Azure resources',
    subtitle: 'Anything you build in the portal has an ARM/Bicep equivalent',
    left: {
      title: 'Resource model',
      accent: 'blue',
      bullets: [
        { text: 'Microsoft.CognitiveServices/accounts (kind: AIServices) — the Foundry resource' },
        { text: 'Microsoft.CognitiveServices/accounts/projects — your Foundry project' },
        { text: 'Model deployments, connections, indexes — all child resources' },
        { text: 'Storage, Key Vault, Container Registry, App Insights, AI Search — dependencies' }
      ]
    },
    right: {
      title: 'Why this matters',
      accent: 'teal',
      bullets: [
        { text: 'Reproducible environments — dev / test / prod from one template' },
        { text: 'Reviewable in pull requests — diff before deploy' },
        { text: 'Secrets and identities managed by policy, not by hand' },
        { text: 'Same governance as the rest of your Azure estate' }
      ]
    },
    note: 'Foundry projects are still Azure resources. Everything you create in the portal can be expressed as ARM, Bicep, Terraform or REST. That means reproducible environments, reviewable pull requests and policy-driven governance. The important takeaway is that Infrastructure-as-Code is the standard for AI projects, not a nice-to-have.'
  },

  {
    id: 10,
    type: 'architecture',
    eyebrow: 'IaC layout',
    title: 'What a Foundry project looks like in a repo',
    layers: [
      {
        label: 'azure.yaml (azd)',
        detail: 'Top-level manifest used by Azure Developer CLI. Declares services, hooks and the infra entry point. `azd up` provisions and deploys.',
        accent: 'blue'
      },
      {
        label: 'infra/ — Bicep modules',
        detail: 'main.bicep wires Foundry account, project, model deployments, connections, identity, storage, monitoring. Parameterised per environment.',
        accent: 'teal'
      },
      {
        label: 'src/ — agent definition (code)',
        detail: 'Instructions, tool bindings and model choice live in code (Python / .NET / TS). Created or updated against the project endpoint at deploy time.',
        accent: 'purple'
      },
      {
        label: 'scripts/ — post-provision hooks',
        detail: 'Idempotent scripts that create/update the agent, upload knowledge, register tools. Run after Bicep, before traffic shift.',
        accent: 'blue'
      },
      {
        label: 'tests/ — evals + red-team',
        detail: 'Pytest suites + Azure AI Evaluations + AI Red Teaming Agent. Quality and safety gates wired into the pipeline.',
        accent: 'teal'
      }
    ],
    note: 'This repository layout demonstrates the project-as-code pattern. `azure.yaml` defines the azd entrypoint, `infra/` contains Bicep modules, `src/` contains agent definitions, `scripts/` runs post-provision automation, and `tests/` holds evals and red-team checks. It is a disciplined repo structure for AI engineering, not just another demo folder.'
  },

  {
    id: 11,
    type: 'two-column',
    eyebrow: 'CI/CD',
    title: 'From commit to a deployed agent',
    subtitle: 'Same DevOps discipline you already use — applied to AI',
    left: {
      title: 'Pipeline stages',
      accent: 'blue',
      bullets: [
        { text: 'Lint + unit tests on PR' },
        { text: 'Bicep what-if — review infra diff before merge' },
        { text: '`azd provision` — deploy infra with managed identity' },
        { text: '`azd deploy` — push app + (re)create the agent' },
        { text: 'Run evaluations + red-team scan as quality gates' },
        { text: 'Promote to next environment (dev → test → prod)' }
      ]
    },
    right: {
      title: 'Desired-state principles',
      accent: 'purple',
      bullets: [
        { text: 'Every change goes through Git — no portal click-ops in prod' },
        { text: 'Agent definition is versioned alongside the app code' },
        { text: 'Model versions and capacities are pinned in Bicep' },
        { text: 'Rollback = redeploy a previous commit' },
        { text: 'Drift detection via `azd provision --preview` or `what-if`' }
      ]
    },
    note: 'AI must flow through the same DevOps pipeline you already trust. PR validation, what-if analysis, azd provision, deploy, and then evaluation and red-team gates. Promote from dev to test to prod. Every change should be versioned, reviewed, and roll-backable through standard release practices.'
  },

  // ============================================================
  // AZURE LOCAL — extending the cloud to where data lives
  // ============================================================

  {
    id: 37,
    type: 'section',
    eyebrow: 'Edge & sovereign cloud',
    title: 'Azure Local',
    subtitle: 'Bring the Azure operating model to your hardware — on-premises or at the edge',
    note: 'Here we pivot to Azure Local — the cloud operating model on-premises or at the edge. This is where data residency, latency and resilience requirements become the primary drivers. We are not leaving the cloud; we are extending its control model to environments that cannot rely on a public-region round trip.'
  },

  {
    id: 12,
    type: 'two-column',
    eyebrow: 'Adaptive cloud',
    title: 'What is Azure Local — and why now?',
    subtitle: 'Microsoft\'s distributed infrastructure that extends Azure to your environment',
    left: {
      title: 'What it is',
      accent: 'blue',
      bullets: [
        { text: 'Azure capabilities running on customer-owned hardware' },
        { text: 'Azure Arc as the unifying control plane' },
        { text: 'Same portal, CLI, ARM/Bicep, Policy, Defender, Monitor' },
        { text: 'Validated hardware catalog from a broad partner ecosystem' },
        { text: 'Priced per physical core + standard Azure consumption' }
      ]
    },
    right: {
      title: 'Why it matters now',
      accent: 'purple',
      bullets: [
        { text: 'AI inferencing must happen where the data is generated' },
        { text: 'Sovereignty pressure — data residency is regulated, not optional' },
        { text: 'Latency-sensitive control systems can\'t round-trip to a region' },
        { text: 'Mission-critical workloads must survive network outages' },
        { text: 'A pragmatic on-ramp for teams still moving off on-premises' }
      ]
    },
    note: 'Azure Local is not a separate cloud. It is Azure capabilities running on customer-owned hardware, managed through Arc. The same portal, CLI, ARM templates, policy and monitoring experience applies, but the compute and data remain where the business needs them. This is the operating model that lets Azure bridge to on-premises and edge environments.'
  },

  {
    id: 13,
    type: 'two-column',
    eyebrow: 'Operating modes',
    title: 'Connected vs. Disconnected — and what syncs',
    subtitle: 'Two operational postures, one consistent control plane',
    left: {
      title: 'Connected mode',
      accent: 'blue',
      bullets: [
        { text: 'Full Azure Arc integration — managed from the portal' },
        { text: 'RBAC, Policy, Defender, Monitor, Update Manager apply continuously' },
        { text: 'Telemetry, billing meters and inventory stream to Azure' },
        { text: 'Cloud-side actions (deploy, patch, audit) reach the edge in near real-time' }
      ]
    },
    right: {
      title: 'Disconnected mode',
      accent: 'purple',
      bullets: [
        { text: 'Operates fully autonomously — no dependency on Azure connectivity' },
        { text: 'Local identity, local management, local update workflow' },
        { text: 'Periodic sync when a link is available — billing, inventory, logs, policy state' },
        { text: 'Designed for sovereign, classified, maritime and remote-site scenarios' }
      ]
    },
    note: 'Azure Local supports both connected and disconnected operation. Connected mode keeps the site managed from Azure with telemetry, policy and updates. Disconnected mode makes the site autonomous, with local identity, local management and buffered sync. The key design decision is whether the environment needs continuous cloud connectivity or can operate independently for periods of time.'
  },

  {
    id: 14,
    type: 'two-column',
    eyebrow: 'When it fits',
    title: 'Scenarios for DevOps & Infrastructure teams',
    subtitle: 'Where Azure Local genuinely changes the architecture',
    left: {
      title: 'Scenarios that fit',
      accent: 'teal',
      bullets: [
        { text: 'Edge — retail, manufacturing, energy, transit, healthcare' },
        { text: 'Geopolitical / sovereign — data must stay in jurisdiction' },
        { text: 'Latency-bound — control loops, quality assurance, trading floors' },
        { text: 'Resilience — sites that must keep running through WAN outages' },
        { text: 'Cloud adoption from on-premises — same tooling, gradual migration' }
      ]
    },
    right: {
      title: 'What changes for you',
      accent: 'blue',
      bullets: [
        { text: 'IaC reaches the edge — same Bicep/Terraform, Arc-enabled targets' },
        { text: 'CI/CD must handle intermittent connectivity and per-site rollouts' },
        { text: 'Observability becomes federated — local first, cloud second' },
        { text: 'Identity, secrets and certificates need a disconnected story' },
        { text: 'Capacity planning shifts from elastic to fixed — design for the box you have' }
      ]
    },
    note: 'This slide shows where Azure Local truly earns its place: regulated finance, healthcare, manufacturing, remote sites and government. It is not the default for every application. It is a deliberate extension of the cloud for workloads that need low latency, sovereignty or resilience close to the data.'
  },

  // ============================================================
  // AZURE LOCAL — practical view for developers & engineers
  // ============================================================

  {
    id: 15,
    type: 'two-column',
    eyebrow: 'Mental model',
    title: 'What Azure Local IS — and what it is NOT',
    subtitle: 'Azure = control plane. Your infra = data + compute plane.',
    left: {
      title: 'What it IS',
      accent: 'blue',
      bullets: [
        { text: 'Hybrid platform extending the Azure control plane to your hardware' },
        { text: 'Runs VMs, AKS clusters and containers on-prem or at the edge' },
        { text: 'Managed via Azure Arc + AKS enabled by Azure Arc' },
        { text: 'Centralized governance — Azure Policy, RBAC, Defender' },
        { text: 'Unified observability — Monitor, Log Analytics, alerts' },
        { text: 'Identity through Microsoft Entra ID' }
      ]
    },
    right: {
      title: 'What it is NOT',
      accent: 'purple',
      bullets: [
        { text: 'Not "Azure installed locally" — no App Service, no Cosmos DB PaaS' },
        { text: 'Not a replacement for your Kubernetes or virtualization stack' },
        { text: 'Not a way to escape owning infrastructure — racks still need hands' },
        { text: 'Not required for plain cloud-native apps that already live in Azure' },
        { text: 'Not a lift-and-shift shortcut — workloads still need design choices' }
      ]
    },
    note: 'This is the mental model: Azure Local is the control plane, your infrastructure is the data and compute plane. It is not Azure installed on your rack, and it is not a replacement for existing virtualization or Kubernetes stacks. Use it when the workload has a real reason to stay close to data, latency and compliance requirements.'
  },

  {
    id: 16,
    type: 'architecture',
    eyebrow: 'Architecture',
    title: 'The stack — Azure on top, your infra at the bottom',
    revealFromBottom: true,
    layers: [
      {
        label: 'Azure control plane (cloud)',
        detail: 'Portal, ARM/Bicep, Policy, RBAC, Monitor, Defender, Update Manager — single pane of glass.',
        accent: 'blue'
      },
      {
        label: 'Azure Arc — projection & identity bridge',
        detail: 'Projects local resources as first-class Azure resources; brokers Entra ID and tokens.',
        accent: 'blue'
      },
      {
        label: 'Arc-enabled services (managed by Azure)',
        detail: 'AKS enabled by Arc, Arc-enabled VMs, Arc-enabled SQL/PostgreSQL, GitOps (Flux), ML extensions.',
        accent: 'purple'
      },
      {
        label: 'Azure Local platform (on-prem)',
        detail: 'Hypervisor, software-defined storage and networking on validated hardware.',
        accent: 'teal'
      },
      {
        label: 'Your physical infrastructure',
        detail: 'Servers, switches, racks, power — owned, racked and patched by your team.',
        accent: 'teal'
      }
    ],
    note: 'This architecture is layered. Azure cloud provides the control plane, Arc is the projection and identity bridge, Arc-enabled services are the managed middle layer, Azure Local is the on-prem runtime, and your physical infrastructure is the base. The important point is that these are the same primitives you already run, now represented as managed Azure resources.'
  },

  {
    id: 17,
    type: 'two-column',
    eyebrow: 'Disconnected operation',
    title: 'How it keeps running offline',
    subtitle: 'When the WAN drops, the site does not',
    left: {
      title: 'What stays local',
      accent: 'teal',
      bullets: [
        { text: 'Hypervisor, storage and networking — fully autonomous on the cluster' },
        { text: 'Workloads — VMs, AKS pods, databases keep serving traffic' },
        { text: 'Local identity provider for break-glass and node-to-node auth' },
        { text: 'Local Arc agent caches policy, RBAC and config — no cloud round-trips' },
        { text: 'Local logs, metrics and alerts buffered on disk' },
        { text: 'GitOps reconciler keeps converging from the last-known manifests' }
      ]
    },
    right: {
      title: 'What changes vs. connected',
      accent: 'purple',
      bullets: [
        { text: 'No new Azure-side actions — portal changes queue until reconnect' },
        { text: 'Telemetry, billing meters and inventory buffer locally, replay on resync' },
        { text: 'Updates, images and Helm charts must be pre-staged in a local registry' },
        { text: 'Secrets rotation needs a local KMS or pre-provisioned bundle' },
        { text: 'Disconnected mode is a deployment posture — chosen at design time' }
      ]
    },
    note: 'This slide explains what happens when the WAN drops. In Azure Local, hypervisor, storage, workloads and local logs keep running. The local Arc agent caches policy and configuration. Disconnected operation is a posture you choose, not a failure mode, so design your updates and connectivity around it.'
  },

  {
    id: 18,
    type: 'two-column',
    eyebrow: 'Hybrid resources',
    title: 'Syncing resources across on-prem and Azure',
    subtitle: 'One resource model — VMs, clusters and data projected both ways',
    left: {
      title: 'How the projection works',
      accent: 'blue',
      bullets: [
        { text: 'Arc projects each local VM, cluster or DB as an Azure resource (ARM ID)' },
        { text: 'Azure Resource Manager is the source of truth for metadata, tags and policy' },
        { text: 'Local agents reconcile desired state — config, extensions, updates' },
        { text: 'GitOps (Flux) syncs Kubernetes workloads from one repo to many clusters' },
        { text: 'Azure Container Registry geo-replicates images to a local cache/registry' }
      ]
    },
    right: {
      title: 'What you can actually sync',
      accent: 'purple',
      bullets: [
        { text: 'VMs — Arc-enabled VMs get Azure extensions, Defender, Monitor, Update Manager' },
        { text: 'VM mobility — Azure Migrate / ASR for replication and failover both directions' },
        { text: 'AKS workloads — same manifests deploy to Azure AKS and Arc-enabled AKS' },
        { text: 'Data — SQL MI enabled by Arc, Azure Storage Mover, Azure File Sync' },
        { text: 'Secrets & config — Key Vault with local cache, App Configuration snapshots' },
        { text: 'Identity — Entra ID with offline token cache for disconnected windows' }
      ]
    },
    note: 'Resource projection is the magic of Arc. Local VMs, clusters and databases appear as Azure resources, with ARM metadata, policy and tags. Local agents reconcile desired state from Azure, and GitOps can deploy the same manifests to cloud and edge. This keeps the developer experience consistent across locations.'
  },

  {
    id: 19,
    type: 'two-column',
    eyebrow: 'Where it earns its place',
    title: 'Use cases, security posture & hybrid AI',
    subtitle: '"Move compute to data, not data to compute."',
    left: {
      title: 'Real-world scenarios',
      accent: 'purple',
      bullets: [
        { text: 'Banking & finance — fraud detection runs next to regulated data' },
        { text: 'Healthcare — patient data stays on-prem, AI inference at low latency' },
        { text: 'Manufacturing & IoT — factory keeps running when the WAN drops' },
        { text: 'Government & defense — air-gapped, full control, zero cloud dependency' },
        { text: 'Retail & transit — store/site survives outages, syncs when connected' }
      ]
    },
    right: {
      title: 'Security, compliance & hybrid AI',
      accent: 'teal',
      bullets: [
        { text: 'Data sovereignty — data never leaves the controlled environment' },
        { text: 'Centralized security — policies enforced from Azure, not by hand' },
        { text: 'Identity & access unified through Entra ID + Conditional Access' },
        { text: 'Network isolation — segmented, zero-trust ready by design' },
        { text: 'Hybrid AI — local SLMs near the data, Azure OpenAI when scale wins' }
      ]
    },
    note: 'This is where Azure Local adds real business value. It is about keeping regulated workloads, healthcare, manufacturing and retail close to the data while still enforcing centralized policy and security. Hybrid AI means local models for latency and sovereignty, and Azure OpenAI when scale or elasticity is the best fit.'
  },

  // ============================================================
  // AI AVATARS — the next interface, powered by Azure
  // ============================================================

  {
    id: 20,
    type: 'section',
    eyebrow: 'Next interface',
    title: 'Real-time AI Avatars on Azure',
    subtitle: 'From a model and a UI to a living, grounded, enterprise-ready presence.',
    note: 'Now we move to the new interface layer: AI Avatars. This is not just another chat experience. It is a real-time, grounded, enterprise-grade presence that listens, reasons and responds with voice and visuals. We are moving from typed prompts to interactive conversation.'
  },

  {
    id: 21,
    type: 'two-column',
    eyebrow: 'What it is',
    title: 'Beyond a chatbot — an interactive digital presence',
    subtitle: 'Voice, face and reasoning, stitched together in real time.',
    left: {
      title: 'What an AI Avatar actually is',
      accent: 'blue',
      bullets: [
        { text: 'A photorealistic (or stylised) character that listens, thinks and speaks live' },
        { text: 'Speech-to-text → reasoning model → text-to-speech → lip-synced video' },
        { text: 'Grounded on your business knowledge via RAG, not generic web data' },
        { text: 'Operates with safety, identity and observability built in' },
        { text: 'A UI on top of an agent — the same backend powers chat, voice and avatar' }
      ]
    },
    right: {
      title: 'Where it earns its place',
      accent: 'purple',
      bullets: [
        { text: 'Customer support — 24/7, multilingual, tone-controlled' },
        { text: 'Internal copilots — onboarding, HR, IT helpdesk' },
        { text: 'Branch & kiosk experiences — banking, retail, public services' },
        { text: 'Training & simulation — sales coaching, clinical role-play' },
        { text: 'Brand & marketing — interactive product guides and digital hosts' }
      ]
    },
    note: 'An AI Avatar is more than a chatbot. It is a digital presence that listens, reasons and speaks in real time, grounded in your business knowledge. This makes it ideal for customer support, internal copilots, kiosks, training and branded experiences. The avatar is the new interface on top of the agent backend.'
  },

  {
    id: 22,
    type: 'architecture',
    eyebrow: 'Azure building blocks',
    title: 'The services behind a real-time Avatar',
    layers: [
      {
        label: 'Frontend — web / mobile / kiosk',
        detail: 'WebRTC video, mic capture, Speech SDK, Avatar SDK rendering the talking head.',
        accent: 'blue'
      },
      {
        label: 'Azure AI Speech — STT, TTS & Avatar (real-time + batch synthesis)',
        detail: 'Streaming speech-to-text, neural TTS voices, prebuilt and custom avatars over WebRTC.',
        accent: 'purple'
      },
      {
        label: 'Azure AI Foundry — agent, prompt flow, tools, evaluations',
        detail: 'Hosts the agent, orchestrates tools, manages model deployments and safety.',
        accent: 'purple'
      },
      {
        label: 'Azure OpenAI / Foundry models — GPT, reasoning, embeddings',
        detail: 'The reasoning core — chosen per task, with content safety and guardrails.',
        accent: 'teal'
      },
      {
        label: 'Knowledge — Azure AI Search + Blob/Cosmos + Document Intelligence',
        detail: 'Vector + hybrid retrieval over your documents, indexed and chunked for RAG.',
        accent: 'teal'
      },
      {
        label: 'Platform — App Service / Container Apps, Entra ID, Key Vault, App Insights',
        detail: 'Hosting, identity, secrets and end-to-end telemetry — production-aligned from day one.',
        accent: 'blue'
      }
    ],
    note: 'The Avatar stack combines frontend capture, Azure Speech for STT/TTS and rendering, Foundry to host the agent and tools, models for reasoning, and knowledge services for grounding. The platform layer supplies identity, secrets and telemetry. This is a managed architecture, not a brittle integration sketch.'
  },

  {
    id: 23,
    type: 'two-column',
    eyebrow: 'Build surface',
    title: 'Where you actually build the Avatar',
    subtitle: 'Two main workbenches — pick by audience, combine by responsibility.',
    left: {
      title: 'Azure AI Foundry portal',
      accent: 'purple',
      bullets: [
        { text: 'Model catalog — pick GPT, reasoning, embeddings, vision' },
        { text: 'Agent designer — system prompt, tools, knowledge, actions' },
        { text: 'Prompt flow — visual orchestration of retrieval + reasoning + tools' },
        { text: 'Evaluations — groundedness, relevance, safety, regression suites' },
        { text: 'Content Safety — prompts, responses, jailbreak and PII filters' },
        { text: 'Avatar studio — choose voice, persona, prebuilt or custom face' }
      ]
    },
    right: {
      title: 'Code & SDKs',
      accent: 'blue',
      bullets: [
        { text: 'Speech SDK — STT, TTS and real-time Avatar over WebRTC (JS, .NET, Python)' },
        { text: 'Azure AI Foundry SDK / OpenAI SDK — call the agent from your backend' },
        { text: 'Microsoft Agent Framework — orchestration when one agent isn\'t enough' },
        { text: 'Bicep / azd templates — repeatable infra for the whole stack' },
        { text: 'GitHub Codespaces / VS Code — same loop locally and in the cloud' }
      ]
    },
    note: 'There are two main build surfaces for Avatars. Foundry portal is where designers, product owners and prompt engineers create the agent, connect knowledge and run evaluations. Developers build the backend, SDK integration and CI/CD that make it production-ready. Both surfaces contribute to the same project and the same runtime, so collaboration is key.'
  },

  {
    id: 24,
    type: 'architecture',
    eyebrow: 'Keeping it grounded',
    title: 'How the Avatar stays current with your business',
    subtitle: 'A RAG pipeline you actually operate — not a one-shot upload.',
    layers: [
      {
        label: 'Sources of truth — SharePoint, Confluence, CRM, ticketing, databases',
        detail: 'Where the business actually writes things down. Owned by the business, not by IT.',
        accent: 'teal'
      },
      {
        label: 'Ingestion — Logic Apps / Functions / Data Factory + Document Intelligence',
        detail: 'Scheduled or event-driven pulls; OCR and layout parsing for PDFs and forms.',
        accent: 'teal'
      },
      {
        label: 'Chunk + embed — Azure OpenAI embeddings, deterministic chunking strategy',
        detail: 'Versioned chunks with metadata: source, owner, sensitivity, freshness.',
        accent: 'purple'
      },
      {
        label: 'Index — Azure AI Search (hybrid: keyword + vector + semantic ranker)',
        detail: 'Filters honour Entra ID groups so retrieval respects the user\'s permissions.',
        accent: 'purple'
      },
      {
        label: 'Retrieve at runtime — agent tool call from Foundry / Agent Framework',
        detail: 'Top-k chunks injected into the prompt with citations the avatar can speak aloud.',
        accent: 'blue'
      },
      {
        label: 'Evaluate & monitor — groundedness, freshness, miss rate, user feedback loop',
        detail: 'Every answer is scored; failing topics feed back into the ingestion backlog.',
        accent: 'blue'
      }
    ],
    note: 'Keeping the Avatar grounded is the hard part. This slide shows a real operational RAG pipeline: sources of truth, ingestion, chunking, embeddings, indexing, retrieval and evaluation. The goal is not just to build a one-time knowledge dump, but to operate a pipeline with freshness, governance and feedback.'
  },

  {
    id: 25,
    type: 'two-column',
    eyebrow: 'Developer surface',
    title: 'What devs & engineers actually own',
    subtitle: 'The seams where your code meets the Avatar — and what you operate.',
    left: {
      title: 'What you build & ship',
      accent: 'blue',
      bullets: [
        { text: 'Frontend — Speech + Avatar SDK, WebRTC session, mic/camera consent flow' },
        { text: 'Backend — token broker, session orchestration, tool implementations' },
        { text: 'Tools the agent calls — your APIs, wrapped with auth and schemas' },
        { text: 'Ingestion jobs — connectors, chunkers, embedding pipelines' },
        { text: 'IaC — Bicep/azd for Foundry project, Speech, Search, Key Vault, App Insights' },
        { text: 'CI/CD — promote prompts, indexes and code together, with evaluations as gates' }
      ]
    },
    right: {
      title: 'What you operate & guard',
      accent: 'purple',
      bullets: [
        { text: 'Identity — Entra ID, on-behalf-of flow so the avatar acts as the user' },
        { text: 'Secrets — Key Vault for keys, managed identity everywhere possible' },
        { text: 'Cost — token, speech-minute and avatar-minute budgets with alerts' },
        { text: 'Latency — first-token, first-audio and lip-sync timings as SLOs' },
        { text: 'Safety — Content Safety policies, jailbreak tests, red-team suites' },
        { text: 'Observability — App Insights traces from click → token → phoneme' }
      ]
    },
    note: 'For engineers, the Avatar is the visible outcome. Behind it are frontend session flows, backend token brokers, tool implementations, ingestion pipelines and IaC. You also operate identity, secrets, cost controls, latency SLOs, safety policies and observability. The face is only as strong as the engineering discipline under it.'
  },

  // ============================================================
  // FABRIC IQ — semantic intelligence on top of Microsoft Fabric
  // ============================================================

  {
    id: 26,
    type: 'section',
    eyebrow: 'Data, but business-aware',
    title: 'Microsoft Fabric + Fabric IQ',
    subtitle: 'From moving data to answering questions in business language.',
    note: 'This section brings data intelligence into the story. Fabric IQ sits on top of Microsoft Fabric and translates raw data into business-aware answers. It is the semantic brain that makes Copilot and AI agents trustworthy for decision-making.'
  },

  {
    id: 27,
    type: 'two-column',
    eyebrow: 'What it is',
    title: 'Fabric IQ — the semantic brain on top of Fabric',
    subtitle: 'Copilot generates the work. Fabric IQ makes sure it means the right thing.',
    left: {
      title: 'What Fabric IQ adds',
      accent: 'purple',
      bullets: [
        { text: 'A semantic layer that knows your entities, measures and relationships' },
        { text: 'Lineage — every column, transformation and report linked end-to-end' },
        { text: 'Business-aware validation — names, units, grain, ownership and freshness' },
        { text: 'Grounds Copilot so generated pipelines and queries match the business model' },
        { text: 'A shared vocabulary across OneLake, Warehouse, Lakehouse and Power BI' }
      ]
    },
    right: {
      title: 'What Copilot in Fabric does with it',
      accent: 'blue',
      bullets: [
        { text: 'Generates pipelines, notebooks and SQL from natural-language prompts' },
        { text: 'Suggests transformations using the real schema and semantic model' },
        { text: 'Explains existing pipelines and reports in plain language' },
        { text: 'Drafts measures, KPIs and Power BI visuals against approved entities' },
        { text: 'Flags ambiguity early — "did you mean revenue net of returns?"' }
      ]
    },
    note: 'Fabric IQ adds the semantic layer that turns Fabric from a data platform into a business-aware platform. It knows your entities, measures, lineage and ownership, and it helps Copilot generate pipelines, queries and reports that match the business model. In AI-assisted analytics, speed alone is not enough; trust is what makes the output useful.'
  },

  {
    id: 28,
    type: 'architecture',
    eyebrow: 'Evolution',
    title: 'From SSIS to Fabric IQ — the line, in one stack',
    revealFromBottom: true,
    layers: [
      {
        label: 'Fabric + Copilot + Fabric IQ — semantic, AI-native, unified',
        detail: 'One platform, one lake, one semantic model — Copilot grounded by business context.',
        accent: 'purple'
      },
      {
        label: 'Microsoft Fabric — OneLake, Lakehouse, Warehouse, Real-Time, Power BI',
        detail: 'SaaS analytics platform — storage, compute and BI under one workspace.',
        accent: 'blue'
      },
      {
        label: 'Synapse Analytics — unified workspace, but still many engines to wire up',
        detail: 'Brought SQL, Spark and pipelines together; semantics still lived in Power BI alone.',
        accent: 'blue'
      },
      {
        label: 'Azure Data Factory + Databricks + ADLS — modern cloud ELT, separate pieces',
        detail: 'Scalable, code-first, but lineage and governance bolted on with extra tooling.',
        accent: 'teal'
      },
      {
        label: 'SSIS + SQL Server Analysis Services + Power BI — classic Microsoft stack',
        detail: 'On-prem ETL, OLAP cubes, then desktop BI — three tools, three skill sets.',
        accent: 'teal'
      }
    ],
    note: 'This chart shows the evolution from SSIS and classic BI through Synapse and modern ELT to Fabric IQ. Each step removed manual glue work and brought data, semantics and analytics closer together. Fabric IQ is the last mile: it makes data meaningful to business users by capturing intent, relationships and definitions.'
  },

  {
    id: 29,
    type: 'two-column',
    eyebrow: 'Who does what',
    title: 'Devs, data engineers, data scientists — closer to the business',
    subtitle: 'Less time wiring tools, more time answering questions.',
    left: {
      title: 'How the work shifts',
      accent: 'blue',
      bullets: [
        { text: 'Data engineers — author pipelines and contracts, curate the semantic model' },
        { text: 'Data scientists — query approved entities, not raw tables' },
        { text: 'Developers — call semantic endpoints from apps and agents, not ad-hoc SQL' },
        { text: 'Analysts & business — ask questions in natural language, get governed answers' },
        { text: 'Stewards — own definitions, lineage and freshness as first-class artifacts' }
      ]
    },
    right: {
      title: 'Querying business, not data',
      accent: 'purple',
      bullets: [
        { text: '"Net revenue by region last quarter" → resolves to the certified measure' },
        { text: 'Joins, filters and grain are inferred from the semantic model' },
        { text: 'Answers come back with lineage and the SQL that ran — auditable by default' },
        { text: 'Same semantic layer powers Power BI, Copilot, agents and your APIs' },
        { text: 'Ambiguity is surfaced, not silently resolved — the model asks back' }
      ]
    },
    note: 'This slide shows how the surfaces connect back to your data. The semantic layer is the business model, and SQL becomes an implementation detail. Surfaces like Fabric, Copilot and custom apps all use the same project. The important message is that your data strategy is now defined by meaning and lineage, not by raw tables.'
  },

  {
    id: 30,
    type: 'architecture',
    eyebrow: 'Where you work & how it connects',
    title: 'From your databases to a business-aware semantic layer',
    layers: [
      {
        label: 'Surfaces — Fabric portal, VS Code, Power BI, Copilot, Teams, custom apps',
        detail: 'Notebooks, pipelines, semantic model editor, Copilot chat — all against the same project.',
        accent: 'blue'
      },
      {
        label: 'Fabric IQ — semantic model: entities, measures, hierarchies, glossary',
        detail: 'Business ontology lives here — owned by stewards, versioned in Git, reviewed in PRs.',
        accent: 'purple'
      },
      {
        label: 'Mappings — semantic entity ↔ physical table/column, with rules and tests',
        detail: '"Customer" maps to crm.dbo.Customers + sap.BP — keys, joins and conformance encoded.',
        accent: 'purple'
      },
      {
        label: 'OneLake + Lakehouse / Warehouse — unified storage, open Delta format',
        detail: 'One copy of the data; shortcuts replace endless Copy activities.',
        accent: 'teal'
      },
      {
        label: 'Sources — SQL Server, Azure SQL, Cosmos DB, Snowflake, SAP, Salesforce, Kafka, files',
        detail: 'Mirroring, shortcuts and connectors bring data in without duplicating it everywhere.',
        accent: 'teal'
      }
    ],
    note: 'The architecture here is the end-to-end path from sources to business-aware answers. OneLake holds the data, mappings connect physical tables to semantic entities, Fabric IQ captures the business model, and surfaces consume it. This is how you move from data engineering to business intelligence that the business can trust.'
  },

  // ============================================================
  // WRAP UP
  // ============================================================

  {
    id: 31,
    type: 'bullets',
    eyebrow: 'Wrap up',
    title: 'From Cloud to Agents — what to take home',
    subtitle: 'Developers keep their space on the cloud — now AI-native, edge-aware and business-aware.',
    bullets: [
      {
        text: 'Developers still own the cloud — only now AI is a first-class primitive, not a bolt-on',
        sub: [
          'Agents, models and tools sit alongside services, queues and databases',
          'Same IaC, same CI/CD, same identity — just new resource types'
        ]
      },
      {
        text: 'Your local infra moves closer to the cloud — without losing control',
        sub: [
          'Azure Local + Arc bring the cloud operating model to your hardware',
          'Disconnected by design when sovereignty, latency or resilience demand it'
        ]
      },
      {
        text: 'Cloud-native tooling raises the floor for security, observability and compliance',
        sub: [
          'Policy, RBAC, Defender, Monitor and Key Vault apply uniformly — cloud and edge',
          'Sovereignty becomes a deployment posture, not a separate platform'
        ]
      },
      {
        text: 'AI energises every layer of how value reaches the business',
        sub: [
          'Frontend — real-time avatars and copilots as the new interface',
          'Data — Fabric IQ turns schemas into a business-aware semantic layer',
          'Backend — agents orchestrate tools, APIs and workflows end-to-end'
        ]
      },
      {
        text: 'Custom code stays the differentiator — backed by transversal, first-class SDKs',
        sub: [
          'Microsoft Agent Framework, Foundry SDK, Speech SDK, Fabric APIs',
          'Same languages, same repos, same teams — fine-tuned to your business'
        ]
      }
    ],
    note: 'As we wrap up, remember the themes we have visited. The cloud is still central, but it now includes AI agents, local edge extension and business-aware data. The same engineering disciplines apply: IaC, CI/CD, identity and governance. The future is about building systems that are smarter, more distributed and more connected to business meaning.'
  },

  {
    id: 32,
    type: 'quote',
    eyebrow: 'One last thing',
    quote: 'Buckle up… we are living in times of a new revolution — and we are the builders that history books will be mentioning. Enjoy it!',
    attribution: 'See you on the other side of the keynote.',
    note: 'Close with energy. Remind the room that we are not observers of this change — we are building it. This revolution is not abstract; it is being written by the engineers and leaders in the room.'
  }
];

