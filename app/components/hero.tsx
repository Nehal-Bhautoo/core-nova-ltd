import { Arrow, Eyebrow } from "./ui";

function CoreVisual() {
  const dots = Array.from({ length: 17 }, (_, row) => {
    const latitude = ((row + 1) / 18) * Math.PI;
    return Array.from({ length: 34 }, (_, col) => {
      const longitude = (col / 34) * Math.PI * 2;
      const x = Math.sin(latitude) * Math.cos(longitude);
      const y = Math.cos(latitude);
      const z = Math.sin(latitude) * Math.sin(longitude);
      return (
        <circle
          key={`${row}-${col}`}
          cx={260 + x * 147}
          cy={250 + y * 147 + x * 27}
          r={z > 0 ? 1.4 : 0.8}
          fill={z > 0 ? "#a5ebca" : "#376c58"}
          opacity={z > 0 ? 0.8 : 0.4}
        />
      );
    });
  });
  return (
    <div
      className="core-visual"
      role="img"
      aria-label="An orbital network surrounding the CoreNova intelligent systems core"
    >
      <div className="visual-grid" />
      <div className="visual-topline">
        <span>
          <span className="status-dot" /> CORE SYSTEM / ONLINE
        </span>
        <span>CN—01</span>
      </div>
      <svg
        className="orbital-art"
        viewBox="0 0 520 510"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="core-glow">
            <stop stopColor="#6fddb0" stopOpacity=".16" />
            <stop offset="1" stopColor="#6fddb0" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="orbit-stroke"
            x1="70"
            y1="100"
            x2="470"
            y2="380"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b9f8d6" stopOpacity=".85" />
            <stop offset=".5" stopColor="#69bd99" stopOpacity=".12" />
            <stop offset="1" stopColor="#b9f8d6" stopOpacity=".65" />
          </linearGradient>
        </defs>
        <circle cx="260" cy="250" r="238" fill="url(#core-glow)" />
        <g className="orbit-rings">
          <ellipse
            cx="260"
            cy="250"
            rx="228"
            ry="83"
            transform="rotate(-28 260 250)"
            stroke="url(#orbit-stroke)"
          />
          <ellipse
            cx="260"
            cy="250"
            rx="213"
            ry="92"
            transform="rotate(38 260 250)"
            stroke="url(#orbit-stroke)"
          />
          <ellipse
            cx="260"
            cy="250"
            rx="193"
            ry="112"
            transform="rotate(82 260 250)"
            stroke="url(#orbit-stroke)"
            strokeDasharray="3 6"
          />
        </g>
        <circle cx="260" cy="250" r="149" stroke="#8fdbb3" strokeOpacity=".2" />
        {dots}
        <path d="M247 237h26m-13-13v26" stroke="#d2ffe4" strokeWidth="1.5" />
        <g fill="#bbfbd7">
          <circle cx="71" cy="359" r="4" />
          <circle cx="436" cy="355" r="4" />
          <circle cx="299" cy="63" r="3" />
        </g>
        <g stroke="#8bbba0" strokeOpacity=".4">
          <path d="M71 359v31h50M436 355v-32h30M299 63V43h-45" />
          <path d="M46 185v-12h12m404 252h12v-12" />
        </g>
      </svg>
      <div className="visual-tag tag-one">
        <span className="tag-dot" /> Neural intelligence
      </div>
      <div className="visual-tag tag-two">
        <span className="tag-dot" /> Connected infrastructure
      </div>
      <div className="visual-bottomline">
        <span>PRECISION AT EVERY LAYER</span>
        <span>ENGINEERED TO CONNECT</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>ENGINEERING WHAT’S NEXT</Eyebrow>
            <h1>
              Complex challenges.
              <br />
              <span className="hero-serif">Intelligent systems.</span>
            </h1>
            <p className="hero-description">
              We turn ambitious ideas into exceptional software. Purpose-built
              platforms, intelligent automation, and the engineering to bring it
              all together.
            </p>
            <div className="hero-actions">
              <a href="#solutions" className="button">
                Explore our solutions <Arrow />
              </a>
              <a href="#contact" className="text-link">
                Build with us <Arrow diagonal />
              </a>
            </div>
            <div className="hero-note">
              <span className="tiny-cross">+</span>
              <p>
                Built for your business.
                <br />
                <strong>Engineered for what comes next.</strong>
              </p>
            </div>
          </div>
          <CoreVisual />
        </div>
        <div className="container hero-bottom">
          <span>FROM THE FIRST IDEA TO THE NEXT BIG THING.</span>
          <a href="#services">
            Discover our capabilities <span>↓</span>
          </a>
        </div>
      </section>
      <div className="expertise-strip">
        <div className="container expertise-inner">
          <span className="expertise-label">OUR ENGINEERING DNA</span>
          {[
            "Software architecture",
            "Artificial intelligence",
            "Real-time systems",
            "Digital experiences",
          ].map((item) => (
            <span className="expertise-item" key={item}>
              <span>✳</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
