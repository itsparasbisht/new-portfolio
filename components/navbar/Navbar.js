import { posthog } from "posthog-js";
import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <div>
        <a
          href="https://github.com/itsparasbisht"
          target="_blank"
          rel="noreferrer"
          className={styles.github_link}
          onClick={() => {
            posthog.capture("guest_opened_github");
          }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/paras-bisht"
          target="_blank"
          rel="noreferrer"
          className={styles.linkedin_link}
          onClick={() => {
            posthog.capture("guest_opened_linkedin");
          }}
        >
          LinkedIn
        </a>

        <a
          href="https://blogs-by-paras.netlify.app"
          target="_blank"
          rel="noreferrer"
          className={styles.blogs_link}
          onClick={() => {
            posthog.capture("guest_opened_blogs");
          }}
        >
          Blogs by me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
