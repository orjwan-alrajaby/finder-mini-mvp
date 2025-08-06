import styled from 'styled-components';
import { getSkeletonStyle } from './utils';

export const SkeletonLine = styled.div<{
  $width: string;
  $height?: string;
  $borderRadius?: string;
  $isDark?: boolean;
}>`
  ${({ $isDark }) => getSkeletonStyle($isDark)};
  background-color: #333d4c;
  width: 100%;
  max-width: ${({ $width }) => $width};
  height: ${({ $height }) => $height ?? '1rem'};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? '0.25rem'};
`;

export const SkeletonBlock = styled.div<{
  $width: string;
  $height?: string;
  $isDark?: boolean;
}>`
  ${({ $isDark }) => getSkeletonStyle($isDark)};
  background-color: #333d4c;
  width: ${({ $width }) => $width};
  min-width: ${({ $width }) => $width};
  max-width: ${({ $width }) => $width};
  height: ${({ $height }) => $height ?? '1rem'};
  min-height: ${({ $height }) => $height ?? '1rem'};
  max-height: ${({ $height }) => $height ?? '1rem'};
  border-radius: 0.25rem;
`;

export const SkeletonCircle = styled.div<{ $isDark?: boolean; $dim: string }>`
  ${({ $isDark }) => getSkeletonStyle($isDark)};
  width: ${({ $dim }) => $dim};
  height: ${({ $dim }) => $dim};
  min-width: ${({ $dim }) => $dim};
  min-height: ${({ $dim }) => $dim};
  max-width: ${({ $dim }) => $dim};
  max-height: ${({ $dim }) => $dim};
  border-radius: 100%;
`;

// -----------------------------------------

export const SimpleFlexContainer = styled.div<{
  $direction?: string;
  $alignItems?: string;
  $justifyContent?: string;
  $gap?: string;
  $padding?: string;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction ?? 'row'};
  align-items: ${({ $alignItems }) => $alignItems ?? 'flex-start'};
  justify-content: ${({ $justifyContent }) => $justifyContent ?? 'flex-start'};
  gap: ${({ $gap }) => $gap ?? '0.5rem'};
  padding: ${({ $padding }) => $padding ?? '0px'};
  width: 100%;
`;
