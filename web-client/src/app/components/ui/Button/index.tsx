'use client';

import { StyledPrimaryBtn, StyledPrimaryLink } from "./styled";

type Props = {
    type: "button" | "link";
    href?: string;
    label: string;
    size?: 'md' | 'lg';
}

export default function Button({type, href, label, size = "lg"}: Readonly<Props>) {
    if (type === "link" && href) { 
        return <StyledPrimaryLink href={href} $size={size}>{label}</StyledPrimaryLink>
    }
    return <StyledPrimaryBtn $size={size}>{label}</StyledPrimaryBtn>
}