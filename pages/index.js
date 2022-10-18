import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import webDev from "../assets/web-dev.gif";
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
import ShowProjects from "../components/showProjects/ShowProjects";
import Bored from "../components/bored/Bored";
import Quote from "../components/kanyeQuotes/Quote";
import Footer from "../components/footer/Footer";

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
            unoptimized={true}
            src={webDev}
            alt="Website Development Animated Illustration"
            className={styles.images}
          />
        </div>
      </div>
      <About />
      <Carousel
        infiniteLoop
        autoPlay
        interval={3000}
        swipeable
        showThumbs={false}
      >
        <ShowCertificates
          imgLink={freeCodeCampCf}
          logo={freeCodeCampLogo}
          about="Responsive Web Design Certification"
          verifyLink={
            "https://www.freecodecamp.org/certification/parasbisht/responsive-web-design"
          }
        />
        <ShowCertificates
          imgLink={javascriptCf}
          logo={hackerRankLogo}
          about="Intermediate JavaScript Certification"
          verifyLink={"https://www.hackerrank.com/certificates/9dc418ef7658"}
        />
        <ShowCertificates
          imgLink={reactJsCf}
          logo={hackerRankLogo}
          about="React Basics Certification"
          verifyLink={"https://www.hackerrank.com/certificates/d418255f8700"}
        />
      </Carousel>
      <ShowProjects />
      <ShowProjects flip />
      <ShowProjects />
      <Bored />
      <Quote />
      <Footer />
    </>
  );
}
