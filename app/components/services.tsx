import Link from "next/link";
import { Arrow, Eyebrow, Icon } from "./ui";

const services = [
  {
    icon: "code",
    href: "#solution-enterprise",
    title: "Enterprise software",
    desc: "Connect business tools and data through custom platforms, APIs, and cloud infrastructure.",
    action: "Explore enterprise systems",
  },
  {
    icon: "spark",
    href: "/cove",
    title: "Cove",
    desc: "A self-hosted desktop home for friends. Catch up in private chats, join a call, and share your screen.",
    action: "Discover the Cove project",
  },
  {
    icon: "signal",
    href: "#solution-telemetry",
    title: "Telemetry & simulation",
    desc: "Monitor live signals, visualize system behavior, and explore scenarios through simulation.",
    action: "Explore real-time systems",
  },
  {
    icon: "mobile",
    href: "#solution-mobile",
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
          example of how the pieces can work together, or explore Cove, our
          desktop project for friends.
        </p>
      </div>
      <div className="service-grid">
        {services.map((item, index) => (
          <Link href={item.href} className="service-card" key={item.title}>
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
          </Link>
        ))}
      </div>
    </section>
  );
}
