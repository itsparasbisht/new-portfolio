import Image from "next/image";
import React from "react";
import styles from "./showProjects.module.css";
import projectImage from "../../assets/projects/project1.png";

function ShowProjects({
  flip,
  title,
  technologies,
  imageUrl,
  about,
  liveLink,
  githubLink,
}) {
  return (
    <div className={styles.container} id="projects-section">
      <div className={styles.box1} style={{ order: flip ? "2" : "0" }}>
        <Image src={imageUrl} alt={title} width={"600"} height={"400"} />
      </div>
      <div className={styles.box2}>
        <h3>{title}</h3>
        <h5>
          {"</> "}
          {technologies}
        </h5>
        <p>{about}</p>
        <div className={styles.btnCtr}>
          <button>View Site</button>
          <button>GitHub</button>
        </div>
      </div>
    </div>
  );
}

export default ShowProjects;
