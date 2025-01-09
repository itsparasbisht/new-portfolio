import React from "react";
import styles from "./oldPortfolio.module.css";
import oldPortfolio from "../../assets/old-portfolio.png";
import Image from "next/image";
import { posthog } from "posthog-js";

function OldPortfolio() {
  return (
    <div className={styles.container}>
      <a
        href="https://portfolio-parasbisht.web.app/"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#276CE2" }}
      >
        While you&apos;re here, checkout my old portfolio website /--
      </a>

      <div
        onClick={() => {
          posthog.capture("guest_visited_old_portfolio");
          window.open("https://portfolio-parasbisht.web.app/");
        }}
      >
        <Image
          src={oldPortfolio}
          alt="Website design with a light blue background featuring a stylized fountain pen nib icon in the center. The text reads 'this is paras' in bold, with 'self made self taught' above and 'web designer & developer' below. Navigation links for 'about,' 'projects,' and 'contact' are located in the top-right corner."
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
}

export default OldPortfolio;
