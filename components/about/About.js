import React from "react";
import styles from "./about.module.css";
import { BiLogoGmail, BiSolidPhoneCall, BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

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
              &#34;development is fun :) especially with JavaScript&#34;
            </span>
            ,
            <span>
              {" "}
              <br /> 7
            </span>{" "}
            &nbsp; &nbsp; &nbsp; skills:{" "}
            <span className={styles.objString}>
              <span className={styles.curlyBraces}>[</span>&#34;Javascript&#34;,
              &#34;ES-6&#34;, &#34;ReactJs&#34;, &#34;NextJs&#34;,
              &#34;RestfulAPI&#34;,
              <br /> &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
              &nbsp; &#34;MERN&#34;, &#34;Git&#34;, &#34;PostgreSQL&#34;
              <span className={styles.curlyBraces}>]</span>
            </span>
            ,
            <br />
            <span>8</span> &nbsp; &nbsp; &nbsp; location:{" "}
            <span className={styles.objString}>
              &#34;Almora, Uttarakhand&#34;
            </span>
            , <br />
            <span>9</span> &nbsp; &nbsp; &nbsp; start_date:{" "}
            <span className={styles.objString}>&#34;2020-10-01&#34;</span>
            , <br /> <span>10</span> &nbsp;{" "}
            <span className={styles.curlyBraces}>&#125;</span>
          </p>
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.cardProfile}>
          <div className={styles.profileDetails}>
            <h3>Paras Bisht</h3>
            <h4>
              JavaScript Developer <br /> Frontend <br /> Team Lead
            </h4>
          </div>
          <div className={styles.profileFooter}>
            <a
              href="mailto:iamparasbisht@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGmail />
            </a>
            <a href="tel:+919528350042" target="_blank" rel="noreferrer">
              <BiSolidPhoneCall />
            </a>
            <a
              href="https://www.linkedin.com/in/paras-bisht"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoLinkedin />
            </a>
            <a
              href="https://github.com/itsparasbisht"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
