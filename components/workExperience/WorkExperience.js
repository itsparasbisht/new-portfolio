import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import icon from "../../assets/icons/briefcase-business.svg";

export default function WorkExperience() {
  return (
    <div className={styles.wrapper}>
      <h3>
        <Image
          src={icon}
          alt="briefcase icon"
          width={40}
          height={40}
          placeholder="blur"
          priority
        />
        Work Experience
      </h3>
      <h4>SirpiDataScience</h4>

      <p>
        I joined Sirpi in October 2021. The initial days were very important for
        me, as I was learning a lot as a developer, and working with diverse
        teams helped me develop my soft skills. Since then, I have contributed
        to multiple projects and gained valuable experience from them.
      </p>

      <p>
        The projects I worked on were data-driven solutions. Some of the major
        projects that I contributed to are:
      </p>

      <p>
        <b>Wind Farm Monitoring Dashboard Application for Wind Clients: </b>I
        collaborated with a cross-functional team in an Agile environment to
        develop a user-centric dashboard for wind engineers. Designed and built
        over 30 reusable React components, enhancing the scalability and
        flexibility of the dashboard. Automated the generation of weekly
        reports, facilitating critical decision-making for wind system
        optimization.
      </p>

      <p>
        <b>Centralized Data Platform for Refurbished Automotive Providers: </b>
        We delivered a web and Android application to serve as a central data
        aggregator, optimizing the management of used vehicle data. Integrated
        features such as in-app notifications, dynamic filters, data import &
        export capabilities, and media handling. Utilized Apache ECharts to
        create interactive data visualizations, enabling critical insights for
        precise vehicle pricing evaluations and driving smarter decision-making
        processes.
      </p>

      <p>
        <b>
          GIS & Temporal Data Visualization Web Application for a Data Exchange
          Entity:{" "}
        </b>
        I collaborated with my team of three developers to build an advanced
        data visualization web application. Delivered a solution to efficiently
        manage and visualize complex geospatial and temporal data.
      </p>

      <p>
        With over three years at this company, I now also have experience in
        managing teams and taking full ownership of project development. I have
        also conducted interviews to hire budding developers, and together we
        are working on newer projects that are helping companies in their
        digital transformation with data and visualization.
      </p>
    </div>
  );
}
