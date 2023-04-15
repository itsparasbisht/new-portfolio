import styles from "../styles/Home.module.css";
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
import projectsList from "../utils/projectsList";
import Lottie from "lottie-react";
import heroGif from "../assets/hero-gif.json";
import OldPortfolio from "../components/oldPortfolio/OldPortfolio";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main>
        <div className={styles.container}>
          <div className={styles.box1}>
            <h1>I&apos;m Paras</h1>
            <h3>
              I specialize in JavaScript development and have professional
              working experience as a frontend dev with ReactJS. I also have
              experience working with the MERN stack. <br /> I am a dedicated
              fellow who is interested in building solutions by coordinating
              with teams.
            </h3>
          </div>
          <div className={styles.box2}>
            <Lottie
              className={styles.heroGif}
              animationData={heroGif}
              loop={true}
            />
          </div>
        </div>

        <About />

        <Carousel
          infiniteLoop
          autoPlay
          swipeable={false}
          interval={3000}
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
      </main>

      <div>
        <div className={styles.projects}>
          <div></div>
          <h3>PROJECTS</h3>
          <div></div>
        </div>

        <ShowProjects
          title={projectsList.p1.title}
          technologies={projectsList.p1.technologies}
          imageUrl={projectsList.p1.imageUrl}
          about={projectsList.p1.about}
          liveLink={projectsList.p1.liveLink}
          githubLink={projectsList.p1.githubLink}
        />
        <ShowProjects
          title={projectsList.p2.title}
          technologies={projectsList.p2.technologies}
          imageUrl={projectsList.p2.imageUrl}
          about={projectsList.p2.about}
          liveLink={projectsList.p2.liveLink}
          githubLink={projectsList.p2.githubLink}
          flip
        />
        <ShowProjects
          title={projectsList.p3.title}
          technologies={projectsList.p3.technologies}
          imageUrl={projectsList.p3.imageUrl}
          about={projectsList.p3.about}
          liveLink={projectsList.p3.liveLink}
          githubLink={projectsList.p3.githubLink}
        />

        <div className={styles.projectEnd}></div>

        <OldPortfolio />

        <Bored />
        <Quote />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
