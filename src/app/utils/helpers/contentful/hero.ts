import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { contentfulClient } from "../contentfulClient";
import { TypeHeroSkeleton } from "../../types/ContentfulTypes";
import { ContentImage, parseContentfulContentImage } from "./contentImage";


type HeroEntry = Entry<TypeHeroSkeleton, undefined, string>;

export interface Hero {
  title: string;
  image: ContentImage | null;
  text: string | null;
}

export function parseContentfulHero(
  heroEntry?: HeroEntry
): Hero | null {
  if (!heroEntry) {
    return null;
  }

  return {
    title: heroEntry.fields.title || "",
    image: parseContentfulContentImage(heroEntry.fields.heroImage),
    text: heroEntry.fields.welcomeText || null

  };
}

export async function fetchGallery(id: string): Promise<Hero | null> {
  const galleryResult = await contentfulClient.getEntry<TypeHeroSkeleton>(
    id
  );
  return parseContentfulHero(galleryResult);
}
