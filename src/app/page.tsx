import { IoMail, IoDocument } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ArrowUpRight, Info } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Earth Chronicle",
    description: "An in-depth examination of global population trends, fertility patterns, and demographic shifts.",
    link: "https://earth-population.netlify.app/",
    github: "https://github.com/itsparasbisht/earth-population",
  },
  {
    title: "npm i @paras.in/pui",
    description: "A React and TypeScript component library focused on complex workspace UI components.",
    link: "https://main--6a46985e273c71987463da96.chromatic.com/?path=/docs/components-fileexplorer--docs",
    github: "https://github.com/itsparasbisht/pui",
  },
  {
    title: "Divine Explorer",
    description: "Take a look at the destinations that you may wish to visit in Uttarakhand.",
    link: "https://divine-explorer.netlify.app/",
    github: "https://github.com/itsparasbisht/leaflet-init",
  },
  {
    title: "React Markdown App",
    description: "Minimal note-taking application with markdown support. Includes theme toggle, edit notes, tags.",
    link: "https://md-note.netlify.app/",
    github: "https://github.com/itsparasbisht/react-notes-app",
  },
];

const CERTIFICATES = [
  {
    title: "Responsive Design",
    issuer: "freeCodeCamp",
    logo: "/fcc.svg",
    verifyUrl: "https://www.freecodecamp.org/certification/parasbisht/responsive-web-design",
  },
  {
    title: "JavaScript",
    issuer: "HackerRank",
    logo: "/HackerRank.png",
    verifyUrl: "https://www.hackerrank.com/certificates/9dc418ef7658",
  },
  {
    title: "ReactJS",
    issuer: "HackerRank",
    logo: "/HackerRank.png",
    verifyUrl: "https://www.hackerrank.com/certificates/d418255f8700",
  },
  {
    title: "CSS",
    issuer: "HackerRank",
    logo: "/HackerRank.png",
    verifyUrl: "https://www.hackerrank.com/certificates/6a291fdbcecf",
  },
  {
    title: "SQL",
    issuer: "HackerRank",
    logo: "/HackerRank.png",
    verifyUrl: "https://www.hackerrank.com/certificates/00dafe57cbb7",
  },
  {
    title: "MongoDB",
    issuer: "MongoDB",
    logo: "/mongodb.jpg",
    verifyUrl: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/da3f2dcd-2cf5-4461-84d2-04b5f8a23b1d-paras-bisht-8042d27e-cd49-40c7-85d8-7657ae062c3b-certificate.pdf",
  },
];

export default function Home() {
  return (
    <section className="text-stone-600">
      <h1 className="text-3xl font-serif text-stone-800 tracking-tight">
        Paras Bisht
        <span className="block sm:inline font-medium text-[15px] text-rose-600 sm:ml-1 font-sans">
          <span className="hidden sm:inline">: </span>Software Developer on Planet Earth
        </span>
      </h1>

      <p className="mt-6 leading-relaxed text-[14px]">
        I am a software developer with over 5 years of experience building
        data‑driven solutions across domains such as wind engineering,
        automotive services, pricing, and geospatial data entities.
        <br /> <br />
        Over the years, I have been part of some incredible teams, and I am
        always eager to collaborate and build software that solves real-world
        needs for people and enterprises.
        <br /> <br />
        There is always more to learn, so whatever I find useful, I try to share
        it or write about it. I&apos;m always happy to connect, the links are
        below.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:iamparasbisht@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-300 hover:bg-red-100 hover:text-red-700"
        >
          <IoMail className="mr-2 text-base" />
          Mail
        </a>
        <a
          href="https://github.com/itsparasbisht"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-800"
        >
          <FaGithub className="mr-2 text-base" />
          GitHub
        </a>
        <a
          href="https://blogs-by-paras.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-300 hover:bg-orange-100 hover:text-orange-700"
        >
          <IoDocument className="mr-2 text-base" />
          Blogs
        </a>
        <a
          href="https://www.linkedin.com/in/paras-bisht"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-300 hover:bg-sky-100 hover:text-sky-700"
        >
          <FaLinkedinIn className="mr-2 text-base" />
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/itsparas.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-300 hover:bg-pink-100 hover:text-pink-700"
        >
          <GrInstagram className="mr-2 text-base" />
          Instagram
        </a>
      </div>

      <h2 className="mt-8 mb-6 text-2xl font-serif text-stone-800">
        Personal Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <article key={project.title} className="group relative">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-xl border border-stone-200 bg-stone-50 p-6 transition-colors duration-300 hover:bg-stone-100 hover:border-stone-300"
            >
              <div className="relative h-full">
                <h3 className="text-lg font-medium text-stone-800 mb-2 flex items-center">
                  {project.title}
                  <ArrowUpRight className="ml-1.5 h-4 w-4 text-stone-400 group-hover:text-stone-600 transition-colors" />
                </h3>
                <p className="text-sm leading-relaxed text-stone-600">
                  {project.description}
                </p>
              </div>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-10 text-stone-400 transition-colors hover:text-stone-800"
              aria-label="View Code on GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </article>
        ))}
      </div>

      <h2 className="mt-8 mb-6 text-2xl font-serif text-stone-800">
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CERTIFICATES.map((cert) => (
          <article key={cert.title} className="rounded-xl border border-stone-200 bg-stone-100 p-3 transition-all duration-300 hover:border-stone-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  width={40}
                  height={40}
                  loading="eager"
                />
                <div>
                  <p className="font-semibold text-stone-800 text-sm">
                    {cert.title}
                  </p>
                  <p className="text-sm text-stone-600">{cert.issuer}</p>
                </div>
              </div>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium text-stone-500 hover:text-stone-700"
              >
                Verify <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-rose-50 p-3 text-stone-800">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-rose-500" />
          </div>
          <div className="ml-2 flex-1">
            <p className="text-sm">
              I&apos;m always open to collaborating and connecting.{" "}
              <a
                href="mailto:iamparasbisht@gmail.com"
                className="font-medium text-rose-600 hover:underline"
              >
                Feel free to reach out!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
