import { Arrow, Eyebrow, Icon } from "./ui";

const services = [
  {
    icon: "code",
    title: "Enterprise software",
    desc: "Robust platforms, connected APIs, and scalable architectures that power your business.",
    tags: "PLATFORMS / APIs / CLOUD",
  },
  {
    icon: "spark",
    title: "AI & automation",
    desc: "Make your data work harder with intelligent workflows and AI built around your needs.",
    tags: "AI / MACHINE LEARNING / AUTOMATION",
  },
  {
    icon: "signal",
    title: "Telemetry & simulation",
    desc: "Turn real-time data into clarity with precision analytics and high-performance simulations.",
    tags: "REAL-TIME / ANALYTICS / SIMULATION",
  },
  {
    icon: "mobile",
    title: "Mobile engineering",
    desc: "Thoughtful mobile experiences with the reliability and performance your users expect.",
    tags: "iOS / ANDROID / CROSS-PLATFORM",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="section services-section container">
      <div className="section-heading">
        <div>
          <Eyebrow number="01">OUR CAPABILITIES</Eyebrow>
          <h2>
            Great ideas deserve
            <br />
            exceptional engineering<span className="accent">.</span>
          </h2>
        </div>
        <p>
          From the systems behind the scenes to the experiences in your hands,
          we build every layer with purpose.
        </p>
      </div>
      <div className="service-grid">
        {services.map((item, index) => (
          <a
            href={`#${index === 3 ? "contact" : "solutions"}`}
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
              <span>{item.tags}</span>
              <Arrow diagonal />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
