"use client";

import { useEffect, useId, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "../data/projects";
import { Arrow } from "./ui";
import styles from "./project-dropdown.module.css";

export function ProjectDropdown({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const dropdown = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);
  const listId = useId();
  const pathname = usePathname();
  const isCurrentProject = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !dropdown.current?.contains(event.target)
      ) {
        if (dropdown.current) dropdown.current.open = false;
      }
    }
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  return (
    <details
      ref={dropdown}
      className={`${styles.dropdown} ${mobile ? styles.mobile : ""}`}
      data-current={projects.some((project) => isCurrentProject(project.href))}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          event.currentTarget.open = false;
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && event.currentTarget.open) {
          event.preventDefault();
          event.stopPropagation();
          event.currentTarget.open = false;
          trigger.current?.focus();
        }
      }}
    >
      <summary ref={trigger} className={styles.trigger} aria-controls={listId}>
        Projects
        <svg
          className={styles.chevron}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <ul id={listId} className={styles.panel} aria-label="Projects">
        {projects.map((project) => (
          <li key={project.href}>
            <Link
              className={styles.projectLink}
              href={project.href}
              aria-current={isCurrentProject(project.href) ? "page" : undefined}
              onClick={() => {
                if (dropdown.current) dropdown.current.open = false;
                onNavigate?.();
              }}
            >
              <span>
                <span className={styles.projectName}>{project.name}</span>
                <span className={styles.description}>
                  {project.description}
                </span>
              </span>
              <Arrow diagonal />
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
