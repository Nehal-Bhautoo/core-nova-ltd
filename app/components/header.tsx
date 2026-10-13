"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Arrow, Brand } from "./ui";

const links = [
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "/cove", label: "Cove" },
  { href: "#about", label: "About us" },
];

export function Header({ isHomePage = true }: { isHomePage?: boolean }) {
  const destination = (href: string) =>
    !isHomePage && href.startsWith("#") ? `/${href}` : href;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href={destination("#home")}
          aria-label="CoreNova Technologies home"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={destination(link.href)}
              className={
                (isHomePage && active === link.href) ||
                (!isHomePage && link.href === "/cove")
                  ? "active"
                  : ""
              }
              aria-current={
                !isHomePage && link.href === "/cove"
                  ? "page"
                  : isHomePage && active === link.href
                    ? "location"
                    : undefined
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={destination("#contact")}
          className="button button-small header-cta"
        >
          Let’s talk <Arrow diagonal />
        </Link>
        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className={open ? "menu-lines is-open" : "menu-lines"}>
            <span />
            <span />
          </span>
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {[...links, { href: "#contact", label: "Let’s talk ↗" }].map((link) => (
          <Link
            key={link.href}
            href={destination(link.href)}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
