import styled from "styled-components";
import { media } from "@/components/configs/StyledComponentsConfig/utils";

export const StyledGridList = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-row-gap: 1.5rem;
    width: 100%;
    max-width: 100%;
    ${media.min.sm`
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 1.5rem;
    `}
    ${media.min.lg`
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    `}
    ${media.min.xl`
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    `}
    ${media.min["2xl"]`
        grid-template-columns: repeat(4, 1fr);
    `}
    ${media.min["3xl"]`
        grid-template-columns: repeat(4, 1fr);
    `}
    ${media.min["4xl"]`
        grid-template-columns: repeat(5, 1fr);
    `}
`