import { createClient } from "contentful";
import {
  TypeGallerySkeleton,
  TypeHeroSkeleton,
  TypeLandingPageFields,
  TypeLandingPageSkeleton,
} from "../types/ContentfulTypes";
import {
  LandingPage,
  parseContentfulLandingPage,
} from "@/app/utils/helpers/contentful/landingPages";
import { Gallery, parseContentfulGallery } from "./contentful/gallery";
import { parseContentfulHero, Hero } from "./contentful/hero";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getImage = async (id: string) => {
  const image = contentfulClient.getAsset(id);
  return getImage;
};

export async function fetchHero(id: string): Promise<Hero | null> {
  const hero = await contentfulClient.getEntry<TypeHeroSkeleton>(id);
  return parseContentfulHero(hero);
}

export const fetchLandingPages = async () => {
  const landingPages =
    await contentfulClient.getEntries<TypeLandingPageSkeleton>({
      content_type: "landingPage",
    });
  return landingPages.items.map(
    (landingPageEntry) =>
      parseContentfulLandingPage(landingPageEntry) as LandingPage
  );
};

export async function fetchGallery(id: string): Promise<Gallery | null> {
  const galleryResult = await contentfulClient.getEntry<TypeGallerySkeleton>(
    id
  );
  return parseContentfulGallery(galleryResult);
}
