import { Asset } from "contentful";
import Image from "next/image";
import { TypeTextTeaserSkeleton } from "../utils/types/ContentfulTypes";

interface HeroProps {
  heroImage: Asset;
  heroText: TypeTextTeaserSkeleton;
}

const Hero = ({ heroImage, heroText }: HeroProps) => {
  return (
    <div className="flex md:flex-row">
      <Image
        src={"https:" + heroImage.fields.file!.url}
        width={700}
        height={700}
        alt={heroImage.fields.description!.toString()}
        className="object-cover flex-grow w-1/2 hidden md:block"
      />
      <div className="bg-indigo-600 text-white flex-grow w-1/2">
        <div className="mt-10 md:mt-36 mx-10 mb-14">
          <h1 className="text-5xl md:my-4">{heroText.fields.title}</h1>
            <p className="mt-4">
              {heroText.fields.textContent}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
