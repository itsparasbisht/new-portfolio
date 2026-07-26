import photosData from "./photos.json";

export type PhotoMeta = {
  id: string;
  width: number;
  height: number;
  caption: string;
};

/** Default dimensions used as placeholder for aspect ratio reservation */
const DEFAULT_WIDTH = 1200;
const DEFAULT_HEIGHT = 900;

export const PHOTOS: PhotoMeta[] = (photosData as { id: string; caption: string; width?: number; height?: number }[]).map(
  (p) => ({
    id: p.id,
    width: p.width ?? DEFAULT_WIDTH,
    height: p.height ?? DEFAULT_HEIGHT,
    caption: p.caption,
  }),
);

export const BATCH_SIZE = 12;

export const PRIORITY_COUNT = 4;

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

/**
 * Next.js Image custom loader — delegates resizing and format negotiation
 * to Cloudinary's CDN. Uses q_auto:eco for aggressive compression
 * (typically 50-70 quality) keeping every image well under 1 MB.
 */
export function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const q = quality ? `q_${quality}` : "q_auto:eco";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},c_limit,${q},f_auto/${src}.jpg`;
}

/**
 * Full-resolution URL for the lightbox view.
 * w_1200,h_1200,c_limit fits the image within a 1200×1200 box
 * (longest side capped at 1200px) so both landscape and portrait
 * photos stay well under 1 MB.
 */
export function photoFullSrc(photo: PhotoMeta): string {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_1200,h_1200,c_limit,q_auto:eco,f_auto/${photo.id}.jpg`;
}

/**
 * Tiny blurred placeholder URL
 */
export function photoBlurUrl(photo: PhotoMeta): string {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_20,c_limit,q_10,f_auto,e_blur:800/${photo.id}.jpg`;
}

export default PHOTOS;
