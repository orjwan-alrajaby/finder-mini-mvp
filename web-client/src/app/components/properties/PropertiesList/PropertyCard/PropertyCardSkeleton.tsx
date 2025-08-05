import { SkeletonLine, SkeletonBlock, SkeletonCircle, SimpleFlexContainer } from '@/app/components/layouts/Skeleton/base';
import styled from 'styled-components';
import { Card, ImageWrapper } from './styled';
import { getSkeletonStyle } from '@/app/components/layouts/Skeleton/utils';

export const SkeletonCardImage = styled(ImageWrapper)<{ $isDark?: boolean }>`
 ${({ $isDark }) => getSkeletonStyle($isDark)};
`;

export default function PropertyCardSkeleton({ isDark = true }: Readonly<{ isDark?: boolean }>) {
  return (
    <Card aria-label="Loading property" aria-busy="true">
      <SkeletonCardImage $isDark={isDark} />
      <SimpleFlexContainer data-skeleton-name="property-details" $direction="column" $gap="0.75rem" $padding="1rem">
        <SimpleFlexContainer data-skeleton-name="property-tags">
          <SkeletonBlock $width="75px" $height="26px" data-skeleton-name="property-tag" />
          <SkeletonBlock $width="75px" $height="26px" data-skeleton-name="property-tag" />
          <SkeletonBlock $width="75px" $height="26px" data-skeleton-name="property-tag" />
        </SimpleFlexContainer>
        <SkeletonLine $isDark={isDark} $width="150px" $height="30px"  data-skeleton-name="property-price" />
        <SkeletonLine $isDark={isDark} $width="228px" $height="21px" data-skeleton-name="property-address" />
        <SkeletonLine $isDark={isDark} $width="56px" $height="21px" data-skeleton-name="property-sqm" />
        <SimpleFlexContainer data-skeleton-name="property-footer" $justifyContent="space-between" $alignItems="center">
          <SimpleFlexContainer data-skeleton-name="property-specs">
            <SkeletonBlock $width="28px" $height="21px" />
            <SkeletonBlock $width="28px" $height="21px" />
            <SkeletonBlock $width="28px" $height="21px" />
          </SimpleFlexContainer>
          <SkeletonCircle $dim="40px" $isDark={isDark} />
        </SimpleFlexContainer>
      </SimpleFlexContainer>
    </Card>
  );
};