import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import reactLogo from "../../assets/React.webp";
import jsLogo from "../../assets/Javascript-logo.png";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}></div>
      <div className={styles.box2}>
        <div className={styles.logoCtr}>
          <Image alt="react official logo" src={reactLogo} />
        </div>
        <div className={styles.logoCtr}>
          <Image alt="javascript logo" src={jsLogo} />
        </div>
      </div>
    </div>
  );
}

export default About;
