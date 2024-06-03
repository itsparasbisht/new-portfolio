import { posthog } from "posthog-js";
import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul>
        <a
          href="https://github.com/itsparasbisht"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            posthog.capture("guest_opened_github");
          }}
        >
          <li className={styles.github_link}>GitHub</li>
        </a>

        <a
          href="https://www.linkedin.com/in/paras-bisht"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            posthog.capture("guest_opened_linkedin");
          }}
        >
          <li className={styles.linkedin_link}>LinkedIn</li>
        </a>

        <a
          href="#projects-section"
          onClick={() => {
            posthog.capture("guest_clicked_projects");
          }}
        >
          <li className={styles.projects_link}>Projects</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
