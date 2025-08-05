import styled from 'styled-components';

import {
  StyledGalleryWrapper as SkeletonGalleryWrapper,
  StyledMainImageContainer as SkeletonMainImageContainer,
  StyledThumbnailColumn as SkeletonThumbnailColumn,
  StyledZoomButton as SkeletonZoomButton,
  StyledMainFigure,
  StyledThumbnailItem
} from "./styled";
import { getSkeletonStyle } from '@/components/layouts/Skeleton/utils';

export const SkeletonMainFigure = styled(StyledMainFigure)<{ $isDark?: boolean }>`
  background-color: ${({ theme }) => theme.palette.surface};
  ${({ $isDark }) => getSkeletonStyle($isDark)};
`;

export const SkeletonThumbnailItem = styled(StyledThumbnailItem)<{ $isDark?: boolean }>`
  background-color: ${({ theme }) => theme.palette.surface};
  ${({ $isDark }) => getSkeletonStyle($isDark)};
`;

export default function SkeletonGallery({ isDark = true }: Readonly<{ isDark?: boolean }>) {
  return (
    <SkeletonGalleryWrapper>
      <SkeletonMainImageContainer>
        <SkeletonMainFigure $isDark={isDark} />
        <SkeletonZoomButton aria-hidden />
      </SkeletonMainImageContainer>
      <SkeletonThumbnailColumn>
        <SkeletonThumbnailItem $isDark={isDark} />
        <SkeletonThumbnailItem $isDark={isDark} />
      </SkeletonThumbnailColumn>
    </SkeletonGalleryWrapper>
  );
}