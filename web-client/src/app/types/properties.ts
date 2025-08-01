export type ListingTag =
  | "for-sale"
  | "for-rent"
  | "for-auction"
  | "rent-to-own"
  | "shared-accommodation";

export type NonListingTag = "new" | "verified" | "featured";

export type Tag = ListingTag | NonListingTag;

export type TagsList = Tag[];

export type PropertyProps = {
  imageUrl: string;
  price: string;
  address: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  href: string;
  tags: Tag[];
};