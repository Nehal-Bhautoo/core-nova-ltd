import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Arrow, Icon } from "../components/ui";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Cove — A place for your people | CoreNova Technologies",
  description:
    "Meet Cove, a self-hosted desktop app for friends. Private groups, direct messages, voice and video calls, and screen sharing on a host you control.",
};

const features = [
  {
    title: "Keep the conversation going",
    description:
      "Group text channels and one-to-one messages, with saved history, replies, reactions, mentions, and file sharing. Search past conversations and pin the things you want to find again.",
  },
  {
    title: "Drop into the lounge",
    description:
      "Join a voice room with up to eight people. Turn on your camera, share a window or screen, and keep talking while you show what you’re working on.",
  },
  {
    title: "Make it feel like your place",
    description:
      "Choose a personal light or dark theme. Give your group its own colors, image, and animated header, and customize your profile with a photo, status, and background.",
  },
  {
    title: "Plan the next get-together",
    description:
      "Create group events, add a time and location, and see who’s coming with RSVPs. Event times appear in each person’s time zone.",
  },
  {
    title: "Choose when to be interrupted",
    description:
      "Set notifications for all messages, mentions only, or silence. Do Not Disturb pauses desktop alerts; clicking a notification takes you to the conversation.",
  },
  {
    title: "Keep your circle manageable",
    description:
      "Invite friends into private groups. Owners and admins can manage channels, appearance, invites, and moderation, with ownership transfer when your group changes hands.",
  },
];

const steps = [
  {
    title: "Choose your host",
    description:
      "One friend runs Cove on their computer, selects “Use this computer,” creates an account, and starts a group. Keep that computer awake and Cove open while everyone is connected.",
  },
  {
    title: "Bring your friends in",
    description:
      "On the same trusted network, friends select the host under Nearby hosts or enter its address. Everyone creates an account on that host and joins the group using an invite.",
  },
  {
    title: "Make yourself at home",
    description:
      "Start a text conversation or join a voice room. Allow microphone access, enable your camera when you want, and choose a window or screen to share.",
  },
];

const questions = [
  {
    question: "Does Cove need a subscription?",
    answer:
      "There’s no required subscription or paid relay service built into Cove. You supply the host computer and network connection. Optional internet hosting or relay infrastructure can have its own costs.",
  },
  {
    question: "Can friends connect from different places?",
    answer:
      "Yes, with a reachable host over an encrypted private VPN or an HTTPS setup. An invite alone doesn’t make a local address reachable. Some networks also need a TURN relay for calls; remote setup is something your group manages.",
  },
  {
    question: "What happens when the host closes Cove?",
    answer:
      "Everyone disconnects. Accounts and saved messages remain on the host for the next session. A disconnected call releases its devices and must be rejoined after reconnecting.",
  },
  {
    question: "Which platforms does the project target?",
    answer:
      "The initial desktop distribution targets Windows x64. The source also supports an Apple Silicon Mac packaging command and a standalone host with a browser interface. Browser microphone, camera, and screen capture require HTTPS or localhost.",
  },
  {
    question: "What should I know about the current version?",
    answer:
      "Cove is an initial self-hosted version for a trusted private circle. Windows builds are unsigned, so they may show a trust warning. There are no automatic updates, offline push notifications, custom roles, threads, or bots in this version.",
  },
];

const coveEmail =
  "mailto:contact@corenova.tech?subject=Cove%20project%20enquiry";

