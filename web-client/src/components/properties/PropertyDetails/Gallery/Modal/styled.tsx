import styled, { keyframes } from 'styled-components';
import {Button, Modal, ModalOverlay} from 'react-aria-components';
import { media } from '@/components/configs/StyledComponentsConfig/utils';

const modalFade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const modalZoom = keyframes`
  from { transform: scale(0.8); }
  to { transform: scale(1); }
`;

export const StyledModalOverlay = styled(ModalOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1.5rem;

  &[data-entering] {
    animation: ${modalFade} 200ms;
  }

  &[data-exiting] {
    animation: ${modalFade} 150ms reverse ease-in;
  }
`;

export const StyledModal = styled(Modal)`
  width: min(90vw, calc(90vh * 1.4));
  aspect-ratio: 1.4;
  height: auto;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;

  &[data-entering] {
    animation: ${modalZoom} 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  ${media.min.md`
    .close-modal-btn {
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 300ms ease-in,
        visibility 300ms ease-in;
      transition-delay: 2s; 
    }
    &:hover {
      .close-modal-btn {
        opacity: 1;
        visibility: visible;
        transition:
          opacity 300ms ease-out,
          visibility 300ms ease-out;
        transition-delay: 0ms;
      }
    }
  `}
`;

export const StyledShowAllButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 40;
  background-color: ${({theme}) => theme.palette.text};
  border-radius: 8px;
  height: 32px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(17, 24, 39, 0.5);
  font-family: ${({theme}) => theme.fonts.inter.medium};
  font-weight: 500;
  font-size: ${({theme}) => theme.fonts.sizes.extraSmall};
  color:  ${({theme}) => theme.palette.primary};
`;

export const StyledCloseModalBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 32px;
  height: 32px;
  border: none;
  background-color: ${({theme}) => theme.palette.text};
  border-radius: 100%;
  box-shadow: 0px 2px 8px rgba(17, 24, 39, 0.3);
  z-index: 30;
  cursor: pointer;
`