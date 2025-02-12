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
    <div id="projects-section">
      <div className={styles.wrapper}>
        <div className={styles.box1}>
          <Image
            src={imageUrl}
            alt={title}
            width={"650"}
            height={"350"}
            priority
          />
        </div>
        <div className={styles.box2}>
          <h3>{title}</h3>
          <h4>
            {"</> "}
            {technologies}
          </h4>
          <p>{about}</p>
          <div className={styles.btnCtr}>
            <a
              href={liveLink}
              target="_blank"
              onClick={() => {
                posthog.capture("guest_opened_project", {
                  project_name: title,
                });
              }}
              rel="noreferrer"
              className={styles.liveBtn}
            >
              <span>View Site</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>

            <a
              href={githubLink}
              target="_blank"
              onClick={() => {
                posthog.capture("guest_opened_github_repo", {
                  project_name: title,
                });
              }}
              rel="noreferrer"
              className={styles.githubBtn}
            >
              <span>GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowProjects;
