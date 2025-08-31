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
        description: [],
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
        title: "Secondary Education, 10 + 2 (PCM + CS)",
        duration: "",
        description: [],
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
      <h1 className="text-5xl font-serif text-stone-800 tracking-tight">
        My Experience
      </h1>
      <p className="mt-8 leading-relaxed text-[15px] text-stone-600 max-w-prose">
        A timeline of my career and education, highlighting key roles, projects,
        and learning experiences.
      </p>
      <div className="mt-16 relative border-l-2 border-rose-100">
        {experience.map((item, index) => (
          <div key={index} className="mb-12 ml-12">
            <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 ring-8 ring-white">
              {item.type === "Work" ? (
                <Briefcase size={16} className="text-white" />
              ) : (
                <GraduationCap size={16} className="text-white" />
              )}
            </span>
            <div className="ml-4">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.logo}
                  alt={`${item.organization} logo`}
                  width={48}
                  height={48}
                  className="object-contain rounded-lg border border-stone-200 p-1"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-stone-900">
                    {item.organization}
                  </h3>
                  <p className="text-sm text-stone-500">{item.location}</p>
                </div>
              </div>
              <div className="space-y-8">
                {item.roles.map((role, roleIndex) => (
                  <div key={roleIndex}>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-stone-800 text-lg">
                        {role.title}
                      </h4>
                      {role.duration && (
                        <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-3 py-1 rounded-full">
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
          </div>
        ))}
      </div>
    </section>
  );
}
