import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

import { TypeLandingPageSkeleton } from "../../types/ContentfulTypes";
import { ContentImage, parseContentfulContentImage } from "./contentImage";
import { contentfulClient } from "../contentfulClient";

type LandingPageEntry = Entry<TypeLandingPageSkeleton, undefined, string>;

// Our simplified version of a BlogPost.
// We don't need all the data that Contentful gives us.
export interface LandingPage {
  title: string;
  slug: string;
  body: RichTextDocument | null;
  image: ContentImage | null;
}

// A function to transform a Contentful blog post
// into our own BlogPost object.
export function parseContentfulLandingPage(
  landingPageEntry?: LandingPageEntry
): LandingPage | null {
  if (!landingPageEntry) {
    return null;
  }

  return {
    title: landingPageEntry.fields.title || "",
    slug: landingPageEntry.fields.slug,
    body: landingPageEntry.fields.landingText || null,
    image: parseContentfulContentImage(landingPageEntry.fields.landingImage),
  };
}

export async function fetchLandingPages(): Promise<LandingPage[]> {
  const blogPostsResult =
    await contentfulClient.getEntries<TypeLandingPageSkeleton>({
      content_type: "landingPage",
      include: 2,
    });

  return blogPostsResult.items.map(
    (blogPostEntry) => parseContentfulLandingPage(blogPostEntry) as LandingPage
  );
}

interface FetchLandingPageOptions {
  slug: string;
}
export async function fetchLandingPage({
  slug,
}: FetchLandingPageOptions): Promise<LandingPage | null> {
  const landingPageResult = await contentfulClient
    .getEntries<TypeLandingPageSkeleton>({
      content_type: "landingPage",
      include: 2,
    })
    .then((arr) => arr.items.filter((p) => p.fields.slug === slug));
  return parseContentfulLandingPage(landingPageResult[0]);
}
