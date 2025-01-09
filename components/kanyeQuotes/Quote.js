import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./quote.module.css";
import kanyeImg from "../../assets/kanye.jpg";
import { posthog } from "posthog-js";

function Quote() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    try {
      posthog.capture("guest_clicked_quote");

      fetch("https://api.kanye.rest/").then((response) => {
        response.json().then((data) => {
          setQuote(data.quote);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src={kanyeImg}
          alt="Kanye West"
          className={styles.images}
          placeholder="blur"
          priority
        />
        <p>
          {`"${quote}"`} <br />{" "}
          <button className={styles.custom_btn} onClick={() => getQuote()}>
            api.kanye.rest
          </button>{" "}
        </p>
      </div>
    </div>
  );
}

export default Quote;
