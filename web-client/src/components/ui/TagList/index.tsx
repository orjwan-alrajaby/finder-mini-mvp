'use client';

import { TagGroup } from 'react-aria-components';
import {
  StyledTagList,
  StyledListingTypeTag,
  StyledNewTag,
  StyledVerifiedTag,
  StyledFeaturedTag,
} from './styled';
import { JSX } from 'react';
import { ListingTag, Tag, TagsList } from '@/types/properties';

export const listingTypeLabels: Record<ListingTag, string> = {
  'for-sale': 'For Sale',
  'for-rent': 'For Rent',
  'for-auction': 'For Auction',
  'rent-to-own': 'Rent-to-Own',
  'shared-accommodation': 'Shared Accommodation',
};

function renderTag(tag: Tag): JSX.Element | null {
  switch (tag) {
    case 'for-sale':
    case 'for-rent':
    case 'for-auction':
    case 'rent-to-own':
    case 'shared-accommodation':
      return (
        <StyledListingTypeTag key={tag}>
          {listingTypeLabels[tag]}
        </StyledListingTypeTag>
      );
    case 'new':
      return <StyledNewTag key={tag}>New</StyledNewTag>;
    case 'verified':
      return <StyledVerifiedTag key={tag}>Verified</StyledVerifiedTag>;
    case 'featured':
      return <StyledFeaturedTag key={tag}>Featured</StyledFeaturedTag>;
    default:
      return null;
  }
}

export default function TagList({
  tags,
}: Readonly<{ tags: TagsList }>): JSX.Element | null {
  if (!tags?.length) return null;

  return (
    <TagGroup selectionMode="none">
      <StyledTagList>{tags.map((t) => renderTag(t))}</StyledTagList>
    </TagGroup>
  );
}
