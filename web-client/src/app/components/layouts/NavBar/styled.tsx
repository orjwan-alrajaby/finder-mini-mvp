import styled from "styled-components";
import Link from "next/link";
import { media } from "@/app/StyledComponentsConfig/utils";

export const StyledNav = styled.nav`
  width: 100%;
  height: 76px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
  color: ${({ theme }) => theme.palette.text};

  #nav-links-list {
    display: none;
  }

  ${media.min.lg`
    padding: 0 3rem;
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