"use client";

import { TagGroup } from "react-aria-components";
import {
  StyledTagList,
  StyledListingTypeTag,
  StyledNewTag,
  StyledVerifiedTag,
  StyledFeaturedTag,
} from "./styled";
import { JSX } from "react";
import { ListingType, Flag } from "@/app/types/properties";

function renderTag(flag: Flag): JSX.Element | null {
  switch (flag) {
    case "New":
      return <StyledNewTag key={flag}>New</StyledNewTag>;
    case "Verified":
      return <StyledVerifiedTag key={flag}>Verified</StyledVerifiedTag>;
    case "Featured":
      return <StyledFeaturedTag key={flag}>Featured</StyledFeaturedTag>;
    default:
      return null;
  }
}

export default function TagList({ listingType, flags }: Readonly<{ listingType: ListingType, flags: Flag[] }>): JSX.Element | null {
  if (!listingType && !flags?.length) return null;

  return (
    <TagGroup selectionMode="none">
      <StyledTagList>
        <StyledListingTypeTag key={listingType}>
          {listingType}
        </StyledListingTypeTag>
        {flags.map((flag) => renderTag(flag))}
      </StyledTagList>
    </TagGroup>
  );
}