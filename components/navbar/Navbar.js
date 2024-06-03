import { posthog } from "posthog-js";
import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.github_link}>
          <a
            href="https://github.com/itsparasbisht"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              posthog.capture("guest_opened_github");
            }}
          >
            GitHub
          </a>
        </li>
        <li className={styles.linkedin_link}>
          <a
            href="https://www.linkedin.com/in/paras-bisht"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              posthog.capture("guest_opened_linkedin");
            }}
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.projects_link}>
          <a
            href="#projects-section"
            onClick={() => {
              posthog.capture("guest_clicked_projects");
            }}
          >
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
