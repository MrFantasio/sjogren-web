import { Entry } from "contentful";
import { contentfulClient } from "../contentfulClient";
import { TypeGallerySkeleton } from "../../types/ContentfulTypes";
import { ContentImage, parseContentfulContentImage } from "./contentImage";

type GalleryEntry = Entry<TypeGallerySkeleton, undefined, string>;

export interface Gallery {
  title: string;
  images: (ContentImage | null)[];
}

export function parseContentfulGallery(
  galleryEntry?: GalleryEntry
): Gallery | null {
  if (!galleryEntry) {
    return null;
  }

  return {
    title: galleryEntry.fields.title || "",
    images: galleryEntry.fields.galleryImages.map((img) =>
      parseContentfulContentImage(img)
    )
  };
}
