import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    organization: "SirpiDataScience",
    roles: [
      {
        title: "Frontend Lead",
        duration: "Jul 2024 to present",
        description: [
          "Led the development and management of client-facing applications for a wind farm design platform using TypeScript, ReactJS, ShadCN, and Material React Table.",
          "Collaborated closely with backend teams to define system requirements and architecture.",
          "Mentored juniors and guiding them through technical challenges.",
          "Regularly supported team growth through interviews and onboarding of new developers.",
        ],
      },
      {
        title: "Software Engineer",
        duration: "Mar 2022 to Jun 2024",
        description: [
          "Revamped a production React app using TypeScript, TailwindCSS, and TanStack Query, with Cypress for testing.",
          "Built a vehicle-trading web app aggregating B2B/C2B data.",
          "Added features like Excel/third-party imports, filtering, exports, media integration, real-time updates, and admin tools.",
        ],
      },
      {
        title: "ReactJS Intern",
        duration: "Oct 2021 to Feb 2022",
        description: [
          "Delivered bi-weekly and monthly feature updates and bug fixes for wind analysis web apps.",
          "Built features with ReactJS, Redux, and Tailwind CSS, including custom components, interactive maps, and data visualizations.",
          "Collaborated with API, data science, and DevOps teams, enhancing cross-functional communication and teamwork.",
        ],
      },
    ],
    location: "Bengaluru (Remote)",
    logo: "/experience/sirpi.jpg",
    type: "Work",
  },
  {
    organization: "Kumaun University",
    roles: [
      {
        title: "Bachelors in Computer Applications",
        duration: "",
        description: ["Graduated with 86% (First Division with Honours)."],
      },
    ],
    location: "Almora (Uttarakhand)",
    logo: "/experience/ku.jpg",
    type: "Education",
  },
  {
    organization: "Army Public School",
    roles: [
      {
        title: "Secondary Education",
        duration: "",
        description: [
          "Secured 80% in Class 12th (PCM + CS).",
          "Achieved 9.3 CGPA in Class 10th.",
        ],
      },
    ],
    location: "Almora (Uttarakhand)",
    logo: "/experience/aps.jpg",
    type: "Education",
  },
  {
    organization: "Kendriya Vidyalaya",
    roles: [
      {
        title: "Primary Education upto 5th Standard",
        duration: "",
        description: [],
      },
    ],
    location: "Lokhra (Assam) -> Hisar (Haryana) -> Almora (Uttarakhand)",
    logo: "/experience/kv.jpg",
    type: "Education",
  },
];

export default function Experience() {
  return (
    <section>
      <h1 className="text-4xl font-serif text-stone-800 tracking-tight md:text-5xl">
        My Experience
      </h1>
      <p className="mt-8 leading-relaxed text-[15px] text-stone-600 max-w-prose">
        A timeline of my career and education, highlighting key roles, projects,
        and learning experiences.
      </p>
      <div className="mt-16 relative border-l-2 border-rose-100">
        {experience.map((item, index) => (
          <article key={index} className="mb-12 ml-8 md:ml-12">
            <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 ring-8 ring-white">
              {item.type === "Work" ? (
                <Briefcase size={16} className="text-white" />
              ) : (
                <GraduationCap size={16} className="text-white" />
              )}
            </span>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.logo}
                  alt={`${item.organization} logo`}
                  width={48}
                  height={48}
                  className="object-contain rounded-lg border border-stone-200 p-1"
                />
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 md:text-2xl">
                    {item.organization}
                  </h3>
                  <p className="text-sm text-stone-500">{item.location}</p>
                </div>
              </div>
              <div className="space-y-8">
                {item.roles.map((role, roleIndex) => (
                  <div key={roleIndex}>
                    <div className="mb-2 flex flex-col items-start sm:flex-row sm:items-center sm:gap-3">
                      <h4 className="font-bold text-stone-800 text-lg">
                        {role.title}
                      </h4>
                      {role.duration && (
                        <span className="mt-1 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-800 sm:mt-0">
                          {role.duration}
                        </span>
                      )}
                    </div>
                    {role.description.length > 0 && (
                      <ul className="list-disc list-inside space-y-1.5 text-sm text-stone-700">
                        {role.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
