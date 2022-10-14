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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A beatae
          aliquam odio minus aspernatur praesentium temporibus ipsam, ducimus
          fugit
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
