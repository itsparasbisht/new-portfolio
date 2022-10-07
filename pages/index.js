import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import myProfileImage from "../assets/profile.jpg";

console.log(myProfileImage);

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <h1>Paras here</h1>
        <h3>Javascript developer, since 2020</h3>
      </div>
      <div className={styles.box2}>
        <img
          src={
            "https://m.media-amazon.com/images/M/MV5BMTUxMzU2MTk1OF5BMl5BanBnXkFtZTgwNzg4NjAwMzI@._V1_.jpg"
          }
          alt=""
        />
      </div>
    </div>
  );
}
