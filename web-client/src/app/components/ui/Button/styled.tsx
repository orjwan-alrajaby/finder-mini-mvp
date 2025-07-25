import styled, { css } from "styled-components";
import { Button } from "react-aria-components";
import Link from "next/link";

const sharedBaseStyles = css`
    width: 100%;
    max-width: 352px;
    height: 48px;
    padding: 12px 0px;
    text-align: center;
    font-size: ${({theme}) => theme.fonts.sizes.medium};
    font-family: ${({theme}) => theme.fonts.inter.medium};
    font-weight: 500;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
`

const StyledBaseButton = styled(Button)`
    ${sharedBaseStyles};
`

const StyledBaseLink = styled(Link)`
    ${sharedBaseStyles};
`

const sharedPrimaryStyles = css`
    color: ${({theme}) => theme.palette.text};
    background-color: ${({theme}) => theme.palette.accent};
`

export const StyledPrimaryBtn = styled(StyledBaseButton)`
    ${sharedPrimaryStyles};
`

export const StyledPrimaryLink = styled(StyledBaseLink)`
    ${sharedPrimaryStyles};
`