import styled from 'styled-components';
import {
  OverlayContainer,
} from 'react-aria';
import { media } from '@/app/StyledComponentsConfig/utils';

export const ToggleButton = styled.button`
  width: fit-content;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${media.min.lg`
    display: none !important;
  `}
`;

export const Backdrop = styled(OverlayContainer)<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  z-index: 55;

  ${media.min.lg`
    display: none !important;
  `}
`;
export const Drawer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  max-width: 20rem;
  background-color: ${({ theme }) => theme.palette.background};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 60;
`;
export const DrawerContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const DrawerHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${({ theme }) => (theme.palette.text)};
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme, $active }) => ($active ? theme.palette.accent : 'transparent')};
    padding: 4px 10px;
  border-radius: 4px;
  box-shadow: ${({ theme, $active }) =>
    $active
      ? `0px 2px 8px rgba(216, 81, 81, 0.8)`
      : 'none'};
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
`;

export const NavLink = styled.a<{ $active: boolean }>`
  color: ${({ theme }) => (theme.palette.text)};
  font-size: 1.125rem;
  text-decoration: none;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
`;