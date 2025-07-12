import { media } from "@/app/StyledComponentsConfig/utils";
import styled from "styled-components";

export const Card = styled.article`
  border: 1px solid ${props => props.theme.palette.tertiary};
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease-in-out;
  width: 100%;
  overflow: hidden;
  &:hover {
    border: 1px solid ${props => props.theme.palette.text};
  }
  ${media.min.sm`
    max-width: 450px;
  `}
`;

export const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  ${media.min.xs`
    display: flex;
  `}
  ${media.min.sm`
    display: block;
  `}
`;

export const ImageWrapper = styled.figure`
  margin: 0;
  height: 300px;
  overflow: hidden;
  position: relative;
  ${media.min.xs`
    width: 60%;
  `}
  ${media.min.sm`
    width: 100%;
  `}
`;

export const Details = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Price = styled.p`
  color: ${props => props.theme.palette.text};
  font-family: ${props => props.theme.fonts.inter.semibold};
  font-weight: 600;
  font-size: ${props => props.theme.fonts.sizes.large};
  margin-bottom: 0.5rem;
`;

export const Address = styled.h2`
  font-family: ${props => props.theme.fonts.inter.regular};
  font-weight: 400;
  font-size: ${props => props.theme.fonts.sizes.small};
`;

export const SquareMeter = styled.p`
  font-family: ${props => props.theme.fonts.inter.semibold};
  font-weight: 600;
  font-size: ${props => props.theme.fonts.sizes.small};
  color: ${props => props.theme.palette.text};
  margin-top: 0.5rem;
`;

export const Specs = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 1.33rem;
`;

export const Spec = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SpecIcon = styled.dt`
  font-size: 1.2rem;
`;

export const SpecLabel = styled.span`
  position: absolute;
  left: -9999px;
`;

export const SpecValue = styled.dd`
  font-family: ${props => props.theme.fonts.inter.regular};
  font-weight: 400;
  font-size: ${props => props.theme.fonts.sizes.small};
  color: ${props => props.theme.palette.textMuted};
`;