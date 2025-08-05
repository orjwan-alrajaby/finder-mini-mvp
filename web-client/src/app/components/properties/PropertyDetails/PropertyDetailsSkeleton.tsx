"use client"; // TODO: explore making this a server component. 
// The styles for this page using the theme object is what's breaking the code if I remove the "use client" flag;

import { 
    StyledMainContainer, 
    StyledSection, 
    StyledArticle, 
    StyledSubSection, 
    StyledH3,
    StyledAmenitiesGrid, 
    StyledGenInfoSection, 
    StyledGenInfoH3, 
    StyledTable, 
} from "./styled";
import SkeletonGallery from "./Gallery/GallerySkeleton";
import SkeletonAgentCard from "./AgentCard/AgentCardSkeleton";
import { SimpleFlexContainer, SkeletonBlock, SkeletonLine } from "@/app/components/layouts/Skeleton/base";

export function SkeletonMainInfoAndAbout({ isDark = true }: Readonly<{ isDark?: boolean }>) {
  return (
    <>
      <SimpleFlexContainer $direction="column" $gap="1rem">
        <SimpleFlexContainer data-skeleton-name="property-tags">
          <SkeletonBlock $width="75px" $height="26px" data-skeleton-name="property-tag" />
          <SkeletonBlock $width="75px" $height="26px" data-skeleton-name="property-tag" />
          <SkeletonBlock $width="75px" $height="26px" data-skeleton-name="property-tag" />
        </SimpleFlexContainer>
        <SkeletonLine $isDark={isDark} $width="150px" $height="30px"  data-skeleton-name="property-price" />
        <SkeletonLine $isDark={isDark} $width="228px" $height="21px" data-skeleton-name="property-address" />
        <SimpleFlexContainer data-skeleton-name="property-specs">
          <SkeletonBlock $width="28px" $height="21px" />
          <SkeletonBlock $width="28px" $height="21px" />
          <SkeletonBlock $width="28px" $height="21px" />
          <SkeletonLine $isDark={isDark} $width="56px" $height="21px" data-skeleton-name="property-sqm" />
        </SimpleFlexContainer>
      </SimpleFlexContainer>
      <div>
        <StyledH3>About</StyledH3>
        <SimpleFlexContainer $direction="column" data-skeleton-name="property-about-section-text">
            <SkeletonLine $isDark={isDark} $width="745px" />
            <SkeletonLine $isDark={isDark} $width="745px" />
            <SkeletonLine $isDark={isDark} $width="705px" />
            <SkeletonLine $isDark={isDark} $width="725px" />
            <SkeletonLine $isDark={isDark} $width="350px" />
        </SimpleFlexContainer>
      </div>
    </>
  );
}


export function SkeletonGeneralInfoSection({ isDark = true }: Readonly<{ isDark?: boolean }>) {
  return (
    <StyledGenInfoSection>
      <StyledGenInfoH3>General Information</StyledGenInfoH3>
      <StyledTable>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i}>
              <td><SkeletonLine $isDark={isDark} $width="140px" $height="22px" /></td>
              <td><SkeletonLine $isDark={isDark} $width="70px" $height="22px" /></td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledGenInfoSection>
  );
}

export function SkeletonAmenitiesSection({ isDark = true }: Readonly<{ isDark?: boolean }>) {
  return (
    <div>
      <StyledH3>Amenities</StyledH3>
      <StyledAmenitiesGrid>
        {Array.from({ length: 8 }).map((_, i) => (
          <li key={i}>
            <SkeletonLine $isDark={isDark} $width="150px" $height="22px" />
          </li>
        ))}
      </StyledAmenitiesGrid>
    </div>
  );
}

export function SkeletonLocationSection({ isDark = true }: Readonly<{ isDark?: boolean }>) {
  return (
    <div>
      <StyledH3>Location</StyledH3>
      <SkeletonLine
        $isDark={isDark}
        $height="230px"
        $width="746px"
        $borderRadius="0.5rem"
      />
    </div>
  );
}

export default function PropertyDetailsSkeleton() {
    return <StyledMainContainer aria-label="Loading properties details page" aria-busy="true">
        <SkeletonGallery />
         <StyledSection>
            <StyledArticle>
                <SkeletonMainInfoAndAbout />
                <StyledSubSection>
                    <SkeletonGeneralInfoSection />
                    <SkeletonAmenitiesSection />
                </StyledSubSection>
                <SkeletonLocationSection />
            </StyledArticle>
            <div>
                <StyledH3>Reach out to the Agent</StyledH3>
                <SkeletonAgentCard />
            </div>
        </StyledSection>
    </StyledMainContainer>
}