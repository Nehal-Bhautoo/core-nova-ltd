import Link from "next/link";
import { Arrow, Brand } from "./ui";

export function Footer({ isHomePage = true }: { isHomePage?: boolean }) {
  const destination = (href: string) => (isHomePage ? href : `/${href}`);
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <div>
          <Link
            href={destination("#home")}
            aria-label="CoreNova Technologies home"
          >
            <Brand />
          </Link>
          <p>Good engineering. Greater possibilities.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href={destination("#services")}>Services</Link>
          <Link href={destination("#solutions")}>Solutions</Link>
          <Link href="/cove">Cove</Link>
          <Link href={destination("#about")}>About us</Link>
          <Link href={destination("#contact")}>
            Contact <Arrow diagonal />
          </Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 CoreNova Technologies Ltd. All rights reserved.</span>
        <a href={isHomePage ? "#home" : "#cove-top"}>
          Back to top <span>↑</span>
        </a>
      </div>
    </footer>
  );
}
