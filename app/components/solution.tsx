"use client";

import { useSyncExternalStore, type KeyboardEvent } from "react";
import Link from "next/link";
import { Arrow, Eyebrow, Icon } from "./ui";

const solutions = [
  {
    id: "enterprise",
    label: "Enterprise software",
    title: "Bring your business systems together.",
    description:
      "When your tools don’t share data, your team fills the gaps. A connected platform can bring records, workflows, and integrations into one place.",
    example: "A connected operations platform",
    steps: [
      {
        label: "Connect",
        title: "Existing tools & APIs",
        detail: "Bring data from the systems your team already uses.",
      },
      {
        label: "Coordinate",
        title: "A shared platform",
        detail: "Connect business rules, records, and workflows.",
      },
      {
        label: "Use",
        title: "One operational view",
        detail: "Give your team a place to track and manage its work.",
      },
    ],
    features: [
      "Custom platforms and API integrations",
      "Cloud infrastructure designed for your workload",
      "Monitoring to understand system health",
    ],
  },
  {
    id: "cove",
    label: "Cove",
    title: "A place for your people.",
    description:
      "Cove gives a small group of friends a self-hosted place to chat, call, and share their screens. One friend hosts the group; everyone connects to that computer.",
    example: "How a Cove group comes together",
    steps: [
      {
        label: "Host",
        title: "One friend’s computer",
        detail: "Run Cove and create a private group on your own host.",
      },
      {
        label: "Invite",
        title: "Your circle of friends",
        detail: "Share an invite and connect everyone to the same host.",
      },
      {
        label: "Hang out",
        title: "Chat, calls & screen sharing",
        detail: "Catch up in text channels or join a voice room together.",
      },
    ],
    features: [
      "Private groups and one-to-one messages",
      "Voice rooms, camera video, and screen sharing",
      "Self-hosted, with no required subscription",
    ],
  },
  {
    id: "telemetry",
    label: "Telemetry & simulation",
    title: "Understand your systems as they run.",
    description:
      "Live signals are useful when your team can interpret them. Telemetry and simulation bring system behavior into view, helping you monitor activity and explore what could happen next.",
    example: "A live monitoring and simulation workflow",
    steps: [
      {
        label: "Collect",
        title: "Live signal streams",
        detail: "Receive events from connected systems or sensors.",
      },
      {
        label: "Interpret",
        title: "Processing & simulation",
        detail: "Analyze signals and explore system behavior.",
      },
      {
        label: "Observe",
        title: "A real-time view",
        detail: "Visualize activity so your team can investigate changes.",
      },
    ],
    features: [
      "Live telemetry and interactive visualizations",
      "Simulation environments for exploring scenarios",
      "Monitoring across connected systems",
    ],
  },
  {
    id: "mobile",
    label: "Mobile engineering",
    title: "Put your services in people’s hands.",
    description:
      "A mobile app should connect to the work behind it. We build iOS and Android experiences that bring your business services to the people who need them.",
    example: "A mobile app connected to your platform",
    steps: [
      {
        label: "Connect",
        title: "Your business services",
        detail:
          "Make existing platform data and functions available through APIs.",
      },
      {
        label: "Build",
        title: "An iOS or Android app",
        detail: "Shape the interface around what people need to do on a phone.",
      },
      {
        label: "Use",
        title: "Services on the move",
        detail:
          "Let people access and interact with your platform from their device.",
      },
    ],
    features: [
      "iOS, Android, and cross-platform development",
      "Integration with your APIs and business systems",
      "Mobile interfaces designed around user tasks",
    ],
  },
];

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getHash() {
  return window.location.hash;
}

function getServerHash() {
  return "";
}

export function Solutions() {
  const hash = useSyncExternalStore(subscribeToHash, getHash, getServerHash);
  const selected = Math.max(
    0,
    solutions.findIndex((item) => hash === `#solution-${item.id}`),
  );
  const solution = solutions[selected];

  function selectSolution(index: number) {
    window.history.replaceState(
      window.history.state,
      "",
      `#solution-${solutions[index].id}`,
    );
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % solutions.length
        : event.key === "ArrowLeft"
          ? (index + solutions.length - 1) % solutions.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? solutions.length - 1
              : null;
    if (next !== null) {
      event.preventDefault();
      selectSolution(next);
      document.getElementById(`solution-${solutions[next].id}`)?.focus();
    }
  }

  return (
    <section id="solutions" className="solutions-section section">
      <div className="container">
        <div className="section-heading">
          <div>
            <Eyebrow number="02">EXAMPLE SOLUTIONS</Eyebrow>
            <h2>
              From a business problem
              <br />
              to a connected system<span className="accent">.</span>
            </h2>
          </div>
          <p>
            Explore illustrative workflows for each service, and see how the
            pieces could fit your business.
          </p>
        </div>
        <div
          className="solution-tabs"
          role="tablist"
          aria-label="Example solutions by service"
        >
          {solutions.map((item, index) => (
            <button
              key={item.id}
              id={`solution-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-controls="solution-panel"
              tabIndex={selected === index ? 0 : -1}
              onClick={() => selectSolution(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div
          className="solution-panel"
          role="tabpanel"
          id="solution-panel"
          aria-labelledby={`solution-${solution.id}`}
          tabIndex={0}
        >
          <figure className="workflow-example">
            <div className="platform-demo">
              <div className="demo-top">
                <Icon name="layers" />
                <span>{solution.example}</span>
              </div>
              <ol className="workflow-steps">
                {solution.steps.map((step) => (
                  <li key={step.title}>
                    <span className="workflow-label">{step.label}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <figcaption>
              {solution.id === "cove"
                ? "Cove’s hosting model. Remote connections need a reachable host and may need a call relay."
                : "Illustrative workflow. The architecture and scope depend on your project."}
            </figcaption>
          </figure>
          <div className="solution-copy">
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <ul>
              {solution.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" />
                  {feature}
                </li>
              ))}
            </ul>
            {solution.id === "cove" ? (
              <Link href="/cove" className="text-link">
                Explore Cove in detail <Arrow diagonal />
              </Link>
            ) : (
              <a href="#contact" className="text-link">
                Discuss your {solution.label.toLowerCase()} project{" "}
                <Arrow diagonal />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