export default function CovePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header isHomePage={false} />
      <main id="main-content" className={styles.page}>
        <section id="cove-top" className={`container ${styles.hero}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/#services">CoreNova projects</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Cove</span>
          </nav>
          <div className={styles.heroLayout}>
            <div>
              <div className={styles.wordmark}>
                <svg
                  viewBox="0 0 24 24"
                  width="54"
                  height="54"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M3 16c3-9 6-9 9 0 3-9 6-9 9 0M3 20h18" />
                </svg>
                <span>Cove</span>
              </div>
              <h1>
                A place for
                <br />
                <span className="hero-serif">your people.</span>
              </h1>
              <p className={styles.intro}>
                Catch up, jump into a call, share what’s on your screen. A
                self-hosted desktop home for a small circle of friends.
              </p>
              <div className={styles.actions}>
                <a className="button" href="#features">
                  Explore Cove <Arrow />
                </a>
                <a className="text-link" href="#setup">
                  How hosting works <Arrow diagonal />
                </a>
              </div>
            </div>
            <aside className={styles.summary} aria-label="Project at a glance">
              <p>
                Private groups.
                <br />
                Hosted by you.
                <br />
                <span>No subscriptions.</span>
              </p>
              <dl>
                <div>
                  <dt>Project</dt>
                  <dd>Desktop chat & calls</dd>
                </div>
                <div>
                  <dt>Hosting</dt>
                  <dd>Your group’s computer</dd>
                </div>
                <div>
                  <dt>Initial platform</dt>
                  <dd>Windows x64</dd>
                </div>
                <div>
                  <dt>Source license</dt>
                  <dd>MIT</dd>
                </div>
              </dl>
              <a className="text-link" href="#privacy">
                Understand the privacy model <Arrow diagonal />
              </a>
            </aside>
          </div>
          <nav className={styles.sectionNav} aria-label="Cove page sections">
            <a href="#features">Features</a>
            <a href="#setup">Getting started</a>
            <a href="#privacy">Hosting & privacy</a>
            <a href="#questions">Questions</a>
          </nav>
        </section>
        <figure className={`container ${styles.preview}`}>
          <Image
            src="/cove/app-preview.png"
            alt="Cove’s group conversation interface, with text channels, a Lounge voice room, messages, and a member list."
            width={1280}
            height={800}
            sizes="(max-width: 800px) 100vw, 1280px"
            preload
          />
          <figcaption>
            <span>
              The Cove app, running with fictional demo accounts and messages.
            </span>
            <a href="#setup">
              See how to get started <Arrow diagonal />
            </a>
          </figcaption>
        </figure>
        <section id="features" className={`container ${styles.section}`}>
          <div className={styles.sectionHeading}>
            <h2>
              Good company.
              <br />
              Everything to stay connected.
            </h2>
            <p>
              From a quick message to a shared screen, Cove brings your group’s
              everyday conversations into one place.
            </p>
          </div>
          <div className={styles.features}>
            {features.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="setup" className={styles.setup}>
          <div className={`container ${styles.section}`}>
            <div className={styles.sectionHeading}>
              <h2>
                One host.
                <br />
                Your whole circle.
              </h2>
              <p>
                Cove connects everyone to the same host. Start on a trusted
                local network; add remote connectivity when your group needs it.
              </p>
            </div>
            <ol className={styles.steps}>
              {steps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <div className={styles.setupNote}>
              <Icon name="layers" />
              <div>
                <h3>Running from source</h3>
                <p>
                  With Node.js 20 or later, run <code>npm ci</code> and{" "}
                  <code>npm start</code> in the Cove repository to launch the
                  desktop app. Use <code>npm run server</code> for a standalone
                  host.
                </p>
                <a
                  className="text-link"
                  href="mailto:contact@corenova.tech?subject=Cove%20build%20and%20source%20access"
                >
                  Ask about builds & source access <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="privacy"
          className={`container ${styles.section} ${styles.privacy}`}
        >
          <div>
            <h2>
              Your host.
              <br />
              Know what that means.
            </h2>
            <p>
              Cove is designed for a trusted group of friends. Self-hosting puts
              the data on your chosen computer and makes that host part of your
              trust model.
            </p>
          </div>
          <div className={styles.privacyDetails}>
            <article>
              <h3>Messages live on the host</h3>
              <p>
                Chat is not end-to-end encrypted. The host can read stored
                messages and files. Direct conversations are restricted to their
                two participants in the app, but that does not make them hidden
                from the host.
              </p>
            </article>
            <article>
              <h3>Use a trusted, protected connection</h3>
              <p>
                Local HTTP does not encrypt account or message traffic. Use it
                only on a trusted private network. Remote access needs an
                encrypted private VPN or HTTPS; don’t expose a plain HTTP host
                to the internet.
              </p>
            </article>
            <article>
              <h3>Back up your group’s data</h3>
              <p>
                Saved accounts, groups, messages, and files depend on the host.
                Back up its data while Cove is closed. This version has no
                email-based password recovery or password-reset screen.
              </p>
            </article>
          </div>
        </section>
        <section
          id="questions"
          className={`container ${styles.section} ${styles.questions}`}
        >
          <h2>A few things to know.</h2>
          <div>
            {questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="contact" className={`container ${styles.contact}`}>
          <div>
            <h2>Want to know more about Cove?</h2>
            <p>
              Get in touch about the project, its setup, or where it’s heading.
            </p>
          </div>
          <a className="button" href={coveEmail}>
            Ask about Cove <Arrow diagonal />
          </a>
        </section>
      </main>
      <Footer isHomePage={false} />
    </>
  );
}
