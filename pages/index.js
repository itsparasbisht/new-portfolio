import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import myProfileImage from "../assets/profile.jpg";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box1}>
          <h1>Paras here</h1>
          <h3>Here to develop awesome stuff :)</h3>
        </div>
        <div className={styles.box2}>
          <Image
            src={""}
            alt="This is Paras Bisht, the creator of this website."
            width="500"
            height="500"
            className={styles.images}
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
}
