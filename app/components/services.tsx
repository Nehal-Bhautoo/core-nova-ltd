import { Arrow, Eyebrow, Icon } from "./ui";

const services = [
  {
    icon: "code",
    solution: "enterprise",
    title: "Enterprise software",
    desc: "Connect business tools and data through custom platforms, APIs, and cloud infrastructure.",
    action: "Explore enterprise systems",
  },
  {
    icon: "spark",
    solution: "intelligence",
    title: "AI & automation",
    desc: "Put AI to work in your existing processes, from organizing information to automating repetitive tasks.",
    action: "Explore AI workflows",
  },
  {
    icon: "signal",
    solution: "telemetry",
    title: "Telemetry & simulation",
    desc: "Monitor live signals, visualize system behavior, and explore scenarios through simulation.",
    action: "Explore real-time systems",
  },
  {
    icon: "mobile",
    solution: "mobile",
    title: "Mobile engineering",
    desc: "Bring your services to iOS and Android with mobile apps connected to your business systems.",
    action: "Explore mobile experiences",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="section services-section container">
      <div className="section-heading">
        <div>
          <Eyebrow number="01">OUR CAPABILITIES</Eyebrow>
          <h2>
            The systems your
            <br />
            business depends on<span className="accent">.</span>
          </h2>
        </div>
        <p>
          Choose the challenge you’re working on. Each service leads to an
          example of how the pieces can work together.
        </p>
      </div>
      <div className="service-grid">
        {services.map((item, index) => (
          <a
            href={`#solution-${item.solution}`}
            className="service-card"
            key={item.title}
          >
            <div className="service-card-top">
              <span className="service-icon">
                <Icon name={item.icon} />
              </span>
              <span className="card-number">0{index + 1}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="service-card-bottom">
              <span>{item.action}</span>
              <Arrow diagonal />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
