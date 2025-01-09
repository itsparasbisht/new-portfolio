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
            alt="blogs by paras illustration"
            placeholder="blur"
            priority
          />
        </div>
        <div className={styles.textContainer}>
          <p>
            Here I share insights on topics I find interesting and hope they’ll
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
            <button>Blogs by Paras</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
