import { media } from '@/components/configs/StyledComponentsConfig/utils';
import styled from 'styled-components';

export const Embla = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  height: 100%;
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 0.5rem;
`;

export const EmblaContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  touch-action: pan-y pinch-zoom;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  min-width: 0;
  display: flex;
  align-items: stretch;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.tertiary};
`;

export const EmblaButtons = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  justify-content: center;
  ${media.min.md`
    justify-content: space-between;
  `}
`;

export const EmblaButton = styled.button`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  display: inline-flex;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  padding: 0;
  margin: 0;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 1;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.text};
  box-shadow: 0px 2px 8px rgba(17, 24, 39, 0.3);
  &:disabled {
    color: red;
  }
  ${media.min.sm`
    width: 3rem;
    height: 3rem;
  `}
  ${media.min.lg`
    width: 3.5rem;
    height: 3.5rem;
  `}
`;

export const EmblaDots = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 1.25rem;
  margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
  display: none;
`;

export const EmblaDot = styled.button<{ $isSelected: boolean }>`
  -webkit-tap-highlight-color: rgba(17, 24, 39, 0.5);
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: 1rem;
  height: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: none;
  box-shadow: 0px 2px 8px rgba(17, 24, 39, 0.3);
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.palette.accent : theme.palette.text};
`;

export const EmblaControls = styled.div`
  position: absolute;
  bottom: -3.5rem;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.min.xs`
    bottom: -4rem;
  `}

  ${media.min.md`
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    padding: 0.5rem;

    .embla-arrow-btns {
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 300ms ease-in,
        visibility 300ms ease-in;
      transition-delay: 2s; 
    }

    &:hover {
      .embla-arrow-btns {
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
