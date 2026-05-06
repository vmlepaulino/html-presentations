export interface PresenterScript {
  body?: string;
  left?: string;
  right?: string;
}

const s = (body: string): PresenterScript => ({ body });
const p = (left: string, right: string): PresenterScript => ({ left, right });

// Keep this array in the same order as SLIDES in slides.data.ts.
export const PRESENTER_SCRIPTS: PresenterScript[] = [
  // 1. Title
  s(
    'This deck is about the operating model the team needs when cloud, agents, hybrid runtime, real-time interfaces, and semantic data all belong in one system. The goal is to make the responsibility and risk of each layer explicit so the team can build and operate it like a production platform.'
  ),

  // 2. Innovation Without Compromise
  p(
    'The constraint here is that AI velocity does not relax sovereignty, residency, or compliance. Those requirements still define the architectural envelope.',
    'The platform response is to make security, governance, and control part of the default architecture rather than add them after the fact.'
  ),

  // 3. What this means for developers & engineering
  p(
    'For developers, the contract now includes models, agents, tools, memory, identity, and residency, and each of those choices changes latency, correctness, and auditability.',
    'For engineering teams, observability, policy, multi-region design, and audit are part of the platform design because those controls are what let us run AI systems safely at production scale.'
  ),

  // 4. The Future of AI is Agentic
  s(
    'This section moves us from platform principles to the agent runtime. Once AI is in the execution path, reasoning, tool use, and policy become one control surface instead of separate concerns.'
  ),

  // 5. Inside an Agent
  s(
    'Read an agent as a control loop. Inputs are the evidence, capabilities are the reasoning and execution layer, and outputs are the side effects we allow. That separation is what makes the system testable, observable, and governable.'
  ),

  // 6. Design patterns & use cases
  p(
    'These patterns are not interchangeable. Single-agent automation, orchestration, human-in-the-loop, retrieval grounding, and critic loops each change the approval boundary, the failure mode, and the observability surface.',
    'The first adoption zones are support, research, IT operations, and developer productivity, because those workloads benefit from automation without eliminating human control.'
  ),

  // 33. Building agents with the Microsoft Agent Framework
  s(
    'This example is about composition, not syntax. The same SDK can implement a streaming chatbot, a sequential workflow, or a fan-out/fan-in pattern. The point for the team is that agent architecture is composition, not a new language.'
  ),

  // 35. How do you ship and host this code?
  p(
    'The application model is a separate choice from hosting. We can expose the same agent as a console app, web API, worker, Functions app, or Teams integration depending on how it should surface.',
    'The hosting target changes the SLA, scaling model, and operational envelope, not the core logic. App Service, Container Apps, AKS, Foundry, Functions, edge, and local dev can all run the same business behavior.'
  ),

  // 7. Build agents - for every audience
  p(
    'Pro-code and low-code are different entry points, not different platforms. If the team needs deep control, the Agent Framework, Foundry, and the SDKs keep us close to orchestration and implementation.',
    'If the team needs faster domain delivery, Copilot Studio and visual tooling still land on the same runtime and governance surface.'
  ),

  // 36. Microsoft Foundry
  s(
    'Foundry is the point where a prototype becomes an operable system. The project, runtime, and lifecycle controls come together here, so this is where we turn an agent into something the team can govern and support.'
  ),

  // 8. Microsoft Foundry - AI Agent Ecosystem
  s(
    'Read this ecosystem as the control plane for the whole agent stack. Channels and surfaces define where the agent appears, agents define behavior, knowledge and tools define grounding and action, models supply reasoning, and identity and governance keep the system operable at scale.'
  ),

  // 9. A Foundry project is just Azure resources
  p(
    'A Foundry project is still Azure resources, identities, and policies. That means it fits the same control plane the rest of the platform uses.',
    'That matters because deployment, audit, and policy enforcement stay inside Azure\'s operating model instead of becoming a separate application-specific control system.'
  ),

  // 10. What a Foundry project looks like in a repo
  s(
    'The repo matters because it turns portal configuration into source-controlled artifacts. That is the difference between a one-off demo and a system we can review, test, and repeat.'
  ),

  // 11. From commit to a deployed agent
  p(
    'The release flow should stay familiar: commit, validate, provision, deploy, and verify. That keeps the agent lifecycle disciplined.',
    'The operating principle is desired state, not manual steps. For a team, that is what keeps change safe and makes rollback and review possible.'
  ),

  // 37. Azure Local
  s(
    'Here locality, latency, and resilience become design constraints rather than deployment preferences. That is the difference between a cloud-only assumption and an architecture that has to survive real-world boundaries.'
  ),

  // 12. What is Azure Local - and why now?
  p(
    'Azure Local is the control model we use when a workload has to stay close to data, devices, or an on-prem boundary.',
    'The Azure operating model still applies, but execution moves closer to the physical hardware and the data that cannot leave it.'
  ),

  // 13. Connected vs. Disconnected - and what syncs
  p(
    'In connected mode, Azure continues to manage the site and the site reports state back. That gives us uniform policy and telemetry.',
    'In disconnected mode, the local environment keeps running even without WAN access. That changes the contract because local state and cached policy have to carry the workload.'
  ),

  // 14. Scenarios for DevOps & Infrastructure teams
  p(
    'For DevOps and infrastructure teams, the important shift is that the same automation discipline has to extend to the edge.',
    'That matters because identity, policy, and monitoring are what keep a distributed environment manageable instead of turning it into isolated islands.'
  ),

  // 15. What Azure Local IS - and what it is NOT
  p(
    'Azure Local is an extension of the Azure operating model to customer-owned hardware. It is about consistency in management and control.',
    'It is not a universal replacement for every on-prem stack. We should choose it for the cases where proximity, sovereignty, or resilience really matter.'
  ),

  // 16. The stack - Azure on top, your infra at the bottom
  s(
    'Read this stack as the boundary map between the Azure control plane, the local projection layer, the runtime, and the physical infrastructure. That separation tells the team which responsibilities are centralized, which are local, and where the system needs to keep working if a boundary fails.'
  ),

  // 17. How it keeps running offline
  p(
    'When connectivity drops, workloads, storage, and logs still need to run locally. For some systems, that is not a fallback; it is the requirement.',
    'Because of that, remote management is no longer authoritative in the moment. Local state and cached policy become part of the operating contract.'
  ),

  // 18. Syncing resources across on-prem and Azure
  p(
    'Projection is what makes local resources show up as Azure resources. That gives the team one management surface across both environments.',
    'Sync matters because desired state, metadata, and selected configuration can reconcile across the boundary. That is how we keep drift under control.'
  ),

  // 19. Use cases, security posture & hybrid AI
  p(
    'These are the workload classes where Azure Local earns its place: regulated industries, remote operations, manufacturing, healthcare, and other latency-bound systems.',
    'The security posture stays rooted in the same identity, policy, and monitoring model, while model placement can move closer to the data.'
  ),

  // 20. Real-time AI Avatars on Azure
  s(
    'A real-time experience only works when speech, state, and orchestration are engineered together as one system, because the user feels the weakest of those three parts immediately.'
  ),

  // 21. Beyond a chatbot - an interactive digital presence
  p(
    'An avatar is a composed interface, not a single feature. Voice, face, and response are stitched on top of the same reasoning backend.',
    'That matters because it turns support, copilots, kiosks, training, and branded experiences into production interfaces rather than demos.'
  ),

  // 22. The services behind a real-time Avatar
  s(
    'Read this avatar stack as the latency and failure budget for the experience: front end, speech, agent orchestration, models, retrieval, and platform services each absorb a different concern. The architecture matters because each layer has different operational risk, and this is why the avatar cannot be treated as only a front-end feature.'
  ),

  // 23. Where you actually build the Avatar
  p(
    'Foundry is the design-time surface where prompt design, knowledge wiring, and evaluation happen. That is where we shape behavior before code ships.',
    'The code surface handles the backend, SDK integration, and infrastructure. That is what makes the experience reliable and production-ready.'
  ),

  // 24. How the Avatar stays current with your business
  s(
    'Keeping the avatar current is really a data pipeline problem. Source systems, ingestion, chunking, indexing, retrieval, and evaluation are what keep the experience grounded in actual business state.'
  ),

  // 25. What devs & engineers actually own
  p(
    'Engineers build the seams: frontend session flow, token brokerage, tool implementations, ingestion jobs, and infrastructure as code. Those are the parts that make the system shippable.',
    'Engineers also operate the system: identity, secrets, cost, latency, safety, and observability are the controls that keep it trustworthy over time.'
  ),

  // 26. Microsoft Fabric + Fabric IQ
  s(
    'Treat this as a semantics problem. If the agent does not understand business meaning, every downstream answer is just a faster way to be wrong.'
  ),

  // 27. Fabric IQ - the semantic brain on top of Fabric
  p(
    'Fabric IQ adds the semantic model: entities, measures, lineage, and governance-aware definitions. That gives the platform a business vocabulary instead of just raw tables.',
    'Copilot uses that layer to ground generation. What matters here is that the output is shaped by certified business meaning, not whatever schema happens to be available.'
  ),

  // 28. From SSIS to Fabric IQ - the line, in one stack
  s(
    'The progression from classic Microsoft data stacks to Fabric IQ shows the same pattern we have seen elsewhere: each generation removed glue work and moved more meaning into the platform, and Fabric IQ is where the semantic contract becomes first-class.'
  ),

  // 29. Devs, data engineers, data scientists - closer to the business
  p(
    'The work shifts across roles, but the common theme is that everyone gets closer to the business model. Data engineers own the pipeline and semantic contract, developers consume semantic endpoints, and analysts work in business terms.',
    'The payoff is that queries resolve against certified entities and measures, and ambiguity is handled in the semantic layer instead of leaking into every consumer.'
  ),

  // 30. From your databases to a business-aware semantic layer
  s(
    'This is the end-to-end path from source systems to business-aware answers. The important consideration is that physical storage is no longer where business meaning lives; the semantic layer is.'
  ),

  // 31. From Cloud to Agents - what to take home
  s(
    'Cloud remains the base operating model, but it now extends to agents, edge execution, real-time interfaces, and semantic data. The engineering job is to treat AI as platform capability, not a side feature.'
  ),

  // 32. Quote / closing
  s(
    'These primitives are ours to operationalize. The standard is a system that is safe, observable, and maintainable over time, not just impressive in a demo.'
  )
];
