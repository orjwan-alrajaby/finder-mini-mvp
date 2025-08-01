import { media } from "@/app/StyledComponentsConfig/utils";
import styled from "styled-components";

export const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1824px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.palette.background};
  
  ${media.min.xl`
    padding: 0 3rem;
  `}
`;

export const StyledMain = styled.main`
  padding-top: 2rem;
  min-height: calc(100vh - (4.75rem + 25.7rem)); /* height = 100vh - NavBar + Footer height */
`