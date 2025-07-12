import { media } from "@/app/StyledComponentsConfig/utils";
import { Group } from "react-aria-components";
import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 2.25rem 1.5rem 1.5rem;
  color: ${({ theme }) => theme.palette.textMuted};
  background-color: ${({ theme }) => theme.palette.background};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.inter.regular};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  line-height: 1.5;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  ${media.min.lg`
    padding: 4.5rem 3rem 2rem;
  `}
`;

export const StyledSection = styled.section`
  width: 100%;
  max-width: 1296px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto 2.25rem;

  ${media.min.xs`
    flex-direction: row;
    flex-wrap: wrap;
  `}
  ${media.min.lg`
    gap: 3rem;
    margin-bottom: 4.5rem;
  `}

  justify-content: space-between;
`
export const StyledH4 = styled.h4`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.palette.text};
  margin-bottom: 1.5rem;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
`
const alignStyles = css`
  min-width: 200px;
  text-align: left;
`
const typographyStyles = css`
 color: ${({ theme }) => theme.palette.text};
 font-size: ${({ theme }) => theme.fonts.sizes.medium};
 font-family: ${({ theme }) => theme.fonts.inter.regular};
`
export const StyledArticle = styled.section`
 ${alignStyles}
`
export const StyledGroup = styled(Group)`
 ${alignStyles};
 ${typographyStyles}
`
export const CopyRightsFootNote = styled.p`
  ${typographyStyles};
  margin-bottom: 0.5rem;
`
export const PoweredByFootNote = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.extraSmall};
`