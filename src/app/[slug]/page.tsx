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
import { notFound, usePathname } from "next/navigation";
import RichText from "../utils/helpers/contentful/RichText";
import { fetchLandingPage } from "../utils/helpers/contentful/landingPages";
import { draftMode } from "next/headers";
import Gallery from "../components/Gallery";

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
    <main className="h-full lg:mx-48 m-8 gap-4">
      <h1 className="text-4xl mx-auto">{pageData.fields.title}</h1>
      {landingPage.image && (
        <div className=" w-fit my-4">
          <Image
            priority
            alt={landingPage.image?.alt}
            src={landingPage.image?.src}
            width={500}
            height={500}
            className=" float-left mr-4"
          />
        </div>
      )}
      {landingPage.slug === "ommig" && (
        <div className=" text-justify">
          <RichText document={landingPage.body} />
        </div>
      )}
      {landingPage.slug === "sculptures" && <Gallery />}
    </main>
  );
}
