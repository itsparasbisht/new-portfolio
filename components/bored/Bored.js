import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./bored.module.css";
import emojisImg from "../../assets/emojis.svg";
import { posthog } from "posthog-js";

function Bored() {
  const [task, setTask] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const getTask = () => {
    try {
      fetch("https://www.boredapi.com/api/activity/").then((response) =>
        response.json().then((data) => {
          setTask(data?.activity);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    posthog.onFeatureFlags(function () {
      if (posthog.isFeatureEnabled("suggestions-component")) {
        setIsEnabled(true);
      }
    });
  }, []);

  if (isEnabled) {
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
        <button onClick={getTask}>Suggest something to do</button>
        <div className={styles.emojis}>
          <Image
            src={emojisImg}
            alt="If you are bored I can suggest you some things to do"
            className={styles.images}
            placeholder="blur"
          />
        </div>
      </div>
    );
  }

  return null;
}

export default Bored;
