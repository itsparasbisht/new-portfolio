import React from "react";
import styles from "./showCertificates.module.css";
import Image from "next/image";
import { posthog } from "posthog-js";

function ShowCertificates({ imgLink, logo, about, verifyLink }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgCtr}>
        <Image src={imgLink} alt={about} placeholder="blur" priority />
      </div>
      <div className={styles.about}>
        <Image src={logo} alt={about} placeholder="blur" priority />
        <h3>{about}</h3>

        <a
          href={verifyLink}
          rel="noreferrer"
          target="_blank"
          onClick={() => {
            posthog.capture("guest_verified_certificate", {
              certificate: about,
            });
          }}
        >
          verify
        </a>
      </div>
    </div>
  );
}

export default ShowCertificates;
