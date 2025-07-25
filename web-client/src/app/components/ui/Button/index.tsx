'use client';

import { StyledPrimaryBtn, StyledPrimaryLink } from "./styled";

type Props = {
    type: "button" | "link";
    href?: string;
    label: string;
}

export default function Button({type, href, label }: Readonly<Props>) {
    if (type === "link" && href) { 
        return <StyledPrimaryLink href={href}>{label}</StyledPrimaryLink>
    }
    return <StyledPrimaryBtn>{label}</StyledPrimaryBtn>
}