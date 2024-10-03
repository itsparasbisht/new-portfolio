import Image from "next/image";
import { posthog } from "posthog-js";
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
    <div id="projects-section" className={flip ? styles.sectionFlip : null}>
      <div className={styles.wrapper}>
        <div className={styles.box1}>
          <Image src={imageUrl} alt={title} width={"650"} height={"350"} />
        </div>
        <div className={styles.box2}>
          <h3>{title}</h3>
          <h4>
            {"</> "}
            {technologies}
          </h4>
          <p>{about}</p>
          <div className={styles.btnCtr}>
            <button
              onClick={() => {
                posthog.capture("guest_opened_project", {
                  project_name: title,
                });
                openLink(liveLink);
              }}
            >
              View Site
            </button>
            <button
              onClick={() => {
                posthog.capture("guest_opened_github_repo", {
                  project_name: title,
                });
                openLink(githubLink);
              }}
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProjects;
