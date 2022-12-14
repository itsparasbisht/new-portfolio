import React from "react";
import styles from "./oldPortfolio.module.css";
import oldPortfolio from "../../assets/old-portfolio.png";
import Image from "next/image";

function OldPortfolio() {
  return (
    <div className={styles.container}>
      <h3>
        While you&apos;re here, checkout my old
        <a
          href="https://portfolio-parasbisht.web.app/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#276CE2" }}
        >
          {" "}
          portfolio website /--
        </a>
      </h3>
      <div onClick={() => window.open("https://portfolio-parasbisht.web.app/")}>
        <Image src={oldPortfolio} alt="" />
      </div>
    </div>
  );
}

export default OldPortfolio;
