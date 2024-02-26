import Contentful from "contentful";

export interface TeaserBlockSkeleton {
  contentTypeId: "teaserBlock";
  fields: {
    title: Contentful.EntryFieldTypes.Text;
    image: Contentful.Asset;
    imageText: string;
  };
};
