import { Button } from "react-aria-components";
import styled from "styled-components";

export const Card = styled.article<{$isLocationActive?: boolean}>`
  position: relative;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease-in-out;
  width: 100%;
  overflow: hidden;
  border: 2px solid;
  border-color: ${({theme, $isLocationActive})=> $isLocationActive ? theme.palette.text : theme.palette.tertiary};
`;

export const CardLink = styled.a<{$isLocationActive?: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: rgba(17, 24, 39, 0.5);
  }
`;

export const StyledFavoriteBtn = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  z-index: 40;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({theme}) => theme.palette.text};
  border-radius: 100%;
  box-shadow: 0px 2px 8px rgba(17, 24, 39, 0.3);
`

export const StyledMapBtn = styled(Button)<{ $isLocationActive?: boolean }>`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({theme, $isLocationActive}) => $isLocationActive ? theme.palette.text : theme.palette.tertiary};
  border: none;
  border-radius: 100%;
  z-index: 45;
`;

export const ImageWrapper = styled.figure`
  height: 0;
  padding-top: 75%;
  overflow: hidden;
  position: relative;
`;

export const Details = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const Price = styled.p`
  color: ${({theme}) => theme.palette.text};
  font-family: ${({theme}) => theme.fonts.inter.semibold};
  font-weight: 600;
  font-size: ${({theme}) => theme.fonts.sizes.large};
  margin-bottom: 0.5rem;
`;

export const Address = styled.h2`
  font-family: ${({theme}) => theme.fonts.inter.regular};
  font-weight: 400;
  font-size: ${({theme}) => theme.fonts.sizes.small};
`;

export const SquareMeter = styled.p`
  font-family: ${({theme}) => theme.fonts.inter.semibold};
  font-weight: 600;
  font-size: ${({theme}) => theme.fonts.sizes.small};
  color: ${({theme}) => theme.palette.text};
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
`;