import { IoMail, IoDocument } from "react-icons/io5";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PiTextBBold } from "react-icons/pi";
import { GrInstagram } from "react-icons/gr";

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

      <div className="mt-4 space-x-4 text-sm">
        <a
          href="mailto:iamparasbisht@gmail.com"
          target="_blank"
          className="hover:underline"
        >
          <IoMail className="inline mb-1 mr-1 text-stone-400" />
          Mail
        </a>
        <a
          href="https://github.com/itsparasbisht"
          target="_blank"
          className="hover:underline"
        >
          <FaGithub className="inline mb-1 mr-1 ml-4 text-stone-400" />
          GitHub
        </a>
        <a
          href="https://blogs-by-paras.netlify.app"
          target="_blank"
          className="hover:underline"
        >
          <IoDocument className="inline mb-1 mr-1 ml-4 text-stone-400" />
          Blogs
        </a>
        <a
          href="https://www.linkedin.com/in/paras-bisht"
          target="_blank"
          className="hover:underline"
        >
          <FaLinkedinIn className="inline mb-1 mr-1 ml-4 text-stone-400" />
          LinkedIn
        </a>
        <a href="" target="_blank" className="hover:underline">
          <GrInstagram className="inline mb-1 mr-1 ml-4 text-stone-400" />
          Instagram
        </a>
      </div>
    </section>
  );
}
