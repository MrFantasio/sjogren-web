import Contentful from "contentful"
export interface HeroImageSkeleton {
    contentTypeId: "heroImage",
    fields: {
        imageFile: Contentful.EntryFieldTypes.AssetLink,
        altText: Contentful.EntryFieldTypes.Text
    }
}