import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
  Asset,
} from "contentful";

export interface TypeHeroFields {
  title: EntryFieldTypes.Symbol;
  heroImage: EntryFieldTypes.AssetLink;
  welcomeText?: EntryFieldTypes.Text;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeHeroSkeleton, Modifiers, Locales>;

export interface TypeLandingPageFields {
  title: string;
  heroBanner: string;
  landingText?: EntryFieldTypes.RichText;
  landingImage?: Asset | null;
  slug: string;
}

export type TypeLandingPageSkeleton = EntrySkeletonType<
  TypeLandingPageFields,
  "landingPage"
>;
export type TypeLandingPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeLandingPageSkeleton, Modifiers, Locales>;

export interface TypeGalleryFields {
  galleryImages: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  title: EntryFieldTypes.Symbol;
}

export type TypeGallerySkeleton = EntrySkeletonType<
  TypeGalleryFields,
  "gallery"
>;
export type TypeGallery<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeGallerySkeleton, Modifiers, Locales>;

export interface TypeHeroImageFields {
  imageFile: EntryFieldTypes.AssetLink;
  altText: EntryFieldTypes.Symbol;
}

export type TypeHeroImageSkeleton = EntrySkeletonType<
  TypeHeroImageFields,
  "heroImage"
>;
export type TypeHeroImage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeHeroImageSkeleton, Modifiers, Locales>;

export interface TypeTeaserBlockFields {
  title?: string;
  image?: Asset;
  imageText?: string;
}

export type TypeTeaserBlockSkeleton = EntrySkeletonType<
  TypeTeaserBlockFields,
  "teaserBlock"
>;
export type TypeTeaserBlock<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeTeaserBlockSkeleton, Modifiers, Locales>;

export interface TypeTextMassFields {
  textField?: EntryFieldTypes.RichText;
}

export type TypeTextMassSkeleton = EntrySkeletonType<
  TypeTextMassFields,
  "textMass"
>;
export type TypeTextMass<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeTextMassSkeleton, Modifiers, Locales>;

export interface TypeTextTeaserFields {
  title: string;
  textContent: string;
}

export type TypeTextTeaserSkeleton = EntrySkeletonType<
  TypeTextTeaserFields,
  "textTeaser"
>;
export type TypeTextTeaser<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeTextTeaserSkeleton, Modifiers, Locales>;
