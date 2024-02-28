import { contentfulClient, fetchHero } from "./utils/helpers/contentfulClient";
import Hero from "./components/Hero";
import TeaserBlock from "./components/TeaserBlock";
import {
  TypeTeaserBlockSkeleton,
  TypeTextMassSkeleton,
  TypeTextTeaserSkeleton,
} from "./utils/types/ContentfulTypes";
import BigImage from "./components/BigImage";


export default async function Home() {
  const hero = await fetchHero("16sBnJYUlGvOidRZsoallm");

  const teaserBlocks =
    await contentfulClient.getEntries<TypeTeaserBlockSkeleton>({
      content_type: "teaserBlock",
    });

  return (
    <main className="flex  flex-col items-center justify-between">
      <div className="w-full flex flex-col justify-center items-center">
        {hero && <BigImage hero={hero} />}
        {/* <Hero heroImage={asset} heroText={heroText as any} /> */}
        {/* <div className="flex flex-col justify-center items-center my-8 text-white">
          {teaserBlocks.items.map((tb, i) => (
            <TeaserBlock key={tb.sys.id} teaserBlock={tb as any} index={i} />
          ))}
        </div> */}
      </div>
    </main>
  );
}
