import Image from "next/image";
import { Info } from "lucide-react";

const posts = [
  { src: "/posts/linkedin-post-1.png" },
  { src: "/posts/linkedin-post-2.png" },
  { src: "/posts/linkedin-post-3.png" },
  { src: "/posts/linkedin-post-4.png" },
  { src: "/posts/linkedin-post-5.png" },
  { src: "/posts/linkedin-post-6.png" },
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
            href="#" // TODO: Replace with your LinkedIn post URL
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-rose-100 mb-8"
            style={{ breakInside: "avoid-column" }}
          >
            <Image
              src={post.src}
              alt={`Screenshot of LinkedIn post ${index + 1}`}
              width={540}
              height={960} // Assumes a 9:16 aspect ratio for placeholder
              className="w-full h-auto"
            />
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
