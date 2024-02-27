import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import {
  contentfulClient,
  fetchLandingPages,
} from "../utils/helpers/contentfulClient";
import {
  TypeLandingPageFields,
  TypeLandingPageSkeleton,
} from "../utils/types/ContentfulTypes";
import { notFound } from "next/navigation";
import RichText from "../contentful/RichText";
import { fetchLandingPage } from "../contentful/landingPages";
import { draftMode } from "next/headers";

interface LandingPageParams {
  slug: string;
}
interface LandingPageProps {
  params: LandingPageParams;
}
export async function generateStaticParams(): Promise<LandingPageParams[]> {
  const landingPages = await fetchLandingPages();
  return landingPages.map((page) => ({ slug: page.slug }));
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
  const landingPage = await fetchLandingPage({ slug: params.slug });

  if (!landingPage) {
    return notFound();
  }
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
    <div className="h-full lg:mx-56 m-8 gap-4">
      {landingPage.image && (
        <div>
          <Image
            priority
            alt={landingPage.image?.alt}
            src={"https:" + landingPage.image?.src}
            width={500}
            height={500}
            className=" float-left"
          />
        </div>
      )}
      <div className=" text-justify px-4">
        <h1 className="text-2xl mx-auto">{pageData.fields.title}</h1>
        <RichText document={landingPage.body} />
      </div>
    </div>
  );
}
