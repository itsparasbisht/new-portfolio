import Image from "next/image";
import React from "react";
import styles from "./showProjects.module.css";
import projectImage from "../../assets/projects/project1.png";

function ShowProjects() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <Image
          src={projectImage}
          alt="This is Paras Bisht, the creator of this website."
        />
      </div>
      <div className={styles.box2}>
        <h3>Google Docs Clone</h3>
        <p>
          The fully functional Google Docs Clone, made using ReactJS and
          WebSockets. Supports live doc editing feature and the usual word
          editing features.
        </p>
        <div className={styles.btnCtr}>
          <button>View Site</button>
          <button>GitHub</button>
        </div>
      </div>
    </div>
  );
}

export default ShowProjects;
