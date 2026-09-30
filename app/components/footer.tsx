import { Arrow, Brand } from "./ui";

export function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <div>
          <a href="#home" aria-label="CoreNova Technologies home">
            <Brand />
          </a>
          <p>Good engineering. Greater possibilities.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#about">About us</a>
          <a href="#contact">
            Contact <Arrow diagonal />
          </a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 CoreNova Technologies Ltd. All rights reserved.</span>
        <a href="#home">
          Back to top <span>↑</span>
        </a>
      </div>
    </footer>
  );
}
