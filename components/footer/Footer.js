import React from "react";
import styles from "./footer.module.css";
import { posthog } from "posthog-js";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.resources}>
          <h4>Resources</h4>
          <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">
            freePik
          </a>
          <a href="https://dimmy.club" target="_blank" rel="noreferrer">
            mockUps
          </a>
          <a href="https://undraw.co" target="_blank" rel="noreferrer">
            unDraw
          </a>
          <a href="https://www.boredapi.com" target="_blank" rel="noreferrer">
            bored API
          </a>
          <a href="https://kanye.rest" target="_blank" rel="noreferrer">
            kanye.rest API
          </a>
          <a
            href="https://www.transhumans.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            Hero Image
          </a>
        </div>
        <div className={styles.recommendations}>
          <h4>Recommendations</h4>
          <a
            href="https://www.youtube.com/c/Freecodecamp"
            target="_blank"
            rel="noreferrer"
          >
            freeCodeCamp
          </a>
          <a
            href="https://www.youtube.com/c/HusseinNasser-software-engineering"
            target="_blank"
            rel="noreferrer"
          >
            Hussein Nasser
          </a>
          <a
            href="https://www.youtube.com/c/TraversyMedia"
            target="_blank"
            rel="noreferrer"
          >
            Traversy Media
          </a>
          <a
            href="https://www.youtube.com/c/WebDevSimplified"
            target="_blank"
            rel="noreferrer"
          >
            Web Dev Simplified
          </a>
          <a
            href="https://www.youtube.com/@t3dotgg"
            target="_blank"
            rel="noreferrer"
          >
            Theo Browne
          </a>
          <a href="https://dev.to/" target="_blank" rel="noreferrer">
            Dev
          </a>
        </div>
        <div className={styles.links}>
          <h4>Links</h4>
          <a
            href="https://github.com/parash-sirpi"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              posthog.capture("guest_opened_github_work");
            }}
          >
            GitHub | work
          </a>
          <a
            href="https://github.com/itsparasbisht"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              posthog.capture("guest_opened_github");
            }}
          >
            GitHub | personal
          </a>
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
          <a
            href="https://blogs-by-paras.netlify.app"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              posthog.capture("guest_opened_blogs");
            }}
          >
            Blogs
          </a>
        </div>
        <div className={styles.contact}>
          <h4>Contact</h4>
          <a href="tel:+919528350042">+91 9528350042</a>
          <a href="mailto:iamparasbisht@gmail.com">iamparasbisht@gmail.com</a>
        </div>
        <div className={styles.info}>
          <h5>Made by me and JavaScript</h5>
          <a
            href="https://github.com/itsparasbisht/new-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Code repository link
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
