"use client";

import { useState, type KeyboardEvent } from "react";
import { Arrow, Eyebrow, Icon } from "./ui";

const solutions = [
  {
    id: "intelligence",
    label: "Intelligent platforms",
    title: "Connect the dots. See the bigger picture.",
    description:
      "Bring your data, workflows, and decisions together in one connected ecosystem. We build platforms that turn complexity into a clear operational advantage.",
    features: [
      "AI-assisted insights and decision making",
      "Seamless integration with your existing systems",
      "Architecture that grows with your ambitions",
    ],
    metric: "Data processed",
    value: "128.4",
    unit: "k events",
    chart: "Event throughput",
    modules: ["Data ingestion", "Intelligence layer", "Business insights"],
    bars: [
      28, 40, 34, 55, 48, 43, 68, 58, 76, 63, 86, 72, 79, 67, 92, 83, 74, 89,
      82, 96,
    ],
  },
  {
    id: "telemetry",
    label: "Real-time systems",
    title: "Every signal. A clearer understanding.",
    description:
      "Understand what’s happening as it happens. Our telemetry and simulation systems bring live data into focus, helping your teams explore, monitor, and respond with confidence.",
    features: [
      "Live telemetry and interactive visualizations",
      "High-performance simulation environments",
      "Actionable monitoring across connected systems",
    ],
    metric: "Signals received",
    value: "64.8",
    unit: "k signals",
    chart: "Signal activity",
    modules: ["Sensor streams", "Signal processing", "Live visualization"],
    bars: [
      62, 32, 80, 42, 74, 56, 94, 64, 52, 87, 45, 76, 98, 67, 83, 42, 73, 92,
      60, 81,
    ],
  },
  {
    id: "infrastructure",
    label: "Resilient infrastructure",
    title: "A strong foundation. Room to grow.",
    description:
      "Keep your business moving with thoughtfully designed infrastructure. We engineer dependable cloud systems that adapt to demand and make your next stage of growth possible.",
    features: [
      "Scalable cloud-native architecture",
      "Observability built into every layer",
      "Reliable integrations and deployment workflows",
    ],
    metric: "Requests handled",
    value: "256.2",
    unit: "k requests",
    chart: "Request volume",
    modules: ["API gateway", "Distributed services", "Observability"],
    bars: [
      22, 30, 28, 35, 38, 42, 46, 51, 48, 57, 63, 60, 69, 73, 70, 79, 83, 87,
      91, 97,
    ],
  },
];

export function Solutions() {
  const [selected, setSelected] = useState(0);
  const solution = solutions[selected];
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
      setSelected(next);
      document.getElementById(`tab-${solutions[next].id}`)?.focus();
    }
  }
  return (
    <section id="solutions" className="solutions-section section">
      <div className="container">
        <div className="section-heading">
          <div>
            <Eyebrow number="02">BUILT FOR POSSIBILITY</Eyebrow>
            <h2>
              Powerful on their own.
              <br />
              Exceptional together<span className="accent">.</span>
            </h2>
          </div>
          <p>
            Connected technology, built around your world.
            <br />
            Explore what we can make possible.
          </p>
        </div>
        <div
          className="solution-tabs"
          role="tablist"
          aria-label="Our solutions"
        >
          {solutions.map((item, index) => (
            <button
              key={item.id}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-controls="solution-panel"
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span>0{index + 1}</span>
              {item.label}
              <Arrow diagonal />
            </button>
          ))}
        </div>
        <div
          className="solution-panel"
          role="tabpanel"
          id="solution-panel"
          aria-labelledby={`tab-${solution.id}`}
          tabIndex={0}
        >
          <div
            className="platform-demo"
            aria-label={`Illustrative ${solution.label.toLowerCase()} dashboard`}
          >
            <div className="demo-top">
              <span>
                <span className="mini-brand">✳</span> CoreNova / System overview
              </span>
              <span className="demo-label">ILLUSTRATIVE DEMO</span>
            </div>
            <div className="demo-body">
              <div className="demo-heading">
                <span>Platform overview</span>
                <span className="demo-status">
                  <span className="status-dot" /> System healthy
                </span>
              </div>
              <div className="demo-metrics">
                <div>
                  <span>{solution.metric}</span>
                  <strong>
                    {solution.value}
                    <small>{solution.unit}</small>
                  </strong>
                </div>
                <div>
                  <span>Architecture</span>
                  <strong className="metric-text">
                    Connected<small>by design</small>
                  </strong>
                </div>
              </div>
              <div className="chart-top">
                <span>{solution.chart}</span>
                <span>Sample data · 24 hours</span>
              </div>
              <div className="demo-chart" aria-hidden="true">
                <div className="chart-grid" />
                {solution.bars.map((height, index) => (
                  <div
                    className="chart-bar"
                    key={index}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="chart-axis">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>24:00</span>
              </div>
              <div className="demo-modules">
                {solution.modules.map((module) => (
                  <span key={module}>
                    <Icon name="layers" />
                    {module}
                    <span className="status-dot" />
                  </span>
                ))}
              </div>
            </div>
            <div className="demo-bottom">
              <span className="status-dot" /> Three layers. One connected
              system.
              <Icon name="signal" />
            </div>
          </div>
          <div className="solution-copy">
            <span className="solution-kicker">DESIGNED TO WORK AS ONE</span>
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
            <a href="#contact" className="text-link">
              Let’s explore your possibilities <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
