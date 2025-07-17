import styled, { css } from 'styled-components';
import {
  OverlayContainer,
} from 'react-aria';
import { media } from '@/app/StyledComponentsConfig/utils';

export const ToggleButton = styled.button`
  width: fit-content;
  background-color: ${({ theme }) => theme.palette.text};
  border: none;
  cursor: pointer;
  width: 2.75rem;
  height: 2.5rem;
  border-radius: 0.5rem;
`;

export const Backdrop = styled(OverlayContainer)<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  z-index: 55;
`;

export const Drawer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 51.25rem;
  background-color: ${({ theme }) => theme.palette.text};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 60;
`;

export const DrawerContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
`;

export const DrawerHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const StyledH3 = styled.h3`
  font-family: ${({theme}) => theme.fonts.inter.semibold};
  font-size: ${({theme}) => theme.fonts.sizes.large};
  font-weight: 600;
  color: ${({theme}) => theme.palette.primary};
`

const StyledGridBase = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: auto;
  column-gap: 2rem;
`

export const StyledGrid = styled.div`
  ${StyledGridBase}
  ${media.max.xs`
    grid-template-columns: repeat(1, minmax(0, 1fr)); 
    row-gap: 2rem;
  `}
`;

export const StyledInputGrid = styled(StyledGrid)`
  ${StyledGridBase}
  ${media.max.sm`
    grid-template-columns: repeat(1, minmax(0, 1fr)); 
    row-gap: 2rem;
  `}
`