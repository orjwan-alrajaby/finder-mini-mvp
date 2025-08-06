import styled from 'styled-components';
import { TagList, Tag } from 'react-aria-components';

export const StyledTagList = styled(TagList)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StyledTag = styled(Tag)`
  border: none;
  border-radius: 0.25rem;
  width: fit-content;
  min-width: fit-content;
  max-width: fit-content;
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.sizes.extraSmall};
  color: ${({ theme }) => theme.palette.text};
  padding: 0.25rem 0.5rem;
`;

export const StyledNewTag = styled(StyledTag)`
  background-color: ${({ theme }) => theme.palette.accent};
`;

export const StyledVerifiedTag = styled(StyledTag)`
  background-color: ${({ theme }) => theme.palette.accentSecondary};
`;

export const StyledFeaturedTag = styled(StyledTag)`
  background-color: ${({ theme }) => theme.palette.accentTertiary};
`;

export const StyledListingTypeTag = styled(StyledTag)`
  background-color: ${({ theme }) => theme.palette.tertiary};
`;
