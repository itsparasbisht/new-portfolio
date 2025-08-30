import { IoMail, IoDocument } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ArrowUpRight, Info } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="text-stone-600">
      <h1 className="text-5xl font-serif text-stone-800 tracking-tight">
        Paras Bisht
      </h1>
      <p className="font-medium mt-3 text-rose-600">
        Software Developer on Planet Earth
      </p>

      <p className="mt-8 leading-relaxed text-[15px]">
        I am a{" "}
        <span className="relative inline-block group px-1 mx-0.5">
          <span className="absolute inset-0 -skew-y-3 bg-amber-100/50 rounded opacity-70 group-hover:bg-amber-100 transition-all duration-300"></span>
          <span className="relative text-amber-900 font-medium">
            software developer
          </span>
        </span>{" "}
        with over 4 years of experience in building
        <span className="relative inline-block group px-1 mx-0.5">
          <span className="absolute inset-0 -skew-y-3 bg-teal-100/50 rounded opacity-70 group-hover:bg-teal-100 transition-all duration-300"></span>
          <span className="relative text-teal-900 font-medium">
            data‑driven solutions
          </span>
        </span>{" "}
        across domains such as{" "}
        <span className="relative inline-block group px-1 mx-0.5">
          <span className="absolute inset-0 -skew-y-3 bg-blue-100/50 rounded opacity-70 group-hover:bg-blue-100 transition-all duration-300"></span>
          <span className="relative text-blue-900 font-medium">
            wind engineering
          </span>
        </span>
        ,{" "}
        <span className="relative inline-block group px-1 mx-0.5">
          <span className="absolute inset-0 -skew-y-3 bg-violet-100/50 rounded opacity-70 group-hover:bg-violet-100 transition-all duration-300"></span>
          <span className="relative text-violet-900 font-medium">
            automotive
          </span>
        </span>{" "}
        providers, and{" "}
        <span className="relative inline-block group px-1 mx-0.5">
          <span className="absolute inset-0 -skew-y-3 bg-emerald-100/50 rounded opacity-70 group-hover:bg-emerald-100 transition-all duration-300"></span>
          <span className="relative text-emerald-900 font-medium">
            geospatial data
          </span>
        </span>{" "}
        entities. <br />I have been adept at{" "}
        <span className="relative inline-block group px-1 mx-0.5">
          <span className="absolute inset-0 -skew-y-3 bg-fuchsia-100/50 rounded opacity-70 group-hover:bg-fuchsia-100 transition-all duration-300"></span>
          <span className="relative text-fuchsia-900 font-medium">
            brainstorming
          </span>
        </span>{" "}
        and{" "}
        <span className="relative inline-block group px-1 mx-0.5">
          <span className="absolute inset-0 -skew-y-3 bg-rose-100/50 rounded opacity-70 group-hover:bg-rose-100 transition-all duration-300"></span>
          <span className="relative text-rose-900 font-medium">
            rapid prototyping
          </span>
        </span>{" "}
        with cross‑functional teams to drive execution and deliver solutions.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:iamparasbisht@gmail.com"
          target="_blank"
          className="inline-flex items-center rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-300 hover:bg-red-100 hover:text-red-700"
        >
          <IoMail className="mr-2 text-base" />
          Mail
        </a>
        <a
          href="https://github.com/itsparasbisht"
          target="_blank"
          className="inline-flex items-center rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-300 hover:bg-gray-200 hover:text-gray-800"
        >
          <FaGithub className="mr-2 text-base" />
          GitHub
        </a>
        <a
          href="https://blogs-by-paras.netlify.app"
          target="_blank"
          className="inline-flex items-center rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-300 hover:bg-blue-100 hover:text-blue-700"
        >
          <IoDocument className="mr-2 text-base" />
          Blogs
        </a>
        <a
          href="https://www.linkedin.com/in/paras-bisht"
          target="_blank"
          className="inline-flex items-center rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-300 hover:bg-sky-100 hover:text-sky-700"
        >
          <FaLinkedinIn className="mr-2 text-base" />
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/itsparas.in"
          target="_blank"
          className="inline-flex items-center rounded-lg bg-stone-100 px-3 py-2 text-sm font-medium text-stone-600 transition-colors duration-300 hover:bg-pink-100 hover:text-pink-700"
        >
          <GrInstagram className="mr-2 text-base" />
          Instagram
        </a>
      </div>

      <h3 className="mt-8 mb-6 text-2xl font-serif text-stone-800">
        Personal Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group relative">
          <a
            href="https://earth-population.netlify.app/"
            target="_blank"
            className="block overflow-hidden rounded-xl border border-stone-200 bg-stone-50 p-6 transition-all duration-300 group-hover:border-rose-300 group-hover:shadow-lg group-hover:shadow-rose-100"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0,theme(colors.rose.100/40%),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="relative h-full">
              <h3 className="text-lg font-medium text-stone-800 mb-2 flex items-center">
                Earth Chronicle
                <ArrowUpRight className="ml-1.5 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                An in-depth examination of global population trends, fertility
                patterns, and demographic shifts.
              </p>
            </div>
          </a>
          <a
            href="https://github.com/itsparasbisht/earth-population"
            target="_blank"
            className="absolute top-4 right-4 z-10 text-stone-400 transition-colors hover:text-rose-600"
            aria-label="View Code on GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>

        <div className="group relative">
          <a
            href="https://divine-explorer.netlify.app/"
            target="_blank"
            className="block overflow-hidden rounded-xl border border-stone-200 bg-stone-50 p-6 transition-all duration-300 group-hover:border-violet-300 group-hover:shadow-lg group-hover:shadow-violet-100"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0,theme(colors.violet.100/40%),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="relative h-full">
              <h3 className="text-lg font-medium text-stone-800 mb-2 flex items-center">
                Divine Explorer
                <ArrowUpRight className="ml-1.5 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                Take a look at the destinations that you may wish to visit in
                Uttarakhand.
              </p>
            </div>
          </a>
          <a
            href="https://github.com/itsparasbisht/leaflet-init"
            target="_blank"
            className="absolute top-4 right-4 z-10 text-stone-400 transition-colors hover:text-violet-600"
            aria-label="View Code on GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>

        <div className="group relative md:col-span-2">
          <a
            href="https://md-note.netlify.app/"
            target="_blank"
            className="block overflow-hidden rounded-xl border border-stone-200 bg-stone-50 p-6 transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-lg group-hover:shadow-blue-100"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0,theme(colors.blue.100/40%),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="relative h-full">
              <h3 className="text-lg font-medium text-stone-800 mb-2 flex items-center">
                React Markdown App
                <ArrowUpRight className="ml-1.5 h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </h3>
              <p className="text-sm leading-relaxed text-stone-600">
                Minimal looking note-taking application with markdown support.
                Includes theme toggle, edit notes, tags.
              </p>
            </div>
          </a>
          <a
            href="https://github.com/itsparasbisht/react-notes-app"
            target="_blank"
            className="absolute top-4 right-4 z-10 text-stone-400 transition-colors hover:text-blue-600"
            aria-label="View Code on GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </div>

      <h3 className="mt-8 mb-6 text-2xl font-serif text-stone-800">
        Certificates
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-stone-200 bg-stone-100 p-3 transition-all duration-300 hover:border-stone-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/fcc.svg"
                alt="freeCodeCamp logo"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold text-stone-800 text-sm">
                  Responsive Design
                </p>
                <p className="text-sm text-stone-600">freeCodeCamp</p>
              </div>
            </div>
            <a
              href="https://www.freecodecamp.org/certification/parasbisht/responsive-web-design"
              target="_blank"
              className="inline-flex items-center text-xs font-medium text-stone-500 hover:text-stone-700"
            >
              Verify <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-stone-100 p-3 transition-all duration-300 hover:border-stone-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/HackerRank.png"
                alt="HackerRank logo"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold text-stone-800 text-sm">
                  JavaScript
                </p>
                <p className="text-sm text-stone-600">HackerRank</p>
              </div>
            </div>
            <a
              href="https://www.hackerrank.com/certificates/9dc418ef7658"
              target="_blank"
              className="inline-flex items-center text-xs font-medium text-stone-500 hover:text-stone-700"
            >
              Verify <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-stone-100 p-3 transition-all duration-300 hover:border-stone-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/HackerRank.png"
                alt="HackerRank logo"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold text-stone-800 text-sm">ReactJS</p>
                <p className="text-sm text-stone-600">HackerRank</p>
              </div>
            </div>
            <a
              href="https://www.hackerrank.com/certificates/d418255f8700"
              target="_blank"
              className="inline-flex items-center text-xs font-medium text-stone-500 hover:text-stone-700"
            >
              Verify <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-stone-100 p-3 transition-all duration-300 hover:border-stone-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/HackerRank.png"
                alt="HackerRank logo"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold text-stone-800 text-sm">CSS</p>
                <p className="text-sm text-stone-600">HackerRank</p>
              </div>
            </div>
            <a
              href="https://www.hackerrank.com/certificates/6a291fdbcecf"
              target="_blank"
              className="inline-flex items-center text-xs font-medium text-stone-500 hover:text-stone-700"
            >
              Verify <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-stone-100 p-3 transition-all duration-300 hover:border-stone-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/HackerRank.png"
                alt="HackerRank logo"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold text-stone-800 text-sm">SQL</p>
                <p className="text-sm text-stone-600">HackerRank</p>
              </div>
            </div>
            <a
              href="https://www.hackerrank.com/certificates/00dafe57cbb7"
              target="_blank"
              className="inline-flex items-center text-xs font-medium text-stone-500 hover:text-stone-700"
            >
              Verify <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
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
