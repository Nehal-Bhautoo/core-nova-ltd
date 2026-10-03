import { Arrow, Eyebrow } from "./ui";
import { CopyEmail } from "./copy-email";

const email = "contact@corenova.tech";
const projectEmail = `mailto:${email}?subject=${encodeURIComponent("Project enquiry — CoreNova")}&body=${encodeURIComponent(
  "Hi CoreNova,\n\nHere’s the project I’d like to discuss:\n\nWhat we’re building or trying to improve:\n\nOur current systems or tools:\n\nOur timeline (if known):\n\nThanks,\n",
)}`;

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
            Tell us what you’re building, the challenge you’re working on, and
            any timeline you have in mind.
          </p>
          <a
            className="button button-dark"
            href={projectEmail}
            aria-describedby="email-help"
          >
            Email us about your project <Arrow diagonal />
          </a>
          <p id="email-help" className="contact-help">
            Opens your email app with a project outline you can edit before
            sending.
          </p>
          <div className="contact-details">
            <a className="contact-email" href={`mailto:${email}`}>
              {email} <Arrow diagonal />
            </a>
            <CopyEmail email={email} />
          </div>
        </div>
      </div>
    </section>
  );
}
