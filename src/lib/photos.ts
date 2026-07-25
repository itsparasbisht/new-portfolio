export type PhotoMeta = {
  id: string;
  width: number;
  height: number;
  caption: string;
};

import photosData from "./photos.json";

export const PHOTOS: PhotoMeta[] = photosData as PhotoMeta[];

export function photoSrc(photo: PhotoMeta) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return `https://res.cloudinary.com/${cloudName}/image/upload/w_1600,c_limit,dpr_auto,q_auto,f_auto/${photo.id}.jpg`;
}

export default PHOTOS;
