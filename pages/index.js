import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import ShowCertificates from "../components/showCertificates/ShowCertificates";
import freeCodeCampCf from "../assets/certificates/freeCodeCamp.png";
import digitalMarketingCf from "../assets/certificates/digitalMarketing.png";
import javascriptCf from "../assets/certificates/javascript.jpg";
import reactJsCf from "../assets/certificates/reactJs.jpg";
import cssCf from "../assets/certificates/css.png";
import sqlCf from "../assets/certificates/sql-basics.png";
import hackerRankLogo from "../assets/companyLogos/hackerRankLogo.png";
import freeCodeCampLogo from "../assets/companyLogos/freeCodeCampLogo.png";
import googleLogo from "../assets/companyLogos/googleLogo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ShowProjects from "../components/showProjects/ShowProjects";
import Bored from "../components/bored/Bored";
import Quote from "../components/kanyeQuotes/Quote";
import Footer from "../components/footer/Footer";
import projectsList from "../utils/projectsList";
import OldPortfolio from "../components/oldPortfolio/OldPortfolio";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import heroImage from "../assets/hero-image.png";
import Image from "next/image";

export default function Home() {
  const customPrevArrow = (onClickHandler, hasPrev) => (
    <button className="prev-btn" onClick={onClickHandler} disabled={!hasPrev}>
      <GrCaretPrevious />
    </button>
  );

  const customNextArrow = (onClickHandler, hasNext) => (
    <button className="next-btn" onClick={onClickHandler} disabled={!hasNext}>
      <GrCaretNext />
    </button>
  );
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
              working experience as a frontend dev with ReactJS. My experience
              also extends to full-stack web app development. <br /> I&apos;m
              interested in building solutions and teams. <br />
              Feel free to connect :&#41;
            </h3>
          </div>
          <div className={styles.box2}>
            <Image src={heroImage} alt="" width={600} height={600} />
          </div>
        </div>

        <About />

        <div className="carousel-container">
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            swipeable={false}
            interval={5000}
            showThumbs={false}
            showStatus={false}
            renderArrowPrev={customPrevArrow}
            renderArrowNext={customNextArrow}
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
              verifyLink={
                "https://www.hackerrank.com/certificates/9dc418ef7658"
              }
            />
            <ShowCertificates
              imgLink={reactJsCf}
              logo={hackerRankLogo}
              about="React Basics Certification"
              verifyLink={
                "https://www.hackerrank.com/certificates/d418255f8700"
              }
            />
            <ShowCertificates
              imgLink={cssCf}
              logo={hackerRankLogo}
              about="CSS Certification"
              verifyLink={
                "https://www.hackerrank.com/certificates/6a291fdbcecf"
              }
            />
            <ShowCertificates
              imgLink={sqlCf}
              logo={hackerRankLogo}
              about="SQL Basics Certification"
              verifyLink={
                "https://www.hackerrank.com/certificates/00dafe57cbb7"
              }
            />
            <ShowCertificates
              imgLink={digitalMarketingCf}
              logo={googleLogo}
              about="Fundamentals of Digital Marketing Certification"
              verifyLink={
                "https://learndigital.withgoogle.com/link/1qsdpcedm9s"
              }
            />
          </Carousel>
        </div>
      </main>

      <div>
        <div className={styles.projects}>
          <div></div>
          <h3>PROJECTS</h3>
          <div></div>
        </div>

        {projectsList.map((project) => (
          <ShowProjects
            key={project.id}
            title={project.title}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            about={project.about}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
            flip={project.id % 2 === 0}
          />
        ))}

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
