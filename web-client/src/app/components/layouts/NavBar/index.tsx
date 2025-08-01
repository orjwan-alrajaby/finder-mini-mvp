"use client";

import {AriaToolbarProps, useToolbar} from '@react-aria/toolbar'
import { useMemo, useRef } from 'react';
import { useParams } from 'next/navigation';

import { StyledNav, StyledList, StyledLink } from "./styled";
import LogoLink from "../../ui/LogoLink";
import BurgerMenu from "./BurgerMenu";


export default function NavBar() {
  const navLinks = [
  { label: "Buy", href: "#" },
  { label: "Sell", href: "#" },
  { label: "Rent", href: "#" },
  { label: "New Buildings", href: "#" },
  { label: "Top agents", href: "#" },
  { label: "Help center", href: "#" },
]

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
  const params = useParams();
  const maxWidth = useMemo(() => { // TODO: maybe figure out a better way to handle this
    if (params.id) {
      return 1296;
    }
    return 1920;
  }, [params.id]);

  return (
    <StyledNav {...toolbarProps} ref={ref} $maxWidth={maxWidth}>
      {props.children}
    </StyledNav>
  );
}

interface ToolbarNavProps extends AriaToolbarProps {
    children?: React.ReactNode;
}