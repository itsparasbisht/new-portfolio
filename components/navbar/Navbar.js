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
            width="30"
            height="30"
            src={githubIcon}
          />{" "}
          GitHub
        </li>
        <li>
          {" "}
          <Image
            alt="view linkedin account"
            width="30"
            height="30"
            src={linkedIcon}
          />
          LinkedIn
        </li>
        <li>
          {" "}
          <Image
            alt="view some projects"
            width="30"
            height="30"
            src={bookIcon}
          />
          Projects
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
