import { posthog } from "posthog-js";
import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
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

        <li className={styles.blogs_link}>
          <a
            href="https://blogs-by-paras.netlify.app/"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              posthog.capture("guest_opened_blogs");
            }}
          >
            Blogs by me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
