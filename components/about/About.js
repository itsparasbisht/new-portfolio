import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import reactLogo from "../../assets/React.webp";
import jsLogo from "../../assets/Javascript-logo.png";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.aboutBox}>
          <div className={styles.aboutHead}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>
            <span>1</span> &nbsp;{" "}
            <span className={styles.curlyBraces}>&#123;</span> <br />{" "}
            <span>2</span> &nbsp; &nbsp; &nbsp; first_name:{" "}
            <span className={styles.objString}>&#34;paras&#34;</span>, <br />{" "}
            <span>3</span> &nbsp; &nbsp; &nbsp; last_name:{" "}
            <span className={styles.objString}>&#34;bisht&#34;</span>, <br />{" "}
            <span>4</span> &nbsp; &nbsp; &nbsp; gender:{" "}
            <span className={styles.objString}>&#34;male&#34;</span>, <br />{" "}
            <span>5</span> &nbsp; &nbsp; &nbsp; is_developer:{" "}
            <span className={styles.objBoolean}>true</span>,
            <br /> <span>6</span> &nbsp; &nbsp; &nbsp; description:{" "}
            <span className={styles.objString}>
              &#34;development is fun :) especially with JavaScript&#34; <br />{" "}
            </span>{" "}
            <span>7</span> &nbsp;{" "}
            <span className={styles.curlyBraces}>&#125;</span>
          </p>
        </div>
      </div>
      <div className={styles.box2}>
        {/* <div className={styles.logoCtr}>
          <Image alt="react official logo" src={reactLogo} />
        </div> */}
        <div>
          <Image alt="javascript logo" src={jsLogo} />
        </div>
      </div>
    </div>
  );
}

export default About;
