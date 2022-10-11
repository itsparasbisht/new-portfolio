import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import myProfileImage from "../assets/web-dev.gif";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import ShowCertificates from "../components/showCertificates/ShowCertificates";
import freeCodeCampCf from "../assets/certificates/freeCodeCamp.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box1}>
          <h1>I&apos;m Paras</h1>
          <h3>Here to develop awesome stuff :)</h3>
        </div>
        <div className={styles.box2}>
          <Image
            src={myProfileImage}
            alt="This is Paras Bisht, the creator of this website."
            className={styles.images}
          />
        </div>
      </div>
      <About />
      <ShowCertificates
        imgLink={freeCodeCampCf}
        heading="freeCodeCamp"
        about="abcd"
        verifyLink={""}
      />
    </>
  );
}
