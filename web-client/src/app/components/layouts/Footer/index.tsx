"use client"

import {AriaToolbarProps, useToolbar} from '@react-aria/toolbar'
import { useRef } from 'react';
import LogoLink from '../../ui/LogoLink';
import { StyledFooter, StyledSection, StyledArticle, StyledList, StyledH4, StyledGroup, CopyRightsFootNote, PoweredByFootNote } from "./styled";
import Image from "next/image";

function LinksList({
  title,
  links = []
}: Readonly<{
  title: string;
  links: string[];
}>) {
  return (
    <StyledArticle>
      <StyledH4>{title}</StyledH4>
      <StyledList>
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </StyledList>
    </StyledArticle>
  );
}

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <ToolbarFooter>
      <StyledSection>
        <StyledGroup>
          <LogoLink />
          <StyledList>
            <li><Image src="/icons/mail.svg" alt="" width={16} height={16} /> <a href="mailto:contact@example.com">contact@example.com</a></li>
            <li><Image src="/icons/phone.svg" alt="" width={16} height={16} /> <a href="tel:+1 50 537 53 082">+1 50 537 53 082</a></li>
          </StyledList>
        </StyledGroup>
        <LinksList 
            title="Quick Links"
            links={[
              "Daily rental",
              "Long-term rental",
              "Buy property",
              "Sell property",
              "Popular offers"
            ]}
          />
          <LinksList 
            title="Profile"
            links={[
              "My account",
              "My listings",
              "Add listings",
              "Help center",
              "Privacy policy"
            ]}
          />
      </StyledSection>
      <section>
        <CopyRightsFootNote>&copy; {currentYear} Finder. All rights reserved.</CopyRightsFootNote>
        <PoweredByFootNote>Powered by Next.js and React Aria</PoweredByFootNote>
      </section>
    </ToolbarFooter>
  );
}

export function ToolbarFooter(props: Readonly<ToolbarFooterProps>) {
  let ref = useRef<HTMLDivElement | null>(null);
  let { toolbarProps } = useToolbar(props, ref);

  return (
    <StyledFooter {...toolbarProps} ref={ref}>
      {props.children}
    </StyledFooter>
  );
}

interface ToolbarFooterProps extends AriaToolbarProps {
  children?: React.ReactNode;
}