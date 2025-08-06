'use client'; // TODO: look into making this a server component;

import { ReactNode } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { StyledAppWrapper, StyledMain } from './styled';

export default function AppWrapper({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <StyledAppWrapper>
      <NavBar />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledAppWrapper>
  );
}
