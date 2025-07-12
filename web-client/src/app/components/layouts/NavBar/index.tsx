"use client";

import {AriaToolbarProps, useToolbar} from '@react-aria/toolbar'
import { useRef } from 'react';

import { StyledNav, StyledList, StyledLink } from "./styled";
import LogoLink from "../../ui/LogoLink";
import BurgerMenu from "./BurgerMenu";

const navLinks = [
  { label: "Buy", href: "#" },
  { label: "Sell", href: "#" },
  { label: "Rent", href: "#" },
  { label: "New Buildings", href: "#" },
  { label: "Top agents", href: "#" },
  { label: "Help center", href: "#" },
]

export default function NavBar() {
  return (
    <ToolbarNav aria-label="navigation">
        <LogoLink />
        <BurgerMenu 
          navItems={navLinks}
        />
        <StyledList id="nav-links-list">
          {navLinks.map((link) => (
            <li key={link.label}><StyledLink href={link.href}>{link.label}</StyledLink></li>
          ))}
        </StyledList>
    </ToolbarNav>
  );
}

export function ToolbarNav(props: Readonly<ToolbarNavProps>) {
  let ref = useRef<HTMLDivElement | null>(null);
  let { toolbarProps } = useToolbar(props, ref);

  return (
    <StyledNav {...toolbarProps} ref={ref}>
      {props.children}
    </StyledNav>
  );
}

interface ToolbarNavProps extends AriaToolbarProps {
    children?: React.ReactNode;
}