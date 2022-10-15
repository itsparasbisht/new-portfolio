import Image from "next/image";
import React from "react";
import styles from "./bored.module.css";
import feelingsImg from "../../assets/feelings.svg";

function Bored() {
  return (
    <div className={styles.container}>
      <h3>
        Feeling bored! <br /> get some recommendations ;)
      </h3>
      <button>Suggest Something to do</button>
      <Image
        src={feelingsImg}
        alt="If you are bored I can suggest you some things to do"
        className={styles.images}
      />
    </div>
  );
}

export default Bored;
