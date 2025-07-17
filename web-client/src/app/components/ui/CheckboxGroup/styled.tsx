'use client';

import {
    CheckboxGroup as AriaCheckboxGroup,
    Label as AriaLabel,
  } from 'react-aria-components';
import styled from 'styled-components';
import { media } from '@/app/StyledComponentsConfig/utils';

export const StyledCheckboxGroup = styled(AriaCheckboxGroup)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledList = styled.div<{$numOfCols: number}>`
  display: grid;
  grid-template-columns: ${({ $numOfCols }) => `repeat(${$numOfCols}, minmax(0, 1fr));`}; 
  grid-auto-rows: auto;
  column-gap: 1rem;
  row-gap: 0.5rem;
  align-items: start;
  ${media.max.xs`
    grid-template-columns: repeat(1, minmax(0, 1fr)); 
  `}
`;

export const StyledLabel = styled(AriaLabel)`
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.inter.semibold};
  font-weight: 600;
  color: ${({theme}) => theme.palette.primary};
  width: 100%;
`