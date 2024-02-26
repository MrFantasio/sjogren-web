import { Metadata, ResolvingMetadata } from "next";
import {
  contentfulClient,
  getLandingPages,
} from "../utils/helpers/contentfulClient";
import { TypeLandingPageSkeleton } from "../utils/types/ContentfulTypes";
import { notFound } from "next/navigation";
import RichText from "../contentful/RichText";

interface LandingPageParams {
  slug: string;
}
interface LandingPageProps {
  params: LandingPageParams;
}
export async function generateStaticParams(): Promise<LandingPageParams[]> {
  const landingPages = await getLandingPages();
  return landingPages.items.map((page) => ({ slug: page.fields.slug }));
}

export async function generateMetadata(
  { params }: LandingPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const pageData = await contentfulClient
    .getEntries<TypeLandingPageSkeleton>({
      content_type: "landingPage",
    })
    .then(
      (arr) => arr.items.filter((page) => page.fields.slug === params.slug)[0]
    );

  if (!pageData) {
    return notFound();
  }
  return { title: pageData.fields.title };
}
export default async function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const pageData = await contentfulClient
    .getEntries<TypeLandingPageSkeleton>({
      content_type: "landingPage",
    })
    .then(
      (arr) => arr.items.filter((page) => page.fields.slug === params.slug)[0]
    );
  if (!pageData) {
    return notFound();
  }
  return (
    <div className="h-full mx-64 flex flex-col m-8 gap-4">
      <h1 className="text-2xl mx-auto">{pageData.fields.title}</h1>
      <p>{pageData.fields.landingText}</p>
      <RichText document={pageData.fields.landingText}/> 
    </div>
  );
}
