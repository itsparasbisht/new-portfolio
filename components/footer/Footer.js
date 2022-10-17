import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import jsLogo from "../../assets/javascript.png";
import reactLogo from "../../assets/react.png";

function Footer() {
  return (
    <>
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
          <h5>Recommendations</h5>
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
          <h5>Links</h5>
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
        <div className={styles.contact}>
          <h5>Contact</h5>
          <a href="tel:+919528350042">+91 9528350042</a>
          <a href="mailto:iamparasbisht@gmail.com">iamparasbisht@gmail.com</a>
        </div>
        <div className={styles.info}>
          <h5>This website is built using Next.Js</h5>
        </div>
      </div>
      <div className={styles.footerLast}>
        <Image src={jsLogo} alt="javascript logo" />
        <Image src={reactLogo} alt="reactJs logo" />
      </div>
    </>
  );
}

export default Footer;
