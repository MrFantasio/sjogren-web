import { TypeTeaserBlockSkeleton } from "../utils/types/ContentfulTypes";
import Contentful from "contentful";
import Image from "next/image";

interface TeaserBlockProps {
  teaserBlock: TypeTeaserBlockSkeleton;
  index: number;
}

const TeaserBlock = ({ teaserBlock, index }: TeaserBlockProps) => {
  teaserBlock.fields.image?.fields;
  if (
    teaserBlock.fields.image !== undefined &&
    teaserBlock.fields.image.fields.file !== undefined
  ) {
    return (
      <div
        className={
          "hidden md:flex w-9/12 bg-grayblue h-96" +
          (index % 2 === 0 ? " flex-row-reverse" : " flex-row")
        }
      >
        <Image
          alt={teaserBlock.fields.image!.fields.description as string}
          src={"https:" + teaserBlock.fields.image.fields.file.url}
          width={500}
          height={500}
          className="w-1/2 object-cover"
        />
        <div className="w-1/2 p-8">
          <p>{teaserBlock.fields.imageText}</p>
        </div>
      </div>
    );
  }
};

export default TeaserBlock;
