import { Arrow, Eyebrow } from "./ui";

export function About() {
  return (
    <section id="about" className="section container about-section">
      <div className="about-intro">
        <div>
          <Eyebrow number="03">THE CORENOVA APPROACH</Eyebrow>
          <h2>
            Thoughtful by design.
            <br />
            <span className="hero-serif">Exceptional by nature.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            We’re engineers, problem solvers, and people who care about getting
            the details right. We bring deep technical thinking and a practical
            understanding of your business to every project.
          </p>
          <p>
            Our philosophy is simple: build with purpose, design for the long
            term, and make the complex feel effortless.
          </p>
          <a href="#contact" className="text-link">
            Meet your next technology partner <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="process-grid">
        {[
          {
            title: "Understand deeply",
            desc: "Your vision is our starting point. We ask the right questions and get to the heart of the challenge.",
          },
          {
            title: "Engineer thoughtfully",
            desc: "Clear architecture, deliberate decisions, and the right technology for the problem at hand.",
          },
          {
            title: "Build for tomorrow",
            desc: "Reliable today. Adaptable tomorrow. Systems designed to keep moving your business forward.",
          },
        ].map((step, index) => (
          <div className="process-step" key={step.title}>
            <span className="process-number">
              0{index + 1}
              <span> /</span>
            </span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
