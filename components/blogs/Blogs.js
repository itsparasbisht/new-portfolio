import Image from "next/image";
import React from "react";
import styles from "./blogs.module.css";
import heroImage from "../../assets/image.png";
import { posthog } from "posthog-js";

function Blogs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={heroImage}
            alt="A blog page header featuring a stylized illustration of a person with long hair and a white hoodie on the left, accompanied by a list of blog titles and their publication dates on the right. The blogs include topics like 'Earth Population Visualization, useRef() - Beyond DOM Access,' 'You should know Web Accessibility,' and 'What is Unicode and UTF-8?'. The design uses a dark theme with orange accents for headings."
            placeholder="blur"
            priority
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            <span
              style={{
                fontWeight: 900,
                fontSize: "3rem",
                color: "white",
              }}
            >
              Blogs by Paras,
            </span>{" "}
            here I share insights on topics I find interesting and hope they’ll
            be useful to you too.
          </p>
          <a
            href="https://blogs-by-paras.netlify.app/"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              posthog.capture("guest_opened_blogs");
            }}
          >
            <button>Visit blogs</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
