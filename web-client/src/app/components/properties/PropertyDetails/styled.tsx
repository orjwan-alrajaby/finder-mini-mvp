import { media } from "@/app/StyledComponentsConfig/utils";
import styled from "styled-components";

export const StyledMainContainer = styled.div`
  width: 100%;
  max-width: 1296px;
  padding: 5rem 1.5rem 10rem;
  margin: 0 auto;

  ${media.min['2xl']`
    margin: 5rem auto 10rem;
  `}
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;

  ${media.min.lg`
    display: grid;
    row-gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.5rem;
  `}
`

export const StyledArticle = styled.article`
  width: 100%;
  max-width: 856px;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${media.min.lg`
    grid-column: 1/3;
  `} 
`

export const StyledMainInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .price {
    margin-top: 0.25rem;
  }
`

export const StyledPrice = styled.h2`
  color: ${({theme}) => theme.palette.text};
  font-family: ${({theme}) => theme.fonts.inter.semibold};
  font-weight: 600;
  font-size: ${({theme}) => theme.fonts.sizes.xxLarge};
`

export const StyledAddress = styled.p`
  font-family: ${props => props.theme.fonts.inter.regular};
  font-weight: 400;
  font-size: ${props => props.theme.fonts.sizes.small};
`;

export const StyledSubSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${media.min.xs`
    flex-direction: row;
    gap: 1.5rem;
  `}

  ${media.min.sm`
    gap: 3rem;
  `}

  ${media.min.lg`
    flex-direction: column;
  `}
`

export const StyledH3 = styled.h3`
  color: ${({theme}) => theme.palette.text};
  font-family: ${({theme}) => theme.fonts.inter.semibold};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  margin-bottom: 1rem;
  min-width: fit-content;
`

export const StyledGenInfoSection = styled.section`
  ${media.min.xs`
    border-right: 1px solid;
    border-right-color: #1D2735;
  `}

  ${media.min.lg`
    border-right: none;
  `}
`

export const StyledGenInfoH3 = styled(StyledH3)`
  margin-bottom: 0;
`

export const StyledTable = styled.table`
  width: 100%;
  min-width: 270px;
  max-width: 300px;
  text-align: left;
  border-spacing: 0 1rem;
`

export const StyledTH = styled.th`
  color: ${({theme}) => theme.palette.text};
  font-family: ${({theme}) => theme.fonts.inter.semibold};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  min-width: fit-content;
`

export const StyledAmenitiesGrid = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  row-gap: 1rem;
  
  ${media.min.md`
    grid-template-columns: repeat(2, minmax(180px, 1fr));
    column-gap: 1.5rem;
  `}
`;

export const StyledMapPlaceholder = styled.div`
  width: 100%;
  max-width: 746px;
  height: 230px;
  border: 1px solid;
  border-color: ${({theme}) => theme.palette.tertiary};
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;

  .map-veil {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(17, 24, 39, 0.9);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  ${media.min.xs`
    height: 304px;
  `}
`;

