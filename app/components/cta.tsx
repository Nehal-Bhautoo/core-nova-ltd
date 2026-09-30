import { Arrow, Eyebrow } from "./ui";

export function Cta() {
  return (
    <section id="contact" className="contact-section container">
      <div className="contact-card">
        <div className="contact-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="contact-copy">
          <Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
          <h2>
            Something great
            <br />
            starts with a conversation<span>.</span>
          </h2>
          <p>
            Have a challenge in mind? An idea worth exploring?
            <br />
            Let’s build what comes next, together.
          </p>
          <a className="button button-dark" href="mailto:contact@corenova.tech">
            Let’s talk about your project <Arrow diagonal />
          </a>
        </div>
        <a className="contact-email" href="mailto:contact@corenova.tech">
          contact@corenova.tech <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
