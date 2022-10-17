import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.resources}>
        <h5>Resources</h5>
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
      </div>
      <div className={styles.recommendations}>
        <p>Recommendations</p>
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
        <a href="https://dev.to/" target="_blank" rel="noreferrer">
          Dev
        </a>
      </div>
      <div className={styles.links}>
        <p>Links</p>
        <a
          href="https://github.com/parash-sirpi"
          target="_blank"
          rel="noreferrer"
        >
          GitHub | work
        </a>
        <a
          href="https://github.com/itsparasbisht"
          target="_blank"
          rel="noreferrer"
        >
          GitHub | personal
        </a>
        <a
          href="https://www.linkedin.com/in/paras-bisht"
          target="_blank"
          rel="noreferrer"
        >
          linkedIn
        </a>
      </div>
      <div className={styles.contact}></div>
      <div className={styles.info}></div>
    </div>
  );
}

export default Footer;
