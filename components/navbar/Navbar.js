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
          <a>GitHub</a>
        </li>
        <li>
          {" "}
          <Image
            alt="view linkedin account"
            width="20"
            height="20"
            src={linkedIcon}
          />
          <a>LinkedIn</a>
        </li>
        <li>
          {" "}
          <Image
            alt="view some projects"
            width="20"
            height="20"
            src={bookIcon}
          />
          <a>Projects</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
