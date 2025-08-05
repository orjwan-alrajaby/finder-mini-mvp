import styled from "styled-components";
import Link from "next/link";
import { media } from "@/components/configs/StyledComponentsConfig/utils";

export const StyledNav = styled.nav<{ $maxWidth?: number }>`
  width: 100%;
  height: 4.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 50;
  color: ${({ theme }) => theme.palette.text};
  background-color: ${({ theme }) => theme.palette.background};
  max-width: ${({ $maxWidth }) => $maxWidth ? $maxWidth+"px" : "100%"};
  margin: 0 auto;

  #nav-links-list {
    display: none;
  };
  ${media.min.lg`
    #nav-links-list {
      display: flex;
    }
  `}
`
export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.inter.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.palette.text};
  line-height: 1.5;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1.125rem;
`