"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { PhotoMeta } from "../../lib/photos";
import { photoSrc } from "../../lib/photos";

export default function PhotoGalleryClient({
  photos,
}: {
  photos: PhotoMeta[];
}) {
  const [visible, setVisible] = useState(12);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const items = useMemo(
    () =>
      photos.map((p) => ({
        src: photoSrc(p),
        width: p.width,
        height: p.height,
        caption: p.caption,
      })),
    [photos],
  );

  return (
    <div>
      <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-x-6 space-y-6">
        {photos.slice(0, visible).map((photo, i) => (
          <article
            key={photo.id}
            className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl relative cursor-zoom-in"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={photoSrc(photo)}
              alt={photo.caption}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading={i === 0 ? "eager" : "lazy"}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
            />

            {photo.caption && (
              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="mt-1 text-xs text-white/90">{photo.caption}</p>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {visible < photos.length && (
        <div className="mt-8 text-center">
          <button
            className="inline-flex items-center rounded-lg border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm hover:bg-stone-50"
            onClick={() => setVisible((v) => Math.min(photos.length, v + 12))}
          >
            Load more
          </button>
        </div>
      )}

      <Lightbox
        open={open}
        index={index}
        slides={items}
        close={() => setOpen(false)}
      />
    </div>
  );
}
