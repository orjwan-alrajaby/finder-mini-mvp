'use client';

import { Checkbox as AriaCheckbox } from 'react-aria-components';
import Image from 'next/image';
import styled, { css } from 'styled-components';

const checkboxColorVars = css<{ $isDark?: boolean }>`
  ${({ theme, $isDark }) => {
    const selectedColor = $isDark ? theme.palette.text : theme.palette.surface;
    const borderColor = theme.palette.inputColor;
    const selectedColorPressed = $isDark
      ? theme.palette.textMuted
      : theme.palette.tertiary;

    return `
      --selected-color: ${selectedColor};
      --selected-color-pressed: ${selectedColorPressed};
      --border-color: ${borderColor};
    `;
  }}
`;

export const StyledCheckbox = styled(AriaCheckbox)<{ $isDark?: boolean }>`
  ${checkboxColorVars}
  &[data-selected][data-pressed] .checkbox,
  &[data-indeterminate][data-pressed] .checkbox {
    background: var(--selected-color-pressed);
    border-color: var(--selected-color-pressed);
  }

  &[data-selected] .checkbox,
  &[data-indeterminate] .checkbox {
    background: var(--selected-color);
    border-color: var(--selected-color);
  }
`;

export const StyledBox = styled.div<{ $isSelected: boolean }>`
  position: relative;
  width: 1rem;
  height: 1rem;
  border: 2px solid;
  border-color: var(--border-color);
  border-radius: 4px;
  transition:
    background 200ms,
    border-color 200ms;
`;

export const StyledCheckmarkIcon = styled(Image)<{ $isSelected: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0)};
  transform: ${({ $isSelected }) => ($isSelected ? 'scale(1)' : 'scale(0.8)')};
  transition:
    opacity 200ms ease,
    transform 200ms ease;
  pointer-events: none;
`;

export const StyledContainer = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-weight: ${({ $isSelected }) => ($isSelected ? 500 : 400)};
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.palette.surface : theme.palette.inputColor};
  cursor: pointer;
`;
