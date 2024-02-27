import { contentfulClient } from "./utils/helpers/contentfulClient";
import Hero from "./components/Hero";
import TeaserBlock from "./components/TeaserBlock";
import {
  TypeTeaserBlockSkeleton,
  TypeTextMassSkeleton,
} from "./utils/types/ContentfulTypes";

export default async function Home() {
  const asset = await contentfulClient.getAsset("409SYH0YTMH7CfkbSOcI91");
  const heroText = await contentfulClient.getEntry<TypeTextMassSkeleton>(
    "7tzxQYEEMxtlezF9equTaj"
  );

  const teaserBlocks =
    await contentfulClient.getEntries<TypeTeaserBlockSkeleton>({
      content_type: "teaserBlock",
    });

  return (
    <main className="flex md:min-h-screen flex-col items-center justify-between">
      <div className="w-full flex flex-col justify-center items-center">
        <Hero heroImage={asset} heroText={heroText as any} />
        <div className="flex flex-col justify-center items-center my-8 text-white">
          {teaserBlocks.items.map((tb, i) => (
            <TeaserBlock key={tb.sys.id} teaserBlock={tb as any} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
