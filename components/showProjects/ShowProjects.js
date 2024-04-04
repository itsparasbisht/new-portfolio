import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./showProjects.module.css";

function ShowProjects({
  flip,
  title,
  technologies,
  imageUrl,
  about,
  liveLink,
  githubLink,
}) {
  const openLink = (link) => {
    console.log(link);
    window.open(link, "_blank");
  };

  return (
    <div
      id="projects-section"
      style={{
        backgroundColor: flip ? "#050400" : "",
        color: flip ? "white" : "black",
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.box1}>
          <Image src={imageUrl} alt={title} width={"650"} height={"350"} />
        </div>
        <div className={styles.box2}>
          <h3>{title}</h3>
          <h5>
            {"</> "}
            {technologies}
          </h5>
          <p>{about}</p>
          <div className={styles.btnCtr}>
            <button onClick={() => openLink(liveLink)}>View Site</button>
            <button onClick={() => openLink(githubLink)}>GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProjects;
