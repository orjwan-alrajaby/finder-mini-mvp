import {
  ToggleButtonGroup,
  ToggleButton,
  Label as AriaLabel,
  } from 'react-aria-components';
import styled from 'styled-components';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const StyledToggleButton = styled(ToggleButton)`
  all: unset;
  cursor: pointer;
  padding: 0.625rem 1.25rem; /* 10px 20px */
  border-radius: 0.5rem; /* 8px */
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  color: ${({theme}) => theme.palette.inputColor};
  border: 1px solid ${({theme}) => theme.palette.inputColor};
  background-color: transparent;
  transition: background-color 0.2s ease, border 0.2s ease;

  &[data-selected='true'],
  &[data-pressed='true'] {
    background-color: ${({theme}) => theme.palette.primary};
    color: ${({theme}) => theme.palette.text};
  }

  &:focus-visible {
    outline: 2px solid ${({theme}) => theme.palette.primary};
    outline-offset: 2px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const StyledLabel = styled(AriaLabel)`
  font-size: ${({theme}) => theme.fonts.sizes.medium};
  font-family: ${({theme}) => theme.fonts.inter.semibold};
  font-weight: 600;
  color: ${({theme}) => theme.palette.primary};
  width: 100%;
`