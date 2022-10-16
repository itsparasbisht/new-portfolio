import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./quote.module.css";
import kanyeImg from "../../assets/kanye.jpg";

function Quote() {
  const [quote, setQuote] = useState();

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    try {
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
      <Image
        src={kanyeImg}
        alt="Website Development Animated Illustration"
        className={styles.images}
        placeholder="blur"
      />
      <p>
        {`"${quote}"`} <br />{" "}
        <span onClick={() => getQuote()}>api.kanye.rest</span>{" "}
      </p>
    </div>
  );
}

export default Quote;
