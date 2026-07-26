import type { Metadata } from "next";
import PHOTOS from "../../lib/photos";
import PhotoGalleryClient from "./PhotoGalleryClient";

export const metadata: Metadata = {
  title: "Photos - Paras Bisht",
  description:
    "A curated collection of photography moments, shared as a visual journal with occasional captions.",
  alternates: {
    canonical: "https://paras-bisht.netlify.app/photos",
  },
  openGraph: {
    title: "Photos - Paras Bisht",
    description:
      "A curated collection of photography moments, shared as a visual journal with occasional captions.",
    url: "https://paras-bisht.netlify.app/photos",
    images: [
      {
        url: "https://paras-bisht.netlify.app/paras-profile-photo.jpg",
        width: 800,
        height: 800,
        alt: "Profile photo of Paras Bisht",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photos - Paras Bisht",
    description:
      "A curated collection of photography moments, shared as a visual journal with occasional captions.",
    images: ["https://paras-bisht.netlify.app/paras-profile-photo.jpg"],
  },
};

export default function PhotosPage() {
  return (
    <section>
      <div className="mb-10 max-w-2xl mx-auto px-6 sm:px-8">
        <h1 className="text-3xl font-serif tracking-tight text-stone-800">
          Frames in focus
        </h1>
        <p className="mt-5 leading-relaxed text-[15px] text-stone-700">
          An archive of moments I decided to freeze. These are gentle little
          pauses in time: a quiet corner, a golden afternoon glow, or a view
          that persuaded me to stop walking. There&apos;s no grand artistic
          thesis here, just a few frames of reality before time kept moving.
        </p>
      </div>

      <PhotoGalleryClient photos={PHOTOS} />
    </section>
  );
}
