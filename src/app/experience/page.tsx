import Image from "next/image";

const experiences = [
  {
    logo: "/experience/sirpi.jpg",
    company: "SirpiDataScience",
    roles: [
      {
        role: "Frontend Team Lead",
        duration: "Apr 2024 - Present",
        description: [
          "Scaled the frontend team by interviewing, hiring, and mentoring junior developers, helping them become productive members quickly.",
          "Led product development through regular client interaction and feedback sessions, ensuring feature direction aligned with real user needs.",
          "Designed process visuals (flowcharts) and set up team review sessions for clarifying requirements and resolving questions, boosting clarity and collective ownership.",
        ],
      },
      {
        role: "Software Engineer",
        duration: "Feb 2022 - Mar 2024",
        description: [
          "Rebuilt core React application with TypeScript, TailwindCSS, and TanStack Query; added component and end-to-end Cypress tests to raise code quality and reduce regression issues.",
          "Led development of vehicle-market data aggregator: integrated B2B/C2B and Excel sources, implemented filtering, real-time updates, media embedding, exports, and admin tools.",
          "Created a GIS web app for CDPG to visualize 50+ geospatial datasets, added import/export functionality, vector editing, and interactive tables; optimized performance via map tile lazy-loading and debounced search.",
        ],
      },
      {
        role: "Frontend Intern",
        duration: "Oct 2021 - Jan 2022",
        description: [
          "Delivered bi-weekly and monthly feature enhancements and resolved client-reported bugs in ReactJS wind-analysis apps, improving stability and reliability.",
          "Built interactive maps, data visualizations, and custom UI components using Redux for global state and Tailwind CSS, boosting usability.",
          "Collaborated with API, Data Science, and DevOps teams to define and implement key features, improving cross-team efficiency and communication.",
        ],
      },
    ],
  },
  {
    logo: "/experience/ku.png",
    company: "Kumaun University",
    roles: [
      {
        role: "Bachelors in Computer Applications",
        duration: "2018 - 2021",
        description: ["Graduated with 86%"],
      },
    ],
  },
  {
    logo: "/experience/aps.jpg",
    company: "Army Public School",
    roles: [
      {
        role: "Secondary Education",
        duration: "2016 - 2018",
        description: [
          "Secured 80% in Class 12th (PCM + CS).",
          "Achieved 9.3 CGPA in Class 10th.",
        ],
      },
    ],
  },
  {
    logo: "/experience/kv.jpg",
    company: "Kendriya Vidyalaya",
    roles: [
      {
        role: "Primary Education upto 5th Standard",
        duration: "2005 - 2013",
        description: [],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section>
      {/* Title, Description, and Photo */}
      <div>
        <h1 className="text-4xl font-serif text-stone-800 tracking-tight md:text-5xl">
          My Experience
        </h1>
        <p className="mx-auto mt-4 max-w-prose leading-relaxed text-[15px] text-stone-600">
          A timeline of my career and education, highlighting key roles,
          projects, and learning experiences.
        </p>
        <div className="mt-8 flex justify-center">
          <Image
            src="/profile-photo.jpg"
            alt="Paras Bisht"
            width={500}
            height={375}
            loading="eager"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAk6AAAJOgHwZJJKAAAAMklEQVR4nAEnANj/AHRzcgoAAGhVOv/pvACqrK2ZeFX/3Jv/9OAA+fn3iGxJoYJZ9vb2eHQWNZbQQjcAAAAASUVORK5CYII="
          />
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-16 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start gap-x-6">
            <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center">
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={42}
                height={42}
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">
                {exp.company}
              </h3>
              <div className="mt-2 space-y-6">
                {exp.roles.map((role, roleIndex) => (
                  <div key={roleIndex}>
                    <div className="flex flex-col items-start sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="font-medium text-stone-700">
                        {role.role}
                      </h4>
                      <span className="text-sm text-rose-600 sm:ml-2">
                        {role.duration}
                      </span>
                    </div>
                    {role.description.length > 0 && (
                      <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-stone-600">
                        {role.description.map((item, i) => (
                          <li key={i}>{item}</li>
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
