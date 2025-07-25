"use client";

import { TagGroup } from 'react-aria-components';
import { StyledTagList, StyledListingTypeTag, StyledNewTag, StyledVerifiedTag, StyledFeaturedTag } from "./styled";

export default function TagList() {
    return (
        <TagGroup selectionMode="none">
            <StyledTagList>
                <StyledListingTypeTag>For Rent</StyledListingTypeTag>
                <StyledVerifiedTag>Verified</StyledVerifiedTag>
                <StyledNewTag>New</StyledNewTag>
                <StyledFeaturedTag>Featured</StyledFeaturedTag>
            </StyledTagList>
        </TagGroup>
    )
}