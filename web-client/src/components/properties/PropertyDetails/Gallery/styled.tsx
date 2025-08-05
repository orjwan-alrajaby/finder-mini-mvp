import { media } from "@/components/configs/StyledComponentsConfig/utils";
import styled, { css } from "styled-components";
import { Button } from 'react-aria-components';

export const StyledGalleryWrapper = styled.section`
  display: grid;
  row-gap: 1.5rem;
  column-gap: 1.5rem;
  width: 100%;
  ${media.min.lg`
    grid-template-columns: 2fr 1fr;
  `}
`

const SharedMagnifyBtnIconStyles = css`
  ${media.min.md`
    &:hover {
    .magnify-img-btn {
        background-color: rgba(17, 24, 39, 0.5);
      }
      .magnify-icon {
        opacity: 100%;
      }
    }
  `}
`

export const StyledMainImageContainer = styled.div`
  grid-column: 1 / 2;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
`

export const StyledMainFigure = styled.figure`
  aspect-ratio: 856 / 450;
  width: 100%;
  max-width: 856px;
  height: 100%;
  
  .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  };
  ${SharedMagnifyBtnIconStyles};
`

export const StyledThumbnailColumn = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  ${media.min.xs`
    flex-direction: row;
  `}
  ${media.min.lg`
    flex-direction: column;
  `}
` 

export const StyledThumbnailItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  aspect-ratio: 416 / 213;
  width: 100%;
  height: auto;
  .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  };
  ${SharedMagnifyBtnIconStyles};
`


export const StyledZoomButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  cursor: pointer;
  border: none;    
  background-color: transparent;

  .magnify-icon {
    opacity: 0;
  }
`