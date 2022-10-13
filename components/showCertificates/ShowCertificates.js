import React from "react";
import styles from "./showCertificates.module.css";
import Image from "next/image";

function ShowCertificates({ imgLink, logo, about, verifyLink }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgCtr}>
        <Image
          src={imgLink}
          alt="This is Paras Bisht, the creator of this website."
          placeholder="blur"
        />
      </div>
      <div className={styles.about}>
        <Image
          alt="This is Paras Bisht, the creator of this website."
          src={logo}
        />
        <h3>{about}</h3>
        <button>
          <a href={verifyLink} rel="noreferrer" target="_blank">
            verify
          </a>
        </button>
      </div>
    </div>
  );
}

export default ShowCertificates;
