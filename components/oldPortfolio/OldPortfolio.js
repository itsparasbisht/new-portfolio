import React from "react";
import styles from "./oldPortfolio.module.css";
import oldPortfolio from "../../assets/old-portfolio.png";
import Image from "next/image";

function OldPortfolio() {
  return (
    <div className={styles.container}>
      <h3>{`While you're here, checkout my old portfolio website --`}</h3>
      <div>
        <Image src={oldPortfolio} alt="" />
      </div>
    </div>
  );
}

export default OldPortfolio;
