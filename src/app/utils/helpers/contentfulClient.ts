import { createClient } from "contentful";
import { TypeLandingPageFields, TypeLandingPageSkeleton } from "../types/ContentfulTypes";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getImage = async (id: string) => {
  const image = contentfulClient.getAsset(id);
  return getImage;
};

export const getLandingPages = async () => {
  const landingPages = await contentfulClient.getEntries<TypeLandingPageSkeleton>({
    content_type: "landingPage",
  });
  return landingPages;
};
