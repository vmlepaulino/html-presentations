export interface PresenterScript {
  body?: string;
  left?: string;
  right?: string;
}

const s = (body: string): PresenterScript => ({ body });
const p = (left: string, right: string): PresenterScript => ({ left, right });

// Keep this array in the same order as SLIDES in slides.data.ts.
export const PRESENTER_SCRIPTS: PresenterScript[] = [
  s(
    `I am opening with the path I found most useful across the conference: cloud foundations, agents, Azure Local, avatars, and business data. I will keep it practical and speak as someone translating the talks into something a team can actually use.`
  ),

  p(
    `I would frame the tension this way: AI is moving fast, but trust, residency, and compliance still set the boundaries. That was the recurring theme I kept hearing in the keynote.`,
    `Azure's answer, as I heard it, is not to slow innovation down, but to make governance part of the default architecture. That balance is what I would carry into the rest of the deck.`
  ),

  p(
    `For developers, I would translate the keynote into a practical habit: build with models, agents, tools, and memory, and treat data residency and identity as part of the API, not an afterthought.`,
    `For engineering teams, I would read this as a design brief for sovereignty, observability, and auditability from day one. The goal is to move fast without losing the controls that keep the system trustworthy.`
  ),

  s(
    `This is the turn where the story moves from cloud platforms to agentic systems. I would use it to signal that the next part is less about AI in theory and more about how an agent actually works.`
  ),

  s(
    `When I saw this diagram, I liked how simple it stayed. I would explain an agent as inputs on one side, capabilities in the middle, and outputs on the other, because that keeps the idea grounded instead of magical.`
  ),

  p(
    `On the pattern side, the useful lesson for me was that there is no single agent shape. Sometimes you need one tool-using agent, and sometimes you need multiple agents, a human review step, or a critic loop.`,
    `On the use-case side, I would point to customer service, research, IT ops, and developer productivity as the places where these patterns feel concrete. That made the topic feel less theoretical to me.`
  ),

  s(
    `I would not read every line out loud, but I would point to the pattern: the same SDK can support a chatbot, a workflow, or a fan-out design. That was the most useful part for me, because it showed the architecture choices more than just the syntax.`
  ),

  p(
    `I would tell the room that the Agent Framework is a library, so the application model is your choice. Console app, web API, worker, Functions, or Teams are all valid depending on how the work needs to surface.`,
    `Then I would connect that to hosting: App Service, Container Apps, AKS, Foundry, Azure Functions, edge, or local dev all fit the same code path. The nice part is that the business logic does not have to change when the host does.`
  ),

  p(
    `For developers, I would highlight the pro-code tools: Copilot, the Agent Framework, Foundry, and the broader SDK ecosystem. That is the path for people who want to stay close to code and orchestration.`,
    `For makers, I would point to Copilot Studio and the low-code surface. What I took away is that both groups can work at different speeds and still land on the same governance and runtime fabric.`
  ),

  s(
    `This is where I would pause and say the story is shifting into runtime and governance. From the sessions I saw, Foundry is the place where agents move from demo territory into something you can actually run and manage.`
  ),

  s(
    `I liked this slide because it makes the ecosystem feel layered instead of mysterious. Channels, agents, tools, knowledge, models, identity, and governance each have a role, and that makes the platform easier to explain to a new audience.`
  ),

  p(
    `I would explain the left side as the normal Azure project experience: resources, settings, identities, and permissions. It feels familiar if you already live in Azure, which is probably why the talk landed well with me.`,
    `On the right, the message is that Foundry does not replace Azure's control plane. It sits on top of it, so the project can be described, reviewed, and deployed like the rest of the platform.`
  ),

  s(
    `I would use this slide to show that the project is meant to feel familiar to any Azure team. What stood out to me is that the repo stays disciplined: infrastructure, source, scripts, and tests each have a clear job.`
  ),

  p(
    `On the commit side, I would keep the story simple: check in the code, run the checks, and let the repo capture the changes. That was the part that felt most familiar to me as an engineer.`,
    `On the deployment side, I would treat the pipeline as the bridge from source to a live agent. The important bit is that the same release discipline still applies, even though the workload is now AI-driven.`
  ),

  s(
    `This is the handoff to the hybrid part of the talk. I am using it to show why some workloads need to stay close to the data, even when the rest of the platform stays cloud-shaped.`
  ),

  p(
    `I would frame Azure Local as the answer for teams that need cloud-style management but cannot always depend on a public-region round trip. The why-now part, for me, is about latency, sovereignty, and resilience.`,
    `The second half of the story is that it is not just an edge box. It is the Azure operating model brought closer to where the data and the workload actually live.`
  ),

  p(
    `In connected mode, I would explain it as managed from Azure but running locally. That gives you the cloud operating model without forcing every decision to happen in the cloud.`,
    `In disconnected mode, the important detail for me is that the site keeps working even when the network does not. That changes how you think about updates, identity, and operational fallbacks.`
  ),

  p(
    `I would use this side to show the DevOps angle: the same deployment, policy, and automation habits can extend to places that used to feel outside the cloud boundary.`,
    `And on the infrastructure side, the talk made sense to me as a way to keep operations close to the hardware while still keeping the Azure control model in charge.`
  ),

  p(
    `What Azure Local is, in the way I would explain it, is a control model that extends Azure to customer-owned hardware. It is about keeping the operating model consistent, not pretending the hardware disappeared.`,
    `What it is not, as I would say it to a new audience, is a replacement for every existing on-prem stack or a magic fix for every hybrid problem. You still choose it for the cases where proximity and control really matter.`
  ),

  s(
    `I would read this stack from top to bottom and keep it simple: Azure gives the control plane, Arc bridges management, Azure Local runs the workload, and your hardware sits at the base. That layered view made the whole thing easier to explain.`
  ),

  p(
    `The left side of the story is the local runtime: workloads, storage, and logs keep moving even if the WAN drops. That was one of the clearest this-matters-in-real-life moments for me.`,
    `The right side is the local management layer caching enough policy and configuration to keep the site alive. I would describe that as a posture you choose deliberately, not just an emergency fallback.`
  ),

  p(
    `What I would call out here is the projection model: local things show up as Azure resources, which keeps the developer and operator experience consistent. That makes the hybrid story much less awkward.`,
    `Then the sync story becomes a question of desired state rather than one-off manual coordination. I would explain it as one control plane, two places of execution.`
  ),

  p(
    `On the use-case side, the obvious fits are the places where latency, residency, or resilience are non-negotiable. That is what made the hybrid story feel concrete to me rather than abstract.`,
    `On the security side, I would stress that the same identity, policy, and monitoring mindset still applies. The AI part becomes a choice about where the model runs, not a separate trust model.`
  ),

  s(
    `This is where the talk shifts again, this time into the experience layer. I would tell a new audience that the avatar is not just a visual flourish, but a real-time interface on top of the same agent backend.`
  ),

  p(
    `I would describe the left side as the experience people actually see: voice, face, and real-time response stitched together into something that feels present. That is a very different feel from a standard chat window.`,
    `On the right, I would point out where that experience is useful: support, internal copilots, kiosks, training, and branded interactions. It felt like a practical interface layer, not just a demo flourish.`
  ),

  s(
    `What I liked here is how the avatar stack separates the moving parts instead of pretending they are one product. The UI, speech, models, knowledge, and platform services each do their own job, which makes the whole thing easier to reason about.`
  ),

  p(
    `For the portal side, I would say this is where designers and prompt folks get to shape the agent, connect knowledge, and validate the experience. That keeps the non-code work visible, which I liked.`,
    `For the code side, I would frame it as the place where developers wire up the backend, the SDKs, and the release process. The split feels healthy because both sides are needed to make the experience real.`
  ),

  s(
    `Keeping the avatar current is the hard part, and that was clear in the talks. I would explain this slide as an operational pipeline, not a one-time content upload, because freshness and governance are what make the experience usable.`
  ),

  p(
    `I would use this side to ground the work in code and infrastructure: the frontend, token broker, tools, ingestion jobs, and IaC all still need real engineering. That is the part that makes the avatar sustainable.`,
    `And I would use the right side to remind the room that operations matters just as much: identity, secrets, cost, latency, safety, and observability are the things that keep the experience trustworthy. That balance felt very real to me.`
  ),

  s(
    `This is the data-intelligence part of the story. From what I heard, Fabric IQ matters because it gives Copilot and agents a business model they can trust instead of just raw tables.`
  ),

  p(
    `What I heard on the Fabric IQ side is that the semantic layer is what gives the platform business meaning. It knows the entities, measures, and lineage so Copilot is not guessing.`,
    `On the Copilot side, the value is that generation becomes grounded in that model. I would explain it as letting natural language work against a business vocabulary that the platform already understands.`
  ),

  s(
    `I would use this slide to show the journey from classic Microsoft data tooling to a more semantic, AI-native stack. The main message for me is that each step reduced glue work and brought the business meaning closer to the data itself.`
  ),

  p(
    `I would describe the shift here as less time wiring tools and more time shaping meaning. Data engineers, scientists, and developers all get pulled closer to the actual business model.`,
    `The right side is the big payoff: people can ask in business language, and the platform can answer with governed semantics and lineage. That felt like the practical reason Fabric IQ matters.`
  ),

  s(
    `This is the part where the story becomes more business-facing. I would explain it as moving from raw databases to a semantic layer that can answer in the language the business actually uses.`
  ),

  s(
    `I would close by pulling the themes back together: cloud, edge, AI, identity, governance, and business meaning all still matter, but they now sit in one conversation. What I would want people to remember is that the same engineering discipline still applies, even when the workload looks very different.`
  ),

  s(
    `I would end on this quote because it keeps the energy human. The room I heard this in felt like a reminder that we are not just watching the change; we are the people building the next version of it.`
  )
];
