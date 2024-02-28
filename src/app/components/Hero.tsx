import { Asset } from "contentful";
import Image from "next/image";
import { TypeTextTeaserSkeleton } from "../utils/types/ContentfulTypes";

interface HeroProps {
  heroImage: Asset;
  heroText: TypeTextTeaserSkeleton;
}

const Hero = ({ heroImage, heroText }: HeroProps) => {
  return (
    <div className="flex md:flex-row relative">
      <Image
        priority
        src={"https:" + heroImage.fields.file!.url}
        width={700}
        height={700}
        alt={heroImage.fields.description! as string}
        className="object-cover flex-grow w-1/2 hidden md:block"
      />
      <div className=" bg-powderBlue text-charcoal flex-grow w-1/2 font-notoSans">
        <div className="mt-10 md:mt-36 mx-10 mb-14">
          <div className="">
            <h1 className="text-5xl md:my-4 bg-transparent">
              {heroText.fields.title}
            </h1>
            <hr className=" border-t-melon"></hr>
          </div>
          <p className="mt-4">{heroText.fields.textContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
