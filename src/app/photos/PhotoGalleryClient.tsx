"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import type { PhotoMeta } from "../../lib/photos";
import {
  BATCH_SIZE,
  PRIORITY_COUNT,
  cloudinaryLoader,
  photoFullSrc,
  photoBlurUrl,
} from "../../lib/photos";
import { useInfiniteScroll } from "./useInfiniteScroll";

/** Breakpoints mirroring Tailwind: sm:640, md:768, xl:1280, 2xl:1536, 1800 */
const BREAKPOINTS = [
  { min: 1800, cols: 6 },
  { min: 1536, cols: 5 },
  { min: 1280, cols: 4 },
  { min: 768, cols: 3 },
  { min: 640, cols: 2 },
] as const;

function getColumnCount(width: number): number {
  for (const bp of BREAKPOINTS) {
    if (width >= bp.min) return bp.cols;
  }
  return 2;
}

export default function PhotoGalleryClient({
  photos,
}: {
  photos: PhotoMeta[];
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [columnCount, setColumnCount] = useState(2);

  // Track viewport width for column count
  useEffect(() => {
    const update = () => setColumnCount(getColumnCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { visible, hasMore, loadTriggerRef } = useInfiniteScroll({
    total: photos.length,
    batchSize: BATCH_SIZE,
    rootMargin: "600px",
  });

  const visiblePhotos = photos.slice(0, visible);

  // Distribute photos round-robin across columns to preserve row-first order
  const columns = useMemo(() => {
    const cols: { photo: PhotoMeta; index: number }[][] = Array.from(
      { length: columnCount },
      () => [],
    );
    visiblePhotos.forEach((photo, i) => {
      cols[i % columnCount].push({ photo, index: i });
    });
    return cols;
  }, [visiblePhotos, columnCount]);

  const slides = useMemo(
    () =>
      photos.map((p) => ({
        src: photoFullSrc(p),
        width: p.width,
        height: p.height,
        description: p.caption,
      })),
    [photos],
  );

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  return (
    <>
      <div className="px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex gap-5">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-5">
              {col.map(({ photo, index }) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  index={index}
                  priority={index < PRIORITY_COUNT}
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Infinite scroll load trigger */}
      {hasMore && (
        <div
          ref={loadTriggerRef}
          className="flex items-center justify-center py-12"
          aria-hidden="true"
        >
          <LoadingSpinner />
        </div>
      )}

      <Lightbox
        open={lightboxOpen}
        index={lightboxIndex}
        slides={slides}
        close={closeLightbox}
        plugins={[Captions, Zoom]}
        zoom={{ maxZoomPixelRatio: 3, scrollToZoom: true }}
        captions={{
          descriptionTextAlign: "center",
          descriptionMaxLines: 3,
        }}
        carousel={{ padding: "60px 0px 80px 0px" }}
        animation={{ fade: 300 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}

function PhotoCard({
  photo,
  index,
  priority,
  onClick,
}: {
  photo: PhotoMeta;
  index: number;
  priority: boolean;
  onClick: () => void;
}) {
  return (
    <article
      className="group overflow-hidden rounded-2xl relative cursor-pointer"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View photo: ${photo.caption || `Photo ${index + 1}`}`}
    >
      <Image
        loader={cloudinaryLoader}
        src={photo.id}
        alt={photo.caption || `Photo ${index + 1}`}
        width={photo.width}
        height={photo.height}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
        priority={priority}
        placeholder="blur"
        blurDataURL={photoBlurUrl(photo)}
      />

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 flex items-end pointer-events-none">
        <div className="w-full px-4 pb-4 pt-10 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {photo.caption && (
            <p className="text-[13px] leading-snug text-white/90 line-clamp-3">
              {photo.caption}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex items-center gap-2 text-stone-400" role="status">
      <svg
        className="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="text-xs">Loading more photos…</span>
    </div>
  );
}
