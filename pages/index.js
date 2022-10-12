import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import myProfileImage from "../assets/web-dev.gif";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import ShowCertificates from "../components/showCertificates/ShowCertificates";
import freeCodeCampCf from "../assets/certificates/freeCodeCamp.png";
import javascriptCf from "../assets/certificates/javascript.jpg";
import reactJsCf from "../assets/certificates/reactJs.jpg";
import hackerRankLogo from "../assets/companyLogos/hackerRankLogo.png";
import freeCodeCampLogo from "../assets/companyLogos/freeCodeCampLogo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
      <Carousel infiniteLoop interval={3000} swipeable>
        <ShowCertificates
          imgLink={javascriptCf}
          logo={hackerRankLogo}
          about="Responsive Web Design Certification"
          verifyLink={""}
        />
        <ShowCertificates
          imgLink={freeCodeCampCf}
          logo={freeCodeCampLogo}
          about="Responsive Web Design Certification"
          verifyLink={""}
        />
        <ShowCertificates
          imgLink={reactJsCf}
          logo={hackerRankLogo}
          about="Responsive Web Design Certification"
          verifyLink={""}
        />
      </Carousel>
    </>
  );
}
