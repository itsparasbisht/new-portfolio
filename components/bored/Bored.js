import Image from "next/image";
import React, { useState } from "react";
import styles from "./bored.module.css";
import emojisImg from "../../assets/emojis.svg";

function Bored() {
  const [task, setTask] = useState("");

  const getTask = () => {
    try {
      fetch("http://www.boredapi.com/api/activity/").then((response) =>
        response.json().then((data) => {
          setTask(data?.activity);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h3>
        {task ? (
          task
        ) : (
          <>
            Feeling bored! <br /> get some recommendations ;)
          </>
        )}
      </h3>
      <button onClick={getTask}>Suggest Something to do</button>
      <div className={styles.emojis}>
        <Image
          src={emojisImg}
          alt="If you are bored I can suggest you some things to do"
          className={styles.images}
        />
      </div>
    </div>
  );
}

export default Bored;
