import React from "react";
import styles from "./showCertificates.module.css";
import Image from "next/image";

function ShowCertificates({ imgLink, heading, about, verifyLink }) {
  return (
    <div className={styles.container}>
      <Image
        src={imgLink}
        alt="This is Paras Bisht, the creator of this website."
        className={styles.certificate}
        placeholder="blur"
      />
    </div>
  );
}

export default ShowCertificates;
