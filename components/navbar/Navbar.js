import React from "react";
import styles from "./navbar.module.css";
import githubIcon from "../../assets/icons/github.png";
import linkedIcon from "../../assets/icons/linkedin.png";
import bookIcon from "../../assets/icons/open-book.png";
import Image from "next/image";

function Navbar() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Image
            alt="view github account"
            width="20"
            height="20"
            src={githubIcon}
          />{" "}
          <a
            href="https://github.com/itsparasbisht"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          {" "}
          <Image
            alt="view linkedin account"
            width="20"
            height="20"
            src={linkedIcon}
          />
          <a
            href="https://www.linkedin.com/in/paras-bisht"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          {" "}
          <Image
            alt="view some projects"
            width="20"
            height="20"
            src={bookIcon}
          />
          <a href="#projects-section">Projects</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
