import Image from "next/image";
import { Info } from "lucide-react";

const posts = [
  {
    src: "/posts/linkedin-post-1.png",
    link: "https://www.linkedin.com/posts/paras-bisht_javascript-webdevelopment-reactjs-activity-7352246302740529152-L9xl?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtnJAEBHMf74hZ38eH405ZE5J-3j5BI0NM",
    title: "Do you understand this behavior in JavaScript?",
  },
  {
    src: "/posts/linkedin-post-2.png",
    link: "https://www.linkedin.com/posts/paras-bisht_webdevelopment-reactjs-javascript-activity-7328082842691731457-GFA_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtnJAEBHMf74hZ38eH405ZE5J-3j5BI0NM",
    title: "TypeScript Utility Types",
  },
  {
    src: "/posts/linkedin-post-3.png",
    link: "https://www.linkedin.com/posts/paras-bisht_reactjs-javascript-webdevelopment-activity-7294363342222069760-t55c?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtnJAEBHMf74hZ38eH405ZE5J-3j5BI0NM",
    title: "useLayoutEffect() Hook in ReactJS",
  },
  {
    src: "/posts/linkedin-post-4.png",
    link: "https://www.linkedin.com/posts/paras-bisht_javascript-reactjs-git-activity-7316122229866389505-SDkV?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtnJAEBHMf74hZ38eH405ZE5J-3j5BI0NM",
    title: "Timeline feature",
  },
  {
    src: "/posts/linkedin-post-5.png",
    link: "https://www.linkedin.com/posts/paras-bisht_unicode-webdev-programming-activity-7241047583320596480-_P27?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtnJAEBHMf74hZ38eH405ZE5J-3j5BI0NM",
    title: "What is Unicode and UTF-8?",
  },
  {
    src: "/posts/linkedin-post-6.png",
    link: "https://www.linkedin.com/posts/paras-bisht_reactjs-javascript-webdevelopment-activity-7256682704333615109-GXIJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtnJAEBHMf74hZ38eH405ZE5J-3j5BI0NM",
    title: "useRef() - Beyond DOM Access",
  },
];

export default function Posts() {
  return (
    <section>
      <h1 className="text-5xl font-serif text-stone-800 tracking-tight">
        My LinkedIn Posts
      </h1>
      <p className="mt-8 leading-relaxed text-[15px] text-stone-600 max-w-prose">
        A collection of my thoughts, project updates, and career insights shared
        on LinkedIn. Click on any post to view the original.
      </p>
      <div className="columns-1 md:columns-2 gap-8 mt-10">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-rose-100 mb-8 border border-rose-300"
            style={{ breakInside: "avoid-column" }}
          >
            <Image
              src={post.src}
              alt={post.title}
              width={540}
              height={960}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center text-lg font-medium p-4">
                {post.title}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-rose-50 p-3 text-stone-800">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-rose-500" />
          </div>
          <div className="ml-2 flex-1">
            <p className="text-sm">
              To view more posts, visit my{" "}
              <a
                href="https://www.linkedin.com/in/paras-bisht"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-rose-600 hover:underline"
              >
                LinkedIn profile
              </a>
              . Feel free to connect and engage!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
